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
        "name": "callIt",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 46
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 47,
            "end": 48
          }
        ],
        "start": 46,
        "end": 49
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "produce",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 68
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 74,
                              "end": 80
                            },
                            "start": 72,
                            "end": 80
                          },
                          "start": 71,
                          "end": 80
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 85,
                            "end": 86
                          },
                          "typeArguments": null,
                          "start": 85,
                          "end": 86
                        },
                        "start": 82,
                        "end": 86
                      },
                      "start": 70,
                      "end": 86
                    },
                    "start": 68,
                    "end": 86
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 87
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 99
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
                          "name": "x",
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
                                "start": 105,
                                "end": 106
                              },
                              "typeArguments": null,
                              "start": 105,
                              "end": 106
                            },
                            "start": 103,
                            "end": 106
                          },
                          "start": 102,
                          "end": 106
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 111,
                          "end": 115
                        },
                        "start": 108,
                        "end": 115
                      },
                      "start": 101,
                      "end": 115
                    },
                    "start": 99,
                    "end": 115
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 92,
                  "end": 115
                }
              ],
              "start": 55,
              "end": 117
            },
            "start": 53,
            "end": 117
          },
          "start": 50,
          "end": 117
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        },
        "start": 118,
        "end": 124
      },
      "body": null,
      "expression": false,
      "start": 23,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 133
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
                  "name": "produce",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 147
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 155,
                    "end": 156
                  },
                  "id": null,
                  "generator": false,
                  "start": 149,
                  "end": 156
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 156
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 169
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 177
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 185
                      },
                      "optional": false,
                      "computed": false,
                      "start": 176,
                      "end": 185
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 176,
                    "end": 187
                  },
                  "id": null,
                  "generator": false,
                  "start": 171,
                  "end": 187
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 162,
                "end": 187
              }
            ],
            "start": 134,
            "end": 189
          }
        ],
        "optional": false,
        "start": 127,
        "end": 190
      },
      "directive": null,
      "start": 127,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 199
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
                  "name": "produce",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 213
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 217
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 221,
                    "end": 222
                  },
                  "id": null,
                  "generator": false,
                  "start": 215,
                  "end": 222
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 222
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 235
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 238
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 243
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 244,
                        "end": 251
                      },
                      "optional": false,
                      "computed": false,
                      "start": 242,
                      "end": 251
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 242,
                    "end": 253
                  },
                  "id": null,
                  "generator": false,
                  "start": 237,
                  "end": 253
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 228,
                "end": 253
              }
            ],
            "start": 200,
            "end": 256
          }
        ],
        "optional": false,
        "start": 193,
        "end": 257
      },
      "directive": null,
      "start": 193,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 266
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
                  "name": "produce",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 280
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
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 300,
                          "end": 301
                        },
                        "start": 293,
                        "end": 302
                      }
                    ],
                    "start": 283,
                    "end": 308
                  },
                  "expression": false,
                  "start": 280,
                  "end": 308
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 273,
                "end": 308
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 321
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 324
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 329
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 337
                      },
                      "optional": false,
                      "computed": false,
                      "start": 328,
                      "end": 337
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 328,
                    "end": 339
                  },
                  "id": null,
                  "generator": false,
                  "start": 323,
                  "end": 339
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 314,
                "end": 339
              }
            ],
            "start": 267,
            "end": 341
          }
        ],
        "optional": false,
        "start": 260,
        "end": 342
      },
      "directive": null,
      "start": 260,
      "end": 343
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callItT",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 369
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 371
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 371
          }
        ],
        "start": 369,
        "end": 372
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 383,
                          "end": 389
                        },
                        "start": 381,
                        "end": 389
                      },
                      "start": 380,
                      "end": 389
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 394,
                        "end": 395
                      },
                      "typeArguments": null,
                      "start": 394,
                      "end": 395
                    },
                    "start": 391,
                    "end": 395
                  },
                  "start": 379,
                  "end": 395
                },
                {
                  "type": "TSFunctionType",
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 401,
                            "end": 402
                          },
                          "typeArguments": null,
                          "start": 401,
                          "end": 402
                        },
                        "start": 399,
                        "end": 402
                      },
                      "start": 398,
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
                  "start": 397,
                  "end": 411
                }
              ],
              "start": 378,
              "end": 412
            },
            "start": 376,
            "end": 412
          },
          "start": 373,
          "end": 412
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 415,
          "end": 419
        },
        "start": 413,
        "end": 419
      },
      "body": null,
      "expression": false,
      "start": 345,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callItT",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 437,
                  "end": 438
                },
                "id": null,
                "generator": false,
                "start": 431,
                "end": 438
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 446
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 454
                    },
                    "optional": false,
                    "computed": false,
                    "start": 445,
                    "end": 454
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 445,
                  "end": 456
                },
                "id": null,
                "generator": false,
                "start": 440,
                "end": 456
              }
            ],
            "start": 430,
            "end": 457
          }
        ],
        "optional": false,
        "start": 422,
        "end": 458
      },
      "directive": null,
      "start": 422,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callItT",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 467
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 471
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 475,
                  "end": 476
                },
                "id": null,
                "generator": false,
                "start": 469,
                "end": 476
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 479
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 484
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 492
                    },
                    "optional": false,
                    "computed": false,
                    "start": 483,
                    "end": 492
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 483,
                  "end": 494
                },
                "id": null,
                "generator": false,
                "start": 478,
                "end": 494
              }
            ],
            "start": 468,
            "end": 495
          }
        ],
        "optional": false,
        "start": 460,
        "end": 496
      },
      "directive": null,
      "start": 460,
      "end": 497
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 542
      },
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
              "start": 543,
              "end": 544
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 543,
            "end": 544
          }
        ],
        "start": 542,
        "end": 545
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "retrieveGeneric",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 567
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
                    "name": "parameter",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 581,
                        "end": 587
                      },
                      "start": 579,
                      "end": 587
                    },
                    "start": 570,
                    "end": 587
                  }
                ],
                "returnType": {
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
                  "start": 589,
                  "end": 593
                },
                "start": 569,
                "end": 593
              },
              "start": 567,
              "end": 593
            },
            "accessibility": null,
            "static": false,
            "start": 552,
            "end": 594
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "operateWithGeneric",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 617
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
                    "name": "generic",
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
                          "start": 629,
                          "end": 630
                        },
                        "typeArguments": null,
                        "start": 629,
                        "end": 630
                      },
                      "start": 627,
                      "end": 630
                    },
                    "start": 620,
                    "end": 630
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 635,
                    "end": 641
                  },
                  "start": 632,
                  "end": 641
                },
                "start": 619,
                "end": 641
              },
              "start": 617,
              "end": 641
            },
            "accessibility": null,
            "static": false,
            "start": 599,
            "end": 641
          }
        ],
        "start": 546,
        "end": 643
      },
      "declare": false,
      "start": 521,
      "end": 643
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
            "name": "inferTypeFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 651,
            "end": 662
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
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
                    "start": 666,
                    "end": 667
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 666,
                  "end": 667
                }
              ],
              "start": 665,
              "end": 668
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "generic",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyInterface",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 678,
                      "end": 689
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 690,
                            "end": 691
                          },
                          "typeArguments": null,
                          "start": 690,
                          "end": 691
                        }
                      ],
                      "start": 689,
                      "end": 692
                    },
                    "start": 678,
                    "end": 692
                  },
                  "start": 676,
                  "end": 692
                },
                "start": 669,
                "end": 692
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "generic",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 704
            },
            "id": null,
            "generator": false,
            "start": 665,
            "end": 704
          },
          "definite": false,
          "start": 651,
          "end": 704
        }
      ],
      "declare": false,
      "start": 645,
      "end": 705
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
            "name": "myGeneric",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 722
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inferTypeFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 736
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
                      "name": "retrieveGeneric",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 758
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parameter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 769
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 773,
                        "end": 774
                      },
                      "id": null,
                      "generator": false,
                      "start": 760,
                      "end": 774
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 743,
                    "end": 774
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "operateWithGeneric",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 780,
                      "end": 798
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "generic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 800,
                          "end": 807
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "generic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 811,
                            "end": 818
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 819,
                            "end": 826
                          },
                          "optional": false,
                          "computed": false,
                          "start": 811,
                          "end": 826
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 811,
                        "end": 828
                      },
                      "id": null,
                      "generator": false,
                      "start": 800,
                      "end": 828
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 780,
                    "end": 828
                  }
                ],
                "start": 737,
                "end": 830
              }
            ],
            "optional": false,
            "start": 725,
            "end": 831
          },
          "definite": false,
          "start": 713,
          "end": 831
        }
      ],
      "declare": false,
      "start": 707,
      "end": 832
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 864
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 866
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 865,
            "end": 866
          }
        ],
        "start": 864,
        "end": 867
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "mutations",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 873,
                    "end": 882
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 884,
                        "end": 885
                      },
                      "typeArguments": null,
                      "start": 884,
                      "end": 885
                    },
                    "start": 882,
                    "end": 885
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 873,
                  "end": 886
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 894
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
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 900,
                                "end": 901
                              },
                              "typeArguments": null,
                              "start": 900,
                              "end": 901
                            },
                            "start": 898,
                            "end": 901
                          },
                          "start": 897,
                          "end": 901
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 906,
                          "end": 910
                        },
                        "start": 903,
                        "end": 910
                      },
                      "start": 896,
                      "end": 910
                    },
                    "start": 894,
                    "end": 910
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 888,
                  "end": 910
                }
              ],
              "start": 871,
              "end": 912
            },
            "start": 869,
            "end": 912
          },
          "start": 868,
          "end": 912
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 914,
        "end": 917
      },
      "expression": false,
      "start": 851,
      "end": 917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "make",
          "optional": false,
          "typeAnnotation": null,
          "start": 919,
          "end": 923
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
                  "name": "mutations",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 938
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 949,
                        "end": 952
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
                          "start": 955,
                          "end": 958
                        },
                        "expression": false,
                        "start": 952,
                        "end": 958
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 949,
                      "end": 958
                    }
                  ],
                  "start": 940,
                  "end": 963
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 929,
                "end": 963
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 974
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 977,
                      "end": 978
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 985,
                              "end": 986
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 987,
                              "end": 990
                            },
                            "optional": false,
                            "computed": false,
                            "start": 985,
                            "end": 990
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 985,
                          "end": 992
                        },
                        "directive": null,
                        "start": 985,
                        "end": 992
                      }
                    ],
                    "start": 983,
                    "end": 994
                  },
                  "id": null,
                  "generator": false,
                  "start": 976,
                  "end": 994
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 968,
                "end": 994
              }
            ],
            "start": 924,
            "end": 996
          }
        ],
        "optional": false,
        "start": 919,
        "end": 997
      },
      "directive": null,
      "start": 919,
      "end": 998
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1042
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1043,
              "end": 1044
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1043,
            "end": 1044
          }
        ],
        "start": 1042,
        "end": 1045
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1057,
                    "end": 1058
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1060,
                        "end": 1061
                      },
                      "typeArguments": null,
                      "start": 1060,
                      "end": 1061
                    },
                    "start": 1058,
                    "end": 1061
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1057,
                  "end": 1062
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1063,
                    "end": 1064
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1070,
                                "end": 1071
                              },
                              "typeArguments": null,
                              "start": 1070,
                              "end": 1071
                            },
                            "start": 1068,
                            "end": 1071
                          },
                          "start": 1067,
                          "end": 1071
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1076,
                          "end": 1080
                        },
                        "start": 1073,
                        "end": 1080
                      },
                      "start": 1066,
                      "end": 1080
                    },
                    "start": 1064,
                    "end": 1080
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1063,
                  "end": 1080
                }
              ],
              "start": 1055,
              "end": 1082
            },
            "start": 1053,
            "end": 1082
          },
          "start": 1046,
          "end": 1082
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1085,
          "end": 1089
        },
        "start": 1083,
        "end": 1089
      },
      "body": null,
      "expression": false,
      "start": 1022,
      "end": 1090
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1092,
          "end": 1095
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1103
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 1120,
                          "end": 1122
                        },
                        "start": 1113,
                        "end": 1122
                      }
                    ],
                    "start": 1111,
                    "end": 1124
                  },
                  "id": null,
                  "generator": false,
                  "start": 1105,
                  "end": 1124
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1102,
                "end": 1124
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1131
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1132,
                      "end": 1133
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1135,
                    "end": 1137
                  },
                  "expression": false,
                  "start": 1131,
                  "end": 1137
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1130,
                "end": 1137
              }
            ],
            "start": 1096,
            "end": 1140
          }
        ],
        "optional": false,
        "start": 1092,
        "end": 1141
      },
      "directive": null,
      "start": 1092,
      "end": 1142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1147
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1155
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
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 1178,
                          "end": 1180
                        },
                        "start": 1171,
                        "end": 1180
                      }
                    ],
                    "start": 1169,
                    "end": 1182
                  },
                  "expression": false,
                  "start": 1157,
                  "end": 1182
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1154,
                "end": 1182
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1188,
                  "end": 1189
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1190,
                      "end": 1191
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1193,
                    "end": 1195
                  },
                  "expression": false,
                  "start": 1189,
                  "end": 1195
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1188,
                "end": 1195
              }
            ],
            "start": 1148,
            "end": 1198
          }
        ],
        "optional": false,
        "start": 1144,
        "end": 1199
      },
      "directive": null,
      "start": 1144,
      "end": 1200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1202,
          "end": 1205
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1213
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
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 1225,
                          "end": 1227
                        },
                        "start": 1218,
                        "end": 1227
                      }
                    ],
                    "start": 1216,
                    "end": 1229
                  },
                  "expression": false,
                  "start": 1213,
                  "end": 1229
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1212,
                "end": 1229
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1235,
                  "end": 1236
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1237,
                      "end": 1238
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1240,
                    "end": 1242
                  },
                  "expression": false,
                  "start": 1236,
                  "end": 1242
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1235,
                "end": 1242
              }
            ],
            "start": 1206,
            "end": 1245
          }
        ],
        "optional": false,
        "start": 1202,
        "end": 1246
      },
      "directive": null,
      "start": 1202,
      "end": 1247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain",
        "optional": false,
        "typeAnnotation": null,
        "start": 1276,
        "end": 1281
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1284
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1282,
            "end": 1284
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1288
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1286,
            "end": 1288
          }
        ],
        "start": 1281,
        "end": 1289
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1298,
              "end": 1299
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1305
                },
                "typeArguments": null,
                "start": 1303,
                "end": 1305
              },
              "start": 1301,
              "end": 1305
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1298,
            "end": 1306
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1311,
              "end": 1312
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1318
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1318
                  },
                  "start": 1314,
                  "end": 1318
                },
                "start": 1313,
                "end": 1318
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1323
                },
                "typeArguments": null,
                "start": 1321,
                "end": 1323
              },
              "start": 1319,
              "end": 1323
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1311,
            "end": 1324
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1330
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1334,
                      "end": 1336
                    },
                    "typeArguments": null,
                    "start": 1334,
                    "end": 1336
                  },
                  "start": 1332,
                  "end": 1336
                },
                "start": 1331,
                "end": 1336
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1339,
                "end": 1343
              },
              "start": 1337,
              "end": 1343
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1329,
            "end": 1344
          }
        ],
        "start": 1292,
        "end": 1346
      },
      "declare": false,
      "start": 1271,
      "end": 1347
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1358,
        "end": 1362
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
              "name": "R1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1363,
            "end": 1365
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1367,
              "end": 1369
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1367,
            "end": 1369
          }
        ],
        "start": 1362,
        "end": 1370
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Chain",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1381
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1382,
                      "end": 1384
                    },
                    "typeArguments": null,
                    "start": 1382,
                    "end": 1384
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1386,
                      "end": 1388
                    },
                    "typeArguments": null,
                    "start": 1386,
                    "end": 1388
                  }
                ],
                "start": 1381,
                "end": 1389
              },
              "start": 1376,
              "end": 1389
            },
            "start": 1374,
            "end": 1389
          },
          "start": 1371,
          "end": 1389
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1391,
        "end": 1393
      },
      "expression": false,
      "start": 1349,
      "end": 1393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1395,
          "end": 1399
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1407
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1415,
                    "end": 1416
                  },
                  "id": null,
                  "generator": false,
                  "start": 1409,
                  "end": 1416
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1406,
                "end": 1416
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1422,
                  "end": 1423
                },
                "value": {
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
                      "start": 1426,
                      "end": 1427
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1432,
                    "end": 1435
                  },
                  "id": null,
                  "generator": false,
                  "start": 1425,
                  "end": 1435
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1422,
                "end": 1435
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1441,
                  "end": 1442
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1445,
                      "end": 1446
                    }
                  ],
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
                                  "type": "TSStringKeyword",
                                  "start": 1470,
                                  "end": 1476
                                },
                                "start": 1468,
                                "end": 1476
                              },
                              "start": 1467,
                              "end": 1476
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1479,
                              "end": 1480
                            },
                            "definite": false,
                            "start": 1467,
                            "end": 1480
                          }
                        ],
                        "declare": false,
                        "start": 1461,
                        "end": 1481
                      }
                    ],
                    "start": 1451,
                    "end": 1487
                  },
                  "id": null,
                  "generator": false,
                  "start": 1444,
                  "end": 1487
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1441,
                "end": 1487
              }
            ],
            "start": 1400,
            "end": 1489
          }
        ],
        "optional": false,
        "start": 1395,
        "end": 1490
      },
      "directive": null,
      "start": 1395,
      "end": 1491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1493,
          "end": 1497
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1504,
                  "end": 1505
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1513,
                    "end": 1514
                  },
                  "id": null,
                  "generator": false,
                  "start": 1507,
                  "end": 1514
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1504,
                "end": 1514
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1520,
                  "end": 1521
                },
                "value": {
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
                      "start": 1524,
                      "end": 1525
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1530,
                    "end": 1531
                  },
                  "id": null,
                  "generator": false,
                  "start": 1523,
                  "end": 1531
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1520,
                "end": 1531
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1537,
                  "end": 1538
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1541,
                      "end": 1542
                    }
                  ],
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
                                  "type": "TSNumberKeyword",
                                  "start": 1566,
                                  "end": 1572
                                },
                                "start": 1564,
                                "end": 1572
                              },
                              "start": 1563,
                              "end": 1572
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1575,
                              "end": 1576
                            },
                            "definite": false,
                            "start": 1563,
                            "end": 1576
                          }
                        ],
                        "declare": false,
                        "start": 1557,
                        "end": 1577
                      }
                    ],
                    "start": 1547,
                    "end": 1583
                  },
                  "id": null,
                  "generator": false,
                  "start": 1540,
                  "end": 1583
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1537,
                "end": 1583
              }
            ],
            "start": 1498,
            "end": 1585
          }
        ],
        "optional": false,
        "start": 1493,
        "end": 1586
      },
      "directive": null,
      "start": 1493,
      "end": 1587
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 1617,
        "end": 1624
      },
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
              "start": 1625,
              "end": 1626
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 1629,
              "end": 1632
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1625,
            "end": 1632
          }
        ],
        "start": 1624,
        "end": 1633
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1652
            },
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
                  "start": 1655,
                  "end": 1656
                },
                "typeArguments": null,
                "start": 1655,
                "end": 1656
              },
              "start": 1653,
              "end": 1656
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1640,
            "end": 1657
          }
        ],
        "start": 1634,
        "end": 1659
      },
      "abstract": false,
      "declare": false,
      "start": 1611,
      "end": 1659
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrappedMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1666,
        "end": 1676
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 1679,
          "end": 1685
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1686,
              "end": 1692
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Wrapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1701
              },
              "typeArguments": null,
              "start": 1694,
              "end": 1701
            }
          ],
          "start": 1685,
          "end": 1702
        },
        "start": 1679,
        "end": 1702
      },
      "declare": false,
      "start": 1661,
      "end": 1703
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1709,
        "end": 1715
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1716,
              "end": 1717
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1726,
                "end": 1736
              },
              "typeArguments": null,
              "start": 1726,
              "end": 1736
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1716,
            "end": 1736
          }
        ],
        "start": 1715,
        "end": 1737
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1747,
          "end": 1748
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1758,
              "end": 1759
            },
            "typeArguments": null,
            "start": 1758,
            "end": 1759
          },
          "start": 1752,
          "end": 1759
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1762,
                "end": 1763
              },
              "typeArguments": null,
              "start": 1762,
              "end": 1763
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1764,
                "end": 1765
              },
              "typeArguments": null,
              "start": 1764,
              "end": 1765
            },
            "start": 1762,
            "end": 1766
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wrapper",
              "optional": false,
              "typeAnnotation": null,
              "start": 1775,
              "end": 1782
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1789,
                      "end": 1790
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1789,
                    "end": 1790
                  },
                  "start": 1783,
                  "end": 1790
                }
              ],
              "start": 1782,
              "end": 1791
            },
            "start": 1775,
            "end": 1791
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1795
            },
            "typeArguments": null,
            "start": 1794,
            "end": 1795
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1798,
            "end": 1803
          },
          "start": 1762,
          "end": 1803
        },
        "optional": false,
        "readonly": null,
        "start": 1740,
        "end": 1806
      },
      "declare": false,
      "start": 1704,
      "end": 1807
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappingComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 1814,
        "end": 1830
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1831,
              "end": 1832
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1851
              },
              "typeArguments": null,
              "start": 1841,
              "end": 1851
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1831,
            "end": 1851
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1853,
              "end": 1854
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1863,
                "end": 1873
              },
              "typeArguments": null,
              "start": 1863,
              "end": 1873
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1853,
            "end": 1873
          }
        ],
        "start": 1830,
        "end": 1874
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "typeAnnotation": null,
              "start": 1883,
              "end": 1888
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
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
                      "name": "inputs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1894,
                      "end": 1900
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1902,
                          "end": 1903
                        },
                        "typeArguments": null,
                        "start": 1902,
                        "end": 1903
                      },
                      "start": 1900,
                      "end": 1903
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1894,
                    "end": 1904
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "outputs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1905,
                      "end": 1912
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1914,
                          "end": 1915
                        },
                        "typeArguments": null,
                        "start": 1914,
                        "end": 1915
                      },
                      "start": 1912,
                      "end": 1915
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1905,
                    "end": 1915
                  }
                ],
                "start": 1892,
                "end": 1917
              },
              "start": 1890,
              "end": 1917
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1883,
            "end": 1918
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 1923,
              "end": 1926
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
                    "name": "inputs",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Unwrap",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1938,
                          "end": 1944
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1945,
                                "end": 1946
                              },
                              "typeArguments": null,
                              "start": 1945,
                              "end": 1946
                            }
                          ],
                          "start": 1944,
                          "end": 1947
                        },
                        "start": 1938,
                        "end": 1947
                      },
                      "start": 1936,
                      "end": 1947
                    },
                    "start": 1930,
                    "end": 1947
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Unwrap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1952,
                      "end": 1958
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1959,
                            "end": 1960
                          },
                          "typeArguments": null,
                          "start": 1959,
                          "end": 1960
                        }
                      ],
                      "start": 1958,
                      "end": 1961
                    },
                    "start": 1952,
                    "end": 1961
                  },
                  "start": 1949,
                  "end": 1961
                },
                "start": 1929,
                "end": 1961
              },
              "start": 1927,
              "end": 1961
            },
            "accessibility": null,
            "static": false,
            "start": 1923,
            "end": 1962
          }
        ],
        "start": 1877,
        "end": 1964
      },
      "declare": false,
      "start": 1809,
      "end": 1965
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMappingComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 1984,
        "end": 2006
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
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 2007,
              "end": 2008
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 2017,
                "end": 2027
              },
              "typeArguments": null,
              "start": 2017,
              "end": 2027
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2007,
            "end": 2027
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2029,
              "end": 2030
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 2039,
                "end": 2049
              },
              "typeArguments": null,
              "start": 2039,
              "end": 2049
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2029,
            "end": 2049
          }
        ],
        "start": 2006,
        "end": 2050
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MappingComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 2056,
                "end": 2072
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2073,
                      "end": 2074
                    },
                    "typeArguments": null,
                    "start": 2073,
                    "end": 2074
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2076,
                      "end": 2077
                    },
                    "typeArguments": null,
                    "start": 2076,
                    "end": 2077
                  }
                ],
                "start": 2072,
                "end": 2078
              },
              "start": 2056,
              "end": 2078
            },
            "start": 2054,
            "end": 2078
          },
          "start": 2051,
          "end": 2078
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2081,
          "end": 2085
        },
        "start": 2079,
        "end": 2085
      },
      "body": null,
      "expression": false,
      "start": 1967,
      "end": 2086
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMappingComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 2088,
          "end": 2110
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
                  "name": "setup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2117,
                  "end": 2122
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
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inputs",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2156,
                                "end": 2162
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "num",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2182,
                                      "end": 2185
                                    },
                                    "value": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2191,
                                        "end": 2198
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSNumberKeyword",
                                            "start": 2199,
                                            "end": 2205
                                          }
                                        ],
                                        "start": 2198,
                                        "end": 2206
                                      },
                                      "arguments": [],
                                      "start": 2187,
                                      "end": 2208
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 2182,
                                    "end": 2208
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "str",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2226,
                                      "end": 2229
                                    },
                                    "value": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2235,
                                        "end": 2242
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 2243,
                                            "end": 2249
                                          }
                                        ],
                                        "start": 2242,
                                        "end": 2250
                                      },
                                      "arguments": [],
                                      "start": 2231,
                                      "end": 2252
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 2226,
                                    "end": 2252
                                  }
                                ],
                                "start": 2164,
                                "end": 2266
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2156,
                              "end": 2266
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "outputs",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2280,
                                "end": 2287
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bool",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2307,
                                      "end": 2311
                                    },
                                    "value": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2317,
                                        "end": 2324
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSBooleanKeyword",
                                            "start": 2325,
                                            "end": 2332
                                          }
                                        ],
                                        "start": 2324,
                                        "end": 2333
                                      },
                                      "arguments": [],
                                      "start": 2313,
                                      "end": 2335
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 2307,
                                    "end": 2335
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "str",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2353,
                                      "end": 2356
                                    },
                                    "value": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2362,
                                        "end": 2369
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 2370,
                                            "end": 2376
                                          }
                                        ],
                                        "start": 2369,
                                        "end": 2377
                                      },
                                      "arguments": [],
                                      "start": 2358,
                                      "end": 2379
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 2353,
                                    "end": 2379
                                  }
                                ],
                                "start": 2289,
                                "end": 2393
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2280,
                              "end": 2393
                            }
                          ],
                          "start": 2142,
                          "end": 2403
                        },
                        "start": 2135,
                        "end": 2404
                      }
                    ],
                    "start": 2125,
                    "end": 2410
                  },
                  "expression": false,
                  "start": 2122,
                  "end": 2410
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2117,
                "end": 2410
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2416,
                  "end": 2419
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
                      "name": "inputs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2420,
                      "end": 2426
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bool",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2459,
                                "end": 2463
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "inputs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2465,
                                  "end": 2471
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nonexistent",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2472,
                                  "end": 2483
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2465,
                                "end": 2483
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2459,
                              "end": 2483
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2497,
                                "end": 2500
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "inputs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2502,
                                  "end": 2508
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "num",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2509,
                                  "end": 2512
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2502,
                                "end": 2512
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2497,
                              "end": 2512
                            }
                          ],
                          "start": 2445,
                          "end": 2540
                        },
                        "start": 2438,
                        "end": 2540
                      }
                    ],
                    "start": 2428,
                    "end": 2546
                  },
                  "expression": false,
                  "start": 2419,
                  "end": 2546
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2416,
                "end": 2546
              }
            ],
            "start": 2111,
            "end": 2548
          }
        ],
        "optional": false,
        "start": 2088,
        "end": 2549
      },
      "directive": null,
      "start": 2088,
      "end": 2550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simplified",
        "optional": false,
        "typeAnnotation": null,
        "start": 2583,
        "end": 2593
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2594,
              "end": 2595
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2594,
            "end": 2595
          }
        ],
        "start": 2593,
        "end": 2596
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
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
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2606,
                    "end": 2615
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2623,
                            "end": 2624
                          },
                          "typeArguments": null,
                          "start": 2623,
                          "end": 2624
                        },
                        "start": 2620,
                        "end": 2624
                      },
                      "start": 2617,
                      "end": 2624
                    },
                    "start": 2615,
                    "end": 2624
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2606,
                  "end": 2625
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "receiver",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2626,
                    "end": 2634
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
                          "name": "t",
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
                                "start": 2640,
                                "end": 2641
                              },
                              "typeArguments": null,
                              "start": 2640,
                              "end": 2641
                            },
                            "start": 2638,
                            "end": 2641
                          },
                          "start": 2637,
                          "end": 2641
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2646,
                          "end": 2649
                        },
                        "start": 2643,
                        "end": 2649
                      },
                      "start": 2636,
                      "end": 2649
                    },
                    "start": 2634,
                    "end": 2649
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2626,
                  "end": 2649
                }
              ],
              "start": 2604,
              "end": 2651
            },
            "start": 2602,
            "end": 2651
          },
          "start": 2597,
          "end": 2651
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2653,
        "end": 2655
      },
      "expression": false,
      "start": 2574,
      "end": 2655
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whatIWant",
        "optional": false,
        "typeAnnotation": null,
        "start": 2666,
        "end": 2675
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2676,
              "end": 2677
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2676,
            "end": 2677
          }
        ],
        "start": 2675,
        "end": 2678
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
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
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2688,
                    "end": 2697
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
                          "name": "bob",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 2705,
                              "end": 2708
                            },
                            "start": 2703,
                            "end": 2708
                          },
                          "start": 2700,
                          "end": 2708
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2713,
                            "end": 2714
                          },
                          "typeArguments": null,
                          "start": 2713,
                          "end": 2714
                        },
                        "start": 2710,
                        "end": 2714
                      },
                      "start": 2699,
                      "end": 2714
                    },
                    "start": 2697,
                    "end": 2714
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2688,
                  "end": 2715
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "receiver",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2716,
                    "end": 2724
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
                          "name": "t",
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
                                "start": 2730,
                                "end": 2731
                              },
                              "typeArguments": null,
                              "start": 2730,
                              "end": 2731
                            },
                            "start": 2728,
                            "end": 2731
                          },
                          "start": 2727,
                          "end": 2731
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2736,
                          "end": 2739
                        },
                        "start": 2733,
                        "end": 2739
                      },
                      "start": 2726,
                      "end": 2739
                    },
                    "start": 2724,
                    "end": 2739
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2716,
                  "end": 2739
                }
              ],
              "start": 2686,
              "end": 2741
            },
            "start": 2684,
            "end": 2741
          },
          "start": 2679,
          "end": 2741
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2743,
        "end": 2745
      },
      "expression": false,
      "start": 2657,
      "end": 2745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 2756,
        "end": 2765
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2766,
              "end": 2767
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2766,
            "end": 2767
          }
        ],
        "start": 2765,
        "end": 2768
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "generator",
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
                  "name": "bob",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2786,
                      "end": 2789
                    },
                    "start": 2784,
                    "end": 2789
                  },
                  "start": 2781,
                  "end": 2789
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2794,
                    "end": 2795
                  },
                  "typeArguments": null,
                  "start": 2794,
                  "end": 2795
                },
                "start": 2791,
                "end": 2795
              },
              "start": 2780,
              "end": 2795
            },
            "start": 2778,
            "end": 2795
          },
          "start": 2769,
          "end": 2795
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "receiver",
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
                  "name": "t",
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
                        "start": 2811,
                        "end": 2812
                      },
                      "typeArguments": null,
                      "start": 2811,
                      "end": 2812
                    },
                    "start": 2809,
                    "end": 2812
                  },
                  "start": 2808,
                  "end": 2812
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2817,
                  "end": 2820
                },
                "start": 2814,
                "end": 2820
              },
              "start": 2807,
              "end": 2820
            },
            "start": 2805,
            "end": 2820
          },
          "start": 2797,
          "end": 2820
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2822,
        "end": 2824
      },
      "expression": false,
      "start": 2747,
      "end": 2824
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "simplified",
          "optional": false,
          "typeAnnotation": null,
          "start": 2826,
          "end": 2836
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
                  "name": "generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2839,
                  "end": 2848
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 2856,
                    "end": 2859
                  },
                  "id": null,
                  "generator": false,
                  "start": 2850,
                  "end": 2859
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2839,
                "end": 2859
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "receiver",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2861,
                  "end": 2869
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2872,
                      "end": 2873
                    }
                  ],
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
                        "start": 2878,
                        "end": 2885
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2886,
                        "end": 2889
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2878,
                      "end": 2889
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2890,
                          "end": 2891
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 2894,
                          "end": 2895
                        },
                        "start": 2890,
                        "end": 2895
                      }
                    ],
                    "optional": false,
                    "start": 2878,
                    "end": 2896
                  },
                  "id": null,
                  "generator": false,
                  "start": 2871,
                  "end": 2896
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2861,
                "end": 2896
              }
            ],
            "start": 2837,
            "end": 2898
          }
        ],
        "optional": false,
        "start": 2826,
        "end": 2899
      },
      "directive": null,
      "start": 2826,
      "end": 2899
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "whatIWant",
          "optional": false,
          "typeAnnotation": null,
          "start": 2900,
          "end": 2909
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
                  "name": "generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2912,
                  "end": 2921
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bob",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2924,
                      "end": 2927
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bob",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2932,
                      "end": 2935
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2938,
                      "end": 2939
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 2942,
                      "end": 2943
                    },
                    "start": 2932,
                    "end": 2943
                  },
                  "id": null,
                  "generator": false,
                  "start": 2923,
                  "end": 2943
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2912,
                "end": 2943
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "receiver",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2945,
                  "end": 2953
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2956,
                      "end": 2957
                    }
                  ],
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
                        "start": 2962,
                        "end": 2969
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2970,
                        "end": 2973
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2962,
                      "end": 2973
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2974,
                          "end": 2975
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 2978,
                          "end": 2979
                        },
                        "start": 2974,
                        "end": 2979
                      }
                    ],
                    "optional": false,
                    "start": 2962,
                    "end": 2980
                  },
                  "id": null,
                  "generator": false,
                  "start": 2955,
                  "end": 2980
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2945,
                "end": 2980
              }
            ],
            "start": 2910,
            "end": 2982
          }
        ],
        "optional": false,
        "start": 2900,
        "end": 2983
      },
      "directive": null,
      "start": 2900,
      "end": 2983
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 2984,
          "end": 2993
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
                "name": "bob",
                "optional": false,
                "typeAnnotation": null,
                "start": 2995,
                "end": 2998
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "bob",
                "optional": false,
                "typeAnnotation": null,
                "start": 3003,
                "end": 3006
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3009,
                "end": 3010
              },
              "alternate": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3013,
                "end": 3014
              },
              "start": 3003,
              "end": 3014
            },
            "id": null,
            "generator": false,
            "start": 2994,
            "end": 3014
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 3017,
                "end": 3018
              }
            ],
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
                  "start": 3023,
                  "end": 3030
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3031,
                  "end": 3034
                },
                "optional": false,
                "computed": false,
                "start": 3023,
                "end": 3034
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3035,
                    "end": 3036
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3039,
                    "end": 3040
                  },
                  "start": 3035,
                  "end": 3040
                }
              ],
              "optional": false,
              "start": 3023,
              "end": 3041
            },
            "id": null,
            "generator": false,
            "start": 3016,
            "end": 3041
          }
        ],
        "optional": false,
        "start": 2984,
        "end": 3042
      },
      "directive": null,
      "start": 2984,
      "end": 3042
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opts",
        "optional": false,
        "typeAnnotation": null,
        "start": 3076,
        "end": 3080
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TParams",
              "optional": false,
              "typeAnnotation": null,
              "start": 3081,
              "end": 3088
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3081,
            "end": 3088
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 3090,
              "end": 3095
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3090,
            "end": 3095
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 3097,
              "end": 3104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3097,
            "end": 3104
          }
        ],
        "start": 3080,
        "end": 3105
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fetch",
              "optional": false,
              "typeAnnotation": null,
              "start": 3112,
              "end": 3117
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
                          "name": "TParams",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3128,
                          "end": 3135
                        },
                        "typeArguments": null,
                        "start": 3128,
                        "end": 3135
                      },
                      "start": 3126,
                      "end": 3135
                    },
                    "start": 3120,
                    "end": 3135
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3142,
                        "end": 3148
                      },
                      "start": 3140,
                      "end": 3148
                    },
                    "start": 3137,
                    "end": 3148
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TDone",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3153,
                      "end": 3158
                    },
                    "typeArguments": null,
                    "start": 3153,
                    "end": 3158
                  },
                  "start": 3150,
                  "end": 3158
                },
                "start": 3119,
                "end": 3158
              },
              "start": 3117,
              "end": 3158
            },
            "accessibility": null,
            "static": false,
            "start": 3112,
            "end": 3159
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 3164,
              "end": 3167
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
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TDone",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3176,
                          "end": 3181
                        },
                        "typeArguments": null,
                        "start": 3176,
                        "end": 3181
                      },
                      "start": 3174,
                      "end": 3181
                    },
                    "start": 3170,
                    "end": 3181
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TMapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3186,
                      "end": 3193
                    },
                    "typeArguments": null,
                    "start": 3186,
                    "end": 3193
                  },
                  "start": 3183,
                  "end": 3193
                },
                "start": 3169,
                "end": 3193
              },
              "start": 3167,
              "end": 3193
            },
            "accessibility": null,
            "static": false,
            "start": 3164,
            "end": 3193
          }
        ],
        "start": 3106,
        "end": 3195
      },
      "declare": false,
      "start": 3066,
      "end": 3195
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null,
        "start": 3206,
        "end": 3213
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
              "name": "TParams",
              "optional": false,
              "typeAnnotation": null,
              "start": 3214,
              "end": 3221
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3214,
            "end": 3221
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 3223,
              "end": 3228
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3223,
            "end": 3228
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 3230,
              "end": 3237
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3230,
            "end": 3237
          }
        ],
        "start": 3213,
        "end": 3238
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Opts",
                "optional": false,
                "typeAnnotation": null,
                "start": 3248,
                "end": 3252
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TParams",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3253,
                      "end": 3260
                    },
                    "typeArguments": null,
                    "start": 3253,
                    "end": 3260
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TDone",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3262,
                      "end": 3267
                    },
                    "typeArguments": null,
                    "start": 3262,
                    "end": 3267
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TMapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3269,
                      "end": 3276
                    },
                    "typeArguments": null,
                    "start": 3269,
                    "end": 3276
                  }
                ],
                "start": 3252,
                "end": 3277
              },
              "start": 3248,
              "end": 3277
            },
            "start": 3246,
            "end": 3277
          },
          "start": 3239,
          "end": 3277
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
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TParams",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3301,
                        "end": 3308
                      },
                      "typeArguments": null,
                      "start": 3301,
                      "end": 3308
                    },
                    "start": 3299,
                    "end": 3308
                  },
                  "start": 3293,
                  "end": 3308
                }
              ],
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
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3329,
                          "end": 3333
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3336,
                              "end": 3343
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fetch",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3344,
                              "end": 3349
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3336,
                            "end": 3349
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3350,
                              "end": 3356
                            },
                            {
                              "type": "Literal",
                              "value": 123,
                              "raw": "123",
                              "start": 3358,
                              "end": 3361
                            }
                          ],
                          "optional": false,
                          "start": 3336,
                          "end": 3362
                        },
                        "definite": false,
                        "start": 3329,
                        "end": 3362
                      }
                    ],
                    "declare": false,
                    "start": 3323,
                    "end": 3362
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
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3378,
                          "end": 3385
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3386,
                          "end": 3389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3378,
                        "end": 3389
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3390,
                          "end": 3394
                        }
                      ],
                      "optional": false,
                      "start": 3378,
                      "end": 3395
                    },
                    "start": 3371,
                    "end": 3395
                  }
                ],
                "start": 3313,
                "end": 3401
              },
              "id": null,
              "generator": false,
              "start": 3292,
              "end": 3401
            },
            "start": 3285,
            "end": 3401
          }
        ],
        "start": 3279,
        "end": 3403
      },
      "expression": false,
      "start": 3197,
      "end": 3403
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params",
        "optional": false,
        "typeAnnotation": null,
        "start": 3415,
        "end": 3421
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 3428,
              "end": 3431
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3433,
                "end": 3439
              },
              "start": 3431,
              "end": 3439
            },
            "accessibility": null,
            "static": false,
            "start": 3428,
            "end": 3439
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null,
              "start": 3444,
              "end": 3447
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3449,
                "end": 3455
              },
              "start": 3447,
              "end": 3455
            },
            "accessibility": null,
            "static": false,
            "start": 3444,
            "end": 3455
          }
        ],
        "start": 3422,
        "end": 3457
      },
      "declare": false,
      "start": 3405,
      "end": 3457
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3459,
          "end": 3466
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
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3473,
                  "end": 3478
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3489,
                            "end": 3495
                          },
                          "typeArguments": null,
                          "start": 3489,
                          "end": 3495
                        },
                        "start": 3487,
                        "end": 3495
                      },
                      "start": 3481,
                      "end": 3495
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3500,
                    "end": 3503
                  },
                  "id": null,
                  "generator": false,
                  "start": 3480,
                  "end": 3503
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3473,
                "end": 3503
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3509,
                  "end": 3512
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3515,
                      "end": 3521
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3526,
                      "end": 3532
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3533,
                        "end": 3539
                      }
                    ],
                    "optional": false,
                    "start": 3526,
                    "end": 3540
                  },
                  "id": null,
                  "generator": false,
                  "start": 3514,
                  "end": 3540
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3509,
                "end": 3540
              }
            ],
            "start": 3467,
            "end": 3542
          }
        ],
        "optional": false,
        "start": 3459,
        "end": 3543
      },
      "directive": null,
      "start": 3459,
      "end": 3544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3546,
          "end": 3553
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
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3560,
                  "end": 3565
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3576,
                            "end": 3582
                          },
                          "typeArguments": null,
                          "start": 3576,
                          "end": 3582
                        },
                        "start": 3574,
                        "end": 3582
                      },
                      "start": 3568,
                      "end": 3582
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3589,
                          "end": 3595
                        },
                        "start": 3587,
                        "end": 3595
                      },
                      "start": 3584,
                      "end": 3595
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3600,
                    "end": 3603
                  },
                  "id": null,
                  "generator": false,
                  "start": 3567,
                  "end": 3603
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3560,
                "end": 3603
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3609,
                  "end": 3612
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3615,
                      "end": 3621
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3626,
                      "end": 3632
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3633,
                        "end": 3639
                      }
                    ],
                    "optional": false,
                    "start": 3626,
                    "end": 3640
                  },
                  "id": null,
                  "generator": false,
                  "start": 3614,
                  "end": 3640
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3609,
                "end": 3640
              }
            ],
            "start": 3554,
            "end": 3642
          }
        ],
        "optional": false,
        "start": 3546,
        "end": 3643
      },
      "directive": null,
      "start": 3546,
      "end": 3644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3646,
          "end": 3653
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
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3660,
                  "end": 3665
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3676,
                            "end": 3682
                          },
                          "typeArguments": null,
                          "start": 3676,
                          "end": 3682
                        },
                        "start": 3674,
                        "end": 3682
                      },
                      "start": 3668,
                      "end": 3682
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3684,
                      "end": 3687
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3692,
                    "end": 3695
                  },
                  "id": null,
                  "generator": false,
                  "start": 3667,
                  "end": 3695
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3660,
                "end": 3695
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3701,
                  "end": 3704
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3707,
                      "end": 3713
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3718,
                      "end": 3724
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3725,
                        "end": 3731
                      }
                    ],
                    "optional": false,
                    "start": 3718,
                    "end": 3732
                  },
                  "id": null,
                  "generator": false,
                  "start": 3706,
                  "end": 3732
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3701,
                "end": 3732
              }
            ],
            "start": 3654,
            "end": 3734
          }
        ],
        "optional": false,
        "start": 3646,
        "end": 3735
      },
      "directive": null,
      "start": 3646,
      "end": 3736
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
            "name": "branch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 3785,
                        "end": 3786
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3785,
                      "end": 3786
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3788,
                        "end": 3789
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3798,
                          "end": 3799
                        },
                        "typeArguments": null,
                        "start": 3798,
                        "end": 3799
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3788,
                      "end": 3799
                    }
                  ],
                  "start": 3784,
                  "end": 3800
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
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
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3806,
                              "end": 3810
                            },
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
                                  "start": 3812,
                                  "end": 3813
                                },
                                "typeArguments": null,
                                "start": 3812,
                                "end": 3813
                              },
                              "start": 3810,
                              "end": 3813
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3806,
                            "end": 3814
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "if",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3815,
                              "end": 3817
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
                                    "name": "t",
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
                                          "start": 3823,
                                          "end": 3824
                                        },
                                        "typeArguments": null,
                                        "start": 3823,
                                        "end": 3824
                                      },
                                      "start": 3821,
                                      "end": 3824
                                    },
                                    "start": 3820,
                                    "end": 3824
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypePredicate",
                                    "parameterName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3829,
                                      "end": 3830
                                    },
                                    "asserts": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3834,
                                          "end": 3835
                                        },
                                        "typeArguments": null,
                                        "start": 3834,
                                        "end": 3835
                                      },
                                      "start": 3834,
                                      "end": 3835
                                    },
                                    "start": 3829,
                                    "end": 3835
                                  },
                                  "start": 3826,
                                  "end": 3835
                                },
                                "start": 3819,
                                "end": 3835
                              },
                              "start": 3817,
                              "end": 3835
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3815,
                            "end": 3836
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3837,
                              "end": 3841
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
                                    "name": "u",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3847,
                                          "end": 3848
                                        },
                                        "typeArguments": null,
                                        "start": 3847,
                                        "end": 3848
                                      },
                                      "start": 3845,
                                      "end": 3848
                                    },
                                    "start": 3844,
                                    "end": 3848
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 3853,
                                    "end": 3857
                                  },
                                  "start": 3850,
                                  "end": 3857
                                },
                                "start": 3843,
                                "end": 3857
                              },
                              "start": 3841,
                              "end": 3857
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3837,
                            "end": 3857
                          }
                        ],
                        "start": 3804,
                        "end": 3859
                      },
                      "start": 3802,
                      "end": 3859
                    },
                    "start": 3801,
                    "end": 3859
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 3864,
                    "end": 3868
                  },
                  "start": 3861,
                  "end": 3868
                },
                "start": 3784,
                "end": 3868
              },
              "start": 3780,
              "end": 3868
            },
            "start": 3774,
            "end": 3868
          },
          "init": null,
          "definite": false,
          "start": 3774,
          "end": 3868
        }
      ],
      "declare": true,
      "start": 3760,
      "end": 3868
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 3887,
                      "end": 3890
                    },
                    "start": 3887,
                    "end": 3890
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 3893,
                      "end": 3896
                    },
                    "start": 3893,
                    "end": 3896
                  }
                ],
                "start": 3887,
                "end": 3896
              },
              "start": 3885,
              "end": 3896
            },
            "start": 3884,
            "end": 3896
          },
          "init": null,
          "definite": false,
          "start": 3884,
          "end": 3896
        }
      ],
      "declare": true,
      "start": 3870,
      "end": 3896
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "branch",
          "optional": false,
          "typeAnnotation": null,
          "start": 3898,
          "end": 3904
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
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3909,
                  "end": 3913
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3915,
                  "end": 3916
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3909,
                "end": 3916
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "if",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3920,
                  "end": 3922
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3925,
                      "end": 3926
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3929,
                        "end": 3930
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 3934,
                            "end": 3937
                          },
                          "start": 3934,
                          "end": 3937
                        },
                        "start": 3934,
                        "end": 3937
                      },
                      "start": 3929,
                      "end": 3937
                    },
                    "start": 3927,
                    "end": 3937
                  },
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3941,
                      "end": 3942
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 3947,
                      "end": 3950
                    },
                    "start": 3941,
                    "end": 3950
                  },
                  "id": null,
                  "generator": false,
                  "start": 3924,
                  "end": 3950
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3920,
                "end": 3950
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3954,
                  "end": 3958
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
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3960,
                      "end": 3961
                    }
                  ],
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
                              "name": "test1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\"",
                                    "start": 3982,
                                    "end": 3985
                                  },
                                  "start": 3982,
                                  "end": 3985
                                },
                                "start": 3980,
                                "end": 3985
                              },
                              "start": 3975,
                              "end": 3985
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3988,
                              "end": 3989
                            },
                            "definite": false,
                            "start": 3975,
                            "end": 3989
                          }
                        ],
                        "declare": false,
                        "start": 3971,
                        "end": 3989
                      }
                    ],
                    "start": 3965,
                    "end": 3993
                  },
                  "id": null,
                  "generator": false,
                  "start": 3960,
                  "end": 3993
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3954,
                "end": 3993
              }
            ],
            "start": 3905,
            "end": 3995
          }
        ],
        "optional": false,
        "start": 3898,
        "end": 3996
      },
      "directive": null,
      "start": 3898,
      "end": 3996
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 4008,
        "end": 4013
      },
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
              "start": 4014,
              "end": 4015
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4014,
            "end": 4015
          }
        ],
        "start": 4013,
        "end": 4016
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 4021,
              "end": 4022
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4028,
                        "end": 4034
                      },
                      "start": 4026,
                      "end": 4034
                    },
                    "start": 4025,
                    "end": 4034
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4039,
                      "end": 4040
                    },
                    "typeArguments": null,
                    "start": 4039,
                    "end": 4040
                  },
                  "start": 4036,
                  "end": 4040
                },
                "start": 4024,
                "end": 4040
              },
              "start": 4022,
              "end": 4040
            },
            "accessibility": null,
            "static": false,
            "start": 4021,
            "end": 4041
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 4044,
              "end": 4045
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4053,
                          "end": 4054
                        },
                        "typeArguments": null,
                        "start": 4053,
                        "end": 4054
                      },
                      "start": 4051,
                      "end": 4054
                    },
                    "start": 4048,
                    "end": 4054
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4059,
                    "end": 4063
                  },
                  "start": 4056,
                  "end": 4063
                },
                "start": 4047,
                "end": 4063
              },
              "start": 4045,
              "end": 4063
            },
            "accessibility": null,
            "static": false,
            "start": 4044,
            "end": 4064
          }
        ],
        "start": 4017,
        "end": 4066
      },
      "declare": false,
      "start": 3998,
      "end": 4066
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 4085,
        "end": 4088
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4089,
              "end": 4090
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4089,
            "end": 4090
          }
        ],
        "start": 4088,
        "end": 4091
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 4099,
                "end": 4104
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4105,
                      "end": 4106
                    },
                    "typeArguments": null,
                    "start": 4105,
                    "end": 4106
                  }
                ],
                "start": 4104,
                "end": 4107
              },
              "start": 4099,
              "end": 4107
            },
            "start": 4097,
            "end": 4107
          },
          "start": 4092,
          "end": 4107
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 4110,
          "end": 4114
        },
        "start": 4108,
        "end": 4114
      },
      "body": null,
      "expression": false,
      "start": 4068,
      "end": 4115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 4117,
          "end": 4120
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                        "start": 4134,
                        "end": 4135
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4138,
                            "end": 4139
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 4144,
                          "end": 4146
                        },
                        "id": null,
                        "generator": false,
                        "start": 4137,
                        "end": 4146
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4134,
                      "end": 4146
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4152,
                        "end": 4153
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
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4156,
                            "end": 4159
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
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4172,
                                    "end": 4175
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toString",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4176,
                                    "end": 4184
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4172,
                                  "end": 4184
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 4172,
                                "end": 4186
                              },
                              "directive": null,
                              "start": 4172,
                              "end": 4187
                            }
                          ],
                          "start": 4164,
                          "end": 4193
                        },
                        "id": null,
                        "generator": false,
                        "start": 4155,
                        "end": 4193
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4152,
                      "end": 4193
                    }
                  ],
                  "start": 4128,
                  "end": 4198
                },
                "start": 4125,
                "end": 4198
              }
            ],
            "start": 4121,
            "end": 4201
          }
        ],
        "optional": false,
        "start": 4117,
        "end": 4202
      },
      "directive": null,
      "start": 4117,
      "end": 4203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 4222,
        "end": 4228
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4229,
              "end": 4230
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4229,
            "end": 4230
          }
        ],
        "start": 4228,
        "end": 4231
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4241,
                    "end": 4245
                  },
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
                            "name": "produce",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4253,
                            "end": 4260
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
                                  "name": "arg1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 4269,
                                      "end": 4275
                                    },
                                    "start": 4267,
                                    "end": 4275
                                  },
                                  "start": 4263,
                                  "end": 4275
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4280,
                                    "end": 4281
                                  },
                                  "typeArguments": null,
                                  "start": 4280,
                                  "end": 4281
                                },
                                "start": 4277,
                                "end": 4281
                              },
                              "start": 4262,
                              "end": 4281
                            },
                            "start": 4260,
                            "end": 4281
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 4253,
                          "end": 4282
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "consume",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4287,
                            "end": 4294
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
                                  "name": "arg2",
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
                                        "start": 4303,
                                        "end": 4304
                                      },
                                      "typeArguments": null,
                                      "start": 4303,
                                      "end": 4304
                                    },
                                    "start": 4301,
                                    "end": 4304
                                  },
                                  "start": 4297,
                                  "end": 4304
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 4309,
                                  "end": 4313
                                },
                                "start": 4306,
                                "end": 4313
                              },
                              "start": 4296,
                              "end": 4313
                            },
                            "start": 4294,
                            "end": 4313
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 4287,
                          "end": 4314
                        }
                      ],
                      "start": 4247,
                      "end": 4318
                    },
                    "start": 4245,
                    "end": 4318
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4241,
                  "end": 4319
                }
              ],
              "start": 4237,
              "end": 4321
            },
            "start": 4235,
            "end": 4321
          },
          "start": 4232,
          "end": 4321
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4324,
            "end": 4325
          },
          "typeArguments": null,
          "start": 4324,
          "end": 4325
        },
        "start": 4322,
        "end": 4325
      },
      "body": null,
      "expression": false,
      "start": 4205,
      "end": 4326
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
            "name": "resNested",
            "optional": false,
            "typeAnnotation": null,
            "start": 4334,
            "end": 4343
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 4346,
              "end": 4352
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4357,
                      "end": 4361
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "produce",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4369,
                            "end": 4376
                          },
                          "value": {
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
                                "start": 4379,
                                "end": 4380
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4386,
                                  "end": 4387
                                }
                              ],
                              "start": 4385,
                              "end": 4388
                            },
                            "id": null,
                            "generator": false,
                            "start": 4378,
                            "end": 4388
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4369,
                          "end": 4388
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "consume",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4394,
                            "end": 4401
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4404,
                                "end": 4407
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4412,
                                  "end": 4415
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4416,
                                  "end": 4420
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4412,
                                "end": 4420
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ",",
                                  "raw": "\",\"",
                                  "start": 4421,
                                  "end": 4424
                                }
                              ],
                              "optional": false,
                              "start": 4412,
                              "end": 4425
                            },
                            "id": null,
                            "generator": false,
                            "start": 4403,
                            "end": 4425
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4394,
                          "end": 4425
                        }
                      ],
                      "start": 4363,
                      "end": 4430
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4357,
                    "end": 4430
                  }
                ],
                "start": 4353,
                "end": 4433
              }
            ],
            "optional": false,
            "start": 4346,
            "end": 4434
          },
          "definite": false,
          "start": 4334,
          "end": 4434
        }
      ],
      "declare": false,
      "start": 4328,
      "end": 4435
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "twoConsumers",
        "optional": false,
        "typeAnnotation": null,
        "start": 4454,
        "end": 4466
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4467,
              "end": 4468
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4467,
            "end": 4468
          }
        ],
        "start": 4466,
        "end": 4469
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4479,
                    "end": 4480
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
                              "start": 4488,
                              "end": 4494
                            },
                            "start": 4486,
                            "end": 4494
                          },
                          "start": 4483,
                          "end": 4494
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4499,
                            "end": 4500
                          },
                          "typeArguments": null,
                          "start": 4499,
                          "end": 4500
                        },
                        "start": 4496,
                        "end": 4500
                      },
                      "start": 4482,
                      "end": 4500
                    },
                    "start": 4480,
                    "end": 4500
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4479,
                  "end": 4501
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4504,
                    "end": 4512
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
                          "name": "arg1",
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
                                "start": 4521,
                                "end": 4522
                              },
                              "typeArguments": null,
                              "start": 4521,
                              "end": 4522
                            },
                            "start": 4519,
                            "end": 4522
                          },
                          "start": 4515,
                          "end": 4522
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4527,
                          "end": 4531
                        },
                        "start": 4524,
                        "end": 4531
                      },
                      "start": 4514,
                      "end": 4531
                    },
                    "start": 4512,
                    "end": 4531
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4504,
                  "end": 4532
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4535,
                    "end": 4543
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
                          "name": "arg2",
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
                                "start": 4552,
                                "end": 4553
                              },
                              "typeArguments": null,
                              "start": 4552,
                              "end": 4553
                            },
                            "start": 4550,
                            "end": 4553
                          },
                          "start": 4546,
                          "end": 4553
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4558,
                          "end": 4562
                        },
                        "start": 4555,
                        "end": 4562
                      },
                      "start": 4545,
                      "end": 4562
                    },
                    "start": 4543,
                    "end": 4562
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4535,
                  "end": 4563
                }
              ],
              "start": 4475,
              "end": 4565
            },
            "start": 4473,
            "end": 4565
          },
          "start": 4470,
          "end": 4565
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4568,
            "end": 4569
          },
          "typeArguments": null,
          "start": 4568,
          "end": 4569
        },
        "start": 4566,
        "end": 4569
      },
      "body": null,
      "expression": false,
      "start": 4437,
      "end": 4570
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
            "name": "resTwoConsumers",
            "optional": false,
            "typeAnnotation": null,
            "start": 4578,
            "end": 4593
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "twoConsumers",
              "optional": false,
              "typeAnnotation": null,
              "start": 4596,
              "end": 4608
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4613,
                      "end": 4614
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4617,
                          "end": 4620
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4626,
                            "end": 4629
                          }
                        ],
                        "start": 4625,
                        "end": 4630
                      },
                      "id": null,
                      "generator": false,
                      "start": 4616,
                      "end": 4630
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4613,
                    "end": 4630
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4634,
                      "end": 4642
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
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4645,
                          "end": 4649
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4654,
                        "end": 4656
                      },
                      "id": null,
                      "generator": false,
                      "start": 4644,
                      "end": 4656
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4634,
                    "end": 4656
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4660,
                      "end": 4668
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
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4671,
                          "end": 4675
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4680,
                        "end": 4682
                      },
                      "id": null,
                      "generator": false,
                      "start": 4670,
                      "end": 4682
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4660,
                    "end": 4682
                  }
                ],
                "start": 4609,
                "end": 4685
              }
            ],
            "optional": false,
            "start": 4596,
            "end": 4686
          },
          "definite": false,
          "start": 4578,
          "end": 4686
        }
      ],
      "declare": false,
      "start": 4572,
      "end": 4687
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleProducersBeforeConsumers",
        "optional": false,
        "typeAnnotation": null,
        "start": 4706,
        "end": 4738
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4739,
              "end": 4740
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4739,
            "end": 4740
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4742,
              "end": 4744
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4742,
            "end": 4744
          }
        ],
        "start": 4738,
        "end": 4745
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4755,
                    "end": 4756
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
                              "start": 4764,
                              "end": 4770
                            },
                            "start": 4762,
                            "end": 4770
                          },
                          "start": 4759,
                          "end": 4770
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4775,
                            "end": 4776
                          },
                          "typeArguments": null,
                          "start": 4775,
                          "end": 4776
                        },
                        "start": 4772,
                        "end": 4776
                      },
                      "start": 4758,
                      "end": 4776
                    },
                    "start": 4756,
                    "end": 4776
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4755,
                  "end": 4777
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4780,
                    "end": 4781
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
                              "start": 4789,
                              "end": 4795
                            },
                            "start": 4787,
                            "end": 4795
                          },
                          "start": 4784,
                          "end": 4795
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4800,
                            "end": 4802
                          },
                          "typeArguments": null,
                          "start": 4800,
                          "end": 4802
                        },
                        "start": 4797,
                        "end": 4802
                      },
                      "start": 4783,
                      "end": 4802
                    },
                    "start": 4781,
                    "end": 4802
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4780,
                  "end": 4803
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4806,
                    "end": 4814
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
                          "name": "arg1",
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
                                "start": 4823,
                                "end": 4824
                              },
                              "typeArguments": null,
                              "start": 4823,
                              "end": 4824
                            },
                            "start": 4821,
                            "end": 4824
                          },
                          "start": 4817,
                          "end": 4824
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4829,
                          "end": 4833
                        },
                        "start": 4826,
                        "end": 4833
                      },
                      "start": 4816,
                      "end": 4833
                    },
                    "start": 4814,
                    "end": 4833
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4806,
                  "end": 4834
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4837,
                    "end": 4845
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
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4854,
                                "end": 4856
                              },
                              "typeArguments": null,
                              "start": 4854,
                              "end": 4856
                            },
                            "start": 4852,
                            "end": 4856
                          },
                          "start": 4848,
                          "end": 4856
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4861,
                          "end": 4865
                        },
                        "start": 4858,
                        "end": 4865
                      },
                      "start": 4847,
                      "end": 4865
                    },
                    "start": 4845,
                    "end": 4865
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4837,
                  "end": 4866
                }
              ],
              "start": 4751,
              "end": 4868
            },
            "start": 4749,
            "end": 4868
          },
          "start": 4746,
          "end": 4868
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4872,
                "end": 4873
              },
              "typeArguments": null,
              "start": 4872,
              "end": 4873
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4875,
                "end": 4877
              },
              "typeArguments": null,
              "start": 4875,
              "end": 4877
            }
          ],
          "start": 4871,
          "end": 4878
        },
        "start": 4869,
        "end": 4878
      },
      "body": null,
      "expression": false,
      "start": 4689,
      "end": 4879
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
            "name": "resMultipleProducersBeforeConsumers",
            "optional": false,
            "typeAnnotation": null,
            "start": 4887,
            "end": 4922
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "multipleProducersBeforeConsumers",
              "optional": false,
              "typeAnnotation": null,
              "start": 4925,
              "end": 4957
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4962,
                      "end": 4963
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4966,
                          "end": 4969
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4975,
                            "end": 4978
                          }
                        ],
                        "start": 4974,
                        "end": 4979
                      },
                      "id": null,
                      "generator": false,
                      "start": 4965,
                      "end": 4979
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4962,
                    "end": 4979
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4983,
                      "end": 4984
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4987,
                          "end": 4990
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Number",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4995,
                          "end": 5001
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5002,
                            "end": 5005
                          }
                        ],
                        "optional": false,
                        "start": 4995,
                        "end": 5006
                      },
                      "id": null,
                      "generator": false,
                      "start": 4986,
                      "end": 5006
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4983,
                    "end": 5006
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5010,
                      "end": 5018
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
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5021,
                          "end": 5025
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 5030,
                        "end": 5032
                      },
                      "id": null,
                      "generator": false,
                      "start": 5020,
                      "end": 5032
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5010,
                    "end": 5032
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5036,
                      "end": 5044
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
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5047,
                          "end": 5051
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 5056,
                        "end": 5058
                      },
                      "id": null,
                      "generator": false,
                      "start": 5046,
                      "end": 5058
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5036,
                    "end": 5058
                  }
                ],
                "start": 4958,
                "end": 5061
              }
            ],
            "optional": false,
            "start": 4925,
            "end": 5062
          },
          "definite": false,
          "start": 4887,
          "end": 5062
        }
      ],
      "declare": false,
      "start": 4881,
      "end": 5063
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withConditionalExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 5082,
        "end": 5107
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5108,
              "end": 5109
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5108,
            "end": 5109
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5111,
              "end": 5113
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5111,
            "end": 5113
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5115,
              "end": 5117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5115,
            "end": 5117
          }
        ],
        "start": 5107,
        "end": 5118
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5128,
                    "end": 5129
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
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5138,
                              "end": 5144
                            },
                            "start": 5136,
                            "end": 5144
                          },
                          "start": 5132,
                          "end": 5144
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5149,
                            "end": 5150
                          },
                          "typeArguments": null,
                          "start": 5149,
                          "end": 5150
                        },
                        "start": 5146,
                        "end": 5150
                      },
                      "start": 5131,
                      "end": 5150
                    },
                    "start": 5129,
                    "end": 5150
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5128,
                  "end": 5151
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5154,
                    "end": 5155
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
                          "name": "arg2",
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
                                "start": 5164,
                                "end": 5165
                              },
                              "typeArguments": null,
                              "start": 5164,
                              "end": 5165
                            },
                            "start": 5162,
                            "end": 5165
                          },
                          "start": 5158,
                          "end": 5165
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5170,
                            "end": 5172
                          },
                          "typeArguments": null,
                          "start": 5170,
                          "end": 5172
                        },
                        "start": 5167,
                        "end": 5172
                      },
                      "start": 5157,
                      "end": 5172
                    },
                    "start": 5155,
                    "end": 5172
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5154,
                  "end": 5173
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5176,
                    "end": 5177
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
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5186,
                                "end": 5188
                              },
                              "typeArguments": null,
                              "start": 5186,
                              "end": 5188
                            },
                            "start": 5184,
                            "end": 5188
                          },
                          "start": 5180,
                          "end": 5188
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5193,
                            "end": 5195
                          },
                          "typeArguments": null,
                          "start": 5193,
                          "end": 5195
                        },
                        "start": 5190,
                        "end": 5195
                      },
                      "start": 5179,
                      "end": 5195
                    },
                    "start": 5177,
                    "end": 5195
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5176,
                  "end": 5196
                }
              ],
              "start": 5124,
              "end": 5198
            },
            "start": 5122,
            "end": 5198
          },
          "start": 5119,
          "end": 5198
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5202,
                "end": 5203
              },
              "typeArguments": null,
              "start": 5202,
              "end": 5203
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5205,
                "end": 5207
              },
              "typeArguments": null,
              "start": 5205,
              "end": 5207
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5209,
                "end": 5211
              },
              "typeArguments": null,
              "start": 5209,
              "end": 5211
            }
          ],
          "start": 5201,
          "end": 5212
        },
        "start": 5199,
        "end": 5212
      },
      "body": null,
      "expression": false,
      "start": 5065,
      "end": 5213
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
            "name": "resWithConditionalExpression",
            "optional": false,
            "typeAnnotation": null,
            "start": 5221,
            "end": 5249
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withConditionalExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 5252,
              "end": 5277
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5282,
                      "end": 5283
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5286,
                          "end": 5289
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5295,
                            "end": 5298
                          }
                        ],
                        "start": 5294,
                        "end": 5299
                      },
                      "id": null,
                      "generator": false,
                      "start": 5285,
                      "end": 5299
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5282,
                    "end": 5299
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5303,
                      "end": 5304
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5306,
                            "end": 5310
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5311,
                            "end": 5317
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5306,
                          "end": 5317
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 5306,
                        "end": 5319
                      },
                      "consequent": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5323,
                            "end": 5326
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "value": "first",
                            "raw": "\"first\"",
                            "start": 5331,
                            "end": 5338
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5342,
                              "end": 5347
                            },
                            "typeArguments": null,
                            "start": 5342,
                            "end": 5347
                          },
                          "start": 5331,
                          "end": 5347
                        },
                        "id": null,
                        "generator": false,
                        "start": 5322,
                        "end": 5347
                      },
                      "alternate": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5351,
                            "end": 5354
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "value": "two",
                            "raw": "\"two\"",
                            "start": 5359,
                            "end": 5364
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5368,
                              "end": 5373
                            },
                            "typeArguments": null,
                            "start": 5368,
                            "end": 5373
                          },
                          "start": 5359,
                          "end": 5373
                        },
                        "id": null,
                        "generator": false,
                        "start": 5350,
                        "end": 5373
                      },
                      "start": 5306,
                      "end": 5373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5303,
                    "end": 5373
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5377,
                      "end": 5378
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5381,
                          "end": 5384
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Boolean",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5389,
                          "end": 5396
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5397,
                            "end": 5400
                          }
                        ],
                        "optional": false,
                        "start": 5389,
                        "end": 5401
                      },
                      "id": null,
                      "generator": false,
                      "start": 5380,
                      "end": 5401
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5377,
                    "end": 5401
                  }
                ],
                "start": 5278,
                "end": 5404
              }
            ],
            "optional": false,
            "start": 5252,
            "end": 5405
          },
          "definite": false,
          "start": 5221,
          "end": 5405
        }
      ],
      "declare": false,
      "start": 5215,
      "end": 5406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onion",
        "optional": false,
        "typeAnnotation": null,
        "start": 5425,
        "end": 5430
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5431,
              "end": 5432
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5431,
            "end": 5432
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5434,
              "end": 5436
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5434,
            "end": 5436
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5438,
              "end": 5440
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5438,
            "end": 5440
          }
        ],
        "start": 5430,
        "end": 5441
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5451,
                    "end": 5452
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
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5461,
                              "end": 5467
                            },
                            "start": 5459,
                            "end": 5467
                          },
                          "start": 5455,
                          "end": 5467
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5472,
                            "end": 5473
                          },
                          "typeArguments": null,
                          "start": 5472,
                          "end": 5473
                        },
                        "start": 5469,
                        "end": 5473
                      },
                      "start": 5454,
                      "end": 5473
                    },
                    "start": 5452,
                    "end": 5473
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5451,
                  "end": 5474
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5477,
                    "end": 5483
                  },
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5491,
                            "end": 5492
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
                                  "name": "arg2",
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
                                        "start": 5501,
                                        "end": 5502
                                      },
                                      "typeArguments": null,
                                      "start": 5501,
                                      "end": 5502
                                    },
                                    "start": 5499,
                                    "end": 5502
                                  },
                                  "start": 5495,
                                  "end": 5502
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5507,
                                    "end": 5509
                                  },
                                  "typeArguments": null,
                                  "start": 5507,
                                  "end": 5509
                                },
                                "start": 5504,
                                "end": 5509
                              },
                              "start": 5494,
                              "end": 5509
                            },
                            "start": 5492,
                            "end": 5509
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5491,
                          "end": 5510
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5515,
                            "end": 5522
                          },
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
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5532,
                                    "end": 5533
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
                                          "name": "arg2",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "T2",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5542,
                                                "end": 5544
                                              },
                                              "typeArguments": null,
                                              "start": 5542,
                                              "end": 5544
                                            },
                                            "start": 5540,
                                            "end": 5544
                                          },
                                          "start": 5536,
                                          "end": 5544
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T3",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5549,
                                            "end": 5551
                                          },
                                          "typeArguments": null,
                                          "start": 5549,
                                          "end": 5551
                                        },
                                        "start": 5546,
                                        "end": 5551
                                      },
                                      "start": 5535,
                                      "end": 5551
                                    },
                                    "start": 5533,
                                    "end": 5551
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 5532,
                                  "end": 5552
                                }
                              ],
                              "start": 5524,
                              "end": 5558
                            },
                            "start": 5522,
                            "end": 5558
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5515,
                          "end": 5559
                        }
                      ],
                      "start": 5485,
                      "end": 5563
                    },
                    "start": 5483,
                    "end": 5563
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5477,
                  "end": 5564
                }
              ],
              "start": 5447,
              "end": 5566
            },
            "start": 5445,
            "end": 5566
          },
          "start": 5442,
          "end": 5566
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5570,
                "end": 5571
              },
              "typeArguments": null,
              "start": 5570,
              "end": 5571
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5573,
                "end": 5575
              },
              "typeArguments": null,
              "start": 5573,
              "end": 5575
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5577,
                "end": 5579
              },
              "typeArguments": null,
              "start": 5577,
              "end": 5579
            }
          ],
          "start": 5569,
          "end": 5580
        },
        "start": 5567,
        "end": 5580
      },
      "body": null,
      "expression": false,
      "start": 5408,
      "end": 5581
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
            "name": "resOnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 5589,
            "end": 5597
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "onion",
              "optional": false,
              "typeAnnotation": null,
              "start": 5600,
              "end": 5605
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5610,
                      "end": 5611
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5614,
                          "end": 5617
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5623,
                            "end": 5626
                          }
                        ],
                        "start": 5622,
                        "end": 5627
                      },
                      "id": null,
                      "generator": false,
                      "start": 5613,
                      "end": 5627
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5610,
                    "end": 5627
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5631,
                      "end": 5637
                    },
                    "value": {
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
                            "start": 5645,
                            "end": 5646
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5649,
                                "end": 5652
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5657,
                                  "end": 5660
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5661,
                                  "end": 5665
                                },
                                "optional": false,
                                "computed": false,
                                "start": 5657,
                                "end": 5665
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ",",
                                  "raw": "\",\"",
                                  "start": 5666,
                                  "end": 5669
                                }
                              ],
                              "optional": false,
                              "start": 5657,
                              "end": 5670
                            },
                            "id": null,
                            "generator": false,
                            "start": 5648,
                            "end": 5670
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 5645,
                          "end": 5670
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5676,
                            "end": 5683
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5693,
                                  "end": 5694
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5697,
                                      "end": 5700
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Boolean",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5705,
                                      "end": 5712
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5713,
                                        "end": 5716
                                      }
                                    ],
                                    "optional": false,
                                    "start": 5705,
                                    "end": 5717
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 5696,
                                  "end": 5717
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 5693,
                                "end": 5717
                              }
                            ],
                            "start": 5685,
                            "end": 5724
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 5676,
                          "end": 5724
                        }
                      ],
                      "start": 5639,
                      "end": 5729
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5631,
                    "end": 5729
                  }
                ],
                "start": 5606,
                "end": 5732
              }
            ],
            "optional": false,
            "start": 5600,
            "end": 5733
          },
          "definite": false,
          "start": 5589,
          "end": 5733
        }
      ],
      "declare": false,
      "start": 5583,
      "end": 5734
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onion2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5753,
        "end": 5759
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5760,
              "end": 5761
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5760,
            "end": 5761
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5763,
              "end": 5765
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5763,
            "end": 5765
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5767,
              "end": 5769
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5767,
            "end": 5769
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5771,
              "end": 5773
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5771,
            "end": 5773
          }
        ],
        "start": 5759,
        "end": 5774
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5784,
                    "end": 5785
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
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5794,
                              "end": 5800
                            },
                            "start": 5792,
                            "end": 5800
                          },
                          "start": 5788,
                          "end": 5800
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5805,
                            "end": 5806
                          },
                          "typeArguments": null,
                          "start": 5805,
                          "end": 5806
                        },
                        "start": 5802,
                        "end": 5806
                      },
                      "start": 5787,
                      "end": 5806
                    },
                    "start": 5785,
                    "end": 5806
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5784,
                  "end": 5807
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5810,
                    "end": 5816
                  },
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5824,
                            "end": 5825
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
                                  "name": "arg2",
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
                                        "start": 5834,
                                        "end": 5835
                                      },
                                      "typeArguments": null,
                                      "start": 5834,
                                      "end": 5835
                                    },
                                    "start": 5832,
                                    "end": 5835
                                  },
                                  "start": 5828,
                                  "end": 5835
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5840,
                                    "end": 5842
                                  },
                                  "typeArguments": null,
                                  "start": 5840,
                                  "end": 5842
                                },
                                "start": 5837,
                                "end": 5842
                              },
                              "start": 5827,
                              "end": 5842
                            },
                            "start": 5825,
                            "end": 5842
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5824,
                          "end": 5843
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5848,
                            "end": 5849
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
                                  "name": "arg3",
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
                                        "start": 5858,
                                        "end": 5859
                                      },
                                      "typeArguments": null,
                                      "start": 5858,
                                      "end": 5859
                                    },
                                    "start": 5856,
                                    "end": 5859
                                  },
                                  "start": 5852,
                                  "end": 5859
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5864,
                                    "end": 5866
                                  },
                                  "typeArguments": null,
                                  "start": 5864,
                                  "end": 5866
                                },
                                "start": 5861,
                                "end": 5866
                              },
                              "start": 5851,
                              "end": 5866
                            },
                            "start": 5849,
                            "end": 5866
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5848,
                          "end": 5867
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5872,
                            "end": 5879
                          },
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
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5889,
                                    "end": 5890
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
                                          "name": "arg4",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "T3",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5899,
                                                "end": 5901
                                              },
                                              "typeArguments": null,
                                              "start": 5899,
                                              "end": 5901
                                            },
                                            "start": 5897,
                                            "end": 5901
                                          },
                                          "start": 5893,
                                          "end": 5901
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T4",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5906,
                                            "end": 5908
                                          },
                                          "typeArguments": null,
                                          "start": 5906,
                                          "end": 5908
                                        },
                                        "start": 5903,
                                        "end": 5908
                                      },
                                      "start": 5892,
                                      "end": 5908
                                    },
                                    "start": 5890,
                                    "end": 5908
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 5889,
                                  "end": 5909
                                }
                              ],
                              "start": 5881,
                              "end": 5915
                            },
                            "start": 5879,
                            "end": 5915
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5872,
                          "end": 5916
                        }
                      ],
                      "start": 5818,
                      "end": 5920
                    },
                    "start": 5816,
                    "end": 5920
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5810,
                  "end": 5921
                }
              ],
              "start": 5780,
              "end": 5923
            },
            "start": 5778,
            "end": 5923
          },
          "start": 5775,
          "end": 5923
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5927,
                "end": 5928
              },
              "typeArguments": null,
              "start": 5927,
              "end": 5928
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5930,
                "end": 5932
              },
              "typeArguments": null,
              "start": 5930,
              "end": 5932
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5934,
                "end": 5936
              },
              "typeArguments": null,
              "start": 5934,
              "end": 5936
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5938,
                "end": 5940
              },
              "typeArguments": null,
              "start": 5938,
              "end": 5940
            }
          ],
          "start": 5926,
          "end": 5941
        },
        "start": 5924,
        "end": 5941
      },
      "body": null,
      "expression": false,
      "start": 5736,
      "end": 5942
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
            "name": "resOnion2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5950,
            "end": 5959
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "onion2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5962,
              "end": 5968
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5973,
                      "end": 5974
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5977,
                          "end": 5980
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5986,
                            "end": 5989
                          }
                        ],
                        "start": 5985,
                        "end": 5990
                      },
                      "id": null,
                      "generator": false,
                      "start": 5976,
                      "end": 5990
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5973,
                    "end": 5990
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5994,
                      "end": 6000
                    },
                    "value": {
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
                            "start": 6008,
                            "end": 6009
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6012,
                                "end": 6015
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6020,
                                  "end": 6023
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6024,
                                  "end": 6028
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6020,
                                "end": 6028
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ",",
                                  "raw": "\",\"",
                                  "start": 6029,
                                  "end": 6032
                                }
                              ],
                              "optional": false,
                              "start": 6020,
                              "end": 6033
                            },
                            "id": null,
                            "generator": false,
                            "start": 6011,
                            "end": 6033
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 6008,
                          "end": 6033
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6039,
                            "end": 6040
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6043,
                                "end": 6046
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Number",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6051,
                                "end": 6057
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6058,
                                  "end": 6061
                                }
                              ],
                              "optional": false,
                              "start": 6051,
                              "end": 6062
                            },
                            "id": null,
                            "generator": false,
                            "start": 6042,
                            "end": 6062
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 6039,
                          "end": 6062
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6068,
                            "end": 6075
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6085,
                                  "end": 6086
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6089,
                                      "end": 6092
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Boolean",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6097,
                                      "end": 6104
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6105,
                                        "end": 6108
                                      }
                                    ],
                                    "optional": false,
                                    "start": 6097,
                                    "end": 6109
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 6088,
                                  "end": 6109
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 6085,
                                "end": 6109
                              }
                            ],
                            "start": 6077,
                            "end": 6116
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 6068,
                          "end": 6116
                        }
                      ],
                      "start": 6002,
                      "end": 6121
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5994,
                    "end": 6121
                  }
                ],
                "start": 5969,
                "end": 6124
              }
            ],
            "optional": false,
            "start": 5962,
            "end": 6125
          },
          "definite": false,
          "start": 5950,
          "end": 6125
        }
      ],
      "declare": false,
      "start": 5944,
      "end": 6126
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "distant",
        "optional": false,
        "typeAnnotation": null,
        "start": 6145,
        "end": 6152
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6153,
              "end": 6154
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6153,
            "end": 6154
          }
        ],
        "start": 6152,
        "end": 6155
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6166,
                    "end": 6169
                  },
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
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6177,
                            "end": 6180
                          },
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
                                    "name": "baz",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6190,
                                    "end": 6193
                                  },
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
                                            "name": "producer",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6205,
                                            "end": 6213
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
                                                      "start": 6221,
                                                      "end": 6227
                                                    },
                                                    "start": 6219,
                                                    "end": 6227
                                                  },
                                                  "start": 6216,
                                                  "end": 6227
                                                }
                                              ],
                                              "returnType": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 6232,
                                                    "end": 6233
                                                  },
                                                  "typeArguments": null,
                                                  "start": 6232,
                                                  "end": 6233
                                                },
                                                "start": 6229,
                                                "end": 6233
                                              },
                                              "start": 6215,
                                              "end": 6233
                                            },
                                            "start": 6213,
                                            "end": 6233
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 6205,
                                          "end": 6234
                                        }
                                      ],
                                      "start": 6195,
                                      "end": 6242
                                    },
                                    "start": 6193,
                                    "end": 6242
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 6190,
                                  "end": 6243
                                }
                              ],
                              "start": 6182,
                              "end": 6249
                            },
                            "start": 6180,
                            "end": 6249
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 6177,
                          "end": 6250
                        }
                      ],
                      "start": 6171,
                      "end": 6254
                    },
                    "start": 6169,
                    "end": 6254
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6166,
                  "end": 6255
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consumer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6258,
                    "end": 6266
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
                          "name": "val",
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
                                "start": 6274,
                                "end": 6275
                              },
                              "typeArguments": null,
                              "start": 6274,
                              "end": 6275
                            },
                            "start": 6272,
                            "end": 6275
                          },
                          "start": 6269,
                          "end": 6275
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 6280,
                          "end": 6287
                        },
                        "start": 6277,
                        "end": 6287
                      },
                      "start": 6268,
                      "end": 6287
                    },
                    "start": 6266,
                    "end": 6287
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6258,
                  "end": 6288
                }
              ],
              "start": 6162,
              "end": 6290
            },
            "start": 6160,
            "end": 6290
          },
          "start": 6156,
          "end": 6290
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6293,
            "end": 6294
          },
          "typeArguments": null,
          "start": 6293,
          "end": 6294
        },
        "start": 6291,
        "end": 6294
      },
      "body": null,
      "expression": false,
      "start": 6128,
      "end": 6295
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
            "name": "distantRes",
            "optional": false,
            "typeAnnotation": null,
            "start": 6303,
            "end": 6313
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "distant",
              "optional": false,
              "typeAnnotation": null,
              "start": 6316,
              "end": 6323
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6328,
                      "end": 6331
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6339,
                            "end": 6342
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "baz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6352,
                                  "end": 6355
                                },
                                "value": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "producer",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6367,
                                        "end": 6375
                                      },
                                      "value": {
                                        "type": "ArrowFunctionExpression",
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arg",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6378,
                                            "end": 6381
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 6386,
                                          "end": 6387
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 6377,
                                        "end": 6387
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 6367,
                                      "end": 6387
                                    }
                                  ],
                                  "start": 6357,
                                  "end": 6396
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 6352,
                                "end": 6396
                              }
                            ],
                            "start": 6344,
                            "end": 6403
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 6339,
                          "end": 6403
                        }
                      ],
                      "start": 6333,
                      "end": 6408
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 6328,
                    "end": 6408
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consumer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6412,
                      "end": 6420
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6423,
                          "end": 6426
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6431,
                        "end": 6433
                      },
                      "id": null,
                      "generator": false,
                      "start": 6422,
                      "end": 6433
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 6412,
                    "end": 6433
                  }
                ],
                "start": 6324,
                "end": 6436
              }
            ],
            "optional": false,
            "start": 6316,
            "end": 6437
          },
          "definite": false,
          "start": 6303,
          "end": 6437
        }
      ],
      "declare": false,
      "start": 6297,
      "end": 6438
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 6438
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 31,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "callIt",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "produce",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 82,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 108,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "callIt",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
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
    "value": "=>",
    "start": 152,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 162,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 173,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "callIt",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 218,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 239,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 244,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "callIt",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 273,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 293,
    "end": 299
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 314,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 325,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 330,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 345,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "callItT",
    "start": 362,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 391,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 401,
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
    "value": "]",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 415,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "callItT",
    "start": 422,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 434,
    "end": 436
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 442,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 447,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "callItT",
    "start": 460,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 472,
    "end": 474
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 480,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 485,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 521,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "MyInterface",
    "start": 531,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "retrieveGeneric",
    "start": 552,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "parameter",
    "start": 570,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 589,
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
    "value": ",",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "operateWithGeneric",
    "start": 599,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 620,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 632,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 645,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "inferTypeFn",
    "start": 651,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 669,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "MyInterface",
    "start": 678,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 694,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 697,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 707,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "myGeneric",
    "start": 713,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "inferTypeFn",
    "start": 725,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "retrieveGeneric",
    "start": 743,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "parameter",
    "start": 760,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "operateWithGeneric",
    "start": 780,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 800,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 808,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 811,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 819,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 851,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 860,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "mutations",
    "start": 873,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 903,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 906,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 919,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "mutations",
    "start": 929,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 949,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
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
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 980,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 987,
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
    "value": "}",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1022,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1030,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1046,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1085,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1108,
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
    "type": "Numeric",
    "value": "42",
    "start": 1120,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1157,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1218,
    "end": 1224
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1271,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 1276,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1282,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1286,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1321,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1339,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1349,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1358,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1363,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1367,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 1376,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1382,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1386,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1395,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1412,
    "end": 1414
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1429,
    "end": 1431
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1448,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1461,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1470,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1493,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1510,
    "end": 1512
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1544,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1557,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1566,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 1611,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 1617,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1629,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1640,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1647,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1661,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "WrappedMap",
    "start": 1666,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1679,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1686,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 1694,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1704,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 1709,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "WrappedMap",
    "start": 1726,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1749,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1752,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1767,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 1775,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1783,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1798,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1809,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "MappingComponent",
    "start": 1814,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1833,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "WrappedMap",
    "start": 1841,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1855,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "WrappedMap",
    "start": 1863,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "setup",
    "start": 1883,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "inputs",
    "start": 1894,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "outputs",
    "start": 1905,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1923,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "inputs",
    "start": 1930,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 1938,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1949,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 1952,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1967,
    "end": 1974
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1975,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "createMappingComponent",
    "start": 1984,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2009,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "WrappedMap",
    "start": 2017,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2031,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "WrappedMap",
    "start": 2039,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 2051,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "MappingComponent",
    "start": 2056,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2081,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "createMappingComponent",
    "start": 2088,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "setup",
    "start": 2117,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2135,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "inputs",
    "start": 2156,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2182,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2187,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 2191,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2199,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2226,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2231,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 2235,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2243,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "outputs",
    "start": 2280,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 2307,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2313,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 2317,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2325,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2353,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2358,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 2362,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2370,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2416,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "inputs",
    "start": 2420,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2438,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 2459,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "inputs",
    "start": 2465,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "nonexistent",
    "start": 2472,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2497,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "inputs",
    "start": 2502,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2509,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2574,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "simplified",
    "start": 2583,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2597,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 2606,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2620,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 2626,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2643,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2646,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2657,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "whatIWant",
    "start": 2666,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2679,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 2688,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "bob",
    "start": 2700,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2705,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2710,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 2716,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2733,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2736,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2747,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "nonObject",
    "start": 2756,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 2769,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "bob",
    "start": 2781,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2786,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2791,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 2797,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2814,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2817,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "simplified",
    "start": 2826,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 2839,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2853,
    "end": 2855
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2856,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 2861,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2875,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2878,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2886,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "}",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "whatIWant",
    "start": 2900,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 2912,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "bob",
    "start": 2924,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2929,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "bob",
    "start": 2932,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 2945,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2959,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2962,
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
    "value": "log",
    "start": 2970,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "nonObject",
    "start": 2984,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "bob",
    "start": 2995,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3000,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "bob",
    "start": 3003,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3020,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3023,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3031,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3066,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "Opts",
    "start": 3076,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 3081,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "TDone",
    "start": 3090,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "TMapped",
    "start": 3097,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 3112,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 3120,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 3128,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3137,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3142,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3150,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "TDone",
    "start": 3153,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3164,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3170,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "TDone",
    "start": 3176,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3183,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "TMapped",
    "start": 3186,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3197,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 3206,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 3214,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "TDone",
    "start": 3223,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "TMapped",
    "start": 3230,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 3239,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "Opts",
    "start": 3248,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 3253,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "TDone",
    "start": 3262,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Identifier",
    "value": "TMapped",
    "start": 3269,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3285,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 3293,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 3301,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3310,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3323,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3329,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 3336,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 3344,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 3350,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3358,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3371,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 3378,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3386,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3390,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3405,
    "end": 3414
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 3415,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 3428,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3433,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 3444,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3449,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 3459,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 3473,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 3481,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 3489,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3497,
    "end": 3499
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3500,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3509,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3515,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3523,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 3526,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3533,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3543,
    "end": 3544
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 3546,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 3560,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 3568,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 3576,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3584,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3589,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3597,
    "end": 3599
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3600,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3609,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3615,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3623,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 3626,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3633,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "example",
    "start": 3646,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 3660,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 3668,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 3676,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3684,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3689,
    "end": 3691
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3692,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3701,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3707,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3715,
    "end": 3717
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 3718,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3725,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3760,
    "end": 3767
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3768,
    "end": 3773
  },
  {
    "type": "Identifier",
    "value": "branch",
    "start": 3774,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3790,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3800,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3806,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Identifier",
    "value": "if",
    "start": 3815,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3826,
    "end": 3828
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3831,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3837,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3850,
    "end": 3852
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3853,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3861,
    "end": 3863
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3864,
    "end": 3868
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3870,
    "end": 3877
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3878,
    "end": 3883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3887,
    "end": 3890
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3893,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "branch",
    "start": 3898,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3909,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Identifier",
    "value": "if",
    "start": 3920,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3931,
    "end": 3933
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3934,
    "end": 3937
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3938,
    "end": 3940
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3943,
    "end": 3946
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3947,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3954,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3962,
    "end": 3964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3971,
    "end": 3974
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 3975,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3982,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3998,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 4008,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4028,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4036,
    "end": 4038
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4040,
    "end": 4041
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4048,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4056,
    "end": 4058
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4059,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4068,
    "end": 4075
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4076,
    "end": 4084
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 4085,
    "end": 4088
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 4092,
    "end": 4097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 4099,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4110,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 4117,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4125,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4141,
    "end": 4143
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4144,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4156,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4161,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4172,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 4176,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4205,
    "end": 4212
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4213,
    "end": 4221
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 4222,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4232,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 4241,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 4253,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 4263,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4269,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4277,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 4287,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4297,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4301,
    "end": 4302
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4306,
    "end": 4308
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4309,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4320,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4325,
    "end": 4326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4328,
    "end": 4333
  },
  {
    "type": "Identifier",
    "value": "resNested",
    "start": 4334,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 4346,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 4357,
    "end": 4361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4361,
    "end": 4362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 4369,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4382,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 4394,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4404,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4409,
    "end": 4411
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4412,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 4416,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "String",
    "value": "\",\"",
    "start": 4421,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4437,
    "end": 4444
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4445,
    "end": 4453
  },
  {
    "type": "Identifier",
    "value": "twoConsumers",
    "start": 4454,
    "end": 4466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4470,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4483,
    "end": 4486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4488,
    "end": 4494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4496,
    "end": 4498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Identifier",
    "value": "consume1",
    "start": 4504,
    "end": 4512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 4515,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4524,
    "end": 4526
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4527,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4531,
    "end": 4532
  },
  {
    "type": "Identifier",
    "value": "consume2",
    "start": 4535,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4546,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4553,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4555,
    "end": 4557
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4558,
    "end": 4562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4566,
    "end": 4567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4572,
    "end": 4577
  },
  {
    "type": "Identifier",
    "value": "resTwoConsumers",
    "start": 4578,
    "end": 4593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4594,
    "end": 4595
  },
  {
    "type": "Identifier",
    "value": "twoConsumers",
    "start": 4596,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4617,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4622,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4626,
    "end": 4629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4629,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Identifier",
    "value": "consume1",
    "start": 4634,
    "end": 4642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 4645,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4651,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4656,
    "end": 4657
  },
  {
    "type": "Identifier",
    "value": "consume2",
    "start": 4660,
    "end": 4668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4668,
    "end": 4669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4670,
    "end": 4671
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4671,
    "end": 4675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4677,
    "end": 4679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4680,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4684,
    "end": 4685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4689,
    "end": 4696
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4697,
    "end": 4705
  },
  {
    "type": "Identifier",
    "value": "multipleProducersBeforeConsumers",
    "start": 4706,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4738,
    "end": 4739
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4740,
    "end": 4741
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 4742,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4746,
    "end": 4749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4749,
    "end": 4750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4751,
    "end": 4752
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4755,
    "end": 4756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4759,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4764,
    "end": 4770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4770,
    "end": 4771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4772,
    "end": 4774
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4780,
    "end": 4781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4783,
    "end": 4784
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4784,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4787,
    "end": 4788
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4789,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4797,
    "end": 4799
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 4800,
    "end": 4802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4802,
    "end": 4803
  },
  {
    "type": "Identifier",
    "value": "consume1",
    "start": 4806,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4816,
    "end": 4817
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 4817,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4823,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4824,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4826,
    "end": 4828
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4829,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Identifier",
    "value": "consume2",
    "start": 4837,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4848,
    "end": 4852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4852,
    "end": 4853
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 4854,
    "end": 4856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4858,
    "end": 4860
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4861,
    "end": 4865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4865,
    "end": 4866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4868,
    "end": 4869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4869,
    "end": 4870
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4873,
    "end": 4874
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 4875,
    "end": 4877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4878,
    "end": 4879
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4881,
    "end": 4886
  },
  {
    "type": "Identifier",
    "value": "resMultipleProducersBeforeConsumers",
    "start": 4887,
    "end": 4922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "multipleProducersBeforeConsumers",
    "start": 4925,
    "end": 4957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4957,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4963,
    "end": 4964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4966,
    "end": 4969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4969,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4971,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4974,
    "end": 4975
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4975,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4983,
    "end": 4984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4984,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4987,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4992,
    "end": 4994
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 4995,
    "end": 5001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5002,
    "end": 5005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5006,
    "end": 5007
  },
  {
    "type": "Identifier",
    "value": "consume1",
    "start": 5010,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5018,
    "end": 5019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5020,
    "end": 5021
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 5021,
    "end": 5025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5025,
    "end": 5026
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5027,
    "end": 5029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5031,
    "end": 5032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Identifier",
    "value": "consume2",
    "start": 5036,
    "end": 5044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5044,
    "end": 5045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 5047,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5053,
    "end": 5055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5061,
    "end": 5062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5062,
    "end": 5063
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5065,
    "end": 5072
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5073,
    "end": 5081
  },
  {
    "type": "Identifier",
    "value": "withConditionalExpression",
    "start": 5082,
    "end": 5107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5107,
    "end": 5108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5108,
    "end": 5109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5109,
    "end": 5110
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5111,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5113,
    "end": 5114
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5115,
    "end": 5117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5117,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5118,
    "end": 5119
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5119,
    "end": 5122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5122,
    "end": 5123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5124,
    "end": 5125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5131,
    "end": 5132
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 5132,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5138,
    "end": 5144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5144,
    "end": 5145
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5146,
    "end": 5148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5149,
    "end": 5150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5150,
    "end": 5151
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5154,
    "end": 5155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5155,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 5158,
    "end": 5162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5167,
    "end": 5169
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5170,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5176,
    "end": 5177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 5180,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5186,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5190,
    "end": 5192
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5193,
    "end": 5195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5195,
    "end": 5196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5199,
    "end": 5200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5201,
    "end": 5202
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5203,
    "end": 5204
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5205,
    "end": 5207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5209,
    "end": 5211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5211,
    "end": 5212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5212,
    "end": 5213
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5215,
    "end": 5220
  },
  {
    "type": "Identifier",
    "value": "resWithConditionalExpression",
    "start": 5221,
    "end": 5249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5250,
    "end": 5251
  },
  {
    "type": "Identifier",
    "value": "withConditionalExpression",
    "start": 5252,
    "end": 5277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5278,
    "end": 5279
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5282,
    "end": 5283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5283,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5285,
    "end": 5286
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5286,
    "end": 5289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5289,
    "end": 5290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5291,
    "end": 5293
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5294,
    "end": 5295
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5295,
    "end": 5298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5298,
    "end": 5299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5299,
    "end": 5300
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5303,
    "end": 5304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5304,
    "end": 5305
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 5306,
    "end": 5310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5310,
    "end": 5311
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 5311,
    "end": 5317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5317,
    "end": 5318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5322,
    "end": 5323
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5323,
    "end": 5326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5326,
    "end": 5327
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5328,
    "end": 5330
  },
  {
    "type": "String",
    "value": "\"first\"",
    "start": 5331,
    "end": 5338
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5339,
    "end": 5341
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 5342,
    "end": 5347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5350,
    "end": 5351
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5351,
    "end": 5354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5354,
    "end": 5355
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5356,
    "end": 5358
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 5359,
    "end": 5364
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5365,
    "end": 5367
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 5368,
    "end": 5373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5378,
    "end": 5379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5380,
    "end": 5381
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5381,
    "end": 5384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5384,
    "end": 5385
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5386,
    "end": 5388
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 5389,
    "end": 5396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5396,
    "end": 5397
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5397,
    "end": 5400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5400,
    "end": 5401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5401,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5403,
    "end": 5404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5404,
    "end": 5405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5405,
    "end": 5406
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5408,
    "end": 5415
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5416,
    "end": 5424
  },
  {
    "type": "Identifier",
    "value": "onion",
    "start": 5425,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5431,
    "end": 5432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5432,
    "end": 5433
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5434,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5436,
    "end": 5437
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5438,
    "end": 5440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5441,
    "end": 5442
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5442,
    "end": 5445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5445,
    "end": 5446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5447,
    "end": 5448
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5451,
    "end": 5452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5452,
    "end": 5453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5454,
    "end": 5455
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 5455,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5459,
    "end": 5460
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5461,
    "end": 5467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5467,
    "end": 5468
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5469,
    "end": 5471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5472,
    "end": 5473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5473,
    "end": 5474
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 5477,
    "end": 5483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5483,
    "end": 5484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5485,
    "end": 5486
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5491,
    "end": 5492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5492,
    "end": 5493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5494,
    "end": 5495
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 5495,
    "end": 5499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5499,
    "end": 5500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5502,
    "end": 5503
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5504,
    "end": 5506
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5507,
    "end": 5509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5509,
    "end": 5510
  },
  {
    "type": "Identifier",
    "value": "nested2",
    "start": 5515,
    "end": 5522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5522,
    "end": 5523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5524,
    "end": 5525
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5532,
    "end": 5533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5533,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 5536,
    "end": 5540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5540,
    "end": 5541
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5542,
    "end": 5544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5544,
    "end": 5545
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5546,
    "end": 5548
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5549,
    "end": 5551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5551,
    "end": 5552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5557,
    "end": 5558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5558,
    "end": 5559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5562,
    "end": 5563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5563,
    "end": 5564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5565,
    "end": 5566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5566,
    "end": 5567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5567,
    "end": 5568
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5569,
    "end": 5570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5571,
    "end": 5572
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5573,
    "end": 5575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5575,
    "end": 5576
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5577,
    "end": 5579
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5579,
    "end": 5580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5580,
    "end": 5581
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5583,
    "end": 5588
  },
  {
    "type": "Identifier",
    "value": "resOnion",
    "start": 5589,
    "end": 5597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5598,
    "end": 5599
  },
  {
    "type": "Identifier",
    "value": "onion",
    "start": 5600,
    "end": 5605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5605,
    "end": 5606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5606,
    "end": 5607
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5610,
    "end": 5611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5611,
    "end": 5612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5613,
    "end": 5614
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5614,
    "end": 5617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5617,
    "end": 5618
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5619,
    "end": 5621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5622,
    "end": 5623
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5623,
    "end": 5626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5626,
    "end": 5627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5627,
    "end": 5628
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 5631,
    "end": 5637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5637,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5639,
    "end": 5640
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5645,
    "end": 5646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5648,
    "end": 5649
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5649,
    "end": 5652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5652,
    "end": 5653
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5654,
    "end": 5656
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5657,
    "end": 5660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5660,
    "end": 5661
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 5661,
    "end": 5665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5665,
    "end": 5666
  },
  {
    "type": "String",
    "value": "\",\"",
    "start": 5666,
    "end": 5669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5669,
    "end": 5670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5670,
    "end": 5671
  },
  {
    "type": "Identifier",
    "value": "nested2",
    "start": 5676,
    "end": 5683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5683,
    "end": 5684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5685,
    "end": 5686
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5693,
    "end": 5694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5694,
    "end": 5695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5697,
    "end": 5700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5700,
    "end": 5701
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5702,
    "end": 5704
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 5705,
    "end": 5712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5712,
    "end": 5713
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5713,
    "end": 5716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5716,
    "end": 5717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5717,
    "end": 5718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5723,
    "end": 5724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5724,
    "end": 5725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5728,
    "end": 5729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5729,
    "end": 5730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5731,
    "end": 5732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5732,
    "end": 5733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5733,
    "end": 5734
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5736,
    "end": 5743
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5744,
    "end": 5752
  },
  {
    "type": "Identifier",
    "value": "onion2",
    "start": 5753,
    "end": 5759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5759,
    "end": 5760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5760,
    "end": 5761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5761,
    "end": 5762
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5763,
    "end": 5765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5765,
    "end": 5766
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5767,
    "end": 5769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5769,
    "end": 5770
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 5771,
    "end": 5773
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5773,
    "end": 5774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5774,
    "end": 5775
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5775,
    "end": 5778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5778,
    "end": 5779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5780,
    "end": 5781
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5784,
    "end": 5785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5785,
    "end": 5786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5787,
    "end": 5788
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 5788,
    "end": 5792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5792,
    "end": 5793
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5794,
    "end": 5800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5800,
    "end": 5801
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5802,
    "end": 5804
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5805,
    "end": 5806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5806,
    "end": 5807
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 5810,
    "end": 5816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5816,
    "end": 5817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5818,
    "end": 5819
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5824,
    "end": 5825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5825,
    "end": 5826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5827,
    "end": 5828
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 5828,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5832,
    "end": 5833
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5834,
    "end": 5835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5835,
    "end": 5836
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5837,
    "end": 5839
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5840,
    "end": 5842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5842,
    "end": 5843
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5848,
    "end": 5849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5849,
    "end": 5850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5851,
    "end": 5852
  },
  {
    "type": "Identifier",
    "value": "arg3",
    "start": 5852,
    "end": 5856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5856,
    "end": 5857
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5858,
    "end": 5859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5859,
    "end": 5860
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5861,
    "end": 5863
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5864,
    "end": 5866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5866,
    "end": 5867
  },
  {
    "type": "Identifier",
    "value": "nested2",
    "start": 5872,
    "end": 5879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5879,
    "end": 5880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 5889,
    "end": 5890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5892,
    "end": 5893
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 5893,
    "end": 5897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5897,
    "end": 5898
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5899,
    "end": 5901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5901,
    "end": 5902
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5903,
    "end": 5905
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 5906,
    "end": 5908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5908,
    "end": 5909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5914,
    "end": 5915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5915,
    "end": 5916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5919,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5920,
    "end": 5921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5922,
    "end": 5923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5923,
    "end": 5924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5924,
    "end": 5925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5926,
    "end": 5927
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5927,
    "end": 5928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5928,
    "end": 5929
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 5930,
    "end": 5932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5932,
    "end": 5933
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 5934,
    "end": 5936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5936,
    "end": 5937
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 5938,
    "end": 5940
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5940,
    "end": 5941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5941,
    "end": 5942
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5944,
    "end": 5949
  },
  {
    "type": "Identifier",
    "value": "resOnion2",
    "start": 5950,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5960,
    "end": 5961
  },
  {
    "type": "Identifier",
    "value": "onion2",
    "start": 5962,
    "end": 5968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5968,
    "end": 5969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5969,
    "end": 5970
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5974,
    "end": 5975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5976,
    "end": 5977
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5977,
    "end": 5980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5980,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5982,
    "end": 5984
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5985,
    "end": 5986
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5986,
    "end": 5989
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5989,
    "end": 5990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5990,
    "end": 5991
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 5994,
    "end": 6000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6000,
    "end": 6001
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6002,
    "end": 6003
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 6008,
    "end": 6009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6009,
    "end": 6010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6011,
    "end": 6012
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 6012,
    "end": 6015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6015,
    "end": 6016
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6017,
    "end": 6019
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 6020,
    "end": 6023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6023,
    "end": 6024
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 6024,
    "end": 6028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6028,
    "end": 6029
  },
  {
    "type": "String",
    "value": "\",\"",
    "start": 6029,
    "end": 6032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6032,
    "end": 6033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6033,
    "end": 6034
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 6039,
    "end": 6040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6040,
    "end": 6041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6042,
    "end": 6043
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 6043,
    "end": 6046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6046,
    "end": 6047
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6048,
    "end": 6050
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 6051,
    "end": 6057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6057,
    "end": 6058
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 6058,
    "end": 6061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6061,
    "end": 6062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6062,
    "end": 6063
  },
  {
    "type": "Identifier",
    "value": "nested2",
    "start": 6068,
    "end": 6075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6075,
    "end": 6076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6077,
    "end": 6078
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6086,
    "end": 6087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6088,
    "end": 6089
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 6089,
    "end": 6092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6092,
    "end": 6093
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6094,
    "end": 6096
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 6097,
    "end": 6104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6104,
    "end": 6105
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 6105,
    "end": 6108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6108,
    "end": 6109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6109,
    "end": 6110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6115,
    "end": 6116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6116,
    "end": 6117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6120,
    "end": 6121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6121,
    "end": 6122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6123,
    "end": 6124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6124,
    "end": 6125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6125,
    "end": 6126
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6128,
    "end": 6135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6136,
    "end": 6144
  },
  {
    "type": "Identifier",
    "value": "distant",
    "start": 6145,
    "end": 6152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6152,
    "end": 6153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6153,
    "end": 6154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6154,
    "end": 6155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6155,
    "end": 6156
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6156,
    "end": 6160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6160,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6162,
    "end": 6163
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6166,
    "end": 6169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6169,
    "end": 6170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6171,
    "end": 6172
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 6177,
    "end": 6180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6180,
    "end": 6181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6182,
    "end": 6183
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 6190,
    "end": 6193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6193,
    "end": 6194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6195,
    "end": 6196
  },
  {
    "type": "Identifier",
    "value": "producer",
    "start": 6205,
    "end": 6213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6213,
    "end": 6214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6215,
    "end": 6216
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 6216,
    "end": 6219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6219,
    "end": 6220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6221,
    "end": 6227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6227,
    "end": 6228
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6229,
    "end": 6231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6232,
    "end": 6233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6233,
    "end": 6234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6241,
    "end": 6242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6242,
    "end": 6243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6248,
    "end": 6249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6249,
    "end": 6250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6253,
    "end": 6254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6254,
    "end": 6255
  },
  {
    "type": "Identifier",
    "value": "consumer",
    "start": 6258,
    "end": 6266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6266,
    "end": 6267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6268,
    "end": 6269
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 6269,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6272,
    "end": 6273
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6274,
    "end": 6275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6275,
    "end": 6276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6277,
    "end": 6279
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 6280,
    "end": 6287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6287,
    "end": 6288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6289,
    "end": 6290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6290,
    "end": 6291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6291,
    "end": 6292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6293,
    "end": 6294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6294,
    "end": 6295
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6297,
    "end": 6302
  },
  {
    "type": "Identifier",
    "value": "distantRes",
    "start": 6303,
    "end": 6313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6314,
    "end": 6315
  },
  {
    "type": "Identifier",
    "value": "distant",
    "start": 6316,
    "end": 6323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6323,
    "end": 6324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6324,
    "end": 6325
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6328,
    "end": 6331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6331,
    "end": 6332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6333,
    "end": 6334
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 6339,
    "end": 6342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6342,
    "end": 6343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6344,
    "end": 6345
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 6352,
    "end": 6355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6355,
    "end": 6356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6357,
    "end": 6358
  },
  {
    "type": "Identifier",
    "value": "producer",
    "start": 6367,
    "end": 6375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6375,
    "end": 6376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6377,
    "end": 6378
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 6378,
    "end": 6381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6381,
    "end": 6382
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6383,
    "end": 6385
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6386,
    "end": 6387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6387,
    "end": 6388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6395,
    "end": 6396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6396,
    "end": 6397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6402,
    "end": 6403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6407,
    "end": 6408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6408,
    "end": 6409
  },
  {
    "type": "Identifier",
    "value": "consumer",
    "start": 6412,
    "end": 6420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6420,
    "end": 6421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6422,
    "end": 6423
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 6423,
    "end": 6426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6426,
    "end": 6427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6428,
    "end": 6430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6431,
    "end": 6432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6432,
    "end": 6433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6433,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6435,
    "end": 6436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6436,
    "end": 6437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6437,
    "end": 6438
  }
]
```

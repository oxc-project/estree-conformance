__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
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
                          "start": 30,
                          "end": 34
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 37,
                                  "end": 38
                                },
                                "elementType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 40,
                                      "end": 46
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 49,
                                      "end": 55
                                    }
                                  ],
                                  "start": 40,
                                  "end": 55
                                },
                                "optional": false,
                                "start": 37,
                                "end": 55
                              },
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 57,
                                  "end": 58
                                },
                                "elementType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 60,
                                      "end": 66
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 69,
                                      "end": 76
                                    }
                                  ],
                                  "start": 60,
                                  "end": 76
                                },
                                "optional": false,
                                "start": 57,
                                "end": 76
                              }
                            ],
                            "start": 36,
                            "end": 77
                          },
                          "start": 34,
                          "end": 77
                        },
                        "value": null,
                        "start": 27,
                        "end": 77
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 82,
                        "end": 86
                      },
                      "start": 79,
                      "end": 86
                    },
                    "start": 26,
                    "end": 86
                  },
                  {
                    "type": "TSFunctionType",
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
                          "start": 97,
                          "end": 101
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 104,
                                  "end": 105
                                },
                                "elementType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 107,
                                      "end": 113
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 116,
                                      "end": 123
                                    }
                                  ],
                                  "start": 107,
                                  "end": 123
                                },
                                "optional": false,
                                "start": 104,
                                "end": 123
                              },
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 125,
                                  "end": 126
                                },
                                "elementType": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 128,
                                      "end": 134
                                    },
                                    {
                                      "type": "TSBooleanKeyword",
                                      "start": 137,
                                      "end": 144
                                    }
                                  ],
                                  "start": 128,
                                  "end": 144
                                },
                                "optional": false,
                                "start": 125,
                                "end": 144
                              }
                            ],
                            "start": 103,
                            "end": 145
                          },
                          "start": 101,
                          "end": 145
                        },
                        "value": null,
                        "start": 94,
                        "end": 145
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 150,
                        "end": 154
                      },
                      "start": 147,
                      "end": 154
                    },
                    "start": 93,
                    "end": 154
                  }
                ],
                "start": 23,
                "end": 155
              },
              "start": 19,
              "end": 155
            },
            "start": 14,
            "end": 155
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 155
        }
      ],
      "declare": true,
      "start": 0,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 163
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 164,
            "end": 166
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 168,
            "end": 172
          }
        ],
        "optional": false,
        "start": 158,
        "end": 173
      },
      "directive": null,
      "start": 158,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 180
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 181,
            "end": 183
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 186,
                "end": 190
              }
            ],
            "start": 185,
            "end": 191
          }
        ],
        "optional": false,
        "start": 175,
        "end": 192
      },
      "directive": null,
      "start": 175,
      "end": 193
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 226
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
              "start": 230,
              "end": 231
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 249,
                  "end": 256
                },
                "start": 249,
                "end": 258
              },
              "start": 240,
              "end": 258
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 230,
            "end": 258
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 281,
                  "end": 288
                },
                "start": 281,
                "end": 290
              },
              "start": 272,
              "end": 290
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 290
          }
        ],
        "start": 226,
        "end": 293
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                    "start": 304,
                    "end": 308
                  },
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
                        "start": 310,
                        "end": 311
                      },
                      "typeArguments": null,
                      "start": 310,
                      "end": 311
                    },
                    "start": 308,
                    "end": 311
                  },
                  "value": null,
                  "start": 301,
                  "end": 311
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 316,
                  "end": 320
                },
                "start": 313,
                "end": 320
              },
              "start": 300,
              "end": 320
            },
            "start": 298,
            "end": 320
          },
          "start": 297,
          "end": 320
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                    "start": 331,
                    "end": 335
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 338
                      },
                      "typeArguments": null,
                      "start": 337,
                      "end": 338
                    },
                    "start": 335,
                    "end": 338
                  },
                  "value": null,
                  "start": 328,
                  "end": 338
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 343,
                  "end": 347
                },
                "start": 340,
                "end": 347
              },
              "start": 327,
              "end": 347
            },
            "start": 325,
            "end": 347
          },
          "start": 324,
          "end": 347
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 368
                          },
                          "typeArguments": null,
                          "start": 360,
                          "end": 368
                        },
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 378,
                            "end": 379
                          },
                          "typeArguments": null,
                          "start": 371,
                          "end": 379
                        }
                      ],
                      "start": 360,
                      "end": 379
                    },
                    "start": 358,
                    "end": 379
                  },
                  "start": 355,
                  "end": 379
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 384,
                  "end": 388
                },
                "start": 381,
                "end": 388
              },
              "start": 354,
              "end": 388
            },
            "start": 352,
            "end": 388
          },
          "start": 351,
          "end": 388
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 393,
          "end": 397
        },
        "start": 391,
        "end": 397
      },
      "body": null,
      "expression": false,
      "start": 204,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 405
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 413,
                        "end": 419
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 422,
                        "end": 429
                      }
                    ],
                    "start": 413,
                    "end": 429
                  },
                  "start": 411,
                  "end": 429
                },
                "start": 410,
                "end": 429
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 434,
                        "end": 440
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 443,
                        "end": 449
                      }
                    ],
                    "start": 434,
                    "end": 449
                  },
                  "start": 432,
                  "end": 449
                },
                "start": 431,
                "end": 449
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 454,
              "end": 456
            },
            "id": null,
            "generator": false,
            "start": 409,
            "end": 456
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 464,
                        "end": 470
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 473,
                        "end": 480
                      }
                    ],
                    "start": 464,
                    "end": 480
                  },
                  "start": 462,
                  "end": 480
                },
                "start": 461,
                "end": 480
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 485,
                        "end": 491
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 494,
                        "end": 501
                      }
                    ],
                    "start": 485,
                    "end": 501
                  },
                  "start": 483,
                  "end": 501
                },
                "start": 482,
                "end": 501
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 506,
              "end": 508
            },
            "id": null,
            "generator": false,
            "start": 460,
            "end": 508
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 515
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 528
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 529,
                        "end": 533
                      },
                      {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 535,
                        "end": 537
                      }
                    ],
                    "optional": false,
                    "start": 526,
                    "end": 538
                  },
                  "directive": null,
                  "start": 526,
                  "end": 539
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 544,
                      "end": 546
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 547,
                        "end": 551
                      },
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 554,
                            "end": 556
                          }
                        ],
                        "start": 553,
                        "end": 557
                      }
                    ],
                    "optional": false,
                    "start": 544,
                    "end": 558
                  },
                  "directive": null,
                  "start": 544,
                  "end": 559
                }
              ],
              "start": 520,
              "end": 572
            },
            "id": null,
            "generator": false,
            "start": 512,
            "end": 572
          }
        ],
        "optional": false,
        "start": 400,
        "end": 575
      },
      "directive": null,
      "start": 400,
      "end": 576
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 576
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 79,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
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
    "value": "...",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 147,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
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
    "value": "test1",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 204,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 212,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 232,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 240,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 264,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 272,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 281,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 313,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 331,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "=>",
    "start": 340,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 360,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 371,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 381,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 400,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 422,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 535,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 547,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 553,
    "end": 554
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  }
]
```

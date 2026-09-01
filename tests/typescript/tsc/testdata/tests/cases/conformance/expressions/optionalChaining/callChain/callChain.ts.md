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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
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
                          "start": 35,
                          "end": 39
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 41,
                              "end": 44
                            },
                            "start": 41,
                            "end": 46
                          },
                          "start": 39,
                          "end": 46
                        },
                        "value": null,
                        "start": 32,
                        "end": 46
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      },
                      "start": 48,
                      "end": 57
                    },
                    "start": 31,
                    "end": 57
                  }
                ],
                "start": 18,
                "end": 58
              },
              "start": 16,
              "end": 58
            },
            "start": 14,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 58
        }
      ],
      "declare": true,
      "start": 0,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 62
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true,
          "start": 60,
          "end": 66
        },
        "start": 60,
        "end": 66
      },
      "directive": null,
      "start": 60,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 70
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 73,
              "end": 74
            }
          ],
          "optional": true,
          "start": 68,
          "end": 75
        },
        "start": 68,
        "end": 75
      },
      "directive": null,
      "start": 68,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 79
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 86,
                    "end": 87
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 89,
                    "end": 90
                  }
                ],
                "start": 85,
                "end": 91
              },
              "start": 82,
              "end": 91
            }
          ],
          "optional": true,
          "start": 77,
          "end": 92
        },
        "start": 77,
        "end": 92
      },
      "directive": null,
      "start": 77,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 96
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 99,
              "end": 100
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 106,
                    "end": 107
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 109,
                    "end": 110
                  }
                ],
                "start": 105,
                "end": 111
              },
              "start": 102,
              "end": 111
            },
            {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 113,
              "end": 114
            }
          ],
          "optional": true,
          "start": 94,
          "end": 115
        },
        "start": 94,
        "end": 115
      },
      "directive": null,
      "start": 94,
      "end": 116
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 136,
                    "end": 145
                  },
                  {
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
                          "start": 150,
                          "end": 151
                        },
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
                                  "start": 157,
                                  "end": 161
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 163,
                                      "end": 166
                                    },
                                    "start": 163,
                                    "end": 168
                                  },
                                  "start": 161,
                                  "end": 168
                                },
                                "value": null,
                                "start": 154,
                                "end": 168
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 173,
                                "end": 179
                              },
                              "start": 170,
                              "end": 179
                            },
                            "start": 153,
                            "end": 179
                          },
                          "start": 151,
                          "end": 179
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 150,
                        "end": 179
                      }
                    ],
                    "start": 148,
                    "end": 181
                  }
                ],
                "start": 136,
                "end": 181
              },
              "start": 134,
              "end": 181
            },
            "start": 132,
            "end": 181
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 181
        }
      ],
      "declare": true,
      "start": 118,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 185
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "optional": true,
            "computed": false,
            "start": 183,
            "end": 188
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 183,
          "end": 190
        },
        "start": 183,
        "end": 190
      },
      "directive": null,
      "start": 183,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 194
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "optional": true,
            "computed": false,
            "start": 192,
            "end": 197
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 198,
              "end": 199
            }
          ],
          "optional": false,
          "start": 192,
          "end": 200
        },
        "start": 192,
        "end": 200
      },
      "directive": null,
      "start": 192,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 204
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "optional": true,
            "computed": false,
            "start": 202,
            "end": 207
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 212,
                    "end": 213
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 215,
                    "end": 216
                  }
                ],
                "start": 211,
                "end": 217
              },
              "start": 208,
              "end": 217
            }
          ],
          "optional": false,
          "start": 202,
          "end": 218
        },
        "start": 202,
        "end": 218
      },
      "directive": null,
      "start": 202,
      "end": 219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 222
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "optional": true,
            "computed": false,
            "start": 220,
            "end": 225
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 226,
              "end": 227
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 233,
                    "end": 234
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 236,
                    "end": 237
                  }
                ],
                "start": 232,
                "end": 238
              },
              "start": 229,
              "end": 238
            },
            {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 240,
              "end": 241
            }
          ],
          "optional": false,
          "start": 220,
          "end": 242
        },
        "start": 220,
        "end": 242
      },
      "directive": null,
      "start": 220,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 246
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 249,
              "end": 252
            },
            "optional": true,
            "computed": true,
            "start": 244,
            "end": 253
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 244,
          "end": 255
        },
        "start": 244,
        "end": 255
      },
      "directive": null,
      "start": 244,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 259
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 262,
              "end": 265
            },
            "optional": true,
            "computed": true,
            "start": 257,
            "end": 266
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 267,
              "end": 268
            }
          ],
          "optional": false,
          "start": 257,
          "end": 269
        },
        "start": 257,
        "end": 269
      },
      "directive": null,
      "start": 257,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 273
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 276,
              "end": 279
            },
            "optional": true,
            "computed": true,
            "start": 271,
            "end": 280
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 285,
                    "end": 286
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 288,
                    "end": 289
                  }
                ],
                "start": 284,
                "end": 290
              },
              "start": 281,
              "end": 290
            }
          ],
          "optional": false,
          "start": 271,
          "end": 291
        },
        "start": 271,
        "end": 291
      },
      "directive": null,
      "start": 271,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 295
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 298,
              "end": 301
            },
            "optional": true,
            "computed": true,
            "start": 293,
            "end": 302
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 303,
              "end": 304
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 310,
                    "end": 311
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 313,
                    "end": 314
                  }
                ],
                "start": 309,
                "end": 315
              },
              "start": 306,
              "end": 315
            },
            {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 317,
              "end": 318
            }
          ],
          "optional": false,
          "start": 293,
          "end": 319
        },
        "start": 293,
        "end": 319
      },
      "directive": null,
      "start": 293,
      "end": 320
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
            "name": "o3",
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 343
                    },
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
                                  "start": 350,
                                  "end": 354
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 356,
                                      "end": 359
                                    },
                                    "start": 356,
                                    "end": 361
                                  },
                                  "start": 354,
                                  "end": 361
                                },
                                "value": null,
                                "start": 347,
                                "end": 361
                              }
                            ],
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
                                      "name": "c",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 368,
                                      "end": 369
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 371,
                                        "end": 377
                                      },
                                      "start": 369,
                                      "end": 377
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 368,
                                    "end": 377
                                  }
                                ],
                                "start": 366,
                                "end": 379
                              },
                              "start": 363,
                              "end": 379
                            },
                            "start": 346,
                            "end": 379
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 383,
                            "end": 392
                          }
                        ],
                        "start": 345,
                        "end": 392
                      },
                      "start": 343,
                      "end": 392
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 342,
                    "end": 392
                  }
                ],
                "start": 340,
                "end": 394
              },
              "start": 338,
              "end": 394
            },
            "start": 336,
            "end": 394
          },
          "init": null,
          "definite": false,
          "start": 336,
          "end": 394
        }
      ],
      "declare": true,
      "start": 322,
      "end": 395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 398
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 400
              },
              "optional": false,
              "computed": false,
              "start": 396,
              "end": 400
            },
            "typeArguments": null,
            "arguments": [],
            "optional": true,
            "start": 396,
            "end": 404
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "optional": false,
          "computed": false,
          "start": 396,
          "end": 406
        },
        "start": 396,
        "end": 406
      },
      "directive": null,
      "start": 396,
      "end": 407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 410
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 412
              },
              "optional": false,
              "computed": false,
              "start": 408,
              "end": 412
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 415,
                "end": 416
              }
            ],
            "optional": true,
            "start": 408,
            "end": 417
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 419
          },
          "optional": false,
          "computed": false,
          "start": 408,
          "end": 419
        },
        "start": 408,
        "end": 419
      },
      "directive": null,
      "start": 408,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 423
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "optional": false,
              "computed": false,
              "start": 421,
              "end": 425
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 432,
                      "end": 433
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 435,
                      "end": 436
                    }
                  ],
                  "start": 431,
                  "end": 437
                },
                "start": 428,
                "end": 437
              }
            ],
            "optional": true,
            "start": 421,
            "end": 438
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 440
          },
          "optional": false,
          "computed": false,
          "start": 421,
          "end": 440
        },
        "start": 421,
        "end": 440
      },
      "directive": null,
      "start": 421,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 444
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 446
              },
              "optional": false,
              "computed": false,
              "start": 442,
              "end": 446
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 449,
                "end": 450
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 456,
                      "end": 457
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 459,
                      "end": 460
                    }
                  ],
                  "start": 455,
                  "end": 461
                },
                "start": 452,
                "end": 461
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 463,
                "end": 464
              }
            ],
            "optional": true,
            "start": 442,
            "end": 465
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 467
          },
          "optional": false,
          "computed": false,
          "start": 442,
          "end": 467
        },
        "start": 442,
        "end": 467
      },
      "directive": null,
      "start": 442,
      "end": 468
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 471
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 473
              },
              "optional": false,
              "computed": false,
              "start": 469,
              "end": 473
            },
            "typeArguments": null,
            "arguments": [],
            "optional": true,
            "start": 469,
            "end": 477
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 478,
            "end": 481
          },
          "optional": false,
          "computed": true,
          "start": 469,
          "end": 482
        },
        "start": 469,
        "end": 482
      },
      "directive": null,
      "start": 469,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 486
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "optional": false,
              "computed": false,
              "start": 484,
              "end": 488
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 491,
                "end": 492
              }
            ],
            "optional": true,
            "start": 484,
            "end": 493
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 494,
            "end": 497
          },
          "optional": false,
          "computed": true,
          "start": 484,
          "end": 498
        },
        "start": 484,
        "end": 498
      },
      "directive": null,
      "start": 484,
      "end": 499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 502
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 504
              },
              "optional": false,
              "computed": false,
              "start": 500,
              "end": 504
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 511,
                      "end": 512
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 514,
                      "end": 515
                    }
                  ],
                  "start": 510,
                  "end": 516
                },
                "start": 507,
                "end": 516
              }
            ],
            "optional": true,
            "start": 500,
            "end": 517
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 518,
            "end": 521
          },
          "optional": false,
          "computed": true,
          "start": 500,
          "end": 522
        },
        "start": 500,
        "end": 522
      },
      "directive": null,
      "start": 500,
      "end": 523
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 524,
                "end": 526
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 528
              },
              "optional": false,
              "computed": false,
              "start": 524,
              "end": 528
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 531,
                "end": 532
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 538,
                      "end": 539
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 541,
                      "end": 542
                    }
                  ],
                  "start": 537,
                  "end": 543
                },
                "start": 534,
                "end": 543
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 545,
                "end": 546
              }
            ],
            "optional": true,
            "start": 524,
            "end": 547
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 548,
            "end": 551
          },
          "optional": false,
          "computed": true,
          "start": 524,
          "end": 552
        },
        "start": 524,
        "end": 552
      },
      "directive": null,
      "start": 524,
      "end": 553
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 556
              },
              "property": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 557,
                "end": 560
              },
              "optional": false,
              "computed": true,
              "start": 554,
              "end": 561
            },
            "typeArguments": null,
            "arguments": [],
            "optional": true,
            "start": 554,
            "end": 565
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 567
          },
          "optional": false,
          "computed": false,
          "start": 554,
          "end": 567
        },
        "start": 554,
        "end": 567
      },
      "directive": null,
      "start": 554,
      "end": 568
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 571
              },
              "property": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 572,
                "end": 575
              },
              "optional": false,
              "computed": true,
              "start": 569,
              "end": 576
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 579,
                "end": 580
              }
            ],
            "optional": true,
            "start": 569,
            "end": 581
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 583
          },
          "optional": false,
          "computed": false,
          "start": 569,
          "end": 583
        },
        "start": 569,
        "end": 583
      },
      "directive": null,
      "start": 569,
      "end": 584
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 587
              },
              "property": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 588,
                "end": 591
              },
              "optional": false,
              "computed": true,
              "start": 585,
              "end": 592
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 599,
                      "end": 600
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 602,
                      "end": 603
                    }
                  ],
                  "start": 598,
                  "end": 604
                },
                "start": 595,
                "end": 604
              }
            ],
            "optional": true,
            "start": 585,
            "end": 605
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 607
          },
          "optional": false,
          "computed": false,
          "start": 585,
          "end": 607
        },
        "start": 585,
        "end": 607
      },
      "directive": null,
      "start": 585,
      "end": 608
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 611
              },
              "property": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 612,
                "end": 615
              },
              "optional": false,
              "computed": true,
              "start": 609,
              "end": 616
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 619,
                "end": 620
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 626,
                      "end": 627
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 629,
                      "end": 630
                    }
                  ],
                  "start": 625,
                  "end": 631
                },
                "start": 622,
                "end": 631
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 633,
                "end": 634
              }
            ],
            "optional": true,
            "start": 609,
            "end": 635
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 637
          },
          "optional": false,
          "computed": false,
          "start": 609,
          "end": 637
        },
        "start": 609,
        "end": 637
      },
      "directive": null,
      "start": 609,
      "end": 638
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 658,
                    "end": 667
                  },
                  {
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
                            "start": 672,
                            "end": 673
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 672,
                          "end": 673
                        }
                      ],
                      "start": 671,
                      "end": 674
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
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
                                "name": "a",
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
                                      "start": 682,
                                      "end": 683
                                    },
                                    "typeArguments": null,
                                    "start": 682,
                                    "end": 683
                                  },
                                  "start": 680,
                                  "end": 683
                                },
                                "start": 679,
                                "end": 683
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
                                  "start": 688,
                                  "end": 689
                                },
                                "typeArguments": null,
                                "start": 688,
                                "end": 689
                              },
                              "start": 685,
                              "end": 689
                            },
                            "start": 678,
                            "end": 689
                          },
                          "start": 676,
                          "end": 689
                        },
                        "start": 675,
                        "end": 689
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
                          "start": 694,
                          "end": 695
                        },
                        "typeArguments": null,
                        "start": 694,
                        "end": 695
                      },
                      "start": 691,
                      "end": 695
                    },
                    "start": 671,
                    "end": 695
                  }
                ],
                "start": 658,
                "end": 696
              },
              "start": 656,
              "end": 696
            },
            "start": 654,
            "end": 696
          },
          "init": null,
          "definite": false,
          "start": 654,
          "end": 696
        }
      ],
      "declare": true,
      "start": 640,
      "end": 697
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "incr",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 719
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 723,
              "end": 729
            },
            "start": 721,
            "end": 729
          },
          "start": 720,
          "end": 729
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 732,
          "end": 738
        },
        "start": 730,
        "end": 738
      },
      "body": null,
      "expression": false,
      "start": 698,
      "end": 739
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 749,
                    "end": 755
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 758,
                    "end": 767
                  }
                ],
                "start": 749,
                "end": 767
              },
              "start": 747,
              "end": 767
            },
            "start": 746,
            "end": 767
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "o4",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 772
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "incr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 779
                }
              ],
              "optional": true,
              "start": 770,
              "end": 780
            },
            "start": 770,
            "end": 780
          },
          "definite": false,
          "start": 746,
          "end": 780
        }
      ],
      "declare": false,
      "start": 740,
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
            "name": "o5",
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
                        "start": 814,
                        "end": 815
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 814,
                      "end": 815
                    }
                  ],
                  "start": 813,
                  "end": 816
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 822,
                        "end": 831
                      },
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 841,
                            "end": 845
                          },
                          "start": 838,
                          "end": 845
                        },
                        "start": 835,
                        "end": 845
                      }
                    ],
                    "start": 822,
                    "end": 846
                  },
                  "start": 819,
                  "end": 846
                },
                "start": 813,
                "end": 846
              },
              "start": 811,
              "end": 846
            },
            "start": 809,
            "end": 846
          },
          "init": null,
          "definite": false,
          "start": 809,
          "end": 846
        }
      ],
      "declare": true,
      "start": 795,
      "end": 847
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "o5",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 850
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 851,
                  "end": 857
                }
              ],
              "start": 850,
              "end": 858
            },
            "arguments": [],
            "optional": false,
            "start": 848,
            "end": 860
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true,
          "start": 848,
          "end": 864
        },
        "start": 848,
        "end": 864
      },
      "directive": null,
      "start": 848,
      "end": 865
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 881
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 884
                },
                "optional": true,
                "computed": false,
                "start": 879,
                "end": 884
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 879,
              "end": 886
            },
            "start": 879,
            "end": 887
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 888,
            "end": 896
          },
          "optional": false,
          "computed": false,
          "start": 879,
          "end": 896
        },
        "start": 879,
        "end": 896
      },
      "directive": null,
      "start": 879,
      "end": 897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 900
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 902,
                    "end": 903
                  },
                  "optional": true,
                  "computed": false,
                  "start": 898,
                  "end": 903
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 898,
                "end": 905
              },
              "start": 898,
              "end": 906
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 907,
              "end": 915
            },
            "optional": false,
            "computed": false,
            "start": 898,
            "end": 915
          },
          "start": 898,
          "end": 916
        },
        "start": 898,
        "end": 916
      },
      "directive": null,
      "start": 898,
      "end": 917
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 917
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
    "value": "o1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 18,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 48,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 118,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 126,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 185,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 187,
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
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 194,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 204,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 222,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
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
    "value": "...",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 306,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 322,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 330,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "|",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 383,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 415,
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
    "value": ".",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 418,
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
    "value": "o3",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 428,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 433,
    "end": 434
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 517,
    "end": 518
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 524,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 537,
    "end": 538
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 543,
    "end": 544
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 547,
    "end": 548
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 556,
    "end": 557
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 561,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 571,
    "end": 572
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
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
    "value": "c",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 587,
    "end": 588
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 598,
    "end": 599
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 609,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 611,
    "end": 612
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 640,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 648,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 658,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 685,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 691,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 694,
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
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 698,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 706,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "incr",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 723,
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
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 740,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 758,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 772,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "incr",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 795,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 803,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 809,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 819,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 822,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
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
    "value": "=>",
    "start": 838,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 841,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 848,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 860,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 881,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 888,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 898,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 900,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 907,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  }
]
```

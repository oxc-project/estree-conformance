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
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
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
              "start": 22,
              "end": 23
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 32,
              "end": 38
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 38
          }
        ],
        "start": 21,
        "end": 39
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
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 51
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 53,
                          "end": 54
                        },
                        "typeArguments": null,
                        "start": 53,
                        "end": 54
                      },
                      "start": 53,
                      "end": 56
                    },
                    "start": 51,
                    "end": 56
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 47,
                  "end": 56
                }
              ],
              "start": 45,
              "end": 58
            },
            "start": 43,
            "end": 58
          },
          "start": 40,
          "end": 58
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
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 79
                    },
                    "typeArguments": null,
                    "start": 78,
                    "end": 79
                  },
                  "start": 78,
                  "end": 81
                },
                "start": 76,
                "end": 81
              },
              "accessibility": null,
              "static": false,
              "start": 63,
              "end": 82
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "firstKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 100
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
                    "start": 102,
                    "end": 103
                  },
                  "typeArguments": null,
                  "start": 102,
                  "end": 103
                },
                "start": 100,
                "end": 103
              },
              "accessibility": null,
              "static": false,
              "start": 83,
              "end": 104
            }
          ],
          "start": 61,
          "end": 106
        },
        "start": 59,
        "end": 106
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 123
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 148
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 148
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 140,
                      "end": 148
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 150
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 157
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
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 159,
                            "end": 163
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "aa",
                                "raw": "\"aa\"",
                                "start": 166,
                                "end": 170
                              },
                              {
                                "type": "Literal",
                                "value": "bb",
                                "raw": "\"bb\"",
                                "start": 172,
                                "end": 176
                              }
                            ],
                            "start": 165,
                            "end": 177
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 159,
                          "end": 177
                        }
                      ],
                      "start": 158,
                      "end": 178
                    }
                  ],
                  "optional": false,
                  "start": 153,
                  "end": 179
                },
                "definite": false,
                "start": 138,
                "end": 179
              }
            ],
            "declare": false,
            "start": 132,
            "end": 179
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
                  "name": "a",
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
                            "value": "aa",
                            "raw": "\"aa\"",
                            "start": 193,
                            "end": 197
                          },
                          "start": 193,
                          "end": 197
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bb",
                            "raw": "\"bb\"",
                            "start": 200,
                            "end": 204
                          },
                          "start": 200,
                          "end": 204
                        }
                      ],
                      "start": 193,
                      "end": 204
                    },
                    "start": 191,
                    "end": 204
                  },
                  "start": 190,
                  "end": 204
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "firstKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 215
                },
                "definite": false,
                "start": 190,
                "end": 215
              }
            ],
            "declare": false,
            "start": 184,
            "end": 216
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 234
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 234
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 230,
                      "end": 234
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 236
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 243
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
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 245,
                            "end": 249
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "aa",
                                "raw": "\"aa\"",
                                "start": 252,
                                "end": 256
                              },
                              {
                                "type": "Literal",
                                "value": "bb",
                                "raw": "\"bb\"",
                                "start": 258,
                                "end": 262
                              }
                            ],
                            "start": 251,
                            "end": 263
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 245,
                          "end": 263
                        }
                      ],
                      "start": 244,
                      "end": 264
                    }
                  ],
                  "optional": false,
                  "start": 239,
                  "end": 265
                },
                "definite": false,
                "start": 228,
                "end": 265
              }
            ],
            "declare": false,
            "start": 222,
            "end": 265
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "aa",
                              "raw": "\"aa\"",
                              "start": 280,
                              "end": 284
                            },
                            "start": 280,
                            "end": 284
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bb",
                              "raw": "\"bb\"",
                              "start": 287,
                              "end": 291
                            },
                            "start": 287,
                            "end": 291
                          }
                        ],
                        "start": 280,
                        "end": 291
                      },
                      "start": 279,
                      "end": 294
                    },
                    "start": 277,
                    "end": 294
                  },
                  "start": 276,
                  "end": 294
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 301
                },
                "definite": false,
                "start": 276,
                "end": 301
              }
            ],
            "declare": false,
            "start": 270,
            "end": 302
          }
        ],
        "start": 126,
        "end": 304
      },
      "expression": false,
      "start": 109,
      "end": 304
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 322
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 343
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 343
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 339,
                      "end": 343
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 353
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "firstKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 353
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 345,
                      "end": 353
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 355
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 362
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
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 364,
                            "end": 368
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "aa",
                                "raw": "\"aa\"",
                                "start": 371,
                                "end": 375
                              },
                              {
                                "type": "Literal",
                                "value": "bb",
                                "raw": "\"bb\"",
                                "start": 377,
                                "end": 381
                              }
                            ],
                            "start": 370,
                            "end": 382
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 364,
                          "end": 382
                        }
                      ],
                      "start": 363,
                      "end": 383
                    }
                  ],
                  "optional": false,
                  "start": 358,
                  "end": 384
                },
                "definite": false,
                "start": 337,
                "end": 384
              }
            ],
            "declare": false,
            "start": 331,
            "end": 384
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
                  "name": "a",
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
                            "value": "aa",
                            "raw": "\"aa\"",
                            "start": 398,
                            "end": 402
                          },
                          "start": 398,
                          "end": 402
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bb",
                            "raw": "\"bb\"",
                            "start": 405,
                            "end": 409
                          },
                          "start": 405,
                          "end": 409
                        }
                      ],
                      "start": 398,
                      "end": 409
                    },
                    "start": 396,
                    "end": 409
                  },
                  "start": 395,
                  "end": 409
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "firstKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 420
                },
                "definite": false,
                "start": 395,
                "end": 420
              }
            ],
            "declare": false,
            "start": 389,
            "end": 421
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "aa",
                              "raw": "\"aa\"",
                              "start": 436,
                              "end": 440
                            },
                            "start": 436,
                            "end": 440
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bb",
                              "raw": "\"bb\"",
                              "start": 443,
                              "end": 447
                            },
                            "start": 443,
                            "end": 447
                          }
                        ],
                        "start": 436,
                        "end": 447
                      },
                      "start": 435,
                      "end": 450
                    },
                    "start": 433,
                    "end": 450
                  },
                  "start": 432,
                  "end": 450
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 457
                },
                "definite": false,
                "start": 432,
                "end": 457
              }
            ],
            "declare": false,
            "start": 426,
            "end": 458
          }
        ],
        "start": 325,
        "end": 460
      },
      "expression": false,
      "start": 308,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 476
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
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 492
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 499
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
                            "name": "keys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 505
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "aa",
                                "raw": "\"aa\"",
                                "start": 508,
                                "end": 512
                              },
                              {
                                "type": "Literal",
                                "value": "bb",
                                "raw": "\"bb\"",
                                "start": 514,
                                "end": 518
                              }
                            ],
                            "start": 507,
                            "end": 519
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 501,
                          "end": 519
                        }
                      ],
                      "start": 500,
                      "end": 520
                    }
                  ],
                  "optional": false,
                  "start": 495,
                  "end": 521
                },
                "definite": false,
                "start": 491,
                "end": 521
              }
            ],
            "declare": false,
            "start": 485,
            "end": 521
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
                  "name": "a",
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
                            "value": "aa",
                            "raw": "\"aa\"",
                            "start": 535,
                            "end": 539
                          },
                          "start": 535,
                          "end": 539
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bb",
                            "raw": "\"bb\"",
                            "start": 542,
                            "end": 546
                          },
                          "start": 542,
                          "end": 546
                        }
                      ],
                      "start": 535,
                      "end": 546
                    },
                    "start": 533,
                    "end": 546
                  },
                  "start": 532,
                  "end": 546
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 550
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "firstKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 551,
                    "end": 559
                  },
                  "optional": false,
                  "computed": false,
                  "start": 549,
                  "end": 559
                },
                "definite": false,
                "start": 532,
                "end": 559
              }
            ],
            "declare": false,
            "start": 526,
            "end": 560
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "aa",
                              "raw": "\"aa\"",
                              "start": 575,
                              "end": 579
                            },
                            "start": 575,
                            "end": 579
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bb",
                              "raw": "\"bb\"",
                              "start": 582,
                              "end": 586
                            },
                            "start": 582,
                            "end": 586
                          }
                        ],
                        "start": 575,
                        "end": 586
                      },
                      "start": 574,
                      "end": 589
                    },
                    "start": 572,
                    "end": 589
                  },
                  "start": 571,
                  "end": 589
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 593
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 598
                  },
                  "optional": false,
                  "computed": false,
                  "start": 592,
                  "end": 598
                },
                "definite": false,
                "start": 571,
                "end": 598
              }
            ],
            "declare": false,
            "start": 565,
            "end": 599
          }
        ],
        "start": 479,
        "end": 601
      },
      "expression": false,
      "start": 462,
      "end": 601
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 601
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
    "value": "func",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 24,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 83,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "firstKey",
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
    "type": "Identifier",
    "value": "T",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
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
    "value": "function",
    "start": 109,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "func1",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "firstKey",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 166,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 198,
    "end": 199
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "firstKey",
    "start": 207,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 251,
    "end": 252
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 270,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 285,
    "end": 286
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 297,
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
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 308,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "func2",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "firstKey",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 389,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 403,
    "end": 404
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 405,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "firstKey",
    "start": 412,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 426,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 441,
    "end": 442
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 443,
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
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 462,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "func3",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 485,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 501,
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
    "value": "[",
    "start": 507,
    "end": 508
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 526,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 535,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 540,
    "end": 541
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "firstKey",
    "start": 551,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 565,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 580,
    "end": 581
  },
  {
    "type": "String",
    "value": "\"bb\"",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 594,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  }
]
```

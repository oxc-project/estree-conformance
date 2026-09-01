__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 14,
        "end": 17
      },
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 33
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
              "start": 34,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 35
          }
        ],
        "start": 33,
        "end": 36
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 47
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "typeArguments": null,
            "start": 57,
            "end": 58
          },
          "start": 51,
          "end": 58
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 64
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 66
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 68
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 68
                },
                "start": 65,
                "end": 69
              }
            ],
            "start": 64,
            "end": 70
          },
          "start": 61,
          "end": 70
        },
        "optional": false,
        "readonly": null,
        "start": 39,
        "end": 73
      },
      "declare": false,
      "start": 20,
      "end": 74
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 91
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
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 91,
        "end": 94
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "typeArguments": null,
              "start": 100,
              "end": 101
            },
            "start": 98,
            "end": 101
          },
          "start": 95,
          "end": 101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Boxified",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 112
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
                  "start": 113,
                  "end": 114
                },
                "typeArguments": null,
                "start": 113,
                "end": 114
              }
            ],
            "start": 112,
            "end": 115
          },
          "start": 104,
          "end": 115
        },
        "start": 102,
        "end": 115
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 136
                },
                "prefix": true,
                "start": 126,
                "end": 136
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 141,
                "end": 149
              },
              "start": 126,
              "end": 149
            },
            "consequent": {
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 171
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 174,
                          "end": 176
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Boxified",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 188
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
                                  "start": 189,
                                  "end": 190
                                },
                                "typeArguments": null,
                                "start": 189,
                                "end": 190
                              }
                            ],
                            "start": 188,
                            "end": 191
                          },
                          "start": 180,
                          "end": 191
                        },
                        "start": 174,
                        "end": 191
                      },
                      "definite": false,
                      "start": 165,
                      "end": 191
                    }
                  ],
                  "declare": false,
                  "start": 161,
                  "end": 192
                },
                {
                  "type": "ForInStatement",
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 211
                        },
                        "init": null,
                        "definite": false,
                        "start": 210,
                        "end": 211
                      }
                    ],
                    "declare": false,
                    "start": 206,
                    "end": 211
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 218
                  },
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 240
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 241,
                              "end": 242
                            },
                            "optional": false,
                            "computed": true,
                            "start": 234,
                            "end": 243
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 248,
                                  "end": 253
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "obj",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 255,
                                    "end": 258
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 259,
                                    "end": 260
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 255,
                                  "end": 261
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 248,
                                "end": 261
                              }
                            ],
                            "start": 246,
                            "end": 263
                          },
                          "start": 234,
                          "end": 263
                        },
                        "directive": null,
                        "start": 234,
                        "end": 264
                      }
                    ],
                    "start": 220,
                    "end": 274
                  },
                  "start": 201,
                  "end": 274
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 296
                  },
                  "start": 283,
                  "end": 297
                }
              ],
              "start": 151,
              "end": 303
            },
            "alternate": null,
            "start": 122,
            "end": 303
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 316,
                "end": 319
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 323
              },
              "start": 315,
              "end": 323
            },
            "start": 308,
            "end": 324
          }
        ],
        "start": 116,
        "end": 326
      },
      "expression": false,
      "start": 76,
      "end": 326
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 334
      },
      "typeParameters": null,
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
              "start": 339,
              "end": 340
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "accessibility": null,
            "static": false,
            "start": 339,
            "end": 348
          }
        ],
        "start": 337,
        "end": 350
      },
      "declare": false,
      "start": 328,
      "end": 351
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 358
      },
      "typeParameters": null,
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
              "start": 363,
              "end": 364
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 366,
                "end": 372
              },
              "start": 364,
              "end": 372
            },
            "accessibility": null,
            "static": false,
            "start": 363,
            "end": 372
          }
        ],
        "start": 361,
        "end": 374
      },
      "declare": false,
      "start": 352,
      "end": 375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 382
      },
      "typeParameters": null,
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
              "start": 387,
              "end": 388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
            },
            "accessibility": null,
            "static": false,
            "start": 387,
            "end": 396
          }
        ],
        "start": 385,
        "end": 398
      },
      "declare": false,
      "start": 376,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 412
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "typeArguments": null,
                  "start": 416,
                  "end": 417
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 421
                  },
                  "typeArguments": null,
                  "start": 420,
                  "end": 421
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 425
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 425
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 428,
                  "end": 437
                }
              ],
              "start": 416,
              "end": 437
            },
            "start": 414,
            "end": 437
          },
          "start": 413,
          "end": 437
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "boxify",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 458
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 460
                }
              ],
              "optional": false,
              "start": 452,
              "end": 461
            },
            "start": 445,
            "end": 462
          }
        ],
        "start": 439,
        "end": 464
      },
      "expression": false,
      "start": 401,
      "end": 464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 474
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 486
                  },
                  "typeArguments": null,
                  "start": 485,
                  "end": 486
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 490
                  },
                  "typeArguments": null,
                  "start": 489,
                  "end": 490
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  },
                  "typeArguments": null,
                  "start": 493,
                  "end": 494
                }
              ],
              "start": 485,
              "end": 494
            }
          ],
          "start": 484,
          "end": 495
        },
        "start": 477,
        "end": 495
      },
      "declare": false,
      "start": 466,
      "end": 496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 505
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 508,
          "end": 516
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 518
                  },
                  "typeArguments": null,
                  "start": 517,
                  "end": 518
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 521,
                    "end": 522
                  },
                  "typeArguments": null,
                  "start": 521,
                  "end": 522
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 526
                  },
                  "typeArguments": null,
                  "start": 525,
                  "end": 526
                },
                {
                  "type": "TSNullKeyword",
                  "start": 529,
                  "end": 533
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 536,
                  "end": 545
                }
              ],
              "start": 517,
              "end": 545
            }
          ],
          "start": 516,
          "end": 546
        },
        "start": 508,
        "end": 546
      },
      "declare": false,
      "start": 497,
      "end": 547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 556
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 559,
          "end": 567
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 569
                  },
                  "typeArguments": null,
                  "start": 568,
                  "end": 569
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 573
                    },
                    "typeArguments": null,
                    "start": 572,
                    "end": 573
                  },
                  "start": 572,
                  "end": 575
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 579
                  },
                  "typeArguments": null,
                  "start": 578,
                  "end": 579
                },
                {
                  "type": "TSStringKeyword",
                  "start": 582,
                  "end": 588
                }
              ],
              "start": 568,
              "end": 588
            }
          ],
          "start": 567,
          "end": 589
        },
        "start": 559,
        "end": 589
      },
      "declare": false,
      "start": 548,
      "end": 589
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 598
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 601,
          "end": 609
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 610,
                  "end": 616
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 619,
                  "end": 625
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 628,
                  "end": 635
                },
                {
                  "type": "TSNullKeyword",
                  "start": 638,
                  "end": 642
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 645,
                  "end": 654
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 657,
                  "end": 661
                }
              ],
              "start": 610,
              "end": 661
            }
          ],
          "start": 609,
          "end": 662
        },
        "start": 601,
        "end": 662
      },
      "declare": false,
      "start": 590,
      "end": 663
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 669,
        "end": 672
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 683
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 684,
                  "end": 690
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 693,
                  "end": 699
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 702,
                  "end": 709
                },
                {
                  "type": "TSNullKeyword",
                  "start": 712,
                  "end": 716
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 719,
                  "end": 728
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 731,
                  "end": 735
                }
              ],
              "start": 684,
              "end": 735
            }
          ],
          "start": 683,
          "end": 736
        },
        "start": 675,
        "end": 736
      },
      "declare": false,
      "start": 664,
      "end": 737
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 746
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 749,
          "end": 756
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 757,
                    "end": 764
                  },
                  "start": 757,
                  "end": 764
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "world",
                    "raw": "\"world\"",
                    "start": 767,
                    "end": 774
                  },
                  "start": 767,
                  "end": 774
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 777,
                    "end": 779
                  },
                  "start": 777,
                  "end": 779
                }
              ],
              "start": 757,
              "end": 779
            }
          ],
          "start": 756,
          "end": 780
        },
        "start": 749,
        "end": 780
      },
      "declare": false,
      "start": 738,
      "end": 781
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxifiedWithSentinel",
        "optional": false,
        "typeAnnotation": null,
        "start": 788,
        "end": 808
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
              "start": 809,
              "end": 810
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 809,
            "end": 810
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 813
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 812,
            "end": 813
          }
        ],
        "start": 808,
        "end": 814
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 824,
          "end": 825
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 836
            },
            "typeArguments": null,
            "start": 835,
            "end": 836
          },
          "start": 829,
          "end": 836
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 842
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 843,
                        "end": 844
                      },
                      "typeArguments": null,
                      "start": 843,
                      "end": 844
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 845,
                        "end": 846
                      },
                      "typeArguments": null,
                      "start": 845,
                      "end": 846
                    },
                    "start": 843,
                    "end": 847
                  }
                ],
                "start": 842,
                "end": 848
              },
              "start": 839,
              "end": 848
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 852
              },
              "typeArguments": null,
              "start": 851,
              "end": 852
            }
          ],
          "start": 839,
          "end": 852
        },
        "optional": false,
        "readonly": null,
        "start": 817,
        "end": 855
      },
      "declare": false,
      "start": 783,
      "end": 855
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 862,
        "end": 865
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "typeAnnotation": null,
          "start": 868,
          "end": 888
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 890
                  },
                  "typeArguments": null,
                  "start": 889,
                  "end": 890
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 893,
                    "end": 894
                  },
                  "typeArguments": null,
                  "start": 893,
                  "end": 894
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 898
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 898
                }
              ],
              "start": 889,
              "end": 898
            },
            {
              "type": "TSNullKeyword",
              "start": 900,
              "end": 904
            }
          ],
          "start": 888,
          "end": 905
        },
        "start": 868,
        "end": 905
      },
      "declare": false,
      "start": 857,
      "end": 906
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "typeAnnotation": null,
          "start": 918,
          "end": 938
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 939,
                    "end": 940
                  },
                  "typeArguments": null,
                  "start": 939,
                  "end": 940
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 943,
                    "end": 944
                  },
                  "typeArguments": null,
                  "start": 943,
                  "end": 944
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 947,
                    "end": 948
                  },
                  "typeArguments": null,
                  "start": 947,
                  "end": 948
                }
              ],
              "start": 939,
              "end": 948
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 950,
              "end": 959
            }
          ],
          "start": 938,
          "end": 960
        },
        "start": 918,
        "end": 960
      },
      "declare": false,
      "start": 907,
      "end": 961
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 967,
        "end": 970
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoxifiedWithSentinel",
          "optional": false,
          "typeAnnotation": null,
          "start": 973,
          "end": 993
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 994,
              "end": 1000
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 1002,
              "end": 1011
            }
          ],
          "start": 993,
          "end": 1012
        },
        "start": 973,
        "end": 1012
      },
      "declare": false,
      "start": 962,
      "end": 1013
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1032
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
              "start": 1033,
              "end": 1034
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1033,
            "end": 1034
          }
        ],
        "start": 1032,
        "end": 1035
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1054,
          "end": 1055
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1066
            },
            "typeArguments": null,
            "start": 1065,
            "end": 1066
          },
          "start": 1059,
          "end": 1066
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepReadonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1069,
            "end": 1081
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1082,
                    "end": 1083
                  },
                  "typeArguments": null,
                  "start": 1082,
                  "end": 1083
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1085
                  },
                  "typeArguments": null,
                  "start": 1084,
                  "end": 1085
                },
                "start": 1082,
                "end": 1086
              }
            ],
            "start": 1081,
            "end": 1087
          },
          "start": 1069,
          "end": 1087
        },
        "optional": false,
        "readonly": true,
        "start": 1038,
        "end": 1090
      },
      "declare": false,
      "start": 1015,
      "end": 1091
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1098,
        "end": 1101
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1110,
              "end": 1111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1113,
                "end": 1119
              },
              "start": 1111,
              "end": 1119
            },
            "accessibility": null,
            "static": false,
            "start": 1110,
            "end": 1120
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1125,
              "end": 1126
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1130,
                      "end": 1131
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1133,
                        "end": 1139
                      },
                      "start": 1131,
                      "end": 1139
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1130,
                    "end": 1140
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
                      "start": 1141,
                      "end": 1142
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1144,
                        "end": 1150
                      },
                      "start": 1142,
                      "end": 1150
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1141,
                    "end": 1150
                  }
                ],
                "start": 1128,
                "end": 1152
              },
              "start": 1126,
              "end": 1152
            },
            "accessibility": null,
            "static": false,
            "start": 1125,
            "end": 1153
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1161,
                "end": 1168
              },
              "start": 1159,
              "end": 1168
            },
            "accessibility": null,
            "static": false,
            "start": 1158,
            "end": 1169
          }
        ],
        "start": 1104,
        "end": 1171
      },
      "declare": false,
      "start": 1093,
      "end": 1172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepReadonlyFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1179,
        "end": 1194
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1215,
                "end": 1221
              },
              "start": 1213,
              "end": 1221
            },
            "accessibility": null,
            "static": false,
            "start": 1203,
            "end": 1222
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1236,
              "end": 1237
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
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1253,
                        "end": 1259
                      },
                      "start": 1251,
                      "end": 1259
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1241,
                    "end": 1260
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1270,
                      "end": 1271
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1273,
                        "end": 1279
                      },
                      "start": 1271,
                      "end": 1279
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1261,
                    "end": 1279
                  }
                ],
                "start": 1239,
                "end": 1281
              },
              "start": 1237,
              "end": 1281
            },
            "accessibility": null,
            "static": false,
            "start": 1227,
            "end": 1282
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1297
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1299,
                "end": 1306
              },
              "start": 1297,
              "end": 1306
            },
            "accessibility": null,
            "static": false,
            "start": 1287,
            "end": 1307
          }
        ],
        "start": 1197,
        "end": 1309
      },
      "declare": false,
      "start": 1174,
      "end": 1310
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeepReadonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1332
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1333,
                        "end": 1336
                      },
                      "typeArguments": null,
                      "start": 1333,
                      "end": 1336
                    }
                  ],
                  "start": 1332,
                  "end": 1337
                },
                "start": 1320,
                "end": 1337
              },
              "start": 1318,
              "end": 1337
            },
            "start": 1316,
            "end": 1337
          },
          "init": null,
          "definite": false,
          "start": 1316,
          "end": 1337
        }
      ],
      "declare": false,
      "start": 1312,
      "end": 1338
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeepReadonlyFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1362
                },
                "typeArguments": null,
                "start": 1347,
                "end": 1362
              },
              "start": 1345,
              "end": 1362
            },
            "start": 1343,
            "end": 1362
          },
          "init": null,
          "definite": false,
          "start": 1343,
          "end": 1362
        }
      ],
      "declare": false,
      "start": 1339,
      "end": 1363
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1392,
        "end": 1393
      },
      "typeParameters": null,
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
              "start": 1398,
              "end": 1399
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1401,
                "end": 1407
              },
              "start": 1399,
              "end": 1407
            },
            "accessibility": null,
            "static": false,
            "start": 1398,
            "end": 1407
          }
        ],
        "start": 1396,
        "end": 1409
      },
      "declare": false,
      "start": 1387,
      "end": 1410
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Clone",
        "optional": false,
        "typeAnnotation": null,
        "start": 1416,
        "end": 1421
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
              "start": 1422,
              "end": 1423
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1422,
            "end": 1423
          }
        ],
        "start": 1421,
        "end": 1424
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1432,
          "end": 1433
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1445
                },
                "typeArguments": null,
                "start": 1444,
                "end": 1445
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1448,
                "end": 1450
              }
            ],
            "start": 1444,
            "end": 1450
          },
          "start": 1437,
          "end": 1451
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1455,
                  "end": 1456
                },
                "typeArguments": null,
                "start": 1455,
                "end": 1456
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1459,
                "end": 1461
              }
            ],
            "start": 1455,
            "end": 1461
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1463,
              "end": 1464
            },
            "typeArguments": null,
            "start": 1463,
            "end": 1464
          },
          "start": 1454,
          "end": 1465
        },
        "optional": false,
        "readonly": null,
        "start": 1427,
        "end": 1468
      },
      "declare": false,
      "start": 1411,
      "end": 1469
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1475,
        "end": 1476
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Clone",
          "optional": false,
          "typeAnnotation": null,
          "start": 1479,
          "end": 1484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1485,
                "end": 1486
              },
              "typeArguments": null,
              "start": 1485,
              "end": 1486
            }
          ],
          "start": 1484,
          "end": 1487
        },
        "start": 1479,
        "end": 1487
      },
      "declare": false,
      "start": 1470,
      "end": 1488
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1527,
                  "end": 1528
                },
                "typeArguments": null,
                "start": 1527,
                "end": 1528
              },
              "start": 1525,
              "end": 1528
            },
            "start": 1523,
            "end": 1528
          },
          "init": null,
          "definite": false,
          "start": 1523,
          "end": 1528
        }
      ],
      "declare": false,
      "start": 1519,
      "end": 1529
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Clone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1538,
                  "end": 1543
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1544,
                        "end": 1545
                      },
                      "typeArguments": null,
                      "start": 1544,
                      "end": 1545
                    }
                  ],
                  "start": 1543,
                  "end": 1546
                },
                "start": 1538,
                "end": 1546
              },
              "start": 1536,
              "end": 1546
            },
            "start": 1534,
            "end": 1546
          },
          "init": null,
          "definite": false,
          "start": 1534,
          "end": 1546
        }
      ],
      "declare": false,
      "start": 1530,
      "end": 1547
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1547
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 20,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 25,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 48,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "Box",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 76,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "boxify",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 137,
    "end": 140
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "for",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 283,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 328,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
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
    "value": "a",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 352,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 363,
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
    "value": "string",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 376,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 401,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 428,
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
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 445,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "boxify",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 466,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "T00",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 477,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 494,
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
    "value": "type",
    "start": 497,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 508,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 527,
    "end": 528
  },
  {
    "type": "Null",
    "value": "null",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 536,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 548,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 559,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 582,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 590,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 601,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 619,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 636,
    "end": 637
  },
  {
    "type": "Null",
    "value": "null",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 645,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 657,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 664,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 675,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 684,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 693,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 702,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 710,
    "end": 711
  },
  {
    "type": "Null",
    "value": "null",
    "start": 712,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 719,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 731,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 738,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 743,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 756,
    "end": 757
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 757,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 765,
    "end": 766
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 767,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 775,
    "end": 776
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "type",
    "start": 783,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "BoxifiedWithSentinel",
    "start": 788,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 826,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 829,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 857,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 862,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "BoxifiedWithSentinel",
    "start": 868,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 898,
    "end": 899
  },
  {
    "type": "Null",
    "value": "null",
    "start": 900,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 907,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "BoxifiedWithSentinel",
    "start": 918,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 962,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 967,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "BoxifiedWithSentinel",
    "start": 973,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 994,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1002,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "DeepReadonly",
    "start": 1020,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1044,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1059,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "DeepReadonly",
    "start": 1069,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1098,
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
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1133,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1144,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1174,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "DeepReadonlyFoo",
    "start": 1179,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1203,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1215,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1227,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1241,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1253,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1261,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1287,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1299,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1312,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "DeepReadonly",
    "start": 1320,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1333,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1339,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1343,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "DeepReadonlyFoo",
    "start": 1347,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1387,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1401,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "Clone",
    "start": 1416,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1434,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1437,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1470,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1475,
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
    "value": "Clone",
    "start": 1479,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1519,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1523,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1534,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "Clone",
    "start": 1538,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1546,
    "end": 1547
  }
]
```

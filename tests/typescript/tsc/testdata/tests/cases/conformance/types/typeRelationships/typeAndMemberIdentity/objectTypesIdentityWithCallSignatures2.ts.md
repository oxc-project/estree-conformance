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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 65,
                      "end": 71
                    },
                    "start": 63,
                    "end": 71
                  },
                  "start": 62,
                  "end": 71
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 74,
                  "end": 80
                },
                "start": 72,
                "end": 80
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
                      "start": 90,
                      "end": 94
                    },
                    "start": 83,
                    "end": 95
                  }
                ],
                "start": 81,
                "end": 97
              },
              "expression": false,
              "start": 61,
              "end": 97
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 97
          }
        ],
        "start": 52,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 118
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 122,
                      "end": 128
                    },
                    "start": 120,
                    "end": 128
                  },
                  "start": 119,
                  "end": 128
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 131,
                  "end": 137
                },
                "start": 129,
                "end": 137
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
                      "start": 147,
                      "end": 151
                    },
                    "start": 140,
                    "end": 152
                  }
                ],
                "start": 138,
                "end": 154
              },
              "expression": false,
              "start": 118,
              "end": 154
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 115,
            "end": 154
          }
        ],
        "start": 109,
        "end": 156
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 156
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
        "start": 164,
        "end": 165
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
              "start": 166,
              "end": 167
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 166,
            "end": 167
          }
        ],
        "start": 165,
        "end": 168
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 178
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
                        "start": 182,
                        "end": 183
                      },
                      "typeArguments": null,
                      "start": 182,
                      "end": 183
                    },
                    "start": 180,
                    "end": 183
                  },
                  "start": 179,
                  "end": 183
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
                    "start": 186,
                    "end": 187
                  },
                  "typeArguments": null,
                  "start": 186,
                  "end": 187
                },
                "start": 184,
                "end": 187
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
                      "start": 197,
                      "end": 201
                    },
                    "start": 190,
                    "end": 202
                  }
                ],
                "start": 188,
                "end": 204
              },
              "expression": false,
              "start": 178,
              "end": 204
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 175,
            "end": 204
          }
        ],
        "start": 169,
        "end": 206
      },
      "abstract": false,
      "declare": false,
      "start": 158,
      "end": 206
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 219
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 229
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSBooleanKeyword",
                    "start": 233,
                    "end": 240
                  },
                  "start": 231,
                  "end": 240
                },
                "start": 230,
                "end": 240
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 243,
                "end": 249
              },
              "start": 241,
              "end": 249
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 226,
            "end": 250
          }
        ],
        "start": 220,
        "end": 252
      },
      "declare": false,
      "start": 208,
      "end": 252
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
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
              "start": 267,
              "end": 268
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 267,
            "end": 268
          }
        ],
        "start": 266,
        "end": 269
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 279
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 283,
                      "end": 284
                    },
                    "typeArguments": null,
                    "start": 283,
                    "end": 284
                  },
                  "start": 281,
                  "end": 284
                },
                "start": 280,
                "end": 284
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
                  "start": 287,
                  "end": 288
                },
                "typeArguments": null,
                "start": 287,
                "end": 288
              },
              "start": 285,
              "end": 288
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 276,
            "end": 289
          }
        ],
        "start": 270,
        "end": 291
      },
      "declare": false,
      "start": 254,
      "end": 291
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 305
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 309,
                              "end": 313
                            },
                            "typeArguments": null,
                            "start": 309,
                            "end": 313
                          },
                          "start": 307,
                          "end": 313
                        },
                        "start": 306,
                        "end": 313
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 316,
                        "end": 322
                      },
                      "start": 314,
                      "end": 322
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 302,
                    "end": 322
                  }
                ],
                "start": 300,
                "end": 324
              },
              "start": 298,
              "end": 324
            },
            "start": 297,
            "end": 324
          },
          "init": null,
          "definite": false,
          "start": 297,
          "end": 324
        }
      ],
      "declare": false,
      "start": 293,
      "end": 324
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
            "start": 329,
            "end": 330
          },
          "init": {
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
                  "start": 335,
                  "end": 338
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 342,
                            "end": 348
                          },
                          "typeArguments": null,
                          "start": 342,
                          "end": 348
                        },
                        "start": 340,
                        "end": 348
                      },
                      "start": 339,
                      "end": 348
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 359,
                          "end": 361
                        },
                        "start": 352,
                        "end": 362
                      }
                    ],
                    "start": 350,
                    "end": 364
                  },
                  "expression": false,
                  "start": 338,
                  "end": 364
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 335,
                "end": 364
              }
            ],
            "start": 333,
            "end": 366
          },
          "definite": false,
          "start": 329,
          "end": 366
        }
      ],
      "declare": false,
      "start": 325,
      "end": 367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 382
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 387
              },
              "typeArguments": null,
              "start": 386,
              "end": 387
            },
            "start": 384,
            "end": 387
          },
          "start": 383,
          "end": 387
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 369,
      "end": 389
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 403
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              },
              "typeArguments": null,
              "start": 407,
              "end": 408
            },
            "start": 405,
            "end": 408
          },
          "start": 404,
          "end": 408
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 390,
      "end": 410
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 433
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
              "start": 437,
              "end": 440
            },
            "start": 435,
            "end": 440
          },
          "start": 434,
          "end": 440
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 442,
        "end": 445
      },
      "expression": false,
      "start": 420,
      "end": 445
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 461
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 466
              },
              "typeArguments": null,
              "start": 465,
              "end": 466
            },
            "start": 463,
            "end": 466
          },
          "start": 462,
          "end": 466
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 447,
      "end": 468
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 483
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "typeArguments": null,
              "start": 487,
              "end": 488
            },
            "start": 485,
            "end": 488
          },
          "start": 484,
          "end": 488
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 469,
      "end": 490
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 514
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
              "start": 518,
              "end": 521
            },
            "start": 516,
            "end": 521
          },
          "start": 515,
          "end": 521
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 523,
        "end": 526
      },
      "expression": false,
      "start": 500,
      "end": 526
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 542
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 547
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 548,
                    "end": 554
                  }
                ],
                "start": 547,
                "end": 555
              },
              "start": 546,
              "end": 555
            },
            "start": 544,
            "end": 555
          },
          "start": 543,
          "end": 555
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 528,
      "end": 557
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 572
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 577
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 578,
                    "end": 584
                  }
                ],
                "start": 577,
                "end": 585
              },
              "start": 576,
              "end": 585
            },
            "start": 574,
            "end": 585
          },
          "start": 573,
          "end": 585
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 558,
      "end": 587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 611
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
              "start": 615,
              "end": 618
            },
            "start": 613,
            "end": 618
          },
          "start": 612,
          "end": 618
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 620,
        "end": 623
      },
      "expression": false,
      "start": 597,
      "end": 623
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 634,
        "end": 638
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 643
              },
              "typeArguments": null,
              "start": 642,
              "end": 643
            },
            "start": 640,
            "end": 643
          },
          "start": 639,
          "end": 643
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 625,
      "end": 645
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 659
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 664
              },
              "typeArguments": null,
              "start": 663,
              "end": 664
            },
            "start": 661,
            "end": 664
          },
          "start": 660,
          "end": 664
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 646,
      "end": 666
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 689
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
              "start": 693,
              "end": 696
            },
            "start": 691,
            "end": 696
          },
          "start": 690,
          "end": 696
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 698,
        "end": 701
      },
      "expression": false,
      "start": 676,
      "end": 701
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 712,
        "end": 716
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 727,
                "end": 728
              },
              "typeArguments": null,
              "start": 720,
              "end": 728
            },
            "start": 718,
            "end": 728
          },
          "start": 717,
          "end": 728
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 703,
      "end": 730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 740,
        "end": 744
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 756
              },
              "typeArguments": null,
              "start": 748,
              "end": 756
            },
            "start": 746,
            "end": 756
          },
          "start": 745,
          "end": 756
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 731,
      "end": 758
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 781
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
              "start": 785,
              "end": 788
            },
            "start": 783,
            "end": 788
          },
          "start": 782,
          "end": 788
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 790,
        "end": 793
      },
      "expression": false,
      "start": 768,
      "end": 793
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 804,
        "end": 808
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 820
              },
              "typeArguments": null,
              "start": 812,
              "end": 820
            },
            "start": 810,
            "end": 820
          },
          "start": 809,
          "end": 820
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 795,
      "end": 822
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 832,
        "end": 836
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 848
              },
              "typeArguments": null,
              "start": 840,
              "end": 848
            },
            "start": 838,
            "end": 848
          },
          "start": 837,
          "end": 848
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 823,
      "end": 850
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 873
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
              "start": 877,
              "end": 880
            },
            "start": 875,
            "end": 880
          },
          "start": 874,
          "end": 880
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 882,
        "end": 885
      },
      "expression": false,
      "start": 860,
      "end": 885
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 896,
        "end": 900
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 904,
                "end": 905
              },
              "typeArguments": null,
              "start": 904,
              "end": 905
            },
            "start": 902,
            "end": 905
          },
          "start": 901,
          "end": 905
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 887,
      "end": 907
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 921
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 925,
                "end": 926
              },
              "typeArguments": null,
              "start": 925,
              "end": 926
            },
            "start": 923,
            "end": 926
          },
          "start": 922,
          "end": 926
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 908,
      "end": 928
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 944,
        "end": 948
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
              "start": 952,
              "end": 955
            },
            "start": 950,
            "end": 955
          },
          "start": 949,
          "end": 955
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 957,
        "end": 960
      },
      "expression": false,
      "start": 935,
      "end": 960
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 971,
        "end": 976
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 980,
                "end": 981
              },
              "typeArguments": null,
              "start": 980,
              "end": 981
            },
            "start": 978,
            "end": 981
          },
          "start": 977,
          "end": 981
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 962,
      "end": 983
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 993,
        "end": 998
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1003
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1004,
                    "end": 1010
                  }
                ],
                "start": 1003,
                "end": 1011
              },
              "start": 1002,
              "end": 1011
            },
            "start": 1000,
            "end": 1011
          },
          "start": 999,
          "end": 1011
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 984,
      "end": 1013
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1037
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
              "start": 1041,
              "end": 1044
            },
            "start": 1039,
            "end": 1044
          },
          "start": 1038,
          "end": 1044
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1046,
        "end": 1049
      },
      "expression": false,
      "start": 1023,
      "end": 1049
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1060,
        "end": 1064
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1068,
                "end": 1069
              },
              "typeArguments": null,
              "start": 1068,
              "end": 1069
            },
            "start": 1066,
            "end": 1069
          },
          "start": 1065,
          "end": 1069
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1051,
      "end": 1071
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1081,
        "end": 1085
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1089,
                "end": 1090
              },
              "typeArguments": null,
              "start": 1089,
              "end": 1090
            },
            "start": 1087,
            "end": 1090
          },
          "start": 1086,
          "end": 1090
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1072,
      "end": 1092
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1108,
        "end": 1112
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
              "start": 1116,
              "end": 1119
            },
            "start": 1114,
            "end": 1119
          },
          "start": 1113,
          "end": 1119
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1121,
        "end": 1124
      },
      "expression": false,
      "start": 1099,
      "end": 1124
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1135,
        "end": 1139
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1143,
                "end": 1144
              },
              "typeArguments": null,
              "start": 1143,
              "end": 1144
            },
            "start": 1141,
            "end": 1144
          },
          "start": 1140,
          "end": 1144
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1126,
      "end": 1146
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1156,
        "end": 1160
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1171,
                "end": 1172
              },
              "typeArguments": null,
              "start": 1164,
              "end": 1172
            },
            "start": 1162,
            "end": 1172
          },
          "start": 1161,
          "end": 1172
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1147,
      "end": 1174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1190,
        "end": 1194
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
              "start": 1198,
              "end": 1201
            },
            "start": 1196,
            "end": 1201
          },
          "start": 1195,
          "end": 1201
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1203,
        "end": 1206
      },
      "expression": false,
      "start": 1181,
      "end": 1206
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1217,
        "end": 1221
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1225,
                "end": 1226
              },
              "typeArguments": null,
              "start": 1225,
              "end": 1226
            },
            "start": 1223,
            "end": 1226
          },
          "start": 1222,
          "end": 1226
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1208,
      "end": 1228
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1242
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1247
              },
              "typeArguments": null,
              "start": 1246,
              "end": 1247
            },
            "start": 1244,
            "end": 1247
          },
          "start": 1243,
          "end": 1247
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1229,
      "end": 1249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1265,
        "end": 1269
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
              "start": 1273,
              "end": 1276
            },
            "start": 1271,
            "end": 1276
          },
          "start": 1270,
          "end": 1276
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1278,
        "end": 1281
      },
      "expression": false,
      "start": 1256,
      "end": 1281
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1296
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1300,
                "end": 1301
              },
              "typeArguments": null,
              "start": 1300,
              "end": 1301
            },
            "start": 1298,
            "end": 1301
          },
          "start": 1297,
          "end": 1301
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1283,
      "end": 1303
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1313,
        "end": 1317
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1322
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1323,
                    "end": 1329
                  }
                ],
                "start": 1322,
                "end": 1330
              },
              "start": 1321,
              "end": 1330
            },
            "start": 1319,
            "end": 1330
          },
          "start": 1318,
          "end": 1330
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1304,
      "end": 1332
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1348,
        "end": 1352
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
              "start": 1356,
              "end": 1359
            },
            "start": 1354,
            "end": 1359
          },
          "start": 1353,
          "end": 1359
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1361,
        "end": 1364
      },
      "expression": false,
      "start": 1339,
      "end": 1364
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1375,
        "end": 1380
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1384,
                "end": 1385
              },
              "typeArguments": null,
              "start": 1384,
              "end": 1385
            },
            "start": 1382,
            "end": 1385
          },
          "start": 1381,
          "end": 1385
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1366,
      "end": 1387
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1397,
        "end": 1402
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1413,
                "end": 1414
              },
              "typeArguments": null,
              "start": 1406,
              "end": 1414
            },
            "start": 1404,
            "end": 1414
          },
          "start": 1403,
          "end": 1414
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1388,
      "end": 1416
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1432,
        "end": 1437
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
              "start": 1441,
              "end": 1444
            },
            "start": 1439,
            "end": 1444
          },
          "start": 1438,
          "end": 1444
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1446,
        "end": 1449
      },
      "expression": false,
      "start": 1423,
      "end": 1449
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1460,
        "end": 1465
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1469,
                "end": 1470
              },
              "typeArguments": null,
              "start": 1469,
              "end": 1470
            },
            "start": 1467,
            "end": 1470
          },
          "start": 1466,
          "end": 1470
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1451,
      "end": 1472
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1482,
        "end": 1487
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1498,
                "end": 1499
              },
              "typeArguments": null,
              "start": 1491,
              "end": 1499
            },
            "start": 1489,
            "end": 1499
          },
          "start": 1488,
          "end": 1499
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1473,
      "end": 1501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1517,
        "end": 1522
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
              "start": 1526,
              "end": 1529
            },
            "start": 1524,
            "end": 1529
          },
          "start": 1523,
          "end": 1529
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1531,
        "end": 1534
      },
      "expression": false,
      "start": 1508,
      "end": 1534
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1550
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1555
              },
              "typeArguments": null,
              "start": 1554,
              "end": 1555
            },
            "start": 1552,
            "end": 1555
          },
          "start": 1551,
          "end": 1555
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1536,
      "end": 1557
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1567,
        "end": 1572
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1576,
                "end": 1577
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1578,
                    "end": 1584
                  }
                ],
                "start": 1577,
                "end": 1585
              },
              "start": 1576,
              "end": 1585
            },
            "start": 1574,
            "end": 1585
          },
          "start": 1573,
          "end": 1585
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1558,
      "end": 1587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1603,
        "end": 1608
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
              "start": 1612,
              "end": 1615
            },
            "start": 1610,
            "end": 1615
          },
          "start": 1609,
          "end": 1615
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1617,
        "end": 1620
      },
      "expression": false,
      "start": 1594,
      "end": 1620
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1631,
        "end": 1637
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1641,
                "end": 1643
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1644,
                    "end": 1650
                  }
                ],
                "start": 1643,
                "end": 1651
              },
              "start": 1641,
              "end": 1651
            },
            "start": 1639,
            "end": 1651
          },
          "start": 1638,
          "end": 1651
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1622,
      "end": 1653
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1663,
        "end": 1669
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1673,
                "end": 1674
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1675,
                    "end": 1681
                  }
                ],
                "start": 1674,
                "end": 1682
              },
              "start": 1673,
              "end": 1682
            },
            "start": 1671,
            "end": 1682
          },
          "start": 1670,
          "end": 1682
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1654,
      "end": 1684
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1703,
        "end": 1709
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
              "start": 1713,
              "end": 1716
            },
            "start": 1711,
            "end": 1716
          },
          "start": 1710,
          "end": 1716
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1718,
        "end": 1721
      },
      "expression": false,
      "start": 1694,
      "end": 1721
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1737
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1741,
                "end": 1742
              },
              "typeArguments": null,
              "start": 1741,
              "end": 1742
            },
            "start": 1739,
            "end": 1742
          },
          "start": 1738,
          "end": 1742
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1723,
      "end": 1744
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1754,
        "end": 1759
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1770,
                "end": 1771
              },
              "typeArguments": null,
              "start": 1763,
              "end": 1771
            },
            "start": 1761,
            "end": 1771
          },
          "start": 1760,
          "end": 1771
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1745,
      "end": 1773
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1794
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
              "start": 1798,
              "end": 1801
            },
            "start": 1796,
            "end": 1801
          },
          "start": 1795,
          "end": 1801
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1803,
        "end": 1806
      },
      "expression": false,
      "start": 1780,
      "end": 1806
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1817,
        "end": 1822
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1826,
                "end": 1827
              },
              "typeArguments": null,
              "start": 1826,
              "end": 1827
            },
            "start": 1824,
            "end": 1827
          },
          "start": 1823,
          "end": 1827
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1808,
      "end": 1829
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1844
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1855,
                "end": 1856
              },
              "typeArguments": null,
              "start": 1848,
              "end": 1856
            },
            "start": 1846,
            "end": 1856
          },
          "start": 1845,
          "end": 1856
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1830,
      "end": 1858
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1874,
        "end": 1879
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
              "start": 1883,
              "end": 1886
            },
            "start": 1881,
            "end": 1886
          },
          "start": 1880,
          "end": 1886
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1888,
        "end": 1891
      },
      "expression": false,
      "start": 1865,
      "end": 1891
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1902,
        "end": 1907
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1911,
                "end": 1913
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1914,
                    "end": 1920
                  }
                ],
                "start": 1913,
                "end": 1921
              },
              "start": 1911,
              "end": 1921
            },
            "start": 1909,
            "end": 1921
          },
          "start": 1908,
          "end": 1921
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1893,
      "end": 1923
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1933,
        "end": 1938
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1942,
                "end": 1943
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1944,
                    "end": 1950
                  }
                ],
                "start": 1943,
                "end": 1951
              },
              "start": 1942,
              "end": 1951
            },
            "start": 1940,
            "end": 1951
          },
          "start": 1939,
          "end": 1951
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1924,
      "end": 1953
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1969,
        "end": 1974
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
              "start": 1978,
              "end": 1981
            },
            "start": 1976,
            "end": 1981
          },
          "start": 1975,
          "end": 1981
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1983,
        "end": 1986
      },
      "expression": false,
      "start": 1960,
      "end": 1986
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 1986
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 83,
    "end": 89
  },
  {
    "type": "Null",
    "value": "null",
    "start": 90,
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
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 140,
    "end": 146
  },
  {
    "type": "Null",
    "value": "null",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 158,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 182,
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
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196
  },
  {
    "type": "Null",
    "value": "null",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 208,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": "foo",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 233,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 254,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
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
    "value": "foo",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 335,
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
    "value": "x",
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
    "value": "RegExp",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 352,
    "end": 358
  },
  {
    "type": "String",
    "value": "''",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 369,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 390,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 420,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 447,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 469,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 478,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 500,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 509,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 528,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 537,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "C",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 558,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 567,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 578,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 597,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 606,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 625,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 646,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 676,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 703,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 712,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 720,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 731,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 740,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 748,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 755,
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
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 768,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 777,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 785,
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
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 795,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 812,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 823,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 832,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 840,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 860,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "foo4",
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
    "value": "x",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 877,
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
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 887,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 896,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 908,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 917,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 935,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "function",
    "start": 962,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 971,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 984,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 993,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1004,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1023,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1032,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1051,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1060,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1072,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1081,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1099,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1116,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1126,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1135,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1147,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1156,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1164,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1181,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1208,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1217,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1229,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1238,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "I",
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
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1256,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1283,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1292,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1304,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1313,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "C",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1323,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1339,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1348,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1366,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1375,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1388,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1397,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1406,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1423,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1432,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1451,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1460,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1473,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1482,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1491,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1508,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1517,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1526,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1536,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1545,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1558,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1567,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1578,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "function",
    "start": 1594,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1603,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1622,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1631,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1641,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1644,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1654,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1663,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1675,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1694,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1703,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1723,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1732,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1745,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1754,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1763,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1780,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1789,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1798,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "function",
    "start": 1808,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1817,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1830,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1839,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1848,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1865,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1874,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1883,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1893,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1902,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1911,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1914,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1924,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1933,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1944,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1960,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1969,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1978,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1985,
    "end": 1986
  }
]
```

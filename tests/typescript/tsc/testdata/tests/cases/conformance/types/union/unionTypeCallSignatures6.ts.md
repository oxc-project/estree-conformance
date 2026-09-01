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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
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
              "start": 11,
              "end": 12
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 20
          }
        ],
        "start": 9,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
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
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 44
          }
        ],
        "start": 33,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
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
              "start": 59,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "start": 60,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 68
          }
        ],
        "start": 57,
        "end": 70
      },
      "declare": false,
      "start": 48,
      "end": 71
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 83,
            "end": 92
          }
        ],
        "start": 81,
        "end": 94
      },
      "declare": false,
      "start": 72,
      "end": 95
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F0",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 103
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 112,
            "end": 116
          },
          "start": 109,
          "end": 116
        },
        "start": 106,
        "end": 116
      },
      "declare": false,
      "start": 96,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 136
      },
      "typeParameters": null,
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 147
                },
                "typeArguments": null,
                "start": 146,
                "end": 147
              },
              "start": 144,
              "end": 147
            },
            "start": 140,
            "end": 147
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 152,
            "end": 156
          },
          "start": 149,
          "end": 156
        },
        "start": 139,
        "end": 156
      },
      "declare": false,
      "start": 129,
      "end": 157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 165
      },
      "typeParameters": null,
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
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "typeArguments": null,
                "start": 175,
                "end": 176
              },
              "start": 173,
              "end": 176
            },
            "start": 169,
            "end": 176
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 181,
            "end": 185
          },
          "start": 178,
          "end": 185
        },
        "start": 168,
        "end": 185
      },
      "declare": false,
      "start": 158,
      "end": 186
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
            "name": "f1",
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
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 205
                    },
                    "typeArguments": null,
                    "start": 203,
                    "end": 205
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 210
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 210
                  }
                ],
                "start": 203,
                "end": 210
              },
              "start": 201,
              "end": 210
            },
            "start": 199,
            "end": 210
          },
          "init": null,
          "definite": false,
          "start": 199,
          "end": 210
        }
      ],
      "declare": true,
      "start": 187,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 212,
        "end": 216
      },
      "directive": null,
      "start": 212,
      "end": 217
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
            "name": "f2",
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
                      "name": "F0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 245
                    },
                    "typeArguments": null,
                    "start": 243,
                    "end": 245
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 250
                    },
                    "typeArguments": null,
                    "start": 248,
                    "end": 250
                  }
                ],
                "start": 243,
                "end": 250
              },
              "start": 241,
              "end": 250
            },
            "start": 239,
            "end": 250
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 250
        }
      ],
      "declare": true,
      "start": 227,
      "end": 251
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 254
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 252,
        "end": 256
      },
      "directive": null,
      "start": 252,
      "end": 257
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F3",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 280
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
                    },
                    "typeArguments": null,
                    "start": 292,
                    "end": 293
                  },
                  "start": 290,
                  "end": 293
                },
                "start": 286,
                "end": 293
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 296,
                "end": 300
              },
              "start": 294,
              "end": 300
            },
            "start": 285,
            "end": 301
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 312
                    },
                    "typeArguments": null,
                    "start": 311,
                    "end": 312
                  },
                  "start": 309,
                  "end": 312
                },
                "start": 305,
                "end": 312
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 315,
                "end": 319
              },
              "start": 313,
              "end": 319
            },
            "start": 304,
            "end": 320
          }
        ],
        "start": 281,
        "end": 322
      },
      "declare": false,
      "start": 268,
      "end": 322
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F4",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 335
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 347,
                      "end": 348
                    },
                    "typeArguments": null,
                    "start": 347,
                    "end": 348
                  },
                  "start": 345,
                  "end": 348
                },
                "start": 341,
                "end": 348
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 351,
                "end": 355
              },
              "start": 349,
              "end": 355
            },
            "start": 340,
            "end": 356
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 367
                    },
                    "typeArguments": null,
                    "start": 366,
                    "end": 367
                  },
                  "start": 364,
                  "end": 367
                },
                "start": 360,
                "end": 367
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 370,
                "end": 374
              },
              "start": 368,
              "end": 374
            },
            "start": 359,
            "end": 375
          }
        ],
        "start": 336,
        "end": 377
      },
      "declare": false,
      "start": 323,
      "end": 377
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F5",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 390
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 403
                    },
                    "typeArguments": null,
                    "start": 402,
                    "end": 403
                  },
                  "start": 400,
                  "end": 403
                },
                "start": 396,
                "end": 403
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 406,
                "end": 410
              },
              "start": 404,
              "end": 410
            },
            "start": 395,
            "end": 411
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 422
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 422
                  },
                  "start": 419,
                  "end": 422
                },
                "start": 415,
                "end": 422
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 425,
                "end": 429
              },
              "start": 423,
              "end": 429
            },
            "start": 414,
            "end": 430
          }
        ],
        "start": 391,
        "end": 432
      },
      "declare": false,
      "start": 378,
      "end": 432
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
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 450,
                      "end": 451
                    },
                    "typeArguments": null,
                    "start": 450,
                    "end": 451
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 455
                    },
                    "typeArguments": null,
                    "start": 454,
                    "end": 455
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
                          "name": "f0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 462,
                          "end": 464
                        },
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
                                  "name": "F0",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 466,
                                  "end": 468
                                },
                                "typeArguments": null,
                                "start": 466,
                                "end": 468
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 471,
                                  "end": 473
                                },
                                "typeArguments": null,
                                "start": 471,
                                "end": 473
                              }
                            ],
                            "start": 466,
                            "end": 473
                          },
                          "start": 464,
                          "end": 473
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 462,
                        "end": 474
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 479
                        },
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
                                  "name": "F1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 481,
                                  "end": 483
                                },
                                "typeArguments": null,
                                "start": 481,
                                "end": 483
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 486,
                                  "end": 488
                                },
                                "typeArguments": null,
                                "start": 486,
                                "end": 488
                              }
                            ],
                            "start": 481,
                            "end": 488
                          },
                          "start": 479,
                          "end": 488
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 477,
                        "end": 489
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 492,
                          "end": 494
                        },
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
                                  "name": "F1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 496,
                                  "end": 498
                                },
                                "typeArguments": null,
                                "start": 496,
                                "end": 498
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F4",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 501,
                                  "end": 503
                                },
                                "typeArguments": null,
                                "start": 501,
                                "end": 503
                              }
                            ],
                            "start": 496,
                            "end": 503
                          },
                          "start": 494,
                          "end": 503
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 492,
                        "end": 504
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 509
                        },
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
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 511,
                                  "end": 513
                                },
                                "typeArguments": null,
                                "start": 511,
                                "end": 513
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F4",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 516,
                                  "end": 518
                                },
                                "typeArguments": null,
                                "start": 516,
                                "end": 518
                              }
                            ],
                            "start": 511,
                            "end": 518
                          },
                          "start": 509,
                          "end": 518
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 507,
                        "end": 519
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 522,
                          "end": 524
                        },
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
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 526,
                                  "end": 528
                                },
                                "typeArguments": null,
                                "start": 526,
                                "end": 528
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F5",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 531,
                                  "end": 533
                                },
                                "typeArguments": null,
                                "start": 531,
                                "end": 533
                              }
                            ],
                            "start": 526,
                            "end": 533
                          },
                          "start": 524,
                          "end": 533
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 522,
                        "end": 534
                      }
                    ],
                    "start": 458,
                    "end": 536
                  }
                ],
                "start": 450,
                "end": 536
              },
              "start": 448,
              "end": 536
            },
            "start": 446,
            "end": 536
          },
          "init": null,
          "definite": false,
          "start": 446,
          "end": 536
        }
      ],
      "declare": true,
      "start": 434,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 539
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f0",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 542
          },
          "optional": false,
          "computed": false,
          "start": 537,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 537,
        "end": 544
      },
      "directive": null,
      "start": 537,
      "end": 545
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 548
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 551
          },
          "optional": false,
          "computed": false,
          "start": 546,
          "end": 551
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 546,
        "end": 553
      },
      "directive": null,
      "start": 546,
      "end": 554
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 557
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 560
          },
          "optional": false,
          "computed": false,
          "start": 555,
          "end": 560
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 555,
        "end": 562
      },
      "directive": null,
      "start": 555,
      "end": 563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 564,
            "end": 566
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 569
          },
          "optional": false,
          "computed": false,
          "start": 564,
          "end": 569
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 564,
        "end": 571
      },
      "directive": null,
      "start": 564,
      "end": 572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 584
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 587
          },
          "optional": false,
          "computed": false,
          "start": 582,
          "end": 587
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 582,
        "end": 589
      },
      "directive": null,
      "start": 582,
      "end": 590
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 617,
                      "end": 618
                    },
                    "typeArguments": null,
                    "start": 617,
                    "end": 618
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 622
                    },
                    "typeArguments": null,
                    "start": 621,
                    "end": 622
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
                          "name": "f4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 631
                        },
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
                                  "name": "F3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 633,
                                  "end": 635
                                },
                                "typeArguments": null,
                                "start": 633,
                                "end": 635
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F5",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 638,
                                  "end": 640
                                },
                                "typeArguments": null,
                                "start": 638,
                                "end": 640
                              }
                            ],
                            "start": 633,
                            "end": 640
                          },
                          "start": 631,
                          "end": 640
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 629,
                        "end": 641
                      }
                    ],
                    "start": 625,
                    "end": 643
                  }
                ],
                "start": 617,
                "end": 643
              },
              "start": 615,
              "end": 643
            },
            "start": 613,
            "end": 643
          },
          "init": null,
          "definite": false,
          "start": 613,
          "end": 643
        }
      ],
      "declare": true,
      "start": 601,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 646
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 649
          },
          "optional": false,
          "computed": false,
          "start": 644,
          "end": 649
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 644,
        "end": 651
      },
      "directive": null,
      "start": 644,
      "end": 652
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F6",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
      },
      "typeParameters": null,
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
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 672
                    },
                    "typeArguments": null,
                    "start": 671,
                    "end": 672
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 676
                    },
                    "typeArguments": null,
                    "start": 675,
                    "end": 676
                  }
                ],
                "start": 671,
                "end": 676
              },
              "start": 669,
              "end": 676
            },
            "start": 665,
            "end": 676
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 681,
            "end": 685
          },
          "start": 678,
          "end": 685
        },
        "start": 664,
        "end": 685
      },
      "declare": false,
      "start": 654,
      "end": 686
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
            "name": "f3",
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
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 703,
                      "end": 705
                    },
                    "typeArguments": null,
                    "start": 703,
                    "end": 705
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 708,
                      "end": 710
                    },
                    "typeArguments": null,
                    "start": 708,
                    "end": 710
                  }
                ],
                "start": 703,
                "end": 710
              },
              "start": 701,
              "end": 710
            },
            "start": 699,
            "end": 710
          },
          "init": null,
          "definite": false,
          "start": 699,
          "end": 710
        }
      ],
      "declare": true,
      "start": 687,
      "end": 711
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 712,
          "end": 714
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 712,
        "end": 716
      },
      "directive": null,
      "start": 712,
      "end": 717
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F7",
        "optional": false,
        "typeAnnotation": null,
        "start": 738,
        "end": 740
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 752,
                          "end": 753
                        },
                        "typeArguments": null,
                        "start": 752,
                        "end": 753
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 756,
                          "end": 757
                        },
                        "typeArguments": null,
                        "start": 756,
                        "end": 757
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 761
                        },
                        "typeArguments": null,
                        "start": 760,
                        "end": 761
                      }
                    ],
                    "start": 752,
                    "end": 761
                  },
                  "start": 750,
                  "end": 761
                },
                "start": 746,
                "end": 761
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 764,
                "end": 768
              },
              "start": 762,
              "end": 768
            },
            "start": 745,
            "end": 769
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 779,
                          "end": 780
                        },
                        "typeArguments": null,
                        "start": 779,
                        "end": 780
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 783,
                          "end": 784
                        },
                        "typeArguments": null,
                        "start": 783,
                        "end": 784
                      }
                    ],
                    "start": 779,
                    "end": 784
                  },
                  "start": 777,
                  "end": 784
                },
                "start": 773,
                "end": 784
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 787,
                "end": 791
              },
              "start": 785,
              "end": 791
            },
            "start": 772,
            "end": 792
          }
        ],
        "start": 741,
        "end": 794
      },
      "declare": false,
      "start": 728,
      "end": 794
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
            "name": "f4",
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
                      "name": "F6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 813
                    },
                    "typeArguments": null,
                    "start": 811,
                    "end": 813
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 818
                    },
                    "typeArguments": null,
                    "start": 816,
                    "end": 818
                  }
                ],
                "start": 811,
                "end": 818
              },
              "start": 809,
              "end": 818
            },
            "start": 807,
            "end": 818
          },
          "init": null,
          "definite": false,
          "start": 807,
          "end": 818
        }
      ],
      "declare": true,
      "start": 795,
      "end": 819
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 820,
          "end": 822
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 820,
        "end": 824
      },
      "directive": null,
      "start": 820,
      "end": 825
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 834
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
    "value": "A",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 24,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 48,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 72,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 96,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "F0",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 109,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 129,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 149,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 158,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 178,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 227,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 239,
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
    "value": "F0",
    "start": 243,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 268,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 323,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "F4",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 347,
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
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 360,
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
    "value": "D",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 378,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "F5",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 415,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 434,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "f0",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "F0",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 481,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "F4",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "F4",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "F5",
    "start": 531,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "f0",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
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
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 564,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 582,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 601,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "F5",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 654,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "F6",
    "start": 659,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 665,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 678,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 681,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 687,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 695,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 699,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "F6",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 728,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "F7",
    "start": 738,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 746,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 764,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 795,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 803,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "F6",
    "start": 811,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "F7",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  }
]
```

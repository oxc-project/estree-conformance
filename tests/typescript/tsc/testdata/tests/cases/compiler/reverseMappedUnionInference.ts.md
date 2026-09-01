__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyExtractor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 29
          }
        ],
        "start": 22,
        "end": 30
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
              "name": "matches",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
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
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 51,
                        "end": 54
                      },
                      "start": 49,
                      "end": 54
                    },
                    "start": 45,
                    "end": 54
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 59,
                    "end": 66
                  },
                  "start": 56,
                  "end": 66
                },
                "start": 44,
                "end": 66
              },
              "start": 42,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 67
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 77
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
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 86,
                        "end": 89
                      },
                      "start": 84,
                      "end": 89
                    },
                    "start": 80,
                    "end": 89
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
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 94,
                          "end": 100
                        },
                        "typeArguments": null,
                        "start": 94,
                        "end": 100
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 103,
                        "end": 112
                      }
                    ],
                    "start": 94,
                    "end": 112
                  },
                  "start": 91,
                  "end": 112
                },
                "start": 79,
                "end": 112
              },
              "start": 77,
              "end": 112
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 113
          }
        ],
        "start": 31,
        "end": 115
      },
      "declare": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Extractor",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 136
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
              "start": 137,
              "end": 138
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 138
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 146
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 140,
            "end": 146
          }
        ],
        "start": 136,
        "end": 147
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
              "name": "matches",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 159
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
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 168,
                        "end": 175
                      },
                      "start": 166,
                      "end": 175
                    },
                    "start": 162,
                    "end": 175
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 184
                    },
                    "asserts": false,
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
                          "start": 188,
                          "end": 189
                        },
                        "typeArguments": null,
                        "start": 188,
                        "end": 189
                      },
                      "start": 188,
                      "end": 189
                    },
                    "start": 180,
                    "end": 189
                  },
                  "start": 177,
                  "end": 189
                },
                "start": 161,
                "end": 189
              },
              "start": 159,
              "end": 189
            },
            "accessibility": null,
            "static": false,
            "start": 152,
            "end": 190
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 200
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
                    "name": "node",
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
                          "start": 209,
                          "end": 210
                        },
                        "typeArguments": null,
                        "start": 209,
                        "end": 210
                      },
                      "start": 207,
                      "end": 210
                    },
                    "start": 203,
                    "end": 210
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
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 221
                        },
                        "typeArguments": null,
                        "start": 215,
                        "end": 221
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 224,
                        "end": 233
                      }
                    ],
                    "start": 215,
                    "end": 233
                  },
                  "start": 212,
                  "end": 233
                },
                "start": 202,
                "end": 233
              },
              "start": 200,
              "end": 233
            },
            "accessibility": null,
            "static": false,
            "start": 193,
            "end": 234
          }
        ],
        "start": 148,
        "end": 236
      },
      "declare": false,
      "start": 117,
      "end": 236
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createExtractor",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 270
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
              "start": 271,
              "end": 272
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 271,
            "end": 272
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 280
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 274,
            "end": 280
          }
        ],
        "start": 270,
        "end": 281
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
                    "name": "matcher",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 301
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
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 310,
                              "end": 317
                            },
                            "start": 308,
                            "end": 317
                          },
                          "start": 304,
                          "end": 317
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "parameterName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 322,
                            "end": 326
                          },
                          "asserts": false,
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
                                "start": 330,
                                "end": 331
                              },
                              "typeArguments": null,
                              "start": 330,
                              "end": 331
                            },
                            "start": 330,
                            "end": 331
                          },
                          "start": 322,
                          "end": 331
                        },
                        "start": 319,
                        "end": 331
                      },
                      "start": 303,
                      "end": 331
                    },
                    "start": 301,
                    "end": 331
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 294,
                  "end": 332
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 342
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
                          "name": "node",
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
                                "start": 351,
                                "end": 352
                              },
                              "typeArguments": null,
                              "start": 351,
                              "end": 352
                            },
                            "start": 349,
                            "end": 352
                          },
                          "start": 345,
                          "end": 352
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 357,
                            "end": 363
                          },
                          "typeArguments": null,
                          "start": 357,
                          "end": 363
                        },
                        "start": 354,
                        "end": 363
                      },
                      "start": 344,
                      "end": 363
                    },
                    "start": 342,
                    "end": 363
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 335,
                  "end": 364
                }
              ],
              "start": 290,
              "end": 366
            },
            "start": 288,
            "end": 366
          },
          "start": 282,
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
            "name": "Extractor",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 378
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
                  "start": 379,
                  "end": 380
                },
                "typeArguments": null,
                "start": 379,
                "end": 380
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 388
                },
                "typeArguments": null,
                "start": 382,
                "end": 388
              }
            ],
            "start": 378,
            "end": 389
          },
          "start": 369,
          "end": 389
        },
        "start": 367,
        "end": 389
      },
      "body": null,
      "expression": false,
      "start": 238,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 412
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "identifier",
                  "raw": "\"identifier\"",
                  "start": 423,
                  "end": 435
                },
                "start": 423,
                "end": 435
              },
              "start": 421,
              "end": 435
            },
            "accessibility": null,
            "static": false,
            "start": 417,
            "end": 436
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 443
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 445,
                "end": 451
              },
              "start": 443,
              "end": 451
            },
            "accessibility": null,
            "static": false,
            "start": 439,
            "end": 452
          }
        ],
        "start": 413,
        "end": 454
      },
      "declare": false,
      "start": 392,
      "end": 454
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isIdentifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 485
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 492,
              "end": 499
            },
            "start": 490,
            "end": 499
          },
          "start": 486,
          "end": 499
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 506
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Identifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 520
              },
              "typeArguments": null,
              "start": 510,
              "end": 520
            },
            "start": 510,
            "end": 520
          },
          "start": 502,
          "end": 520
        },
        "start": 500,
        "end": 520
      },
      "body": null,
      "expression": false,
      "start": 456,
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
            "name": "identifierExtractor",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 548
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createExtractor",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 566
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
                      "name": "matcher",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 571,
                      "end": 578
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isIdentifier",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 592
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 571,
                    "end": 592
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 603
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
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 606,
                          "end": 610
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
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 636,
                                    "end": 640
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 636,
                                    "end": 640
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 636,
                                  "end": 640
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 648,
                                    "end": 652
                                  },
                                  "value": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": "identifier",
                                      "raw": "\"identifier\"",
                                      "start": 654,
                                      "end": 666
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "const",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 670,
                                        "end": 675
                                      },
                                      "typeArguments": null,
                                      "start": 670,
                                      "end": 675
                                    },
                                    "start": 654,
                                    "end": 675
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 648,
                                  "end": 675
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 683,
                                    "end": 688
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 690,
                                      "end": 694
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 695,
                                      "end": 699
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 690,
                                    "end": 699
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 683,
                                  "end": 699
                                }
                              ],
                              "start": 628,
                              "end": 706
                            },
                            "start": 621,
                            "end": 707
                          }
                        ],
                        "start": 615,
                        "end": 711
                      },
                      "id": null,
                      "generator": false,
                      "start": 605,
                      "end": 711
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 596,
                    "end": 711
                  }
                ],
                "start": 567,
                "end": 714
              }
            ],
            "optional": false,
            "start": 551,
            "end": 715
          },
          "definite": false,
          "start": 529,
          "end": 715
        }
      ],
      "declare": false,
      "start": 523,
      "end": 716
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 728,
        "end": 741
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 750
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "stringLiteral",
                  "raw": "\"stringLiteral\"",
                  "start": 752,
                  "end": 767
                },
                "start": 752,
                "end": 767
              },
              "start": 750,
              "end": 767
            },
            "accessibility": null,
            "static": false,
            "start": 746,
            "end": 768
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 776
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 778,
                "end": 784
              },
              "start": 776,
              "end": 784
            },
            "accessibility": null,
            "static": false,
            "start": 771,
            "end": 785
          }
        ],
        "start": 742,
        "end": 787
      },
      "declare": false,
      "start": 718,
      "end": 787
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isStringLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 821
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 828,
              "end": 835
            },
            "start": 826,
            "end": 835
          },
          "start": 822,
          "end": 835
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 842
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringLiteral",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 859
              },
              "typeArguments": null,
              "start": 846,
              "end": 859
            },
            "start": 846,
            "end": 859
          },
          "start": 838,
          "end": 859
        },
        "start": 836,
        "end": 859
      },
      "body": null,
      "expression": false,
      "start": 789,
      "end": 860
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
            "name": "stringExtractor",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 883
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createExtractor",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 901
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
                      "name": "matcher",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 913
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isStringLiteral",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 915,
                      "end": 930
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 906,
                    "end": 930
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 934,
                      "end": 941
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
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 944,
                          "end": 948
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
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 974,
                                    "end": 978
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 974,
                                    "end": 978
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 974,
                                  "end": 978
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 986,
                                    "end": 990
                                  },
                                  "value": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": "string",
                                      "raw": "\"string\"",
                                      "start": 992,
                                      "end": 1000
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "const",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1004,
                                        "end": 1009
                                      },
                                      "typeArguments": null,
                                      "start": 1004,
                                      "end": 1009
                                    },
                                    "start": 992,
                                    "end": 1009
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 986,
                                  "end": 1009
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1017,
                                    "end": 1022
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1024,
                                      "end": 1028
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1029,
                                      "end": 1034
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1024,
                                    "end": 1034
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1017,
                                  "end": 1034
                                }
                              ],
                              "start": 966,
                              "end": 1041
                            },
                            "start": 959,
                            "end": 1042
                          }
                        ],
                        "start": 953,
                        "end": 1046
                      },
                      "id": null,
                      "generator": false,
                      "start": 943,
                      "end": 1046
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 934,
                    "end": 1046
                  }
                ],
                "start": 902,
                "end": 1049
              }
            ],
            "optional": false,
            "start": 886,
            "end": 1050
          },
          "definite": false,
          "start": 868,
          "end": 1050
        }
      ],
      "declare": false,
      "start": 862,
      "end": 1051
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1070,
        "end": 1079
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
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1080,
              "end": 1086
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1104,
                  "end": 1111
                },
                "start": 1104,
                "end": 1113
              },
              "start": 1095,
              "end": 1113
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1080,
            "end": 1113
          }
        ],
        "start": 1079,
        "end": 1114
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "parsers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1130
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1146
                  },
                  "typeArguments": null,
                  "start": 1140,
                  "end": 1146
                },
                "start": 1134,
                "end": 1146
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyExtractor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1149,
                  "end": 1161
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
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1162,
                          "end": 1168
                        },
                        "typeArguments": null,
                        "start": 1162,
                        "end": 1168
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1169,
                          "end": 1170
                        },
                        "typeArguments": null,
                        "start": 1169,
                        "end": 1170
                      },
                      "start": 1162,
                      "end": 1171
                    }
                  ],
                  "start": 1161,
                  "end": 1172
                },
                "start": 1149,
                "end": 1172
              },
              "optional": false,
              "readonly": null,
              "start": 1124,
              "end": 1175
            },
            "start": 1122,
            "end": 1175
          },
          "start": 1115,
          "end": 1175
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnyExtractor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1178,
            "end": 1190
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
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1191,
                    "end": 1197
                  },
                  "typeArguments": null,
                  "start": 1191,
                  "end": 1197
                },
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 1198,
                  "end": 1204
                },
                "start": 1191,
                "end": 1205
              }
            ],
            "start": 1190,
            "end": 1206
          },
          "start": 1178,
          "end": 1206
        },
        "start": 1176,
        "end": 1206
      },
      "body": null,
      "expression": false,
      "start": 1053,
      "end": 1207
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
            "name": "myUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 1215,
            "end": 1222
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1225,
              "end": 1234
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identifierExtractor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1236,
                    "end": 1255
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringExtractor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1257,
                    "end": 1272
                  }
                ],
                "start": 1235,
                "end": 1273
              }
            ],
            "optional": false,
            "start": 1225,
            "end": 1274
          },
          "definite": false,
          "start": 1215,
          "end": 1274
        }
      ],
      "declare": false,
      "start": 1209,
      "end": 1275
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1275
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "AnyExtractor",
    "start": 10,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 56,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 59,
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
    "value": "extract",
    "start": 70,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 80,
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
    "value": "any",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 91,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 103,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 117,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Extractor",
    "start": 127,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "matches",
    "start": 152,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 177,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 180,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 185,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "extract",
    "start": 193,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 224,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 238,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "createExtractor",
    "start": 255,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "matcher",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "node",
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
    "value": "unknown",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "node",
    "start": 322,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 327,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "extract",
    "start": 335,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 354,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "Extractor",
    "start": 369,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 392,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 402,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "String",
    "value": "\"identifier\"",
    "start": 423,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 439,
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
    "value": "string",
    "start": 445,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 456,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 464,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "isIdentifier",
    "start": 473,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 492,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 502,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 507,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 510,
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
    "value": "const",
    "start": 523,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "identifierExtractor",
    "start": 529,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "createExtractor",
    "start": 551,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "matcher",
    "start": 571,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "isIdentifier",
    "start": 580,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "extract",
    "start": 596,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "String",
    "value": "\"identifier\"",
    "start": 654,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 667,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 670,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 683,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 690,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 695,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 718,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "StringLiteral",
    "start": 728,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "kind",
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
    "type": "String",
    "value": "\"stringLiteral\"",
    "start": 752,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 778,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 789,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 797,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "isStringLiteral",
    "start": 806,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 822,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 828,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 838,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 843,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "StringLiteral",
    "start": 846,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 862,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "stringExtractor",
    "start": 868,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "createExtractor",
    "start": 886,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "matcher",
    "start": 906,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "isStringLiteral",
    "start": 915,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "extract",
    "start": 934,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 950,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 959,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 974,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 992,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1004,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1061,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "unionType",
    "start": 1070,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 1080,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1087,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1095,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1104,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "parsers",
    "start": 1115,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1134,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 1140,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "AnyExtractor",
    "start": 1149,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "AnyExtractor",
    "start": 1178,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 1191,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1198,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1209,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "myUnion",
    "start": 1215,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "unionType",
    "start": 1225,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "identifierExtractor",
    "start": 1236,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "stringExtractor",
    "start": 1257,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  }
]
```

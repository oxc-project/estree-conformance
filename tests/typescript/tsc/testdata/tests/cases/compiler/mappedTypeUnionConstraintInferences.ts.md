__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 24
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
                "start": 25,
                "end": 26
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 25,
              "end": 26
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
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
                    "start": 44,
                    "end": 45
                  },
                  "typeArguments": null,
                  "start": 44,
                  "end": 45
                },
                "start": 38,
                "end": 45
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 28,
              "end": 45
            }
          ],
          "start": 24,
          "end": 46
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 53
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
                  "start": 54,
                  "end": 55
                },
                "typeArguments": null,
                "start": 54,
                "end": 55
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                          "start": 71,
                          "end": 72
                        },
                        "typeArguments": null,
                        "start": 71,
                        "end": 72
                      },
                      "start": 65,
                      "end": 72
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 75
                      },
                      "typeArguments": null,
                      "start": 74,
                      "end": 75
                    }
                  ],
                  "start": 64,
                  "end": 76
                },
                "start": 57,
                "end": 76
              }
            ],
            "start": 53,
            "end": 77
          },
          "start": 49,
          "end": 77
        },
        "declare": true,
        "start": 7,
        "end": 78
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 78
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PartialProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 116
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
                "start": 117,
                "end": 118
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 117,
              "end": 118
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
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
                    "start": 136,
                    "end": 137
                  },
                  "typeArguments": null,
                  "start": 136,
                  "end": 137
                },
                "start": 130,
                "end": 137
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 120,
              "end": 137
            }
          ],
          "start": 116,
          "end": 138
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 148
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 153
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
                            "start": 154,
                            "end": 155
                          },
                          "typeArguments": null,
                          "start": 154,
                          "end": 155
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 158
                          },
                          "typeArguments": null,
                          "start": 157,
                          "end": 158
                        }
                      ],
                      "start": 153,
                      "end": 159
                    },
                    "start": 149,
                    "end": 159
                  }
                ],
                "start": 148,
                "end": 160
              },
              "start": 141,
              "end": 160
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 167
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
                      "start": 168,
                      "end": 169
                    },
                    "typeArguments": null,
                    "start": 168,
                    "end": 169
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    },
                    "typeArguments": null,
                    "start": 171,
                    "end": 172
                  }
                ],
                "start": 167,
                "end": 173
              },
              "start": 163,
              "end": 173
            }
          ],
          "start": 141,
          "end": 173
        },
        "declare": true,
        "start": 86,
        "end": 174
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 79,
      "end": 174
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething_Actual",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 209
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
                "start": 210,
                "end": 211
              },
              "constraint": {
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
                      "start": 226,
                      "end": 230
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 232,
                        "end": 238
                      },
                      "start": 230,
                      "end": 238
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 226,
                    "end": 239
                  }
                ],
                "start": 220,
                "end": 241
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 210,
              "end": 241
            }
          ],
          "start": 209,
          "end": 242
        },
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
                  "start": 246,
                  "end": 247
                },
                "typeArguments": null,
                "start": 246,
                "end": 247
              },
              "start": 244,
              "end": 247
            },
            "start": 243,
            "end": 247
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
                        "type": "TSMappedType",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 267,
                          "end": 268
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 278,
                              "end": 295
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
                                    "start": 296,
                                    "end": 297
                                  },
                                  "typeArguments": null,
                                  "start": 296,
                                  "end": 297
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "\"prop\"",
                                    "start": 299,
                                    "end": 305
                                  },
                                  "start": 299,
                                  "end": 305
                                }
                              ],
                              "start": 295,
                              "end": 306
                            },
                            "start": 278,
                            "end": 306
                          },
                          "start": 272,
                          "end": 306
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PartialProperties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 309,
                              "end": 326
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
                                    "start": 327,
                                    "end": 328
                                  },
                                  "typeArguments": null,
                                  "start": 327,
                                  "end": 328
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "\"prop\"",
                                    "start": 330,
                                    "end": 336
                                  },
                                  "start": 330,
                                  "end": 336
                                }
                              ],
                              "start": 326,
                              "end": 337
                            },
                            "start": 309,
                            "end": 337
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 339
                            },
                            "typeArguments": null,
                            "start": 338,
                            "end": 339
                          },
                          "start": 309,
                          "end": 340
                        },
                        "optional": false,
                        "readonly": null,
                        "start": 264,
                        "end": 343
                      },
                      "start": 262,
                      "end": 343
                    },
                    "start": 261,
                    "end": 343
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 346,
                      "end": 350
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 354,
                      "end": 357
                    },
                    "start": 346,
                    "end": 357
                  },
                  "definite": false,
                  "start": 261,
                  "end": 357
                }
              ],
              "declare": false,
              "start": 255,
              "end": 358
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "start": 363,
              "end": 372
            }
          ],
          "start": 249,
          "end": 374
        },
        "expression": false,
        "start": 182,
        "end": 374
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 175,
      "end": 374
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething_Expected",
          "optional": false,
          "typeAnnotation": null,
          "start": 399,
          "end": 419
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
                "start": 420,
                "end": 421
              },
              "constraint": {
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
                      "start": 436,
                      "end": 440
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 442,
                        "end": 448
                      },
                      "start": 440,
                      "end": 448
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 436,
                    "end": 449
                  }
                ],
                "start": 430,
                "end": 451
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 420,
              "end": 451
            }
          ],
          "start": 419,
          "end": 452
        },
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
                  "start": 456,
                  "end": 457
                },
                "typeArguments": null,
                "start": 456,
                "end": 457
              },
              "start": 454,
              "end": 457
            },
            "start": 453,
            "end": 457
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 491
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
                        "start": 492,
                        "end": 493
                      },
                      "typeArguments": null,
                      "start": 492,
                      "end": 493
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "prop",
                        "raw": "\"prop\"",
                        "start": 495,
                        "end": 501
                      },
                      "start": 495,
                      "end": 501
                    }
                  ],
                  "start": 491,
                  "end": 502
                },
                "start": 474,
                "end": 502
              },
              "start": 468,
              "end": 502
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PartialProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 522
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
                        "start": 523,
                        "end": 524
                      },
                      "typeArguments": null,
                      "start": 523,
                      "end": 524
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "prop",
                        "raw": "\"prop\"",
                        "start": 526,
                        "end": 532
                      },
                      "start": 526,
                      "end": 532
                    }
                  ],
                  "start": 522,
                  "end": 533
                },
                "start": 505,
                "end": 533
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 535
                },
                "typeArguments": null,
                "start": 534,
                "end": 535
              },
              "start": 505,
              "end": 536
            },
            "optional": false,
            "readonly": null,
            "start": 460,
            "end": 539
          },
          "start": 458,
          "end": 539
        },
        "body": null,
        "expression": false,
        "start": 382,
        "end": 540
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 375,
      "end": 540
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething_Actual",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 575
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
                        "start": 578,
                        "end": 582
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 584,
                        "end": 590
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 578,
                      "end": 590
                    }
                  ],
                  "start": 576,
                  "end": 592
                }
              ],
              "optional": false,
              "start": 557,
              "end": 593
            },
            "definite": false,
            "start": 553,
            "end": 593
          }
        ],
        "declare": false,
        "start": 549,
        "end": 594
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 542,
      "end": 594
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 599,
          "end": 601
        },
        "start": 595,
        "end": 601
      },
      "directive": null,
      "start": 595,
      "end": 601
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething_Expected",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 677
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
                        "start": 680,
                        "end": 684
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 686,
                        "end": 692
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 680,
                      "end": 692
                    }
                  ],
                  "start": 678,
                  "end": 694
                }
              ],
              "optional": false,
              "start": 657,
              "end": 695
            },
            "definite": false,
            "start": 653,
            "end": 695
          }
        ],
        "declare": false,
        "start": 649,
        "end": 696
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 642,
      "end": 696
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 698
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 701,
          "end": 703
        },
        "start": 697,
        "end": 703
      },
      "directive": null,
      "start": 697,
      "end": 703
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 711
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 15,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 30,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 54,
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
    "value": "Exclude",
    "start": 57,
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
    "value": "keyof",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 86,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 94,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "PartialProperties",
    "start": 99,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 122,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "export",
    "start": 175,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "doSomething_Actual",
    "start": 191,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 212,
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
    "value": "prop",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 255,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 269,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "PartialProperties",
    "start": 278,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 297,
    "end": 298
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "PartialProperties",
    "start": 309,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Null",
    "value": "null",
    "start": 346,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 363,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 375,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 382,
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
    "value": "doSomething_Expected",
    "start": 399,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 422,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 465,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 468,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "PartialProperties",
    "start": 474,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "PartialProperties",
    "start": 505,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 542,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "doSomething_Actual",
    "start": 557,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 642,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "doSomething_Expected",
    "start": 657,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 680,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 686,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  }
]
```

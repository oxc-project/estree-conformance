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
        "name": "unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
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
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 23,
        "end": 26
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 37,
                "end": 38
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
                    "start": 48,
                    "end": 49
                  },
                  "typeArguments": null,
                  "start": 48,
                  "end": 49
                },
                "start": 42,
                "end": 49
              },
              "nameType": null,
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 59
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 61,
                            "end": 62
                          },
                          "typeArguments": null,
                          "start": 61,
                          "end": 62
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 64
                          },
                          "typeArguments": null,
                          "start": 63,
                          "end": 64
                        },
                        "start": 61,
                        "end": 65
                      },
                      "start": 59,
                      "end": 65
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 54,
                    "end": 65
                  }
                ],
                "start": 52,
                "end": 67
              },
              "optional": false,
              "readonly": null,
              "start": 34,
              "end": 69
            },
            "start": 32,
            "end": 69
          },
          "start": 27,
          "end": 69
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
            "start": 72,
            "end": 73
          },
          "typeArguments": null,
          "start": 72,
          "end": 73
        },
        "start": 70,
        "end": 73
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 74
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
            "name": "indexedInput",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 109
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 110,
                      "end": 116
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 120,
                            "end": 125
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 127,
                              "end": 133
                            },
                            "start": 125,
                            "end": 133
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 120,
                          "end": 133
                        }
                      ],
                      "start": 118,
                      "end": 135
                    }
                  ],
                  "start": 109,
                  "end": 136
                },
                "start": 103,
                "end": 136
              },
              "start": 101,
              "end": 136
            },
            "start": 89,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 136
        }
      ],
      "declare": true,
      "start": 75,
      "end": 137
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "indexed",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 158
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 167
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "indexedInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 180
                }
              ],
              "optional": false,
              "start": 161,
              "end": 181
            },
            "definite": false,
            "start": 151,
            "end": 181
          }
        ],
        "declare": false,
        "start": 145,
        "end": 182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 138,
      "end": 182
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicit",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 212
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 213,
                        "end": 219
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 221,
                        "end": 227
                      }
                    ],
                    "start": 212,
                    "end": 228
                  },
                  "start": 206,
                  "end": 228
                },
                "start": 204,
                "end": 228
              },
              "start": 196,
              "end": 228
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 237
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "indexedInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 250
                }
              ],
              "optional": false,
              "start": 231,
              "end": 251
            },
            "definite": false,
            "start": 196,
            "end": 251
          }
        ],
        "declare": false,
        "start": 190,
        "end": 252
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 183,
      "end": 252
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "shallow",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 273
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 282
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 289
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
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 293,
                              "end": 298
                            },
                            "value": {
                              "type": "Literal",
                              "value": "text",
                              "raw": "\"text\"",
                              "start": 300,
                              "end": 306
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 293,
                            "end": 306
                          }
                        ],
                        "start": 291,
                        "end": 308
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 285,
                      "end": 308
                    }
                  ],
                  "start": 283,
                  "end": 310
                }
              ],
              "optional": false,
              "start": 276,
              "end": 311
            },
            "definite": false,
            "start": 266,
            "end": 311
          }
        ],
        "declare": false,
        "start": 260,
        "end": 312
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 253,
      "end": 312
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
            "name": "readonlyInput",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 364,
                            "end": 370
                          },
                          "start": 362,
                          "end": 370
                        },
                        "start": 359,
                        "end": 370
                      }
                    ],
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
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 375,
                              "end": 380
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 382,
                                    "end": 388
                                  },
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 391,
                                    "end": 397
                                  }
                                ],
                                "start": 382,
                                "end": 397
                              },
                              "start": 380,
                              "end": 397
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 375,
                            "end": 397
                          }
                        ],
                        "start": 373,
                        "end": 399
                      },
                      "start": 371,
                      "end": 399
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null,
                    "start": 349,
                    "end": 400
                  }
                ],
                "start": 343,
                "end": 402
              },
              "start": 341,
              "end": 402
            },
            "start": 328,
            "end": 402
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 402
        }
      ],
      "declare": true,
      "start": 314,
      "end": 403
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyIndexed",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 432
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 441
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readonlyInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 455
                }
              ],
              "optional": false,
              "start": 435,
              "end": 456
            },
            "definite": false,
            "start": 417,
            "end": 456
          }
        ],
        "declare": false,
        "start": 411,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 404,
      "end": 457
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 473
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
              "start": 474,
              "end": 475
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 474,
            "end": 475
          }
        ],
        "start": 473,
        "end": 476
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 488,
                    "end": 495
                  },
                  "start": 486,
                  "end": 495
                },
                "start": 481,
                "end": 495
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 501
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 501
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 504,
                    "end": 513
                  }
                ],
                "start": 500,
                "end": 513
              },
              "start": 497,
              "end": 513
            },
            "start": 480,
            "end": 513
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 525
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
                  "start": 535,
                  "end": 536
                },
                "typeArguments": null,
                "start": 535,
                "end": 536
              },
              "start": 529,
              "end": 536
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 548
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
                        "start": 549,
                        "end": 550
                      },
                      "typeArguments": null,
                      "start": 549,
                      "end": 550
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 552
                      },
                      "typeArguments": null,
                      "start": 551,
                      "end": 552
                    },
                    "start": 549,
                    "end": 553
                  }
                ],
                "start": 548,
                "end": 554
              },
              "start": 539,
              "end": 554
            },
            "optional": false,
            "readonly": null,
            "start": 517,
            "end": 557
          }
        ],
        "start": 479,
        "end": 557
      },
      "declare": false,
      "start": 459,
      "end": 558
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decode",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 582
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
              "start": 583,
              "end": 584
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 583,
            "end": 584
          }
        ],
        "start": 582,
        "end": 585
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 596,
                "end": 597
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
                    "start": 607,
                    "end": 608
                  },
                  "typeArguments": null,
                  "start": 607,
                  "end": 608
                },
                "start": 601,
                "end": 608
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 620
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
                          "start": 621,
                          "end": 622
                        },
                        "typeArguments": null,
                        "start": 621,
                        "end": 622
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 623,
                          "end": 624
                        },
                        "typeArguments": null,
                        "start": 623,
                        "end": 624
                      },
                      "start": 621,
                      "end": 625
                    }
                  ],
                  "start": 620,
                  "end": 626
                },
                "start": 611,
                "end": 626
              },
              "optional": false,
              "readonly": null,
              "start": 593,
              "end": 628
            },
            "start": 591,
            "end": 628
          },
          "start": 586,
          "end": 628
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
            "start": 631,
            "end": 632
          },
          "typeArguments": null,
          "start": 631,
          "end": 632
        },
        "start": 629,
        "end": 632
      },
      "body": null,
      "expression": false,
      "start": 559,
      "end": 633
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
            "name": "stringValidator",
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
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 673,
                        "end": 680
                      },
                      "start": 671,
                      "end": 680
                    },
                    "start": 666,
                    "end": 680
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 685,
                        "end": 691
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 694,
                        "end": 703
                      }
                    ],
                    "start": 685,
                    "end": 703
                  },
                  "start": 682,
                  "end": 703
                },
                "start": 665,
                "end": 703
              },
              "start": 663,
              "end": 703
            },
            "start": 648,
            "end": 703
          },
          "init": null,
          "definite": false,
          "start": 648,
          "end": 703
        }
      ],
      "declare": true,
      "start": 634,
      "end": 704
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "deep",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 723
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "decode",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 732
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
                        "start": 735,
                        "end": 736
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
                              "start": 740,
                              "end": 741
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
                                    "start": 745,
                                    "end": 746
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
                                          "start": 750,
                                          "end": 751
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "stringValidator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 753,
                                          "end": 768
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 750,
                                        "end": 768
                                      }
                                    ],
                                    "start": 748,
                                    "end": 770
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 745,
                                  "end": 770
                                }
                              ],
                              "start": 743,
                              "end": 772
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 740,
                            "end": 772
                          }
                        ],
                        "start": 738,
                        "end": 774
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 735,
                      "end": 774
                    }
                  ],
                  "start": 733,
                  "end": 776
                }
              ],
              "optional": false,
              "start": 726,
              "end": 777
            },
            "definite": false,
            "start": 719,
            "end": 777
          }
        ],
        "declare": false,
        "start": 713,
        "end": 778
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 706,
      "end": 778
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 799
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
              "name": "leaf",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 810
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stringValidator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 834
                },
                "typeArguments": null,
                "start": 812,
                "end": 834
              },
              "start": 810,
              "end": 834
            },
            "accessibility": null,
            "static": false,
            "start": 806,
            "end": 835
          }
        ],
        "start": 800,
        "end": 837
      },
      "declare": false,
      "start": 779,
      "end": 837
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
            "name": "namedInput",
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
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 870
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NamedInput",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 882
                        },
                        "typeArguments": null,
                        "start": 872,
                        "end": 882
                      },
                      "start": 870,
                      "end": 882
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 866,
                    "end": 882
                  }
                ],
                "start": 864,
                "end": 884
              },
              "start": 862,
              "end": 884
            },
            "start": 852,
            "end": 884
          },
          "init": null,
          "definite": false,
          "start": 852,
          "end": 884
        }
      ],
      "declare": true,
      "start": 838,
      "end": 885
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "named",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 904
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "decode",
                "optional": false,
                "typeAnnotation": null,
                "start": 907,
                "end": 913
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "namedInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 914,
                  "end": 924
                }
              ],
              "optional": false,
              "start": 907,
              "end": 925
            },
            "definite": false,
            "start": 899,
            "end": 925
          }
        ],
        "declare": false,
        "start": 893,
        "end": 926
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 886,
      "end": 926
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
            "name": "nestedIndexInput",
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
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 962,
                      "end": 966
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 968,
                          "end": 974
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 975,
                              "end": 981
                            },
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "stringValidator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 990,
                                "end": 1005
                              },
                              "typeArguments": null,
                              "start": 983,
                              "end": 1005
                            }
                          ],
                          "start": 974,
                          "end": 1006
                        },
                        "start": 968,
                        "end": 1006
                      },
                      "start": 966,
                      "end": 1006
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 962,
                    "end": 1006
                  }
                ],
                "start": 960,
                "end": 1008
              },
              "start": 958,
              "end": 1008
            },
            "start": 942,
            "end": 1008
          },
          "init": null,
          "definite": false,
          "start": 942,
          "end": 1008
        }
      ],
      "declare": true,
      "start": 928,
      "end": 1009
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedIndexed",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1036
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "decode",
                "optional": false,
                "typeAnnotation": null,
                "start": 1039,
                "end": 1045
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedIndexInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1046,
                  "end": 1062
                }
              ],
              "optional": false,
              "start": 1039,
              "end": 1063
            },
            "definite": false,
            "start": 1023,
            "end": 1063
          }
        ],
        "declare": false,
        "start": 1017,
        "end": 1064
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1010,
      "end": 1064
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "namedExplicit",
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
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1096,
                        "end": 1100
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
                                "name": "leaf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1104,
                                "end": 1108
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1110,
                                  "end": 1116
                                },
                                "start": 1108,
                                "end": 1116
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1104,
                              "end": 1116
                            }
                          ],
                          "start": 1102,
                          "end": 1118
                        },
                        "start": 1100,
                        "end": 1118
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1096,
                      "end": 1118
                    }
                  ],
                  "start": 1094,
                  "end": 1120
                },
                "start": 1092,
                "end": 1120
              },
              "start": 1079,
              "end": 1120
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "decode",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1129
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "namedInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1140
                }
              ],
              "optional": false,
              "start": 1123,
              "end": 1141
            },
            "definite": false,
            "start": 1079,
            "end": 1141
          }
        ],
        "declare": false,
        "start": 1073,
        "end": 1142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1066,
      "end": 1142
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "deepExplicit",
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
                        "start": 1172,
                        "end": 1173
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
                                "start": 1177,
                                "end": 1178
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
                                        "start": 1182,
                                        "end": 1183
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
                                                "start": 1187,
                                                "end": 1188
                                              },
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                  "type": "TSStringKeyword",
                                                  "start": 1190,
                                                  "end": 1196
                                                },
                                                "start": 1188,
                                                "end": 1196
                                              },
                                              "accessibility": null,
                                              "static": false,
                                              "start": 1187,
                                              "end": 1196
                                            }
                                          ],
                                          "start": 1185,
                                          "end": 1198
                                        },
                                        "start": 1183,
                                        "end": 1198
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 1182,
                                      "end": 1198
                                    }
                                  ],
                                  "start": 1180,
                                  "end": 1200
                                },
                                "start": 1178,
                                "end": 1200
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1177,
                              "end": 1200
                            }
                          ],
                          "start": 1175,
                          "end": 1202
                        },
                        "start": 1173,
                        "end": 1202
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1172,
                      "end": 1202
                    }
                  ],
                  "start": 1170,
                  "end": 1204
                },
                "start": 1168,
                "end": 1204
              },
              "start": 1156,
              "end": 1204
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "decode",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1217
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
                        "start": 1220,
                        "end": 1221
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
                              "start": 1225,
                              "end": 1226
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
                                    "start": 1230,
                                    "end": 1231
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
                                          "start": 1235,
                                          "end": 1236
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "stringValidator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1238,
                                          "end": 1253
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1235,
                                        "end": 1253
                                      }
                                    ],
                                    "start": 1233,
                                    "end": 1255
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1230,
                                  "end": 1255
                                }
                              ],
                              "start": 1228,
                              "end": 1257
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1225,
                            "end": 1257
                          }
                        ],
                        "start": 1223,
                        "end": 1259
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1220,
                      "end": 1259
                    }
                  ],
                  "start": 1218,
                  "end": 1261
                }
              ],
              "optional": false,
              "start": 1211,
              "end": 1262
            },
            "definite": false,
            "start": 1156,
            "end": 1262
          }
        ],
        "declare": false,
        "start": 1150,
        "end": 1263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1143,
      "end": 1263
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1264
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
    "value": "unwrap",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "input",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "K",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "value",
    "start": 54,
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
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "declare",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "indexedInput",
    "start": 89,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 138,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "indexed",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "unwrap",
    "start": 161,
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
    "value": "indexedInput",
    "start": 168,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "export",
    "start": 183,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 190,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "unwrap",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "indexedInput",
    "start": 238,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 253,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 260,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "shallow",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "unwrap",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 285,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "\"text\"",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 314,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 322,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "readonlyInput",
    "start": 328,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 349,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 404,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 411,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "readonlyIndexed",
    "start": 417,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "unwrap",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "readonlyInput",
    "start": 442,
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
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 459,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 464,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 481,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 488,
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
    "value": "=>",
    "start": 497,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 504,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 515,
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
    "value": "[",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 526,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 529,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 539,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 559,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 567,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 583,
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
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 586,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 598,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 601,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 611,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 634,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 642,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "stringValidator",
    "start": 648,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 666,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 673,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 682,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 685,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 694,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 706,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 713,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "deep",
    "start": 719,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 726,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "stringValidator",
    "start": 753,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 779,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "NamedInput",
    "start": 789,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "leaf",
    "start": 806,
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
    "value": "stringValidator",
    "start": 819,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 838,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 846,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "namedInput",
    "start": 852,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "NamedInput",
    "start": 872,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 886,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 893,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 899,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 907,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "namedInput",
    "start": 914,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 928,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 936,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "nestedIndexInput",
    "start": 942,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 983,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "stringValidator",
    "start": 990,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1017,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "nestedIndexed",
    "start": 1023,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 1039,
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
    "value": "nestedIndexInput",
    "start": 1046,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1066,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1073,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "namedExplicit",
    "start": 1079,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1096,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "leaf",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1110,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 1123,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "namedInput",
    "start": 1130,
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
    "type": "Keyword",
    "value": "export",
    "start": 1143,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1150,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "deepExplicit",
    "start": 1156,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1190,
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
    "value": "}",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 1211,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "stringValidator",
    "start": 1238,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  }
]
```
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
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 29,
                    "end": 36
                  },
                  "start": 27,
                  "end": 36
                },
                "start": 22,
                "end": 36
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 42
                    },
                    "typeArguments": null,
                    "start": 41,
                    "end": 42
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 45,
                    "end": 54
                  }
                ],
                "start": 41,
                "end": 54
              },
              "start": 38,
              "end": 54
            },
            "start": 21,
            "end": 54
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
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
                  "start": 76,
                  "end": 77
                },
                "typeArguments": null,
                "start": 76,
                "end": 77
              },
              "start": 70,
              "end": 77
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 89
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
                        "start": 90,
                        "end": 91
                      },
                      "typeArguments": null,
                      "start": 90,
                      "end": 91
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 93
                      },
                      "typeArguments": null,
                      "start": 92,
                      "end": 93
                    },
                    "start": 90,
                    "end": 94
                  }
                ],
                "start": 89,
                "end": 95
              },
              "start": 80,
              "end": 95
            },
            "optional": false,
            "readonly": null,
            "start": 58,
            "end": 98
          }
        ],
        "start": 20,
        "end": 98
      },
      "declare": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "decode",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 123
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
              "start": 124,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 125
          }
        ],
        "start": 123,
        "end": 126
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
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
                "start": 137,
                "end": 138
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
                    "start": 148,
                    "end": 149
                  },
                  "typeArguments": null,
                  "start": 148,
                  "end": 149
                },
                "start": 142,
                "end": 149
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 161
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
                          "start": 162,
                          "end": 163
                        },
                        "typeArguments": null,
                        "start": 162,
                        "end": 163
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 165
                        },
                        "typeArguments": null,
                        "start": 164,
                        "end": 165
                      },
                      "start": 162,
                      "end": 166
                    }
                  ],
                  "start": 161,
                  "end": 167
                },
                "start": 152,
                "end": 167
              },
              "optional": false,
              "readonly": null,
              "start": 134,
              "end": 169
            },
            "start": 132,
            "end": 169
          },
          "start": 127,
          "end": 169
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
            "start": 172,
            "end": 173
          },
          "typeArguments": null,
          "start": 172,
          "end": 173
        },
        "start": 170,
        "end": 173
      },
      "body": null,
      "expression": false,
      "start": 100,
      "end": 174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecursiveInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 194
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 208
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
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 218,
                        "end": 225
                      },
                      "start": 216,
                      "end": 225
                    },
                    "start": 211,
                    "end": 225
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 230,
                    "end": 236
                  },
                  "start": 227,
                  "end": 236
                },
                "start": 210,
                "end": 236
              },
              "start": 208,
              "end": 236
            },
            "accessibility": null,
            "static": false,
            "start": 203,
            "end": 237
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 246
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 262
                },
                "typeArguments": null,
                "start": 248,
                "end": 262
              },
              "start": 246,
              "end": 262
            },
            "accessibility": null,
            "static": false,
            "start": 242,
            "end": 263
          }
        ],
        "start": 197,
        "end": 265
      },
      "declare": false,
      "start": 175,
      "end": 266
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
            "name": "recursiveInput",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 311
                },
                "typeArguments": null,
                "start": 297,
                "end": 311
              },
              "start": 295,
              "end": 311
            },
            "start": 281,
            "end": 311
          },
          "init": null,
          "definite": false,
          "start": 281,
          "end": 311
        }
      ],
      "declare": true,
      "start": 267,
      "end": 312
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "recursive",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 335
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "decode",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 344
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "recursiveInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 359
                }
              ],
              "optional": false,
              "start": 338,
              "end": 360
            },
            "definite": false,
            "start": 326,
            "end": 360
          }
        ],
        "declare": false,
        "start": 320,
        "end": 361
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 313,
      "end": 361
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GrowingInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 385
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
              "start": 386,
              "end": 387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 386,
            "end": 387
          }
        ],
        "start": 385,
        "end": 388
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 400
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
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 410,
                        "end": 417
                      },
                      "start": 408,
                      "end": 417
                    },
                    "start": 403,
                    "end": 417
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
                      "start": 422,
                      "end": 423
                    },
                    "typeArguments": null,
                    "start": 422,
                    "end": 423
                  },
                  "start": 419,
                  "end": 423
                },
                "start": 402,
                "end": 423
              },
              "start": 400,
              "end": 423
            },
            "accessibility": null,
            "static": false,
            "start": 395,
            "end": 424
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GrowingInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 447
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 449
                        },
                        "typeArguments": null,
                        "start": 448,
                        "end": 449
                      },
                      "start": 448,
                      "end": 451
                    }
                  ],
                  "start": 447,
                  "end": 452
                },
                "start": 435,
                "end": 452
              },
              "start": 433,
              "end": 452
            },
            "accessibility": null,
            "static": false,
            "start": 429,
            "end": 453
          }
        ],
        "start": 389,
        "end": 455
      },
      "declare": false,
      "start": 363,
      "end": 455
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
            "name": "growingInput",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GrowingInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 496
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 497,
                      "end": 503
                    }
                  ],
                  "start": 496,
                  "end": 504
                },
                "start": 484,
                "end": 504
              },
              "start": 482,
              "end": 504
            },
            "start": 470,
            "end": 504
          },
          "init": null,
          "definite": false,
          "start": 470,
          "end": 504
        }
      ],
      "declare": true,
      "start": 456,
      "end": 505
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "growing",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 526
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "decode",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 535
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "growingInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 548
                }
              ],
              "optional": false,
              "start": 529,
              "end": 549
            },
            "definite": false,
            "start": 519,
            "end": 549
          }
        ],
        "declare": false,
        "start": 513,
        "end": 550
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 506,
      "end": 550
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecursiveIndexInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 562,
        "end": 581
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 594,
                    "end": 600
                  },
                  "start": 592,
                  "end": 600
                },
                "start": 589,
                "end": 600
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveIndexInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 622
                },
                "typeArguments": null,
                "start": 603,
                "end": 622
              },
              "start": 601,
              "end": 622
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 588,
            "end": 623
          }
        ],
        "start": 582,
        "end": 625
      },
      "declare": false,
      "start": 552,
      "end": 625
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
            "name": "recursiveIndexInput",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveIndexInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 680
                },
                "typeArguments": null,
                "start": 661,
                "end": 680
              },
              "start": 659,
              "end": 680
            },
            "start": 640,
            "end": 680
          },
          "init": null,
          "definite": false,
          "start": 640,
          "end": 680
        }
      ],
      "declare": true,
      "start": 626,
      "end": 681
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "recursiveIndexed",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 711
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "decode",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 720
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "recursiveIndexInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 721,
                  "end": 740
                }
              ],
              "optional": false,
              "start": 714,
              "end": 741
            },
            "definite": false,
            "start": 695,
            "end": 741
          }
        ],
        "declare": false,
        "start": 689,
        "end": 742
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 682,
      "end": 742
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 742
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
    "value": "Validator",
    "start": 5,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 38,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "undefined",
    "start": 45,
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
    "value": "|",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 67,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 80,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 100,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 139,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 152,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "type",
    "start": 175,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "RecursiveInput",
    "start": 180,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 227,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "RecursiveInput",
    "start": 248,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 267,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "recursiveInput",
    "start": 281,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "RecursiveInput",
    "start": 297,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 313,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "recursive",
    "start": 326,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "recursiveInput",
    "start": 345,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 363,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "GrowingInput",
    "start": 373,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 403,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 410,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 419,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "GrowingInput",
    "start": 435,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 456,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 464,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "growingInput",
    "start": 470,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "GrowingInput",
    "start": 484,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 506,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 513,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "growing",
    "start": 519,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "growingInput",
    "start": 536,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 552,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "RecursiveIndexInput",
    "start": 562,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "RecursiveIndexInput",
    "start": 603,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 626,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 634,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "recursiveIndexInput",
    "start": 640,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "RecursiveIndexInput",
    "start": 661,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 682,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 689,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "recursiveIndexed",
    "start": 695,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 714,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "recursiveIndexInput",
    "start": 721,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  }
]
```

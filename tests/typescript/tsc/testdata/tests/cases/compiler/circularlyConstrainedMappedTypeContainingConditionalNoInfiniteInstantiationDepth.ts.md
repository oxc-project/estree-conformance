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
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 23
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 44
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 52,
                        "end": 60
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 61,
                              "end": 62
                            },
                            "typeArguments": null,
                            "start": 61,
                            "end": 62
                          }
                        ],
                        "start": 60,
                        "end": 63
                      },
                      "start": 52,
                      "end": 63
                    },
                    "start": 50,
                    "end": 63
                  },
                  "start": 45,
                  "end": 63
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 44,
              "end": 65
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 33,
            "end": 65
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 81
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 90
                      },
                      "typeArguments": null,
                      "start": 89,
                      "end": 90
                    },
                    "start": 87,
                    "end": 90
                  },
                  "start": 82,
                  "end": 90
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 102,
                      "end": 105
                    },
                    "start": 100,
                    "end": 105
                  },
                  "start": 92,
                  "end": 105
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 81,
              "end": 107
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 70,
            "end": 107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 126
            },
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
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 136
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 137,
                            "end": 138
                          },
                          "typeArguments": null,
                          "start": 137,
                          "end": 138
                        }
                      ],
                      "start": 136,
                      "end": 139
                    },
                    "start": 128,
                    "end": 139
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 150
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 153,
                                "end": 161
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "members": [],
                                  "start": 164,
                                  "end": 166
                                },
                                "start": 162,
                                "end": 166
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 153,
                              "end": 166
                            }
                          ],
                          "start": 151,
                          "end": 168
                        }
                      ],
                      "start": 150,
                      "end": 169
                    },
                    "start": 142,
                    "end": 169
                  }
                ],
                "start": 128,
                "end": 169
              },
              "start": 126,
              "end": 169
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 112,
            "end": 170
          }
        ],
        "start": 27,
        "end": 172
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 172
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 197
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 202,
              "end": 204
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 198,
            "end": 204
          }
        ],
        "start": 197,
        "end": 205
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
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
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 225
                    },
                    "typeArguments": null,
                    "start": 224,
                    "end": 225
                  },
                  "start": 222,
                  "end": 225
                },
                "start": 217,
                "end": 225
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 237,
                    "end": 240
                  },
                  "start": 235,
                  "end": 240
                },
                "start": 227,
                "end": 240
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 252
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 254
                      },
                      "typeArguments": null,
                      "start": 253,
                      "end": 254
                    }
                  ],
                  "start": 252,
                  "end": 255
                },
                "start": 243,
                "end": 255
              },
              "start": 241,
              "end": 255
            },
            "start": 212,
            "end": 256
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 270
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 290
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 291,
                        "end": 292
                      },
                      "typeArguments": null,
                      "start": 291,
                      "end": 292
                    }
                  ],
                  "start": 290,
                  "end": 293
                },
                "start": 273,
                "end": 293
              },
              "start": 271,
              "end": 293
            },
            "accessibility": null,
            "static": false,
            "start": 261,
            "end": 294
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 321
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 323
                      },
                      "typeArguments": null,
                      "start": 322,
                      "end": 323
                    }
                  ],
                  "start": 321,
                  "end": 324
                },
                "start": 314,
                "end": 324
              },
              "start": 312,
              "end": 324
            },
            "accessibility": null,
            "static": false,
            "start": 299,
            "end": 325
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "displayName",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 341
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 344,
                "end": 350
              },
              "start": 342,
              "end": 350
            },
            "accessibility": null,
            "static": false,
            "start": 330,
            "end": 351
          }
        ],
        "start": 206,
        "end": 353
      },
      "declare": false,
      "start": 173,
      "end": 353
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 381
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 386,
              "end": 388
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 382,
            "end": 388
          }
        ],
        "start": 381,
        "end": 389
      },
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
                "name": "props",
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
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 405
                        },
                        "typeArguments": null,
                        "start": 404,
                        "end": 405
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 410,
                              "end": 418
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [],
                                "start": 421,
                                "end": 423
                              },
                              "start": 419,
                              "end": 423
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 410,
                            "end": 423
                          }
                        ],
                        "start": 408,
                        "end": 425
                      }
                    ],
                    "start": 404,
                    "end": 425
                  },
                  "start": 402,
                  "end": 425
                },
                "start": 397,
                "end": 425
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "context",
                "optional": true,
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
                "start": 427,
                "end": 440
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 443,
                    "end": 445
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 448,
                    "end": 452
                  }
                ],
                "start": 443,
                "end": 452
              },
              "start": 441,
              "end": 452
            },
            "start": 396,
            "end": 453
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 467
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 487
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 489
                      },
                      "typeArguments": null,
                      "start": 488,
                      "end": 489
                    }
                  ],
                  "start": 487,
                  "end": 490
                },
                "start": 470,
                "end": 490
              },
              "start": 468,
              "end": 490
            },
            "accessibility": null,
            "static": false,
            "start": 458,
            "end": 491
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 518
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 519,
                        "end": 520
                      },
                      "typeArguments": null,
                      "start": 519,
                      "end": 520
                    }
                  ],
                  "start": 518,
                  "end": 521
                },
                "start": 511,
                "end": 521
              },
              "start": 509,
              "end": 521
            },
            "accessibility": null,
            "static": false,
            "start": 496,
            "end": 522
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "displayName",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 538
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 541,
                "end": 547
              },
              "start": 539,
              "end": 547
            },
            "accessibility": null,
            "static": false,
            "start": 527,
            "end": 548
          }
        ],
        "start": 390,
        "end": 550
      },
      "declare": false,
      "start": 354,
      "end": 550
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
              "name": "nominalTypeHack",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 597,
                    "end": 603
                  },
                  "start": 590,
                  "end": 603
                },
                "start": 588,
                "end": 603
              },
              "start": 573,
              "end": 603
            },
            "init": null,
            "definite": false,
            "start": 573,
            "end": 603
          }
        ],
        "declare": true,
        "start": 559,
        "end": 604
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 552,
      "end": 604
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validator",
          "optional": false,
          "typeAnnotation": null,
          "start": 622,
          "end": 631
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
                "start": 632,
                "end": 633
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 632,
              "end": 633
            }
          ],
          "start": 631,
          "end": 634
        },
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
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 649,
                      "end": 655
                    },
                    "start": 647,
                    "end": 655
                  },
                  "start": 642,
                  "end": 655
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 667,
                      "end": 673
                    },
                    "start": 665,
                    "end": 673
                  },
                  "start": 657,
                  "end": 673
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "componentName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 690,
                      "end": 696
                    },
                    "start": 688,
                    "end": 696
                  },
                  "start": 675,
                  "end": 696
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "location",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 708,
                      "end": 714
                    },
                    "start": 706,
                    "end": 714
                  },
                  "start": 698,
                  "end": 714
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propFullName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 730,
                      "end": 736
                    },
                    "start": 728,
                    "end": 736
                  },
                  "start": 716,
                  "end": 736
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
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 739,
                        "end": 744
                      },
                      "typeArguments": null,
                      "start": 739,
                      "end": 744
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 747,
                      "end": 751
                    }
                  ],
                  "start": 739,
                  "end": 751
                },
                "start": 737,
                "end": 751
              },
              "start": 641,
              "end": 752
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nominalTypeHack",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 773
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
                    "start": 777,
                    "end": 778
                  },
                  "typeArguments": null,
                  "start": 777,
                  "end": 778
                },
                "start": 775,
                "end": 778
              },
              "accessibility": null,
              "static": false,
              "start": 757,
              "end": 779
            }
          ],
          "start": 635,
          "end": 781
        },
        "declare": false,
        "start": 612,
        "end": 781
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 605,
      "end": 781
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeakValidationMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 787,
        "end": 804
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
              "start": 805,
              "end": 806
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 805,
            "end": 806
          }
        ],
        "start": 804,
        "end": 807
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 817,
          "end": 818
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
              "start": 828,
              "end": 829
            },
            "typeArguments": null,
            "start": 828,
            "end": 829
          },
          "start": 822,
          "end": 829
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "start": 833,
            "end": 837
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 847
              },
              "typeArguments": null,
              "start": 846,
              "end": 847
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 848,
                "end": 849
              },
              "typeArguments": null,
              "start": 848,
              "end": 849
            },
            "start": 846,
            "end": 850
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 870
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
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
                          "start": 871,
                          "end": 872
                        },
                        "typeArguments": null,
                        "start": 871,
                        "end": 872
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 873,
                          "end": 874
                        },
                        "typeArguments": null,
                        "start": 873,
                        "end": 874
                      },
                      "start": 871,
                      "end": 875
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 878,
                      "end": 882
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 885,
                      "end": 894
                    }
                  ],
                  "start": 871,
                  "end": 894
                }
              ],
              "start": 870,
              "end": 895
            },
            "start": 861,
            "end": 895
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 906,
              "end": 915
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 925
                },
                "typeArguments": null,
                "start": 924,
                "end": 925
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 927
                },
                "typeArguments": null,
                "start": 926,
                "end": 927
              },
              "start": 924,
              "end": 928
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 939,
                "end": 948
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
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
                            "start": 949,
                            "end": 950
                          },
                          "typeArguments": null,
                          "start": 949,
                          "end": 950
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 951,
                            "end": 952
                          },
                          "typeArguments": null,
                          "start": 951,
                          "end": 952
                        },
                        "start": 949,
                        "end": 953
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 956,
                        "end": 960
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 963,
                        "end": 972
                      }
                    ],
                    "start": 949,
                    "end": 972
                  }
                ],
                "start": 948,
                "end": 973
              },
              "start": 939,
              "end": 973
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 984,
                "end": 993
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
                        "start": 994,
                        "end": 995
                      },
                      "typeArguments": null,
                      "start": 994,
                      "end": 995
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 996,
                        "end": 997
                      },
                      "typeArguments": null,
                      "start": 996,
                      "end": 997
                    },
                    "start": 994,
                    "end": 998
                  }
                ],
                "start": 993,
                "end": 999
              },
              "start": 984,
              "end": 999
            },
            "start": 906,
            "end": 999
          },
          "start": 833,
          "end": 999
        },
        "optional": true,
        "readonly": null,
        "start": 810,
        "end": 1001
      },
      "declare": false,
      "start": 782,
      "end": 1002
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1008,
        "end": 1021
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1022,
              "end": 1023
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 1026,
              "end": 1028
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1022,
            "end": 1028
          }
        ],
        "start": 1021,
        "end": 1029
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1046
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1047,
                    "end": 1048
                  },
                  "typeArguments": null,
                  "start": 1047,
                  "end": 1048
                }
              ],
              "start": 1046,
              "end": 1049
            },
            "start": 1032,
            "end": 1049
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1069
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1070,
                    "end": 1071
                  },
                  "typeArguments": null,
                  "start": 1070,
                  "end": 1071
                }
              ],
              "start": 1069,
              "end": 1072
            },
            "start": 1052,
            "end": 1072
          }
        ],
        "start": 1032,
        "end": 1072
      },
      "declare": false,
      "start": 1003,
      "end": 1073
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shared",
          "optional": false,
          "typeAnnotation": null,
          "start": 1087,
          "end": 1093
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1112
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1099,
              "end": 1112
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1118,
                "end": 1139
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shared",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1154
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InjectedProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1155,
                        "end": 1168
                      },
                      "typeArguments": null,
                      "start": 1155,
                      "end": 1168
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DecorationTargetProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1170,
                        "end": 1191
                      },
                      "typeArguments": null,
                      "start": 1170,
                      "end": 1191
                    }
                  ],
                  "start": 1154,
                  "end": 1192
                },
                "start": 1148,
                "end": 1192
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1118,
              "end": 1192
            }
          ],
          "start": 1093,
          "end": 1198
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1212,
            "end": 1213
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 1217,
              "end": 1224
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
                      "name": "InjectedProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1231,
                      "end": 1244
                    },
                    "typeArguments": null,
                    "start": 1231,
                    "end": 1244
                  },
                  "start": 1225,
                  "end": 1244
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1252,
                      "end": 1273
                    },
                    "typeArguments": null,
                    "start": 1252,
                    "end": 1273
                  },
                  "start": 1246,
                  "end": 1273
                }
              ],
              "start": 1224,
              "end": 1274
            },
            "start": 1217,
            "end": 1274
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
                  "name": "InjectedProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1278,
                  "end": 1291
                },
                "typeArguments": null,
                "start": 1278,
                "end": 1291
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1292,
                  "end": 1293
                },
                "typeArguments": null,
                "start": 1292,
                "end": 1293
              },
              "start": 1278,
              "end": 1294
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1324
                },
                "typeArguments": null,
                "start": 1303,
                "end": 1324
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1326
                },
                "typeArguments": null,
                "start": 1325,
                "end": 1326
              },
              "start": 1303,
              "end": 1327
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1330,
                  "end": 1351
                },
                "typeArguments": null,
                "start": 1330,
                "end": 1351
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1353
                },
                "typeArguments": null,
                "start": 1352,
                "end": 1353
              },
              "start": 1330,
              "end": 1354
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1357,
              "end": 1362
            },
            "start": 1278,
            "end": 1362
          },
          "optional": true,
          "readonly": null,
          "start": 1201,
          "end": 1369
        },
        "declare": false,
        "start": 1082,
        "end": 1370
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1075,
      "end": 1370
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 1421,
          "end": 1429
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1430,
                "end": 1431
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1430,
              "end": 1431
            }
          ],
          "start": 1429,
          "end": 1432
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1435,
              "end": 1436
            },
            "typeArguments": null,
            "start": 1435,
            "end": 1436
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1445,
              "end": 1458
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
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1465,
                      "end": 1466
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1465,
                    "end": 1466
                  },
                  "start": 1459,
                  "end": 1466
                }
              ],
              "start": 1458,
              "end": 1467
            },
            "start": 1445,
            "end": 1467
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1471
            },
            "typeArguments": null,
            "start": 1470,
            "end": 1471
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1474,
            "end": 1479
          },
          "start": 1435,
          "end": 1479
        },
        "declare": false,
        "start": 1416,
        "end": 1480
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1409,
      "end": 1480
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConnectedComponentClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1494,
          "end": 1517
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1523,
                "end": 1524
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1533,
                  "end": 1546
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1547,
                      "end": 1550
                    }
                  ],
                  "start": 1546,
                  "end": 1551
                },
                "start": 1533,
                "end": 1551
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1523,
              "end": 1551
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1557,
                "end": 1558
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1557,
              "end": 1558
            }
          ],
          "start": 1517,
          "end": 1560
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1563,
                "end": 1577
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1578,
                      "end": 1579
                    },
                    "typeArguments": null,
                    "start": 1578,
                    "end": 1579
                  }
                ],
                "start": 1577,
                "end": 1580
              },
              "start": 1563,
              "end": 1580
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
                    "name": "WrappedComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1589,
                    "end": 1605
                  },
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
                        "start": 1607,
                        "end": 1608
                      },
                      "typeArguments": null,
                      "start": 1607,
                      "end": 1608
                    },
                    "start": 1605,
                    "end": 1608
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1589,
                  "end": 1609
                }
              ],
              "start": 1583,
              "end": 1611
            }
          ],
          "start": 1563,
          "end": 1611
        },
        "declare": false,
        "start": 1489,
        "end": 1612
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1482,
      "end": 1612
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Matching",
          "optional": false,
          "typeAnnotation": null,
          "start": 1626,
          "end": 1634
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1635,
                "end": 1648
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1635,
              "end": 1648
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1650,
                "end": 1671
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1650,
              "end": 1671
            }
          ],
          "start": 1634,
          "end": 1672
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1682,
            "end": 1683
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1693,
                "end": 1714
              },
              "typeArguments": null,
              "start": 1693,
              "end": 1714
            },
            "start": 1687,
            "end": 1714
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1717,
                "end": 1718
              },
              "typeArguments": null,
              "start": 1717,
              "end": 1718
            },
            "extendsType": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InjectedProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1733,
                  "end": 1746
                },
                "typeArguments": null,
                "start": 1733,
                "end": 1746
              },
              "start": 1727,
              "end": 1746
            },
            "trueType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InjectedProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1757,
                    "end": 1770
                  },
                  "typeArguments": null,
                  "start": 1757,
                  "end": 1770
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1771,
                    "end": 1772
                  },
                  "typeArguments": null,
                  "start": 1771,
                  "end": 1772
                },
                "start": 1757,
                "end": 1773
              },
              "extendsType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1782,
                    "end": 1803
                  },
                  "typeArguments": null,
                  "start": 1782,
                  "end": 1803
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1804,
                    "end": 1805
                  },
                  "typeArguments": null,
                  "start": 1804,
                  "end": 1805
                },
                "start": 1782,
                "end": 1806
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1821,
                    "end": 1842
                  },
                  "typeArguments": null,
                  "start": 1821,
                  "end": 1842
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1843,
                    "end": 1844
                  },
                  "typeArguments": null,
                  "start": 1843,
                  "end": 1844
                },
                "start": 1821,
                "end": 1845
              },
              "falseType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InjectedProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1860,
                    "end": 1873
                  },
                  "typeArguments": null,
                  "start": 1860,
                  "end": 1873
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1874,
                    "end": 1875
                  },
                  "typeArguments": null,
                  "start": 1874,
                  "end": 1875
                },
                "start": 1860,
                "end": 1876
              },
              "start": 1757,
              "end": 1876
            },
            "falseType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1887,
                  "end": 1908
                },
                "typeArguments": null,
                "start": 1887,
                "end": 1908
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1909,
                  "end": 1910
                },
                "typeArguments": null,
                "start": 1909,
                "end": 1910
              },
              "start": 1887,
              "end": 1911
            },
            "start": 1717,
            "end": 1911
          },
          "optional": false,
          "readonly": null,
          "start": 1675,
          "end": 1914
        },
        "declare": false,
        "start": 1621,
        "end": 1915
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1614,
      "end": 1915
    },
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
          "start": 1929,
          "end": 1933
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
                "start": 1934,
                "end": 1935
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1934,
              "end": 1935
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1937,
                "end": 1938
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
                    "start": 1953,
                    "end": 1954
                  },
                  "typeArguments": null,
                  "start": 1953,
                  "end": 1954
                },
                "start": 1947,
                "end": 1954
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1937,
              "end": 1954
            }
          ],
          "start": 1933,
          "end": 1955
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 1958,
            "end": 1962
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
                  "start": 1963,
                  "end": 1964
                },
                "typeArguments": null,
                "start": 1963,
                "end": 1964
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1966,
                  "end": 1973
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
                          "start": 1980,
                          "end": 1981
                        },
                        "typeArguments": null,
                        "start": 1980,
                        "end": 1981
                      },
                      "start": 1974,
                      "end": 1981
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1983,
                        "end": 1984
                      },
                      "typeArguments": null,
                      "start": 1983,
                      "end": 1984
                    }
                  ],
                  "start": 1973,
                  "end": 1985
                },
                "start": 1966,
                "end": 1985
              }
            ],
            "start": 1962,
            "end": 1986
          },
          "start": 1958,
          "end": 1986
        },
        "declare": false,
        "start": 1924,
        "end": 1987
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1917,
      "end": 1987
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferableComponentEnhancerWithProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 2001,
          "end": 2036
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TInjectedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 2037,
                "end": 2051
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2037,
              "end": 2051
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TNeedsProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2064
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2053,
              "end": 2064
            }
          ],
          "start": 2036,
          "end": 2065
        },
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2073,
                  "end": 2074
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2083,
                    "end": 2096
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Matching",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2097,
                          "end": 2105
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TInjectedProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2106,
                                "end": 2120
                              },
                              "typeArguments": null,
                              "start": 2106,
                              "end": 2120
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "GetProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2122,
                                "end": 2130
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2131,
                                      "end": 2132
                                    },
                                    "typeArguments": null,
                                    "start": 2131,
                                    "end": 2132
                                  }
                                ],
                                "start": 2130,
                                "end": 2133
                              },
                              "start": 2122,
                              "end": 2133
                            }
                          ],
                          "start": 2105,
                          "end": 2134
                        },
                        "start": 2097,
                        "end": 2134
                      }
                    ],
                    "start": 2096,
                    "end": 2135
                  },
                  "start": 2083,
                  "end": 2135
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2073,
                "end": 2135
              }
            ],
            "start": 2072,
            "end": 2136
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "component",
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
                    "start": 2157,
                    "end": 2158
                  },
                  "typeArguments": null,
                  "start": 2157,
                  "end": 2158
                },
                "start": 2155,
                "end": 2158
              },
              "start": 2146,
              "end": 2158
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConnectedComponentClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2168,
                "end": 2191
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2192,
                      "end": 2193
                    },
                    "typeArguments": null,
                    "start": 2192,
                    "end": 2193
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Omit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2195,
                          "end": 2199
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "GetProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2200,
                                "end": 2208
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2209,
                                      "end": 2210
                                    },
                                    "typeArguments": null,
                                    "start": 2209,
                                    "end": 2210
                                  }
                                ],
                                "start": 2208,
                                "end": 2211
                              },
                              "start": 2200,
                              "end": 2211
                            },
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Shared",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2219,
                                  "end": 2225
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "TInjectedProps",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2226,
                                        "end": 2240
                                      },
                                      "typeArguments": null,
                                      "start": 2226,
                                      "end": 2240
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "GetProps",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2242,
                                        "end": 2250
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2251,
                                              "end": 2252
                                            },
                                            "typeArguments": null,
                                            "start": 2251,
                                            "end": 2252
                                          }
                                        ],
                                        "start": 2250,
                                        "end": 2253
                                      },
                                      "start": 2242,
                                      "end": 2253
                                    }
                                  ],
                                  "start": 2225,
                                  "end": 2254
                                },
                                "start": 2219,
                                "end": 2254
                              },
                              "start": 2213,
                              "end": 2254
                            }
                          ],
                          "start": 2199,
                          "end": 2255
                        },
                        "start": 2195,
                        "end": 2255
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TNeedsProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2258,
                          "end": 2269
                        },
                        "typeArguments": null,
                        "start": 2258,
                        "end": 2269
                      }
                    ],
                    "start": 2195,
                    "end": 2269
                  }
                ],
                "start": 2191,
                "end": 2270
              },
              "start": 2168,
              "end": 2270
            },
            "start": 2165,
            "end": 2270
          },
          "start": 2072,
          "end": 2270
        },
        "declare": false,
        "start": 1996,
        "end": 2271
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1989,
      "end": 2271
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2271
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
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 14,
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
    "value": "P",
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
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 33,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 52,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 70,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 99,
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
    "value": "any",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "readonly",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 121,
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
    "value": "Readonly",
    "start": 128,
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
    "value": "P",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 142,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 153,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 173,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 183,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 234,
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
    "value": "any",
    "start": 237,
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
    "value": "Component",
    "start": 243,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "propTypes",
    "start": 261,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 273,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 299,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 314,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "displayName",
    "start": 330,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 354,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 364,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
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
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 410,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 427,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 446,
    "end": 447
  },
  {
    "type": "Null",
    "value": "null",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 458,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 470,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 496,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 508,
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
    "value": "Partial",
    "start": 511,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "displayName",
    "start": 527,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 552,
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
    "value": "const",
    "start": 567,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "nominalTypeHack",
    "start": 573,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 590,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 605,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 612,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 622,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 642,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 649,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 657,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "componentName",
    "start": 675,
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
    "value": "string",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 698,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "propFullName",
    "start": 716,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 730,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 739,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 745,
    "end": 746
  },
  {
    "type": "Null",
    "value": "null",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "nominalTypeHack",
    "start": 758,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 782,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 787,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 819,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 822,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Null",
    "value": "null",
    "start": 833,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 838,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 861,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 876,
    "end": 877
  },
  {
    "type": "Null",
    "value": "null",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 885,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 906,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 916,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 939,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 954,
    "end": 955
  },
  {
    "type": "Null",
    "value": "null",
    "start": 956,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 963,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 984,
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
    "value": "T",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1008,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 1032,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 1052,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1075,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1082,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 1087,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1099,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1118,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1140,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 1148,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1155,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1170,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1217,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1225,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1231,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1246,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1252,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1278,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1295,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1303,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1330,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1357,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1409,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1416,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "GetProps",
    "start": 1421,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1437,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1445,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1459,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1474,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1482,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1489,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "ConnectedComponentClass",
    "start": 1494,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1525,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1533,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 1563,
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
    "value": "P",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "WrappedComponent",
    "start": 1589,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1614,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1621,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "Matching",
    "start": 1626,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1635,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1650,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1684,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1687,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1693,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1719,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1727,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1733,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1757,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1774,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1782,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1821,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1860,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1887,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1924,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1929,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1939,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1947,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 1958,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 1966,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1974,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1989,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1996,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "InferableComponentEnhancerWithProps",
    "start": 2001,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "TInjectedProps",
    "start": 2037,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "TNeedsProps",
    "start": 2053,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2075,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 2083,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "Matching",
    "start": 2097,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "TInjectedProps",
    "start": 2106,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "GetProps",
    "start": 2122,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 2146,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2165,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "ConnectedComponentClass",
    "start": 2168,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 2195,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "GetProps",
    "start": 2200,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2213,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 2219,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "TInjectedProps",
    "start": 2226,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "GetProps",
    "start": 2242,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "TNeedsProps",
    "start": 2258,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2270,
    "end": 2271
  }
]
```

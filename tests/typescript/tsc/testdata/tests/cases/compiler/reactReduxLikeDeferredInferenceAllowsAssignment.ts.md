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
              "start": 31,
              "end": 42
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
                        "start": 50,
                        "end": 58
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
                              "start": 59,
                              "end": 60
                            },
                            "typeArguments": null,
                            "start": 59,
                            "end": 60
                          }
                        ],
                        "start": 58,
                        "end": 61
                      },
                      "start": 50,
                      "end": 61
                    },
                    "start": 48,
                    "end": 61
                  },
                  "start": 43,
                  "end": 61
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 42,
              "end": 63
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 63
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
              "start": 66,
              "end": 77
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
                        "start": 85,
                        "end": 86
                      },
                      "typeArguments": null,
                      "start": 85,
                      "end": 86
                    },
                    "start": 83,
                    "end": 86
                  },
                  "start": 78,
                  "end": 86
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
                      "start": 98,
                      "end": 101
                    },
                    "start": 96,
                    "end": 101
                  },
                  "start": 88,
                  "end": 101
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 77,
              "end": 103
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 103
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
              "start": 115,
              "end": 120
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
                      "start": 122,
                      "end": 130
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
                            "start": 131,
                            "end": 132
                          },
                          "typeArguments": null,
                          "start": 131,
                          "end": 132
                        }
                      ],
                      "start": 130,
                      "end": 133
                    },
                    "start": 122,
                    "end": 133
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 144
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
                                "start": 147,
                                "end": 155
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "members": [],
                                  "start": 158,
                                  "end": 160
                                },
                                "start": 156,
                                "end": 160
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 147,
                              "end": 160
                            }
                          ],
                          "start": 145,
                          "end": 162
                        }
                      ],
                      "start": 144,
                      "end": 163
                    },
                    "start": 136,
                    "end": 163
                  }
                ],
                "start": 122,
                "end": 163
              },
              "start": 120,
              "end": 163
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
            "start": 106,
            "end": 164
          }
        ],
        "start": 27,
        "end": 166
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 191
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
              "start": 192,
              "end": 193
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 196,
              "end": 198
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 198
          }
        ],
        "start": 191,
        "end": 199
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
                      "start": 216,
                      "end": 217
                    },
                    "typeArguments": null,
                    "start": 216,
                    "end": 217
                  },
                  "start": 214,
                  "end": 217
                },
                "start": 209,
                "end": 217
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
                    "start": 229,
                    "end": 232
                  },
                  "start": 227,
                  "end": 232
                },
                "start": 219,
                "end": 232
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
                  "start": 235,
                  "end": 244
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
                        "start": 245,
                        "end": 246
                      },
                      "typeArguments": null,
                      "start": 245,
                      "end": 246
                    }
                  ],
                  "start": 244,
                  "end": 247
                },
                "start": 235,
                "end": 247
              },
              "start": 233,
              "end": 247
            },
            "start": 204,
            "end": 248
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
              "start": 251,
              "end": 260
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
                  "start": 263,
                  "end": 280
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
                        "start": 281,
                        "end": 282
                      },
                      "typeArguments": null,
                      "start": 281,
                      "end": 282
                    }
                  ],
                  "start": 280,
                  "end": 283
                },
                "start": 263,
                "end": 283
              },
              "start": 261,
              "end": 283
            },
            "accessibility": null,
            "static": false,
            "start": 251,
            "end": 284
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
              "start": 287,
              "end": 299
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
                  "start": 302,
                  "end": 309
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
                        "start": 310,
                        "end": 311
                      },
                      "typeArguments": null,
                      "start": 310,
                      "end": 311
                    }
                  ],
                  "start": 309,
                  "end": 312
                },
                "start": 302,
                "end": 312
              },
              "start": 300,
              "end": 312
            },
            "accessibility": null,
            "static": false,
            "start": 287,
            "end": 313
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
              "start": 316,
              "end": 327
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 330,
                "end": 336
              },
              "start": 328,
              "end": 336
            },
            "accessibility": null,
            "static": false,
            "start": 316,
            "end": 337
          }
        ],
        "start": 200,
        "end": 339
      },
      "declare": false,
      "start": 167,
      "end": 339
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 367
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
              "start": 368,
              "end": 369
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 372,
              "end": 374
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 368,
            "end": 374
          }
        ],
        "start": 367,
        "end": 375
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
                          "start": 388,
                          "end": 389
                        },
                        "typeArguments": null,
                        "start": 388,
                        "end": 389
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
                              "start": 394,
                              "end": 402
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [],
                                "start": 405,
                                "end": 407
                              },
                              "start": 403,
                              "end": 407
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 394,
                            "end": 407
                          }
                        ],
                        "start": 392,
                        "end": 409
                      }
                    ],
                    "start": 388,
                    "end": 409
                  },
                  "start": 386,
                  "end": 409
                },
                "start": 381,
                "end": 409
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
                    "start": 421,
                    "end": 424
                  },
                  "start": 419,
                  "end": 424
                },
                "start": 411,
                "end": 424
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
                    "start": 427,
                    "end": 429
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 432,
                    "end": 436
                  }
                ],
                "start": 427,
                "end": 436
              },
              "start": 425,
              "end": 436
            },
            "start": 380,
            "end": 437
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
              "start": 440,
              "end": 449
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
                  "start": 452,
                  "end": 469
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
                        "start": 470,
                        "end": 471
                      },
                      "typeArguments": null,
                      "start": 470,
                      "end": 471
                    }
                  ],
                  "start": 469,
                  "end": 472
                },
                "start": 452,
                "end": 472
              },
              "start": 450,
              "end": 472
            },
            "accessibility": null,
            "static": false,
            "start": 440,
            "end": 473
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
              "start": 476,
              "end": 488
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
                  "start": 491,
                  "end": 498
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
                        "start": 499,
                        "end": 500
                      },
                      "typeArguments": null,
                      "start": 499,
                      "end": 500
                    }
                  ],
                  "start": 498,
                  "end": 501
                },
                "start": 491,
                "end": 501
              },
              "start": 489,
              "end": 501
            },
            "accessibility": null,
            "static": false,
            "start": 476,
            "end": 502
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
              "start": 505,
              "end": 516
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 519,
                "end": 525
              },
              "start": 517,
              "end": 525
            },
            "accessibility": null,
            "static": false,
            "start": 505,
            "end": 526
          }
        ],
        "start": 376,
        "end": 528
      },
      "declare": false,
      "start": 340,
      "end": 528
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
            "name": "nominalTypeHack",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 568,
                  "end": 574
                },
                "start": 561,
                "end": 574
              },
              "start": 559,
              "end": 574
            },
            "start": 544,
            "end": 574
          },
          "init": null,
          "definite": false,
          "start": 544,
          "end": 574
        }
      ],
      "declare": true,
      "start": 530,
      "end": 575
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null,
        "start": 586,
        "end": 595
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
              "start": 596,
              "end": 597
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 596,
            "end": 597
          }
        ],
        "start": 595,
        "end": 598
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
                    "start": 616,
                    "end": 622
                  },
                  "start": 614,
                  "end": 622
                },
                "start": 609,
                "end": 622
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
                    "start": 638,
                    "end": 644
                  },
                  "start": 636,
                  "end": 644
                },
                "start": 628,
                "end": 644
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
                    "start": 665,
                    "end": 671
                  },
                  "start": 663,
                  "end": 671
                },
                "start": 650,
                "end": 671
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
                    "start": 687,
                    "end": 693
                  },
                  "start": 685,
                  "end": 693
                },
                "start": 677,
                "end": 693
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
                    "start": 713,
                    "end": 719
                  },
                  "start": 711,
                  "end": 719
                },
                "start": 699,
                "end": 719
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
                      "start": 725,
                      "end": 730
                    },
                    "typeArguments": null,
                    "start": 725,
                    "end": 730
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 733,
                    "end": 737
                  }
                ],
                "start": 725,
                "end": 737
              },
              "start": 723,
              "end": 737
            },
            "start": 603,
            "end": 738
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
              "start": 742,
              "end": 757
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
                  "start": 761,
                  "end": 762
                },
                "typeArguments": null,
                "start": 761,
                "end": 762
              },
              "start": 759,
              "end": 762
            },
            "accessibility": null,
            "static": false,
            "start": 741,
            "end": 763
          }
        ],
        "start": 599,
        "end": 765
      },
      "declare": false,
      "start": 576,
      "end": 765
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeakValidationMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 788
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
              "start": 789,
              "end": 790
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 789,
            "end": 790
          }
        ],
        "start": 788,
        "end": 791
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 799,
          "end": 800
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
              "start": 810,
              "end": 811
            },
            "typeArguments": null,
            "start": 810,
            "end": 811
          },
          "start": 804,
          "end": 811
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "start": 815,
            "end": 819
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
                "start": 828,
                "end": 829
              },
              "typeArguments": null,
              "start": 828,
              "end": 829
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 831
              },
              "typeArguments": null,
              "start": 830,
              "end": 831
            },
            "start": 828,
            "end": 832
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 839,
              "end": 848
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
                          "start": 849,
                          "end": 850
                        },
                        "typeArguments": null,
                        "start": 849,
                        "end": 850
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 851,
                          "end": 852
                        },
                        "typeArguments": null,
                        "start": 851,
                        "end": 852
                      },
                      "start": 849,
                      "end": 853
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 856,
                      "end": 860
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 863,
                      "end": 872
                    }
                  ],
                  "start": 849,
                  "end": 872
                }
              ],
              "start": 848,
              "end": 873
            },
            "start": 839,
            "end": 873
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 880,
              "end": 889
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
                  "start": 898,
                  "end": 899
                },
                "typeArguments": null,
                "start": 898,
                "end": 899
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 901
                },
                "typeArguments": null,
                "start": 900,
                "end": 901
              },
              "start": 898,
              "end": 902
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 909,
                "end": 918
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
                            "start": 919,
                            "end": 920
                          },
                          "typeArguments": null,
                          "start": 919,
                          "end": 920
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 921,
                            "end": 922
                          },
                          "typeArguments": null,
                          "start": 921,
                          "end": 922
                        },
                        "start": 919,
                        "end": 923
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 926,
                        "end": 930
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 933,
                        "end": 942
                      }
                    ],
                    "start": 919,
                    "end": 942
                  }
                ],
                "start": 918,
                "end": 943
              },
              "start": 909,
              "end": 943
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 959
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
                        "start": 960,
                        "end": 961
                      },
                      "typeArguments": null,
                      "start": 960,
                      "end": 961
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 962,
                        "end": 963
                      },
                      "typeArguments": null,
                      "start": 962,
                      "end": 963
                    },
                    "start": 960,
                    "end": 964
                  }
                ],
                "start": 959,
                "end": 965
              },
              "start": 950,
              "end": 965
            },
            "start": 880,
            "end": 965
          },
          "start": 815,
          "end": 965
        },
        "optional": true,
        "readonly": null,
        "start": 794,
        "end": 967
      },
      "declare": false,
      "start": 766,
      "end": 968
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 987
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
              "start": 988,
              "end": 989
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 992,
              "end": 994
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 988,
            "end": 994
          }
        ],
        "start": 987,
        "end": 995
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
              "start": 998,
              "end": 1012
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
                    "start": 1013,
                    "end": 1014
                  },
                  "typeArguments": null,
                  "start": 1013,
                  "end": 1014
                }
              ],
              "start": 1012,
              "end": 1015
            },
            "start": 998,
            "end": 1015
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1035
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
                    "start": 1036,
                    "end": 1037
                  },
                  "typeArguments": null,
                  "start": 1036,
                  "end": 1037
                }
              ],
              "start": 1035,
              "end": 1038
            },
            "start": 1018,
            "end": 1038
          }
        ],
        "start": 998,
        "end": 1038
      },
      "declare": false,
      "start": 969,
      "end": 1039
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shared",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1052
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
              "start": 1056,
              "end": 1069
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1056,
            "end": 1069
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1094
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shared",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1109
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
                      "start": 1110,
                      "end": 1123
                    },
                    "typeArguments": null,
                    "start": 1110,
                    "end": 1123
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1125,
                      "end": 1146
                    },
                    "typeArguments": null,
                    "start": 1125,
                    "end": 1146
                  }
                ],
                "start": 1109,
                "end": 1147
              },
              "start": 1103,
              "end": 1147
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1073,
            "end": 1147
          }
        ],
        "start": 1052,
        "end": 1149
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1157,
          "end": 1158
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 1162,
            "end": 1169
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
                    "start": 1181,
                    "end": 1194
                  },
                  "typeArguments": null,
                  "start": 1181,
                  "end": 1194
                },
                "start": 1175,
                "end": 1194
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
                    "start": 1206,
                    "end": 1227
                  },
                  "typeArguments": null,
                  "start": 1206,
                  "end": 1227
                },
                "start": 1200,
                "end": 1227
              }
            ],
            "start": 1169,
            "end": 1231
          },
          "start": 1162,
          "end": 1231
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
                "start": 1235,
                "end": 1248
              },
              "typeArguments": null,
              "start": 1235,
              "end": 1248
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1250
              },
              "typeArguments": null,
              "start": 1249,
              "end": 1250
            },
            "start": 1235,
            "end": 1251
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
                "start": 1260,
                "end": 1281
              },
              "typeArguments": null,
              "start": 1260,
              "end": 1281
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1283
              },
              "typeArguments": null,
              "start": 1282,
              "end": 1283
            },
            "start": 1260,
            "end": 1284
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
                "start": 1291,
                "end": 1312
              },
              "typeArguments": null,
              "start": 1291,
              "end": 1312
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1313,
                "end": 1314
              },
              "typeArguments": null,
              "start": 1313,
              "end": 1314
            },
            "start": 1291,
            "end": 1315
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1322,
            "end": 1327
          },
          "start": 1235,
          "end": 1327
        },
        "optional": true,
        "readonly": null,
        "start": 1152,
        "end": 1329
      },
      "declare": false,
      "start": 1041,
      "end": 1330
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1374,
        "end": 1382
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
              "start": 1383,
              "end": 1384
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1383,
            "end": 1384
          }
        ],
        "start": 1382,
        "end": 1385
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
            "start": 1388,
            "end": 1389
          },
          "typeArguments": null,
          "start": 1388,
          "end": 1389
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1398,
            "end": 1411
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
                    "start": 1418,
                    "end": 1419
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1418,
                  "end": 1419
                },
                "start": 1412,
                "end": 1419
              }
            ],
            "start": 1411,
            "end": 1420
          },
          "start": 1398,
          "end": 1420
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1423,
            "end": 1424
          },
          "typeArguments": null,
          "start": 1423,
          "end": 1424
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1427,
          "end": 1432
        },
        "start": 1388,
        "end": 1432
      },
      "declare": false,
      "start": 1369,
      "end": 1433
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConnectedComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1440,
        "end": 1463
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
              "start": 1464,
              "end": 1465
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1474,
                "end": 1487
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1488,
                    "end": 1491
                  }
                ],
                "start": 1487,
                "end": 1492
              },
              "start": 1474,
              "end": 1492
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1464,
            "end": 1492
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1494,
              "end": 1495
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1494,
            "end": 1495
          }
        ],
        "start": 1463,
        "end": 1496
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
              "start": 1499,
              "end": 1513
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
                    "start": 1517,
                    "end": 1518
                  },
                  "typeArguments": null,
                  "start": 1517,
                  "end": 1518
                }
              ],
              "start": 1513,
              "end": 1520
            },
            "start": 1499,
            "end": 1520
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
                  "start": 1527,
                  "end": 1543
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
                      "start": 1545,
                      "end": 1546
                    },
                    "typeArguments": null,
                    "start": 1545,
                    "end": 1546
                  },
                  "start": 1543,
                  "end": 1546
                },
                "accessibility": null,
                "static": false,
                "start": 1527,
                "end": 1547
              }
            ],
            "start": 1523,
            "end": 1549
          }
        ],
        "start": 1499,
        "end": 1549
      },
      "declare": false,
      "start": 1435,
      "end": 1550
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Matching",
        "optional": false,
        "typeAnnotation": null,
        "start": 1557,
        "end": 1565
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
              "start": 1566,
              "end": 1579
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1566,
            "end": 1579
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1581,
              "end": 1602
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1581,
            "end": 1602
          }
        ],
        "start": 1565,
        "end": 1603
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1611,
          "end": 1612
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
              "start": 1622,
              "end": 1643
            },
            "typeArguments": null,
            "start": 1622,
            "end": 1643
          },
          "start": 1616,
          "end": 1643
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
              "start": 1646,
              "end": 1647
            },
            "typeArguments": null,
            "start": 1646,
            "end": 1647
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
                "start": 1662,
                "end": 1675
              },
              "typeArguments": null,
              "start": 1662,
              "end": 1675
            },
            "start": 1656,
            "end": 1675
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
                  "start": 1682,
                  "end": 1695
                },
                "typeArguments": null,
                "start": 1682,
                "end": 1695
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1697
                },
                "typeArguments": null,
                "start": 1696,
                "end": 1697
              },
              "start": 1682,
              "end": 1698
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
                  "start": 1707,
                  "end": 1728
                },
                "typeArguments": null,
                "start": 1707,
                "end": 1728
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1730
                },
                "typeArguments": null,
                "start": 1729,
                "end": 1730
              },
              "start": 1707,
              "end": 1731
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
                  "start": 1740,
                  "end": 1761
                },
                "typeArguments": null,
                "start": 1740,
                "end": 1761
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1762,
                  "end": 1763
                },
                "typeArguments": null,
                "start": 1762,
                "end": 1763
              },
              "start": 1740,
              "end": 1764
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
                  "start": 1773,
                  "end": 1786
                },
                "typeArguments": null,
                "start": 1773,
                "end": 1786
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1787,
                  "end": 1788
                },
                "typeArguments": null,
                "start": 1787,
                "end": 1788
              },
              "start": 1773,
              "end": 1789
            },
            "start": 1682,
            "end": 1789
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
                "start": 1796,
                "end": 1817
              },
              "typeArguments": null,
              "start": 1796,
              "end": 1817
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1818,
                "end": 1819
              },
              "typeArguments": null,
              "start": 1818,
              "end": 1819
            },
            "start": 1796,
            "end": 1820
          },
          "start": 1646,
          "end": 1820
        },
        "optional": false,
        "readonly": null,
        "start": 1606,
        "end": 1822
      },
      "declare": false,
      "start": 1552,
      "end": 1823
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 1830,
        "end": 1834
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
              "start": 1835,
              "end": 1836
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1835,
            "end": 1836
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1838,
              "end": 1839
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
                  "start": 1854,
                  "end": 1855
                },
                "typeArguments": null,
                "start": 1854,
                "end": 1855
              },
              "start": 1848,
              "end": 1855
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1838,
            "end": 1855
          }
        ],
        "start": 1834,
        "end": 1856
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1859,
          "end": 1863
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
                "start": 1864,
                "end": 1865
              },
              "typeArguments": null,
              "start": 1864,
              "end": 1865
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 1867,
                "end": 1874
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
                        "start": 1881,
                        "end": 1882
                      },
                      "typeArguments": null,
                      "start": 1881,
                      "end": 1882
                    },
                    "start": 1875,
                    "end": 1882
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1884,
                      "end": 1885
                    },
                    "typeArguments": null,
                    "start": 1884,
                    "end": 1885
                  }
                ],
                "start": 1874,
                "end": 1886
              },
              "start": 1867,
              "end": 1886
            }
          ],
          "start": 1863,
          "end": 1887
        },
        "start": 1859,
        "end": 1887
      },
      "declare": false,
      "start": 1825,
      "end": 1888
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferableComponentEnhancerWithProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1895,
        "end": 1930
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
              "start": 1931,
              "end": 1945
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1931,
            "end": 1945
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TNeedsProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1947,
              "end": 1958
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1947,
            "end": 1958
          }
        ],
        "start": 1930,
        "end": 1959
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
                "start": 1966,
                "end": 1967
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1976,
                  "end": 1989
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
                        "start": 1990,
                        "end": 1998
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
                              "start": 1999,
                              "end": 2013
                            },
                            "typeArguments": null,
                            "start": 1999,
                            "end": 2013
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "GetProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2015,
                              "end": 2023
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
                                    "start": 2024,
                                    "end": 2025
                                  },
                                  "typeArguments": null,
                                  "start": 2024,
                                  "end": 2025
                                }
                              ],
                              "start": 2023,
                              "end": 2026
                            },
                            "start": 2015,
                            "end": 2026
                          }
                        ],
                        "start": 1998,
                        "end": 2027
                      },
                      "start": 1990,
                      "end": 2027
                    }
                  ],
                  "start": 1989,
                  "end": 2028
                },
                "start": 1976,
                "end": 2028
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1966,
              "end": 2028
            }
          ],
          "start": 1962,
          "end": 2030
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
                  "start": 2045,
                  "end": 2046
                },
                "typeArguments": null,
                "start": 2045,
                "end": 2046
              },
              "start": 2043,
              "end": 2046
            },
            "start": 2034,
            "end": 2046
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
              "start": 2052,
              "end": 2075
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
                    "start": 2079,
                    "end": 2080
                  },
                  "typeArguments": null,
                  "start": 2079,
                  "end": 2080
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
                        "start": 2084,
                        "end": 2088
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
                              "start": 2089,
                              "end": 2097
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
                                    "start": 2098,
                                    "end": 2099
                                  },
                                  "typeArguments": null,
                                  "start": 2098,
                                  "end": 2099
                                }
                              ],
                              "start": 2097,
                              "end": 2100
                            },
                            "start": 2089,
                            "end": 2100
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
                                "start": 2108,
                                "end": 2114
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
                                      "start": 2115,
                                      "end": 2129
                                    },
                                    "typeArguments": null,
                                    "start": 2115,
                                    "end": 2129
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "GetProps",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2131,
                                      "end": 2139
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
                                            "start": 2140,
                                            "end": 2141
                                          },
                                          "typeArguments": null,
                                          "start": 2140,
                                          "end": 2141
                                        }
                                      ],
                                      "start": 2139,
                                      "end": 2142
                                    },
                                    "start": 2131,
                                    "end": 2142
                                  }
                                ],
                                "start": 2114,
                                "end": 2143
                              },
                              "start": 2108,
                              "end": 2143
                            },
                            "start": 2102,
                            "end": 2143
                          }
                        ],
                        "start": 2088,
                        "end": 2144
                      },
                      "start": 2084,
                      "end": 2144
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TNeedsProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2147,
                        "end": 2158
                      },
                      "typeArguments": null,
                      "start": 2147,
                      "end": 2158
                    }
                  ],
                  "start": 2084,
                  "end": 2158
                }
              ],
              "start": 2075,
              "end": 2160
            },
            "start": 2052,
            "end": 2160
          },
          "start": 2049,
          "end": 2160
        },
        "start": 1962,
        "end": 2160
      },
      "declare": false,
      "start": 1890,
      "end": 2161
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
            "name": "connect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "no_state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2191,
                            "end": 2199
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 2202,
                            "end": 2204
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2191,
                          "end": 2204
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TDispatchProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2206,
                            "end": 2220
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 2223,
                            "end": 2225
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2206,
                          "end": 2225
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TOwnProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2227,
                            "end": 2236
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 2239,
                            "end": 2241
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2227,
                          "end": 2241
                        }
                      ],
                      "start": 2190,
                      "end": 2242
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapStateToProps",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNullKeyword",
                                "start": 2265,
                                "end": 2269
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 2272,
                                "end": 2281
                              }
                            ],
                            "start": 2265,
                            "end": 2281
                          },
                          "start": 2263,
                          "end": 2281
                        },
                        "start": 2248,
                        "end": 2281
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapDispatchToProps",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TDispatchProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2307,
                              "end": 2321
                            },
                            "typeArguments": null,
                            "start": 2307,
                            "end": 2321
                          },
                          "start": 2305,
                          "end": 2321
                        },
                        "start": 2287,
                        "end": 2321
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InferableComponentEnhancerWithProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2327,
                          "end": 2362
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ResolveThunks",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2368,
                                "end": 2381
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TDispatchProps",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2382,
                                      "end": 2396
                                    },
                                    "typeArguments": null,
                                    "start": 2382,
                                    "end": 2396
                                  }
                                ],
                                "start": 2381,
                                "end": 2397
                              },
                              "start": 2368,
                              "end": 2397
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TOwnProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2403,
                                "end": 2412
                              },
                              "typeArguments": null,
                              "start": 2403,
                              "end": 2412
                            }
                          ],
                          "start": 2362,
                          "end": 2416
                        },
                        "start": 2327,
                        "end": 2416
                      },
                      "start": 2325,
                      "end": 2416
                    },
                    "start": 2190,
                    "end": 2417
                  }
                ],
                "start": 2186,
                "end": 2419
              },
              "start": 2184,
              "end": 2419
            },
            "start": 2177,
            "end": 2419
          },
          "init": null,
          "definite": false,
          "start": 2177,
          "end": 2419
        }
      ],
      "declare": true,
      "start": 2163,
      "end": 2420
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferThunkActionCreatorType",
        "optional": false,
        "typeAnnotation": null,
        "start": 2427,
        "end": 2454
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActionCreator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2458,
              "end": 2472
            },
            "constraint": {
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
                    "start": 2485,
                    "end": 2489
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2491,
                        "end": 2494
                      },
                      "start": 2491,
                      "end": 2496
                    },
                    "start": 2489,
                    "end": 2496
                  },
                  "value": null,
                  "start": 2482,
                  "end": 2496
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2501,
                  "end": 2504
                },
                "start": 2498,
                "end": 2504
              },
              "start": 2481,
              "end": 2504
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2458,
            "end": 2504
          }
        ],
        "start": 2454,
        "end": 2506
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2509,
            "end": 2523
          },
          "typeArguments": null,
          "start": 2509,
          "end": 2523
        },
        "extendsType": {
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
                "start": 2539,
                "end": 2543
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TParams",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2551,
                      "end": 2558
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2551,
                    "end": 2558
                  },
                  "start": 2545,
                  "end": 2558
                },
                "start": 2543,
                "end": 2558
              },
              "value": null,
              "start": 2536,
              "end": 2558
            }
          ],
          "returnType": {
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
                    "start": 2568,
                    "end": 2572
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2574,
                        "end": 2577
                      },
                      "start": 2574,
                      "end": 2579
                    },
                    "start": 2572,
                    "end": 2579
                  },
                  "value": null,
                  "start": 2565,
                  "end": 2579
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TReturn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2590,
                      "end": 2597
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2590,
                    "end": 2597
                  },
                  "start": 2584,
                  "end": 2597
                },
                "start": 2581,
                "end": 2597
              },
              "start": 2564,
              "end": 2597
            },
            "start": 2561,
            "end": 2597
          },
          "start": 2532,
          "end": 2597
        },
        "trueType": {
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
                "start": 2606,
                "end": 2610
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TParams",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2612,
                    "end": 2619
                  },
                  "typeArguments": null,
                  "start": 2612,
                  "end": 2619
                },
                "start": 2610,
                "end": 2619
              },
              "value": null,
              "start": 2603,
              "end": 2619
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 2624,
                "end": 2631
              },
              "typeArguments": null,
              "start": 2624,
              "end": 2631
            },
            "start": 2621,
            "end": 2631
          },
          "start": 2602,
          "end": 2631
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2636,
            "end": 2650
          },
          "typeArguments": null,
          "start": 2636,
          "end": 2650
        },
        "start": 2509,
        "end": 2650
      },
      "declare": false,
      "start": 2422,
      "end": 2651
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandleThunkActionCreator",
        "optional": false,
        "typeAnnotation": null,
        "start": 2658,
        "end": 2682
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActionCreator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2683,
              "end": 2697
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2683,
            "end": 2697
          }
        ],
        "start": 2682,
        "end": 2698
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2701,
            "end": 2715
          },
          "typeArguments": null,
          "start": 2701,
          "end": 2715
        },
        "extendsType": {
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
                "start": 2731,
                "end": 2735
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2737,
                    "end": 2740
                  },
                  "start": 2737,
                  "end": 2742
                },
                "start": 2735,
                "end": 2742
              },
              "value": null,
              "start": 2728,
              "end": 2742
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2748,
              "end": 2751
            },
            "start": 2745,
            "end": 2751
          },
          "start": 2724,
          "end": 2751
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferThunkActionCreatorType",
            "optional": false,
            "typeAnnotation": null,
            "start": 2756,
            "end": 2783
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActionCreator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2784,
                  "end": 2798
                },
                "typeArguments": null,
                "start": 2784,
                "end": 2798
              }
            ],
            "start": 2783,
            "end": 2799
          },
          "start": 2756,
          "end": 2799
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2804,
            "end": 2818
          },
          "typeArguments": null,
          "start": 2804,
          "end": 2818
        },
        "start": 2701,
        "end": 2818
      },
      "declare": false,
      "start": 2653,
      "end": 2819
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResolveThunks",
        "optional": false,
        "typeAnnotation": null,
        "start": 2826,
        "end": 2839
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDispatchProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 2840,
              "end": 2854
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2840,
            "end": 2854
          }
        ],
        "start": 2839,
        "end": 2855
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TDispatchProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 2858,
            "end": 2872
          },
          "typeArguments": null,
          "start": 2858,
          "end": 2872
        },
        "extendsType": {
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
                      "start": 2891,
                      "end": 2897
                    },
                    "start": 2889,
                    "end": 2897
                  },
                  "start": 2886,
                  "end": 2897
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2900,
                  "end": 2903
                },
                "start": 2898,
                "end": 2903
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 2885,
              "end": 2904
            }
          ],
          "start": 2881,
          "end": 2906
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2914,
            "end": 2915
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDispatchProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 2925,
                "end": 2939
              },
              "typeArguments": null,
              "start": 2925,
              "end": 2939
            },
            "start": 2919,
            "end": 2939
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandleThunkActionCreator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2942,
              "end": 2966
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
                      "name": "TDispatchProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2967,
                      "end": 2981
                    },
                    "typeArguments": null,
                    "start": 2967,
                    "end": 2981
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2982,
                      "end": 2983
                    },
                    "typeArguments": null,
                    "start": 2982,
                    "end": 2983
                  },
                  "start": 2967,
                  "end": 2984
                }
              ],
              "start": 2966,
              "end": 2985
            },
            "start": 2942,
            "end": 2985
          },
          "optional": false,
          "readonly": null,
          "start": 2911,
          "end": 2987
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TDispatchProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 2992,
            "end": 3006
          },
          "typeArguments": null,
          "start": 2992,
          "end": 3006
        },
        "start": 2858,
        "end": 3006
      },
      "declare": false,
      "start": 2821,
      "end": 3007
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dispatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 3019,
        "end": 3027
      },
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
              "start": 3028,
              "end": 3029
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 3038,
                "end": 3044
              },
              "typeArguments": null,
              "start": 3038,
              "end": 3044
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3047,
                "end": 3056
              },
              "typeArguments": null,
              "start": 3047,
              "end": 3056
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3028,
            "end": 3056
          }
        ],
        "start": 3027,
        "end": 3057
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 3063,
                    "end": 3064
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3073,
                      "end": 3074
                    },
                    "typeArguments": null,
                    "start": 3073,
                    "end": 3074
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3063,
                  "end": 3074
                }
              ],
              "start": 3062,
              "end": 3075
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
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
                      "start": 3084,
                      "end": 3085
                    },
                    "typeArguments": null,
                    "start": 3084,
                    "end": 3085
                  },
                  "start": 3082,
                  "end": 3085
                },
                "start": 3076,
                "end": 3085
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
                  "start": 3088,
                  "end": 3089
                },
                "typeArguments": null,
                "start": 3088,
                "end": 3089
              },
              "start": 3086,
              "end": 3089
            },
            "start": 3062,
            "end": 3090
          }
        ],
        "start": 3058,
        "end": 3092
      },
      "declare": false,
      "start": 3009,
      "end": 3092
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 3103,
        "end": 3109
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
              "start": 3110,
              "end": 3111
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 3114,
              "end": 3117
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3110,
            "end": 3117
          }
        ],
        "start": 3109,
        "end": 3118
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 3123,
              "end": 3127
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
                  "start": 3129,
                  "end": 3130
                },
                "typeArguments": null,
                "start": 3129,
                "end": 3130
              },
              "start": 3127,
              "end": 3130
            },
            "accessibility": null,
            "static": false,
            "start": 3123,
            "end": 3131
          }
        ],
        "start": 3119,
        "end": 3133
      },
      "declare": false,
      "start": 3093,
      "end": 3133
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 3144,
        "end": 3153
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Action",
            "optional": false,
            "typeAnnotation": null,
            "start": 3162,
            "end": 3168
          },
          "typeArguments": null,
          "start": 3162,
          "end": 3168
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "extraProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3186,
                    "end": 3192
                  },
                  "start": 3184,
                  "end": 3192
                },
                "start": 3174,
                "end": 3192
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3195,
                "end": 3198
              },
              "start": 3193,
              "end": 3198
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3173,
            "end": 3199
          }
        ],
        "start": 3169,
        "end": 3201
      },
      "declare": false,
      "start": 3134,
      "end": 3201
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
            "name": "simpleAction",
            "optional": false,
            "typeAnnotation": null,
            "start": 3209,
            "end": 3221
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 3234,
                    "end": 3241
                  },
                  "start": 3232,
                  "end": 3241
                },
                "start": 3225,
                "end": 3241
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3251,
                    "end": 3255
                  },
                  "value": {
                    "type": "Literal",
                    "value": "SIMPLE_ACTION",
                    "raw": "\"SIMPLE_ACTION\"",
                    "start": 3257,
                    "end": 3272
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3251,
                  "end": 3272
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3276,
                    "end": 3283
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3276,
                    "end": 3283
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3276,
                  "end": 3283
                }
              ],
              "start": 3247,
              "end": 3285
            },
            "id": null,
            "generator": false,
            "start": 3224,
            "end": 3286
          },
          "definite": false,
          "start": 3209,
          "end": 3286
        }
      ],
      "declare": false,
      "start": 3203,
      "end": 3287
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
            "name": "thunkAction",
            "optional": false,
            "typeAnnotation": null,
            "start": 3294,
            "end": 3305
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3317,
                    "end": 3323
                  },
                  "start": 3315,
                  "end": 3323
                },
                "start": 3309,
                "end": 3323
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3333,
                    "end": 3339
                  },
                  "start": 3331,
                  "end": 3339
                },
                "start": 3325,
                "end": 3339
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dispatch",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dispatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3364,
                        "end": 3372
                      },
                      "typeArguments": null,
                      "start": 3364,
                      "end": 3372
                    },
                    "start": 3362,
                    "end": 3372
                  },
                  "start": 3354,
                  "end": 3372
                },
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 3378,
                        "end": 3381
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3378,
                        "end": 3381
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 3378,
                      "end": 3381
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OwnProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3385,
                        "end": 3393
                      },
                      "typeArguments": null,
                      "start": 3385,
                      "end": 3393
                    },
                    "start": 3383,
                    "end": 3393
                  },
                  "start": 3376,
                  "end": 3393
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3410,
                      "end": 3413
                    },
                    "start": 3403,
                    "end": 3414
                  }
                ],
                "start": 3399,
                "end": 3416
              },
              "id": null,
              "generator": false,
              "start": 3344,
              "end": 3416
            },
            "id": null,
            "generator": false,
            "start": 3308,
            "end": 3416
          },
          "definite": false,
          "start": 3294,
          "end": 3416
        }
      ],
      "declare": false,
      "start": 3288,
      "end": 3417
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OwnProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3428,
        "end": 3436
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3441,
              "end": 3444
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3446,
                "end": 3452
              },
              "start": 3444,
              "end": 3452
            },
            "accessibility": null,
            "static": false,
            "start": 3441,
            "end": 3453
          }
        ],
        "start": 3437,
        "end": 3455
      },
      "declare": false,
      "start": 3418,
      "end": 3455
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3466,
        "end": 3484
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "OwnProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 3493,
            "end": 3501
          },
          "typeArguments": null,
          "start": 3493,
          "end": 3501
        }
      ],
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
              "name": "simpleAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 3506,
              "end": 3518
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3527,
                  "end": 3539
                },
                "typeArguments": null,
                "start": 3520,
                "end": 3539
              },
              "start": 3518,
              "end": 3539
            },
            "accessibility": null,
            "static": false,
            "start": 3506,
            "end": 3540
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thunkAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 3543,
              "end": 3554
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3563,
                    "end": 3569
                  },
                  "start": 3561,
                  "end": 3569
                },
                "start": 3555,
                "end": 3569
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3579,
                    "end": 3585
                  },
                  "start": 3577,
                  "end": 3585
                },
                "start": 3571,
                "end": 3585
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3588,
                  "end": 3595
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3596,
                      "end": 3602
                    }
                  ],
                  "start": 3595,
                  "end": 3603
                },
                "start": 3588,
                "end": 3603
              },
              "start": 3586,
              "end": 3603
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3543,
            "end": 3604
          }
        ],
        "start": 3502,
        "end": 3606
      },
      "declare": false,
      "start": 3456,
      "end": 3606
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 3613,
        "end": 3626
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 3635,
        "end": 3644
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3645,
              "end": 3663
            },
            "typeArguments": null,
            "start": 3645,
            "end": 3663
          }
        ],
        "start": 3644,
        "end": 3664
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 3665,
        "end": 3667
      },
      "abstract": false,
      "declare": false,
      "start": 3607,
      "end": 3667
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
            "name": "mapDispatchToProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 3674,
            "end": 3692
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
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3697,
                  "end": 3709
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3697,
                  "end": 3709
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3697,
                "end": 3709
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunkAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3711,
                  "end": 3722
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunkAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3711,
                  "end": 3722
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3711,
                "end": 3722
              }
            ],
            "start": 3695,
            "end": 3724
          },
          "definite": false,
          "start": 3674,
          "end": 3724
        }
      ],
      "declare": false,
      "start": 3668,
      "end": 3725
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 3732,
        "end": 3733
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HandleThunkActionCreator",
          "optional": false,
          "typeAnnotation": null,
          "start": 3736,
          "end": 3760
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "simpleAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3768,
                "end": 3780
              },
              "typeArguments": null,
              "start": 3761,
              "end": 3780
            }
          ],
          "start": 3760,
          "end": 3781
        },
        "start": 3736,
        "end": 3781
      },
      "declare": false,
      "start": 3727,
      "end": 3782
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
            "name": "Test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3790,
            "end": 3795
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "connect",
                "optional": false,
                "typeAnnotation": null,
                "start": 3798,
                "end": 3805
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3809,
                  "end": 3813
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapDispatchToProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3817,
                  "end": 3835
                }
              ],
              "optional": false,
              "start": 3798,
              "end": 3837
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "TestComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 3838,
                "end": 3851
              }
            ],
            "optional": false,
            "start": 3798,
            "end": 3852
          },
          "definite": false,
          "start": 3790,
          "end": 3852
        }
      ],
      "declare": false,
      "start": 3784,
      "end": 3853
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3855,
      "end": 3865
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3865
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
    "start": 31,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 66,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
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
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 106,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 115,
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
    "value": "Readonly",
    "start": 122,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 136,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 147,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 167,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 177,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 209,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 235,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 251,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 263,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 287,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 302,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "displayName",
    "start": 316,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 340,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 350,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 381,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 411,
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
    "type": "Identifier",
    "value": "any",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 430,
    "end": 431
  },
  {
    "type": "Null",
    "value": "null",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 440,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 452,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 476,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 491,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "displayName",
    "start": 505,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 530,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 538,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "nominalTypeHack",
    "start": 544,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 561,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 576,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 586,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 616,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 628,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "componentName",
    "start": 650,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 677,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 687,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "propFullName",
    "start": 699,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 725,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 731,
    "end": 732
  },
  {
    "type": "Null",
    "value": "null",
    "start": 733,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "nominalTypeHack",
    "start": 742,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 766,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 771,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 801,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 804,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 813,
    "end": 814
  },
  {
    "type": "Null",
    "value": "null",
    "start": 815,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 820,
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
    "value": "[",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 839,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 854,
    "end": 855
  },
  {
    "type": "Null",
    "value": "null",
    "start": 856,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 863,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 880,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 890,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 909,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 924,
    "end": 925
  },
  {
    "type": "Null",
    "value": "null",
    "start": 926,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 933,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 950,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 969,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 974,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 998,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 1018,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1041,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 1046,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1056,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1073,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1095,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1110,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1125,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1159,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1162,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1175,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1181,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1200,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1206,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1235,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1252,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1260,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1291,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1322,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1369,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "GetProps",
    "start": 1374,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1390,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1398,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1412,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1427,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1435,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "ConnectedComponentClass",
    "start": 1440,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1466,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1474,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1488,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 1499,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "WrappedComponent",
    "start": 1527,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1552,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "Matching",
    "start": 1557,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1566,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1581,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1613,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1616,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1622,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1648,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1656,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1662,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1682,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1699,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1707,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1740,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 1773,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 1796,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1825,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1830,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1840,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1848,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 1859,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 1867,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1875,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1890,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "InferableComponentEnhancerWithProps",
    "start": 1895,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "TInjectedProps",
    "start": 1931,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "TNeedsProps",
    "start": 1947,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1968,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1976,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "Matching",
    "start": 1990,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "TInjectedProps",
    "start": 1999,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "GetProps",
    "start": 2015,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 2034,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2049,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "ConnectedComponentClass",
    "start": 2052,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 2084,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "GetProps",
    "start": 2089,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2102,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 2108,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "TInjectedProps",
    "start": 2115,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "GetProps",
    "start": 2131,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "TNeedsProps",
    "start": 2147,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2163,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2171,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "connect",
    "start": 2177,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "no_state",
    "start": 2191,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 2206,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "TOwnProps",
    "start": 2227,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "mapStateToProps",
    "start": 2248,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2265,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2272,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "mapDispatchToProps",
    "start": 2287,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 2307,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "InferableComponentEnhancerWithProps",
    "start": 2327,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "ResolveThunks",
    "start": 2368,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 2382,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "TOwnProps",
    "start": 2403,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2422,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "InferThunkActionCreatorType",
    "start": 2427,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "TActionCreator",
    "start": 2458,
    "end": 2472
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2473,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2482,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2485,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2491,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2498,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2501,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "TActionCreator",
    "start": 2509,
    "end": 2523
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2524,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2536,
    "end": 2539
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2539,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2545,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 2551,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2561,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2565,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2568,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2574,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2581,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2584,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "TReturn",
    "start": 2590,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2603,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2606,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "TParams",
    "start": 2612,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2621,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "TReturn",
    "start": 2624,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "TActionCreator",
    "start": 2636,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2653,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "HandleThunkActionCreator",
    "start": 2658,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "TActionCreator",
    "start": 2683,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "TActionCreator",
    "start": 2701,
    "end": 2715
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2716,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2728,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2731,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2737,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2745,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2748,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "InferThunkActionCreatorType",
    "start": 2756,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "TActionCreator",
    "start": 2784,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "TActionCreator",
    "start": 2804,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2821,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "ResolveThunks",
    "start": 2826,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 2840,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 2858,
    "end": 2872
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2873,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2886,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2891,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2900,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2916,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2919,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 2925,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "HandleThunkActionCreator",
    "start": 2942,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 2967,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 2992,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3009,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "Dispatch",
    "start": 3019,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3030,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 3038,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "AnyAction",
    "start": 3047,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3065,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 3076,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3093,
    "end": 3102
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 3103,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3114,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3123,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3134,
    "end": 3143
  },
  {
    "type": "Identifier",
    "value": "AnyAction",
    "start": 3144,
    "end": 3153
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3154,
    "end": 3161
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 3162,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "extraProps",
    "start": 3174,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3186,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3195,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3203,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "simpleAction",
    "start": 3209,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 3225,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3234,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3243,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3251,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "String",
    "value": "\"SIMPLE_ACTION\"",
    "start": 3257,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 3276,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3288,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "thunkAction",
    "start": 3294,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 3309,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3317,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "param2",
    "start": 3325,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3333,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3341,
    "end": 3343
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3344,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "dispatch",
    "start": 3354,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "Dispatch",
    "start": 3364,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3378,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "OwnProps",
    "start": 3385,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3396,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3403,
    "end": 3409
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3410,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3418,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "OwnProps",
    "start": 3428,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3441,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3446,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3456,
    "end": 3465
  },
  {
    "type": "Identifier",
    "value": "TestComponentProps",
    "start": 3466,
    "end": 3484
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3485,
    "end": 3492
  },
  {
    "type": "Identifier",
    "value": "OwnProps",
    "start": 3493,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Identifier",
    "value": "simpleAction",
    "start": 3506,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3520,
    "end": 3526
  },
  {
    "type": "Identifier",
    "value": "simpleAction",
    "start": 3527,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "thunkAction",
    "start": 3543,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 3555,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3563,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "param2",
    "start": 3571,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3579,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3588,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3596,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3607,
    "end": 3612
  },
  {
    "type": "Identifier",
    "value": "TestComponent",
    "start": 3613,
    "end": 3626
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3627,
    "end": 3634
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 3635,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Identifier",
    "value": "TestComponentProps",
    "start": 3645,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3668,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "mapDispatchToProps",
    "start": 3674,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "simpleAction",
    "start": 3697,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "thunkAction",
    "start": 3711,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3727,
    "end": 3731
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "HandleThunkActionCreator",
    "start": 3736,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3761,
    "end": 3767
  },
  {
    "type": "Identifier",
    "value": "simpleAction",
    "start": 3768,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3784,
    "end": 3789
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 3790,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "connect",
    "start": 3798,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3809,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Identifier",
    "value": "mapDispatchToProps",
    "start": 3817,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3837,
    "end": 3838
  },
  {
    "type": "Identifier",
    "value": "TestComponent",
    "start": 3838,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3855,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3864,
    "end": 3865
  }
]
```

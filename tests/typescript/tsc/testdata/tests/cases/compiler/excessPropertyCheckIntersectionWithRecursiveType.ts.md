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
        "name": "Request",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 34
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
              "name": "l1",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 41
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
                      "name": "l2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 47
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 49,
                        "end": 56
                      },
                      "start": 47,
                      "end": 56
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 45,
                    "end": 56
                  }
                ],
                "start": 43,
                "end": 58
              },
              "start": 41,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 39,
            "end": 58
          }
        ],
        "start": 37,
        "end": 60
      },
      "declare": false,
      "start": 22,
      "end": 61
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 74
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
              "start": 75,
              "end": 76
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 76
          }
        ],
        "start": 74,
        "end": 77
      },
      "typeAnnotation": {
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
              "name": "ex",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 84
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 88
                    },
                    "typeArguments": null,
                    "start": 87,
                    "end": 88
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 91,
                    "end": 95
                  }
                ],
                "start": 87,
                "end": 95
              },
              "start": 85,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 95
          }
        ],
        "start": 80,
        "end": 97
      },
      "declare": false,
      "start": 62,
      "end": 98
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema1",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 112
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
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "typeArguments": null,
              "start": 119,
              "end": 120
            },
            "extendsType": {
              "type": "TSBooleanKeyword",
              "start": 129,
              "end": 136
            },
            "trueType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 145
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 147,
                        "end": 156
                      },
                      "start": 147,
                      "end": 156
                    },
                    "start": 145,
                    "end": 156
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 141,
                  "end": 157
                }
              ],
              "start": 139,
              "end": 159
            },
            "falseType": {
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 169
                  },
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
                        "start": 174,
                        "end": 175
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
                            "start": 185,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 185,
                          "end": 186
                        },
                        "start": 179,
                        "end": 186
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 189,
                          "end": 196
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
                                  "start": 197,
                                  "end": 198
                                },
                                "typeArguments": null,
                                "start": 197,
                                "end": 198
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 199,
                                  "end": 200
                                },
                                "typeArguments": null,
                                "start": 199,
                                "end": 200
                              },
                              "start": 197,
                              "end": 201
                            }
                          ],
                          "start": 196,
                          "end": 202
                        },
                        "start": 189,
                        "end": 202
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 171,
                      "end": 204
                    },
                    "start": 169,
                    "end": 204
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 164,
                  "end": 205
                }
              ],
              "start": 162,
              "end": 207
            },
            "start": 119,
            "end": 207
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Example",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 218
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
                    "start": 219,
                    "end": 220
                  },
                  "typeArguments": null,
                  "start": 219,
                  "end": 220
                }
              ],
              "start": 218,
              "end": 221
            },
            "start": 211,
            "end": 221
          }
        ],
        "start": 118,
        "end": 221
      },
      "declare": false,
      "start": 100,
      "end": 222
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
              "name": "schemaObj1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 256
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 264
                        },
                        "typeArguments": null,
                        "start": 257,
                        "end": 264
                      }
                    ],
                    "start": 256,
                    "end": 265
                  },
                  "start": 249,
                  "end": 265
                },
                "start": 247,
                "end": 265
              },
              "start": 237,
              "end": 265
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 277
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
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 287
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
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 297,
                                "end": 302
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
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 314,
                                      "end": 316
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
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 320,
                                            "end": 324
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": "boolean",
                                            "raw": "'boolean'",
                                            "start": 326,
                                            "end": 335
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 320,
                                          "end": 335
                                        }
                                      ],
                                      "start": 318,
                                      "end": 337
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 314,
                                    "end": 337
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 347,
                                      "end": 354
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 356,
                                      "end": 361
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 347,
                                    "end": 361
                                  }
                                ],
                                "start": 304,
                                "end": 370
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 297,
                              "end": 370
                            }
                          ],
                          "start": 289,
                          "end": 377
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 285,
                        "end": 377
                      }
                    ],
                    "start": 279,
                    "end": 382
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 272,
                  "end": 382
                }
              ],
              "start": 268,
              "end": 385
            },
            "definite": false,
            "start": 237,
            "end": 385
          }
        ],
        "declare": false,
        "start": 231,
        "end": 385
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 224,
      "end": 385
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema2",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 399
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
              "start": 400,
              "end": 401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 401
          }
        ],
        "start": 399,
        "end": 402
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 407
          },
          "typeArguments": null,
          "start": 406,
          "end": 407
        },
        "extendsType": {
          "type": "TSBooleanKeyword",
          "start": 416,
          "end": 423
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 432
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 434,
                        "end": 443
                      },
                      "start": 434,
                      "end": 443
                    },
                    "start": 432,
                    "end": 443
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 428,
                  "end": 444
                }
              ],
              "start": 426,
              "end": 446
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 456
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
                      "start": 457,
                      "end": 458
                    },
                    "typeArguments": null,
                    "start": 457,
                    "end": 458
                  }
                ],
                "start": 456,
                "end": 459
              },
              "start": 449,
              "end": 459
            }
          ],
          "start": 426,
          "end": 459
        },
        "falseType": {
          "type": "TSIntersectionType",
          "types": [
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 469
                  },
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
                        "start": 474,
                        "end": 475
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
                            "start": 485,
                            "end": 486
                          },
                          "typeArguments": null,
                          "start": 485,
                          "end": 486
                        },
                        "start": 479,
                        "end": 486
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 489,
                          "end": 496
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
                                  "start": 497,
                                  "end": 498
                                },
                                "typeArguments": null,
                                "start": 497,
                                "end": 498
                              },
                              "indexType": {
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
                              },
                              "start": 497,
                              "end": 501
                            }
                          ],
                          "start": 496,
                          "end": 502
                        },
                        "start": 489,
                        "end": 502
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 471,
                      "end": 504
                    },
                    "start": 469,
                    "end": 504
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 464,
                  "end": 505
                }
              ],
              "start": 462,
              "end": 507
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 517
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
                      "start": 518,
                      "end": 519
                    },
                    "typeArguments": null,
                    "start": 518,
                    "end": 519
                  }
                ],
                "start": 517,
                "end": 520
              },
              "start": 510,
              "end": 520
            }
          ],
          "start": 462,
          "end": 520
        },
        "start": 406,
        "end": 520
      },
      "declare": false,
      "start": 387,
      "end": 522
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
              "name": "schemaObj2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 556
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 564
                        },
                        "typeArguments": null,
                        "start": 557,
                        "end": 564
                      }
                    ],
                    "start": 556,
                    "end": 565
                  },
                  "start": 549,
                  "end": 565
                },
                "start": 547,
                "end": 565
              },
              "start": 537,
              "end": 565
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 577
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
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 585,
                          "end": 587
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
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 597,
                                "end": 602
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
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 614,
                                      "end": 616
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
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 620,
                                            "end": 624
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": "boolean",
                                            "raw": "'boolean'",
                                            "start": 626,
                                            "end": 635
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 620,
                                          "end": 635
                                        }
                                      ],
                                      "start": 618,
                                      "end": 637
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 614,
                                    "end": 637
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 647,
                                      "end": 654
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 656,
                                      "end": 661
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 647,
                                    "end": 661
                                  }
                                ],
                                "start": 604,
                                "end": 670
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 597,
                              "end": 670
                            }
                          ],
                          "start": 589,
                          "end": 677
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 585,
                        "end": 677
                      }
                    ],
                    "start": 579,
                    "end": 682
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 572,
                  "end": 682
                }
              ],
              "start": 568,
              "end": 685
            },
            "definite": false,
            "start": 537,
            "end": 685
          }
        ],
        "declare": false,
        "start": 531,
        "end": 685
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 524,
      "end": 685
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema3",
        "optional": false,
        "typeAnnotation": null,
        "start": 692,
        "end": 699
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
              "start": 700,
              "end": 701
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 700,
            "end": 701
          }
        ],
        "start": 699,
        "end": 702
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Example",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 712
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
                    "start": 713,
                    "end": 714
                  },
                  "typeArguments": null,
                  "start": 713,
                  "end": 714
                }
              ],
              "start": 712,
              "end": 715
            },
            "start": 705,
            "end": 715
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 720
              },
              "typeArguments": null,
              "start": 719,
              "end": 720
            },
            "extendsType": {
              "type": "TSBooleanKeyword",
              "start": 729,
              "end": 736
            },
            "trueType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 741,
                    "end": 745
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 747,
                        "end": 756
                      },
                      "start": 747,
                      "end": 756
                    },
                    "start": 745,
                    "end": 756
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 741,
                  "end": 757
                }
              ],
              "start": 739,
              "end": 759
            },
            "falseType": {
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 769
                  },
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
                        "start": 774,
                        "end": 775
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
                            "start": 785,
                            "end": 786
                          },
                          "typeArguments": null,
                          "start": 785,
                          "end": 786
                        },
                        "start": 779,
                        "end": 786
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 789,
                          "end": 796
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
                                  "start": 797,
                                  "end": 798
                                },
                                "typeArguments": null,
                                "start": 797,
                                "end": 798
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 799,
                                  "end": 800
                                },
                                "typeArguments": null,
                                "start": 799,
                                "end": 800
                              },
                              "start": 797,
                              "end": 801
                            }
                          ],
                          "start": 796,
                          "end": 802
                        },
                        "start": 789,
                        "end": 802
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 771,
                      "end": 804
                    },
                    "start": 769,
                    "end": 804
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 764,
                  "end": 805
                }
              ],
              "start": 762,
              "end": 807
            },
            "start": 719,
            "end": 807
          }
        ],
        "start": 705,
        "end": 808
      },
      "declare": false,
      "start": 687,
      "end": 809
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
              "name": "schemaObj3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 836,
                    "end": 843
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 844,
                          "end": 851
                        },
                        "typeArguments": null,
                        "start": 844,
                        "end": 851
                      }
                    ],
                    "start": 843,
                    "end": 852
                  },
                  "start": 836,
                  "end": 852
                },
                "start": 834,
                "end": 852
              },
              "start": 824,
              "end": 852
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 859,
                    "end": 864
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
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 874
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
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 884,
                                "end": 889
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
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 901,
                                      "end": 903
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
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 907,
                                            "end": 911
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": "boolean",
                                            "raw": "'boolean'",
                                            "start": 913,
                                            "end": 922
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 907,
                                          "end": 922
                                        }
                                      ],
                                      "start": 905,
                                      "end": 924
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 901,
                                    "end": 924
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 934,
                                      "end": 941
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 943,
                                      "end": 948
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 934,
                                    "end": 948
                                  }
                                ],
                                "start": 891,
                                "end": 957
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 884,
                              "end": 957
                            }
                          ],
                          "start": 876,
                          "end": 964
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 872,
                        "end": 964
                      }
                    ],
                    "start": 866,
                    "end": 969
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 859,
                  "end": 969
                }
              ],
              "start": 855,
              "end": 972
            },
            "definite": false,
            "start": 824,
            "end": 972
          }
        ],
        "declare": false,
        "start": 818,
        "end": 972
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 811,
      "end": 972
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema4",
        "optional": false,
        "typeAnnotation": null,
        "start": 979,
        "end": 986
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
              "start": 987,
              "end": 988
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 987,
            "end": 988
          }
        ],
        "start": 986,
        "end": 989
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 993,
            "end": 994
          },
          "typeArguments": null,
          "start": 993,
          "end": 994
        },
        "extendsType": {
          "type": "TSBooleanKeyword",
          "start": 1003,
          "end": 1010
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1015,
                    "end": 1019
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 1021,
                        "end": 1030
                      },
                      "start": 1021,
                      "end": 1030
                    },
                    "start": 1019,
                    "end": 1030
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1015,
                  "end": 1031
                }
              ],
              "start": 1013,
              "end": 1033
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 1036,
                "end": 1043
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
                      "start": 1044,
                      "end": 1045
                    },
                    "typeArguments": null,
                    "start": 1044,
                    "end": 1045
                  }
                ],
                "start": 1043,
                "end": 1046
              },
              "start": 1036,
              "end": 1046
            }
          ],
          "start": 1013,
          "end": 1046
        },
        "falseType": {
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
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1056
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
                        "name": "Example",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1058,
                        "end": 1065
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
                              "start": 1066,
                              "end": 1067
                            },
                            "typeArguments": null,
                            "start": 1066,
                            "end": 1067
                          }
                        ],
                        "start": 1065,
                        "end": 1068
                      },
                      "start": 1058,
                      "end": 1068
                    },
                    {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1074,
                        "end": 1075
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
                            "start": 1085,
                            "end": 1086
                          },
                          "typeArguments": null,
                          "start": 1085,
                          "end": 1086
                        },
                        "start": 1079,
                        "end": 1086
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1089,
                          "end": 1096
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
                                  "start": 1097,
                                  "end": 1098
                                },
                                "typeArguments": null,
                                "start": 1097,
                                "end": 1098
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1099,
                                  "end": 1100
                                },
                                "typeArguments": null,
                                "start": 1099,
                                "end": 1100
                              },
                              "start": 1097,
                              "end": 1101
                            }
                          ],
                          "start": 1096,
                          "end": 1102
                        },
                        "start": 1089,
                        "end": 1102
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1071,
                      "end": 1104
                    }
                  ],
                  "start": 1058,
                  "end": 1104
                },
                "start": 1056,
                "end": 1104
              },
              "accessibility": null,
              "static": false,
              "start": 1051,
              "end": 1105
            }
          ],
          "start": 1049,
          "end": 1107
        },
        "start": 993,
        "end": 1107
      },
      "declare": false,
      "start": 974,
      "end": 1109
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
              "name": "schemaObj4",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1143
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1144,
                          "end": 1151
                        },
                        "typeArguments": null,
                        "start": 1144,
                        "end": 1151
                      }
                    ],
                    "start": 1143,
                    "end": 1152
                  },
                  "start": 1136,
                  "end": 1152
                },
                "start": 1134,
                "end": 1152
              },
              "start": 1124,
              "end": 1152
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1159,
                    "end": 1164
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
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1172,
                          "end": 1174
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
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1184,
                                "end": 1189
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
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1201,
                                      "end": 1203
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
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1207,
                                            "end": 1211
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": "boolean",
                                            "raw": "'boolean'",
                                            "start": 1213,
                                            "end": 1222
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1207,
                                          "end": 1222
                                        }
                                      ],
                                      "start": 1205,
                                      "end": 1224
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1201,
                                    "end": 1224
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1234,
                                      "end": 1241
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 1243,
                                      "end": 1248
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1234,
                                    "end": 1248
                                  }
                                ],
                                "start": 1191,
                                "end": 1257
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1184,
                              "end": 1257
                            }
                          ],
                          "start": 1176,
                          "end": 1264
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1172,
                        "end": 1264
                      }
                    ],
                    "start": 1166,
                    "end": 1269
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1159,
                  "end": 1269
                }
              ],
              "start": 1155,
              "end": 1272
            },
            "definite": false,
            "start": 1124,
            "end": 1272
          }
        ],
        "declare": false,
        "start": 1118,
        "end": 1272
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1111,
      "end": 1272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Length",
        "optional": false,
        "typeAnnotation": null,
        "start": 1301,
        "end": 1307
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
              "start": 1308,
              "end": 1309
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1318,
                "end": 1321
              },
              "start": 1318,
              "end": 1323
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1308,
            "end": 1323
          }
        ],
        "start": 1307,
        "end": 1324
      },
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
            "start": 1327,
            "end": 1328
          },
          "typeArguments": null,
          "start": 1327,
          "end": 1328
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 1329,
            "end": 1337
          },
          "start": 1329,
          "end": 1337
        },
        "start": 1327,
        "end": 1338
      },
      "declare": false,
      "start": 1296,
      "end": 1339
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prepend",
        "optional": false,
        "typeAnnotation": null,
        "start": 1345,
        "end": 1352
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1354
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1353,
            "end": 1354
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1357
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1366,
                "end": 1369
              },
              "start": 1366,
              "end": 1371
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1356,
            "end": 1371
          }
        ],
        "start": 1352,
        "end": 1372
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "head",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1384
                  },
                  "typeArguments": null,
                  "start": 1383,
                  "end": 1384
                },
                "start": 1381,
                "end": 1384
              },
              "start": 1377,
              "end": 1384
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1389,
                "end": 1393
              },
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
                    "start": 1395,
                    "end": 1396
                  },
                  "typeArguments": null,
                  "start": 1395,
                  "end": 1396
                },
                "start": 1393,
                "end": 1396
              },
              "value": null,
              "start": 1386,
              "end": 1396
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1401,
              "end": 1405
            },
            "start": 1398,
            "end": 1405
          },
          "start": 1376,
          "end": 1405
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
                "start": 1422,
                "end": 1426
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1434,
                      "end": 1435
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1434,
                    "end": 1435
                  },
                  "start": 1428,
                  "end": 1435
                },
                "start": 1426,
                "end": 1435
              },
              "value": null,
              "start": 1419,
              "end": 1435
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1441,
              "end": 1445
            },
            "start": 1438,
            "end": 1445
          },
          "start": 1415,
          "end": 1445
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 1450,
            "end": 1451
          },
          "typeArguments": null,
          "start": 1450,
          "end": 1451
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 1456,
          "end": 1459
        },
        "start": 1375,
        "end": 1459
      },
      "declare": false,
      "start": 1340,
      "end": 1460
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BuildTree",
        "optional": false,
        "typeAnnotation": null,
        "start": 1467,
        "end": 1476
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
              "start": 1477,
              "end": 1478
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1477,
            "end": 1478
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1480,
              "end": 1481
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1490,
              "end": 1496
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1500,
                  "end": 1501
                },
                "prefix": true,
                "start": 1499,
                "end": 1501
              },
              "start": 1499,
              "end": 1501
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1480,
            "end": 1501
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1504
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1513,
                "end": 1516
              },
              "start": 1513,
              "end": 1518
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 1521,
              "end": 1523
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1503,
            "end": 1523
          }
        ],
        "start": 1476,
        "end": 1524
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1531,
                "end": 1532
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
                    "start": 1534,
                    "end": 1535
                  },
                  "typeArguments": null,
                  "start": 1534,
                  "end": 1535
                },
                "start": 1532,
                "end": 1535
              },
              "accessibility": null,
              "static": false,
              "start": 1531,
              "end": 1536
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1539,
                "end": 1540
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1542,
                        "end": 1543
                      },
                      "typeArguments": null,
                      "start": 1542,
                      "end": 1543
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
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1548,
                            "end": 1556
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
                                  "name": "BuildTree",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1558,
                                  "end": 1567
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
                                        "start": 1568,
                                        "end": 1569
                                      },
                                      "typeArguments": null,
                                      "start": 1568,
                                      "end": 1569
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "N",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1571,
                                        "end": 1572
                                      },
                                      "typeArguments": null,
                                      "start": 1571,
                                      "end": 1572
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Prepend",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1574,
                                        "end": 1581
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 1582,
                                            "end": 1585
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1587,
                                              "end": 1588
                                            },
                                            "typeArguments": null,
                                            "start": 1587,
                                            "end": 1588
                                          }
                                        ],
                                        "start": 1581,
                                        "end": 1589
                                      },
                                      "start": 1574,
                                      "end": 1589
                                    }
                                  ],
                                  "start": 1567,
                                  "end": 1590
                                },
                                "start": 1558,
                                "end": 1590
                              },
                              "start": 1558,
                              "end": 1592
                            },
                            "start": 1556,
                            "end": 1592
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1548,
                          "end": 1592
                        }
                      ],
                      "start": 1546,
                      "end": 1594
                    }
                  ],
                  "start": 1542,
                  "end": 1594
                },
                "start": 1540,
                "end": 1594
              },
              "accessibility": null,
              "static": false,
              "start": 1539,
              "end": 1595
            }
          ],
          "start": 1527,
          "end": 1597
        },
        "indexType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1604
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1605,
                    "end": 1606
                  },
                  "typeArguments": null,
                  "start": 1605,
                  "end": 1606
                }
              ],
              "start": 1604,
              "end": 1607
            },
            "start": 1598,
            "end": 1607
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1616,
              "end": 1617
            },
            "typeArguments": null,
            "start": 1616,
            "end": 1617
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1620,
              "end": 1621
            },
            "start": 1620,
            "end": 1621
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1624,
              "end": 1625
            },
            "start": 1624,
            "end": 1625
          },
          "start": 1598,
          "end": 1625
        },
        "start": 1527,
        "end": 1626
      },
      "declare": false,
      "start": 1462,
      "end": 1627
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 1639,
        "end": 1643
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1648,
              "end": 1652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1654,
                "end": 1660
              },
              "start": 1652,
              "end": 1660
            },
            "accessibility": null,
            "static": false,
            "start": 1648,
            "end": 1661
          }
        ],
        "start": 1644,
        "end": 1663
      },
      "declare": false,
      "start": 1629,
      "end": 1663
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GrandUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 1670,
        "end": 1679
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BuildTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 1682,
          "end": 1691
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "User",
                "optional": false,
                "typeAnnotation": null,
                "start": 1692,
                "end": 1696
              },
              "typeArguments": null,
              "start": 1692,
              "end": 1696
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1698,
                "end": 1699
              },
              "start": 1698,
              "end": 1699
            }
          ],
          "start": 1691,
          "end": 1700
        },
        "start": 1682,
        "end": 1700
      },
      "declare": false,
      "start": 1665,
      "end": 1701
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
            "name": "grandUser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GrandUser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1720,
                  "end": 1729
                },
                "typeArguments": null,
                "start": 1720,
                "end": 1729
              },
              "start": 1718,
              "end": 1729
            },
            "start": 1709,
            "end": 1729
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1740
                },
                "value": {
                  "type": "Literal",
                  "value": "Grand User",
                  "raw": "\"Grand User\"",
                  "start": 1742,
                  "end": 1754
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1736,
                "end": 1754
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1758,
                  "end": 1766
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
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
                            "start": 1782,
                            "end": 1786
                          },
                          "value": {
                            "type": "Literal",
                            "value": "Son",
                            "raw": "\"Son\"",
                            "start": 1788,
                            "end": 1793
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1782,
                          "end": 1793
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1801,
                            "end": 1809
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
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
                                      "start": 1833,
                                      "end": 1837
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "Grand son",
                                      "raw": "\"Grand son\"",
                                      "start": 1839,
                                      "end": 1850
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1833,
                                    "end": 1850
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "children",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1862,
                                      "end": 1870
                                    },
                                    "value": {
                                      "type": "ArrayExpression",
                                      "elements": [
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
                                                "start": 1902,
                                                "end": 1906
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": "123",
                                                "raw": "\"123\"",
                                                "start": 1908,
                                                "end": 1913
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 1902,
                                              "end": 1913
                                            },
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "children",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1929,
                                                "end": 1937
                                              },
                                              "value": {
                                                "type": "ArrayExpression",
                                                "elements": [
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
                                                          "start": 1977,
                                                          "end": 1981
                                                        },
                                                        "value": {
                                                          "type": "Literal",
                                                          "value": "Some other name",
                                                          "raw": "\"Some other name\"",
                                                          "start": 1983,
                                                          "end": 2000
                                                        },
                                                        "method": false,
                                                        "shorthand": false,
                                                        "computed": false,
                                                        "optional": false,
                                                        "start": 1977,
                                                        "end": 2000
                                                      }
                                                    ],
                                                    "start": 1957,
                                                    "end": 2019
                                                  }
                                                ],
                                                "start": 1939,
                                                "end": 2036
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 1929,
                                              "end": 2036
                                            }
                                          ],
                                          "start": 1886,
                                          "end": 2051
                                        }
                                      ],
                                      "start": 1872,
                                      "end": 2064
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1862,
                                    "end": 2064
                                  }
                                ],
                                "start": 1821,
                                "end": 2075
                              }
                            ],
                            "start": 1811,
                            "end": 2084
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1801,
                          "end": 2084
                        }
                      ],
                      "start": 1774,
                      "end": 2091
                    }
                  ],
                  "start": 1768,
                  "end": 2096
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1758,
                "end": 2096
              }
            ],
            "start": 1732,
            "end": 2099
          },
          "definite": false,
          "start": 1709,
          "end": 2099
        }
      ],
      "declare": false,
      "start": 1703,
      "end": 2100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "grandUser",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2102,
                    "end": 2111
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2112,
                    "end": 2120
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2102,
                  "end": 2120
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2121,
                  "end": 2122
                },
                "optional": false,
                "computed": true,
                "start": 2102,
                "end": 2123
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 2124,
                "end": 2132
              },
              "optional": false,
              "computed": false,
              "start": 2102,
              "end": 2132
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2133,
              "end": 2134
            },
            "optional": false,
            "computed": true,
            "start": 2102,
            "end": 2135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": null,
            "start": 2136,
            "end": 2144
          },
          "optional": false,
          "computed": false,
          "start": 2102,
          "end": 2144
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 2145,
          "end": 2146
        },
        "optional": false,
        "computed": true,
        "start": 2102,
        "end": 2147
      },
      "directive": null,
      "start": 2102,
      "end": 2148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 2149
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 49,
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
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 62,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 89,
    "end": 90
  },
  {
    "type": "Null",
    "value": "null",
    "start": 91,
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
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 100,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "Schema1",
    "start": 105,
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
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 147,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 176,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 179,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "Schema1",
    "start": 189,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 211,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 224,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "schemaObj1",
    "start": 237,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Schema1",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 272,
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
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 326,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "invalid",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 387,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Schema2",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 408,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 416,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 434,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 464,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 476,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 479,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "Schema2",
    "start": 489,
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
    "value": "T",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "]",
    "start": 500,
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
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 510,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 524,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 531,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "schemaObj2",
    "start": 537,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "Schema2",
    "start": 549,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 557,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 597,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 620,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 626,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "invalid",
    "start": 647,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 656,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 687,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "Schema3",
    "start": 692,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 705,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 721,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 729,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 747,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 764,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 776,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 779,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "Schema3",
    "start": 789,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 811,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 818,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "schemaObj3",
    "start": 824,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "Schema3",
    "start": 836,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 844,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 859,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 872,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 884,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 901,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 913,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "invalid",
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
    "type": "Boolean",
    "value": "false",
    "start": 943,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 974,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "Schema4",
    "start": 979,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 995,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1003,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 1021,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 1036,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1051,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 1058,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1079,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Schema4",
    "start": 1089,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1111,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1118,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "schemaObj4",
    "start": 1124,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "Schema4",
    "start": 1136,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 1144,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 1213,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "invalid",
    "start": 1234,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1243,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1296,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1301,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1310,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 1329,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "Prepend",
    "start": 1345,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1358,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 1377,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1389,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1398,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1401,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1407,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1419,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1422,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1428,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1438,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1441,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1456,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1462,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "BuildTree",
    "start": 1467,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1482,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1490,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1505,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1548,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "BuildTree",
    "start": 1558,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "Prepend",
    "start": 1574,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1582,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1598,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1608,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1629,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 1639,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1648,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1654,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1665,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "GrandUser",
    "start": 1670,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "BuildTree",
    "start": 1682,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 1692,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1703,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "grandUser",
    "start": 1709,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "GrandUser",
    "start": 1720,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1736,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "String",
    "value": "\"Grand User\"",
    "start": 1742,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1758,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1782,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "String",
    "value": "\"Son\"",
    "start": 1788,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1801,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1833,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "String",
    "value": "\"Grand son\"",
    "start": 1839,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1862,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1902,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 1908,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1929,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1977,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "String",
    "value": "\"Some other name\"",
    "start": 1983,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "grandUser",
    "start": 2102,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 2112,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 2124,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 2136,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2147,
    "end": 2148
  }
]
```

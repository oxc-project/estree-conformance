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
          "name": "Prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 38
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
                "start": 39,
                "end": 40
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 39,
              "end": 40
            }
          ],
          "start": 38,
          "end": 41
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [],
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
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 48,
                "end": 51
              },
              "start": 46,
              "end": 51
            }
          ],
          "start": 44,
          "end": 53
        },
        "declare": false,
        "start": 29,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropType",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
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
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 84
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
                  "start": 85,
                  "end": 86
                },
                "typeArguments": null,
                "start": 85,
                "end": 86
              }
            ],
            "start": 84,
            "end": 87
          },
          "start": 80,
          "end": 87
        },
        "declare": false,
        "start": 61,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropDefaultValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 117
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
                "start": 118,
                "end": 119
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 118,
              "end": 119
            }
          ],
          "start": 117,
          "end": 120
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "typeArguments": null,
          "start": 123,
          "end": 124
        },
        "declare": false,
        "start": 96,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 89,
      "end": 125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropValidatorFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 161
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
                "start": 162,
                "end": 163
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 162,
              "end": 163
            }
          ],
          "start": 161,
          "end": 164
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
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
              "start": 168,
              "end": 176
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 181,
              "end": 188
            },
            "start": 178,
            "end": 188
          },
          "start": 167,
          "end": 188
        },
        "declare": false,
        "start": 135,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 128,
      "end": 189
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropValidator",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 215
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
                "start": 216,
                "end": 217
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 216,
              "end": 217
            }
          ],
          "start": 215,
          "end": 218
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 232
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
                  "start": 233,
                  "end": 234
                },
                "typeArguments": null,
                "start": 233,
                "end": 234
              }
            ],
            "start": 232,
            "end": 235
          },
          "start": 221,
          "end": 235
        },
        "declare": false,
        "start": 197,
        "end": 236
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 190,
      "end": 236
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 262
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
                "start": 263,
                "end": 264
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 263,
              "end": 264
            }
          ],
          "start": 262,
          "end": 265
        },
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 278
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 288
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
                          "start": 289,
                          "end": 290
                        },
                        "typeArguments": null,
                        "start": 289,
                        "end": 290
                      }
                    ],
                    "start": 288,
                    "end": 291
                  },
                  "start": 280,
                  "end": 291
                },
                "start": 278,
                "end": 291
              },
              "accessibility": null,
              "static": false,
              "start": 274,
              "end": 292
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 303
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropDefaultValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 322
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
                          "start": 323,
                          "end": 324
                        },
                        "typeArguments": null,
                        "start": 323,
                        "end": 324
                      }
                    ],
                    "start": 322,
                    "end": 325
                  },
                  "start": 306,
                  "end": 325
                },
                "start": 304,
                "end": 325
              },
              "accessibility": null,
              "static": false,
              "start": 298,
              "end": 326
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 339
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 342,
                  "end": 349
                },
                "start": 340,
                "end": 349
              },
              "accessibility": null,
              "static": false,
              "start": 331,
              "end": 350
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 364
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropValidatorFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 388
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
                          "start": 389,
                          "end": 390
                        },
                        "typeArguments": null,
                        "start": 389,
                        "end": 390
                      }
                    ],
                    "start": 388,
                    "end": 391
                  },
                  "start": 367,
                  "end": 391
                },
                "start": 365,
                "end": 391
              },
              "accessibility": null,
              "static": false,
              "start": 355,
              "end": 392
            }
          ],
          "start": 268,
          "end": 394
        },
        "declare": false,
        "start": 246,
        "end": 394
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 239,
      "end": 394
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecordPropsDefinition",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 429
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
                "start": 430,
                "end": 431
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 430,
              "end": 431
            }
          ],
          "start": 429,
          "end": 432
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 443
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
                "start": 453,
                "end": 454
              },
              "typeArguments": null,
              "start": 453,
              "end": 454
            },
            "start": 447,
            "end": 454
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropValidator",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 470
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
                      "start": 471,
                      "end": 472
                    },
                    "typeArguments": null,
                    "start": 471,
                    "end": 472
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  },
                  "start": 471,
                  "end": 475
                }
              ],
              "start": 470,
              "end": 476
            },
            "start": 457,
            "end": 476
          },
          "optional": false,
          "readonly": null,
          "start": 435,
          "end": 478
        },
        "declare": false,
        "start": 403,
        "end": 478
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 396,
      "end": 478
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropsDefinition",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 506
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
                "start": 507,
                "end": 508
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 507,
              "end": 508
            }
          ],
          "start": 506,
          "end": 509
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RecordPropsDefinition",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 533
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
                  "start": 534,
                  "end": 535
                },
                "typeArguments": null,
                "start": 534,
                "end": 535
              }
            ],
            "start": 533,
            "end": 536
          },
          "start": 512,
          "end": 536
        },
        "declare": false,
        "start": 486,
        "end": 537
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 479,
      "end": 537
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extend",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 563
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
              "start": 564,
              "end": 565
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 564,
            "end": 565
          }
        ],
        "start": 563,
        "end": 566
      },
      "params": [
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
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 574
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 574
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 569,
              "end": 574
            }
          ],
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 585
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropsDefinition",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 602
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
                              "start": 603,
                              "end": 604
                            },
                            "typeArguments": null,
                            "start": 603,
                            "end": 604
                          }
                        ],
                        "start": 602,
                        "end": 605
                      },
                      "start": 587,
                      "end": 605
                    },
                    "start": 585,
                    "end": 605
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 580,
                  "end": 605
                }
              ],
              "start": 578,
              "end": 607
            },
            "start": 576,
            "end": 607
          },
          "start": 567,
          "end": 607
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropsDefinition",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 626
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
                  "start": 627,
                  "end": 628
                },
                "typeArguments": null,
                "start": 627,
                "end": 628
              }
            ],
            "start": 626,
            "end": 629
          },
          "start": 611,
          "end": 629
        },
        "start": 608,
        "end": 629
      },
      "body": null,
      "expression": false,
      "start": 540,
      "end": 630
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 648
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
              "name": "valid",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 660
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 662,
                "end": 669
              },
              "start": 660,
              "end": 669
            },
            "accessibility": null,
            "static": false,
            "start": 655,
            "end": 670
          }
        ],
        "start": 649,
        "end": 672
      },
      "declare": false,
      "start": 632,
      "end": 672
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 680,
            "end": 681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 690
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
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 697,
                      "end": 702
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
                            "name": "notResolved",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 714,
                            "end": 725
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
                                  "start": 741,
                                  "end": 745
                                },
                                "value": {
                                  "type": "TSAsExpression",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 747,
                                    "end": 753
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PropType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 757,
                                      "end": 765
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "MyType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 766,
                                            "end": 772
                                          },
                                          "typeArguments": null,
                                          "start": 766,
                                          "end": 772
                                        }
                                      ],
                                      "start": 765,
                                      "end": 773
                                    },
                                    "start": 757,
                                    "end": 773
                                  },
                                  "start": 747,
                                  "end": 773
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 741,
                                "end": 773
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "validator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 787,
                                  "end": 796
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 798,
                                      "end": 799
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 828,
                                            "end": 829
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "valid",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 830,
                                            "end": 835
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 828,
                                          "end": 835
                                        },
                                        "start": 821,
                                        "end": 836
                                      }
                                    ],
                                    "start": 803,
                                    "end": 850
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 798,
                                  "end": 850
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 787,
                                "end": 850
                              }
                            ],
                            "start": 727,
                            "end": 860
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 714,
                          "end": 860
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "explicit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 870,
                            "end": 878
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
                                  "start": 894,
                                  "end": 898
                                },
                                "value": {
                                  "type": "TSAsExpression",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Object",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 900,
                                    "end": 906
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PropType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 910,
                                      "end": 918
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "MyType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 919,
                                            "end": 925
                                          },
                                          "typeArguments": null,
                                          "start": 919,
                                          "end": 925
                                        }
                                      ],
                                      "start": 918,
                                      "end": 926
                                    },
                                    "start": 910,
                                    "end": 926
                                  },
                                  "start": 900,
                                  "end": 926
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 894,
                                "end": 926
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "validator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 940,
                                  "end": 949
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "MyType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 955,
                                            "end": 961
                                          },
                                          "typeArguments": null,
                                          "start": 955,
                                          "end": 961
                                        },
                                        "start": 953,
                                        "end": 961
                                      },
                                      "start": 952,
                                      "end": 961
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 991,
                                            "end": 992
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "valid",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 993,
                                            "end": 998
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 991,
                                          "end": 998
                                        },
                                        "start": 984,
                                        "end": 999
                                      }
                                    ],
                                    "start": 966,
                                    "end": 1013
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 951,
                                  "end": 1013
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 940,
                                "end": 1013
                              }
                            ],
                            "start": 880,
                            "end": 1023
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 870,
                          "end": 1023
                        }
                      ],
                      "start": 704,
                      "end": 1029
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 697,
                    "end": 1029
                  }
                ],
                "start": 691,
                "end": 1031
              }
            ],
            "optional": false,
            "start": 684,
            "end": 1032
          },
          "definite": false,
          "start": 680,
          "end": 1032
        }
      ],
      "declare": false,
      "start": 674,
      "end": 1032
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 1034,
          "end": 1035
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicit",
          "optional": false,
          "typeAnnotation": null,
          "start": 1036,
          "end": 1044
        },
        "optional": false,
        "computed": false,
        "start": 1034,
        "end": 1044
      },
      "directive": null,
      "start": 1034,
      "end": 1044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1046
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "notResolved",
          "optional": false,
          "typeAnnotation": null,
          "start": 1047,
          "end": 1058
        },
        "optional": false,
        "computed": false,
        "start": 1045,
        "end": 1058
      },
      "directive": null,
      "start": 1045,
      "end": 1058
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1059,
            "end": 1060
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null,
            "start": 1061,
            "end": 1069
          },
          "optional": false,
          "computed": false,
          "start": 1059,
          "end": 1069
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": null,
          "start": 1070,
          "end": 1078
        },
        "optional": false,
        "computed": false,
        "start": 1059,
        "end": 1078
      },
      "directive": null,
      "start": 1059,
      "end": 1078
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1079,
            "end": 1080
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "notResolved",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1092
          },
          "optional": false,
          "computed": false,
          "start": 1079,
          "end": 1092
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": null,
          "start": 1093,
          "end": 1101
        },
        "optional": false,
        "computed": false,
        "start": 1079,
        "end": 1101
      },
      "directive": null,
      "start": 1079,
      "end": 1101
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 1139,
        "end": 1142
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
              "start": 1143,
              "end": 1144
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1143,
            "end": 1144
          }
        ],
        "start": 1142,
        "end": 1145
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
              "name": "contents",
              "optional": false,
              "typeAnnotation": null,
              "start": 1154,
              "end": 1162
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
                  "start": 1165,
                  "end": 1166
                },
                "typeArguments": null,
                "start": 1165,
                "end": 1166
              },
              "start": 1163,
              "end": 1166
            },
            "accessibility": null,
            "static": false,
            "start": 1154,
            "end": 1167
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "contains",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1180
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "content",
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
                      "start": 1191,
                      "end": 1192
                    },
                    "typeArguments": null,
                    "start": 1191,
                    "end": 1192
                  },
                  "start": 1189,
                  "end": 1192
                },
                "start": 1182,
                "end": 1192
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1195,
                "end": 1202
              },
              "start": 1193,
              "end": 1202
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1172,
            "end": 1203
          }
        ],
        "start": 1148,
        "end": 1205
      },
      "declare": false,
      "start": 1134,
      "end": 1206
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 1213,
        "end": 1219
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
              "start": 1220,
              "end": 1221
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1220,
            "end": 1221
          }
        ],
        "start": 1219,
        "end": 1222
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1232,
          "end": 1233
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
              "start": 1243,
              "end": 1244
            },
            "typeArguments": null,
            "start": 1243,
            "end": 1244
          },
          "start": 1237,
          "end": 1244
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
            "start": 1247,
            "end": 1250
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
                    "start": 1251,
                    "end": 1252
                  },
                  "typeArguments": null,
                  "start": 1251,
                  "end": 1252
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1254
                  },
                  "typeArguments": null,
                  "start": 1253,
                  "end": 1254
                },
                "start": 1251,
                "end": 1255
              }
            ],
            "start": 1250,
            "end": 1256
          },
          "start": 1247,
          "end": 1256
        },
        "optional": false,
        "readonly": null,
        "start": 1225,
        "end": 1259
      },
      "declare": false,
      "start": 1208,
      "end": 1259
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 1278,
        "end": 1280
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
              "start": 1281,
              "end": 1282
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1281,
            "end": 1282
          }
        ],
        "start": 1280,
        "end": 1283
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 1289,
                "end": 1295
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
                      "start": 1296,
                      "end": 1297
                    },
                    "typeArguments": null,
                    "start": 1296,
                    "end": 1297
                  }
                ],
                "start": 1295,
                "end": 1298
              },
              "start": 1289,
              "end": 1298
            },
            "start": 1287,
            "end": 1298
          },
          "start": 1284,
          "end": 1298
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 1301,
            "end": 1307
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
                  "start": 1308,
                  "end": 1309
                },
                "typeArguments": null,
                "start": 1308,
                "end": 1309
              }
            ],
            "start": 1307,
            "end": 1310
          },
          "start": 1301,
          "end": 1310
        },
        "start": 1299,
        "end": 1310
      },
      "body": null,
      "expression": false,
      "start": 1261,
      "end": 1311
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1359,
            "end": 1363
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1366,
              "end": 1368
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1375,
                      "end": 1378
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
                            "name": "contents",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1390,
                            "end": 1398
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 1400,
                            "end": 1402
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1390,
                          "end": 1402
                        }
                      ],
                      "start": 1380,
                      "end": 1408
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1375,
                    "end": 1408
                  }
                ],
                "start": 1369,
                "end": 1410
              }
            ],
            "optional": false,
            "start": 1366,
            "end": 1411
          },
          "definite": false,
          "start": 1359,
          "end": 1411
        }
      ],
      "declare": false,
      "start": 1353,
      "end": 1412
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1461,
            "end": 1465
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1470
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1477,
                      "end": 1480
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
                            "name": "contents",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1492,
                            "end": 1500
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 1502,
                            "end": 1504
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1492,
                          "end": 1504
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "contains",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1514,
                            "end": 1522
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1523,
                                "end": 1524
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "k",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1547,
                                        "end": 1548
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1549,
                                        "end": 1555
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1547,
                                      "end": 1555
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1558,
                                      "end": 1559
                                    },
                                    "start": 1547,
                                    "end": 1559
                                  },
                                  "start": 1540,
                                  "end": 1560
                                }
                              ],
                              "start": 1526,
                              "end": 1570
                            },
                            "expression": false,
                            "start": 1522,
                            "end": 1570
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1514,
                          "end": 1570
                        }
                      ],
                      "start": 1482,
                      "end": 1576
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1477,
                    "end": 1576
                  }
                ],
                "start": 1471,
                "end": 1578
              }
            ],
            "optional": false,
            "start": 1468,
            "end": 1579
          },
          "definite": false,
          "start": 1461,
          "end": 1579
        }
      ],
      "declare": false,
      "start": 1455,
      "end": 1580
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1631
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1634,
              "end": 1636
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1643,
                      "end": 1646
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
                            "name": "contains",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1658,
                            "end": 1666
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1667,
                                "end": 1668
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "k",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1691,
                                        "end": 1692
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1693,
                                        "end": 1699
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1691,
                                      "end": 1699
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1702,
                                      "end": 1703
                                    },
                                    "start": 1691,
                                    "end": 1703
                                  },
                                  "start": 1684,
                                  "end": 1704
                                }
                              ],
                              "start": 1670,
                              "end": 1714
                            },
                            "expression": false,
                            "start": 1666,
                            "end": 1714
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1658,
                          "end": 1714
                        }
                      ],
                      "start": 1648,
                      "end": 1720
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1643,
                    "end": 1720
                  }
                ],
                "start": 1637,
                "end": 1722
              }
            ],
            "optional": false,
            "start": 1634,
            "end": 1723
          },
          "definite": false,
          "start": 1627,
          "end": 1723
        }
      ],
      "declare": false,
      "start": 1621,
      "end": 1724
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1754,
        "end": 1761
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
              "start": 1762,
              "end": 1763
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1762,
            "end": 1763
          }
        ],
        "start": 1761,
        "end": 1764
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1774,
          "end": 1775
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
              "start": 1785,
              "end": 1786
            },
            "typeArguments": null,
            "start": 1785,
            "end": 1786
          },
          "start": 1779,
          "end": 1786
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
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
                  "start": 1790,
                  "end": 1791
                },
                "typeArguments": null,
                "start": 1790,
                "end": 1791
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1792,
                  "end": 1793
                },
                "typeArguments": null,
                "start": 1792,
                "end": 1793
              },
              "start": 1790,
              "end": 1794
            },
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
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
                        "start": 1802,
                        "end": 1803
                      },
                      "typeArguments": null,
                      "start": 1802,
                      "end": 1803
                    },
                    "start": 1800,
                    "end": 1803
                  },
                  "start": 1797,
                  "end": 1803
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1808,
                  "end": 1815
                },
                "start": 1805,
                "end": 1815
              },
              "start": 1796,
              "end": 1815
            }
          ],
          "start": 1789,
          "end": 1816
        },
        "optional": false,
        "readonly": null,
        "start": 1767,
        "end": 1819
      },
      "declare": false,
      "start": 1749,
      "end": 1820
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferMapped1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1851
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
              "start": 1852,
              "end": 1853
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1852,
            "end": 1853
          }
        ],
        "start": 1851,
        "end": 1854
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1860,
                "end": 1867
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
                      "start": 1868,
                      "end": 1869
                    },
                    "typeArguments": null,
                    "start": 1868,
                    "end": 1869
                  }
                ],
                "start": 1867,
                "end": 1870
              },
              "start": 1860,
              "end": 1870
            },
            "start": 1858,
            "end": 1870
          },
          "start": 1855,
          "end": 1870
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1873,
          "end": 1877
        },
        "start": 1871,
        "end": 1877
      },
      "body": null,
      "expression": false,
      "start": 1822,
      "end": 1878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferMapped1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1880,
          "end": 1892
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1899,
                  "end": 1902
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1905,
                      "end": 1906
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1908,
                          "end": 1911
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1915,
                            "end": 1918
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1919,
                            "end": 1922
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1915,
                          "end": 1922
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 1925,
                          "end": 1926
                        },
                        "start": 1915,
                        "end": 1926
                      },
                      "id": null,
                      "generator": false,
                      "start": 1908,
                      "end": 1926
                    }
                  ],
                  "start": 1904,
                  "end": 1927
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1899,
                "end": 1927
              }
            ],
            "start": 1893,
            "end": 1929
          }
        ],
        "optional": false,
        "start": 1880,
        "end": 1930
      },
      "directive": null,
      "start": 1880,
      "end": 1931
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1938,
        "end": 1945
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
              "start": 1946,
              "end": 1947
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1946,
            "end": 1947
          }
        ],
        "start": 1945,
        "end": 1948
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1958,
          "end": 1959
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
              "start": 1969,
              "end": 1970
            },
            "typeArguments": null,
            "start": 1969,
            "end": 1970
          },
          "start": 1963,
          "end": 1970
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
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
                  "start": 1974,
                  "end": 1975
                },
                "typeArguments": null,
                "start": 1974,
                "end": 1975
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1976,
                  "end": 1977
                },
                "typeArguments": null,
                "start": 1976,
                "end": 1977
              },
              "start": 1974,
              "end": 1978
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSUnknownKeyword",
                "start": 1980,
                "end": 1987
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1996,
                  "end": 1997
                },
                "typeArguments": null,
                "start": 1996,
                "end": 1997
              },
              "trueType": {
                "type": "TSUnknownKeyword",
                "start": 2000,
                "end": 2007
              },
              "falseType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
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
                          "start": 2016,
                          "end": 2017
                        },
                        "typeArguments": null,
                        "start": 2016,
                        "end": 2017
                      },
                      "start": 2014,
                      "end": 2017
                    },
                    "start": 2011,
                    "end": 2017
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2022,
                    "end": 2029
                  },
                  "start": 2019,
                  "end": 2029
                },
                "start": 2010,
                "end": 2029
              },
              "start": 1980,
              "end": 2029
            }
          ],
          "start": 1973,
          "end": 2030
        },
        "optional": false,
        "readonly": null,
        "start": 1951,
        "end": 2033
      },
      "declare": false,
      "start": 1933,
      "end": 2034
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferMapped2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2053,
        "end": 2065
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
              "start": 2066,
              "end": 2067
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2066,
            "end": 2067
          }
        ],
        "start": 2065,
        "end": 2068
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2074,
                "end": 2081
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
                      "start": 2082,
                      "end": 2083
                    },
                    "typeArguments": null,
                    "start": 2082,
                    "end": 2083
                  }
                ],
                "start": 2081,
                "end": 2084
              },
              "start": 2074,
              "end": 2084
            },
            "start": 2072,
            "end": 2084
          },
          "start": 2069,
          "end": 2084
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2087,
          "end": 2091
        },
        "start": 2085,
        "end": 2091
      },
      "body": null,
      "expression": false,
      "start": 2036,
      "end": 2092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferMapped2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2094,
          "end": 2106
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2113,
                  "end": 2116
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 2119,
                      "end": 2120
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2122,
                          "end": 2125
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2129,
                            "end": 2132
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2133,
                            "end": 2136
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2129,
                          "end": 2136
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 2139,
                          "end": 2140
                        },
                        "start": 2129,
                        "end": 2140
                      },
                      "id": null,
                      "generator": false,
                      "start": 2122,
                      "end": 2140
                    }
                  ],
                  "start": 2118,
                  "end": 2141
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2113,
                "end": 2141
              }
            ],
            "start": 2107,
            "end": 2143
          }
        ],
        "optional": false,
        "start": 2094,
        "end": 2144
      },
      "directive": null,
      "start": 2094,
      "end": 2145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 2152,
        "end": 2166
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
              "start": 2167,
              "end": 2168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2167,
            "end": 2168
          }
        ],
        "start": 2166,
        "end": 2169
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 2188,
          "end": 2189
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
              "start": 2199,
              "end": 2200
            },
            "typeArguments": null,
            "start": 2199,
            "end": 2200
          },
          "start": 2193,
          "end": 2200
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
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
                    "start": 2213,
                    "end": 2214
                  },
                  "typeArguments": null,
                  "start": 2213,
                  "end": 2214
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2215,
                    "end": 2216
                  },
                  "typeArguments": null,
                  "start": 2215,
                  "end": 2216
                },
                "start": 2213,
                "end": 2217
              },
              {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
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
                          "start": 2225,
                          "end": 2226
                        },
                        "typeArguments": null,
                        "start": 2225,
                        "end": 2226
                      },
                      "start": 2223,
                      "end": 2226
                    },
                    "start": 2220,
                    "end": 2226
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2231,
                    "end": 2238
                  },
                  "start": 2228,
                  "end": 2238
                },
                "start": 2219,
                "end": 2238
              }
            ],
            "start": 2212,
            "end": 2239
          },
          "start": 2203,
          "end": 2239
        },
        "optional": false,
        "readonly": true,
        "start": 2172,
        "end": 2242
      },
      "declare": false,
      "start": 2147,
      "end": 2243
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferMappedReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 2262,
        "end": 2281
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
              "start": 2282,
              "end": 2283
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2282,
            "end": 2283
          }
        ],
        "start": 2281,
        "end": 2284
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MappedReadonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2290,
                "end": 2304
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
                      "start": 2305,
                      "end": 2306
                    },
                    "typeArguments": null,
                    "start": 2305,
                    "end": 2306
                  }
                ],
                "start": 2304,
                "end": 2307
              },
              "start": 2290,
              "end": 2307
            },
            "start": 2288,
            "end": 2307
          },
          "start": 2285,
          "end": 2307
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2310,
          "end": 2314
        },
        "start": 2308,
        "end": 2314
      },
      "body": null,
      "expression": false,
      "start": 2245,
      "end": 2315
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferMappedReadonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 2317,
          "end": 2336
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2343,
                  "end": 2346
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 2349,
                      "end": 2350
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2352,
                          "end": 2355
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2359,
                            "end": 2362
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2363,
                            "end": 2366
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2359,
                          "end": 2366
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 2369,
                          "end": 2370
                        },
                        "start": 2359,
                        "end": 2370
                      },
                      "id": null,
                      "generator": false,
                      "start": 2352,
                      "end": 2370
                    }
                  ],
                  "start": 2348,
                  "end": 2371
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2343,
                "end": 2371
              }
            ],
            "start": 2337,
            "end": 2373
          }
        ],
        "optional": false,
        "start": 2317,
        "end": 2374
      },
      "directive": null,
      "start": 2317,
      "end": 2375
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 2375
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 29,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
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
    "value": "T",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 61,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "PropType",
    "start": 66,
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
    "type": "Identifier",
    "value": "Prop",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 89,
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
    "value": "PropDefaultValue",
    "start": 101,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 128,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 135,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "PropValidatorFunction",
    "start": 140,
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
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 168,
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
    "value": "T",
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
    "type": "Identifier",
    "value": "boolean",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 197,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "PropValidator",
    "start": 202,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "PropOptions",
    "start": 221,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 239,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 246,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "PropOptions",
    "start": 251,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 263,
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
    "value": "type",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "PropType",
    "start": 280,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "PropDefaultValue",
    "start": 306,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 331,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "boolean",
    "start": 342,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "validator",
    "start": 355,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "PropValidatorFunction",
    "start": 367,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 396,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 403,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "RecordPropsDefinition",
    "start": 408,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 444,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 447,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "PropValidator",
    "start": 457,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 479,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 486,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "PropsDefinition",
    "start": 491,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "RecordPropsDefinition",
    "start": 512,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 540,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 548,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
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
    "value": "props",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 580,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "PropsDefinition",
    "start": 587,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "PropsDefinition",
    "start": 611,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 632,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 655,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 662,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 674,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 684,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 697,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "notResolved",
    "start": 714,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
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
    "type": "Identifier",
    "value": "Object",
    "start": 747,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 754,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "PropType",
    "start": 757,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 766,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "validator",
    "start": 787,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 800,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 821,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 870,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 894,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 900,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 907,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "PropType",
    "start": 910,
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
    "value": "MyType",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "validator",
    "start": 940,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 963,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 984,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "valid",
    "start": 993,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 1036,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "notResolved",
    "start": 1047,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 1061,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 1070,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "notResolved",
    "start": 1081,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 1093,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1134,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "contents",
    "start": 1154,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "contains",
    "start": 1172,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 1182,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1195,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1208,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 1213,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1234,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1237,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1261,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1269,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1278,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 1289,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "Mapped",
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
    "type": "Punctuator",
    "value": ">",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1353,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1359,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1366,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "contents",
    "start": 1390,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1455,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 1461,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1468,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1477,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "contents",
    "start": 1492,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1502,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "contains",
    "start": 1514,
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
    "value": "k",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1540,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1549,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1621,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 1627,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1634,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1643,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "contains",
    "start": 1658,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1684,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1693,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1749,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "Mapped1",
    "start": 1754,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1776,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1779,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1797,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1805,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1808,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1822,
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
    "value": "inferMapped1",
    "start": 1839,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1855,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "Mapped1",
    "start": 1860,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "inferMapped1",
    "start": 1880,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1899,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1908,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1912,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1915,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1919,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1933,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "Mapped2",
    "start": 1938,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1960,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1963,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1980,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1988,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2000,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2011,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2019,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2022,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2036,
    "end": 2043
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2044,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "inferMapped2",
    "start": 2053,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2069,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "Mapped2",
    "start": 2074,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2087,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "inferMapped2",
    "start": 2094,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2113,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2119,
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
    "value": "arg",
    "start": 2122,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2126,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2129,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2133,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2147,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "MappedReadonly",
    "start": 2152,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2178,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2190,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2193,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2203,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2220,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2228,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2231,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2245,
    "end": 2252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2253,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "inferMappedReadonly",
    "start": 2262,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2285,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "MappedReadonly",
    "start": 2290,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2310,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "inferMappedReadonly",
    "start": 2317,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2343,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2352,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2356,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2359,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2374,
    "end": 2375
  }
]
```

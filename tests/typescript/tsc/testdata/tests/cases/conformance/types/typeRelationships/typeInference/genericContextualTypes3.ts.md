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
        "name": "LowInfer",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
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
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
      },
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
              "start": 19,
              "end": 20
            },
            "typeArguments": null,
            "start": 19,
            "end": 20
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 23,
            "end": 25
          }
        ],
        "start": 19,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PartialAssigner",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 48
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 57
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 49,
            "end": 57
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 63
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 86
                },
                "typeArguments": null,
                "start": 78,
                "end": 86
              },
              "start": 72,
              "end": 86
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 86
          }
        ],
        "start": 48,
        "end": 87
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 111
                },
                "typeArguments": null,
                "start": 103,
                "end": 111
              },
              "start": 101,
              "end": 111
            },
            "start": 94,
            "end": 111
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 125
              },
              "typeArguments": null,
              "start": 117,
              "end": 125
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 130
              },
              "typeArguments": null,
              "start": 126,
              "end": 130
            },
            "start": 117,
            "end": 131
          },
          "start": 114,
          "end": 131
        },
        "start": 90,
        "end": 131
      },
      "declare": false,
      "start": 28,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropertyAssigner",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 155
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 164
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 164
          }
        ],
        "start": 155,
        "end": 165
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 174
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 192
            },
            "typeArguments": null,
            "start": 184,
            "end": 192
          },
          "start": 178,
          "end": 192
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
                "name": "PartialAssigner",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 211
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 220
                    },
                    "typeArguments": null,
                    "start": 212,
                    "end": 220
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 222,
                    "end": 223
                  }
                ],
                "start": 211,
                "end": 224
              },
              "start": 196,
              "end": 224
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 235
                },
                "typeArguments": null,
                "start": 227,
                "end": 235
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 237
                },
                "typeArguments": null,
                "start": 236,
                "end": 237
              },
              "start": 227,
              "end": 238
            }
          ],
          "start": 196,
          "end": 238
        },
        "optional": true,
        "readonly": null,
        "start": 168,
        "end": 241
      },
      "declare": false,
      "start": 134,
      "end": 242
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Meta",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 253
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 262
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 254,
            "end": 262
          }
        ],
        "start": 253,
        "end": 263
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
              "name": "action",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 276
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
                    "name": "ctx",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TContext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 292
                        },
                        "typeArguments": null,
                        "start": 284,
                        "end": 292
                      },
                      "start": 282,
                      "end": 292
                    },
                    "start": 279,
                    "end": 292
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 297,
                    "end": 301
                  },
                  "start": 294,
                  "end": 301
                },
                "start": 278,
                "end": 301
              },
              "start": 276,
              "end": 301
            },
            "accessibility": null,
            "static": false,
            "start": 270,
            "end": 301
          }
        ],
        "start": 266,
        "end": 303
      },
      "declare": false,
      "start": 244,
      "end": 303
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssignAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 315,
        "end": 327
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 336
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 328,
            "end": 336
          }
        ],
        "start": 327,
        "end": 337
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
              "start": 342,
              "end": 346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "xstate.assign",
                  "raw": "\"xstate.assign\"",
                  "start": 348,
                  "end": 363
                },
                "start": 348,
                "end": 363
              },
              "start": 346,
              "end": 363
            },
            "accessibility": null,
            "static": false,
            "start": 342,
            "end": 364
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 373,
                      "end": 381
                    },
                    "typeArguments": null,
                    "start": 373,
                    "end": 381
                  },
                  "start": 371,
                  "end": 381
                },
                "start": 368,
                "end": 381
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "meta",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Meta",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 393
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TContext",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 394,
                            "end": 402
                          },
                          "typeArguments": null,
                          "start": 394,
                          "end": 402
                        }
                      ],
                      "start": 393,
                      "end": 403
                    },
                    "start": 389,
                    "end": 403
                  },
                  "start": 387,
                  "end": 403
                },
                "start": 383,
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
            "start": 367,
            "end": 411
          }
        ],
        "start": 338,
        "end": 413
      },
      "declare": false,
      "start": 305,
      "end": 413
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assign",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 438
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
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 447
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 447
          }
        ],
        "start": 438,
        "end": 448
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "assignment",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyAssigner",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 480
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LowInfer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 481,
                      "end": 489
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TContext",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 490,
                            "end": 498
                          },
                          "typeArguments": null,
                          "start": 490,
                          "end": 498
                        }
                      ],
                      "start": 489,
                      "end": 499
                    },
                    "start": 481,
                    "end": 499
                  }
                ],
                "start": 480,
                "end": 500
              },
              "start": 464,
              "end": 500
            },
            "start": 462,
            "end": 500
          },
          "start": 452,
          "end": 500
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AssignAction",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 516
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 525
                },
                "typeArguments": null,
                "start": 517,
                "end": 525
              }
            ],
            "start": 516,
            "end": 526
          },
          "start": 504,
          "end": 526
        },
        "start": 502,
        "end": 526
      },
      "body": null,
      "expression": false,
      "start": 415,
      "end": 527
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Config",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 540
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 549
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 541,
            "end": 549
          }
        ],
        "start": 540,
        "end": 550
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
              "name": "context",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 564
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 574
                },
                "typeArguments": null,
                "start": 566,
                "end": 574
              },
              "start": 564,
              "end": 574
            },
            "accessibility": null,
            "static": false,
            "start": 557,
            "end": 575
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 583
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AssignAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 598
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 607
                      },
                      "typeArguments": null,
                      "start": 599,
                      "end": 607
                    }
                  ],
                  "start": 598,
                  "end": 608
                },
                "start": 586,
                "end": 608
              },
              "start": 584,
              "end": 608
            },
            "accessibility": null,
            "static": false,
            "start": 578,
            "end": 609
          }
        ],
        "start": 553,
        "end": 611
      },
      "declare": false,
      "start": 529,
      "end": 612
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 644
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
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 653
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 645,
            "end": 653
          }
        ],
        "start": 644,
        "end": 654
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Config",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 669
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 670,
                      "end": 678
                    },
                    "typeArguments": null,
                    "start": 670,
                    "end": 678
                  }
                ],
                "start": 669,
                "end": 679
              },
              "start": 663,
              "end": 679
            },
            "start": 661,
            "end": 679
          },
          "start": 655,
          "end": 679
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 682,
          "end": 686
        },
        "start": 680,
        "end": 686
      },
      "body": null,
      "expression": false,
      "start": 614,
      "end": 687
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null,
          "start": 689,
          "end": 702
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 710
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 712,
                      "end": 718
                    },
                    "start": 710,
                    "end": 718
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 705,
                  "end": 718
                }
              ],
              "start": 703,
              "end": 720
            }
          ],
          "start": 702,
          "end": 721
        },
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
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 733
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
                        "name": "count",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 741,
                        "end": 746
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 748,
                        "end": 749
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 741,
                      "end": 749
                    }
                  ],
                  "start": 735,
                  "end": 754
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 726,
                "end": 754
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 763
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 765,
                    "end": 771
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
                            "name": "count",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 778,
                            "end": 783
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ctx",
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
                                          "name": "count",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 793,
                                          "end": 798
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 800,
                                            "end": 806
                                          },
                                          "start": 798,
                                          "end": 806
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 793,
                                        "end": 806
                                      }
                                    ],
                                    "start": 791,
                                    "end": 808
                                  },
                                  "start": 789,
                                  "end": 808
                                },
                                "start": 786,
                                "end": 808
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "prefix": true,
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ctx",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 815,
                                  "end": 818
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "count",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 819,
                                  "end": 824
                                },
                                "optional": false,
                                "computed": false,
                                "start": 815,
                                "end": 824
                              },
                              "start": 813,
                              "end": 824
                            },
                            "id": null,
                            "generator": false,
                            "start": 785,
                            "end": 824
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 778,
                          "end": 824
                        }
                      ],
                      "start": 772,
                      "end": 829
                    }
                  ],
                  "optional": false,
                  "start": 765,
                  "end": 830
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 758,
                "end": 830
              }
            ],
            "start": 722,
            "end": 833
          }
        ],
        "optional": false,
        "start": 689,
        "end": 834
      },
      "directive": null,
      "start": 689,
      "end": 835
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 835
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
    "value": "LowInfer",
    "start": 5,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "PartialAssigner",
    "start": 33,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 59,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 64,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 78,
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
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 94,
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
    "value": "TContext",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 114,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 117,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 134,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "PropertyAssigner",
    "start": 139,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
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
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 175,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "PartialAssigner",
    "start": 196,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 212,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 227,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
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
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 244,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 254,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 284,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 294,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 305,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "AssignAction",
    "start": 315,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 328,
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
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "String",
    "value": "\"xstate.assign\"",
    "start": 348,
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
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 373,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "Meta",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 415,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 423,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 439,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "assignment",
    "start": 452,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "PropertyAssigner",
    "start": 464,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "LowInfer",
    "start": 481,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "AssignAction",
    "start": 504,
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
    "value": "TContext",
    "start": 517,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 529,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "Config",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 541,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 557,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 566,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "AssignAction",
    "start": 586,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 599,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 614,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 622,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 631,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 655,
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
    "value": "Config",
    "start": 663,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 670,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 689,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 705,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 712,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 726,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 741,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 758,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 778,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 786,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 793,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 813,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 819,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  }
]
```

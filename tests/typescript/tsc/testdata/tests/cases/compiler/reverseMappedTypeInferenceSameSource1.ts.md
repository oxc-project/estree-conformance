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
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 22,
              "end": 28
            },
            "default": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 37
          }
        ],
        "start": 11,
        "end": 38
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
              "start": 45,
              "end": 49
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
                  "start": 51,
                  "end": 52
                },
                "typeArguments": null,
                "start": 51,
                "end": 52
              },
              "start": 49,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 53
          }
        ],
        "start": 41,
        "end": 55
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 80
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
            "start": 89,
            "end": 95
          },
          "typeArguments": null,
          "start": 89,
          "end": 95
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
                    "start": 113,
                    "end": 119
                  },
                  "start": 111,
                  "end": 119
                },
                "start": 101,
                "end": 119
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 122,
                "end": 129
              },
              "start": 120,
              "end": 129
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 100,
            "end": 130
          }
        ],
        "start": 96,
        "end": 132
      },
      "declare": false,
      "start": 57,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reducer",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 145
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 150,
              "end": 153
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 153
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 171
              },
              "typeArguments": null,
              "start": 165,
              "end": 171
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 187
              },
              "typeArguments": null,
              "start": 174,
              "end": 187
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 187
          }
        ],
        "start": 145,
        "end": 188
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 203
                    },
                    "typeArguments": null,
                    "start": 202,
                    "end": 203
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 206,
                    "end": 215
                  }
                ],
                "start": 202,
                "end": 215
              },
              "start": 200,
              "end": 215
            },
            "start": 195,
            "end": 215
          },
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 228
                },
                "typeArguments": null,
                "start": 227,
                "end": 228
              },
              "start": 225,
              "end": 228
            },
            "start": 219,
            "end": 228
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "typeArguments": null,
            "start": 235,
            "end": 236
          },
          "start": 232,
          "end": 236
        },
        "start": 191,
        "end": 236
      },
      "declare": false,
      "start": 133,
      "end": 237
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReducersMapObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 261
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 266,
              "end": 269
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 269
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 287
              },
              "typeArguments": null,
              "start": 281,
              "end": 287
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 303
              },
              "typeArguments": null,
              "start": 290,
              "end": 303
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 271,
            "end": 303
          }
        ],
        "start": 261,
        "end": 304
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 324
            },
            "typeArguments": null,
            "start": 323,
            "end": 324
          },
          "start": 317,
          "end": 324
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reducer",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 334
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
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 336
                  },
                  "typeArguments": null,
                  "start": 335,
                  "end": 336
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 338
                  },
                  "typeArguments": null,
                  "start": 337,
                  "end": 338
                },
                "start": 335,
                "end": 339
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 342
                },
                "typeArguments": null,
                "start": 341,
                "end": 342
              }
            ],
            "start": 334,
            "end": 343
          },
          "start": 327,
          "end": 343
        },
        "optional": false,
        "readonly": null,
        "start": 307,
        "end": 346
      },
      "declare": false,
      "start": 239,
      "end": 347
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConfigureStoreOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 380
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 382
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 385,
              "end": 388
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 388
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 406
              },
              "typeArguments": null,
              "start": 400,
              "end": 406
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 422
              },
              "typeArguments": null,
              "start": 409,
              "end": 422
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 390,
            "end": 422
          }
        ],
        "start": 380,
        "end": 423
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
              "name": "reducer",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 435
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
                      "name": "Reducer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 444
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 445,
                            "end": 446
                          },
                          "typeArguments": null,
                          "start": 445,
                          "end": 446
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 448,
                            "end": 449
                          },
                          "typeArguments": null,
                          "start": 448,
                          "end": 449
                        }
                      ],
                      "start": 444,
                      "end": 450
                    },
                    "start": 437,
                    "end": 450
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReducersMapObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 453,
                      "end": 470
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 471,
                            "end": 472
                          },
                          "typeArguments": null,
                          "start": 471,
                          "end": 472
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 474,
                            "end": 475
                          },
                          "typeArguments": null,
                          "start": 474,
                          "end": 475
                        }
                      ],
                      "start": 470,
                      "end": 476
                    },
                    "start": 453,
                    "end": 476
                  }
                ],
                "start": 437,
                "end": 476
              },
              "start": 435,
              "end": 476
            },
            "accessibility": null,
            "static": false,
            "start": 428,
            "end": 477
          }
        ],
        "start": 424,
        "end": 479
      },
      "declare": false,
      "start": 349,
      "end": 479
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "configureStore",
        "optional": false,
        "typeAnnotation": null,
        "start": 498,
        "end": 512
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 517,
              "end": 520
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 513,
            "end": 520
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 523
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 538
              },
              "typeArguments": null,
              "start": 532,
              "end": 538
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 554
              },
              "typeArguments": null,
              "start": 541,
              "end": 554
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 522,
            "end": 554
          }
        ],
        "start": 512,
        "end": 555
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConfigureStoreOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 589
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 590,
                      "end": 591
                    },
                    "typeArguments": null,
                    "start": 590,
                    "end": 591
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 593,
                      "end": 594
                    },
                    "typeArguments": null,
                    "start": 593,
                    "end": 594
                  }
                ],
                "start": 589,
                "end": 595
              },
              "start": 568,
              "end": 595
            },
            "start": 566,
            "end": 595
          },
          "start": 559,
          "end": 595
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 600,
          "end": 604
        },
        "start": 598,
        "end": 604
      },
      "body": null,
      "expression": false,
      "start": 481,
      "end": 605
    },
    {
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
                "name": "reducer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Reducer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 626,
                      "end": 633
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 634,
                          "end": 640
                        }
                      ],
                      "start": 633,
                      "end": 641
                    },
                    "start": 626,
                    "end": 641
                  },
                  "start": 624,
                  "end": 641
                },
                "start": 617,
                "end": 641
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 650,
                  "end": 651
                },
                "id": null,
                "generator": false,
                "start": 644,
                "end": 651
              },
              "definite": false,
              "start": 617,
              "end": 651
            }
          ],
          "declare": false,
          "start": 611,
          "end": 652
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
                "name": "store1",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 667
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "configureStore",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 670,
                  "end": 684
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
                          "name": "reducer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 687,
                          "end": 694
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reducer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 687,
                          "end": 694
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 687,
                        "end": 694
                      }
                    ],
                    "start": 685,
                    "end": 696
                  }
                ],
                "optional": false,
                "start": 670,
                "end": 697
              },
              "definite": false,
              "start": 661,
              "end": 697
            }
          ],
          "declare": false,
          "start": 655,
          "end": 698
        }
      ],
      "start": 607,
      "end": 700
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
            "name": "counterReducer1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Reducer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 732
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 733,
                      "end": 739
                    }
                  ],
                  "start": 732,
                  "end": 740
                },
                "start": 725,
                "end": 740
              },
              "start": 723,
              "end": 740
            },
            "start": 708,
            "end": 740
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 749,
              "end": 750
            },
            "id": null,
            "generator": false,
            "start": 743,
            "end": 750
          },
          "definite": false,
          "start": 708,
          "end": 750
        }
      ],
      "declare": false,
      "start": 702,
      "end": 751
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
            "name": "store2",
            "optional": false,
            "typeAnnotation": null,
            "start": 759,
            "end": 765
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "configureStore",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 782
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
                      "name": "reducer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 787,
                      "end": 794
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
                            "name": "counter1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 802,
                            "end": 810
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "counterReducer1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 812,
                            "end": 827
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 802,
                          "end": 827
                        }
                      ],
                      "start": 796,
                      "end": 832
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 787,
                    "end": 832
                  }
                ],
                "start": 783,
                "end": 835
              }
            ],
            "optional": false,
            "start": 768,
            "end": 836
          },
          "definite": false,
          "start": 759,
          "end": 836
        }
      ],
      "declare": false,
      "start": 753,
      "end": 837
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 839,
      "end": 848
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 848
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
    "value": "Action",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "type",
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
    "value": "T",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "UnknownAction",
    "start": 67,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 81,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "extraProps",
    "start": 101,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "unknown",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 133,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Reducer",
    "start": 138,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 157,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "UnknownAction",
    "start": 174,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 206,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 232,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 235,
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
    "value": "type",
    "start": 239,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "ReducersMapObject",
    "start": 244,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "type": "Identifier",
    "value": "any",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 273,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "UnknownAction",
    "start": 290,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 314,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Reducer",
    "start": 327,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 349,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "ConfigureStoreOptions",
    "start": 359,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 385,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 392,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "UnknownAction",
    "start": 409,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 428,
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
    "value": "Reducer",
    "start": 437,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "ReducersMapObject",
    "start": 453,
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
    "value": "S",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 481,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 489,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "configureStore",
    "start": 498,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 524,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "UnknownAction",
    "start": 541,
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
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 559,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "ConfigureStoreOptions",
    "start": 568,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 611,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 617,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "Reducer",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 647,
    "end": 649
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "const",
    "start": 655,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "store1",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "configureStore",
    "start": 670,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 687,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
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
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 702,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "counterReducer1",
    "start": 708,
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
    "value": "Reducer",
    "start": 725,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 746,
    "end": 748
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 753,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "store2",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "configureStore",
    "start": 768,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 787,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "counter1",
    "start": 802,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "counterReducer1",
    "start": 812,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
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
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  }
]
```

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
        "name": "ObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 22
          }
        ],
        "start": 15,
        "end": 23
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 36,
                  "end": 44
                },
                "start": 36,
                "end": 44
              },
              "start": 34,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__source",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 56
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
                    "name": "source",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Source",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 73
                        },
                        "typeArguments": null,
                        "start": 67,
                        "end": 73
                      },
                      "start": 65,
                      "end": 73
                    },
                    "start": 59,
                    "end": 73
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 78,
                    "end": 82
                  },
                  "start": 75,
                  "end": 82
                },
                "start": 58,
                "end": 82
              },
              "start": 56,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 48,
            "end": 83
          }
        ],
        "start": 26,
        "end": 85
      },
      "declare": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Field",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 98
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 105
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 105
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 110
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 107,
            "end": 125
          }
        ],
        "start": 98,
        "end": 126
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
              "name": "__key",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 138
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 149
                        },
                        "typeArguments": null,
                        "start": 146,
                        "end": 149
                      },
                      "start": 144,
                      "end": 149
                    },
                    "start": 141,
                    "end": 149
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 154,
                    "end": 158
                  },
                  "start": 151,
                  "end": 158
                },
                "start": 140,
                "end": 158
              },
              "start": 138,
              "end": 158
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 159
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__source",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 170
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
                    "name": "source",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Source",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 187
                        },
                        "typeArguments": null,
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "start": 173,
                    "end": 187
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 192,
                    "end": 196
                  },
                  "start": 189,
                  "end": 196
                },
                "start": 172,
                "end": 196
              },
              "start": 170,
              "end": 196
            },
            "accessibility": null,
            "static": false,
            "start": 162,
            "end": 197
          }
        ],
        "start": 129,
        "end": 199
      },
      "declare": false,
      "start": 88,
      "end": 200
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
            "name": "object",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "Source",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 231
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 225,
                      "end": 231
                    }
                  ],
                  "start": 224,
                  "end": 232
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
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
                            "name": "Fields",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 248
                          },
                          "constraint": {
                            "type": "TSMappedType",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 264,
                              "end": 267
                            },
                            "constraint": {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Fields",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 277,
                                  "end": 283
                                },
                                "typeArguments": null,
                                "start": 277,
                                "end": 283
                              },
                              "start": 271,
                              "end": 283
                            },
                            "nameType": null,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Field",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 286,
                                "end": 291
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Source",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 292,
                                      "end": 298
                                    },
                                    "typeArguments": null,
                                    "start": 292,
                                    "end": 298
                                  },
                                  {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Key",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 300,
                                          "end": 303
                                        },
                                        "typeArguments": null,
                                        "start": 300,
                                        "end": 303
                                      },
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 306,
                                        "end": 312
                                      }
                                    ],
                                    "start": 300,
                                    "end": 312
                                  }
                                ],
                                "start": 291,
                                "end": 313
                              },
                              "start": 286,
                              "end": 313
                            },
                            "optional": false,
                            "readonly": null,
                            "start": 257,
                            "end": 318
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 242,
                          "end": 318
                        }
                      ],
                      "start": 238,
                      "end": 320
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 333,
                                  "end": 337
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 339,
                                    "end": 345
                                  },
                                  "start": 337,
                                  "end": 345
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 333,
                                "end": 346
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fields",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 349,
                                  "end": 355
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
                                          "name": "Fields",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 357,
                                          "end": 363
                                        },
                                        "typeArguments": null,
                                        "start": 357,
                                        "end": 363
                                      },
                                      {
                                        "type": "TSFunctionType",
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Fields",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 373,
                                              "end": 379
                                            },
                                            "typeArguments": null,
                                            "start": 373,
                                            "end": 379
                                          },
                                          "start": 370,
                                          "end": 379
                                        },
                                        "start": 367,
                                        "end": 379
                                      }
                                    ],
                                    "start": 357,
                                    "end": 380
                                  },
                                  "start": 355,
                                  "end": 380
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 349,
                                "end": 381
                              }
                            ],
                            "start": 329,
                            "end": 383
                          },
                          "start": 327,
                          "end": 383
                        },
                        "start": 321,
                        "end": 383
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjectType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 398
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Source",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 399,
                                "end": 405
                              },
                              "typeArguments": null,
                              "start": 399,
                              "end": 405
                            }
                          ],
                          "start": 398,
                          "end": 406
                        },
                        "start": 388,
                        "end": 406
                      },
                      "start": 385,
                      "end": 406
                    },
                    "start": 238,
                    "end": 406
                  },
                  "start": 235,
                  "end": 406
                },
                "start": 224,
                "end": 406
              },
              "start": 222,
              "end": 406
            },
            "start": 216,
            "end": 406
          },
          "init": null,
          "definite": false,
          "start": 216,
          "end": 406
        }
      ],
      "declare": true,
      "start": 202,
      "end": 407
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferValueFromObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 438
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 443
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectType",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 462
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 463,
                    "end": 466
                  }
                ],
                "start": 462,
                "end": 467
              },
              "start": 452,
              "end": 467
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 467
          }
        ],
        "start": 438,
        "end": 468
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 477
          },
          "typeArguments": null,
          "start": 473,
          "end": 477
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectType",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 496
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
                    "name": "Source",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 509
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 503,
                  "end": 509
                },
                "start": 497,
                "end": 509
              }
            ],
            "start": 496,
            "end": 510
          },
          "start": 486,
          "end": 510
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Source",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 519
          },
          "typeArguments": null,
          "start": 513,
          "end": 519
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 522,
          "end": 527
        },
        "start": 473,
        "end": 527
      },
      "declare": false,
      "start": 409,
      "end": 528
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldResolver",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 548
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 555
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 549,
            "end": 555
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 562
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectType",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 581
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 582,
                    "end": 585
                  }
                ],
                "start": 581,
                "end": 586
              },
              "start": 571,
              "end": 586
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 557,
            "end": 586
          }
        ],
        "start": 548,
        "end": 587
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Source",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 608
                },
                "typeArguments": null,
                "start": 602,
                "end": 608
              },
              "start": 600,
              "end": 608
            },
            "start": 594,
            "end": 608
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferValueFromObjectType",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 638
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 644
                  },
                  "typeArguments": null,
                  "start": 639,
                  "end": 644
                }
              ],
              "start": 638,
              "end": 645
            },
            "start": 614,
            "end": 645
          },
          "start": 611,
          "end": 645
        },
        "start": 590,
        "end": 645
      },
      "declare": false,
      "start": 530,
      "end": 646
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldFuncArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 653,
        "end": 666
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Source",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 673
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 667,
            "end": 673
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 679
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectType",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 698
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 699,
                    "end": 702
                  }
                ],
                "start": 698,
                "end": 703
              },
              "start": 688,
              "end": 703
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 675,
            "end": 703
          }
        ],
        "start": 666,
        "end": 704
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
              "start": 711,
              "end": 715
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 717,
                  "end": 721
                },
                "typeArguments": null,
                "start": 717,
                "end": 721
              },
              "start": 715,
              "end": 721
            },
            "accessibility": null,
            "static": false,
            "start": 711,
            "end": 722
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolve",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 732
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldResolver",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 734,
                  "end": 747
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Source",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 754
                      },
                      "typeArguments": null,
                      "start": 748,
                      "end": 754
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 756,
                        "end": 760
                      },
                      "typeArguments": null,
                      "start": 756,
                      "end": 760
                    }
                  ],
                  "start": 747,
                  "end": 761
                },
                "start": 734,
                "end": 761
              },
              "start": 732,
              "end": 761
            },
            "accessibility": null,
            "static": false,
            "start": 725,
            "end": 762
          }
        ],
        "start": 707,
        "end": 764
      },
      "declare": false,
      "start": 648,
      "end": 765
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
            "name": "field",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                        "name": "Source",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 795
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 789,
                      "end": 795
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 797,
                        "end": 801
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjectType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 810,
                          "end": 820
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 821,
                              "end": 824
                            }
                          ],
                          "start": 820,
                          "end": 825
                        },
                        "start": 810,
                        "end": 825
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 797,
                      "end": 825
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 830
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 839,
                        "end": 845
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 827,
                      "end": 845
                    }
                  ],
                  "start": 788,
                  "end": 846
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FieldFuncArgs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 870
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Source",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 871,
                                "end": 877
                              },
                              "typeArguments": null,
                              "start": 871,
                              "end": 877
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 879,
                                "end": 883
                              },
                              "typeArguments": null,
                              "start": 879,
                              "end": 883
                            }
                          ],
                          "start": 870,
                          "end": 884
                        },
                        "start": 857,
                        "end": 884
                      },
                      "start": 855,
                      "end": 884
                    },
                    "start": 850,
                    "end": 884
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 890,
                      "end": 895
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Source",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 896,
                            "end": 902
                          },
                          "typeArguments": null,
                          "start": 896,
                          "end": 902
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 904,
                            "end": 907
                          },
                          "typeArguments": null,
                          "start": 904,
                          "end": 907
                        }
                      ],
                      "start": 895,
                      "end": 908
                    },
                    "start": 890,
                    "end": 908
                  },
                  "start": 887,
                  "end": 908
                },
                "start": 788,
                "end": 908
              },
              "start": 786,
              "end": 908
            },
            "start": 781,
            "end": 908
          },
          "init": null,
          "definite": false,
          "start": 781,
          "end": 908
        }
      ],
      "declare": true,
      "start": 767,
      "end": 909
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null,
        "start": 916,
        "end": 925
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 933
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 935,
                "end": 941
              },
              "start": 933,
              "end": 941
            },
            "accessibility": null,
            "static": false,
            "start": 930,
            "end": 941
          }
        ],
        "start": 928,
        "end": 943
      },
      "declare": false,
      "start": 911,
      "end": 944
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1000,
            "end": 1001
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1010
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1011,
                      "end": 1020
                    },
                    "typeArguments": null,
                    "start": 1011,
                    "end": 1020
                  }
                ],
                "start": 1010,
                "end": 1021
              },
              "arguments": [],
              "optional": false,
              "start": 1004,
              "end": 1023
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
                      "start": 1028,
                      "end": 1032
                    },
                    "value": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 1034,
                      "end": 1037
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1028,
                    "end": 1037
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1041,
                      "end": 1047
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1062,
                              "end": 1063
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "field",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1065,
                                "end": 1070
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
                                        "name": "type",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1079,
                                        "end": 1083
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1085,
                                        "end": 1086
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1079,
                                      "end": 1086
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1094,
                                        "end": 1101
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
                                        "typeParameters": null,
                                        "params": [],
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
                                                      "name": "foo",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1133,
                                                      "end": 1136
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "value": 100,
                                                      "raw": "100",
                                                      "start": 1138,
                                                      "end": 1141
                                                    },
                                                    "method": false,
                                                    "shorthand": false,
                                                    "computed": false,
                                                    "optional": false,
                                                    "start": 1133,
                                                    "end": 1141
                                                  }
                                                ],
                                                "start": 1121,
                                                "end": 1152
                                              },
                                              "start": 1114,
                                              "end": 1153
                                            }
                                          ],
                                          "start": 1104,
                                          "end": 1161
                                        },
                                        "expression": false,
                                        "start": 1101,
                                        "end": 1161
                                      },
                                      "method": true,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1094,
                                      "end": 1161
                                    }
                                  ],
                                  "start": 1071,
                                  "end": 1168
                                }
                              ],
                              "optional": false,
                              "start": 1065,
                              "end": 1169
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1062,
                            "end": 1169
                          }
                        ],
                        "start": 1056,
                        "end": 1174
                      },
                      "id": null,
                      "generator": false,
                      "start": 1049,
                      "end": 1175
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1041,
                    "end": 1175
                  }
                ],
                "start": 1024,
                "end": 1178
              }
            ],
            "optional": false,
            "start": 1004,
            "end": 1179
          },
          "definite": false,
          "start": 1000,
          "end": 1179
        }
      ],
      "declare": false,
      "start": 994,
      "end": 1180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1180
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
    "value": "ObjectType",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "__source",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 75,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 88,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 93,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 107,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 111,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
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
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "__key",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 141,
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
    "value": "Key",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 151,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "__source",
    "start": 162,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 189,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 202,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 242,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 264,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 268,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 286,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 370,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 385,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 388,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 399,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 409,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "InferValueFromObjectType",
    "start": 414,
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
    "value": "Type",
    "start": 439,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 444,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 452,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 473,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 478,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 486,
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
    "value": "infer",
    "start": 497,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 530,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "FieldResolver",
    "start": 535,
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
    "value": "Source",
    "start": 549,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 557,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 563,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 571,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 594,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 602,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 611,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "InferValueFromObjectType",
    "start": 614,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 639,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 648,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "FieldFuncArgs",
    "start": 653,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "Source",
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
    "value": "Type",
    "start": 675,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 680,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 688,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 725,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "FieldResolver",
    "start": 734,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 748,
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
    "value": "Type",
    "start": 756,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 767,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 775,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 781,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 797,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 802,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 810,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 827,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 831,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 850,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "FieldFuncArgs",
    "start": 857,
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
    "value": "Source",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 879,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 887,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "Field",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 896,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 904,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 911,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 916,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 994,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1004,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 1011,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1028,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 1041,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1052,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 1065,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1079,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1094,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1114,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1138,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180
  }
]
```

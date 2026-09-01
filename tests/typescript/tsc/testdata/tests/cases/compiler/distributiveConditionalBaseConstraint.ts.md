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
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
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
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 71,
            "end": 85
          }
        ],
        "start": 69,
        "end": 87
      },
      "declare": false,
      "start": 57,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 102
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
              "start": 103,
              "end": 104
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 117
              },
              "typeArguments": null,
              "start": 113,
              "end": 117
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 117
          }
        ],
        "start": 102,
        "end": 118
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
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 129
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
                    "start": 131,
                    "end": 132
                  },
                  "typeArguments": null,
                  "start": 131,
                  "end": 132
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "values",
                    "raw": "\"values\"",
                    "start": 133,
                    "end": 141
                  },
                  "start": 133,
                  "end": 141
                },
                "start": 131,
                "end": 142
              },
              "start": 129,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 142
          }
        ],
        "start": 121,
        "end": 144
      },
      "declare": false,
      "start": 90,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FromObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 162
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 170
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 185
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 186,
                    "end": 192
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 198
                    },
                    "typeArguments": null,
                    "start": 194,
                    "end": 198
                  }
                ],
                "start": 185,
                "end": 199
              },
              "start": 179,
              "end": 199
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 199
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 206
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Context",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 222
              },
              "typeArguments": null,
              "start": 215,
              "end": 222
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 201,
            "end": 222
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 229
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 244
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
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 256
                      },
                      "typeArguments": null,
                      "start": 251,
                      "end": 256
                    },
                    "start": 245,
                    "end": 256
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 262
                    },
                    "typeArguments": null,
                    "start": 258,
                    "end": 262
                  }
                ],
                "start": 244,
                "end": 263
              },
              "start": 238,
              "end": 263
            },
            "default": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 274
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 289
                  },
                  "typeArguments": null,
                  "start": 284,
                  "end": 289
                },
                "start": 278,
                "end": 289
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 299
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FromSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 310
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Context",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 311,
                              "end": 318
                            },
                            "typeArguments": null,
                            "start": 311,
                            "end": 318
                          },
                          {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 320,
                                "end": 325
                              },
                              "typeArguments": null,
                              "start": 320,
                              "end": 325
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 326,
                                "end": 329
                              },
                              "typeArguments": null,
                              "start": 326,
                              "end": 329
                            },
                            "start": 320,
                            "end": 330
                          }
                        ],
                        "start": 310,
                        "end": 331
                      },
                      "start": 300,
                      "end": 331
                    }
                  ],
                  "start": 299,
                  "end": 332
                },
                "start": 292,
                "end": 332
              },
              "optional": false,
              "readonly": null,
              "start": 266,
              "end": 335
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 335
          }
        ],
        "start": 162,
        "end": 336
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 344
        },
        "typeArguments": null,
        "start": 339,
        "end": 344
      },
      "declare": false,
      "start": 147,
      "end": 345
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FromSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 362
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 370
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 385
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 386,
                    "end": 392
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 398
                    },
                    "typeArguments": null,
                    "start": 394,
                    "end": 398
                  }
                ],
                "start": 385,
                "end": 399
              },
              "start": 379,
              "end": 399
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 363,
            "end": 399
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 402
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 401,
            "end": 402
          }
        ],
        "start": 362,
        "end": 403
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 409
          },
          "typeArguments": null,
          "start": 408,
          "end": 409
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 422
          },
          "typeArguments": null,
          "start": 418,
          "end": 422
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FromSchema",
            "optional": false,
            "typeAnnotation": null,
            "start": 425,
            "end": 435
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 443
                },
                "typeArguments": null,
                "start": 436,
                "end": 443
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Context",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 452
                  },
                  "typeArguments": null,
                  "start": 445,
                  "end": 452
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 459,
                    "end": 466
                  },
                  "start": 453,
                  "end": 466
                },
                "start": 445,
                "end": 467
              }
            ],
            "start": 435,
            "end": 468
          },
          "start": 425,
          "end": 468
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 471,
          "end": 476
        },
        "start": 408,
        "end": 476
      },
      "declare": false,
      "start": 347,
      "end": 477
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSONSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 554
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSBooleanKeyword",
            "start": 561,
            "end": 568
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 581
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
                        "name": "items",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 595
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSONSchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 598,
                            "end": 608
                          },
                          "typeArguments": null,
                          "start": 598,
                          "end": 608
                        },
                        "start": 596,
                        "end": 608
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 590,
                      "end": 609
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "additionalItems",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 616,
                        "end": 631
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSONSchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 634,
                            "end": 644
                          },
                          "typeArguments": null,
                          "start": 634,
                          "end": 644
                        },
                        "start": 632,
                        "end": 644
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 616,
                      "end": 645
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 662
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSONSchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 665,
                            "end": 675
                          },
                          "typeArguments": null,
                          "start": 665,
                          "end": 675
                        },
                        "start": 663,
                        "end": 675
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 652,
                      "end": 676
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "additionalProperties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 683,
                        "end": 703
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSONSchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 706,
                            "end": 716
                          },
                          "typeArguments": null,
                          "start": 706,
                          "end": 716
                        },
                        "start": 704,
                        "end": 716
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 683,
                      "end": 717
                    }
                  ],
                  "start": 582,
                  "end": 723
                }
              ],
              "start": 581,
              "end": 724
            },
            "start": 573,
            "end": 724
          }
        ],
        "start": 559,
        "end": 724
      },
      "declare": false,
      "start": 539,
      "end": 725
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParseSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 884,
        "end": 895
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 896,
              "end": 902
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSONSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 921
              },
              "typeArguments": null,
              "start": 911,
              "end": 921
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 896,
            "end": 921
          }
        ],
        "start": 895,
        "end": 922
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 925,
        "end": 932
      },
      "declare": false,
      "start": 879,
      "end": 933
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RemoveInvalidAdditionalItems",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 968
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 975
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSONSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 984,
                "end": 994
              },
              "typeArguments": null,
              "start": 984,
              "end": 994
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 969,
            "end": 994
          }
        ],
        "start": 968,
        "end": 995
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SCHEMA",
            "optional": false,
            "typeAnnotation": null,
            "start": 998,
            "end": 1004
          },
          "typeArguments": null,
          "start": 998,
          "end": 1004
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1013,
            "end": 1021
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
                      "name": "items",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1026,
                      "end": 1031
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSONSchema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1033,
                          "end": 1043
                        },
                        "typeArguments": null,
                        "start": 1033,
                        "end": 1043
                      },
                      "start": 1031,
                      "end": 1043
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1026,
                    "end": 1044
                  }
                ],
                "start": 1022,
                "end": 1046
              }
            ],
            "start": 1021,
            "end": 1047
          },
          "start": 1013,
          "end": 1047
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1058
            },
            "typeArguments": null,
            "start": 1052,
            "end": 1058
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 1067,
              "end": 1075
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
                        "name": "additionalItems",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1078,
                        "end": 1093
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSONSchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1095,
                            "end": 1105
                          },
                          "typeArguments": null,
                          "start": 1095,
                          "end": 1105
                        },
                        "start": 1093,
                        "end": 1105
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1078,
                      "end": 1105
                    }
                  ],
                  "start": 1076,
                  "end": 1107
                }
              ],
              "start": 1075,
              "end": 1108
            },
            "start": 1067,
            "end": 1108
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1121
            },
            "typeArguments": null,
            "start": 1115,
            "end": 1121
          },
          "falseType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SCHEMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1134
                },
                "typeArguments": null,
                "start": 1128,
                "end": 1134
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1145
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
                            "name": "additionalItems",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1148,
                            "end": 1163
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 1165,
                                "end": 1169
                              },
                              "start": 1165,
                              "end": 1169
                            },
                            "start": 1163,
                            "end": 1169
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1148,
                          "end": 1169
                        }
                      ],
                      "start": 1146,
                      "end": 1171
                    }
                  ],
                  "start": 1145,
                  "end": 1172
                },
                "start": 1137,
                "end": 1172
              }
            ],
            "start": 1128,
            "end": 1172
          },
          "start": 1052,
          "end": 1172
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1183
            },
            "typeArguments": null,
            "start": 1177,
            "end": 1183
          },
          "extendsType": {
            "type": "TSBooleanKeyword",
            "start": 1192,
            "end": 1199
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1206,
              "end": 1212
            },
            "typeArguments": null,
            "start": 1206,
            "end": 1212
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 1219,
              "end": 1223
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SCHEMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1224,
                    "end": 1230
                  },
                  "typeArguments": null,
                  "start": 1224,
                  "end": 1230
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "additionalItems",
                    "raw": "\"additionalItems\"",
                    "start": 1232,
                    "end": 1249
                  },
                  "start": 1232,
                  "end": 1249
                }
              ],
              "start": 1223,
              "end": 1250
            },
            "start": 1219,
            "end": 1250
          },
          "start": 1177,
          "end": 1250
        },
        "start": 998,
        "end": 1250
      },
      "declare": false,
      "start": 935,
      "end": 1251
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RemoveInvalidAdditionalProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 1258,
        "end": 1291
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1292,
              "end": 1298
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSONSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 1307,
                "end": 1317
              },
              "typeArguments": null,
              "start": 1307,
              "end": 1317
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1292,
            "end": 1317
          }
        ],
        "start": 1291,
        "end": 1318
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SCHEMA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1321,
            "end": 1327
          },
          "typeArguments": null,
          "start": 1321,
          "end": 1327
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1336,
            "end": 1344
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
                      "name": "additionalProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1349,
                      "end": 1369
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSONSchema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1371,
                          "end": 1381
                        },
                        "typeArguments": null,
                        "start": 1371,
                        "end": 1381
                      },
                      "start": 1369,
                      "end": 1381
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1349,
                    "end": 1382
                  }
                ],
                "start": 1345,
                "end": 1384
              }
            ],
            "start": 1344,
            "end": 1385
          },
          "start": 1336,
          "end": 1385
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1390,
              "end": 1396
            },
            "typeArguments": null,
            "start": 1390,
            "end": 1396
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 1405,
              "end": 1413
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
                        "name": "properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1416,
                        "end": 1426
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSONSchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1428,
                            "end": 1438
                          },
                          "typeArguments": null,
                          "start": 1428,
                          "end": 1438
                        },
                        "start": 1426,
                        "end": 1438
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1416,
                      "end": 1438
                    }
                  ],
                  "start": 1414,
                  "end": 1440
                }
              ],
              "start": 1413,
              "end": 1441
            },
            "start": 1405,
            "end": 1441
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1454
            },
            "typeArguments": null,
            "start": 1448,
            "end": 1454
          },
          "falseType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SCHEMA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1467
                },
                "typeArguments": null,
                "start": 1461,
                "end": 1467
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1470,
                  "end": 1478
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
                            "name": "properties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1481,
                            "end": 1491
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 1493,
                              "end": 1495
                            },
                            "start": 1491,
                            "end": 1495
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1481,
                          "end": 1495
                        }
                      ],
                      "start": 1479,
                      "end": 1497
                    }
                  ],
                  "start": 1478,
                  "end": 1498
                },
                "start": 1470,
                "end": 1498
              }
            ],
            "start": 1461,
            "end": 1498
          },
          "start": 1390,
          "end": 1498
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1509
            },
            "typeArguments": null,
            "start": 1503,
            "end": 1509
          },
          "extendsType": {
            "type": "TSBooleanKeyword",
            "start": 1518,
            "end": 1525
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1532,
              "end": 1538
            },
            "typeArguments": null,
            "start": 1532,
            "end": 1538
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 1545,
              "end": 1549
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SCHEMA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1550,
                    "end": 1556
                  },
                  "typeArguments": null,
                  "start": 1550,
                  "end": 1556
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "additionalProperties",
                    "raw": "\"additionalProperties\"",
                    "start": 1558,
                    "end": 1580
                  },
                  "start": 1558,
                  "end": 1580
                }
              ],
              "start": 1549,
              "end": 1581
            },
            "start": 1545,
            "end": 1581
          },
          "start": 1503,
          "end": 1581
        },
        "start": 1321,
        "end": 1581
      },
      "declare": false,
      "start": 1253,
      "end": 1582
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MergeSubSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1589,
        "end": 1603
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SUB_SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1607,
              "end": 1617
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSONSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 1626,
                "end": 1636
              },
              "typeArguments": null,
              "start": 1626,
              "end": 1636
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1607,
            "end": 1636
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "CLEANED_SUB_SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1640,
              "end": 1658
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSONSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 1667,
                "end": 1677
              },
              "typeArguments": null,
              "start": 1667,
              "end": 1677
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RemoveInvalidAdditionalProperties",
                "optional": false,
                "typeAnnotation": null,
                "start": 1680,
                "end": 1713
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RemoveInvalidAdditionalItems",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1719,
                      "end": 1747
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SUB_SCHEMA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1748,
                            "end": 1758
                          },
                          "typeArguments": null,
                          "start": 1748,
                          "end": 1758
                        }
                      ],
                      "start": 1747,
                      "end": 1759
                    },
                    "start": 1719,
                    "end": 1759
                  }
                ],
                "start": 1713,
                "end": 1763
              },
              "start": 1680,
              "end": 1763
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1640,
            "end": 1763
          }
        ],
        "start": 1603,
        "end": 1766
      },
      "typeAnnotation": {
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
              "start": 1769,
              "end": 1773
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSONSchema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1774,
                    "end": 1784
                  },
                  "typeArguments": null,
                  "start": 1774,
                  "end": 1784
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CLEANED_SUB_SCHEMA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1792,
                      "end": 1810
                    },
                    "typeArguments": null,
                    "start": 1792,
                    "end": 1810
                  },
                  "start": 1786,
                  "end": 1810
                }
              ],
              "start": 1773,
              "end": 1811
            },
            "start": 1769,
            "end": 1811
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CLEANED_SUB_SCHEMA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1814,
              "end": 1832
            },
            "typeArguments": null,
            "start": 1814,
            "end": 1832
          }
        ],
        "start": 1769,
        "end": 1832
      },
      "declare": false,
      "start": 1584,
      "end": 1833
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecurseOnAllOfSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1979,
        "end": 1999
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SUB_SCHEMAS",
              "optional": false,
              "typeAnnotation": null,
              "start": 2000,
              "end": 2011
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSONSchema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2029,
                    "end": 2039
                  },
                  "typeArguments": null,
                  "start": 2029,
                  "end": 2039
                },
                "start": 2029,
                "end": 2041
              },
              "start": 2020,
              "end": 2041
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2000,
            "end": 2041
          }
        ],
        "start": 1999,
        "end": 2042
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SUB_SCHEMAS",
            "optional": false,
            "typeAnnotation": null,
            "start": 2047,
            "end": 2058
          },
          "typeArguments": null,
          "start": 2047,
          "end": 2058
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SUB_SCHEMAS_HEAD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2083,
                    "end": 2099
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2083,
                  "end": 2099
                },
                "start": 2077,
                "end": 2099
              }
            ],
            "start": 2076,
            "end": 2100
          },
          "start": 2067,
          "end": 2100
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SUB_SCHEMAS_HEAD",
              "optional": false,
              "typeAnnotation": null,
              "start": 2107,
              "end": 2123
            },
            "typeArguments": null,
            "start": 2107,
            "end": 2123
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSONSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 2132,
              "end": 2142
            },
            "typeArguments": null,
            "start": 2132,
            "end": 2142
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParseSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 2151,
              "end": 2162
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MergeSubSchema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2163,
                    "end": 2177
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SUB_SCHEMAS_HEAD",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2178,
                          "end": 2194
                        },
                        "typeArguments": null,
                        "start": 2178,
                        "end": 2194
                      }
                    ],
                    "start": 2177,
                    "end": 2195
                  },
                  "start": 2163,
                  "end": 2195
                }
              ],
              "start": 2162,
              "end": 2196
            },
            "start": 2151,
            "end": 2196
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2205,
            "end": 2210
          },
          "start": 2107,
          "end": 2210
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2217,
          "end": 2222
        },
        "start": 2047,
        "end": 2222
      },
      "declare": false,
      "start": 1974,
      "end": 2223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 2223
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 90,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Wrapped",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 105,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 132,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"values\"",
    "start": 133,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 147,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "FromObject",
    "start": 152,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 163,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 171,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 194,
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
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 201,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 207,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 224,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 230,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 238,
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
    "value": "keyof",
    "start": 245,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 251,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 258,
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
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 271,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 275,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Wrapped",
    "start": 292,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "FromSchema",
    "start": 300,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 311,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 320,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 347,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "FromSchema",
    "start": 352,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 363,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 371,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 379,
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
    "value": "string",
    "start": 386,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 394,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 401,
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
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 410,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "FromSchema",
    "start": 425,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 436,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 453,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 459,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 539,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 544,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 561,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 573,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 590,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 598,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "additionalItems",
    "start": 616,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 634,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 652,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 662,
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
    "value": "JSONSchema",
    "start": 665,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "additionalProperties",
    "start": 683,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 706,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 879,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "ParseSchema",
    "start": 884,
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
    "value": "SCHEMA",
    "start": 896,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 903,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 911,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 925,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 935,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "RemoveInvalidAdditionalItems",
    "start": 940,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 969,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 976,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 984,
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
    "value": "SCHEMA",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1005,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1013,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 1033,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1059,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1067,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "additionalItems",
    "start": 1078,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 1095,
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
    "value": ">",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1137,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "additionalItems",
    "start": 1148,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1177,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1184,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1192,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1206,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1219,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1224,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "String",
    "value": "\"additionalItems\"",
    "start": 1232,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1253,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "RemoveInvalidAdditionalProperties",
    "start": 1258,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1292,
    "end": 1298
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1299,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 1307,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1321,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1328,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1336,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "additionalProperties",
    "start": 1349,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 1371,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "?",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1390,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1397,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1405,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 1416,
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
    "value": "JSONSchema",
    "start": 1428,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1448,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1461,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1470,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 1481,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1503,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1510,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1518,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1532,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1545,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "SCHEMA",
    "start": 1550,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "String",
    "value": "\"additionalProperties\"",
    "start": 1558,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1584,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "MergeSubSchema",
    "start": 1589,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "SUB_SCHEMA",
    "start": 1607,
    "end": 1617
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1618,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 1626,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "CLEANED_SUB_SCHEMA",
    "start": 1640,
    "end": 1658
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1659,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 1667,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "RemoveInvalidAdditionalProperties",
    "start": 1680,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "RemoveInvalidAdditionalItems",
    "start": 1719,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "SUB_SCHEMA",
    "start": 1748,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1769,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 1774,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1786,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "CLEANED_SUB_SCHEMA",
    "start": 1792,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "CLEANED_SUB_SCHEMA",
    "start": 1814,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1974,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "RecurseOnAllOfSchema",
    "start": 1979,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "SUB_SCHEMAS",
    "start": 2000,
    "end": 2011
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2012,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2020,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 2029,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "SUB_SCHEMAS",
    "start": 2047,
    "end": 2058
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2059,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2067,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2077,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "SUB_SCHEMAS_HEAD",
    "start": 2083,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "SUB_SCHEMAS_HEAD",
    "start": 2107,
    "end": 2123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2124,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "JSONSchema",
    "start": 2132,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "ParseSchema",
    "start": 2151,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "MergeSubSchema",
    "start": 2163,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "SUB_SCHEMAS_HEAD",
    "start": 2178,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2205,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2217,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2222,
    "end": 2223
  }
]
```

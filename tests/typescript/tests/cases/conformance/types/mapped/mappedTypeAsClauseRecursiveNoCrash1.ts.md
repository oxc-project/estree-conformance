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
          "name": "FlattenType",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 80
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
                "start": 81,
                "end": 87
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 96,
                "end": 102
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 81,
              "end": 102
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 110
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 104,
              "end": 110
            }
          ],
          "start": 80,
          "end": 111
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Key",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 122
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Source",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 138
              },
              "typeArguments": null,
              "start": 132,
              "end": 138
            },
            "start": 126,
            "end": 138
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 145
              },
              "typeArguments": null,
              "start": 142,
              "end": 145
            },
            "extendsType": {
              "type": "TSStringKeyword",
              "start": 154,
              "end": 160
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
                    "name": "Source",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 173
                  },
                  "typeArguments": null,
                  "start": 167,
                  "end": 173
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 177
                  },
                  "typeArguments": null,
                  "start": 174,
                  "end": 177
                },
                "start": 167,
                "end": 178
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 187,
                "end": 193
              },
              "trueType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 202,
                    "end": 205
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".",
                      "cooked": "."
                    },
                    "tail": false,
                    "start": 208,
                    "end": 212
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 259,
                    "end": 261
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 208
                    },
                    "typeArguments": null,
                    "start": 205,
                    "end": 208
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FlattenType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 229
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
                                    "name": "Source",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 230,
                                    "end": 236
                                  },
                                  "typeArguments": null,
                                  "start": 230,
                                  "end": 236
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Key",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 237,
                                    "end": 240
                                  },
                                  "typeArguments": null,
                                  "start": 237,
                                  "end": 240
                                },
                                "start": 230,
                                "end": 241
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Target",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 243,
                                  "end": 249
                                },
                                "typeArguments": null,
                                "start": 243,
                                "end": 249
                              }
                            ],
                            "start": 229,
                            "end": 250
                          },
                          "start": 218,
                          "end": 250
                        },
                        "start": 212,
                        "end": 250
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 253,
                        "end": 259
                      }
                    ],
                    "start": 212,
                    "end": 259
                  }
                ],
                "start": 202,
                "end": 261
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 273
                },
                "typeArguments": null,
                "start": 270,
                "end": 273
              },
              "start": 167,
              "end": 273
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 280,
              "end": 285
            },
            "start": 142,
            "end": 285
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Target",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 296
            },
            "typeArguments": null,
            "start": 290,
            "end": 296
          },
          "optional": "-",
          "readonly": null,
          "start": 114,
          "end": 299
        },
        "declare": false,
        "start": 64,
        "end": 300
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 57,
      "end": 300
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldSelect",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 318
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
              "name": "table",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 330
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 332,
                "end": 338
              },
              "start": 330,
              "end": 338
            },
            "accessibility": null,
            "static": false,
            "start": 325,
            "end": 339
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 347
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 349,
                "end": 355
              },
              "start": 347,
              "end": 355
            },
            "accessibility": null,
            "static": false,
            "start": 342,
            "end": 356
          }
        ],
        "start": 321,
        "end": 358
      },
      "declare": false,
      "start": 302,
      "end": 359
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Address",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 373
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
              "name": "postCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
            },
            "accessibility": null,
            "static": false,
            "start": 380,
            "end": 397
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 411
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 413,
                "end": 419
              },
              "start": 411,
              "end": 419
            },
            "accessibility": null,
            "static": false,
            "start": 400,
            "end": 420
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "address",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 430
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 432,
                "end": 438
              },
              "start": 430,
              "end": 438
            },
            "accessibility": null,
            "static": false,
            "start": 423,
            "end": 439
          }
        ],
        "start": 376,
        "end": 441
      },
      "declare": false,
      "start": 361,
      "end": 442
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 453
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 462
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "accessibility": null,
            "static": false,
            "start": 460,
            "end": 471
          },
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
              "start": 474,
              "end": 478
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 480,
                "end": 486
              },
              "start": 478,
              "end": 486
            },
            "accessibility": null,
            "static": false,
            "start": 474,
            "end": 487
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "address",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 497
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Address",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 506
                },
                "typeArguments": null,
                "start": 499,
                "end": 506
              },
              "start": 497,
              "end": 506
            },
            "accessibility": null,
            "static": false,
            "start": 490,
            "end": 507
          }
        ],
        "start": 456,
        "end": 509
      },
      "declare": false,
      "start": 444,
      "end": 510
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FlattenedUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 530
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FlattenType",
          "optional": false,
          "typeAnnotation": null,
          "start": 533,
          "end": 544
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
                "start": 545,
                "end": 549
              },
              "typeArguments": null,
              "start": 545,
              "end": 549
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FieldSelect",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 562
              },
              "typeArguments": null,
              "start": 551,
              "end": 562
            }
          ],
          "start": 544,
          "end": 563
        },
        "start": 533,
        "end": 563
      },
      "declare": false,
      "start": 512,
      "end": 564
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FlattenedUserKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 587
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FlattenType",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 607
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
                  "start": 608,
                  "end": 612
                },
                "typeArguments": null,
                "start": 608,
                "end": 612
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldSelect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 625
                },
                "typeArguments": null,
                "start": 614,
                "end": 625
              }
            ],
            "start": 607,
            "end": 626
          },
          "start": 596,
          "end": 626
        },
        "start": 590,
        "end": 626
      },
      "declare": false,
      "start": 565,
      "end": 627
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FlattenTypeKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 641,
          "end": 656
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
                "start": 657,
                "end": 663
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 672,
                "end": 678
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 657,
              "end": 678
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 686
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 680,
              "end": 686
            }
          ],
          "start": 656,
          "end": 687
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 704
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Source",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 720
                },
                "typeArguments": null,
                "start": 714,
                "end": 720
              },
              "start": 708,
              "end": 720
            },
            "nameType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 727
                },
                "typeArguments": null,
                "start": 724,
                "end": 727
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 736,
                "end": 742
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
                      "name": "Source",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 755
                    },
                    "typeArguments": null,
                    "start": 749,
                    "end": 755
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 756,
                      "end": 759
                    },
                    "typeArguments": null,
                    "start": 756,
                    "end": 759
                  },
                  "start": 749,
                  "end": 760
                },
                "extendsType": {
                  "type": "TSObjectKeyword",
                  "start": 769,
                  "end": 775
                },
                "trueType": {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 784,
                      "end": 787
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false,
                      "start": 790,
                      "end": 794
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 841,
                      "end": 843
                    }
                  ],
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 790
                      },
                      "typeArguments": null,
                      "start": 787,
                      "end": 790
                    },
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FlattenType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 800,
                              "end": 811
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
                                      "name": "Source",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 812,
                                      "end": 818
                                    },
                                    "typeArguments": null,
                                    "start": 812,
                                    "end": 818
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Key",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 819,
                                      "end": 822
                                    },
                                    "typeArguments": null,
                                    "start": 819,
                                    "end": 822
                                  },
                                  "start": 812,
                                  "end": 823
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Target",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 825,
                                    "end": 831
                                  },
                                  "typeArguments": null,
                                  "start": 825,
                                  "end": 831
                                }
                              ],
                              "start": 811,
                              "end": 832
                            },
                            "start": 800,
                            "end": 832
                          },
                          "start": 794,
                          "end": 832
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 835,
                          "end": 841
                        }
                      ],
                      "start": 794,
                      "end": 841
                    }
                  ],
                  "start": 784,
                  "end": 843
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 852,
                    "end": 855
                  },
                  "typeArguments": null,
                  "start": 852,
                  "end": 855
                },
                "start": 749,
                "end": 855
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 862,
                "end": 867
              },
              "start": 724,
              "end": 867
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 878
              },
              "typeArguments": null,
              "start": 872,
              "end": 878
            },
            "optional": "-",
            "readonly": null,
            "start": 696,
            "end": 881
          },
          "start": 690,
          "end": 881
        },
        "declare": false,
        "start": 636,
        "end": 882
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 629,
      "end": 882
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FlattenedUserKeys2",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 907
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "FlattenTypeKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 925
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
                "start": 926,
                "end": 930
              },
              "typeArguments": null,
              "start": 926,
              "end": 930
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FieldSelect",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 943
              },
              "typeArguments": null,
              "start": 932,
              "end": 943
            }
          ],
          "start": 925,
          "end": 944
        },
        "start": 910,
        "end": 944
      },
      "declare": false,
      "start": 884,
      "end": 945
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 945
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 64,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "FlattenType",
    "start": 69,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 81,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 88,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 119,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 126,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 132,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 139,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 142,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 146,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 179,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 200,
    "end": 201
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 205,
    "end": 208
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 208,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "FlattenType",
    "start": 218,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 253,
    "end": 259
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 302,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "FieldSelect",
    "start": 307,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 361,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Address",
    "start": 366,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "postCode",
    "start": 380,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 400,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "address",
    "start": 423,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 444,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 460,
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
    "value": "number",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 474,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "address",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Address",
    "start": 499,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 512,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "FlattenedUser",
    "start": 517,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "FlattenType",
    "start": 533,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "FieldSelect",
    "start": 551,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 565,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "FlattenedUserKeys",
    "start": 570,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 590,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "FlattenType",
    "start": 596,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "FieldSelect",
    "start": 614,
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
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 629,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 636,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "FlattenTypeKeys",
    "start": 641,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 657,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 664,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 690,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 701,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 705,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 708,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 714,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 721,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 724,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 728,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 736,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 756,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 761,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 769,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 782,
    "end": 783
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 784,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 787,
    "end": 790
  },
  {
    "type": "Template",
    "value": "}.${",
    "start": 790,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 794,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "FlattenType",
    "start": 800,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 812,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 825,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 835,
    "end": 841
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 852,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 862,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 869,
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
    "value": "Target",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 884,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "FlattenedUserKeys2",
    "start": 889,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "FlattenTypeKeys",
    "start": 910,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 926,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "FieldSelect",
    "start": 932,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  }
]
```

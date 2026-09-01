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
        "name": "requiredKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 93
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
              "start": 94,
              "end": 95
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 104,
              "end": 110
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 110
          }
        ],
        "start": 93,
        "end": 111
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
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
                "start": 130,
                "end": 131
              },
              "typeArguments": null,
              "start": 130,
              "end": 131
            },
            "start": 124,
            "end": 131
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 134,
              "end": 143
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
                  "start": 152,
                  "end": 153
                },
                "typeArguments": null,
                "start": 152,
                "end": 153
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 155
                },
                "typeArguments": null,
                "start": 154,
                "end": 155
              },
              "start": 152,
              "end": 156
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 159,
              "end": 164
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 168
              },
              "typeArguments": null,
              "start": 167,
              "end": 168
            },
            "start": 134,
            "end": 168
          },
          "optional": false,
          "readonly": null,
          "start": 114,
          "end": 171
        },
        "indexType": {
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
              "start": 178,
              "end": 179
            },
            "typeArguments": null,
            "start": 178,
            "end": 179
          },
          "start": 172,
          "end": 179
        },
        "start": 114,
        "end": 180
      },
      "declare": true,
      "start": 68,
      "end": 181
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "addQuestionMarks",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 212
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
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 226,
              "end": 232
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 232
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
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
                  "start": 252,
                  "end": 253
                },
                "typeArguments": null,
                "start": 252,
                "end": 253
              },
              "start": 246,
              "end": 253
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "requiredKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 268
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
                      "start": 269,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 269,
                    "end": 270
                  }
                ],
                "start": 268,
                "end": 271
              },
              "start": 256,
              "end": 271
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 271
          }
        ],
        "start": 212,
        "end": 273
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pick",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
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
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 289
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
                          "start": 290,
                          "end": 291
                        },
                        "typeArguments": null,
                        "start": 290,
                        "end": 291
                      }
                    ],
                    "start": 289,
                    "end": 292
                  },
                  "start": 281,
                  "end": 292
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 295
                  },
                  "typeArguments": null,
                  "start": 294,
                  "end": 295
                }
              ],
              "start": 280,
              "end": 296
            },
            "start": 276,
            "end": 296
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 306
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
                    "start": 307,
                    "end": 308
                  },
                  "typeArguments": null,
                  "start": 307,
                  "end": 308
                }
              ],
              "start": 306,
              "end": 309
            },
            "start": 299,
            "end": 309
          }
        ],
        "start": 276,
        "end": 309
      },
      "declare": true,
      "start": 183,
      "end": 310
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 333
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
              "start": 334,
              "end": 335
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 334,
            "end": 335
          }
        ],
        "start": 333,
        "end": 336
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 340
        },
        "typeArguments": null,
        "start": 339,
        "end": 340
      },
      "declare": true,
      "start": 312,
      "end": 341
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatten",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 363
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
              "start": 364,
              "end": 365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 364,
            "end": 365
          }
        ],
        "start": 363,
        "end": 366
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 377
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 384
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
                    "start": 394,
                    "end": 395
                  },
                  "typeArguments": null,
                  "start": 394,
                  "end": 395
                },
                "start": 388,
                "end": 395
              },
              "nameType": null,
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
                    "start": 398,
                    "end": 399
                  },
                  "typeArguments": null,
                  "start": 398,
                  "end": 399
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "typeArguments": null,
                  "start": 400,
                  "end": 401
                },
                "start": 398,
                "end": 402
              },
              "optional": false,
              "readonly": null,
              "start": 378,
              "end": 405
            }
          ],
          "start": 377,
          "end": 406
        },
        "start": 369,
        "end": 406
      },
      "declare": true,
      "start": 343,
      "end": 407
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodType",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 446
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Output",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 453
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 456,
                "end": 459
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 447,
              "end": 459
            }
          ],
          "start": 446,
          "end": 460
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_output",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 481
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Output",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 489
                  },
                  "typeArguments": null,
                  "start": 483,
                  "end": 489
                },
                "start": 481,
                "end": 489
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
              "start": 465,
              "end": 490
            }
          ],
          "start": 461,
          "end": 492
        },
        "abstract": true,
        "declare": true,
        "start": 416,
        "end": 492
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 409,
      "end": 492
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodLiteral",
          "optional": false,
          "typeAnnotation": null,
          "start": 515,
          "end": 525
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
                "start": 526,
                "end": 527
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 526,
              "end": 527
            }
          ],
          "start": 525,
          "end": 528
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodType",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 544
        },
        "superTypeArguments": {
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
                "start": 545,
                "end": 546
              },
              "typeArguments": null,
              "start": 545,
              "end": 546
            }
          ],
          "start": 544,
          "end": 547
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 548,
          "end": 550
        },
        "abstract": false,
        "declare": true,
        "start": 501,
        "end": 550
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 494,
      "end": 550
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodTypeAny",
          "optional": false,
          "typeAnnotation": null,
          "start": 572,
          "end": 582
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 592
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 593,
                "end": 596
              }
            ],
            "start": 592,
            "end": 597
          },
          "start": 585,
          "end": 597
        },
        "declare": true,
        "start": 559,
        "end": 598
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 552,
      "end": 598
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "baseObjectOutputType",
          "optional": false,
          "typeAnnotation": null,
          "start": 620,
          "end": 640
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 646
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ZodRawShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 666
                },
                "typeArguments": null,
                "start": 655,
                "end": 666
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 641,
              "end": 666
            }
          ],
          "start": 640,
          "end": 667
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 675,
            "end": 676
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 691
              },
              "typeArguments": null,
              "start": 686,
              "end": 691
            },
            "start": 680,
            "end": 691
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 699
                },
                "typeArguments": null,
                "start": 694,
                "end": 699
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 701
                },
                "typeArguments": null,
                "start": 700,
                "end": 701
              },
              "start": 694,
              "end": 702
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_output",
                "raw": "\"_output\"",
                "start": 703,
                "end": 712
              },
              "start": 703,
              "end": 712
            },
            "start": 694,
            "end": 713
          },
          "optional": false,
          "readonly": null,
          "start": 670,
          "end": 716
        },
        "declare": true,
        "start": 607,
        "end": 717
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 600,
      "end": 717
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "objectOutputType",
          "optional": false,
          "typeAnnotation": null,
          "start": 739,
          "end": 755
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 761
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ZodRawShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 781
                },
                "typeArguments": null,
                "start": 770,
                "end": 781
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 756,
              "end": 781
            }
          ],
          "start": 755,
          "end": 782
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "flatten",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 792
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addQuestionMarks",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 796,
                  "end": 812
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baseObjectOutputType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 813,
                        "end": 833
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 839
                            },
                            "typeArguments": null,
                            "start": 834,
                            "end": 839
                          }
                        ],
                        "start": 833,
                        "end": 840
                      },
                      "start": 813,
                      "end": 840
                    }
                  ],
                  "start": 812,
                  "end": 841
                },
                "start": 796,
                "end": 841
              }
            ],
            "start": 792,
            "end": 843
          },
          "start": 785,
          "end": 843
        },
        "declare": true,
        "start": 726,
        "end": 844
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 719,
      "end": 844
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodRawShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 866,
          "end": 877
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 888,
                      "end": 894
                    },
                    "start": 886,
                    "end": 894
                  },
                  "start": 885,
                  "end": 894
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ZodTypeAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 907
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 907
                },
                "start": 895,
                "end": 907
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 884,
              "end": 908
            }
          ],
          "start": 880,
          "end": 910
        },
        "declare": true,
        "start": 853,
        "end": 911
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 846,
      "end": 911
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
              "name": "buildSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 926,
              "end": 937
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
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
                      "start": 941,
                      "end": 942
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 951,
                      "end": 957
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 941,
                    "end": 957
                  }
                ],
                "start": 940,
                "end": 958
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "version",
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
                        "start": 971,
                        "end": 972
                      },
                      "typeArguments": null,
                      "start": 971,
                      "end": 972
                    },
                    "start": 969,
                    "end": 972
                  },
                  "start": 962,
                  "end": 972
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objectOutputType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 976,
                    "end": 992
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
                              "name": "version",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 997,
                              "end": 1004
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ZodLiteral",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1006,
                                  "end": 1016
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1017,
                                        "end": 1018
                                      },
                                      "typeArguments": null,
                                      "start": 1017,
                                      "end": 1018
                                    }
                                  ],
                                  "start": 1016,
                                  "end": 1019
                                },
                                "start": 1006,
                                "end": 1019
                              },
                              "start": 1004,
                              "end": 1019
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 997,
                            "end": 1020
                          }
                        ],
                        "start": 993,
                        "end": 1022
                      }
                    ],
                    "start": 992,
                    "end": 1023
                  },
                  "start": 976,
                  "end": 1023
                },
                "start": 974,
                "end": 1023
              },
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1028,
                  "end": 1030
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1034,
                  "end": 1037
                },
                "start": 1028,
                "end": 1037
              },
              "id": null,
              "generator": false,
              "start": 940,
              "end": 1038
            },
            "definite": false,
            "start": 926,
            "end": 1038
          }
        ],
        "declare": false,
        "start": 920,
        "end": 1039
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 913,
      "end": 1039
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "evaluate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1114,
        "end": 1122
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1124
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1123,
            "end": 1124
          }
        ],
        "start": 1122,
        "end": 1125
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 1131,
              "end": 1132
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1142,
                  "end": 1143
                },
                "typeArguments": null,
                "start": 1142,
                "end": 1143
              },
              "start": 1136,
              "end": 1143
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1147
                },
                "typeArguments": null,
                "start": 1146,
                "end": 1147
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1149
                },
                "typeArguments": null,
                "start": 1148,
                "end": 1149
              },
              "start": 1146,
              "end": 1150
            },
            "optional": false,
            "readonly": null,
            "start": 1128,
            "end": 1152
          },
          {
            "type": "TSUnknownKeyword",
            "start": 1155,
            "end": 1162
          }
        ],
        "start": 1128,
        "end": 1162
      },
      "declare": false,
      "start": 1109,
      "end": 1162
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "entryOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1176,
          "end": 1183
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1184,
                "end": 1185
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1184,
              "end": 1185
            }
          ],
          "start": 1183,
          "end": 1186
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "evaluate",
            "optional": false,
            "typeAnnotation": null,
            "start": 1189,
            "end": 1197
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1206,
                    "end": 1207
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "typeArguments": null,
                      "start": 1217,
                      "end": 1218
                    },
                    "start": 1211,
                    "end": 1218
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1224,
                          "end": 1225
                        },
                        "typeArguments": null,
                        "start": 1224,
                        "end": 1225
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1227,
                                "end": 1228
                              },
                              "typeArguments": null,
                              "start": 1227,
                              "end": 1228
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1229,
                                "end": 1230
                              },
                              "typeArguments": null,
                              "start": 1229,
                              "end": 1230
                            },
                            "start": 1227,
                            "end": 1231
                          },
                          {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "members": [],
                                "start": 1235,
                                "end": 1237
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 1240,
                                "end": 1244
                              }
                            ],
                            "start": 1235,
                            "end": 1244
                          }
                        ],
                        "start": 1227,
                        "end": 1245
                      }
                    ],
                    "start": 1223,
                    "end": 1246
                  },
                  "optional": "-",
                  "readonly": null,
                  "start": 1203,
                  "end": 1248
                },
                "indexType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1249,
                      "end": 1250
                    },
                    "typeArguments": null,
                    "start": 1249,
                    "end": 1250
                  },
                  "extendsType": {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1268,
                        "end": 1275
                      },
                      "start": 1268,
                      "end": 1277
                    },
                    "start": 1259,
                    "end": 1277
                  },
                  "trueType": {
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
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1294,
                            "end": 1295
                          },
                          "typeArguments": null,
                          "start": 1294,
                          "end": 1295
                        },
                        "start": 1288,
                        "end": 1295
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1298,
                        "end": 1304
                      }
                    ],
                    "start": 1288,
                    "end": 1304
                  },
                  "falseType": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1321,
                        "end": 1322
                      },
                      "typeArguments": null,
                      "start": 1321,
                      "end": 1322
                    },
                    "start": 1315,
                    "end": 1322
                  },
                  "start": 1249,
                  "end": 1322
                },
                "start": 1203,
                "end": 1323
              }
            ],
            "start": 1197,
            "end": 1325
          },
          "start": 1189,
          "end": 1325
        },
        "declare": false,
        "start": 1171,
        "end": 1325
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1164,
      "end": 1325
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "entriesOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1339,
          "end": 1348
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1349,
                "end": 1350
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 1359,
                "end": 1365
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1349,
              "end": 1365
            }
          ],
          "start": 1348,
          "end": 1366
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "evaluate",
            "optional": false,
            "typeAnnotation": null,
            "start": 1369,
            "end": 1377
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
                    "name": "entryOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1378,
                    "end": 1385
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1386,
                          "end": 1387
                        },
                        "typeArguments": null,
                        "start": 1386,
                        "end": 1387
                      }
                    ],
                    "start": 1385,
                    "end": 1388
                  },
                  "start": 1378,
                  "end": 1388
                },
                "start": 1378,
                "end": 1390
              }
            ],
            "start": 1377,
            "end": 1391
          },
          "start": 1369,
          "end": 1391
        },
        "declare": false,
        "start": 1334,
        "end": 1391
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1327,
      "end": 1391
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
              "name": "entriesOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1406,
              "end": 1415
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1419,
                      "end": 1420
                    },
                    "constraint": {
                      "type": "TSObjectKeyword",
                      "start": 1429,
                      "end": 1435
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1419,
                    "end": 1435
                  }
                ],
                "start": 1418,
                "end": 1436
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1440,
                        "end": 1441
                      },
                      "typeArguments": null,
                      "start": 1440,
                      "end": 1441
                    },
                    "start": 1438,
                    "end": 1441
                  },
                  "start": 1437,
                  "end": 1441
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1450,
                      "end": 1456
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1457,
                      "end": 1464
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1450,
                    "end": 1464
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1465,
                      "end": 1466
                    }
                  ],
                  "optional": false,
                  "start": 1450,
                  "end": 1467
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entriesOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1471,
                    "end": 1480
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1481,
                          "end": 1482
                        },
                        "typeArguments": null,
                        "start": 1481,
                        "end": 1482
                      }
                    ],
                    "start": 1480,
                    "end": 1483
                  },
                  "start": 1471,
                  "end": 1483
                },
                "start": 1450,
                "end": 1483
              },
              "id": null,
              "generator": false,
              "start": 1418,
              "end": 1483
            },
            "definite": false,
            "start": 1406,
            "end": 1483
          }
        ],
        "declare": false,
        "start": 1400,
        "end": 1483
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1393,
      "end": 1483
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 68,
  "end": 1483
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 68,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 76,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "requiredKeys",
    "start": 81,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "object",
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
    "value": "k",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 121,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 134,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 144,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 191,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "addQuestionMarks",
    "start": 196,
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
    "value": "T",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 218,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 238,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "requiredKeys",
    "start": 256,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 272,
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
    "value": "Pick",
    "start": 276,
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
    "value": "Required",
    "start": 281,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 299,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 312,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 320,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "T",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 343,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 351,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "flatten",
    "start": 356,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 369,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 385,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 388,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 404,
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
    "type": "Keyword",
    "value": "export",
    "start": 409,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 416,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 424,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 439,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 465,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "_output",
    "start": 474,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Output",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 494,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 501,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 509,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "ZodLiteral",
    "start": 515,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 529,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 537,
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
    "value": "T",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549
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
    "type": "Identifier",
    "value": "type",
    "start": 567,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "ZodTypeAny",
    "start": 572,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 585,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 600,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 607,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 615,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "baseObjectOutputType",
    "start": 620,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 641,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 647,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "ZodRawShape",
    "start": 655,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 677,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 680,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 686,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 694,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 702,
    "end": 703
  },
  {
    "type": "String",
    "value": "\"_output\"",
    "start": 703,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 719,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 726,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 734,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "objectOutputType",
    "start": 739,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 756,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 762,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "ZodRawShape",
    "start": 770,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "flatten",
    "start": 785,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "addQuestionMarks",
    "start": 796,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "baseObjectOutputType",
    "start": 813,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 834,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 846,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 853,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 861,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "ZodRawShape",
    "start": 866,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "ZodTypeAny",
    "start": 897,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 913,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 920,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "buildSchema",
    "start": 926,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 943,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 951,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 962,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "objectOutputType",
    "start": 976,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 997,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "ZodLiteral",
    "start": 1006,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1024,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 1109,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "evaluate",
    "start": 1114,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1136,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1155,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1164,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "entryOf",
    "start": 1176,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "evaluate",
    "start": 1189,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1208,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1211,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "[",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
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
    "value": "o",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1251,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1259,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1268,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1288,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1298,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1315,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1327,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "entriesOf",
    "start": 1339,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1351,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1359,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "evaluate",
    "start": 1369,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "entryOf",
    "start": 1378,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1393,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1400,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "entriesOf",
    "start": 1406,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1421,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1443,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1450,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 1457,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1468,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "entriesOf",
    "start": 1471,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1482,
    "end": 1483
  }
]
```

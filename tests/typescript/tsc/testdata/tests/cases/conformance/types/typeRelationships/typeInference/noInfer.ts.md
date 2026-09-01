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
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 48
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 58
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 59,
              "end": 65
            }
          ],
          "start": 58,
          "end": 66
        },
        "start": 51,
        "end": 66
      },
      "declare": false,
      "start": 40,
      "end": 67
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 86
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 87,
                  "end": 93
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 96,
                  "end": 102
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 105,
                  "end": 112
                }
              ],
              "start": 87,
              "end": 112
            }
          ],
          "start": 86,
          "end": 113
        },
        "start": 79,
        "end": 113
      },
      "declare": false,
      "start": 68,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 123
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 133
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 134,
              "end": 143
            }
          ],
          "start": 133,
          "end": 144
        },
        "start": 126,
        "end": 144
      },
      "declare": false,
      "start": 115,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 154
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 164
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 165,
                "end": 170
              },
              "start": 165,
              "end": 170
            }
          ],
          "start": 164,
          "end": 171
        },
        "start": 157,
        "end": 171
      },
      "declare": false,
      "start": 146,
      "end": 172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 181
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 191
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo",
                    "cooked": "foo"
                  },
                  "tail": false,
                  "start": 192,
                  "end": 198
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 204,
                  "end": 206
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 198,
                  "end": 204
                }
              ],
              "start": 192,
              "end": 206
            }
          ],
          "start": 191,
          "end": 207
        },
        "start": 184,
        "end": 207
      },
      "declare": false,
      "start": 173,
      "end": 208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 217
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 227
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "foo",
                        "cooked": "foo"
                      },
                      "tail": false,
                      "start": 228,
                      "end": 234
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 240,
                      "end": 242
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 234,
                      "end": 240
                    }
                  ],
                  "start": 228,
                  "end": 242
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 245,
                      "end": 248
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "bar",
                        "cooked": "bar"
                      },
                      "tail": true,
                      "start": 254,
                      "end": 259
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 248,
                      "end": 254
                    }
                  ],
                  "start": 245,
                  "end": 259
                }
              ],
              "start": 228,
              "end": 259
            }
          ],
          "start": 227,
          "end": 260
        },
        "start": 220,
        "end": 260
      },
      "declare": false,
      "start": 209,
      "end": 261
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 270
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 280
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 281,
              "end": 283
            }
          ],
          "start": 280,
          "end": 284
        },
        "start": 273,
        "end": 284
      },
      "declare": false,
      "start": 262,
      "end": 285
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 340
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 350
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 351,
                "end": 357
              },
              "start": 351,
              "end": 359
            }
          ],
          "start": 350,
          "end": 360
        },
        "start": 343,
        "end": 360
      },
      "declare": false,
      "start": 332,
      "end": 361
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 370
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 380
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 384
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 386,
                      "end": 392
                    },
                    "start": 384,
                    "end": 392
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 383,
                  "end": 392
                }
              ],
              "start": 381,
              "end": 394
            }
          ],
          "start": 380,
          "end": 395
        },
        "start": 373,
        "end": 395
      },
      "declare": false,
      "start": 362,
      "end": 396
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 451
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
              "start": 452,
              "end": 453
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 452,
            "end": 453
          }
        ],
        "start": 451,
        "end": 454
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 457,
          "end": 464
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 472
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
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  }
                ],
                "start": 472,
                "end": 475
              },
              "start": 465,
              "end": 475
            }
          ],
          "start": 464,
          "end": 476
        },
        "start": 457,
        "end": 476
      },
      "declare": false,
      "start": 443,
      "end": 477
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 486
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
              "start": 487,
              "end": 488
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 487,
            "end": 488
          }
        ],
        "start": 486,
        "end": 489
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 499
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 507
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
                          "start": 508,
                          "end": 509
                        },
                        "typeArguments": null,
                        "start": 508,
                        "end": 509
                      }
                    ],
                    "start": 507,
                    "end": 510
                  },
                  "start": 500,
                  "end": 510
                },
                {
                  "type": "TSStringKeyword",
                  "start": 513,
                  "end": 519
                }
              ],
              "start": 500,
              "end": 519
            }
          ],
          "start": 499,
          "end": 520
        },
        "start": 492,
        "end": 520
      },
      "declare": false,
      "start": 478,
      "end": 521
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 530
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
              "start": 531,
              "end": 532
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 531,
            "end": 532
          }
        ],
        "start": 530,
        "end": 533
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 543
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 551
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
                          "start": 552,
                          "end": 553
                        },
                        "typeArguments": null,
                        "start": 552,
                        "end": 553
                      }
                    ],
                    "start": 551,
                    "end": 554
                  },
                  "start": 544,
                  "end": 554
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 557,
                    "end": 563
                  },
                  "start": 557,
                  "end": 565
                }
              ],
              "start": 544,
              "end": 565
            }
          ],
          "start": 543,
          "end": 566
        },
        "start": 536,
        "end": 566
      },
      "declare": false,
      "start": 522,
      "end": 567
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 635
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
            "name": "NoInfer",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 651
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 654,
                      "end": 655
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 657,
                        "end": 663
                      },
                      "start": 655,
                      "end": 663
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 654,
                    "end": 664
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 665,
                      "end": 666
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 668,
                        "end": 674
                      },
                      "start": 666,
                      "end": 674
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 665,
                    "end": 674
                  }
                ],
                "start": 652,
                "end": 676
              }
            ],
            "start": 651,
            "end": 677
          },
          "start": 644,
          "end": 677
        },
        "start": 638,
        "end": 677
      },
      "declare": false,
      "start": 627,
      "end": 678
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 687
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
              "start": 688,
              "end": 689
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 688,
            "end": 689
          }
        ],
        "start": 687,
        "end": 690
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NoInfer",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 706
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
                  "start": 707,
                  "end": 708
                },
                "typeArguments": null,
                "start": 707,
                "end": 708
              }
            ],
            "start": 706,
            "end": 709
          },
          "start": 699,
          "end": 709
        },
        "start": 693,
        "end": 709
      },
      "declare": false,
      "start": 679,
      "end": 710
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 716,
        "end": 719
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 726
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NoInfer",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 743
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 746,
                        "end": 747
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 749,
                          "end": 755
                        },
                        "start": 747,
                        "end": 755
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 746,
                      "end": 756
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 758
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 760,
                          "end": 766
                        },
                        "start": 758,
                        "end": 766
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 757,
                      "end": 766
                    }
                  ],
                  "start": 744,
                  "end": 768
                }
              ],
              "start": 743,
              "end": 769
            },
            "start": 736,
            "end": 769
          },
          "start": 730,
          "end": 769
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 773
          },
          "typeArguments": null,
          "start": 772,
          "end": 773
        },
        "optional": false,
        "readonly": null,
        "start": 722,
        "end": 775
      },
      "declare": false,
      "start": 711,
      "end": 776
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 795,
        "end": 799
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
              "start": 800,
              "end": 801
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 810,
              "end": 816
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 800,
            "end": 816
          }
        ],
        "start": 799,
        "end": 817
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 821,
                "end": 822
              },
              "typeArguments": null,
              "start": 821,
              "end": 822
            },
            "start": 819,
            "end": 822
          },
          "start": 818,
          "end": 822
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 834
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
                      "start": 835,
                      "end": 836
                    },
                    "typeArguments": null,
                    "start": 835,
                    "end": 836
                  }
                ],
                "start": 834,
                "end": 837
              },
              "start": 827,
              "end": 837
            },
            "start": 825,
            "end": 837
          },
          "start": 824,
          "end": 837
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 840,
          "end": 844
        },
        "start": 838,
        "end": 844
      },
      "body": null,
      "expression": false,
      "start": 778,
      "end": 844
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 862,
        "end": 866
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
              "start": 867,
              "end": 868
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 877,
              "end": 883
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 867,
            "end": 883
          }
        ],
        "start": 866,
        "end": 884
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 888,
                "end": 889
              },
              "typeArguments": null,
              "start": 888,
              "end": 889
            },
            "start": 886,
            "end": 889
          },
          "start": 885,
          "end": 889
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NoInfer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 901
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
                        "start": 902,
                        "end": 903
                      },
                      "typeArguments": null,
                      "start": 902,
                      "end": 903
                    }
                  ],
                  "start": 901,
                  "end": 904
                },
                "start": 894,
                "end": 904
              },
              "start": 894,
              "end": 906
            },
            "start": 892,
            "end": 906
          },
          "start": 891,
          "end": 906
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 909,
          "end": 913
        },
        "start": 907,
        "end": 913
      },
      "body": null,
      "expression": false,
      "start": 845,
      "end": 913
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 931,
        "end": 935
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
              "start": 936,
              "end": 937
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 946,
              "end": 952
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 936,
            "end": 952
          }
        ],
        "start": 935,
        "end": 953
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 957,
                "end": 958
              },
              "typeArguments": null,
              "start": 957,
              "end": 958
            },
            "start": 955,
            "end": 958
          },
          "start": 954,
          "end": 958
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 963,
                "end": 970
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 972
                      },
                      "typeArguments": null,
                      "start": 971,
                      "end": 972
                    },
                    "start": 971,
                    "end": 974
                  }
                ],
                "start": 970,
                "end": 975
              },
              "start": 963,
              "end": 975
            },
            "start": 961,
            "end": 975
          },
          "start": 960,
          "end": 975
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 978,
          "end": 982
        },
        "start": 976,
        "end": 982
      },
      "body": null,
      "expression": false,
      "start": 914,
      "end": 982
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1004
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
              "start": 1005,
              "end": 1006
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1015,
              "end": 1021
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1005,
            "end": 1021
          }
        ],
        "start": 1004,
        "end": 1022
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 1026,
                "end": 1027
              },
              "typeArguments": null,
              "start": 1026,
              "end": 1027
            },
            "start": 1024,
            "end": 1027
          },
          "start": 1023,
          "end": 1027
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1034,
                    "end": 1035
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoInfer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1037,
                        "end": 1044
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
                              "start": 1045,
                              "end": 1046
                            },
                            "typeArguments": null,
                            "start": 1045,
                            "end": 1046
                          }
                        ],
                        "start": 1044,
                        "end": 1047
                      },
                      "start": 1037,
                      "end": 1047
                    },
                    "start": 1035,
                    "end": 1047
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1034,
                  "end": 1047
                }
              ],
              "start": 1032,
              "end": 1049
            },
            "start": 1030,
            "end": 1049
          },
          "start": 1029,
          "end": 1049
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1052,
          "end": 1056
        },
        "start": 1050,
        "end": 1056
      },
      "body": null,
      "expression": false,
      "start": 983,
      "end": 1056
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1074,
        "end": 1078
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
              "start": 1079,
              "end": 1080
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1089,
              "end": 1095
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1079,
            "end": 1095
          }
        ],
        "start": 1078,
        "end": 1096
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 1100,
                "end": 1101
              },
              "typeArguments": null,
              "start": 1100,
              "end": 1101
            },
            "start": 1098,
            "end": 1101
          },
          "start": 1097,
          "end": 1101
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1113
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1116,
                          "end": 1117
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
                              "start": 1119,
                              "end": 1120
                            },
                            "typeArguments": null,
                            "start": 1119,
                            "end": 1120
                          },
                          "start": 1117,
                          "end": 1120
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1116,
                        "end": 1120
                      }
                    ],
                    "start": 1114,
                    "end": 1122
                  }
                ],
                "start": 1113,
                "end": 1123
              },
              "start": 1106,
              "end": 1123
            },
            "start": 1104,
            "end": 1123
          },
          "start": 1103,
          "end": 1123
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1126,
          "end": 1130
        },
        "start": 1124,
        "end": 1130
      },
      "body": null,
      "expression": false,
      "start": 1057,
      "end": 1130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1132,
          "end": 1136
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1137,
            "end": 1142
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1144,
            "end": 1149
          }
        ],
        "optional": false,
        "start": 1132,
        "end": 1150
      },
      "directive": null,
      "start": 1132,
      "end": 1150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1157,
          "end": 1161
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1162,
            "end": 1167
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 1169,
            "end": 1174
          }
        ],
        "optional": false,
        "start": 1157,
        "end": 1175
      },
      "directive": null,
      "start": 1157,
      "end": 1175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1189
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1190,
            "end": 1195
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 1198,
                "end": 1203
              }
            ],
            "start": 1197,
            "end": 1204
          }
        ],
        "optional": false,
        "start": 1185,
        "end": 1205
      },
      "directive": null,
      "start": 1185,
      "end": 1205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1215,
          "end": 1219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1220,
            "end": 1225
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 1228,
                "end": 1233
              }
            ],
            "start": 1227,
            "end": 1234
          }
        ],
        "optional": false,
        "start": 1215,
        "end": 1235
      },
      "directive": null,
      "start": 1215,
      "end": 1235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1245,
          "end": 1249
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1250,
            "end": 1255
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1259,
                  "end": 1260
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 1262,
                  "end": 1267
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1259,
                "end": 1267
              }
            ],
            "start": 1257,
            "end": 1269
          }
        ],
        "optional": false,
        "start": 1245,
        "end": 1270
      },
      "directive": null,
      "start": 1245,
      "end": 1270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1280,
          "end": 1284
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1285,
            "end": 1290
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1295
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 1297,
                  "end": 1302
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1294,
                "end": 1302
              }
            ],
            "start": 1292,
            "end": 1304
          }
        ],
        "optional": false,
        "start": 1280,
        "end": 1305
      },
      "directive": null,
      "start": 1280,
      "end": 1305
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 1330,
        "end": 1336
      },
      "typeParameters": null,
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
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 1339,
              "end": 1343
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1347,
                  "end": 1351
                },
                "start": 1345,
                "end": 1351
              },
              "body": null,
              "expression": false,
              "start": 1343,
              "end": 1351
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1339,
            "end": 1351
          }
        ],
        "start": 1337,
        "end": 1353
      },
      "abstract": false,
      "declare": true,
      "start": 1316,
      "end": 1353
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 1368,
        "end": 1371
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 1380,
        "end": 1386
      },
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
              "name": "woof",
              "optional": false,
              "typeAnnotation": null,
              "start": 1389,
              "end": 1393
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1397,
                  "end": 1401
                },
                "start": 1395,
                "end": 1401
              },
              "body": null,
              "expression": false,
              "start": 1393,
              "end": 1401
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1389,
            "end": 1401
          }
        ],
        "start": 1387,
        "end": 1403
      },
      "abstract": false,
      "declare": true,
      "start": 1354,
      "end": 1403
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 1421,
        "end": 1432
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
              "start": 1433,
              "end": 1434
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1433,
            "end": 1434
          }
        ],
        "start": 1432,
        "end": 1435
      },
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
                "start": 1443,
                "end": 1444
              },
              "typeArguments": null,
              "start": 1443,
              "end": 1444
            },
            "start": 1441,
            "end": 1444
          },
          "start": 1436,
          "end": 1444
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "getDefault",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1464,
                    "end": 1471
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
                          "start": 1472,
                          "end": 1473
                        },
                        "typeArguments": null,
                        "start": 1472,
                        "end": 1473
                      }
                    ],
                    "start": 1471,
                    "end": 1474
                  },
                  "start": 1464,
                  "end": 1474
                },
                "start": 1461,
                "end": 1474
              },
              "start": 1458,
              "end": 1474
            },
            "start": 1456,
            "end": 1474
          },
          "start": 1446,
          "end": 1474
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1477,
          "end": 1481
        },
        "start": 1475,
        "end": 1481
      },
      "body": null,
      "expression": false,
      "start": 1404,
      "end": 1482
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 1484,
          "end": 1495
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1506
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1496,
            "end": 1508
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 1520,
                "end": 1526
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1516,
              "end": 1528
            },
            "id": null,
            "generator": false,
            "start": 1510,
            "end": 1528
          }
        ],
        "optional": false,
        "start": 1484,
        "end": 1529
      },
      "directive": null,
      "start": 1484,
      "end": 1530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 1537,
          "end": 1548
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 1553,
              "end": 1559
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1549,
            "end": 1561
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null,
                "start": 1573,
                "end": 1576
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1569,
              "end": 1578
            },
            "id": null,
            "generator": false,
            "start": 1563,
            "end": 1578
          }
        ],
        "optional": false,
        "start": 1537,
        "end": 1579
      },
      "directive": null,
      "start": 1537,
      "end": 1580
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 1587,
          "end": 1598
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 1603,
              "end": 1606
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1599,
            "end": 1608
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 1620,
                "end": 1626
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1616,
              "end": 1628
            },
            "id": null,
            "generator": false,
            "start": 1610,
            "end": 1628
          }
        ],
        "optional": false,
        "start": 1587,
        "end": 1629
      },
      "directive": null,
      "start": 1587,
      "end": 1630
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 1658,
        "end": 1669
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
              "start": 1670,
              "end": 1671
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1670,
            "end": 1671
          }
        ],
        "start": 1669,
        "end": 1672
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "actual",
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
                "start": 1681,
                "end": 1682
              },
              "typeArguments": null,
              "start": 1681,
              "end": 1682
            },
            "start": 1679,
            "end": 1682
          },
          "start": 1673,
          "end": 1682
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1701
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
                      "start": 1702,
                      "end": 1703
                    },
                    "typeArguments": null,
                    "start": 1702,
                    "end": 1703
                  }
                ],
                "start": 1701,
                "end": 1704
              },
              "start": 1694,
              "end": 1704
            },
            "start": 1692,
            "end": 1704
          },
          "start": 1684,
          "end": 1704
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 1707,
          "end": 1714
        },
        "start": 1705,
        "end": 1714
      },
      "body": null,
      "expression": false,
      "start": 1641,
      "end": 1715
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 1717,
          "end": 1728
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1731,
                  "end": 1732
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1734,
                  "end": 1735
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1731,
                "end": 1735
              }
            ],
            "start": 1729,
            "end": 1737
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1741,
                  "end": 1742
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1744,
                  "end": 1745
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1741,
                "end": 1745
              }
            ],
            "start": 1739,
            "end": 1747
          }
        ],
        "optional": false,
        "start": 1717,
        "end": 1748
      },
      "directive": null,
      "start": 1717,
      "end": 1749
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1762,
            "end": 1763
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1768,
                  "end": 1769
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1771,
                  "end": 1772
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1768,
                "end": 1772
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1774,
                  "end": 1775
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1777,
                  "end": 1778
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1774,
                "end": 1778
              }
            ],
            "start": 1766,
            "end": 1780
          },
          "definite": false,
          "start": 1762,
          "end": 1780
        }
      ],
      "declare": false,
      "start": 1756,
      "end": 1781
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 1782,
          "end": 1793
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1794,
            "end": 1795
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1800
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1802,
                  "end": 1803
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1799,
                "end": 1803
              }
            ],
            "start": 1797,
            "end": 1805
          }
        ],
        "optional": false,
        "start": 1782,
        "end": 1806
      },
      "directive": null,
      "start": 1782,
      "end": 1807
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1841
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
              "start": 1842,
              "end": 1843
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1842,
            "end": 1843
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1845,
              "end": 1846
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1845,
            "end": 1846
          }
        ],
        "start": 1841,
        "end": 1847
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                        "start": 1862,
                        "end": 1863
                      },
                      "typeArguments": null,
                      "start": 1862,
                      "end": 1863
                    },
                    "start": 1860,
                    "end": 1863
                  },
                  "start": 1855,
                  "end": 1863
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1868,
                    "end": 1869
                  },
                  "typeArguments": null,
                  "start": 1868,
                  "end": 1869
                },
                "start": 1865,
                "end": 1869
              },
              "start": 1854,
              "end": 1869
            },
            "start": 1852,
            "end": 1869
          },
          "start": 1848,
          "end": 1869
        },
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
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1878,
                "end": 1885
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
                      "start": 1886,
                      "end": 1887
                    },
                    "typeArguments": null,
                    "start": 1886,
                    "end": 1887
                  }
                ],
                "start": 1885,
                "end": 1888
              },
              "start": 1878,
              "end": 1888
            },
            "start": 1876,
            "end": 1888
          },
          "start": 1871,
          "end": 1888
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1892
          },
          "typeArguments": null,
          "start": 1891,
          "end": 1892
        },
        "start": 1889,
        "end": 1892
      },
      "body": null,
      "expression": false,
      "start": 1818,
      "end": 1893
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1911,
        "end": 1915
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1925,
                    "end": 1926
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1928,
                      "end": 1934
                    },
                    "start": 1926,
                    "end": 1934
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1925,
                  "end": 1935
                }
              ],
              "start": 1923,
              "end": 1937
            },
            "start": 1921,
            "end": 1937
          },
          "start": 1916,
          "end": 1937
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1940,
          "end": 1946
        },
        "start": 1938,
        "end": 1946
      },
      "body": null,
      "expression": false,
      "start": 1894,
      "end": 1947
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null,
          "start": 1949,
          "end": 1955
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 1956,
            "end": 1960
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1964,
                  "end": 1965
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1967,
                  "end": 1968
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1964,
                "end": 1968
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1970,
                  "end": 1971
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1973,
                  "end": 1974
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1970,
                "end": 1974
              }
            ],
            "start": 1962,
            "end": 1976
          }
        ],
        "optional": false,
        "start": 1949,
        "end": 1977
      },
      "directive": null,
      "start": 1949,
      "end": 1978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1988,
          "end": 1992
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1995,
                  "end": 1996
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1998,
                  "end": 1999
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1995,
                "end": 1999
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2001,
                  "end": 2002
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2004,
                  "end": 2005
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2001,
                "end": 2005
              }
            ],
            "start": 1993,
            "end": 2007
          }
        ],
        "optional": false,
        "start": 1988,
        "end": 2008
      },
      "directive": null,
      "start": 1988,
      "end": 2009
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 2025,
        "end": 2034
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2035,
              "end": 2040
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2035,
            "end": 2040
          }
        ],
        "start": 2034,
        "end": 2041
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
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2051
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2053,
                  "end": 2058
                },
                "typeArguments": null,
                "start": 2053,
                "end": 2058
              },
              "start": 2051,
              "end": 2058
            },
            "accessibility": null,
            "static": false,
            "start": 2046,
            "end": 2059
          }
        ],
        "start": 2044,
        "end": 2061
      },
      "declare": false,
      "start": 2020,
      "end": 2062
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doWork",
        "optional": false,
        "typeAnnotation": null,
        "start": 2080,
        "end": 2086
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
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2087,
              "end": 2092
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2087,
            "end": 2092
          }
        ],
        "start": 2086,
        "end": 2093
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
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
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2115,
                      "end": 2120
                    },
                    "typeArguments": null,
                    "start": 2115,
                    "end": 2120
                  }
                ],
                "start": 2114,
                "end": 2121
              },
              "start": 2105,
              "end": 2121
            },
            "start": 2103,
            "end": 2121
          },
          "start": 2094,
          "end": 2121
        },
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
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 2130,
                "end": 2137
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2138,
                      "end": 2143
                    },
                    "typeArguments": null,
                    "start": 2138,
                    "end": 2143
                  }
                ],
                "start": 2137,
                "end": 2144
              },
              "start": 2130,
              "end": 2144
            },
            "start": 2128,
            "end": 2144
          },
          "start": 2123,
          "end": 2144
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2147,
          "end": 2151
        },
        "start": 2145,
        "end": 2151
      },
      "body": null,
      "expression": false,
      "start": 2063,
      "end": 2152
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
            "name": "comp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2173,
                  "end": 2182
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2185,
                            "end": 2188
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2190,
                              "end": 2196
                            },
                            "start": 2188,
                            "end": 2196
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2185,
                          "end": 2196
                        }
                      ],
                      "start": 2183,
                      "end": 2198
                    }
                  ],
                  "start": 2182,
                  "end": 2199
                },
                "start": 2173,
                "end": 2199
              },
              "start": 2171,
              "end": 2199
            },
            "start": 2167,
            "end": 2199
          },
          "init": null,
          "definite": false,
          "start": 2167,
          "end": 2199
        }
      ],
      "declare": true,
      "start": 2153,
      "end": 2200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doWork",
          "optional": false,
          "typeAnnotation": null,
          "start": 2202,
          "end": 2208
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": null,
            "start": 2209,
            "end": 2213
          },
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
                  "start": 2217,
                  "end": 2220
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2222,
                  "end": 2224
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2217,
                "end": 2224
              }
            ],
            "start": 2215,
            "end": 2226
          }
        ],
        "optional": false,
        "start": 2202,
        "end": 2227
      },
      "directive": null,
      "start": 2202,
      "end": 2228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doWork",
          "optional": false,
          "typeAnnotation": null,
          "start": 2235,
          "end": 2241
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": null,
            "start": 2242,
            "end": 2246
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2248,
            "end": 2250
          }
        ],
        "optional": false,
        "start": 2235,
        "end": 2251
      },
      "directive": null,
      "start": 2235,
      "end": 2252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mutate",
        "optional": false,
        "typeAnnotation": null,
        "start": 2280,
        "end": 2286
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
              "start": 2287,
              "end": 2288
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2287,
            "end": 2288
          }
        ],
        "start": 2286,
        "end": 2289
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoInfer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2304,
                        "end": 2311
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
                              "start": 2312,
                              "end": 2313
                            },
                            "typeArguments": null,
                            "start": 2312,
                            "end": 2313
                          }
                        ],
                        "start": 2311,
                        "end": 2314
                      },
                      "start": 2304,
                      "end": 2314
                    },
                    "start": 2302,
                    "end": 2314
                  },
                  "start": 2301,
                  "end": 2314
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2319,
                      "end": 2325
                    },
                    "start": 2317,
                    "end": 2325
                  },
                  "start": 2316,
                  "end": 2325
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
                    "start": 2330,
                    "end": 2331
                  },
                  "typeArguments": null,
                  "start": 2330,
                  "end": 2331
                },
                "start": 2327,
                "end": 2331
              },
              "start": 2300,
              "end": 2331
            },
            "start": 2298,
            "end": 2331
          },
          "start": 2290,
          "end": 2331
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
            "start": 2334,
            "end": 2335
          },
          "typeArguments": null,
          "start": 2334,
          "end": 2335
        },
        "start": 2332,
        "end": 2335
      },
      "body": null,
      "expression": false,
      "start": 2263,
      "end": 2336
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
            "name": "mutate1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2343,
            "end": 2350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mutate",
              "optional": false,
              "typeAnnotation": null,
              "start": 2353,
              "end": 2359
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2361,
                    "end": 2362
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2364,
                    "end": 2365
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2370,
                  "end": 2371
                },
                "id": null,
                "generator": false,
                "start": 2360,
                "end": 2371
              }
            ],
            "optional": false,
            "start": 2353,
            "end": 2372
          },
          "definite": false,
          "start": 2343,
          "end": 2372
        }
      ],
      "declare": false,
      "start": 2337,
      "end": 2373
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExampleClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 2389,
        "end": 2401
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
              "start": 2402,
              "end": 2403
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2402,
            "end": 2403
          }
        ],
        "start": 2401,
        "end": 2404
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2405,
        "end": 2407
      },
      "abstract": false,
      "declare": true,
      "start": 2375,
      "end": 2407
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OkClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 2414,
        "end": 2421
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
              "start": 2422,
              "end": 2423
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2422,
            "end": 2423
          }
        ],
        "start": 2421,
        "end": 2424
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
              "start": 2431,
              "end": 2442
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clazz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ExampleClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2458,
                          "end": 2470
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
                                "start": 2471,
                                "end": 2472
                              },
                              "typeArguments": null,
                              "start": 2471,
                              "end": 2472
                            }
                          ],
                          "start": 2470,
                          "end": 2473
                        },
                        "start": 2458,
                        "end": 2473
                      },
                      "start": 2456,
                      "end": 2473
                    },
                    "start": 2451,
                    "end": 2473
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2443,
                  "end": 2473
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NoInfer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2491,
                          "end": 2498
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
                                "start": 2499,
                                "end": 2500
                              },
                              "typeArguments": null,
                              "start": 2499,
                              "end": 2500
                            }
                          ],
                          "start": 2498,
                          "end": 2501
                        },
                        "start": 2491,
                        "end": 2501
                      },
                      "start": 2489,
                      "end": 2501
                    },
                    "start": 2483,
                    "end": 2501
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2475,
                  "end": 2501
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2503,
                "end": 2505
              },
              "expression": false,
              "start": 2442,
              "end": 2505
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2431,
            "end": 2505
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2515,
              "end": 2520
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                    "start": 2524,
                    "end": 2525
                  },
                  "typeArguments": null,
                  "start": 2524,
                  "end": 2525
                },
                "start": 2522,
                "end": 2525
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 2543,
                        "end": 2547
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2548,
                        "end": 2554
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2543,
                      "end": 2554
                    },
                    "start": 2536,
                    "end": 2555
                  }
                ],
                "start": 2526,
                "end": 2567
              },
              "expression": false,
              "start": 2520,
              "end": 2567
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2511,
            "end": 2567
          }
        ],
        "start": 2425,
        "end": 2569
      },
      "abstract": false,
      "declare": false,
      "start": 2408,
      "end": 2569
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OkClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2576,
        "end": 2584
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
              "start": 2585,
              "end": 2586
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2585,
            "end": 2586
          }
        ],
        "start": 2584,
        "end": 2587
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
              "start": 2594,
              "end": 2605
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clazz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ExampleClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2621,
                          "end": 2633
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
                                "start": 2634,
                                "end": 2635
                              },
                              "typeArguments": null,
                              "start": 2634,
                              "end": 2635
                            }
                          ],
                          "start": 2633,
                          "end": 2636
                        },
                        "start": 2621,
                        "end": 2636
                      },
                      "start": 2619,
                      "end": 2636
                    },
                    "start": 2614,
                    "end": 2636
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2606,
                  "end": 2636
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NoInfer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2653,
                          "end": 2660
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
                                "start": 2661,
                                "end": 2662
                              },
                              "typeArguments": null,
                              "start": 2661,
                              "end": 2662
                            }
                          ],
                          "start": 2660,
                          "end": 2663
                        },
                        "start": 2653,
                        "end": 2663
                      },
                      "start": 2651,
                      "end": 2663
                    },
                    "start": 2645,
                    "end": 2663
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2638,
                  "end": 2663
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2665,
                "end": 2667
              },
              "expression": false,
              "start": 2605,
              "end": 2667
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2594,
            "end": 2667
          }
        ],
        "start": 2588,
        "end": 2669
      },
      "abstract": false,
      "declare": false,
      "start": 2570,
      "end": 2669
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 40,
  "end": 2669
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 40,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T00",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 51,
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
    "value": "string",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 126,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 134,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 146,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 157,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 173,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 184,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 192,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 198,
    "end": 204
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 209,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 214,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 228,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 234,
    "end": 240
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 243,
    "end": 244
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 248,
    "end": 254
  },
  {
    "type": "Template",
    "value": "}bar`",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 262,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "T06",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 273,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 332,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 343,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 362,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 373,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 386,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 443,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 457,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 465,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 478,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 492,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 500,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
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
    "value": "&",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 513,
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
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 522,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 527,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 536,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 544,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 627,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 632,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 638,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 644,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 679,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 693,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 699,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 711,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "T32",
    "start": 716,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 727,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 730,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 736,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 760,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 778,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 786,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 800,
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
    "value": "string",
    "start": 810,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 827,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 840,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 845,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 853,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 862,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 869,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 877,
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
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "T",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 894,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 909,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 914,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 922,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 931,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 936,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 938,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 946,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 963,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 978,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 983,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 991,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1007,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1015,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1037,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "}",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1052,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1057,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1065,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1074,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1081,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1089,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1106,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1126,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1132,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1137,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1144,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1157,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1162,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1169,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1185,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1190,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1198,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1220,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1228,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1245,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1250,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1262,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1280,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1285,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1297,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1316,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1324,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "move",
    "start": 1339,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1347,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1354,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1372,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1380,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "woof",
    "start": 1389,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1397,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1404,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1412,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1421,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1436,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "getDefault",
    "start": 1446,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1464,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1477,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1484,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1500,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1513,
    "end": 1515
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1520,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1537,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1549,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1553,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "doSomething",
    "start": 1587,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1599,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1613,
    "end": 1615
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1616,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1620,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1641,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1649,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "assertEqual",
    "start": 1658,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1670,
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
    "value": "(",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "actual",
    "start": 1673,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 1684,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1694,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1707,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "assertEqual",
    "start": 1717,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1756,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "assertEqual",
    "start": 1782,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1818,
    "end": 1825
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1826,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1848,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1855,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1865,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1871,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1878,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1894,
    "end": 1901
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1902,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1911,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1916,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1940,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 1949,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1956,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Numeric",
    "value": "2",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1988,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2020,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2025,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2035,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2046,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2053,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2063,
    "end": 2070
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2071,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "doWork",
    "start": 2080,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2087,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2094,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2105,
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
    "value": "Props",
    "start": 2115,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2123,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 2130,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2138,
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
    "value": ")",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2147,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2153,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2161,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 2167,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2173,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2185,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2190,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "doWork",
    "start": 2202,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 2209,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2217,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2222,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "doWork",
    "start": 2235,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 2242,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2263,
    "end": 2270
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2271,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "mutate",
    "start": 2280,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2290,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 2304,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2319,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2327,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2337,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "mutate1",
    "start": 2343,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "mutate",
    "start": 2353,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2367,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2375,
    "end": 2382
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2383,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "ExampleClass",
    "start": 2389,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2408,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "OkClass",
    "start": 2414,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2431,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2443,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "clazz",
    "start": 2451,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "ExampleClass",
    "start": 2458,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2475,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 2483,
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
    "value": "NoInfer",
    "start": 2491,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2511,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2515,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2536,
    "end": 2542
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2543,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 2548,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2570,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "OkClass2",
    "start": 2576,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2594,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2606,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "clazz",
    "start": 2614,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "ExampleClass",
    "start": 2621,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2638,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 2645,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 2653,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2668,
    "end": 2669
  }
]
```

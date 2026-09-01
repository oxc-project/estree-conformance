__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextChannel",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 39
          },
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
              "start": 44,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "text",
                  "raw": "'text'",
                  "start": 50,
                  "end": 56
                },
                "start": 50,
                "end": 56
              },
              "start": 48,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 44,
            "end": 57
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "phoneNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "accessibility": null,
            "static": false,
            "start": 62,
            "end": 82
          }
        ],
        "start": 22,
        "end": 84
      },
      "declare": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmailChannel",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 108
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 115,
            "end": 126
          },
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
              "start": 131,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "email",
                  "raw": "'email'",
                  "start": 137,
                  "end": 144
                },
                "start": 137,
                "end": 144
              },
              "start": 135,
              "end": 144
            },
            "accessibility": null,
            "static": false,
            "start": 131,
            "end": 145
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addres",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 150,
            "end": 165
          }
        ],
        "start": 109,
        "end": 167
      },
      "declare": false,
      "start": 86,
      "end": 167
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Channel",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 181
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TextChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 195
            },
            "typeArguments": null,
            "start": 184,
            "end": 195
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmailChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 210
            },
            "typeArguments": null,
            "start": 198,
            "end": 210
          }
        ],
        "start": 184,
        "end": 210
      },
      "declare": false,
      "start": 169,
      "end": 211
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ChannelType",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 236
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Channel",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 246
            },
            "typeArguments": null,
            "start": 239,
            "end": 246
          },
          "extendsType": {
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
                  "start": 257,
                  "end": 261
                },
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
                        "start": 269,
                        "end": 270
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 269,
                      "end": 270
                    },
                    "start": 263,
                    "end": 270
                  },
                  "start": 261,
                  "end": 270
                },
                "accessibility": null,
                "static": false,
                "start": 257,
                "end": 270
              }
            ],
            "start": 255,
            "end": 272
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 276
            },
            "typeArguments": null,
            "start": 275,
            "end": 276
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 279,
            "end": 284
          },
          "start": 239,
          "end": 284
        },
        "declare": false,
        "start": 220,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 213,
      "end": 285
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 296
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
              "start": 297,
              "end": 298
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 297,
            "end": 298
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 301
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
                  "start": 316,
                  "end": 317
                },
                "typeArguments": null,
                "start": 316,
                "end": 317
              },
              "start": 310,
              "end": 317
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 300,
            "end": 317
          }
        ],
        "start": 296,
        "end": 318
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 325
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
                "start": 331,
                "end": 332
              },
              "typeArguments": null,
              "start": 331,
              "end": 332
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 343
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
                          "start": 353,
                          "end": 354
                        },
                        "typeArguments": null,
                        "start": 353,
                        "end": 354
                      },
                      "start": 347,
                      "end": 354
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 357,
                      "end": 358
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 339,
                    "end": 360
                  },
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 367
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 372
                      },
                      "typeArguments": null,
                      "start": 371,
                      "end": 372
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 375,
                      "end": 380
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 363,
                    "end": 382
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 391,
                                "end": 397
                              },
                              "start": 389,
                              "end": 397
                            },
                            "start": 388,
                            "end": 397
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 400,
                            "end": 405
                          },
                          "start": 398,
                          "end": 405
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 387,
                        "end": 405
                      }
                    ],
                    "start": 385,
                    "end": 407
                  }
                ],
                "start": 339,
                "end": 407
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
                    "start": 415,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 415,
                  "end": 416
                },
                "start": 409,
                "end": 416
              },
              "start": 338,
              "end": 417
            }
          ],
          "start": 325,
          "end": 419
        },
        "start": 321,
        "end": 419
      },
      "declare": false,
      "start": 287,
      "end": 420
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChannelOfType",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 440
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
              "start": 441,
              "end": 442
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChannelType",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 462
              },
              "typeArguments": null,
              "start": 451,
              "end": 462
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 441,
            "end": 462
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Channel",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 475
              },
              "typeArguments": null,
              "start": 468,
              "end": 475
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 464,
            "end": 475
          }
        ],
        "start": 440,
        "end": 476
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 480
          },
          "typeArguments": null,
          "start": 479,
          "end": 480
        },
        "extendsType": {
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
                "start": 491,
                "end": 495
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
                    "start": 497,
                    "end": 498
                  },
                  "typeArguments": null,
                  "start": 497,
                  "end": 498
                },
                "start": 495,
                "end": 498
              },
              "accessibility": null,
              "static": false,
              "start": 491,
              "end": 498
            }
          ],
          "start": 489,
          "end": 500
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "typeArguments": null,
          "start": 507,
          "end": 508
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 515,
          "end": 520
        },
        "start": 479,
        "end": 520
      },
      "declare": false,
      "start": 422,
      "end": 521
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewChannel",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 546
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
                "start": 547,
                "end": 548
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Channel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 564
                },
                "typeArguments": null,
                "start": 557,
                "end": 564
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 547,
              "end": 564
            }
          ],
          "start": 546,
          "end": 565
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
                "start": 568,
                "end": 572
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
                      "start": 573,
                      "end": 574
                    },
                    "typeArguments": null,
                    "start": 573,
                    "end": 574
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "type",
                      "raw": "'type'",
                      "start": 576,
                      "end": 582
                    },
                    "start": 576,
                    "end": 582
                  }
                ],
                "start": 572,
                "end": 583
              },
              "start": 568,
              "end": 583
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 597
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Omit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 598,
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
                        },
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "type",
                                "raw": "'type'",
                                "start": 606,
                                "end": 612
                              },
                              "start": 606,
                              "end": 612
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "id",
                                "raw": "'id'",
                                "start": 615,
                                "end": 619
                              },
                              "start": 615,
                              "end": 619
                            }
                          ],
                          "start": 606,
                          "end": 619
                        }
                      ],
                      "start": 602,
                      "end": 620
                    },
                    "start": 598,
                    "end": 620
                  }
                ],
                "start": 597,
                "end": 621
              },
              "start": 590,
              "end": 621
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
                    "name": "localChannelId",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 640
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 642,
                      "end": 648
                    },
                    "start": 640,
                    "end": 648
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 626,
                  "end": 648
                }
              ],
              "start": 624,
              "end": 650
            }
          ],
          "start": 568,
          "end": 650
        },
        "declare": false,
        "start": 531,
        "end": 651
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 524,
      "end": 651
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeNewChannel",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 684
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 685,
                "end": 686
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ChannelType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 706
                },
                "typeArguments": null,
                "start": 695,
                "end": 706
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 685,
              "end": 706
            }
          ],
          "start": 684,
          "end": 707
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
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
                  "start": 714,
                  "end": 715
                },
                "typeArguments": null,
                "start": 714,
                "end": 715
              },
              "start": 712,
              "end": 715
            },
            "start": 708,
            "end": 715
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NewChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 728
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ChannelOfType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 742
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
                          "start": 743,
                          "end": 744
                        },
                        "typeArguments": null,
                        "start": 743,
                        "end": 744
                      }
                    ],
                    "start": 742,
                    "end": 745
                  },
                  "start": 729,
                  "end": 745
                }
              ],
              "start": 728,
              "end": 746
            },
            "start": 718,
            "end": 746
          },
          "start": 716,
          "end": 746
        },
        "body": {
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
                    "name": "localChannelId",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 773
                  },
                  "init": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "blahblahblah",
                          "cooked": "blahblahblah"
                        },
                        "tail": true,
                        "start": 776,
                        "end": 790
                      }
                    ],
                    "expressions": [],
                    "start": 776,
                    "end": 790
                  },
                  "definite": false,
                  "start": 759,
                  "end": 790
                }
              ],
              "declare": false,
              "start": 753,
              "end": 791
            },
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 809
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 809
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 805,
                    "end": 809
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localChannelId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 825
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localChannelId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 825
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 811,
                    "end": 825
                  }
                ],
                "start": 803,
                "end": 827
              },
              "start": 796,
              "end": 828
            }
          ],
          "start": 747,
          "end": 830
        },
        "expression": false,
        "start": 661,
        "end": 830
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 654,
      "end": 830
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
            "name": "newTextChannel",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 852
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeNewChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 855,
              "end": 869
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "text",
                "raw": "'text'",
                "start": 870,
                "end": 876
              }
            ],
            "optional": false,
            "start": 855,
            "end": 877
          },
          "definite": false,
          "start": 838,
          "end": 877
        }
      ],
      "declare": false,
      "start": 832,
      "end": 878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "newTextChannel",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 913
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "phoneNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 914,
            "end": 925
          },
          "optional": false,
          "computed": false,
          "start": 899,
          "end": 925
        },
        "right": {
          "type": "Literal",
          "value": "613-555-1234",
          "raw": "'613-555-1234'",
          "start": 928,
          "end": 942
        },
        "start": 899,
        "end": 942
      },
      "directive": null,
      "start": 899,
      "end": 943
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
            "name": "newTextChannel2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NewChannel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 979
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TextChannel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 980,
                        "end": 991
                      },
                      "typeArguments": null,
                      "start": 980,
                      "end": 991
                    }
                  ],
                  "start": 979,
                  "end": 992
                },
                "start": 969,
                "end": 992
              },
              "start": 967,
              "end": 992
            },
            "start": 951,
            "end": 992
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeNewChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 1009
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "text",
                "raw": "'text'",
                "start": 1010,
                "end": 1016
              }
            ],
            "optional": false,
            "start": 995,
            "end": 1017
          },
          "definite": false,
          "start": 951,
          "end": 1017
        }
      ],
      "declare": false,
      "start": 945,
      "end": 1018
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "newTextChannel2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1058,
            "end": 1073
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "phoneNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1074,
            "end": 1085
          },
          "optional": false,
          "computed": false,
          "start": 1058,
          "end": 1085
        },
        "right": {
          "type": "Literal",
          "value": "613-555-1234",
          "raw": "'613-555-1234'",
          "start": 1088,
          "end": 1102
        },
        "start": 1058,
        "end": 1102
      },
      "directive": null,
      "start": 1058,
      "end": 1103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "TextChannel",
    "start": 10,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "phoneNumber",
    "start": 62,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 86,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "EmailChannel",
    "start": 96,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
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
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "String",
    "value": "'email'",
    "start": 137,
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
    "value": "addres",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 169,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Channel",
    "start": 174,
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
    "value": "TextChannel",
    "start": 184,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "EmailChannel",
    "start": 198,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 213,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 220,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "ChannelType",
    "start": 225,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Channel",
    "start": 239,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 257,
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
    "value": "infer",
    "start": 263,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 279,
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
    "start": 287,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 297,
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
    "value": "K",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 302,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 310,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 344,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 347,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
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
    "value": "P",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 368,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 400,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 409,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 418,
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
    "value": "type",
    "start": 422,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "ChannelOfType",
    "start": 427,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 443,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "ChannelType",
    "start": 451,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Channel",
    "start": 468,
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
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 491,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 515,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 524,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 531,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "NewChannel",
    "start": 536,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 549,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "Channel",
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
    "type": "Identifier",
    "value": "Pick",
    "start": 568,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 574,
    "end": 575
  },
  {
    "type": "String",
    "value": "'type'",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 590,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 598,
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
    "value": ",",
    "start": 604,
    "end": 605
  },
  {
    "type": "String",
    "value": "'type'",
    "start": 606,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 613,
    "end": 614
  },
  {
    "type": "String",
    "value": "'id'",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "localChannelId",
    "start": 626,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 654,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 661,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "makeNewChannel",
    "start": 670,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 687,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "ChannelType",
    "start": 695,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 708,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "NewChannel",
    "start": 718,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "ChannelOfType",
    "start": 729,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 753,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "localChannelId",
    "start": 759,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775
  },
  {
    "type": "Template",
    "value": "`blahblahblah`",
    "start": 776,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "localChannelId",
    "start": 811,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 832,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "newTextChannel",
    "start": 838,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "makeNewChannel",
    "start": 855,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 870,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "newTextChannel",
    "start": 899,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "phoneNumber",
    "start": 914,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 926,
    "end": 927
  },
  {
    "type": "String",
    "value": "'613-555-1234'",
    "start": 928,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 945,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "newTextChannel2",
    "start": 951,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "NewChannel",
    "start": 969,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "TextChannel",
    "start": 980,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "makeNewChannel",
    "start": 995,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "newTextChannel2",
    "start": 1058,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "phoneNumber",
    "start": 1074,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "String",
    "value": "'613-555-1234'",
    "start": 1088,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  }
]
```

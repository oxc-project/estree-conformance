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
        "name": "ZodType",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 32,
                      "end": 38
                    },
                    "start": 32,
                    "end": 38
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 41,
                      "end": 48
                    },
                    "start": 41,
                    "end": 48
                  }
                ],
                "start": 32,
                "end": 48
              },
              "start": 30,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 49
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              },
              "start": 58,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 52,
            "end": 64
          }
        ],
        "start": 18,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodString",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 87
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 103
          },
          "typeArguments": null,
          "start": 96,
          "end": 103
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 118,
                  "end": 125
                },
                "start": 118,
                "end": 125
              },
              "start": 116,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 108,
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
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 137,
                "end": 143
              },
              "start": 135,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 144
          }
        ],
        "start": 104,
        "end": 146
      },
      "declare": false,
      "start": 68,
      "end": 146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 161
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 170
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 171,
              "end": 177
            },
            {
              "type": "TSAnyKeyword",
              "start": 179,
              "end": 182
            }
          ],
          "start": 170,
          "end": 183
        },
        "start": 164,
        "end": 183
      },
      "declare": false,
      "start": 148,
      "end": 184
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prettify",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 198
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
              "start": 199,
              "end": 200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 199,
            "end": 200
          }
        ],
        "start": 198,
        "end": 201
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
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
                  "start": 218,
                  "end": 219
                },
                "typeArguments": null,
                "start": 218,
                "end": 219
              },
              "start": 212,
              "end": 219
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
                  "start": 222,
                  "end": 223
                },
                "typeArguments": null,
                "start": 222,
                "end": 223
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
                },
                "typeArguments": null,
                "start": 224,
                "end": 225
              },
              "start": 222,
              "end": 226
            },
            "optional": false,
            "readonly": null,
            "start": 204,
            "end": 228
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 231,
            "end": 233
          }
        ],
        "start": 204,
        "end": 233
      },
      "declare": false,
      "start": 185,
      "end": 234
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 255
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
              "start": 256,
              "end": 261
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 278
              },
              "typeArguments": null,
              "start": 270,
              "end": 278
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 278
          }
        ],
        "start": 255,
        "end": 279
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prettify",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 290
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "start": 301,
                    "end": 302
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
                        "start": 312,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 312,
                      "end": 317
                    },
                    "start": 306,
                    "end": 317
                  },
                  "nameType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 326
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 326
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 328
                        },
                        "typeArguments": null,
                        "start": 327,
                        "end": 328
                      },
                      "start": 321,
                      "end": 329
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
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 340,
                            "end": 348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "true",
                                "raw": "\"true\"",
                                "start": 350,
                                "end": 356
                              },
                              "start": 350,
                              "end": 356
                            },
                            "start": 348,
                            "end": 356
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 340,
                          "end": 356
                        }
                      ],
                      "start": 338,
                      "end": 358
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 367,
                        "end": 368
                      },
                      "typeArguments": null,
                      "start": 367,
                      "end": 368
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 377,
                      "end": 382
                    },
                    "start": 321,
                    "end": 382
                  },
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
                          "start": 386,
                          "end": 391
                        },
                        "typeArguments": null,
                        "start": 386,
                        "end": 391
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 393
                        },
                        "typeArguments": null,
                        "start": 392,
                        "end": 393
                      },
                      "start": 386,
                      "end": 394
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 395,
                        "end": 403
                      },
                      "start": 395,
                      "end": 403
                    },
                    "start": 386,
                    "end": 404
                  },
                  "optional": true,
                  "readonly": null,
                  "start": 294,
                  "end": 409
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
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
                        "start": 430,
                        "end": 435
                      },
                      "typeArguments": null,
                      "start": 430,
                      "end": 435
                    },
                    "start": 424,
                    "end": 435
                  },
                  "nameType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 444
                        },
                        "typeArguments": null,
                        "start": 439,
                        "end": 444
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "typeArguments": null,
                        "start": 445,
                        "end": 446
                      },
                      "start": 439,
                      "end": 447
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
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 466
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "true",
                                "raw": "\"true\"",
                                "start": 468,
                                "end": 474
                              },
                              "start": 468,
                              "end": 474
                            },
                            "start": 466,
                            "end": 474
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 458,
                          "end": 474
                        }
                      ],
                      "start": 456,
                      "end": 476
                    },
                    "trueType": {
                      "type": "TSNeverKeyword",
                      "start": 485,
                      "end": 490
                    },
                    "falseType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 500
                      },
                      "typeArguments": null,
                      "start": 499,
                      "end": 500
                    },
                    "start": 439,
                    "end": 500
                  },
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
                          "start": 503,
                          "end": 508
                        },
                        "typeArguments": null,
                        "start": 503,
                        "end": 508
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 509,
                          "end": 510
                        },
                        "typeArguments": null,
                        "start": 509,
                        "end": 510
                      },
                      "start": 503,
                      "end": 511
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 512,
                        "end": 520
                      },
                      "start": 512,
                      "end": 520
                    },
                    "start": 503,
                    "end": 521
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 412,
                  "end": 526
                }
              ],
              "start": 294,
              "end": 526
            }
          ],
          "start": 290,
          "end": 528
        },
        "start": 282,
        "end": 528
      },
      "declare": false,
      "start": 235,
      "end": 529
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 540,
        "end": 549
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
              "start": 550,
              "end": 551
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 568
              },
              "typeArguments": null,
              "start": 560,
              "end": 568
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 550,
            "end": 568
          }
        ],
        "start": 549,
        "end": 569
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 585
          },
          "typeArguments": null,
          "start": 578,
          "end": 585
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 600,
                  "end": 607
                },
                "start": 600,
                "end": 607
              },
              "start": 598,
              "end": 607
            },
            "accessibility": null,
            "static": false,
            "start": 590,
            "end": 608
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 617
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferObjectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 634
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
                        "start": 635,
                        "end": 636
                      },
                      "typeArguments": null,
                      "start": 635,
                      "end": 636
                    }
                  ],
                  "start": 634,
                  "end": 637
                },
                "start": 619,
                "end": 637
              },
              "start": 617,
              "end": 637
            },
            "accessibility": null,
            "static": false,
            "start": 611,
            "end": 638
          }
        ],
        "start": 586,
        "end": 640
      },
      "declare": false,
      "start": 530,
      "end": 640
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 663
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
              "start": 664,
              "end": 665
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 681
              },
              "typeArguments": null,
              "start": 674,
              "end": 681
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 664,
            "end": 681
          }
        ],
        "start": 663,
        "end": 682
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 698
          },
          "typeArguments": null,
          "start": 691,
          "end": 698
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 703,
              "end": 711
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "\"true\"",
                  "start": 713,
                  "end": 719
                },
                "start": 713,
                "end": 719
              },
              "start": 711,
              "end": 719
            },
            "accessibility": null,
            "static": false,
            "start": 703,
            "end": 720
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 729
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                        "start": 731,
                        "end": 732
                      },
                      "typeArguments": null,
                      "start": 731,
                      "end": 732
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 733,
                        "end": 741
                      },
                      "start": 733,
                      "end": 741
                    },
                    "start": 731,
                    "end": 742
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 745,
                    "end": 754
                  }
                ],
                "start": 731,
                "end": 754
              },
              "start": 729,
              "end": 754
            },
            "accessibility": null,
            "static": false,
            "start": 723,
            "end": 755
          }
        ],
        "start": 699,
        "end": 757
      },
      "declare": false,
      "start": 642,
      "end": 757
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "object",
        "optional": false,
        "typeAnnotation": null,
        "start": 776,
        "end": 782
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
              "start": 783,
              "end": 784
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 801
              },
              "typeArguments": null,
              "start": 793,
              "end": 801
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 783,
            "end": 801
          }
        ],
        "start": 782,
        "end": 802
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
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
                "start": 810,
                "end": 811
              },
              "typeArguments": null,
              "start": 810,
              "end": 811
            },
            "start": 808,
            "end": 811
          },
          "start": 803,
          "end": 811
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 814,
            "end": 823
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
                  "start": 824,
                  "end": 825
                },
                "typeArguments": null,
                "start": 824,
                "end": 825
              }
            ],
            "start": 823,
            "end": 826
          },
          "start": 814,
          "end": 826
        },
        "start": 812,
        "end": 826
      },
      "body": null,
      "expression": false,
      "start": 759,
      "end": 827
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 851
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodString",
            "optional": false,
            "typeAnnotation": null,
            "start": 855,
            "end": 864
          },
          "typeArguments": null,
          "start": 855,
          "end": 864
        },
        "start": 853,
        "end": 864
      },
      "body": null,
      "expression": false,
      "start": 828,
      "end": 865
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "optional",
        "optional": false,
        "typeAnnotation": null,
        "start": 883,
        "end": 891
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
              "start": 892,
              "end": 893
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 909
              },
              "typeArguments": null,
              "start": 902,
              "end": 909
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 892,
            "end": 909
          }
        ],
        "start": 891,
        "end": 910
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "schema",
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
                "start": 919,
                "end": 920
              },
              "typeArguments": null,
              "start": 919,
              "end": 920
            },
            "start": 917,
            "end": 920
          },
          "start": 911,
          "end": 920
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 934
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
                  "start": 935,
                  "end": 936
                },
                "typeArguments": null,
                "start": 935,
                "end": 936
              }
            ],
            "start": 934,
            "end": 937
          },
          "start": 923,
          "end": 937
        },
        "start": 921,
        "end": 937
      },
      "body": null,
      "expression": false,
      "start": 866,
      "end": 938
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
            "name": "Category",
            "optional": false,
            "typeAnnotation": null,
            "start": 946,
            "end": 954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 963
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
                      "start": 968,
                      "end": 972
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 974,
                        "end": 980
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 974,
                      "end": 982
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 968,
                    "end": 982
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 990,
                      "end": 996
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "optional",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1012,
                                "end": 1020
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Category",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1021,
                                  "end": 1029
                                }
                              ],
                              "optional": false,
                              "start": 1012,
                              "end": 1030
                            },
                            "start": 1005,
                            "end": 1031
                          }
                        ],
                        "start": 999,
                        "end": 1035
                      },
                      "expression": false,
                      "start": 996,
                      "end": 1035
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 986,
                    "end": 1035
                  }
                ],
                "start": 964,
                "end": 1038
              }
            ],
            "optional": false,
            "start": 957,
            "end": 1039
          },
          "definite": false,
          "start": 946,
          "end": 1039
        }
      ],
      "declare": false,
      "start": 940,
      "end": 1040
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1059
            },
            "init": {
              "type": "ChainExpression",
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
                            "name": "Category",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1062,
                            "end": 1070
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "output",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1071,
                            "end": 1077
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1062,
                          "end": 1077
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1078,
                          "end": 1084
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1062,
                        "end": 1084
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1086,
                        "end": 1092
                      },
                      "optional": true,
                      "computed": false,
                      "start": 1062,
                      "end": 1092
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1094,
                      "end": 1100
                    },
                    "optional": true,
                    "computed": false,
                    "start": 1062,
                    "end": 1100
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1102,
                    "end": 1108
                  },
                  "optional": true,
                  "computed": false,
                  "start": 1062,
                  "end": 1108
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1114
                },
                "optional": true,
                "computed": false,
                "start": 1062,
                "end": 1114
              },
              "start": 1062,
              "end": 1114
            },
            "definite": false,
            "start": 1055,
            "end": 1114
          }
        ],
        "declare": false,
        "start": 1049,
        "end": 1115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1042,
      "end": 1115
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1115
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
    "value": "ZodType",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 22,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 39,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 68,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "ZodString",
    "start": 78,
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
    "value": "ZodType",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 108,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 118,
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
    "value": "output",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 148,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "ZodShape",
    "start": 153,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 185,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 190,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 209,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 235,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "InferObjectType",
    "start": 240,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 256,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 262,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "ZodShape",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 282,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 303,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 306,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 312,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 330,
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
    "value": "optional",
    "start": 340,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 350,
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
    "value": "?",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 377,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "Shape",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 395,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 421,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 424,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 430,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 436,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 448,
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
    "value": "optional",
    "start": 458,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 468,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 503,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 511,
    "end": 512
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 512,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 530,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "ZodObject",
    "start": 540,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 552,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "ZodShape",
    "start": 560,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 570,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 578,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 590,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 600,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "InferObjectType",
    "start": 619,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 642,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "ZodOptional",
    "start": 652,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 666,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 674,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 683,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 691,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 703,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 732,
    "end": 733
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 733,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 745,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 759,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 767,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 776,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 785,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "ZodShape",
    "start": 793,
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
    "value": "(",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "ZodObject",
    "start": 814,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 828,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 836,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 845,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "ZodString",
    "start": 855,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 866,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 874,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 883,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 894,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 902,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "ZodOptional",
    "start": 923,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 940,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 946,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 957,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 968,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 986,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 990,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 1012,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 1021,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
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
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1049,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1055,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 1062,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 1071,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1084,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1086,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1092,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1094,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1102,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1108,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1110,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115
  }
]
```

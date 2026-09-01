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
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 35
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 65
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              },
              "start": 65,
              "end": 73
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 74
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "visible",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 88,
                "end": 95
              },
              "start": 86,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 96
          }
        ],
        "start": 16,
        "end": 98
      },
      "declare": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Named",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 115
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 128,
                "end": 134
              },
              "start": 126,
              "end": 134
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 135
          }
        ],
        "start": 116,
        "end": 137
      },
      "declare": false,
      "start": 100,
      "end": 137
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 154
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 161,
            "end": 171
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 186
          }
        ],
        "start": 155,
        "end": 188
      },
      "declare": false,
      "start": 139,
      "end": 188
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 222
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 229
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 234
          },
          "typeArguments": null,
          "start": 233,
          "end": 234
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 237,
          "end": 243
        },
        "optional": false,
        "readonly": null,
        "start": 225,
        "end": 245
      },
      "declare": false,
      "start": 214,
      "end": 246
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 265
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 272
        },
        "constraint": {
          "type": "TSNumberKeyword",
          "start": 276,
          "end": 282
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 285,
          "end": 291
        },
        "optional": false,
        "readonly": null,
        "start": 268,
        "end": 293
      },
      "declare": false,
      "start": 257,
      "end": 294
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 313
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 320
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 328
          },
          "typeArguments": null,
          "start": 324,
          "end": 328
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 331,
          "end": 337
        },
        "optional": false,
        "readonly": null,
        "start": 316,
        "end": 339
      },
      "declare": false,
      "start": 305,
      "end": 340
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 359
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
          "start": 362,
          "end": 368
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 373
              },
              "typeArguments": null,
              "start": 369,
              "end": 373
            },
            {
              "type": "TSNumberKeyword",
              "start": 375,
              "end": 381
            }
          ],
          "start": 368,
          "end": 382
        },
        "start": 362,
        "end": 382
      },
      "declare": false,
      "start": 351,
      "end": 383
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 403
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 406,
          "end": 410
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
                "start": 411,
                "end": 416
              },
              "typeArguments": null,
              "start": 411,
              "end": 416
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 418,
                "end": 424
              },
              "start": 418,
              "end": 424
            }
          ],
          "start": 410,
          "end": 425
        },
        "start": 406,
        "end": 425
      },
      "declare": false,
      "start": 395,
      "end": 426
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 435
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 442
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
                "start": 443,
                "end": 448
              },
              "typeArguments": null,
              "start": 443,
              "end": 448
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 450,
                "end": 455
              },
              "start": 450,
              "end": 455
            }
          ],
          "start": 442,
          "end": 456
        },
        "start": 438,
        "end": 456
      },
      "declare": false,
      "start": 427,
      "end": 457
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 476
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 483
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
                "start": 484,
                "end": 489
              },
              "typeArguments": null,
              "start": 484,
              "end": 489
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 491,
                    "end": 497
                  },
                  "start": 491,
                  "end": 497
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 500,
                    "end": 505
                  },
                  "start": 500,
                  "end": 505
                }
              ],
              "start": 491,
              "end": 505
            }
          ],
          "start": 483,
          "end": 506
        },
        "start": 479,
        "end": 506
      },
      "declare": false,
      "start": 468,
      "end": 507
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 526
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
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
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 539
              },
              "typeArguments": null,
              "start": 534,
              "end": 539
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 552
                },
                "typeArguments": null,
                "start": 547,
                "end": 552
              },
              "start": 541,
              "end": 552
            }
          ],
          "start": 533,
          "end": 553
        },
        "start": 529,
        "end": 553
      },
      "declare": false,
      "start": 518,
      "end": 554
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 560,
        "end": 563
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 566,
          "end": 570
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
                "start": 571,
                "end": 576
              },
              "typeArguments": null,
              "start": 571,
              "end": 576
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 589
                },
                "typeArguments": null,
                "start": 584,
                "end": 589
              },
              "start": 578,
              "end": 589
            }
          ],
          "start": 570,
          "end": 590
        },
        "start": 566,
        "end": 590
      },
      "declare": false,
      "start": 555,
      "end": 591
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 610
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 617
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
                "start": 618,
                "end": 623
              },
              "typeArguments": null,
              "start": 618,
              "end": 623
            },
            {
              "type": "TSNeverKeyword",
              "start": 625,
              "end": 630
            }
          ],
          "start": 617,
          "end": 631
        },
        "start": 613,
        "end": 631
      },
      "declare": false,
      "start": 602,
      "end": 632
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T16",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 641
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 648
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
                "start": 649,
                "end": 654
              },
              "typeArguments": null,
              "start": 649,
              "end": 654
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 656,
              "end": 665
            }
          ],
          "start": 648,
          "end": 666
        },
        "start": 644,
        "end": 666
      },
      "declare": false,
      "start": 633,
      "end": 667
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 688,
        "end": 690
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
              "start": 691,
              "end": 692
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 691,
            "end": 692
          }
        ],
        "start": 690,
        "end": 693
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 698
              },
              "typeArguments": null,
              "start": 697,
              "end": 698
            },
            "start": 695,
            "end": 698
          },
          "start": 694,
          "end": 698
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 713,
                        "end": 717
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
                              "start": 718,
                              "end": 723
                            },
                            "typeArguments": null,
                            "start": 718,
                            "end": 723
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 725,
                              "end": 726
                            },
                            "typeArguments": null,
                            "start": 725,
                            "end": 726
                          }
                        ],
                        "start": 717,
                        "end": 727
                      },
                      "start": 713,
                      "end": 727
                    },
                    "start": 711,
                    "end": 727
                  },
                  "start": 710,
                  "end": 727
                },
                "init": null,
                "definite": false,
                "start": 710,
                "end": 727
              }
            ],
            "declare": false,
            "start": 706,
            "end": 728
          }
        ],
        "start": 700,
        "end": 740
      },
      "expression": false,
      "start": 679,
      "end": 740
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 751,
        "end": 753
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
              "start": 754,
              "end": 755
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 764,
                  "end": 770
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 773,
                  "end": 779
                }
              ],
              "start": 764,
              "end": 779
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 754,
            "end": 779
          }
        ],
        "start": 753,
        "end": 780
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 785
              },
              "typeArguments": null,
              "start": 784,
              "end": 785
            },
            "start": 782,
            "end": 785
          },
          "start": 781,
          "end": 785
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 800,
                        "end": 804
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
                              "start": 805,
                              "end": 810
                            },
                            "typeArguments": null,
                            "start": 805,
                            "end": 810
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 812,
                              "end": 813
                            },
                            "typeArguments": null,
                            "start": 812,
                            "end": 813
                          }
                        ],
                        "start": 804,
                        "end": 814
                      },
                      "start": 800,
                      "end": 814
                    },
                    "start": 798,
                    "end": 814
                  },
                  "start": 797,
                  "end": 814
                },
                "init": null,
                "definite": false,
                "start": 797,
                "end": 814
              }
            ],
            "declare": false,
            "start": 793,
            "end": 815
          }
        ],
        "start": 787,
        "end": 827
      },
      "expression": false,
      "start": 742,
      "end": 827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 840
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
              "start": 841,
              "end": 842
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
                  "start": 857,
                  "end": 862
                },
                "typeArguments": null,
                "start": 857,
                "end": 862
              },
              "start": 851,
              "end": 862
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 841,
            "end": 862
          }
        ],
        "start": 840,
        "end": 863
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 867,
                "end": 868
              },
              "typeArguments": null,
              "start": 867,
              "end": 868
            },
            "start": 865,
            "end": 868
          },
          "start": 864,
          "end": 868
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 883,
                        "end": 887
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
                              "start": 888,
                              "end": 893
                            },
                            "typeArguments": null,
                            "start": 888,
                            "end": 893
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 895,
                              "end": 896
                            },
                            "typeArguments": null,
                            "start": 895,
                            "end": 896
                          }
                        ],
                        "start": 887,
                        "end": 897
                      },
                      "start": 883,
                      "end": 897
                    },
                    "start": 881,
                    "end": 897
                  },
                  "start": 880,
                  "end": 897
                },
                "init": null,
                "definite": false,
                "start": 880,
                "end": 897
              }
            ],
            "declare": false,
            "start": 876,
            "end": 898
          }
        ],
        "start": 870,
        "end": 900
      },
      "expression": false,
      "start": 829,
      "end": 900
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 913
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
              "start": 914,
              "end": 915
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 935
                },
                "typeArguments": null,
                "start": 930,
                "end": 935
              },
              "start": 924,
              "end": 935
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 914,
            "end": 935
          }
        ],
        "start": 913,
        "end": 936
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 941
              },
              "typeArguments": null,
              "start": 940,
              "end": 941
            },
            "start": 938,
            "end": 941
          },
          "start": 937,
          "end": 941
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 956,
                        "end": 960
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
                              "start": 961,
                              "end": 966
                            },
                            "typeArguments": null,
                            "start": 961,
                            "end": 966
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 968,
                              "end": 969
                            },
                            "typeArguments": null,
                            "start": 968,
                            "end": 969
                          }
                        ],
                        "start": 960,
                        "end": 970
                      },
                      "start": 956,
                      "end": 970
                    },
                    "start": 954,
                    "end": 970
                  },
                  "start": 953,
                  "end": 970
                },
                "init": null,
                "definite": false,
                "start": 953,
                "end": 970
              }
            ],
            "declare": false,
            "start": 949,
            "end": 971
          }
        ],
        "start": 943,
        "end": 973
      },
      "expression": false,
      "start": 902,
      "end": 973
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1011,
        "end": 1014
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
              "start": 1015,
              "end": 1016
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1015,
            "end": 1016
          }
        ],
        "start": 1014,
        "end": 1017
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1032
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1042
                },
                "typeArguments": null,
                "start": 1041,
                "end": 1042
              },
              "start": 1035,
              "end": 1042
            },
            "declare": false,
            "start": 1026,
            "end": 1043
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1058,
                        "end": 1059
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
                            "start": 1069,
                            "end": 1070
                          },
                          "typeArguments": null,
                          "start": 1069,
                          "end": 1070
                        },
                        "start": 1063,
                        "end": 1070
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
                            "start": 1073,
                            "end": 1074
                          },
                          "typeArguments": null,
                          "start": 1073,
                          "end": 1074
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1075,
                            "end": 1076
                          },
                          "typeArguments": null,
                          "start": 1075,
                          "end": 1076
                        },
                        "start": 1073,
                        "end": 1077
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1055,
                      "end": 1079
                    },
                    "start": 1053,
                    "end": 1079
                  },
                  "start": 1052,
                  "end": 1079
                },
                "init": null,
                "definite": false,
                "start": 1052,
                "end": 1079
              }
            ],
            "declare": false,
            "start": 1048,
            "end": 1080
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1095,
                        "end": 1096
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
                            "start": 1106,
                            "end": 1107
                          },
                          "typeArguments": null,
                          "start": 1106,
                          "end": 1107
                        },
                        "start": 1100,
                        "end": 1107
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
                            "start": 1110,
                            "end": 1111
                          },
                          "typeArguments": null,
                          "start": 1110,
                          "end": 1111
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1112,
                            "end": 1113
                          },
                          "typeArguments": null,
                          "start": 1112,
                          "end": 1113
                        },
                        "start": 1110,
                        "end": 1114
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1092,
                      "end": 1116
                    },
                    "start": 1090,
                    "end": 1116
                  },
                  "start": 1089,
                  "end": 1116
                },
                "init": null,
                "definite": false,
                "start": 1089,
                "end": 1116
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1117
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1132,
                        "end": 1133
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1137,
                          "end": 1138
                        },
                        "typeArguments": null,
                        "start": 1137,
                        "end": 1138
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
                            "start": 1141,
                            "end": 1142
                          },
                          "typeArguments": null,
                          "start": 1141,
                          "end": 1142
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1143,
                            "end": 1144
                          },
                          "typeArguments": null,
                          "start": 1143,
                          "end": 1144
                        },
                        "start": 1141,
                        "end": 1145
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1129,
                      "end": 1147
                    },
                    "start": 1127,
                    "end": 1147
                  },
                  "start": 1126,
                  "end": 1147
                },
                "init": null,
                "definite": false,
                "start": 1126,
                "end": 1147
              }
            ],
            "declare": false,
            "start": 1122,
            "end": 1148
          }
        ],
        "start": 1020,
        "end": 1150
      },
      "expression": false,
      "start": 1002,
      "end": 1150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1161,
        "end": 1164
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
              "start": 1165,
              "end": 1166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1165,
            "end": 1166
          }
        ],
        "start": 1164,
        "end": 1167
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1186,
                        "end": 1187
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
                            "start": 1197,
                            "end": 1198
                          },
                          "typeArguments": null,
                          "start": 1197,
                          "end": 1198
                        },
                        "start": 1191,
                        "end": 1198
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
                            "start": 1201,
                            "end": 1202
                          },
                          "typeArguments": null,
                          "start": 1201,
                          "end": 1202
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1203,
                            "end": 1204
                          },
                          "typeArguments": null,
                          "start": 1203,
                          "end": 1204
                        },
                        "start": 1201,
                        "end": 1205
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1183,
                      "end": 1207
                    },
                    "start": 1181,
                    "end": 1207
                  },
                  "start": 1180,
                  "end": 1207
                },
                "init": null,
                "definite": false,
                "start": 1180,
                "end": 1207
              }
            ],
            "declare": false,
            "start": 1176,
            "end": 1208
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1223,
                        "end": 1224
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
                            "start": 1234,
                            "end": 1235
                          },
                          "typeArguments": null,
                          "start": 1234,
                          "end": 1235
                        },
                        "start": 1228,
                        "end": 1235
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
                            "start": 1239,
                            "end": 1240
                          },
                          "typeArguments": null,
                          "start": 1239,
                          "end": 1240
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1241,
                            "end": 1242
                          },
                          "typeArguments": null,
                          "start": 1241,
                          "end": 1242
                        },
                        "start": 1239,
                        "end": 1243
                      },
                      "optional": true,
                      "readonly": null,
                      "start": 1220,
                      "end": 1245
                    },
                    "start": 1218,
                    "end": 1245
                  },
                  "start": 1217,
                  "end": 1245
                },
                "init": null,
                "definite": false,
                "start": 1217,
                "end": 1245
              }
            ],
            "declare": false,
            "start": 1213,
            "end": 1246
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1280,
                        "end": 1281
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
                            "start": 1291,
                            "end": 1292
                          },
                          "typeArguments": null,
                          "start": 1291,
                          "end": 1292
                        },
                        "start": 1285,
                        "end": 1292
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
                            "start": 1295,
                            "end": 1296
                          },
                          "typeArguments": null,
                          "start": 1295,
                          "end": 1296
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1297,
                            "end": 1298
                          },
                          "typeArguments": null,
                          "start": 1297,
                          "end": 1298
                        },
                        "start": 1295,
                        "end": 1299
                      },
                      "optional": false,
                      "readonly": true,
                      "start": 1268,
                      "end": 1301
                    },
                    "start": 1266,
                    "end": 1301
                  },
                  "start": 1265,
                  "end": 1301
                },
                "init": null,
                "definite": false,
                "start": 1265,
                "end": 1301
              }
            ],
            "declare": false,
            "start": 1261,
            "end": 1302
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1336,
                        "end": 1337
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
                            "start": 1347,
                            "end": 1348
                          },
                          "typeArguments": null,
                          "start": 1347,
                          "end": 1348
                        },
                        "start": 1341,
                        "end": 1348
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
                            "start": 1352,
                            "end": 1353
                          },
                          "typeArguments": null,
                          "start": 1352,
                          "end": 1353
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1354,
                            "end": 1355
                          },
                          "typeArguments": null,
                          "start": 1354,
                          "end": 1355
                        },
                        "start": 1352,
                        "end": 1356
                      },
                      "optional": true,
                      "readonly": true,
                      "start": 1324,
                      "end": 1358
                    },
                    "start": 1322,
                    "end": 1358
                  },
                  "start": 1321,
                  "end": 1358
                },
                "init": null,
                "definite": false,
                "start": 1321,
                "end": 1358
              }
            ],
            "declare": false,
            "start": 1317,
            "end": 1359
          }
        ],
        "start": 1170,
        "end": 1371
      },
      "expression": false,
      "start": 1152,
      "end": 1371
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1382,
        "end": 1385
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
              "start": 1386,
              "end": 1387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1386,
            "end": 1387
          }
        ],
        "start": 1385,
        "end": 1388
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1407,
                        "end": 1408
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
                            "start": 1418,
                            "end": 1419
                          },
                          "typeArguments": null,
                          "start": 1418,
                          "end": 1419
                        },
                        "start": 1412,
                        "end": 1419
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
                            "start": 1422,
                            "end": 1423
                          },
                          "typeArguments": null,
                          "start": 1422,
                          "end": 1423
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1424,
                            "end": 1425
                          },
                          "typeArguments": null,
                          "start": 1424,
                          "end": 1425
                        },
                        "start": 1422,
                        "end": 1426
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1404,
                      "end": 1428
                    },
                    "start": 1402,
                    "end": 1428
                  },
                  "start": 1401,
                  "end": 1428
                },
                "init": null,
                "definite": false,
                "start": 1401,
                "end": 1428
              }
            ],
            "declare": false,
            "start": 1397,
            "end": 1429
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1444,
                        "end": 1445
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
                            "start": 1455,
                            "end": 1456
                          },
                          "typeArguments": null,
                          "start": 1455,
                          "end": 1456
                        },
                        "start": 1449,
                        "end": 1456
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1459,
                              "end": 1460
                            },
                            "typeArguments": null,
                            "start": 1459,
                            "end": 1460
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1461,
                              "end": 1462
                            },
                            "typeArguments": null,
                            "start": 1461,
                            "end": 1462
                          },
                          "start": 1459,
                          "end": 1463
                        },
                        "start": 1459,
                        "end": 1465
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1441,
                      "end": 1467
                    },
                    "start": 1439,
                    "end": 1467
                  },
                  "start": 1438,
                  "end": 1467
                },
                "init": null,
                "definite": false,
                "start": 1438,
                "end": 1467
              }
            ],
            "declare": false,
            "start": 1434,
            "end": 1468
          }
        ],
        "start": 1391,
        "end": 1480
      },
      "expression": false,
      "start": 1373,
      "end": 1480
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objAndReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 1555,
        "end": 1569
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
              "start": 1570,
              "end": 1571
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1570,
            "end": 1571
          }
        ],
        "start": 1569,
        "end": 1572
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "primary",
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
                "start": 1582,
                "end": 1583
              },
              "typeArguments": null,
              "start": 1582,
              "end": 1583
            },
            "start": 1580,
            "end": 1583
          },
          "start": 1573,
          "end": 1583
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "secondary",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1596,
                "end": 1604
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
                      "start": 1605,
                      "end": 1606
                    },
                    "typeArguments": null,
                    "start": 1605,
                    "end": 1606
                  }
                ],
                "start": 1604,
                "end": 1607
              },
              "start": 1596,
              "end": 1607
            },
            "start": 1594,
            "end": 1607
          },
          "start": 1585,
          "end": 1607
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
            "start": 1610,
            "end": 1611
          },
          "typeArguments": null,
          "start": 1610,
          "end": 1611
        },
        "start": 1608,
        "end": 1611
      },
      "body": null,
      "expression": false,
      "start": 1538,
      "end": 1612
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objAndPartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 1630,
        "end": 1643
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
              "start": 1644,
              "end": 1645
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1644,
            "end": 1645
          }
        ],
        "start": 1643,
        "end": 1646
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "primary",
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
                "start": 1656,
                "end": 1657
              },
              "typeArguments": null,
              "start": 1656,
              "end": 1657
            },
            "start": 1654,
            "end": 1657
          },
          "start": 1647,
          "end": 1657
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "secondary",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1670,
                "end": 1677
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
                      "start": 1678,
                      "end": 1679
                    },
                    "typeArguments": null,
                    "start": 1678,
                    "end": 1679
                  }
                ],
                "start": 1677,
                "end": 1680
              },
              "start": 1670,
              "end": 1680
            },
            "start": 1668,
            "end": 1680
          },
          "start": 1659,
          "end": 1680
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
            "start": 1683,
            "end": 1684
          },
          "typeArguments": null,
          "start": 1683,
          "end": 1684
        },
        "start": 1681,
        "end": 1684
      },
      "body": null,
      "expression": false,
      "start": 1613,
      "end": 1685
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1696,
        "end": 1699
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1712,
                  "end": 1714
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndReadonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1717,
                    "end": 1731
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
                            "start": 1734,
                            "end": 1735
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1737,
                            "end": 1738
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1734,
                          "end": 1738
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
                            "start": 1740,
                            "end": 1741
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1743,
                            "end": 1744
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1740,
                          "end": 1744
                        }
                      ],
                      "start": 1732,
                      "end": 1746
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
                            "start": 1750,
                            "end": 1751
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1753,
                            "end": 1754
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1750,
                          "end": 1754
                        }
                      ],
                      "start": 1748,
                      "end": 1756
                    }
                  ],
                  "optional": false,
                  "start": 1717,
                  "end": 1757
                },
                "definite": false,
                "start": 1712,
                "end": 1757
              }
            ],
            "declare": false,
            "start": 1708,
            "end": 1758
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1777,
                  "end": 1779
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndReadonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1782,
                    "end": 1796
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
                            "start": 1799,
                            "end": 1800
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1802,
                            "end": 1803
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1799,
                          "end": 1803
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
                            "start": 1805,
                            "end": 1806
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1808,
                            "end": 1809
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1805,
                          "end": 1809
                        }
                      ],
                      "start": 1797,
                      "end": 1811
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
                            "start": 1815,
                            "end": 1816
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1818,
                            "end": 1819
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1815,
                          "end": 1819
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
                            "start": 1821,
                            "end": 1822
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1824,
                            "end": 1825
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1821,
                          "end": 1825
                        }
                      ],
                      "start": 1813,
                      "end": 1827
                    }
                  ],
                  "optional": false,
                  "start": 1782,
                  "end": 1828
                },
                "definite": false,
                "start": 1777,
                "end": 1828
              }
            ],
            "declare": false,
            "start": 1773,
            "end": 1829
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1838,
                  "end": 1840
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndReadonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1843,
                    "end": 1857
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
                            "start": 1860,
                            "end": 1861
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1863,
                            "end": 1864
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1860,
                          "end": 1864
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
                            "start": 1866,
                            "end": 1867
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1869,
                            "end": 1870
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1866,
                          "end": 1870
                        }
                      ],
                      "start": 1858,
                      "end": 1872
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
                            "start": 1876,
                            "end": 1877
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1879,
                            "end": 1880
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1876,
                          "end": 1880
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
                            "start": 1882,
                            "end": 1883
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1885,
                            "end": 1886
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1882,
                          "end": 1886
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1888,
                            "end": 1889
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1891,
                            "end": 1892
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1888,
                          "end": 1892
                        }
                      ],
                      "start": 1874,
                      "end": 1894
                    }
                  ],
                  "optional": false,
                  "start": 1843,
                  "end": 1895
                },
                "definite": false,
                "start": 1838,
                "end": 1895
              }
            ],
            "declare": false,
            "start": 1834,
            "end": 1896
          }
        ],
        "start": 1702,
        "end": 1908
      },
      "expression": false,
      "start": 1687,
      "end": 1908
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1919,
        "end": 1922
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1935,
                  "end": 1937
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndPartial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1940,
                    "end": 1953
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
                            "start": 1956,
                            "end": 1957
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1959,
                            "end": 1960
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1956,
                          "end": 1960
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
                            "start": 1962,
                            "end": 1963
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1965,
                            "end": 1966
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1962,
                          "end": 1966
                        }
                      ],
                      "start": 1954,
                      "end": 1968
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
                            "start": 1972,
                            "end": 1973
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1975,
                            "end": 1976
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1972,
                          "end": 1976
                        }
                      ],
                      "start": 1970,
                      "end": 1978
                    }
                  ],
                  "optional": false,
                  "start": 1940,
                  "end": 1979
                },
                "definite": false,
                "start": 1935,
                "end": 1979
              }
            ],
            "declare": false,
            "start": 1931,
            "end": 1980
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1989,
                  "end": 1991
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndPartial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1994,
                    "end": 2007
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
                            "start": 2010,
                            "end": 2011
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2013,
                            "end": 2014
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2010,
                          "end": 2014
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
                            "start": 2016,
                            "end": 2017
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2019,
                            "end": 2020
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2016,
                          "end": 2020
                        }
                      ],
                      "start": 2008,
                      "end": 2022
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
                            "start": 2026,
                            "end": 2027
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2029,
                            "end": 2030
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2026,
                          "end": 2030
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
                            "start": 2032,
                            "end": 2033
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2035,
                            "end": 2036
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2032,
                          "end": 2036
                        }
                      ],
                      "start": 2024,
                      "end": 2038
                    }
                  ],
                  "optional": false,
                  "start": 1994,
                  "end": 2039
                },
                "definite": false,
                "start": 1989,
                "end": 2039
              }
            ],
            "declare": false,
            "start": 1985,
            "end": 2040
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2049,
                  "end": 2051
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndPartial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2054,
                    "end": 2067
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
                            "start": 2070,
                            "end": 2071
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2073,
                            "end": 2074
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2070,
                          "end": 2074
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
                            "start": 2076,
                            "end": 2077
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2079,
                            "end": 2080
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2076,
                          "end": 2080
                        }
                      ],
                      "start": 2068,
                      "end": 2082
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
                            "start": 2086,
                            "end": 2087
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2089,
                            "end": 2090
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2086,
                          "end": 2090
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
                            "start": 2092,
                            "end": 2093
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2095,
                            "end": 2096
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2092,
                          "end": 2096
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2098,
                            "end": 2099
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2101,
                            "end": 2102
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2098,
                          "end": 2102
                        }
                      ],
                      "start": 2084,
                      "end": 2104
                    }
                  ],
                  "optional": false,
                  "start": 2054,
                  "end": 2105
                },
                "definite": false,
                "start": 2049,
                "end": 2105
              }
            ],
            "declare": false,
            "start": 2045,
            "end": 2106
          }
        ],
        "start": 1925,
        "end": 2118
      },
      "expression": false,
      "start": 1910,
      "end": 2118
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2191,
        "end": 2194
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2201,
              "end": 2202
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2204,
                "end": 2210
              },
              "start": 2202,
              "end": 2210
            },
            "accessibility": null,
            "static": false,
            "start": 2201,
            "end": 2211
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2216,
              "end": 2217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2220,
                "end": 2226
              },
              "start": 2218,
              "end": 2226
            },
            "accessibility": null,
            "static": false,
            "start": 2216,
            "end": 2227
          }
        ],
        "start": 2195,
        "end": 2229
      },
      "declare": false,
      "start": 2181,
      "end": 2229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setState",
        "optional": false,
        "typeAnnotation": null,
        "start": 2240,
        "end": 2248
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
              "start": 2249,
              "end": 2250
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2249,
            "end": 2250
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2252,
              "end": 2253
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
                  "start": 2268,
                  "end": 2269
                },
                "typeArguments": null,
                "start": 2268,
                "end": 2269
              },
              "start": 2262,
              "end": 2269
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2252,
            "end": 2269
          }
        ],
        "start": 2248,
        "end": 2270
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 2276,
                "end": 2277
              },
              "typeArguments": null,
              "start": 2276,
              "end": 2277
            },
            "start": 2274,
            "end": 2277
          },
          "start": 2271,
          "end": 2277
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
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 2286,
                "end": 2290
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
                      "start": 2291,
                      "end": 2292
                    },
                    "typeArguments": null,
                    "start": 2291,
                    "end": 2292
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2294,
                      "end": 2295
                    },
                    "typeArguments": null,
                    "start": 2294,
                    "end": 2295
                  }
                ],
                "start": 2290,
                "end": 2296
              },
              "start": 2286,
              "end": 2296
            },
            "start": 2284,
            "end": 2296
          },
          "start": 2279,
          "end": 2296
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2313,
                    "end": 2314
                  },
                  "init": null,
                  "definite": false,
                  "start": 2313,
                  "end": 2314
                }
              ],
              "declare": false,
              "start": 2309,
              "end": 2314
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2318,
              "end": 2323
            },
            "body": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2335,
                        "end": 2338
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2339,
                        "end": 2340
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2335,
                      "end": 2341
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2344,
                        "end": 2349
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2350,
                        "end": 2351
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2344,
                      "end": 2352
                    },
                    "start": 2335,
                    "end": 2352
                  },
                  "directive": null,
                  "start": 2335,
                  "end": 2353
                }
              ],
              "start": 2325,
              "end": 2359
            },
            "start": 2304,
            "end": 2359
          }
        ],
        "start": 2298,
        "end": 2361
      },
      "expression": false,
      "start": 2231,
      "end": 2361
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2372,
                  "end": 2375
                },
                "typeArguments": null,
                "start": 2372,
                "end": 2375
              },
              "start": 2370,
              "end": 2375
            },
            "start": 2367,
            "end": 2375
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2380,
                  "end": 2381
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 2383,
                  "end": 2390
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2380,
                "end": 2390
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2392,
                  "end": 2393
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2395,
                  "end": 2397
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2392,
                "end": 2397
              }
            ],
            "start": 2378,
            "end": 2399
          },
          "definite": false,
          "start": 2367,
          "end": 2399
        }
      ],
      "declare": false,
      "start": 2363,
      "end": 2400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2401,
          "end": 2409
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2410,
            "end": 2413
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2417,
                  "end": 2418
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 2420,
                  "end": 2426
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2417,
                "end": 2426
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2428,
                  "end": 2429
                },
                "value": {
                  "type": "Literal",
                  "value": 43,
                  "raw": "43",
                  "start": 2431,
                  "end": 2433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2428,
                "end": 2433
              }
            ],
            "start": 2415,
            "end": 2435
          }
        ],
        "optional": false,
        "start": 2401,
        "end": 2436
      },
      "directive": null,
      "start": 2401,
      "end": 2436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2437,
          "end": 2445
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2446,
            "end": 2449
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2453,
                  "end": 2454
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 2456,
                  "end": 2460
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2453,
                "end": 2460
              }
            ],
            "start": 2451,
            "end": 2462
          }
        ],
        "optional": false,
        "start": 2437,
        "end": 2463
      },
      "directive": null,
      "start": 2437,
      "end": 2464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2465,
          "end": 2473
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2474,
            "end": 2477
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2481,
                  "end": 2482
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2484,
                  "end": 2493
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2481,
                "end": 2493
              }
            ],
            "start": 2479,
            "end": 2495
          }
        ],
        "optional": false,
        "start": 2465,
        "end": 2496
      },
      "directive": null,
      "start": 2465,
      "end": 2497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2498,
          "end": 2506
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2507,
            "end": 2510
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2512,
            "end": 2515
          }
        ],
        "optional": false,
        "start": 2498,
        "end": 2516
      },
      "directive": null,
      "start": 2498,
      "end": 2517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2518,
          "end": 2526
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2527,
            "end": 2530
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2532,
            "end": 2535
          }
        ],
        "optional": false,
        "start": 2518,
        "end": 2536
      },
      "directive": null,
      "start": 2518,
      "end": 2537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2538,
          "end": 2546
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2547,
            "end": 2550
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2554,
                  "end": 2555
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2557,
                  "end": 2566
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2554,
                "end": 2566
              }
            ],
            "start": 2552,
            "end": 2568
          }
        ],
        "optional": false,
        "start": 2538,
        "end": 2569
      },
      "directive": null,
      "start": 2538,
      "end": 2570
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2581,
          "end": 2589
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2590,
            "end": 2593
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2597,
                  "end": 2598
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2600,
                  "end": 2604
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2597,
                "end": 2604
              }
            ],
            "start": 2595,
            "end": 2606
          }
        ],
        "optional": false,
        "start": 2581,
        "end": 2607
      },
      "directive": null,
      "start": 2581,
      "end": 2608
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2626,
        "end": 2627
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
              "start": 2628,
              "end": 2629
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2628,
            "end": 2629
          }
        ],
        "start": 2627,
        "end": 2630
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
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 2637,
              "end": 2642
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
                  "start": 2644,
                  "end": 2645
                },
                "typeArguments": null,
                "start": 2644,
                "end": 2645
              },
              "start": 2642,
              "end": 2645
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2637,
            "end": 2646
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2651,
              "end": 2662
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
                  "name": "initialState",
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
                        "start": 2677,
                        "end": 2678
                      },
                      "typeArguments": null,
                      "start": 2677,
                      "end": 2678
                    },
                    "start": 2675,
                    "end": 2678
                  },
                  "start": 2663,
                  "end": 2678
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2690,
                          "end": 2694
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2695,
                          "end": 2700
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2690,
                        "end": 2700
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "initialState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2703,
                        "end": 2715
                      },
                      "start": 2690,
                      "end": 2715
                    },
                    "directive": null,
                    "start": 2690,
                    "end": 2716
                  }
                ],
                "start": 2680,
                "end": 2722
              },
              "expression": false,
              "start": 2662,
              "end": 2722
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2651,
            "end": 2722
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setState",
              "optional": false,
              "typeAnnotation": null,
              "start": 2727,
              "end": 2735
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2736,
                      "end": 2737
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
                          "start": 2752,
                          "end": 2753
                        },
                        "typeArguments": null,
                        "start": 2752,
                        "end": 2753
                      },
                      "start": 2746,
                      "end": 2753
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2736,
                    "end": 2753
                  }
                ],
                "start": 2735,
                "end": 2754
              },
              "params": [
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
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2762,
                        "end": 2766
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
                              "start": 2767,
                              "end": 2768
                            },
                            "typeArguments": null,
                            "start": 2767,
                            "end": 2768
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2770,
                              "end": 2771
                            },
                            "typeArguments": null,
                            "start": 2770,
                            "end": 2771
                          }
                        ],
                        "start": 2766,
                        "end": 2772
                      },
                      "start": 2762,
                      "end": 2772
                    },
                    "start": 2760,
                    "end": 2772
                  },
                  "start": 2755,
                  "end": 2772
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2793,
                            "end": 2794
                          },
                          "init": null,
                          "definite": false,
                          "start": 2793,
                          "end": 2794
                        }
                      ],
                      "declare": false,
                      "start": 2789,
                      "end": 2794
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2798,
                      "end": 2803
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2819,
                                  "end": 2823
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2824,
                                  "end": 2829
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2819,
                                "end": 2829
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2830,
                                "end": 2831
                              },
                              "optional": false,
                              "computed": true,
                              "start": 2819,
                              "end": 2832
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2835,
                                "end": 2840
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2841,
                                "end": 2842
                              },
                              "optional": false,
                              "computed": true,
                              "start": 2835,
                              "end": 2843
                            },
                            "start": 2819,
                            "end": 2843
                          },
                          "directive": null,
                          "start": 2819,
                          "end": 2844
                        }
                      ],
                      "start": 2805,
                      "end": 2854
                    },
                    "start": 2784,
                    "end": 2854
                  }
                ],
                "start": 2774,
                "end": 2860
              },
              "expression": false,
              "start": 2735,
              "end": 2860
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2727,
            "end": 2860
          }
        ],
        "start": 2631,
        "end": 2862
      },
      "abstract": false,
      "declare": false,
      "start": 2620,
      "end": 2862
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2868,
            "end": 2869
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2876,
              "end": 2877
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2878,
                    "end": 2881
                  },
                  "typeArguments": null,
                  "start": 2878,
                  "end": 2881
                }
              ],
              "start": 2877,
              "end": 2882
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2885,
                      "end": 2886
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 2888,
                      "end": 2895
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2885,
                    "end": 2895
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2897,
                      "end": 2898
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 2900,
                      "end": 2902
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2897,
                    "end": 2902
                  }
                ],
                "start": 2883,
                "end": 2904
              }
            ],
            "start": 2872,
            "end": 2905
          },
          "definite": false,
          "start": 2868,
          "end": 2905
        }
      ],
      "declare": false,
      "start": 2864,
      "end": 2906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2907,
            "end": 2908
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2909,
            "end": 2917
          },
          "optional": false,
          "computed": false,
          "start": 2907,
          "end": 2917
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2920,
                  "end": 2921
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 2923,
                  "end": 2929
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2920,
                "end": 2929
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2931,
                  "end": 2932
                },
                "value": {
                  "type": "Literal",
                  "value": 43,
                  "raw": "43",
                  "start": 2934,
                  "end": 2936
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2931,
                "end": 2936
              }
            ],
            "start": 2918,
            "end": 2938
          }
        ],
        "optional": false,
        "start": 2907,
        "end": 2939
      },
      "directive": null,
      "start": 2907,
      "end": 2940
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2941,
            "end": 2942
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2943,
            "end": 2951
          },
          "optional": false,
          "computed": false,
          "start": 2941,
          "end": 2951
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2954,
                  "end": 2955
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 2957,
                  "end": 2961
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2954,
                "end": 2961
              }
            ],
            "start": 2952,
            "end": 2963
          }
        ],
        "optional": false,
        "start": 2941,
        "end": 2964
      },
      "directive": null,
      "start": 2941,
      "end": 2965
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2966,
            "end": 2967
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2968,
            "end": 2976
          },
          "optional": false,
          "computed": false,
          "start": 2966,
          "end": 2976
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2979,
                  "end": 2980
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2982,
                  "end": 2991
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2979,
                "end": 2991
              }
            ],
            "start": 2977,
            "end": 2993
          }
        ],
        "optional": false,
        "start": 2966,
        "end": 2994
      },
      "directive": null,
      "start": 2966,
      "end": 2995
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2996,
            "end": 2997
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2998,
            "end": 3006
          },
          "optional": false,
          "computed": false,
          "start": 2996,
          "end": 3006
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 3007,
            "end": 3010
          }
        ],
        "optional": false,
        "start": 2996,
        "end": 3011
      },
      "directive": null,
      "start": 2996,
      "end": 3012
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3013,
            "end": 3014
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 3015,
            "end": 3023
          },
          "optional": false,
          "computed": false,
          "start": 3013,
          "end": 3023
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3024,
            "end": 3027
          }
        ],
        "optional": false,
        "start": 3013,
        "end": 3028
      },
      "directive": null,
      "start": 3013,
      "end": 3029
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3030,
            "end": 3031
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 3032,
            "end": 3040
          },
          "optional": false,
          "computed": false,
          "start": 3030,
          "end": 3040
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3043,
                  "end": 3044
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3046,
                  "end": 3055
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3043,
                "end": 3055
              }
            ],
            "start": 3041,
            "end": 3057
          }
        ],
        "optional": false,
        "start": 3030,
        "end": 3058
      },
      "directive": null,
      "start": 3030,
      "end": 3059
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3070,
            "end": 3071
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 3072,
            "end": 3080
          },
          "optional": false,
          "computed": false,
          "start": 3070,
          "end": 3080
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3083,
                  "end": 3084
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3086,
                  "end": 3090
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3083,
                "end": 3090
              }
            ],
            "start": 3081,
            "end": 3092
          }
        ],
        "optional": false,
        "start": 3070,
        "end": 3093
      },
      "directive": null,
      "start": 3070,
      "end": 3094
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3111,
        "end": 3113
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3118,
              "end": 3119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3122,
                "end": 3128
              },
              "start": 3120,
              "end": 3128
            },
            "accessibility": null,
            "static": false,
            "start": 3118,
            "end": 3129
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3136,
                    "end": 3142
                  },
                  "start": 3134,
                  "end": 3142
                },
                "start": 3131,
                "end": 3142
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3145,
                "end": 3148
              },
              "start": 3143,
              "end": 3148
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3130,
            "end": 3148
          }
        ],
        "start": 3116,
        "end": 3150
      },
      "declare": false,
      "start": 3106,
      "end": 3151
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3161,
                  "end": 3163
                },
                "typeArguments": null,
                "start": 3161,
                "end": 3163
              },
              "start": 3159,
              "end": 3163
            },
            "start": 3157,
            "end": 3163
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3168,
                  "end": 3169
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 3171,
                  "end": 3175
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3168,
                "end": 3175
              }
            ],
            "start": 3166,
            "end": 3177
          },
          "definite": false,
          "start": 3157,
          "end": 3177
        }
      ],
      "declare": false,
      "start": 3153,
      "end": 3178
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3197,
                  "end": 3204
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3205,
                        "end": 3207
                      },
                      "typeArguments": null,
                      "start": 3205,
                      "end": 3207
                    }
                  ],
                  "start": 3204,
                  "end": 3208
                },
                "start": 3197,
                "end": 3208
              },
              "start": 3195,
              "end": 3208
            },
            "start": 3193,
            "end": 3208
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3213,
                  "end": 3214
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 3216,
                  "end": 3220
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3213,
                "end": 3220
              }
            ],
            "start": 3211,
            "end": 3222
          },
          "definite": false,
          "start": 3193,
          "end": 3222
        }
      ],
      "declare": false,
      "start": 3189,
      "end": 3223
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3244,
                  "end": 3245
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3255,
                      "end": 3257
                    },
                    "typeArguments": null,
                    "start": 3255,
                    "end": 3257
                  },
                  "start": 3249,
                  "end": 3257
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3260,
                      "end": 3262
                    },
                    "typeArguments": null,
                    "start": 3260,
                    "end": 3262
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3263,
                      "end": 3264
                    },
                    "typeArguments": null,
                    "start": 3263,
                    "end": 3264
                  },
                  "start": 3260,
                  "end": 3265
                },
                "optional": false,
                "readonly": null,
                "start": 3241,
                "end": 3266
              },
              "start": 3239,
              "end": 3266
            },
            "start": 3237,
            "end": 3266
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3271,
                  "end": 3272
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 3274,
                  "end": 3278
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3271,
                "end": 3278
              }
            ],
            "start": 3269,
            "end": 3280
          },
          "definite": false,
          "start": 3237,
          "end": 3280
        }
      ],
      "declare": false,
      "start": 3233,
      "end": 3281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3320,
        "end": 3324
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
              "start": 3325,
              "end": 3326
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3325,
            "end": 3326
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 3328,
              "end": 3329
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
                  "start": 3344,
                  "end": 3345
                },
                "typeArguments": null,
                "start": 3344,
                "end": 3345
              },
              "start": 3338,
              "end": 3345
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3328,
            "end": 3345
          }
        ],
        "start": 3324,
        "end": 3346
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
              "name": "pf",
              "optional": false,
              "typeAnnotation": null,
              "start": 3355,
              "end": 3357
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3361,
                  "end": 3362
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3366,
                    "end": 3367
                  },
                  "typeArguments": null,
                  "start": 3366,
                  "end": 3367
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
                      "start": 3371,
                      "end": 3372
                    },
                    "typeArguments": null,
                    "start": 3371,
                    "end": 3372
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3373,
                      "end": 3374
                    },
                    "typeArguments": null,
                    "start": 3373,
                    "end": 3374
                  },
                  "start": 3371,
                  "end": 3375
                },
                "optional": true,
                "readonly": null,
                "start": 3359,
                "end": 3376
              },
              "start": 3357,
              "end": 3376
            },
            "accessibility": null,
            "static": false,
            "start": 3355,
            "end": 3377
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pt",
              "optional": false,
              "typeAnnotation": null,
              "start": 3382,
              "end": 3384
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3388,
                  "end": 3389
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3393,
                    "end": 3394
                  },
                  "typeArguments": null,
                  "start": 3393,
                  "end": 3394
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
                      "start": 3398,
                      "end": 3399
                    },
                    "typeArguments": null,
                    "start": 3398,
                    "end": 3399
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3400,
                      "end": 3401
                    },
                    "typeArguments": null,
                    "start": 3400,
                    "end": 3401
                  },
                  "start": 3398,
                  "end": 3402
                },
                "optional": true,
                "readonly": null,
                "start": 3386,
                "end": 3403
              },
              "start": 3384,
              "end": 3403
            },
            "accessibility": null,
            "static": false,
            "start": 3382,
            "end": 3404
          }
        ],
        "start": 3349,
        "end": 3436
      },
      "declare": false,
      "start": 3315,
      "end": 3437
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 3443,
        "end": 3444
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3448,
              "end": 3449
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3451,
                "end": 3457
              },
              "start": 3449,
              "end": 3457
            },
            "accessibility": null,
            "static": false,
            "start": 3448,
            "end": 3458
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3459,
              "end": 3460
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3462,
                "end": 3469
              },
              "start": 3460,
              "end": 3469
            },
            "accessibility": null,
            "static": false,
            "start": 3459,
            "end": 3469
          }
        ],
        "start": 3447,
        "end": 3470
      },
      "declare": false,
      "start": 3438,
      "end": 3471
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3479,
                  "end": 3480
                },
                "typeArguments": null,
                "start": 3479,
                "end": 3480
              },
              "start": 3477,
              "end": 3480
            },
            "start": 3476,
            "end": 3480
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
                  "start": 3484,
                  "end": 3485
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 3487,
                  "end": 3488
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3484,
                "end": 3488
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
                  "start": 3490,
                  "end": 3491
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3493,
                  "end": 3498
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3490,
                "end": 3498
              }
            ],
            "start": 3483,
            "end": 3499
          },
          "definite": false,
          "start": 3476,
          "end": 3499
        }
      ],
      "declare": false,
      "start": 3472,
      "end": 3500
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3508,
                  "end": 3512
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3513,
                        "end": 3514
                      },
                      "typeArguments": null,
                      "start": 3513,
                      "end": 3514
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "'x'",
                        "start": 3516,
                        "end": 3519
                      },
                      "start": 3516,
                      "end": 3519
                    }
                  ],
                  "start": 3512,
                  "end": 3520
                },
                "start": 3508,
                "end": 3520
              },
              "start": 3506,
              "end": 3520
            },
            "start": 3505,
            "end": 3520
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
                  "name": "pf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3529,
                  "end": 3531
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3534,
                        "end": 3535
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 3537,
                        "end": 3538
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3534,
                      "end": 3538
                    }
                  ],
                  "start": 3533,
                  "end": 3539
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3529,
                "end": 3539
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3545,
                  "end": 3547
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3550,
                        "end": 3551
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 3553,
                        "end": 3554
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3550,
                      "end": 3554
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
                        "start": 3556,
                        "end": 3557
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 3559,
                        "end": 3564
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3556,
                      "end": 3564
                    }
                  ],
                  "start": 3549,
                  "end": 3565
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3545,
                "end": 3565
              }
            ],
            "start": 3523,
            "end": 3568
          },
          "definite": false,
          "start": 3505,
          "end": 3568
        }
      ],
      "declare": false,
      "start": 3501,
      "end": 3569
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3602,
        "end": 3607
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
              "start": 3608,
              "end": 3609
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3608,
            "end": 3609
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3611,
              "end": 3612
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
                  "start": 3627,
                  "end": 3628
                },
                "typeArguments": null,
                "start": 3627,
                "end": 3628
              },
              "start": 3621,
              "end": 3628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3611,
            "end": 3628
          }
        ],
        "start": 3607,
        "end": 3629
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3635,
                "end": 3639
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
                      "start": 3640,
                      "end": 3641
                    },
                    "typeArguments": null,
                    "start": 3640,
                    "end": 3641
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3643,
                      "end": 3644
                    },
                    "typeArguments": null,
                    "start": 3643,
                    "end": 3644
                  }
                ],
                "start": 3639,
                "end": 3645
              },
              "start": 3635,
              "end": 3645
            },
            "start": 3633,
            "end": 3645
          },
          "start": 3630,
          "end": 3645
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3657,
                  "end": 3658
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3661,
                    "end": 3664
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3665,
                    "end": 3668
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3661,
                  "end": 3668
                },
                "definite": false,
                "start": 3657,
                "end": 3668
              }
            ],
            "declare": false,
            "start": 3653,
            "end": 3669
          }
        ],
        "start": 3647,
        "end": 3681
      },
      "expression": false,
      "start": 3593,
      "end": 3681
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3692,
        "end": 3697
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
              "start": 3698,
              "end": 3699
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3698,
            "end": 3699
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3701,
              "end": 3702
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
                  "start": 3717,
                  "end": 3718
                },
                "typeArguments": null,
                "start": 3717,
                "end": 3718
              },
              "start": 3711,
              "end": 3718
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3701,
            "end": 3718
          }
        ],
        "start": 3697,
        "end": 3719
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3725,
                "end": 3731
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3732,
                      "end": 3733
                    },
                    "typeArguments": null,
                    "start": 3732,
                    "end": 3733
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3735,
                    "end": 3741
                  }
                ],
                "start": 3731,
                "end": 3742
              },
              "start": 3725,
              "end": 3742
            },
            "start": 3723,
            "end": 3742
          },
          "start": 3720,
          "end": 3742
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3754,
                  "end": 3755
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3758,
                    "end": 3761
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3762,
                    "end": 3765
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3758,
                  "end": 3765
                },
                "definite": false,
                "start": 3754,
                "end": 3765
              }
            ],
            "declare": false,
            "start": 3750,
            "end": 3766
          }
        ],
        "start": 3744,
        "end": 3778
      },
      "expression": false,
      "start": 3683,
      "end": 3778
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3778
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
    "value": "Shape",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "height",
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
    "value": "number",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "visible",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 100,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 139,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 214,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "T00",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 257,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 262,
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
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 273,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 305,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 321,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 351,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 369,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 395,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 400,
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
    "value": "Pick",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 427,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 468,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 473,
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
    "value": "Pick",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 498,
    "end": 499
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 518,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 529,
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
    "value": "Shape",
    "start": 534,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 541,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 555,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 560,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 571,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 578,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 584,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 602,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 618,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 625,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 633,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "T16",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 649,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 656,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 679,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 706,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 713,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 718,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 742,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 751,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 756,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 764,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 793,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 797,
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
    "value": "Pick",
    "start": 800,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 829,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 838,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 843,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 851,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 857,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 876,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 888,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 902,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 916,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 924,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 930,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 949,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 956,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 961,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1002,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1026,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1100,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1152,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1188,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1191,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1228,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1270,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1282,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1285,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1317,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1326,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1338,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1341,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1373,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1382,
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
    "value": "T",
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
    "value": "(",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1397,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1409,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1412,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1434,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1449,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1538,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1546,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "objAndReadonly",
    "start": 1555,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1573,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1585,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1596,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1613,
    "end": 1620
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1621,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "objAndPartial",
    "start": 1630,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1647,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1659,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1670,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1687,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1696,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "objAndReadonly",
    "start": 1717,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1773,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1777,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "objAndReadonly",
    "start": 1782,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1796,
    "end": 1797
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
    "value": "0",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1834,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1838,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "objAndReadonly",
    "start": 1843,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Numeric",
    "value": "1",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1910,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1919,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1931,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1935,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "objAndPartial",
    "start": 1940,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1989,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "objAndPartial",
    "start": 1994,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2045,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2049,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "objAndPartial",
    "start": 2054,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2181,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2191,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2204,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2220,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2231,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2240,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2254,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2262,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2271,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 2286,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2304,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2309,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2315,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2318,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2335,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2344,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2367,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2372,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2383,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2395,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2401,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2410,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 2420,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Numeric",
    "value": "43",
    "start": 2431,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2437,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2446,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 2456,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2465,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2474,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2484,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2498,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2507,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2518,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2527,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2532,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2538,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2547,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2557,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2581,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2590,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2600,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2620,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2637,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2651,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "initialState",
    "start": 2663,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2690,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2695,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "initialState",
    "start": 2703,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2727,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2738,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2746,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2755,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 2762,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2784,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2789,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2795,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2798,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2819,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2824,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2835,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2864,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2872,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2878,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2888,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2900,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2909,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 2923,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Numeric",
    "value": "43",
    "start": 2934,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2943,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 2957,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2968,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2982,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 2998,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 3015,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3024,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 3032,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3046,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 3072,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3086,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3106,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 3111,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3122,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3131,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3136,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3145,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3153,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 3157,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 3161,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 3171,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3189,
    "end": 3192
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 3193,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3197,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 3205,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 3216,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3233,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 3237,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3246,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3249,
    "end": 3254
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 3255,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 3260,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 3274,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3315,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 3320,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3330,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3338,
    "end": 3343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "pf",
    "start": 3355,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3363,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "pt",
    "start": 3382,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3390,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3438,
    "end": 3442
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3451,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3462,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3472,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3493,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3501,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 3508,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 3516,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Identifier",
    "value": "pf",
    "start": 3529,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "pt",
    "start": 3545,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3559,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3593,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 3602,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3613,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3621,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3627,
    "end": 3628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3630,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 3635,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3653,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3661,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3665,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3683,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 3692,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3703,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3711,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3720,
    "end": 3723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3725,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3735,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3750,
    "end": 3753
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3758,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3762,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3777,
    "end": 3778
  }
]
```

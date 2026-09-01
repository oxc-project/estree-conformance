__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 11,
      "end": 20
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CanBeExpanded",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 99
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
                "start": 100,
                "end": 101
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 110,
                "end": 116
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 119,
                "end": 125
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 100,
              "end": 125
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "constraint": null,
              "default": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 127,
              "end": 137
            }
          ],
          "start": 99,
          "end": 138
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 152
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
                    "start": 154,
                    "end": 155
                  },
                  "typeArguments": null,
                  "start": 154,
                  "end": 155
                },
                "start": 152,
                "end": 155
              },
              "accessibility": null,
              "static": false,
              "start": 147,
              "end": 155
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 167
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 170
                },
                "start": 167,
                "end": 170
              },
              "accessibility": null,
              "static": false,
              "start": 160,
              "end": 170
            }
          ],
          "start": 141,
          "end": 172
        },
        "declare": false,
        "start": 81,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 74,
      "end": 172
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 188
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 189,
        "end": 193
      },
      "declare": false,
      "start": 174,
      "end": 193
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 209
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 222
          },
          "typeArguments": null,
          "start": 218,
          "end": 222
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 233,
                "end": 239
              },
              "start": 231,
              "end": 239
            },
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 240
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 249
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 264
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Role",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 269
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 269
                    }
                  ],
                  "start": 264,
                  "end": 270
                },
                "start": 251,
                "end": 270
              },
              "start": 249,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 245,
            "end": 271
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "note",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 280
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 282,
                "end": 288
              },
              "start": 280,
              "end": 288
            },
            "accessibility": null,
            "static": false,
            "start": 276,
            "end": 289
          }
        ],
        "start": 223,
        "end": 291
      },
      "declare": false,
      "start": 195,
      "end": 291
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Role",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 307
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 320
          },
          "typeArguments": null,
          "start": 316,
          "end": 320
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 329
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 331,
                "end": 337
              },
              "start": 329,
              "end": 337
            },
            "accessibility": null,
            "static": false,
            "start": 327,
            "end": 338
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "user",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 347
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 362
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
                        "start": 363,
                        "end": 367
                      },
                      "typeArguments": null,
                      "start": 363,
                      "end": 367
                    }
                  ],
                  "start": 362,
                  "end": 368
                },
                "start": 349,
                "end": 368
              },
              "start": 347,
              "end": 368
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 369
          },
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
              "start": 374,
              "end": 375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 377,
                "end": 383
              },
              "start": 375,
              "end": 383
            },
            "accessibility": null,
            "static": false,
            "start": 374,
            "end": 383
          }
        ],
        "start": 321,
        "end": 385
      },
      "declare": false,
      "start": 293,
      "end": 385
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 450
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 463
          },
          "typeArguments": null,
          "start": 459,
          "end": 463
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 472
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 474,
                "end": 480
              },
              "start": 472,
              "end": 480
            },
            "accessibility": null,
            "static": false,
            "start": 470,
            "end": 481
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
              "start": 486,
              "end": 490
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 492,
                "end": 498
              },
              "start": 490,
              "end": 498
            },
            "accessibility": null,
            "static": false,
            "start": 486,
            "end": 499
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "user",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 523
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
                        "start": 524,
                        "end": 528
                      },
                      "typeArguments": null,
                      "start": 524,
                      "end": 528
                    }
                  ],
                  "start": 523,
                  "end": 529
                },
                "start": 510,
                "end": 529
              },
              "start": 508,
              "end": 529
            },
            "accessibility": null,
            "static": false,
            "start": 504,
            "end": 530
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 539
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 554
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Role",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 559
                      },
                      "typeArguments": null,
                      "start": 555,
                      "end": 559
                    }
                  ],
                  "start": 554,
                  "end": 560
                },
                "start": 541,
                "end": 560
              },
              "start": 539,
              "end": 560
            },
            "accessibility": null,
            "static": false,
            "start": 535,
            "end": 560
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "roles",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 570
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 585
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
                          "name": "Role",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 586,
                          "end": 590
                        },
                        "typeArguments": null,
                        "start": 586,
                        "end": 590
                      },
                      "start": 586,
                      "end": 592
                    }
                  ],
                  "start": 585,
                  "end": 593
                },
                "start": 572,
                "end": 593
              },
              "start": 570,
              "end": 593
            },
            "accessibility": null,
            "static": false,
            "start": 565,
            "end": 593
          }
        ],
        "start": 464,
        "end": 595
      },
      "declare": false,
      "start": 439,
      "end": 595
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Join",
        "optional": false,
        "typeAnnotation": null,
        "start": 602,
        "end": 606
      },
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
              "start": 607,
              "end": 608
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 607,
            "end": 608
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 611
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 610,
            "end": 611
          }
        ],
        "start": 606,
        "end": 612
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 616
          },
          "typeArguments": null,
          "start": 615,
          "end": 616
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 625,
              "end": 631
            },
            {
              "type": "TSNumberKeyword",
              "start": 634,
              "end": 640
            }
          ],
          "start": 625,
          "end": 640
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 648
            },
            "typeArguments": null,
            "start": 647,
            "end": 648
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              },
              {
                "type": "TSNumberKeyword",
                "start": 666,
                "end": 672
              }
            ],
            "start": 657,
            "end": 672
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
                "start": 683,
                "end": 686
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 687,
                "end": 690
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 713,
                "end": 716
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 717,
                "end": 719
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 687
                },
                "typeArguments": null,
                "start": 686,
                "end": 687
              },
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 690,
                    "end": 692
                  },
                  "start": 690,
                  "end": 692
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 702
                  },
                  "typeArguments": null,
                  "start": 701,
                  "end": 702
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 705,
                    "end": 707
                  },
                  "start": 705,
                  "end": 707
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": ".",
                    "raw": "\".\"",
                    "start": 710,
                    "end": 713
                  },
                  "start": 710,
                  "end": 713
                },
                "start": 690,
                "end": 713
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 717
                },
                "typeArguments": null,
                "start": 716,
                "end": 717
              }
            ],
            "start": 683,
            "end": 719
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 730,
            "end": 735
          },
          "start": 647,
          "end": 735
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 738,
          "end": 743
        },
        "start": 615,
        "end": 743
      },
      "declare": false,
      "start": 597,
      "end": 744
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrefixWith",
        "optional": false,
        "typeAnnotation": null,
        "start": 751,
        "end": 761
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 763
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 762,
            "end": 763
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 766
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 765,
            "end": 766
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 769
            },
            "constraint": null,
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 772,
                "end": 775
              },
              "start": 772,
              "end": 775
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 768,
            "end": 775
          }
        ],
        "start": 761,
        "end": 776
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 780
          },
          "typeArguments": null,
          "start": 779,
          "end": 780
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 789,
            "end": 791
          },
          "start": 789,
          "end": 791
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
              "start": 794,
              "end": 797
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 807,
              "end": 809
            }
          ],
          "types": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 797,
                  "end": 803
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 807
                  },
                  "typeArguments": null,
                  "start": 806,
                  "end": 807
                }
              ],
              "start": 797,
              "end": 807
            }
          ],
          "start": 794,
          "end": 809
        },
        "falseType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 812,
              "end": 815
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 825,
              "end": 828
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 838,
              "end": 841
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 851,
              "end": 853
            }
          ],
          "types": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 815,
                  "end": 821
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
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
              "start": 815,
              "end": 825
            },
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 828,
                  "end": 834
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 837,
                    "end": 838
                  },
                  "typeArguments": null,
                  "start": 837,
                  "end": 838
                }
              ],
              "start": 828,
              "end": 838
            },
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 841,
                  "end": 847
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 850,
                    "end": 851
                  },
                  "typeArguments": null,
                  "start": 850,
                  "end": 851
                }
              ],
              "start": 841,
              "end": 851
            }
          ],
          "start": 812,
          "end": 853
        },
        "start": 779,
        "end": 853
      },
      "declare": false,
      "start": 746,
      "end": 853
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SplitWithAllPossibleCombinations",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 892
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
              "start": 893,
              "end": 894
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 903,
              "end": 909
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 893,
            "end": 909
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 912
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 921,
              "end": 927
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 911,
            "end": 927
          }
        ],
        "start": 892,
        "end": 928
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 935,
          "end": 941
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 950,
            "end": 951
          },
          "typeArguments": null,
          "start": 950,
          "end": 951
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 954,
          "end": 960
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 972
            },
            "typeArguments": null,
            "start": 971,
            "end": 972
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 981,
              "end": 983
            },
            "start": 981,
            "end": 983
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 986,
              "end": 988
            },
            "start": 986,
            "end": 988
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1004
              },
              "typeArguments": null,
              "start": 1003,
              "end": 1004
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1013,
                  "end": 1016
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1023,
                  "end": 1026
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1027,
                  "end": 1030
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1037,
                  "end": 1039
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1022,
                      "end": 1023
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1022,
                    "end": 1023
                  },
                  "start": 1016,
                  "end": 1023
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1026,
                    "end": 1027
                  },
                  "typeArguments": null,
                  "start": 1026,
                  "end": 1027
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1036,
                      "end": 1037
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1036,
                    "end": 1037
                  },
                  "start": 1030,
                  "end": 1037
                }
              ],
              "start": 1013,
              "end": 1039
            },
            "trueType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1058,
                    "end": 1059
                  },
                  "typeArguments": null,
                  "start": 1058,
                  "end": 1059
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1062,
                    "end": 1066
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
                          "start": 1067,
                          "end": 1068
                        },
                        "typeArguments": null,
                        "start": 1067,
                        "end": 1068
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SplitWithAllPossibleCombinations",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1070,
                          "end": 1102
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1103,
                                "end": 1104
                              },
                              "typeArguments": null,
                              "start": 1103,
                              "end": 1104
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1106,
                                "end": 1107
                              },
                              "typeArguments": null,
                              "start": 1106,
                              "end": 1107
                            }
                          ],
                          "start": 1102,
                          "end": 1108
                        },
                        "start": 1070,
                        "end": 1108
                      }
                    ],
                    "start": 1066,
                    "end": 1109
                  },
                  "start": 1062,
                  "end": 1109
                }
              ],
              "start": 1058,
              "end": 1109
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 1128,
                "end": 1129
              },
              "typeArguments": null,
              "start": 1128,
              "end": 1129
            },
            "start": 1003,
            "end": 1129
          },
          "start": 971,
          "end": 1129
        },
        "start": 935,
        "end": 1129
      },
      "declare": false,
      "start": 855,
      "end": 1130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeysCanBeExpanded_",
        "optional": false,
        "typeAnnotation": null,
        "start": 1246,
        "end": 1264
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
              "start": 1265,
              "end": 1266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1265,
            "end": 1266
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1268,
              "end": 1269
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1278,
              "end": 1284
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1268,
            "end": 1284
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1291
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1300,
                "end": 1306
              },
              "start": 1300,
              "end": 1308
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1286,
            "end": 1308
          }
        ],
        "start": 1264,
        "end": 1309
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1312,
            "end": 1313
          },
          "typeArguments": null,
          "start": 1312,
          "end": 1313
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 1322,
              "end": 1327
            },
            "typeArguments": null,
            "start": 1322,
            "end": 1327
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 1328,
              "end": 1336
            },
            "start": 1328,
            "end": 1336
          },
          "start": 1322,
          "end": 1337
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 1340,
          "end": 1345
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
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
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1375
            },
            "typeArguments": null,
            "start": 1362,
            "end": 1375
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeysCanBeExpanded_",
              "optional": false,
              "typeAnnotation": null,
              "start": 1386,
              "end": 1404
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1405,
                      "end": 1406
                    },
                    "typeArguments": null,
                    "start": 1405,
                    "end": 1406
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 1407,
                      "end": 1414
                    },
                    "start": 1407,
                    "end": 1414
                  },
                  "start": 1405,
                  "end": 1415
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1417,
                    "end": 1418
                  },
                  "typeArguments": null,
                  "start": 1417,
                  "end": 1418
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Depth",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1420,
                    "end": 1425
                  },
                  "typeArguments": null,
                  "start": 1420,
                  "end": 1425
                }
              ],
              "start": 1404,
              "end": 1426
            },
            "start": 1386,
            "end": 1426
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1437,
                "end": 1438
              },
              "typeArguments": null,
              "start": 1437,
              "end": 1438
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1452
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1459,
                        "end": 1460
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1459,
                      "end": 1460
                    },
                    "start": 1453,
                    "end": 1460
                  }
                ],
                "start": 1452,
                "end": 1461
              },
              "start": 1447,
              "end": 1461
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "KeysCanBeExpanded_",
                "optional": false,
                "typeAnnotation": null,
                "start": 1464,
                "end": 1482
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1483,
                      "end": 1484
                    },
                    "typeArguments": null,
                    "start": 1483,
                    "end": 1484
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1486,
                      "end": 1487
                    },
                    "typeArguments": null,
                    "start": 1486,
                    "end": 1487
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Depth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1489,
                      "end": 1494
                    },
                    "typeArguments": null,
                    "start": 1489,
                    "end": 1494
                  }
                ],
                "start": 1482,
                "end": 1495
              },
              "start": 1464,
              "end": 1495
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1511,
                  "end": 1512
                },
                "typeArguments": null,
                "start": 1511,
                "end": 1512
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 1521,
                "end": 1527
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1569,
                    "end": 1570
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
                        "start": 1580,
                        "end": 1581
                      },
                      "typeArguments": null,
                      "start": 1580,
                      "end": 1581
                    },
                    "start": 1574,
                    "end": 1581
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1606,
                          "end": 1607
                        },
                        "typeArguments": null,
                        "start": 1606,
                        "end": 1607
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1608,
                          "end": 1609
                        },
                        "typeArguments": null,
                        "start": 1608,
                        "end": 1609
                      },
                      "start": 1606,
                      "end": 1610
                    },
                    "extendsType": {
                      "type": "TSObjectKeyword",
                      "start": 1619,
                      "end": 1625
                    },
                    "trueType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1652,
                          "end": 1653
                        },
                        "typeArguments": null,
                        "start": 1652,
                        "end": 1653
                      },
                      "extendsType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1662,
                            "end": 1668
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 1671,
                            "end": 1677
                          }
                        ],
                        "start": 1662,
                        "end": 1677
                      },
                      "trueType": {
                        "type": "TSUnionType",
                        "types": [
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
                                "start": 1708,
                                "end": 1711
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true,
                                "start": 1712,
                                "end": 1714
                              }
                            ],
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1711,
                                  "end": 1712
                                },
                                "typeArguments": null,
                                "start": 1711,
                                "end": 1712
                              }
                            ],
                            "start": 1708,
                            "end": 1714
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Join",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1717,
                              "end": 1721
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
                                        "raw": "",
                                        "cooked": ""
                                      },
                                      "tail": false,
                                      "start": 1722,
                                      "end": 1725
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "",
                                        "cooked": ""
                                      },
                                      "tail": true,
                                      "start": 1726,
                                      "end": 1728
                                    }
                                  ],
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1725,
                                        "end": 1726
                                      },
                                      "typeArguments": null,
                                      "start": 1725,
                                      "end": 1726
                                    }
                                  ],
                                  "start": 1722,
                                  "end": 1728
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "KeysCanBeExpanded_",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1730,
                                    "end": 1748
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
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1749,
                                            "end": 1750
                                          },
                                          "typeArguments": null,
                                          "start": 1749,
                                          "end": 1750
                                        },
                                        "indexType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "K",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1751,
                                            "end": 1752
                                          },
                                          "typeArguments": null,
                                          "start": 1751,
                                          "end": 1752
                                        },
                                        "start": 1749,
                                        "end": 1753
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "N",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1755,
                                          "end": 1756
                                        },
                                        "typeArguments": null,
                                        "start": 1755,
                                        "end": 1756
                                      },
                                      {
                                        "type": "TSTupleType",
                                        "elementTypes": [
                                          {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 1759,
                                              "end": 1760
                                            },
                                            "start": 1759,
                                            "end": 1760
                                          },
                                          {
                                            "type": "TSRestType",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Depth",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1765,
                                                "end": 1770
                                              },
                                              "typeArguments": null,
                                              "start": 1765,
                                              "end": 1770
                                            },
                                            "start": 1762,
                                            "end": 1770
                                          }
                                        ],
                                        "start": 1758,
                                        "end": 1771
                                      }
                                    ],
                                    "start": 1748,
                                    "end": 1772
                                  },
                                  "start": 1730,
                                  "end": 1772
                                }
                              ],
                              "start": 1721,
                              "end": 1773
                            },
                            "start": 1717,
                            "end": 1773
                          }
                        ],
                        "start": 1708,
                        "end": 1773
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 1804,
                        "end": 1809
                      },
                      "start": 1652,
                      "end": 1809
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 1836,
                      "end": 1841
                    },
                    "start": 1606,
                    "end": 1841
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 1546,
                  "end": 1860
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
                      "start": 1867,
                      "end": 1868
                    },
                    "typeArguments": null,
                    "start": 1867,
                    "end": 1868
                  },
                  "start": 1861,
                  "end": 1868
                },
                "start": 1546,
                "end": 1869
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1904,
                "end": 1909
              },
              "start": 1511,
              "end": 1909
            },
            "start": 1437,
            "end": 1909
          },
          "start": 1352,
          "end": 1909
        },
        "start": 1312,
        "end": 1909
      },
      "declare": false,
      "start": 1241,
      "end": 1909
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeysCanBeExpanded",
          "optional": false,
          "typeAnnotation": null,
          "start": 1923,
          "end": 1940
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
                "start": 1941,
                "end": 1942
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1941,
              "end": 1942
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 1944,
                "end": 1945
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1954,
                "end": 1960
              },
              "default": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 1963,
                  "end": 1964
                },
                "start": 1963,
                "end": 1964
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1944,
              "end": 1964
            }
          ],
          "start": 1940,
          "end": 1965
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "KeysCanBeExpanded_",
            "optional": false,
            "typeAnnotation": null,
            "start": 1968,
            "end": 1986
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
                  "start": 1987,
                  "end": 1988
                },
                "typeArguments": null,
                "start": 1987,
                "end": 1988
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1990,
                  "end": 1991
                },
                "typeArguments": null,
                "start": 1990,
                "end": 1991
              },
              {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 1993,
                "end": 1995
              }
            ],
            "start": 1986,
            "end": 1996
          },
          "start": 1968,
          "end": 1996
        },
        "declare": false,
        "start": 1918,
        "end": 1996
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1911,
      "end": 1996
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expand__",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2068
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2069,
              "end": 2070
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2069,
            "end": 2070
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 2072,
              "end": 2076
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2072,
            "end": 2076
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2078,
              "end": 2079
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2088,
              "end": 2094
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2078,
            "end": 2094
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 2096,
              "end": 2097
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2106,
              "end": 2112
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2096,
            "end": 2112
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2120
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2129,
                "end": 2136
              },
              "start": 2129,
              "end": 2138
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2115,
            "end": 2138
          }
        ],
        "start": 2068,
        "end": 2140
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 2147,
            "end": 2148
          },
          "typeArguments": null,
          "start": 2147,
          "end": 2148
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2157,
              "end": 2162
            },
            "typeArguments": null,
            "start": 2157,
            "end": 2162
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 2163,
              "end": 2171
            },
            "start": 2163,
            "end": 2171
          },
          "start": 2157,
          "end": 2172
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2183,
              "end": 2184
            },
            "typeArguments": null,
            "start": 2183,
            "end": 2184
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false,
              "typeAnnotation": null,
              "start": 2193,
              "end": 2206
            },
            "typeArguments": null,
            "start": 2193,
            "end": 2206
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2221,
                "end": 2222
              },
              "typeArguments": null,
              "start": 2221,
              "end": 2222
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "default",
                "raw": "'default'",
                "start": 2223,
                "end": 2232
              },
              "start": 2223,
              "end": 2232
            },
            "start": 2221,
            "end": 2233
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2248,
              "end": 2249
            },
            "typeArguments": null,
            "start": 2248,
            "end": 2249
          },
          "start": 2183,
          "end": 2249
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2260,
              "end": 2261
            },
            "typeArguments": null,
            "start": 2260,
            "end": 2261
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false,
              "typeAnnotation": null,
              "start": 2270,
              "end": 2283
            },
            "typeArguments": null,
            "start": 2270,
            "end": 2283
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Expand__",
              "optional": false,
              "typeAnnotation": null,
              "start": 2298,
              "end": 2306
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
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2307,
                      "end": 2308
                    },
                    "typeArguments": null,
                    "start": 2307,
                    "end": 2308
                  },
                  "indexType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2309,
                        "end": 2310
                      },
                      "typeArguments": null,
                      "start": 2309,
                      "end": 2310
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2319,
                        "end": 2323
                      },
                      "typeArguments": null,
                      "start": 2319,
                      "end": 2323
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "value",
                        "raw": "'value'",
                        "start": 2326,
                        "end": 2333
                      },
                      "start": 2326,
                      "end": 2333
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "default",
                        "raw": "'default'",
                        "start": 2336,
                        "end": 2345
                      },
                      "start": 2336,
                      "end": 2345
                    },
                    "start": 2309,
                    "end": 2345
                  },
                  "start": 2307,
                  "end": 2346
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2348,
                    "end": 2352
                  },
                  "typeArguments": null,
                  "start": 2348,
                  "end": 2352
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2354,
                    "end": 2355
                  },
                  "typeArguments": null,
                  "start": 2354,
                  "end": 2355
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2357,
                    "end": 2358
                  },
                  "typeArguments": null,
                  "start": 2357,
                  "end": 2358
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Depth",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2360,
                    "end": 2365
                  },
                  "typeArguments": null,
                  "start": 2360,
                  "end": 2365
                }
              ],
              "start": 2306,
              "end": 2366
            },
            "start": 2298,
            "end": 2366
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2381,
                "end": 2382
              },
              "typeArguments": null,
              "start": 2381,
              "end": 2382
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 2391,
                "end": 2396
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2403,
                        "end": 2404
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2403,
                      "end": 2404
                    },
                    "start": 2397,
                    "end": 2404
                  }
                ],
                "start": 2396,
                "end": 2405
              },
              "start": 2391,
              "end": 2405
            },
            "trueType": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expand__",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2424,
                  "end": 2432
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2433,
                        "end": 2434
                      },
                      "typeArguments": null,
                      "start": 2433,
                      "end": 2434
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2436,
                        "end": 2440
                      },
                      "typeArguments": null,
                      "start": 2436,
                      "end": 2440
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2442,
                        "end": 2443
                      },
                      "typeArguments": null,
                      "start": 2442,
                      "end": 2443
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2445,
                        "end": 2446
                      },
                      "typeArguments": null,
                      "start": 2445,
                      "end": 2446
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Depth",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2448,
                        "end": 2453
                      },
                      "typeArguments": null,
                      "start": 2448,
                      "end": 2453
                    }
                  ],
                  "start": 2432,
                  "end": 2454
                },
                "start": 2424,
                "end": 2454
              },
              "start": 2424,
              "end": 2456
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2475,
                  "end": 2476
                },
                "typeArguments": null,
                "start": 2475,
                "end": 2476
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 2485,
                "end": 2491
              },
              "trueType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2533,
                  "end": 2534
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2544,
                      "end": 2545
                    },
                    "typeArguments": null,
                    "start": 2544,
                    "end": 2545
                  },
                  "start": 2538,
                  "end": 2545
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Expand__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2550,
                    "end": 2558
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
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2559,
                            "end": 2560
                          },
                          "typeArguments": null,
                          "start": 2559,
                          "end": 2560
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2561,
                            "end": 2562
                          },
                          "typeArguments": null,
                          "start": 2561,
                          "end": 2562
                        },
                        "start": 2559,
                        "end": 2563
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Keys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2565,
                          "end": 2569
                        },
                        "typeArguments": null,
                        "start": 2565,
                        "end": 2569
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PrefixWith",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2571,
                          "end": 2581
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2582,
                                "end": 2583
                              },
                              "typeArguments": null,
                              "start": 2582,
                              "end": 2583
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2585,
                                "end": 2586
                              },
                              "typeArguments": null,
                              "start": 2585,
                              "end": 2586
                            }
                          ],
                          "start": 2581,
                          "end": 2587
                        },
                        "start": 2571,
                        "end": 2587
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "N",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2589,
                          "end": 2590
                        },
                        "typeArguments": null,
                        "start": 2589,
                        "end": 2590
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 2593,
                              "end": 2594
                            },
                            "start": 2593,
                            "end": 2594
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Depth",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2599,
                                "end": 2604
                              },
                              "typeArguments": null,
                              "start": 2599,
                              "end": 2604
                            },
                            "start": 2596,
                            "end": 2604
                          }
                        ],
                        "start": 2592,
                        "end": 2605
                      }
                    ],
                    "start": 2558,
                    "end": 2606
                  },
                  "start": 2550,
                  "end": 2606
                },
                "optional": "-",
                "readonly": null,
                "start": 2510,
                "end": 2624
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2643,
                  "end": 2644
                },
                "typeArguments": null,
                "start": 2643,
                "end": 2644
              },
              "start": 2475,
              "end": 2644
            },
            "start": 2381,
            "end": 2644
          },
          "start": 2260,
          "end": 2644
        },
        "start": 2147,
        "end": 2644
      },
      "declare": false,
      "start": 2055,
      "end": 2644
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SplitAC",
        "optional": false,
        "typeAnnotation": null,
        "start": 2653,
        "end": 2660
      },
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
              "start": 2661,
              "end": 2662
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2661,
            "end": 2662
          }
        ],
        "start": 2660,
        "end": 2663
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SplitWithAllPossibleCombinations",
            "optional": false,
            "typeAnnotation": null,
            "start": 2666,
            "end": 2698
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2699,
                    "end": 2700
                  },
                  "typeArguments": null,
                  "start": 2699,
                  "end": 2700
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 2709,
                  "end": 2715
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2718,
                    "end": 2719
                  },
                  "typeArguments": null,
                  "start": 2718,
                  "end": 2719
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 2722,
                    "end": 2724
                  },
                  "start": 2722,
                  "end": 2724
                },
                "start": 2699,
                "end": 2724
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": ".",
                  "raw": "'.'",
                  "start": 2726,
                  "end": 2729
                },
                "start": 2726,
                "end": 2729
              }
            ],
            "start": 2698,
            "end": 2730
          },
          "start": 2666,
          "end": 2730
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Ko",
              "optional": false,
              "typeAnnotation": null,
              "start": 2745,
              "end": 2747
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2745,
            "end": 2747
          },
          "start": 2739,
          "end": 2747
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ko",
            "optional": false,
            "typeAnnotation": null,
            "start": 2750,
            "end": 2752
          },
          "typeArguments": null,
          "start": 2750,
          "end": 2752
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2755,
            "end": 2757
          },
          "start": 2755,
          "end": 2757
        },
        "start": 2666,
        "end": 2757
      },
      "declare": false,
      "start": 2648,
      "end": 2757
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expand_",
        "optional": false,
        "typeAnnotation": null,
        "start": 2763,
        "end": 2770
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
              "start": 2771,
              "end": 2772
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2771,
            "end": 2772
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2774,
              "end": 2775
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2774,
            "end": 2775
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 2777,
              "end": 2778
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2787,
              "end": 2793
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 2796,
                "end": 2797
              },
              "start": 2796,
              "end": 2797
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2777,
            "end": 2797
          }
        ],
        "start": 2770,
        "end": 2798
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expand__",
          "optional": false,
          "typeAnnotation": null,
          "start": 2801,
          "end": 2809
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
                "start": 2810,
                "end": 2811
              },
              "typeArguments": null,
              "start": 2810,
              "end": 2811
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SplitAC",
                "optional": false,
                "typeAnnotation": null,
                "start": 2813,
                "end": 2820
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
                      "start": 2821,
                      "end": 2822
                    },
                    "typeArguments": null,
                    "start": 2821,
                    "end": 2822
                  }
                ],
                "start": 2820,
                "end": 2823
              },
              "start": 2813,
              "end": 2823
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 2825,
                "end": 2827
              },
              "start": 2825,
              "end": 2827
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 2829,
                "end": 2830
              },
              "typeArguments": null,
              "start": 2829,
              "end": 2830
            },
            {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 2832,
              "end": 2834
            }
          ],
          "start": 2809,
          "end": 2835
        },
        "start": 2801,
        "end": 2835
      },
      "declare": false,
      "start": 2758,
      "end": 2835
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 2841,
        "end": 2848
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
              "start": 2849,
              "end": 2850
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2849,
            "end": 2850
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 2852,
              "end": 2853
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2862,
              "end": 2868
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 2871,
                "end": 2872
              },
              "start": 2871,
              "end": 2872
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2852,
            "end": 2872
          }
        ],
        "start": 2848,
        "end": 2873
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "KeysCanBeExpanded",
            "optional": false,
            "typeAnnotation": null,
            "start": 2876,
            "end": 2893
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
                  "start": 2894,
                  "end": 2895
                },
                "typeArguments": null,
                "start": 2894,
                "end": 2895
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2897,
                  "end": 2898
                },
                "typeArguments": null,
                "start": 2897,
                "end": 2898
              }
            ],
            "start": 2893,
            "end": 2899
          },
          "start": 2876,
          "end": 2899
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 2914,
              "end": 2915
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2914,
            "end": 2915
          },
          "start": 2908,
          "end": 2915
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 2918,
            "end": 2919
          },
          "typeArguments": null,
          "start": 2918,
          "end": 2919
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2922,
          "end": 2927
        },
        "start": 2876,
        "end": 2927
      },
      "declare": false,
      "start": 2836,
      "end": 2927
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expand",
          "optional": false,
          "typeAnnotation": null,
          "start": 3130,
          "end": 3136
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
                "start": 3137,
                "end": 3138
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3147,
                "end": 3153
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3137,
              "end": 3153
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3155,
                "end": 3156
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3165,
                  "end": 3172
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
                        "start": 3173,
                        "end": 3174
                      },
                      "typeArguments": null,
                      "start": 3173,
                      "end": 3174
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3176,
                        "end": 3177
                      },
                      "typeArguments": null,
                      "start": 3176,
                      "end": 3177
                    }
                  ],
                  "start": 3172,
                  "end": 3178
                },
                "start": 3165,
                "end": 3178
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 3181,
                "end": 3186
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3155,
              "end": 3186
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 3188,
                "end": 3189
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 3198,
                "end": 3204
              },
              "default": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 3207,
                  "end": 3208
                },
                "start": 3207,
                "end": 3208
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3188,
              "end": 3208
            }
          ],
          "start": 3136,
          "end": 3209
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expand_",
            "optional": false,
            "typeAnnotation": null,
            "start": 3212,
            "end": 3219
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
                  "start": 3220,
                  "end": 3221
                },
                "typeArguments": null,
                "start": 3220,
                "end": 3221
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3223,
                  "end": 3224
                },
                "typeArguments": null,
                "start": 3223,
                "end": 3224
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3226,
                  "end": 3227
                },
                "typeArguments": null,
                "start": 3226,
                "end": 3227
              }
            ],
            "start": 3219,
            "end": 3228
          },
          "start": 3212,
          "end": 3228
        },
        "declare": false,
        "start": 3125,
        "end": 3228
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3118,
      "end": 3228
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3357,
                  "end": 3363
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3364,
                        "end": 3365
                      },
                      "typeArguments": null,
                      "start": 3364,
                      "end": 3365
                    }
                  ],
                  "start": 3363,
                  "end": 3366
                },
                "start": 3357,
                "end": 3366
              },
              "start": 3355,
              "end": 3366
            },
            "start": 3353,
            "end": 3366
          },
          "init": null,
          "definite": false,
          "start": 3353,
          "end": 3366
        }
      ],
      "declare": false,
      "start": 3349,
      "end": 3366
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3375,
                  "end": 3381
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3382,
                        "end": 3383
                      },
                      "typeArguments": null,
                      "start": 3382,
                      "end": 3383
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "user.role.user.role",
                        "raw": "'user.role.user.role'",
                        "start": 3385,
                        "end": 3406
                      },
                      "start": 3385,
                      "end": 3406
                    }
                  ],
                  "start": 3381,
                  "end": 3407
                },
                "start": 3375,
                "end": 3407
              },
              "start": 3373,
              "end": 3407
            },
            "start": 3371,
            "end": 3407
          },
          "init": null,
          "definite": false,
          "start": 3371,
          "end": 3407
        }
      ],
      "declare": false,
      "start": 3367,
      "end": 3407
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 3919,
        "end": 3934
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
              "start": 3935,
              "end": 3936
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 3945,
                "end": 3949
              },
              "typeArguments": null,
              "start": 3945,
              "end": 3949
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3935,
            "end": 3949
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3951,
              "end": 3952
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 3961,
                "end": 3968
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
                      "start": 3969,
                      "end": 3970
                    },
                    "typeArguments": null,
                    "start": 3969,
                    "end": 3970
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 3972,
                      "end": 3973
                    },
                    "start": 3972,
                    "end": 3973
                  }
                ],
                "start": 3968,
                "end": 3974
              },
              "start": 3961,
              "end": 3974
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3951,
            "end": 3974
          }
        ],
        "start": 3934,
        "end": 3976
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expand",
          "optional": false,
          "typeAnnotation": null,
          "start": 3979,
          "end": 3985
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
                "start": 3986,
                "end": 3987
              },
              "typeArguments": null,
              "start": 3986,
              "end": 3987
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3989,
                "end": 3990
              },
              "typeArguments": null,
              "start": 3989,
              "end": 3990
            }
          ],
          "start": 3985,
          "end": 3991
        },
        "start": 3979,
        "end": 3991
      },
      "declare": false,
      "start": 3914,
      "end": 3991
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3998,
        "end": 4014
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
              "start": 4015,
              "end": 4016
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4015,
            "end": 4016
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4019,
              "end": 4020
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4019,
            "end": 4020
          }
        ],
        "start": 4014,
        "end": 4023
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expand_",
          "optional": false,
          "typeAnnotation": null,
          "start": 4026,
          "end": 4033
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
                "start": 4034,
                "end": 4035
              },
              "typeArguments": null,
              "start": 4034,
              "end": 4035
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4037,
                "end": 4038
              },
              "typeArguments": null,
              "start": 4037,
              "end": 4038
            }
          ],
          "start": 4033,
          "end": 4039
        },
        "start": 4026,
        "end": 4039
      },
      "declare": false,
      "start": 3993,
      "end": 4039
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4045,
        "end": 4061
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
              "start": 4062,
              "end": 4063
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4062,
            "end": 4063
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4066,
              "end": 4067
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4066,
            "end": 4067
          }
        ],
        "start": 4061,
        "end": 4070
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expand_",
            "optional": false,
            "typeAnnotation": null,
            "start": 4073,
            "end": 4080
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
                  "start": 4081,
                  "end": 4082
                },
                "typeArguments": null,
                "start": 4081,
                "end": 4082
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4084,
                  "end": 4085
                },
                "typeArguments": null,
                "start": 4084,
                "end": 4085
              }
            ],
            "start": 4080,
            "end": 4086
          },
          "start": 4073,
          "end": 4086
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 4101,
              "end": 4102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4101,
            "end": 4102
          },
          "start": 4095,
          "end": 4102
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 4105,
            "end": 4106
          },
          "typeArguments": null,
          "start": 4105,
          "end": 4106
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4109,
          "end": 4114
        },
        "start": 4073,
        "end": 4114
      },
      "declare": false,
      "start": 4040,
      "end": 4114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 4121,
        "end": 4133
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
              "start": 4134,
              "end": 4135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4134,
            "end": 4135
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4136,
              "end": 4137
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4136,
            "end": 4137
          }
        ],
        "start": 4133,
        "end": 4138
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expand_",
            "optional": false,
            "typeAnnotation": null,
            "start": 4141,
            "end": 4148
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
                  "start": 4149,
                  "end": 4150
                },
                "typeArguments": null,
                "start": 4149,
                "end": 4150
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4152,
                  "end": 4153
                },
                "typeArguments": null,
                "start": 4152,
                "end": 4153
              }
            ],
            "start": 4148,
            "end": 4154
          },
          "start": 4141,
          "end": 4154
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 4169,
              "end": 4170
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4169,
            "end": 4170
          },
          "start": 4163,
          "end": 4170
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 4173,
            "end": 4174
          },
          "typeArguments": null,
          "start": 4173,
          "end": 4174
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4177,
          "end": 4182
        },
        "start": 4141,
        "end": 4182
      },
      "declare": false,
      "start": 4116,
      "end": 4182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions4",
        "optional": false,
        "typeAnnotation": null,
        "start": 4188,
        "end": 4204
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
              "start": 4205,
              "end": 4206
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4205,
            "end": 4206
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4209,
              "end": 4210
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4209,
            "end": 4210
          }
        ],
        "start": 4204,
        "end": 4213
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExpandResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 4216,
          "end": 4228
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
                "start": 4229,
                "end": 4230
              },
              "typeArguments": null,
              "start": 4229,
              "end": 4230
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4231,
                "end": 4232
              },
              "typeArguments": null,
              "start": 4231,
              "end": 4232
            }
          ],
          "start": 4228,
          "end": 4233
        },
        "start": 4216,
        "end": 4233
      },
      "declare": false,
      "start": 4183,
      "end": 4233
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UseQueryOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4404,
                  "end": 4419
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4420,
                        "end": 4421
                      },
                      "typeArguments": null,
                      "start": 4420,
                      "end": 4421
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "role.user.role",
                        "raw": "'role.user.role'",
                        "start": 4423,
                        "end": 4439
                      },
                      "start": 4423,
                      "end": 4439
                    }
                  ],
                  "start": 4419,
                  "end": 4440
                },
                "start": 4404,
                "end": 4440
              },
              "start": 4402,
              "end": 4440
            },
            "start": 4401,
            "end": 4440
          },
          "init": null,
          "definite": false,
          "start": 4401,
          "end": 4440
        }
      ],
      "declare": false,
      "start": 4397,
      "end": 4440
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 4440
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 74,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 81,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "CanBeExpanded",
    "start": 86,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 102,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 174,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 195,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 205,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 210,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "role",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "CanBeExpanded",
    "start": 251,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "Role",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "note",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 293,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "Role",
    "start": 303,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 308,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 316,
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
    "value": "id",
    "start": 327,
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
    "value": "string",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 343,
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
    "value": "CanBeExpanded",
    "start": 349,
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
    "value": "User",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 439,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 451,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 492,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "user",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "CanBeExpanded",
    "start": 510,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 524,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "role",
    "start": 535,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "CanBeExpanded",
    "start": 541,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "Role",
    "start": 555,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "roles",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "CanBeExpanded",
    "start": 572,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "Role",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 597,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Join",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 617,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 625,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 649,
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
    "value": "|",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 666,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 673,
    "end": 674
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 683,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 686,
    "end": 687
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 687,
    "end": 690
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 690,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 693,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 703,
    "end": 704
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "String",
    "value": "\".\"",
    "start": 710,
    "end": 713
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 716,
    "end": 717
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 730,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 738,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 746,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "PrefixWith",
    "start": 751,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 781,
    "end": 788
  },
  {
    "type": "String",
    "value": "''",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 792,
    "end": 793
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 794,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 806,
    "end": 807
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 815,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 824,
    "end": 825
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 825,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 828,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 837,
    "end": 838
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 838,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 850,
    "end": 851
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 851,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 855,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "SplitWithAllPossibleCombinations",
    "start": 860,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 895,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 903,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 913,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 921,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 935,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 942,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 954,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 973,
    "end": 980
  },
  {
    "type": "String",
    "value": "''",
    "start": 981,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 984,
    "end": 985
  },
  {
    "type": "String",
    "value": "''",
    "start": 986,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1005,
    "end": 1012
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1016,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1027,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1030,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "Join",
    "start": 1062,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "SplitWithAllPossibleCombinations",
    "start": 1070,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "value": ">",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1241,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "KeysCanBeExpanded_",
    "start": 1246,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1270,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1278,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 1286,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1292,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1300,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1314,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 1322,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 1328,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1340,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1354,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "CanBeExpanded",
    "start": 1362,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "KeysCanBeExpanded_",
    "start": 1386,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 1407,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 1420,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1439,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1447,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1453,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "KeysCanBeExpanded_",
    "start": 1464,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 1489,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1513,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1521,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1571,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1574,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1611,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1619,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "Join",
    "start": 1717,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1726,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "KeysCanBeExpanded_",
    "start": 1730,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 1765,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1804,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1836,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1861,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1904,
    "end": 1909
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1911,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1918,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "KeysCanBeExpanded",
    "start": 1923,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1946,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1954,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "KeysCanBeExpanded_",
    "start": 1968,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2055,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "Expand__",
    "start": 2060,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 2072,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2080,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2088,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2098,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2106,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2115,
    "end": 2120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2121,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2129,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2149,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2157,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 2163,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2185,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "CanBeExpanded",
    "start": 2193,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "String",
    "value": "'default'",
    "start": 2223,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2262,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "CanBeExpanded",
    "start": 2270,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "Expand__",
    "start": 2298,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2311,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 2319,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "String",
    "value": "'value'",
    "start": 2326,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "String",
    "value": "'default'",
    "start": 2336,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 2348,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2360,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2383,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2391,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2397,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "Expand__",
    "start": 2424,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 2436,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2448,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2477,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2485,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2535,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2538,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "Expand__",
    "start": 2550,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 2565,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "PrefixWith",
    "start": 2571,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "value": ",",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2596,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2599,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2648,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "SplitAC",
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
    "value": "K",
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
    "value": "=",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "SplitWithAllPossibleCombinations",
    "start": 2666,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2701,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2709,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "String",
    "value": "''",
    "start": 2722,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 2726,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2731,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2739,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "Ko",
    "start": 2745,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "Ko",
    "start": 2750,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "String",
    "value": "''",
    "start": 2755,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2758,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "Expand_",
    "start": 2763,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2779,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2787,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Identifier",
    "value": "Expand__",
    "start": 2801,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "SplitAC",
    "start": 2813,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "String",
    "value": "''",
    "start": 2825,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2836,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "AllKeys",
    "start": 2841,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2854,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2862,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "KeysCanBeExpanded",
    "start": 2876,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2894,
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
    "value": "N",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2900,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2908,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2922,
    "end": 2927
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3118,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3125,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "Expand",
    "start": 3130,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3139,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3147,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3157,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "AllKeys",
    "start": 3165,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3181,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3190,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3198,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "Expand_",
    "start": 3212,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3349,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 3353,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "Expand",
    "start": 3357,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3367,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 3371,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "Expand",
    "start": 3375,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "String",
    "value": "'user.role.user.role'",
    "start": 3385,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3914,
    "end": 3918
  },
  {
    "type": "Identifier",
    "value": "UseQueryOptions",
    "start": 3919,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3937,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3945,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3953,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "AllKeys",
    "start": 3961,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "Expand",
    "start": 3979,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3987,
    "end": 3988
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3993,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "UseQueryOptions2",
    "start": 3998,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Identifier",
    "value": "Expand_",
    "start": 4026,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4040,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "UseQueryOptions3",
    "start": 4045,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4064,
    "end": 4065
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Identifier",
    "value": "Expand_",
    "start": 4073,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4081,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4087,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4095,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4109,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4116,
    "end": 4120
  },
  {
    "type": "Identifier",
    "value": "ExpandResult",
    "start": 4121,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "Expand_",
    "start": 4141,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4149,
    "end": 4150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4155,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4163,
    "end": 4168
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4177,
    "end": 4182
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4183,
    "end": 4187
  },
  {
    "type": "Identifier",
    "value": "UseQueryOptions4",
    "start": 4188,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Identifier",
    "value": "ExpandResult",
    "start": 4216,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4397,
    "end": 4400
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "UseQueryOptions",
    "start": 4404,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "String",
    "value": "'role.user.role'",
    "start": 4423,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4439,
    "end": 4440
  }
]
```

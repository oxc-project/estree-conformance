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
        "name": "Writeable",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 95
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
              "start": 96,
              "end": 97
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 96,
            "end": 97
          }
        ],
        "start": 95,
        "end": 98
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 115
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
              "start": 125,
              "end": 126
            },
            "typeArguments": null,
            "start": 125,
            "end": 126
          },
          "start": 119,
          "end": 126
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
              "start": 129,
              "end": 130
            },
            "typeArguments": null,
            "start": 129,
            "end": 130
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "typeArguments": null,
            "start": 131,
            "end": 132
          },
          "start": 129,
          "end": 133
        },
        "optional": false,
        "readonly": "-",
        "start": 101,
        "end": 135
      },
      "declare": false,
      "start": 81,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 156,
            "end": 162
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
              },
              "start": 167,
              "end": 175
            },
            "start": 164,
            "end": 175
          }
        ],
        "start": 155,
        "end": 176
      },
      "declare": false,
      "start": 137,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 189
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
              "start": 190,
              "end": 191
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumValues",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 210
              },
              "typeArguments": null,
              "start": 200,
              "end": 210
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 190,
            "end": 210
          }
        ],
        "start": 189,
        "end": 211
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 218
        },
        "constraint": {
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
            "type": "TSNumberKeyword",
            "start": 224,
            "end": 230
          },
          "start": 222,
          "end": 231
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "typeArguments": null,
          "start": 234,
          "end": 235
        },
        "optional": false,
        "readonly": null,
        "start": 214,
        "end": 238
      },
      "declare": false,
      "start": 178,
      "end": 239
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 262
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
              "start": 263,
              "end": 264
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 274,
                  "end": 280
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 285,
                      "end": 291
                    },
                    "start": 285,
                    "end": 293
                  },
                  "start": 282,
                  "end": 293
                }
              ],
              "start": 273,
              "end": 294
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 294
          }
        ],
        "start": 262,
        "end": 295
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
              "name": "enum",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 308
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 318
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
                          "start": 319,
                          "end": 320
                        },
                        "typeArguments": null,
                        "start": 319,
                        "end": 320
                      }
                    ],
                    "start": 318,
                    "end": 321
                  },
                  "start": 312,
                  "end": 321
                },
                "start": 310,
                "end": 321
              },
              "body": null,
              "expression": false,
              "start": 308,
              "end": 321
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 300,
            "end": 321
          }
        ],
        "start": 296,
        "end": 323
      },
      "abstract": false,
      "declare": true,
      "start": 241,
      "end": 323
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createZodEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 355
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 366,
              "end": 372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 356,
            "end": 372
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 392
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 395
                        },
                        "typeArguments": null,
                        "start": 394,
                        "end": 395
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 400,
                              "end": 401
                            },
                            "typeArguments": null,
                            "start": 400,
                            "end": 401
                          },
                          "start": 400,
                          "end": 403
                        },
                        "start": 397,
                        "end": 403
                      }
                    ],
                    "start": 393,
                    "end": 404
                  }
                ],
                "start": 392,
                "end": 405
              },
              "start": 384,
              "end": 405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 405
          }
        ],
        "start": 355,
        "end": 406
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
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
                "start": 415,
                "end": 416
              },
              "typeArguments": null,
              "start": 415,
              "end": 416
            },
            "start": 413,
            "end": 416
          },
          "start": 407,
          "end": 416
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 426
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Writeable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 436
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
                        "start": 437,
                        "end": 438
                      },
                      "typeArguments": null,
                      "start": 437,
                      "end": 438
                    }
                  ],
                  "start": 436,
                  "end": 439
                },
                "start": 427,
                "end": 439
              }
            ],
            "start": 426,
            "end": 440
          },
          "start": 419,
          "end": 440
        },
        "start": 417,
        "end": 440
      },
      "body": null,
      "expression": false,
      "start": 325,
      "end": 441
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 534
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
              "start": 535,
              "end": 536
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 535,
            "end": 536
          }
        ],
        "start": 534,
        "end": 537
      },
      "typeAnnotation": {
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
              "start": 540,
              "end": 541
            },
            "typeArguments": null,
            "start": 540,
            "end": 541
          },
          {
            "type": "TSNullKeyword",
            "start": 544,
            "end": 548
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 551,
            "end": 560
          }
        ],
        "start": 540,
        "end": 560
      },
      "declare": false,
      "start": 524,
      "end": 561
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 575
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSUnknownKeyword",
            "start": 579,
            "end": 586
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 591,
                "end": 598
              },
              "start": 591,
              "end": 600
            },
            "start": 588,
            "end": 600
          }
        ],
        "start": 578,
        "end": 601
      },
      "declare": false,
      "start": 562,
      "end": 602
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 617
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
                    "start": 626,
                    "end": 632
                  },
                  "start": 624,
                  "end": 632
                },
                "start": 623,
                "end": 632
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 635,
                "end": 638
              },
              "start": 633,
              "end": 638
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 622,
            "end": 638
          }
        ],
        "start": 620,
        "end": 640
      },
      "declare": false,
      "start": 603,
      "end": 641
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Flags",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 652
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 655,
              "end": 658
            },
            "start": 655,
            "end": 658
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "d",
              "raw": "\"d\"",
              "start": 661,
              "end": 664
            },
            "start": 661,
            "end": 664
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 667,
              "end": 669
            },
            "start": 667,
            "end": 669
          }
        ],
        "start": 655,
        "end": 669
      },
      "declare": false,
      "start": 642,
      "end": 670
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 689
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
              "start": 690,
              "end": 691
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 690,
            "end": 691
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 694
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 693,
            "end": 700
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 703
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 717
              },
              "typeArguments": null,
              "start": 712,
              "end": 717
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 720,
              "end": 723
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 702,
            "end": 723
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 726
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 729,
              "end": 732
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 725,
            "end": 732
          }
        ],
        "start": 689,
        "end": 733
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
              "name": "__flags",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 745
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 748
                },
                "typeArguments": null,
                "start": 747,
                "end": 748
              },
              "start": 745,
              "end": 748
            },
            "accessibility": null,
            "static": false,
            "start": 738,
            "end": 749
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__context",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 761
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 764
                },
                "typeArguments": null,
                "start": 763,
                "end": 764
              },
              "start": 761,
              "end": 764
            },
            "accessibility": null,
            "static": false,
            "start": 752,
            "end": 765
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__outputType",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 780
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
                  "start": 782,
                  "end": 783
                },
                "typeArguments": null,
                "start": 782,
                "end": 783
              },
              "start": 780,
              "end": 783
            },
            "accessibility": null,
            "static": false,
            "start": 768,
            "end": 784
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__default",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 796
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
                  "start": 798,
                  "end": 799
                },
                "typeArguments": null,
                "start": 798,
                "end": 799
              },
              "start": 796,
              "end": 799
            },
            "accessibility": null,
            "static": false,
            "start": 787,
            "end": 800
          }
        ],
        "start": 734,
        "end": 802
      },
      "declare": false,
      "start": 672,
      "end": 802
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 818,
        "end": 829
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 838
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Maybe",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 852
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnyTuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 853,
                      "end": 861
                    },
                    "typeArguments": null,
                    "start": 853,
                    "end": 861
                  }
                ],
                "start": 852,
                "end": 862
              },
              "start": 847,
              "end": 862
            },
            "default": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnyTuple",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 865,
                    "end": 873
                  },
                  "typeArguments": null,
                  "start": 865,
                  "end": 873
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 876,
                  "end": 885
                }
              ],
              "start": 865,
              "end": 885
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 833,
            "end": 885
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 889,
              "end": 897
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 909
              },
              "typeArguments": null,
              "start": 900,
              "end": 909
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 889,
            "end": 909
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 921
            },
            "constraint": null,
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 924,
              "end": 933
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 913,
            "end": 933
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 943
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 957
              },
              "typeArguments": null,
              "start": 952,
              "end": 957
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 960,
                "end": 962
              },
              "start": 960,
              "end": 962
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 937,
            "end": 962
          }
        ],
        "start": 829,
        "end": 964
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
              "start": 969,
              "end": 980
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schemas",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ISchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 991,
                            "end": 998
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 999,
                                "end": 1002
                              }
                            ],
                            "start": 998,
                            "end": 1003
                          },
                          "start": 991,
                          "end": 1003
                        },
                        {
                          "type": "TSRestType",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ISchema",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1008,
                                "end": 1015
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 1016,
                                    "end": 1019
                                  }
                                ],
                                "start": 1015,
                                "end": 1020
                              },
                              "start": 1008,
                              "end": 1020
                            },
                            "start": 1008,
                            "end": 1022
                          },
                          "start": 1005,
                          "end": 1022
                        }
                      ],
                      "start": 990,
                      "end": 1023
                    },
                    "start": 988,
                    "end": 1023
                  },
                  "start": 981,
                  "end": 1023
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 980,
              "end": 1025
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 969,
            "end": 1025
          }
        ],
        "start": 965,
        "end": 1027
      },
      "abstract": false,
      "declare": true,
      "start": 804,
      "end": 1027
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1051
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
                "start": 1052,
                "end": 1053
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1070
                },
                "typeArguments": null,
                "start": 1062,
                "end": 1070
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1052,
              "end": 1070
            }
          ],
          "start": 1051,
          "end": 1071
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "schemas",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1087
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
                      "start": 1097,
                      "end": 1098
                    },
                    "typeArguments": null,
                    "start": 1097,
                    "end": 1098
                  },
                  "start": 1091,
                  "end": 1098
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ISchema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1108
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
                            "start": 1109,
                            "end": 1110
                          },
                          "typeArguments": null,
                          "start": 1109,
                          "end": 1110
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1111,
                            "end": 1112
                          },
                          "typeArguments": null,
                          "start": 1111,
                          "end": 1112
                        },
                        "start": 1109,
                        "end": 1113
                      }
                    ],
                    "start": 1108,
                    "end": 1114
                  },
                  "start": 1101,
                  "end": 1114
                },
                "optional": false,
                "readonly": null,
                "start": 1081,
                "end": 1117
              },
              "start": 1079,
              "end": 1117
            },
            "start": 1072,
            "end": 1117
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TupleSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1134,
                  "end": 1145
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "start": 1146,
                            "end": 1147
                          },
                          "typeArguments": null,
                          "start": 1146,
                          "end": 1147
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1150,
                          "end": 1159
                        }
                      ],
                      "start": 1146,
                      "end": 1159
                    }
                  ],
                  "start": 1145,
                  "end": 1160
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "schemas",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1161,
                    "end": 1168
                  }
                ],
                "start": 1130,
                "end": 1169
              },
              "start": 1123,
              "end": 1170
            }
          ],
          "start": 1119,
          "end": 1172
        },
        "expression": false,
        "start": 1036,
        "end": 1172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1029,
      "end": 1172
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 81,
  "end": 1172
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 81,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Writeable",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 137,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "EnumValues",
    "start": 142,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "type": "Punctuator",
    "value": "]",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 178,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 192,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "EnumValues",
    "start": 200,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 219,
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
    "value": "number",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 241,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "ZodEnum",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 300,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "enum",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 325,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "createZodEnum",
    "start": 342,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 358,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 376,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 384,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 402,
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
    "value": ">",
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
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
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
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "ZodEnum",
    "start": 419,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "Writeable",
    "start": 427,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 524,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 529,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 542,
    "end": 543
  },
  {
    "type": "Null",
    "value": "null",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 551,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 562,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "AnyTuple",
    "start": 567,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 579,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 588,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 591,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 603,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "AnyObject",
    "start": 608,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 623,
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
    "value": "string",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 642,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "Flags",
    "start": 647,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 655,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 659,
    "end": 660
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 661,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 665,
    "end": 666
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 672,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "ISchema",
    "start": 682,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 704,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "Flags",
    "start": 712,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 720,
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
    "value": "D",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "__flags",
    "start": 738,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "__context",
    "start": 752,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "__outputType",
    "start": 768,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "__default",
    "start": 787,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 804,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 812,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "TupleSchema",
    "start": 818,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 833,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 839,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 847,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "AnyTuple",
    "start": 853,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "AnyTuple",
    "start": 865,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 876,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 889,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "AnyObject",
    "start": 900,
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
    "value": "TDefault",
    "start": 913,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 924,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "TFlags",
    "start": 937,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 944,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "Flags",
    "start": 952,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 960,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 969,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "schemas",
    "start": 981,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "ISchema",
    "start": 991,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "ISchema",
    "start": 1008,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1036,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 1045,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1054,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "AnyTuple",
    "start": 1062,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "schemas",
    "start": 1072,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1088,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1091,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "ISchema",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1123,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "TupleSchema",
    "start": 1134,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1150,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "schemas",
    "start": 1161,
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
    "value": ";",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1171,
    "end": 1172
  }
]
```

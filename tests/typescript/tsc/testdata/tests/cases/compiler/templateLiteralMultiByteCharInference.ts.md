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
        "name": "GetFirst",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 164
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
              "start": 165,
              "end": 166
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 181
          }
        ],
        "start": 164,
        "end": 182
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
            "start": 185,
            "end": 186
          },
          "typeArguments": null,
          "start": 185,
          "end": 186
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
              "start": 195,
              "end": 198
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 208,
              "end": 211
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 217,
              "end": 219
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
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 208
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 204,
                "end": 208
              },
              "start": 198,
              "end": 208
            },
            {
              "type": "TSStringKeyword",
              "start": 211,
              "end": 217
            }
          ],
          "start": 195,
          "end": 219
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Head",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          },
          "typeArguments": null,
          "start": 222,
          "end": 226
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 229,
          "end": 234
        },
        "start": 185,
        "end": 234
      },
      "declare": false,
      "start": 151,
      "end": 235
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 248
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
              "start": 249,
              "end": 250
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 259,
              "end": 265
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 249,
            "end": 265
          }
        ],
        "start": 248,
        "end": 266
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
            "start": 269,
            "end": 270
          },
          "typeArguments": null,
          "start": 269,
          "end": 270
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
              "start": 279,
              "end": 282
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 288,
              "end": 291
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 301,
              "end": 303
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 282,
              "end": 288
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 301
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 297,
                "end": 301
              },
              "start": 291,
              "end": 301
            }
          ],
          "start": 279,
          "end": 303
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 310
          },
          "typeArguments": null,
          "start": 306,
          "end": 310
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 313,
          "end": 318
        },
        "start": 269,
        "end": 318
      },
      "declare": false,
      "start": 236,
      "end": 319
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Split",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 330
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
              "start": 331,
              "end": 332
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 341,
              "end": 347
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 331,
            "end": 347
          }
        ],
        "start": 330,
        "end": 348
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
            "start": 351,
            "end": 352
          },
          "typeArguments": null,
          "start": 351,
          "end": 352
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
              "start": 361,
              "end": 364
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 374,
              "end": 377
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 387,
              "end": 389
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
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 374
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 370,
                "end": 374
              },
              "start": 364,
              "end": 374
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 387
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 383,
                "end": 387
              },
              "start": 377,
              "end": 387
            }
          ],
          "start": 361,
          "end": 389
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Head",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 397
              },
              "typeArguments": null,
              "start": 393,
              "end": 397
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 403
              },
              "typeArguments": null,
              "start": 399,
              "end": 403
            }
          ],
          "start": 392,
          "end": 404
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 407,
          "end": 412
        },
        "start": 351,
        "end": 412
      },
      "declare": false,
      "start": 320,
      "end": 413
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 455
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetFirst",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 466
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "ABC",
                "raw": "\"ABC\"",
                "start": 467,
                "end": 472
              },
              "start": 467,
              "end": 472
            }
          ],
          "start": 466,
          "end": 473
        },
        "start": 458,
        "end": 473
      },
      "declare": false,
      "start": 449,
      "end": 474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BC",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 490
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 493,
          "end": 500
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "ABC",
                "raw": "\"ABC\"",
                "start": 501,
                "end": 506
              },
              "start": 501,
              "end": 506
            }
          ],
          "start": 500,
          "end": 507
        },
        "start": 493,
        "end": 507
      },
      "declare": false,
      "start": 483,
      "end": 508
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ABC_Split",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 532
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 535,
          "end": 540
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "ABC",
                "raw": "\"ABC\"",
                "start": 541,
                "end": 546
              },
              "start": 541,
              "end": 546
            }
          ],
          "start": 540,
          "end": 547
        },
        "start": 535,
        "end": 547
      },
      "declare": false,
      "start": 518,
      "end": 548
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ah",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 650
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetFirst",
          "optional": false,
          "typeAnnotation": null,
          "start": 653,
          "end": 661
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "あいう",
                "raw": "\"あいう\"",
                "start": 662,
                "end": 667
              },
              "start": 662,
              "end": 667
            }
          ],
          "start": 661,
          "end": 668
        },
        "start": 653,
        "end": 668
      },
      "declare": false,
      "start": 643,
      "end": 669
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IU",
        "optional": false,
        "typeAnnotation": null,
        "start": 683,
        "end": 685
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 695
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "あいう",
                "raw": "\"あいう\"",
                "start": 696,
                "end": 701
              },
              "start": 696,
              "end": 701
            }
          ],
          "start": 695,
          "end": 702
        },
        "start": 688,
        "end": 702
      },
      "declare": false,
      "start": 678,
      "end": 703
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AIU_Split",
        "optional": false,
        "typeAnnotation": null,
        "start": 718,
        "end": 727
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Split",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 735
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "あいう",
                "raw": "\"あいう\"",
                "start": 736,
                "end": 741
              },
              "start": 736,
              "end": 741
            }
          ],
          "start": 735,
          "end": 742
        },
        "start": 730,
        "end": 742
      },
      "declare": false,
      "start": 713,
      "end": 743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 802,
        "end": 804
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetFirst",
          "optional": false,
          "typeAnnotation": null,
          "start": 807,
          "end": 815
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "aあ",
                "raw": "\"aあ\"",
                "start": 816,
                "end": 820
              },
              "start": 816,
              "end": 820
            }
          ],
          "start": 815,
          "end": 821
        },
        "start": 807,
        "end": 821
      },
      "declare": false,
      "start": 797,
      "end": 822
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 836,
        "end": 838
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetFirst",
          "optional": false,
          "typeAnnotation": null,
          "start": 841,
          "end": 849
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "あa",
                "raw": "\"あa\"",
                "start": 850,
                "end": 854
              },
              "start": 850,
              "end": 854
            }
          ],
          "start": 849,
          "end": 855
        },
        "start": 841,
        "end": 855
      },
      "declare": false,
      "start": 831,
      "end": 856
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 939
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetFirst",
          "optional": false,
          "typeAnnotation": null,
          "start": 942,
          "end": 950
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "éàü",
                "raw": "\"éàü\"",
                "start": 951,
                "end": 956
              },
              "start": 951,
              "end": 956
            }
          ],
          "start": 950,
          "end": 957
        },
        "start": 942,
        "end": 957
      },
      "declare": false,
      "start": 933,
      "end": 958
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Emoji",
        "optional": false,
        "typeAnnotation": null,
        "start": 1043,
        "end": 1048
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetFirst",
          "optional": false,
          "typeAnnotation": null,
          "start": 1051,
          "end": 1059
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "😀abc",
                "raw": "\"😀abc\"",
                "start": 1060,
                "end": 1067
              },
              "start": 1060,
              "end": 1067
            }
          ],
          "start": 1059,
          "end": 1068
        },
        "start": 1051,
        "end": 1068
      },
      "declare": false,
      "start": 1038,
      "end": 1069
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expect",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1098
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
              "start": 1099,
              "end": 1100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1099,
            "end": 1100
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Expected",
              "optional": false,
              "typeAnnotation": null,
              "start": 1102,
              "end": 1110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1102,
            "end": 1110
          }
        ],
        "start": 1098,
        "end": 1111
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1114,
            "end": 1115
          },
          "typeArguments": null,
          "start": 1114,
          "end": 1115
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expected",
            "optional": false,
            "typeAnnotation": null,
            "start": 1124,
            "end": 1132
          },
          "typeArguments": null,
          "start": 1124,
          "end": 1132
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1135,
            "end": 1139
          },
          "start": 1135,
          "end": 1139
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1142,
            "end": 1147
          },
          "start": 1142,
          "end": 1147
        },
        "start": 1114,
        "end": 1147
      },
      "declare": false,
      "start": 1087,
      "end": 1148
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
            "name": "check1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1163,
                  "end": 1169
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1170,
                        "end": 1171
                      },
                      "typeArguments": null,
                      "start": 1170,
                      "end": 1171
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "A",
                        "raw": "\"A\"",
                        "start": 1173,
                        "end": 1176
                      },
                      "start": 1173,
                      "end": 1176
                    }
                  ],
                  "start": 1169,
                  "end": 1177
                },
                "start": 1163,
                "end": 1177
              },
              "start": 1161,
              "end": 1177
            },
            "start": 1155,
            "end": 1177
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1180,
            "end": 1184
          },
          "definite": false,
          "start": 1155,
          "end": 1184
        }
      ],
      "declare": false,
      "start": 1149,
      "end": 1185
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
            "name": "check2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1200,
                  "end": 1206
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ah",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1207,
                        "end": 1209
                      },
                      "typeArguments": null,
                      "start": 1207,
                      "end": 1209
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "あ",
                        "raw": "\"あ\"",
                        "start": 1211,
                        "end": 1214
                      },
                      "start": 1211,
                      "end": 1214
                    }
                  ],
                  "start": 1206,
                  "end": 1215
                },
                "start": 1200,
                "end": 1215
              },
              "start": 1198,
              "end": 1215
            },
            "start": 1192,
            "end": 1215
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1218,
            "end": 1222
          },
          "definite": false,
          "start": 1192,
          "end": 1222
        }
      ],
      "declare": false,
      "start": 1186,
      "end": 1223
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
            "name": "check3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1238,
                  "end": 1244
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1245,
                        "end": 1247
                      },
                      "typeArguments": null,
                      "start": 1245,
                      "end": 1247
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "BC",
                        "raw": "\"BC\"",
                        "start": 1249,
                        "end": 1253
                      },
                      "start": 1249,
                      "end": 1253
                    }
                  ],
                  "start": 1244,
                  "end": 1254
                },
                "start": 1238,
                "end": 1254
              },
              "start": 1236,
              "end": 1254
            },
            "start": 1230,
            "end": 1254
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1257,
            "end": 1261
          },
          "definite": false,
          "start": 1230,
          "end": 1261
        }
      ],
      "declare": false,
      "start": 1224,
      "end": 1262
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
            "name": "check4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1283
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IU",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1284,
                        "end": 1286
                      },
                      "typeArguments": null,
                      "start": 1284,
                      "end": 1286
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "いう",
                        "raw": "\"いう\"",
                        "start": 1288,
                        "end": 1292
                      },
                      "start": 1288,
                      "end": 1292
                    }
                  ],
                  "start": 1283,
                  "end": 1293
                },
                "start": 1277,
                "end": 1293
              },
              "start": 1275,
              "end": 1293
            },
            "start": 1269,
            "end": 1293
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1296,
            "end": 1300
          },
          "definite": false,
          "start": 1269,
          "end": 1300
        }
      ],
      "declare": false,
      "start": 1263,
      "end": 1301
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
            "name": "check5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1322
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1323,
                        "end": 1325
                      },
                      "typeArguments": null,
                      "start": 1323,
                      "end": 1325
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1327,
                        "end": 1330
                      },
                      "start": 1327,
                      "end": 1330
                    }
                  ],
                  "start": 1322,
                  "end": 1331
                },
                "start": 1316,
                "end": 1331
              },
              "start": 1314,
              "end": 1331
            },
            "start": 1308,
            "end": 1331
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1334,
            "end": 1338
          },
          "definite": false,
          "start": 1308,
          "end": 1338
        }
      ],
      "declare": false,
      "start": 1302,
      "end": 1339
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
            "name": "check6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1354,
                  "end": 1360
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1361,
                        "end": 1363
                      },
                      "typeArguments": null,
                      "start": 1361,
                      "end": 1363
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "あ",
                        "raw": "\"あ\"",
                        "start": 1365,
                        "end": 1368
                      },
                      "start": 1365,
                      "end": 1368
                    }
                  ],
                  "start": 1360,
                  "end": 1369
                },
                "start": 1354,
                "end": 1369
              },
              "start": 1352,
              "end": 1369
            },
            "start": 1346,
            "end": 1369
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1372,
            "end": 1376
          },
          "definite": false,
          "start": 1346,
          "end": 1376
        }
      ],
      "declare": false,
      "start": 1340,
      "end": 1377
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
            "name": "check7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1392,
                  "end": 1398
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1399,
                        "end": 1400
                      },
                      "typeArguments": null,
                      "start": 1399,
                      "end": 1400
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "é",
                        "raw": "\"é\"",
                        "start": 1402,
                        "end": 1405
                      },
                      "start": 1402,
                      "end": 1405
                    }
                  ],
                  "start": 1398,
                  "end": 1406
                },
                "start": 1392,
                "end": 1406
              },
              "start": 1390,
              "end": 1406
            },
            "start": 1384,
            "end": 1406
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1409,
            "end": 1413
          },
          "definite": false,
          "start": 1384,
          "end": 1413
        }
      ],
      "declare": false,
      "start": 1378,
      "end": 1414
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 151,
  "end": 1414
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 151,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "GetFirst",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 167,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 204,
    "end": 208
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 211,
    "end": 217
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 236,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "GetRest",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 251,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 271,
    "end": 278
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 282,
    "end": 288
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 291,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 297,
    "end": 301
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
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
    "value": "Split",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 333,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 353,
    "end": 360
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 364,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 370,
    "end": 374
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 374,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 377,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 383,
    "end": 387
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 399,
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
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 449,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "GetFirst",
    "start": 458,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 467,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 483,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "BC",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "GetRest",
    "start": 493,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 518,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "ABC_Split",
    "start": 523,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 535,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541
  },
  {
    "type": "String",
    "value": "\"ABC\"",
    "start": 541,
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
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 643,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Ah",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "GetFirst",
    "start": 653,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 661,
    "end": 662
  },
  {
    "type": "String",
    "value": "\"あいう\"",
    "start": 662,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 678,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "IU",
    "start": 683,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "GetRest",
    "start": 688,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 695,
    "end": 696
  },
  {
    "type": "String",
    "value": "\"あいう\"",
    "start": 696,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 713,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "AIU_Split",
    "start": 718,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "Split",
    "start": 730,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736
  },
  {
    "type": "String",
    "value": "\"あいう\"",
    "start": 736,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 797,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 802,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "GetFirst",
    "start": 807,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 815,
    "end": 816
  },
  {
    "type": "String",
    "value": "\"aあ\"",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 831,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "GetFirst",
    "start": 841,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850
  },
  {
    "type": "String",
    "value": "\"あa\"",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 933,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "GetFirst",
    "start": 942,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 950,
    "end": 951
  },
  {
    "type": "String",
    "value": "\"éàü\"",
    "start": 951,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1038,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "Emoji",
    "start": 1043,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "GetFirst",
    "start": 1051,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "String",
    "value": "\"😀abc\"",
    "start": 1060,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1087,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "Expect",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "Expected",
    "start": 1102,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1116,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "Expected",
    "start": 1124,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1135,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1149,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "check1",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "Expect",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1180,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1186,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "check2",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "Expect",
    "start": 1200,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "Ah",
    "start": 1207,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "String",
    "value": "\"あ\"",
    "start": 1211,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1218,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "check3",
    "start": 1230,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "Expect",
    "start": 1238,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "BC",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "String",
    "value": "\"BC\"",
    "start": 1249,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1257,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1263,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "check4",
    "start": 1269,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "Expect",
    "start": 1277,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "IU",
    "start": 1284,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "String",
    "value": "\"いう\"",
    "start": 1288,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1296,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1302,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "check5",
    "start": 1308,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "Expect",
    "start": 1316,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1340,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "check6",
    "start": 1346,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "Expect",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "String",
    "value": "\"あ\"",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1372,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1378,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "check7",
    "start": 1384,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "Expect",
    "start": 1392,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "String",
    "value": "\"é\"",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1409,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1413,
    "end": 1414
  }
]
```

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
        "name": "Dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 234
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 245,
              "end": 251
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 235,
            "end": 251
          }
        ],
        "start": 234,
        "end": 252
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
            "start": 259,
            "end": 260
          },
          "typeArguments": null,
          "start": 259,
          "end": 260
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 269,
            "end": 270
          },
          "start": 269,
          "end": 270
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 273,
            "end": 274
          },
          "start": 273,
          "end": 274
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "typeArguments": null,
            "start": 277,
            "end": 278
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 287,
              "end": 288
            },
            "start": 287,
            "end": 288
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 291,
              "end": 292
            },
            "start": 291,
            "end": 292
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 296
              },
              "typeArguments": null,
              "start": 295,
              "end": 296
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 305,
                "end": 306
              },
              "start": 305,
              "end": 306
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 309,
                "end": 310
              },
              "start": 309,
              "end": 310
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 318
                },
                "typeArguments": null,
                "start": 317,
                "end": 318
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 327,
                  "end": 328
                },
                "start": 327,
                "end": 328
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 331,
                "end": 334
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 342
                  },
                  "typeArguments": null,
                  "start": 341,
                  "end": 342
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 351,
                    "end": 352
                  },
                  "start": 351,
                  "end": 352
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 355,
                    "end": 356
                  },
                  "start": 355,
                  "end": 356
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 359,
                    "end": 360
                  },
                  "start": 359,
                  "end": 360
                },
                "start": 341,
                "end": 360
              },
              "start": 317,
              "end": 360
            },
            "start": 295,
            "end": 360
          },
          "start": 277,
          "end": 360
        },
        "start": 259,
        "end": 360
      },
      "declare": false,
      "start": 226,
      "end": 361
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recur",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 373
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 384,
              "end": 390
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 390
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 393
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 402,
              "end": 408
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 392,
            "end": 408
          }
        ],
        "start": 373,
        "end": 409
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
            "start": 416,
            "end": 417
          },
          "typeArguments": null,
          "start": 416,
          "end": 417
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 426,
            "end": 427
          },
          "start": 426,
          "end": 427
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 431
          },
          "typeArguments": null,
          "start": 430,
          "end": 431
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recur",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 439
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 443
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 445
                      },
                      "typeArguments": null,
                      "start": 444,
                      "end": 445
                    }
                  ],
                  "start": 443,
                  "end": 446
                },
                "start": 440,
                "end": 446
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
                    "start": 448,
                    "end": 451
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "_",
                      "cooked": "_"
                    },
                    "tail": false,
                    "start": 452,
                    "end": 456
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 457,
                    "end": 459
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 452
                    },
                    "typeArguments": null,
                    "start": 451,
                    "end": 452
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 456,
                      "end": 457
                    },
                    "typeArguments": null,
                    "start": 456,
                    "end": 457
                  }
                ],
                "start": 448,
                "end": 459
              }
            ],
            "start": 439,
            "end": 460
          },
          "start": 434,
          "end": 460
        },
        "start": 416,
        "end": 460
      },
      "declare": false,
      "start": 363,
      "end": 461
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explode",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 525
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
          "start": 535,
          "end": 536
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recur",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 545
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 546,
                  "end": 547
                },
                "start": 546,
                "end": 547
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 549,
                  "end": 552
                },
                "start": 549,
                "end": 552
              }
            ],
            "start": 545,
            "end": 553
          },
          "start": 540,
          "end": 553
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 557,
              "end": 560
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_key",
                "cooked": "_key"
              },
              "tail": true,
              "start": 561,
              "end": 567
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 561
              },
              "typeArguments": null,
              "start": 560,
              "end": 561
            }
          ],
          "start": 557,
          "end": 567
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 570,
          "end": 573
        },
        "optional": false,
        "readonly": null,
        "start": 528,
        "end": 576
      },
      "declare": false,
      "start": 513,
      "end": 577
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExplodeSpans",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 654
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
          "start": 664,
          "end": 665
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recur",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 674
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 675,
                  "end": 676
                },
                "start": 675,
                "end": 676
              },
              {
                "type": "TSStringKeyword",
                "start": 678,
                "end": 684
              }
            ],
            "start": 674,
            "end": 685
          },
          "start": 669,
          "end": 685
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 689,
              "end": 692
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_key",
                "cooked": "_key"
              },
              "tail": true,
              "start": 693,
              "end": 699
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 693
              },
              "typeArguments": null,
              "start": 692,
              "end": 693
            }
          ],
          "start": 689,
          "end": 699
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 702,
          "end": 705
        },
        "optional": false,
        "readonly": null,
        "start": 657,
        "end": 708
      },
      "declare": false,
      "start": 637,
      "end": 709
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A16",
        "optional": false,
        "typeAnnotation": null,
        "start": 858,
        "end": 861
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": "aaaaaaaaaaaaaaaa",
          "raw": "\"aaaaaaaaaaaaaaaa\"",
          "start": 864,
          "end": 882
        },
        "start": 864,
        "end": 882
      },
      "declare": false,
      "start": 853,
      "end": 883
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A64",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 892
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 895,
            "end": 898
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 901,
            "end": 904
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 907,
            "end": 910
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 913,
            "end": 916
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 919,
            "end": 921
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A16",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 901
            },
            "typeArguments": null,
            "start": 898,
            "end": 901
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A16",
              "optional": false,
              "typeAnnotation": null,
              "start": 904,
              "end": 907
            },
            "typeArguments": null,
            "start": 904,
            "end": 907
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A16",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 913
            },
            "typeArguments": null,
            "start": 910,
            "end": 913
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A16",
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 919
            },
            "typeArguments": null,
            "start": 916,
            "end": 919
          }
        ],
        "start": 895,
        "end": 921
      },
      "declare": false,
      "start": 884,
      "end": 922
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A256",
        "optional": false,
        "typeAnnotation": null,
        "start": 928,
        "end": 932
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 935,
            "end": 938
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 941,
            "end": 944
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 947,
            "end": 950
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 953,
            "end": 956
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 959,
            "end": 961
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A64",
              "optional": false,
              "typeAnnotation": null,
              "start": 938,
              "end": 941
            },
            "typeArguments": null,
            "start": 938,
            "end": 941
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A64",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 947
            },
            "typeArguments": null,
            "start": 944,
            "end": 947
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A64",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 953
            },
            "typeArguments": null,
            "start": 950,
            "end": 953
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A64",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 959
            },
            "typeArguments": null,
            "start": 956,
            "end": 959
          }
        ],
        "start": 935,
        "end": 961
      },
      "declare": false,
      "start": 923,
      "end": 962
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1024",
        "optional": false,
        "typeAnnotation": null,
        "start": 968,
        "end": 973
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 976,
            "end": 979
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 983,
            "end": 986
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 990,
            "end": 993
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 997,
            "end": 1000
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 1004,
            "end": 1006
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A256",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 983
            },
            "typeArguments": null,
            "start": 979,
            "end": 983
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A256",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 990
            },
            "typeArguments": null,
            "start": 986,
            "end": 990
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A256",
              "optional": false,
              "typeAnnotation": null,
              "start": 993,
              "end": 997
            },
            "typeArguments": null,
            "start": 993,
            "end": 997
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A256",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1004
            },
            "typeArguments": null,
            "start": 1000,
            "end": 1004
          }
        ],
        "start": 976,
        "end": 1006
      },
      "declare": false,
      "start": 963,
      "end": 1007
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecurSegments",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1027
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1028,
              "end": 1029
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1038,
              "end": 1044
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1028,
            "end": 1044
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1046,
              "end": 1047
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1056,
              "end": 1062
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1046,
            "end": 1062
          }
        ],
        "start": 1027,
        "end": 1063
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
            "start": 1070,
            "end": 1071
          },
          "typeArguments": null,
          "start": 1070,
          "end": 1071
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1080,
            "end": 1081
          },
          "start": 1080,
          "end": 1081
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 1084,
            "end": 1085
          },
          "typeArguments": null,
          "start": 1084,
          "end": 1085
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RecurSegments",
            "optional": false,
            "typeAnnotation": null,
            "start": 1088,
            "end": 1101
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1105
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
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
                  "start": 1105,
                  "end": 1108
                },
                "start": 1102,
                "end": 1108
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
                    "start": 1110,
                    "end": 1113
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1114,
                    "end": 1117
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1123,
                    "end": 1126
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1127,
                    "end": 1129
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1113,
                      "end": 1114
                    },
                    "typeArguments": null,
                    "start": 1113,
                    "end": 1114
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1117,
                    "end": 1123
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1126,
                      "end": 1127
                    },
                    "typeArguments": null,
                    "start": 1126,
                    "end": 1127
                  }
                ],
                "start": 1110,
                "end": 1129
              }
            ],
            "start": 1101,
            "end": 1130
          },
          "start": 1088,
          "end": 1130
        },
        "start": 1070,
        "end": 1130
      },
      "declare": false,
      "start": 1009,
      "end": 1131
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExplodeSegments",
        "optional": false,
        "typeAnnotation": null,
        "start": 1138,
        "end": 1153
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
          "start": 1163,
          "end": 1164
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RecurSegments",
            "optional": false,
            "typeAnnotation": null,
            "start": 1168,
            "end": 1181
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1182,
                  "end": 1183
                },
                "start": 1182,
                "end": 1183
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1024",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1185,
                  "end": 1190
                },
                "typeArguments": null,
                "start": 1185,
                "end": 1190
              }
            ],
            "start": 1181,
            "end": 1191
          },
          "start": 1168,
          "end": 1191
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1195,
              "end": 1198
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_key",
                "cooked": "_key"
              },
              "tail": true,
              "start": 1199,
              "end": 1205
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1198,
                "end": 1199
              },
              "typeArguments": null,
              "start": 1198,
              "end": 1199
            }
          ],
          "start": 1195,
          "end": 1205
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1208,
          "end": 1211
        },
        "optional": false,
        "readonly": null,
        "start": 1156,
        "end": 1214
      },
      "declare": false,
      "start": 1133,
      "end": 1215
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 226,
  "end": 1215
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 226,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "Dec",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 237,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 261,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 271,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 279,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 289,
    "end": 290
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 297,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 309,
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
    "value": "N",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 319,
    "end": 326
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 343,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 353,
    "end": 354
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "start": 363,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 368,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "N",
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
    "value": "number",
    "start": 384,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 394,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 418,
    "end": 425
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "Dec",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 446,
    "end": 447
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 448,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 451,
    "end": 452
  },
  {
    "type": "Template",
    "value": "}_${",
    "start": 452,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 456,
    "end": 457
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 457,
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
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 513,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "Explode",
    "start": 518,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 537,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 540,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 554,
    "end": 556
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 560,
    "end": 561
  },
  {
    "type": "Template",
    "value": "}_key`",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 637,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "ExplodeSpans",
    "start": 642,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 666,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "Recur",
    "start": 669,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 674,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 678,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 686,
    "end": 688
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 689,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 692,
    "end": 693
  },
  {
    "type": "Template",
    "value": "}_key`",
    "start": 693,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 702,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 853,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "String",
    "value": "\"aaaaaaaaaaaaaaaa\"",
    "start": 864,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 884,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "A64",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 895,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 898,
    "end": 901
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 901,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 904,
    "end": 907
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 907,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 910,
    "end": 913
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 913,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 916,
    "end": 919
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 919,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 923,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "A256",
    "start": 928,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 935,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "A64",
    "start": 938,
    "end": 941
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "A64",
    "start": 944,
    "end": 947
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 947,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "A64",
    "start": 950,
    "end": 953
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 953,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "A64",
    "start": 956,
    "end": 959
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 959,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 963,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "A1024",
    "start": 968,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 976,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "A256",
    "start": 979,
    "end": 983
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 983,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "A256",
    "start": 986,
    "end": 990
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 990,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "A256",
    "start": 993,
    "end": 997
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 997,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "A256",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1009,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "RecurSegments",
    "start": 1014,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1030,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1048,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1056,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1072,
    "end": 1079
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "RecurSegments",
    "start": 1088,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "Dec",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "N",
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
    "value": ",",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "ExplodeSegments",
    "start": 1138,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1165,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "RecurSegments",
    "start": 1168,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "A1024",
    "start": 1185,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1192,
    "end": 1194
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1195,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Template",
    "value": "}_key`",
    "start": 1199,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  }
]
```

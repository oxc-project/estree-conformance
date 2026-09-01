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
        "name": "TNumber0",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 34
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "100",
            "raw": "\"100\"",
            "start": 37,
            "end": 42
          },
          "start": 37,
          "end": 42
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
              "start": 51,
              "end": 54
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 76,
              "end": 78
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 60,
                "end": 76
              },
              "start": 54,
              "end": 76
            }
          ],
          "start": 51,
          "end": 78
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "typeArguments": null,
          "start": 81,
          "end": 82
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 85,
          "end": 90
        },
        "start": 37,
        "end": 90
      },
      "declare": false,
      "start": 21,
      "end": 91
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumber1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 112
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "-100",
            "raw": "\"-100\"",
            "start": 115,
            "end": 121
          },
          "start": 115,
          "end": 121
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
              "start": 130,
              "end": 133
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 155,
              "end": 157
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 149,
                  "end": 155
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 139,
                "end": 155
              },
              "start": 133,
              "end": 155
            }
          ],
          "start": 130,
          "end": 157
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 161
          },
          "typeArguments": null,
          "start": 160,
          "end": 161
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 164,
          "end": 169
        },
        "start": 115,
        "end": 169
      },
      "declare": false,
      "start": 99,
      "end": 170
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumber2",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "1.1",
            "raw": "\"1.1\"",
            "start": 195,
            "end": 200
          },
          "start": 195,
          "end": 200
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
              "start": 209,
              "end": 212
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 234,
              "end": 236
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 219
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 228,
                  "end": 234
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 218,
                "end": 234
              },
              "start": 212,
              "end": 234
            }
          ],
          "start": 209,
          "end": 236
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          "typeArguments": null,
          "start": 239,
          "end": 240
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 243,
          "end": 248
        },
        "start": 195,
        "end": 248
      },
      "declare": false,
      "start": 179,
      "end": 249
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumber3",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 270
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "8e-11",
            "raw": "\"8e-11\"",
            "start": 273,
            "end": 280
          },
          "start": 273,
          "end": 280
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
              "start": 289,
              "end": 292
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 314,
              "end": 316
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 308,
                  "end": 314
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 298,
                "end": 314
              },
              "start": 292,
              "end": 314
            }
          ],
          "start": 289,
          "end": 316
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 320
          },
          "typeArguments": null,
          "start": 319,
          "end": 320
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 323,
          "end": 328
        },
        "start": 273,
        "end": 328
      },
      "declare": false,
      "start": 257,
      "end": 329
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumber4",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 368
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0x10",
            "raw": "\"0x10\"",
            "start": 371,
            "end": 377
          },
          "start": 371,
          "end": 377
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
              "start": 386,
              "end": 389
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 411,
              "end": 413
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 396
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 405,
                  "end": 411
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 395,
                "end": 411
              },
              "start": 389,
              "end": 411
            }
          ],
          "start": 386,
          "end": 413
        },
        "trueType": {
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
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 420,
          "end": 425
        },
        "start": 371,
        "end": 425
      },
      "declare": false,
      "start": 355,
      "end": 426
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumber5",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 472
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0o10",
            "raw": "\"0o10\"",
            "start": 475,
            "end": 481
          },
          "start": 475,
          "end": 481
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
              "start": 490,
              "end": 493
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 515,
              "end": 517
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 500
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 509,
                  "end": 515
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 499,
                "end": 515
              },
              "start": 493,
              "end": 515
            }
          ],
          "start": 490,
          "end": 517
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 521
          },
          "typeArguments": null,
          "start": 520,
          "end": 521
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 524,
          "end": 529
        },
        "start": 475,
        "end": 529
      },
      "declare": false,
      "start": 459,
      "end": 530
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumber6",
        "optional": false,
        "typeAnnotation": null,
        "start": 568,
        "end": 576
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0b10",
            "raw": "\"0b10\"",
            "start": 579,
            "end": 585
          },
          "start": 579,
          "end": 585
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
              "start": 594,
              "end": 597
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 619,
              "end": 621
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 604
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 613,
                  "end": 619
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 603,
                "end": 619
              },
              "start": 597,
              "end": 619
            }
          ],
          "start": 594,
          "end": 621
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 625
          },
          "typeArguments": null,
          "start": 624,
          "end": 625
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 628,
          "end": 633
        },
        "start": 579,
        "end": 633
      },
      "declare": false,
      "start": 563,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumber7",
        "optional": false,
        "typeAnnotation": null,
        "start": 672,
        "end": 680
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "10e2",
            "raw": "\"10e2\"",
            "start": 683,
            "end": 689
          },
          "start": 683,
          "end": 689
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
              "start": 698,
              "end": 701
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 723,
              "end": 725
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 708
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 717,
                  "end": 723
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 707,
                "end": 723
              },
              "start": 701,
              "end": 723
            }
          ],
          "start": 698,
          "end": 725
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 728,
            "end": 729
          },
          "typeArguments": null,
          "start": 728,
          "end": 729
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 732,
          "end": 737
        },
        "start": 683,
        "end": 737
      },
      "declare": false,
      "start": 667,
      "end": 738
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumber8",
        "optional": false,
        "typeAnnotation": null,
        "start": 776,
        "end": 784
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "abcd",
            "raw": "\"abcd\"",
            "start": 787,
            "end": 793
          },
          "start": 787,
          "end": 793
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
              "start": 802,
              "end": 805
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 827,
              "end": 829
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 811,
                  "end": 812
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 821,
                  "end": 827
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 811,
                "end": 827
              },
              "start": 805,
              "end": 827
            }
          ],
          "start": 802,
          "end": 829
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 832,
            "end": 833
          },
          "typeArguments": null,
          "start": 832,
          "end": 833
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 836,
          "end": 841
        },
        "start": 787,
        "end": 841
      },
      "declare": false,
      "start": 771,
      "end": 842
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBigInt0",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 887
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "100",
            "raw": "\"100\"",
            "start": 890,
            "end": 895
          },
          "start": 890,
          "end": 895
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
              "start": 904,
              "end": 907
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 929,
              "end": 931
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 913,
                  "end": 914
                },
                "constraint": {
                  "type": "TSBigIntKeyword",
                  "start": 923,
                  "end": 929
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 913,
                "end": 929
              },
              "start": 907,
              "end": 929
            }
          ],
          "start": 904,
          "end": 931
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 934,
            "end": 935
          },
          "typeArguments": null,
          "start": 934,
          "end": 935
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 938,
          "end": 943
        },
        "start": 890,
        "end": 943
      },
      "declare": false,
      "start": 874,
      "end": 944
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBigInt1",
        "optional": false,
        "typeAnnotation": null,
        "start": 958,
        "end": 966
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "-100",
            "raw": "\"-100\"",
            "start": 969,
            "end": 975
          },
          "start": 969,
          "end": 975
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
              "start": 984,
              "end": 987
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1009,
              "end": 1011
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 994
                },
                "constraint": {
                  "type": "TSBigIntKeyword",
                  "start": 1003,
                  "end": 1009
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 993,
                "end": 1009
              },
              "start": 987,
              "end": 1009
            }
          ],
          "start": 984,
          "end": 1011
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1015
          },
          "typeArguments": null,
          "start": 1014,
          "end": 1015
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1018,
          "end": 1023
        },
        "start": 969,
        "end": 1023
      },
      "declare": false,
      "start": 953,
      "end": 1024
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBigInt2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1047
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0x10",
            "raw": "\"0x10\"",
            "start": 1050,
            "end": 1056
          },
          "start": 1050,
          "end": 1056
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
              "start": 1065,
              "end": 1068
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1090,
              "end": 1092
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1075
                },
                "constraint": {
                  "type": "TSBigIntKeyword",
                  "start": 1084,
                  "end": 1090
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1074,
                "end": 1090
              },
              "start": 1068,
              "end": 1090
            }
          ],
          "start": 1065,
          "end": 1092
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1096
          },
          "typeArguments": null,
          "start": 1095,
          "end": 1096
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1099,
          "end": 1104
        },
        "start": 1050,
        "end": 1104
      },
      "declare": false,
      "start": 1034,
      "end": 1105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBigInt3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1143,
        "end": 1151
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0o10",
            "raw": "\"0o10\"",
            "start": 1154,
            "end": 1160
          },
          "start": 1154,
          "end": 1160
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
              "start": 1169,
              "end": 1172
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1194,
              "end": 1196
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1179
                },
                "constraint": {
                  "type": "TSBigIntKeyword",
                  "start": 1188,
                  "end": 1194
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1178,
                "end": 1194
              },
              "start": 1172,
              "end": 1194
            }
          ],
          "start": 1169,
          "end": 1196
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1199,
            "end": 1200
          },
          "typeArguments": null,
          "start": 1199,
          "end": 1200
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1203,
          "end": 1208
        },
        "start": 1154,
        "end": 1208
      },
      "declare": false,
      "start": 1138,
      "end": 1209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBigInt4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1247,
        "end": 1255
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0b10",
            "raw": "\"0b10\"",
            "start": 1258,
            "end": 1264
          },
          "start": 1258,
          "end": 1264
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
              "start": 1273,
              "end": 1276
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1298,
              "end": 1300
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1282,
                  "end": 1283
                },
                "constraint": {
                  "type": "TSBigIntKeyword",
                  "start": 1292,
                  "end": 1298
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1282,
                "end": 1298
              },
              "start": 1276,
              "end": 1298
            }
          ],
          "start": 1273,
          "end": 1300
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1303,
            "end": 1304
          },
          "typeArguments": null,
          "start": 1303,
          "end": 1304
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1307,
          "end": 1312
        },
        "start": 1258,
        "end": 1312
      },
      "declare": false,
      "start": 1242,
      "end": 1313
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBigInt5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1351,
        "end": 1359
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "1.1",
            "raw": "\"1.1\"",
            "start": 1362,
            "end": 1367
          },
          "start": 1362,
          "end": 1367
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
              "start": 1376,
              "end": 1379
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1401,
              "end": 1403
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1385,
                  "end": 1386
                },
                "constraint": {
                  "type": "TSBigIntKeyword",
                  "start": 1395,
                  "end": 1401
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1385,
                "end": 1401
              },
              "start": 1379,
              "end": 1401
            }
          ],
          "start": 1376,
          "end": 1403
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1406,
            "end": 1407
          },
          "typeArguments": null,
          "start": 1406,
          "end": 1407
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1410,
          "end": 1415
        },
        "start": 1362,
        "end": 1415
      },
      "declare": false,
      "start": 1346,
      "end": 1416
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBigInt6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1431,
        "end": 1439
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "10e2",
            "raw": "\"10e2\"",
            "start": 1442,
            "end": 1448
          },
          "start": 1442,
          "end": 1448
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
              "start": 1457,
              "end": 1460
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1482,
              "end": 1484
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1466,
                  "end": 1467
                },
                "constraint": {
                  "type": "TSBigIntKeyword",
                  "start": 1476,
                  "end": 1482
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1466,
                "end": 1482
              },
              "start": 1460,
              "end": 1482
            }
          ],
          "start": 1457,
          "end": 1484
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1487,
            "end": 1488
          },
          "typeArguments": null,
          "start": 1487,
          "end": 1488
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1491,
          "end": 1496
        },
        "start": 1442,
        "end": 1496
      },
      "declare": false,
      "start": 1426,
      "end": 1497
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBigInt7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1512,
        "end": 1520
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "abcd",
            "raw": "\"abcd\"",
            "start": 1523,
            "end": 1529
          },
          "start": 1523,
          "end": 1529
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
              "start": 1538,
              "end": 1541
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1563,
              "end": 1565
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
                },
                "constraint": {
                  "type": "TSBigIntKeyword",
                  "start": 1557,
                  "end": 1563
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1547,
                "end": 1563
              },
              "start": 1541,
              "end": 1563
            }
          ],
          "start": 1538,
          "end": 1565
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1568,
            "end": 1569
          },
          "typeArguments": null,
          "start": 1568,
          "end": 1569
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1572,
          "end": 1577
        },
        "start": 1523,
        "end": 1577
      },
      "declare": false,
      "start": 1507,
      "end": 1578
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBoolean0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1616,
        "end": 1625
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 1628,
            "end": 1634
          },
          "start": 1628,
          "end": 1634
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
              "start": 1643,
              "end": 1646
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1669,
              "end": 1671
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
                  "start": 1652,
                  "end": 1653
                },
                "constraint": {
                  "type": "TSBooleanKeyword",
                  "start": 1662,
                  "end": 1669
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1652,
                "end": 1669
              },
              "start": 1646,
              "end": 1669
            }
          ],
          "start": 1643,
          "end": 1671
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1674,
            "end": 1675
          },
          "typeArguments": null,
          "start": 1674,
          "end": 1675
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1678,
          "end": 1683
        },
        "start": 1628,
        "end": 1683
      },
      "declare": false,
      "start": 1611,
      "end": 1684
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBoolean1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1698,
        "end": 1707
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 1710,
            "end": 1717
          },
          "start": 1710,
          "end": 1717
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
              "start": 1726,
              "end": 1729
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1752,
              "end": 1754
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
                  "start": 1735,
                  "end": 1736
                },
                "constraint": {
                  "type": "TSBooleanKeyword",
                  "start": 1745,
                  "end": 1752
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1735,
                "end": 1752
              },
              "start": 1729,
              "end": 1752
            }
          ],
          "start": 1726,
          "end": 1754
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1757,
            "end": 1758
          },
          "typeArguments": null,
          "start": 1757,
          "end": 1758
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1761,
          "end": 1766
        },
        "start": 1710,
        "end": 1766
      },
      "declare": false,
      "start": 1693,
      "end": 1767
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TBoolean2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1782,
        "end": 1791
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "abcd",
            "raw": "\"abcd\"",
            "start": 1794,
            "end": 1800
          },
          "start": 1794,
          "end": 1800
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
              "start": 1809,
              "end": 1812
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1835,
              "end": 1837
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
                  "start": 1818,
                  "end": 1819
                },
                "constraint": {
                  "type": "TSBooleanKeyword",
                  "start": 1828,
                  "end": 1835
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1818,
                "end": 1835
              },
              "start": 1812,
              "end": 1835
            }
          ],
          "start": 1809,
          "end": 1837
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1840,
            "end": 1841
          },
          "typeArguments": null,
          "start": 1840,
          "end": 1841
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1844,
          "end": 1849
        },
        "start": 1794,
        "end": 1849
      },
      "declare": false,
      "start": 1777,
      "end": 1850
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNull0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1885,
        "end": 1891
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "null",
            "raw": "\"null\"",
            "start": 1894,
            "end": 1900
          },
          "start": 1894,
          "end": 1900
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
              "start": 1909,
              "end": 1912
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1932,
              "end": 1934
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
                  "start": 1918,
                  "end": 1919
                },
                "constraint": {
                  "type": "TSNullKeyword",
                  "start": 1928,
                  "end": 1932
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1918,
                "end": 1932
              },
              "start": 1912,
              "end": 1932
            }
          ],
          "start": 1909,
          "end": 1934
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1937,
            "end": 1938
          },
          "typeArguments": null,
          "start": 1937,
          "end": 1938
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1941,
          "end": 1946
        },
        "start": 1894,
        "end": 1946
      },
      "declare": false,
      "start": 1880,
      "end": 1947
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNull1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1961,
        "end": 1967
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "abcd",
            "raw": "\"abcd\"",
            "start": 1970,
            "end": 1976
          },
          "start": 1970,
          "end": 1976
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
              "start": 1985,
              "end": 1988
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2008,
              "end": 2010
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
                  "start": 1994,
                  "end": 1995
                },
                "constraint": {
                  "type": "TSNullKeyword",
                  "start": 2004,
                  "end": 2008
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1994,
                "end": 2008
              },
              "start": 1988,
              "end": 2008
            }
          ],
          "start": 1985,
          "end": 2010
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2013,
            "end": 2014
          },
          "typeArguments": null,
          "start": 2013,
          "end": 2014
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2017,
          "end": 2022
        },
        "start": 1970,
        "end": 2022
      },
      "declare": false,
      "start": 1956,
      "end": 2023
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TUndefined0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2063,
        "end": 2074
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "undefined",
            "raw": "\"undefined\"",
            "start": 2077,
            "end": 2088
          },
          "start": 2077,
          "end": 2088
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
              "start": 2097,
              "end": 2100
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2125,
              "end": 2127
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
                  "start": 2106,
                  "end": 2107
                },
                "constraint": {
                  "type": "TSUndefinedKeyword",
                  "start": 2116,
                  "end": 2125
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2106,
                "end": 2125
              },
              "start": 2100,
              "end": 2125
            }
          ],
          "start": 2097,
          "end": 2127
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2130,
            "end": 2131
          },
          "typeArguments": null,
          "start": 2130,
          "end": 2131
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2134,
          "end": 2139
        },
        "start": 2077,
        "end": 2139
      },
      "declare": false,
      "start": 2058,
      "end": 2140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TUndefined1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2159,
        "end": 2170
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "abcd",
            "raw": "\"abcd\"",
            "start": 2173,
            "end": 2179
          },
          "start": 2173,
          "end": 2179
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
              "start": 2188,
              "end": 2191
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2216,
              "end": 2218
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
                  "start": 2197,
                  "end": 2198
                },
                "constraint": {
                  "type": "TSUndefinedKeyword",
                  "start": 2207,
                  "end": 2216
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2197,
                "end": 2216
              },
              "start": 2191,
              "end": 2216
            }
          ],
          "start": 2188,
          "end": 2218
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2221,
            "end": 2222
          },
          "typeArguments": null,
          "start": 2221,
          "end": 2222
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2225,
          "end": 2230
        },
        "start": 2173,
        "end": 2230
      },
      "declare": false,
      "start": 2154,
      "end": 2231
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringLiteralEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2281,
        "end": 2298
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Zero",
              "optional": false,
              "typeAnnotation": null,
              "start": 2301,
              "end": 2305
            },
            "initializer": {
              "type": "Literal",
              "value": "0",
              "raw": "\"0\"",
              "start": 2308,
              "end": 2311
            },
            "computed": false,
            "start": 2301,
            "end": 2311
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "True",
              "optional": false,
              "typeAnnotation": null,
              "start": 2313,
              "end": 2317
            },
            "initializer": {
              "type": "Literal",
              "value": "true",
              "raw": "\"true\"",
              "start": 2320,
              "end": 2326
            },
            "computed": false,
            "start": 2313,
            "end": 2326
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "False",
              "optional": false,
              "typeAnnotation": null,
              "start": 2328,
              "end": 2333
            },
            "initializer": {
              "type": "Literal",
              "value": "false",
              "raw": "\"false\"",
              "start": 2336,
              "end": 2343
            },
            "computed": false,
            "start": 2328,
            "end": 2343
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2354
            },
            "initializer": {
              "type": "Literal",
              "value": "undefined",
              "raw": "\"undefined\"",
              "start": 2357,
              "end": 2368
            },
            "computed": false,
            "start": 2345,
            "end": 2368
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Null",
              "optional": false,
              "typeAnnotation": null,
              "start": 2370,
              "end": 2374
            },
            "initializer": {
              "type": "Literal",
              "value": "null",
              "raw": "\"null\"",
              "start": 2377,
              "end": 2383
            },
            "computed": false,
            "start": 2370,
            "end": 2383
          }
        ],
        "start": 2299,
        "end": 2385
      },
      "const": true,
      "declare": false,
      "start": 2270,
      "end": 2385
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TStringLiteralEnum0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2391,
        "end": 2410
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 2413,
            "end": 2416
          },
          "start": 2413,
          "end": 2416
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
              "start": 2425,
              "end": 2428
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2461,
              "end": 2463
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
                  "start": 2434,
                  "end": 2435
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringLiteralEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2444,
                    "end": 2461
                  },
                  "typeArguments": null,
                  "start": 2444,
                  "end": 2461
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2434,
                "end": 2461
              },
              "start": 2428,
              "end": 2461
            }
          ],
          "start": 2425,
          "end": 2463
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2466,
            "end": 2467
          },
          "typeArguments": null,
          "start": 2466,
          "end": 2467
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2470,
          "end": 2475
        },
        "start": 2413,
        "end": 2475
      },
      "declare": false,
      "start": 2386,
      "end": 2476
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberLiteralEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2515,
        "end": 2532
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Zero",
              "optional": false,
              "typeAnnotation": null,
              "start": 2535,
              "end": 2539
            },
            "initializer": null,
            "computed": false,
            "start": 2535,
            "end": 2539
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 2541,
              "end": 2544
            },
            "initializer": null,
            "computed": false,
            "start": 2541,
            "end": 2544
          }
        ],
        "start": 2533,
        "end": 2546
      },
      "const": true,
      "declare": false,
      "start": 2504,
      "end": 2546
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNumberLiteralEnum0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2552,
        "end": 2571
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 2574,
            "end": 2577
          },
          "start": 2574,
          "end": 2577
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
              "start": 2586,
              "end": 2589
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2622,
              "end": 2624
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
                  "start": 2595,
                  "end": 2596
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberLiteralEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2605,
                    "end": 2622
                  },
                  "typeArguments": null,
                  "start": 2605,
                  "end": 2622
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2595,
                "end": 2622
              },
              "start": 2589,
              "end": 2622
            }
          ],
          "start": 2586,
          "end": 2624
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2627,
            "end": 2628
          },
          "typeArguments": null,
          "start": 2627,
          "end": 2628
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2631,
          "end": 2636
        },
        "start": 2574,
        "end": 2636
      },
      "declare": false,
      "start": 2547,
      "end": 2637
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonLiteralEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2708,
        "end": 2722
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Zero",
              "optional": false,
              "typeAnnotation": null,
              "start": 2725,
              "end": 2729
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberLiteralEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 2732,
                "end": 2749
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 2750,
                "end": 2754
              },
              "optional": false,
              "computed": false,
              "start": 2732,
              "end": 2754
            },
            "computed": false,
            "start": 2725,
            "end": 2754
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 2756,
              "end": 2759
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberLiteralEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 2762,
                "end": 2779
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null,
                "start": 2780,
                "end": 2783
              },
              "optional": false,
              "computed": false,
              "start": 2762,
              "end": 2783
            },
            "computed": false,
            "start": 2756,
            "end": 2783
          }
        ],
        "start": 2723,
        "end": 2785
      },
      "const": true,
      "declare": false,
      "start": 2697,
      "end": 2785
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNonLiteralEnum0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2791,
        "end": 2807
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 2810,
            "end": 2813
          },
          "start": 2810,
          "end": 2813
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
              "start": 2822,
              "end": 2825
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2855,
              "end": 2857
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
                  "start": 2831,
                  "end": 2832
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NonLiteralEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2841,
                    "end": 2855
                  },
                  "typeArguments": null,
                  "start": 2841,
                  "end": 2855
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2831,
                "end": 2855
              },
              "start": 2825,
              "end": 2855
            }
          ],
          "start": 2822,
          "end": 2857
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2860,
            "end": 2861
          },
          "typeArguments": null,
          "start": 2860,
          "end": 2861
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2864,
          "end": 2869
        },
        "start": 2810,
        "end": 2869
      },
      "declare": false,
      "start": 2786,
      "end": 2870
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString00",
        "optional": false,
        "typeAnnotation": null,
        "start": 3186,
        "end": 3195
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 3198,
            "end": 3201
          },
          "start": 3198,
          "end": 3201
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
              "start": 3210,
              "end": 3213
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3255,
              "end": 3257
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
                  "start": 3219,
                  "end": 3220
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3229,
                      "end": 3235
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3238,
                        "end": 3255
                      },
                      "typeArguments": null,
                      "start": 3238,
                      "end": 3255
                    }
                  ],
                  "start": 3229,
                  "end": 3255
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3219,
                "end": 3255
              },
              "start": 3213,
              "end": 3255
            }
          ],
          "start": 3210,
          "end": 3257
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3260,
            "end": 3261
          },
          "typeArguments": null,
          "start": 3260,
          "end": 3261
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3264,
          "end": 3269
        },
        "start": 3198,
        "end": 3269
      },
      "declare": false,
      "start": 3181,
      "end": 3270
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString01",
        "optional": false,
        "typeAnnotation": null,
        "start": 3303,
        "end": 3312
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 3315,
            "end": 3318
          },
          "start": 3315,
          "end": 3318
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
              "start": 3327,
              "end": 3330
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3361,
              "end": 3363
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
                  "start": 3336,
                  "end": 3337
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3346,
                      "end": 3352
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 3355,
                      "end": 3361
                    }
                  ],
                  "start": 3346,
                  "end": 3361
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3336,
                "end": 3361
              },
              "start": 3330,
              "end": 3361
            }
          ],
          "start": 3327,
          "end": 3363
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3366,
            "end": 3367
          },
          "typeArguments": null,
          "start": 3366,
          "end": 3367
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3370,
          "end": 3375
        },
        "start": 3315,
        "end": 3375
      },
      "declare": false,
      "start": 3298,
      "end": 3376
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString02",
        "optional": false,
        "typeAnnotation": null,
        "start": 3407,
        "end": 3416
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 3419,
            "end": 3422
          },
          "start": 3419,
          "end": 3422
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
              "start": 3431,
              "end": 3434
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3473,
              "end": 3475
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
                  "start": 3440,
                  "end": 3441
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3450,
                      "end": 3456
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3459,
                        "end": 3473
                      },
                      "typeArguments": null,
                      "start": 3459,
                      "end": 3473
                    }
                  ],
                  "start": 3450,
                  "end": 3473
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3440,
                "end": 3473
              },
              "start": 3434,
              "end": 3473
            }
          ],
          "start": 3431,
          "end": 3475
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3478,
            "end": 3479
          },
          "typeArguments": null,
          "start": 3478,
          "end": 3479
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3482,
          "end": 3487
        },
        "start": 3419,
        "end": 3487
      },
      "declare": false,
      "start": 3402,
      "end": 3488
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString03",
        "optional": false,
        "typeAnnotation": null,
        "start": 3553,
        "end": 3562
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 3565,
            "end": 3568
          },
          "start": 3565,
          "end": 3568
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
              "start": 3577,
              "end": 3580
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3606,
              "end": 3608
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
                  "start": 3586,
                  "end": 3587
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3596,
                      "end": 3602
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 3605,
                        "end": 3606
                      },
                      "start": 3605,
                      "end": 3606
                    }
                  ],
                  "start": 3596,
                  "end": 3606
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3586,
                "end": 3606
              },
              "start": 3580,
              "end": 3606
            }
          ],
          "start": 3577,
          "end": 3608
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3611,
            "end": 3612
          },
          "typeArguments": null,
          "start": 3611,
          "end": 3612
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3615,
          "end": 3620
        },
        "start": 3565,
        "end": 3620
      },
      "declare": false,
      "start": 3548,
      "end": 3621
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString04",
        "optional": false,
        "typeAnnotation": null,
        "start": 3634,
        "end": 3643
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 3646,
            "end": 3649
          },
          "start": 3646,
          "end": 3649
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
              "start": 3658,
              "end": 3661
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3703,
              "end": 3705
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
                  "start": 3667,
                  "end": 3668
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3677,
                      "end": 3683
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3686,
                        "end": 3703
                      },
                      "typeArguments": null,
                      "start": 3686,
                      "end": 3703
                    }
                  ],
                  "start": 3677,
                  "end": 3703
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3667,
                "end": 3703
              },
              "start": 3661,
              "end": 3703
            }
          ],
          "start": 3658,
          "end": 3705
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3708,
            "end": 3709
          },
          "typeArguments": null,
          "start": 3708,
          "end": 3709
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3712,
          "end": 3717
        },
        "start": 3646,
        "end": 3717
      },
      "declare": false,
      "start": 3629,
      "end": 3718
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString05",
        "optional": false,
        "typeAnnotation": null,
        "start": 3751,
        "end": 3760
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 3763,
            "end": 3766
          },
          "start": 3763,
          "end": 3766
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
              "start": 3775,
              "end": 3778
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3809,
              "end": 3811
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
                  "start": 3784,
                  "end": 3785
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3794,
                      "end": 3800
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 3803,
                      "end": 3809
                    }
                  ],
                  "start": 3794,
                  "end": 3809
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3784,
                "end": 3809
              },
              "start": 3778,
              "end": 3809
            }
          ],
          "start": 3775,
          "end": 3811
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3814,
            "end": 3815
          },
          "typeArguments": null,
          "start": 3814,
          "end": 3815
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3818,
          "end": 3823
        },
        "start": 3763,
        "end": 3823
      },
      "declare": false,
      "start": 3746,
      "end": 3824
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString06",
        "optional": false,
        "typeAnnotation": null,
        "start": 3865,
        "end": 3874
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 3877,
            "end": 3880
          },
          "start": 3877,
          "end": 3880
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
              "start": 3889,
              "end": 3892
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3919,
              "end": 3921
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
                  "start": 3898,
                  "end": 3899
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3908,
                      "end": 3914
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "0n",
                        "bigint": "0",
                        "start": 3917,
                        "end": 3919
                      },
                      "start": 3917,
                      "end": 3919
                    }
                  ],
                  "start": 3908,
                  "end": 3919
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3898,
                "end": 3919
              },
              "start": 3892,
              "end": 3919
            }
          ],
          "start": 3889,
          "end": 3921
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3924,
            "end": 3925
          },
          "typeArguments": null,
          "start": 3924,
          "end": 3925
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3928,
          "end": 3933
        },
        "start": 3877,
        "end": 3933
      },
      "declare": false,
      "start": 3860,
      "end": 3934
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString07",
        "optional": false,
        "typeAnnotation": null,
        "start": 3968,
        "end": 3977
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 3980,
            "end": 3986
          },
          "start": 3980,
          "end": 3986
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
              "start": 3995,
              "end": 3998
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4030,
              "end": 4032
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
                  "start": 4004,
                  "end": 4005
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4014,
                      "end": 4020
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 4023,
                      "end": 4030
                    }
                  ],
                  "start": 4014,
                  "end": 4030
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4004,
                "end": 4030
              },
              "start": 3998,
              "end": 4030
            }
          ],
          "start": 3995,
          "end": 4032
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4035,
            "end": 4036
          },
          "typeArguments": null,
          "start": 4035,
          "end": 4036
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4039,
          "end": 4044
        },
        "start": 3980,
        "end": 4044
      },
      "declare": false,
      "start": 3963,
      "end": 4045
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString08",
        "optional": false,
        "typeAnnotation": null,
        "start": 4061,
        "end": 4070
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 4073,
            "end": 4080
          },
          "start": 4073,
          "end": 4080
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
              "start": 4089,
              "end": 4092
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4124,
              "end": 4126
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
                  "start": 4098,
                  "end": 4099
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4108,
                      "end": 4114
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 4117,
                      "end": 4124
                    }
                  ],
                  "start": 4108,
                  "end": 4124
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4098,
                "end": 4124
              },
              "start": 4092,
              "end": 4124
            }
          ],
          "start": 4089,
          "end": 4126
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4129,
            "end": 4130
          },
          "typeArguments": null,
          "start": 4129,
          "end": 4130
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4133,
          "end": 4138
        },
        "start": 4073,
        "end": 4138
      },
      "declare": false,
      "start": 4056,
      "end": 4139
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString09",
        "optional": false,
        "typeAnnotation": null,
        "start": 4206,
        "end": 4215
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 4218,
            "end": 4224
          },
          "start": 4218,
          "end": 4224
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
              "start": 4233,
              "end": 4236
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4265,
              "end": 4267
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
                  "start": 4242,
                  "end": 4243
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4252,
                      "end": 4258
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 4261,
                        "end": 4265
                      },
                      "start": 4261,
                      "end": 4265
                    }
                  ],
                  "start": 4252,
                  "end": 4265
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4242,
                "end": 4265
              },
              "start": 4236,
              "end": 4265
            }
          ],
          "start": 4233,
          "end": 4267
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4270,
            "end": 4271
          },
          "typeArguments": null,
          "start": 4270,
          "end": 4271
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4274,
          "end": 4279
        },
        "start": 4218,
        "end": 4279
      },
      "declare": false,
      "start": 4201,
      "end": 4280
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString10",
        "optional": false,
        "typeAnnotation": null,
        "start": 4296,
        "end": 4305
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 4308,
            "end": 4315
          },
          "start": 4308,
          "end": 4315
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
              "start": 4324,
              "end": 4327
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4357,
              "end": 4359
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
                  "start": 4333,
                  "end": 4334
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4343,
                      "end": 4349
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 4352,
                        "end": 4357
                      },
                      "start": 4352,
                      "end": 4357
                    }
                  ],
                  "start": 4343,
                  "end": 4357
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4333,
                "end": 4357
              },
              "start": 4327,
              "end": 4357
            }
          ],
          "start": 4324,
          "end": 4359
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4362,
            "end": 4363
          },
          "typeArguments": null,
          "start": 4362,
          "end": 4363
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4366,
          "end": 4371
        },
        "start": 4308,
        "end": 4371
      },
      "declare": false,
      "start": 4291,
      "end": 4372
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString11",
        "optional": false,
        "typeAnnotation": null,
        "start": 4389,
        "end": 4398
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "undefined",
            "raw": "\"undefined\"",
            "start": 4401,
            "end": 4412
          },
          "start": 4401,
          "end": 4412
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
              "start": 4421,
              "end": 4424
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4458,
              "end": 4460
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
                  "start": 4430,
                  "end": 4431
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4440,
                      "end": 4446
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 4449,
                      "end": 4458
                    }
                  ],
                  "start": 4440,
                  "end": 4458
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4430,
                "end": 4458
              },
              "start": 4424,
              "end": 4458
            }
          ],
          "start": 4421,
          "end": 4460
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4463,
            "end": 4464
          },
          "typeArguments": null,
          "start": 4463,
          "end": 4464
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4467,
          "end": 4472
        },
        "start": 4401,
        "end": 4472
      },
      "declare": false,
      "start": 4384,
      "end": 4473
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PString12",
        "optional": false,
        "typeAnnotation": null,
        "start": 4494,
        "end": 4503
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "null",
            "raw": "\"null\"",
            "start": 4506,
            "end": 4512
          },
          "start": 4506,
          "end": 4512
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
              "start": 4521,
              "end": 4524
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4553,
              "end": 4555
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
                  "start": 4530,
                  "end": 4531
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4540,
                      "end": 4546
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 4549,
                      "end": 4553
                    }
                  ],
                  "start": 4540,
                  "end": 4553
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4530,
                "end": 4553
              },
              "start": 4524,
              "end": 4553
            }
          ],
          "start": 4521,
          "end": 4555
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4558,
            "end": 4559
          },
          "typeArguments": null,
          "start": 4558,
          "end": 4559
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4562,
          "end": 4567
        },
        "start": 4506,
        "end": 4567
      },
      "declare": false,
      "start": 4489,
      "end": 4568
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate00",
        "optional": false,
        "typeAnnotation": null,
        "start": 4663,
        "end": 4674
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 4677,
            "end": 4681
          },
          "start": 4677,
          "end": 4681
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
              "start": 4690,
              "end": 4693
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4730,
              "end": 4732
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
                  "start": 4699,
                  "end": 4700
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": false,
                          "start": 4709,
                          "end": 4713
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 4719,
                          "end": 4721
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4713,
                          "end": 4719
                        }
                      ],
                      "start": 4709,
                      "end": 4721
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 4724,
                      "end": 4730
                    }
                  ],
                  "start": 4709,
                  "end": 4730
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4699,
                "end": 4730
              },
              "start": 4693,
              "end": 4730
            }
          ],
          "start": 4690,
          "end": 4732
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4735,
            "end": 4736
          },
          "typeArguments": null,
          "start": 4735,
          "end": 4736
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4739,
          "end": 4744
        },
        "start": 4677,
        "end": 4744
      },
      "declare": false,
      "start": 4658,
      "end": 4745
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate01",
        "optional": false,
        "typeAnnotation": null,
        "start": 4787,
        "end": 4798
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 4801,
            "end": 4805
          },
          "start": 4801,
          "end": 4805
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
              "start": 4814,
              "end": 4817
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4862,
              "end": 4864
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
                  "start": 4823,
                  "end": 4824
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": false,
                          "start": 4833,
                          "end": 4837
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 4843,
                          "end": 4845
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4837,
                          "end": 4843
                        }
                      ],
                      "start": 4833,
                      "end": 4845
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4848,
                        "end": 4862
                      },
                      "typeArguments": null,
                      "start": 4848,
                      "end": 4862
                    }
                  ],
                  "start": 4833,
                  "end": 4862
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4823,
                "end": 4862
              },
              "start": 4817,
              "end": 4862
            }
          ],
          "start": 4814,
          "end": 4864
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4867,
            "end": 4868
          },
          "typeArguments": null,
          "start": 4867,
          "end": 4868
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4871,
          "end": 4876
        },
        "start": 4801,
        "end": 4876
      },
      "declare": false,
      "start": 4782,
      "end": 4877
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate02",
        "optional": false,
        "typeAnnotation": null,
        "start": 4953,
        "end": 4964
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 4967,
            "end": 4971
          },
          "start": 4967,
          "end": 4971
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
              "start": 4980,
              "end": 4983
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5016,
              "end": 5018
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
                  "start": 4989,
                  "end": 4990
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": false,
                          "start": 4999,
                          "end": 5003
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5009,
                          "end": 5011
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5003,
                          "end": 5009
                        }
                      ],
                      "start": 4999,
                      "end": 5011
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 5014,
                        "end": 5016
                      },
                      "start": 5014,
                      "end": 5016
                    }
                  ],
                  "start": 4999,
                  "end": 5016
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4989,
                "end": 5016
              },
              "start": 4983,
              "end": 5016
            }
          ],
          "start": 4980,
          "end": 5018
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5021,
            "end": 5022
          },
          "typeArguments": null,
          "start": 5021,
          "end": 5022
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5025,
          "end": 5030
        },
        "start": 4967,
        "end": 5030
      },
      "declare": false,
      "start": 4948,
      "end": 5031
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate03",
        "optional": false,
        "typeAnnotation": null,
        "start": 5045,
        "end": 5056
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 5059,
            "end": 5063
          },
          "start": 5059,
          "end": 5063
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
              "start": 5072,
              "end": 5075
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5123,
              "end": 5125
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
                  "start": 5081,
                  "end": 5082
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": false,
                          "start": 5091,
                          "end": 5095
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5101,
                          "end": 5103
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5095,
                          "end": 5101
                        }
                      ],
                      "start": 5091,
                      "end": 5103
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5106,
                        "end": 5123
                      },
                      "typeArguments": null,
                      "start": 5106,
                      "end": 5123
                    }
                  ],
                  "start": 5091,
                  "end": 5123
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5081,
                "end": 5123
              },
              "start": 5075,
              "end": 5123
            }
          ],
          "start": 5072,
          "end": 5125
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5128,
            "end": 5129
          },
          "typeArguments": null,
          "start": 5128,
          "end": 5129
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5132,
          "end": 5137
        },
        "start": 5059,
        "end": 5137
      },
      "declare": false,
      "start": 5040,
      "end": 5138
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate04",
        "optional": false,
        "typeAnnotation": null,
        "start": 5182,
        "end": 5193
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 5196,
            "end": 5200
          },
          "start": 5196,
          "end": 5200
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
              "start": 5209,
              "end": 5212
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5249,
              "end": 5251
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
                  "start": 5218,
                  "end": 5219
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": false,
                          "start": 5228,
                          "end": 5232
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5238,
                          "end": 5240
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5232,
                          "end": 5238
                        }
                      ],
                      "start": 5228,
                      "end": 5240
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 5243,
                      "end": 5249
                    }
                  ],
                  "start": 5228,
                  "end": 5249
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5218,
                "end": 5249
              },
              "start": 5212,
              "end": 5249
            }
          ],
          "start": 5209,
          "end": 5251
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5254,
            "end": 5255
          },
          "typeArguments": null,
          "start": 5254,
          "end": 5255
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5258,
          "end": 5263
        },
        "start": 5196,
        "end": 5263
      },
      "declare": false,
      "start": 5177,
      "end": 5264
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate05",
        "optional": false,
        "typeAnnotation": null,
        "start": 5316,
        "end": 5327
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 5330,
            "end": 5334
          },
          "start": 5330,
          "end": 5334
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
              "start": 5343,
              "end": 5346
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5380,
              "end": 5382
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
                  "start": 5352,
                  "end": 5353
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": false,
                          "start": 5362,
                          "end": 5366
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5372,
                          "end": 5374
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5366,
                          "end": 5372
                        }
                      ],
                      "start": 5362,
                      "end": 5374
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "10n",
                        "bigint": "10",
                        "start": 5377,
                        "end": 5380
                      },
                      "start": 5377,
                      "end": 5380
                    }
                  ],
                  "start": 5362,
                  "end": 5380
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5352,
                "end": 5380
              },
              "start": 5346,
              "end": 5380
            }
          ],
          "start": 5343,
          "end": 5382
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5385,
            "end": 5386
          },
          "typeArguments": null,
          "start": 5385,
          "end": 5386
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5389,
          "end": 5394
        },
        "start": 5330,
        "end": 5394
      },
      "declare": false,
      "start": 5311,
      "end": 5395
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate06",
        "optional": false,
        "typeAnnotation": null,
        "start": 5440,
        "end": 5451
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 5454,
            "end": 5460
          },
          "start": 5454,
          "end": 5460
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
              "start": 5469,
              "end": 5472
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5510,
              "end": 5512
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
                  "start": 5478,
                  "end": 5479
                },
                "constraint": {
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
                          "start": 5488,
                          "end": 5491
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "e",
                            "cooked": "e"
                          },
                          "tail": true,
                          "start": 5497,
                          "end": 5500
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5491,
                          "end": 5497
                        }
                      ],
                      "start": 5488,
                      "end": 5500
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 5503,
                      "end": 5510
                    }
                  ],
                  "start": 5488,
                  "end": 5510
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5478,
                "end": 5510
              },
              "start": 5472,
              "end": 5510
            }
          ],
          "start": 5469,
          "end": 5512
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5515,
            "end": 5516
          },
          "typeArguments": null,
          "start": 5515,
          "end": 5516
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5519,
          "end": 5524
        },
        "start": 5454,
        "end": 5524
      },
      "declare": false,
      "start": 5435,
      "end": 5525
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate07",
        "optional": false,
        "typeAnnotation": null,
        "start": 5541,
        "end": 5552
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 5555,
            "end": 5562
          },
          "start": 5555,
          "end": 5562
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
              "start": 5571,
              "end": 5574
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5612,
              "end": 5614
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
                  "start": 5580,
                  "end": 5581
                },
                "constraint": {
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
                          "start": 5590,
                          "end": 5593
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "e",
                            "cooked": "e"
                          },
                          "tail": true,
                          "start": 5599,
                          "end": 5602
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5593,
                          "end": 5599
                        }
                      ],
                      "start": 5590,
                      "end": 5602
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 5605,
                      "end": 5612
                    }
                  ],
                  "start": 5590,
                  "end": 5612
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5580,
                "end": 5612
              },
              "start": 5574,
              "end": 5612
            }
          ],
          "start": 5571,
          "end": 5614
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5617,
            "end": 5618
          },
          "typeArguments": null,
          "start": 5617,
          "end": 5618
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5621,
          "end": 5626
        },
        "start": 5555,
        "end": 5626
      },
      "declare": false,
      "start": 5536,
      "end": 5627
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate08",
        "optional": false,
        "typeAnnotation": null,
        "start": 5704,
        "end": 5715
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 5718,
            "end": 5724
          },
          "start": 5718,
          "end": 5724
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
              "start": 5733,
              "end": 5736
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5776,
              "end": 5778
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
                  "start": 5742,
                  "end": 5743
                },
                "constraint": {
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
                          "start": 5752,
                          "end": 5755
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 5758,
                          "end": 5761
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5767,
                          "end": 5769
                        }
                      ],
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "t",
                            "raw": "\"t\"",
                            "start": 5755,
                            "end": 5758
                          },
                          "start": 5755,
                          "end": 5758
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 5761,
                          "end": 5767
                        }
                      ],
                      "start": 5752,
                      "end": 5769
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 5772,
                        "end": 5776
                      },
                      "start": 5772,
                      "end": 5776
                    }
                  ],
                  "start": 5752,
                  "end": 5776
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5742,
                "end": 5776
              },
              "start": 5736,
              "end": 5776
            }
          ],
          "start": 5733,
          "end": 5778
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5781,
            "end": 5782
          },
          "typeArguments": null,
          "start": 5781,
          "end": 5782
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5785,
          "end": 5790
        },
        "start": 5718,
        "end": 5790
      },
      "declare": false,
      "start": 5699,
      "end": 5791
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate09",
        "optional": false,
        "typeAnnotation": null,
        "start": 5807,
        "end": 5818
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 5821,
            "end": 5828
          },
          "start": 5821,
          "end": 5828
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
              "start": 5837,
              "end": 5840
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5881,
              "end": 5883
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
                  "start": 5846,
                  "end": 5847
                },
                "constraint": {
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
                          "start": 5856,
                          "end": 5859
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 5862,
                          "end": 5865
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5871,
                          "end": 5873
                        }
                      ],
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "f",
                            "raw": "\"f\"",
                            "start": 5859,
                            "end": 5862
                          },
                          "start": 5859,
                          "end": 5862
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 5865,
                          "end": 5871
                        }
                      ],
                      "start": 5856,
                      "end": 5873
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 5876,
                        "end": 5881
                      },
                      "start": 5876,
                      "end": 5881
                    }
                  ],
                  "start": 5856,
                  "end": 5881
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5846,
                "end": 5881
              },
              "start": 5840,
              "end": 5881
            }
          ],
          "start": 5837,
          "end": 5883
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5886,
            "end": 5887
          },
          "typeArguments": null,
          "start": 5886,
          "end": 5887
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5890,
          "end": 5895
        },
        "start": 5821,
        "end": 5895
      },
      "declare": false,
      "start": 5802,
      "end": 5896
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate10",
        "optional": false,
        "typeAnnotation": null,
        "start": 5913,
        "end": 5924
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "undefined",
            "raw": "\"undefined\"",
            "start": 5927,
            "end": 5938
          },
          "start": 5927,
          "end": 5938
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
              "start": 5947,
              "end": 5950
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5995,
              "end": 5997
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
                  "start": 5956,
                  "end": 5957
                },
                "constraint": {
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
                          "start": 5966,
                          "end": 5969
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 5972,
                          "end": 5975
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5981,
                          "end": 5983
                        }
                      ],
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "u",
                            "raw": "\"u\"",
                            "start": 5969,
                            "end": 5972
                          },
                          "start": 5969,
                          "end": 5972
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 5975,
                          "end": 5981
                        }
                      ],
                      "start": 5966,
                      "end": 5983
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 5986,
                      "end": 5995
                    }
                  ],
                  "start": 5966,
                  "end": 5995
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5956,
                "end": 5995
              },
              "start": 5950,
              "end": 5995
            }
          ],
          "start": 5947,
          "end": 5997
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6000,
            "end": 6001
          },
          "typeArguments": null,
          "start": 6000,
          "end": 6001
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6004,
          "end": 6009
        },
        "start": 5927,
        "end": 6009
      },
      "declare": false,
      "start": 5908,
      "end": 6010
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PTemplate11",
        "optional": false,
        "typeAnnotation": null,
        "start": 6031,
        "end": 6042
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "null",
            "raw": "\"null\"",
            "start": 6045,
            "end": 6051
          },
          "start": 6045,
          "end": 6051
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
              "start": 6060,
              "end": 6063
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 6103,
              "end": 6105
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
                  "start": 6069,
                  "end": 6070
                },
                "constraint": {
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
                          "start": 6079,
                          "end": 6082
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 6085,
                          "end": 6088
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 6094,
                          "end": 6096
                        }
                      ],
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "n",
                            "raw": "\"n\"",
                            "start": 6082,
                            "end": 6085
                          },
                          "start": 6082,
                          "end": 6085
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 6088,
                          "end": 6094
                        }
                      ],
                      "start": 6079,
                      "end": 6096
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 6099,
                      "end": 6103
                    }
                  ],
                  "start": 6079,
                  "end": 6103
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6069,
                "end": 6103
              },
              "start": 6063,
              "end": 6103
            }
          ],
          "start": 6060,
          "end": 6105
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6108,
            "end": 6109
          },
          "typeArguments": null,
          "start": 6108,
          "end": 6109
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6112,
          "end": 6117
        },
        "start": 6045,
        "end": 6117
      },
      "declare": false,
      "start": 6026,
      "end": 6118
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral00",
        "optional": false,
        "typeAnnotation": null,
        "start": 6219,
        "end": 6235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 6238,
            "end": 6241
          },
          "start": 6238,
          "end": 6241
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
              "start": 6250,
              "end": 6253
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 6281,
              "end": 6283
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
                  "start": 6259,
                  "end": 6260
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 6269,
                        "end": 6272
                      },
                      "start": 6269,
                      "end": 6272
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 6275,
                      "end": 6281
                    }
                  ],
                  "start": 6269,
                  "end": 6281
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6259,
                "end": 6281
              },
              "start": 6253,
              "end": 6281
            }
          ],
          "start": 6250,
          "end": 6283
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6286,
            "end": 6287
          },
          "typeArguments": null,
          "start": 6286,
          "end": 6287
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6290,
          "end": 6295
        },
        "start": 6238,
        "end": 6295
      },
      "declare": false,
      "start": 6214,
      "end": 6296
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral01",
        "optional": false,
        "typeAnnotation": null,
        "start": 6335,
        "end": 6351
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 6354,
            "end": 6357
          },
          "start": 6354,
          "end": 6357
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
              "start": 6366,
              "end": 6369
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 6405,
              "end": 6407
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
                  "start": 6375,
                  "end": 6376
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 6385,
                        "end": 6388
                      },
                      "start": 6385,
                      "end": 6388
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6391,
                        "end": 6405
                      },
                      "typeArguments": null,
                      "start": 6391,
                      "end": 6405
                    }
                  ],
                  "start": 6385,
                  "end": 6405
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6375,
                "end": 6405
              },
              "start": 6369,
              "end": 6405
            }
          ],
          "start": 6366,
          "end": 6407
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6410,
            "end": 6411
          },
          "typeArguments": null,
          "start": 6410,
          "end": 6411
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6414,
          "end": 6419
        },
        "start": 6354,
        "end": 6419
      },
      "declare": false,
      "start": 6330,
      "end": 6420
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral02",
        "optional": false,
        "typeAnnotation": null,
        "start": 6493,
        "end": 6509
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 6512,
            "end": 6515
          },
          "start": 6512,
          "end": 6515
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
              "start": 6524,
              "end": 6527
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 6550,
              "end": 6552
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
                  "start": 6533,
                  "end": 6534
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 6543,
                        "end": 6546
                      },
                      "start": 6543,
                      "end": 6546
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 6549,
                        "end": 6550
                      },
                      "start": 6549,
                      "end": 6550
                    }
                  ],
                  "start": 6543,
                  "end": 6550
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6533,
                "end": 6550
              },
              "start": 6527,
              "end": 6550
            }
          ],
          "start": 6524,
          "end": 6552
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6555,
            "end": 6556
          },
          "typeArguments": null,
          "start": 6555,
          "end": 6556
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6559,
          "end": 6564
        },
        "start": 6512,
        "end": 6564
      },
      "declare": false,
      "start": 6488,
      "end": 6565
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral03",
        "optional": false,
        "typeAnnotation": null,
        "start": 6578,
        "end": 6594
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 6597,
            "end": 6600
          },
          "start": 6597,
          "end": 6600
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
              "start": 6609,
              "end": 6612
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 6651,
              "end": 6653
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
                  "start": 6618,
                  "end": 6619
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 6628,
                        "end": 6631
                      },
                      "start": 6628,
                      "end": 6631
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6634,
                        "end": 6651
                      },
                      "typeArguments": null,
                      "start": 6634,
                      "end": 6651
                    }
                  ],
                  "start": 6628,
                  "end": 6651
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6618,
                "end": 6651
              },
              "start": 6612,
              "end": 6651
            }
          ],
          "start": 6609,
          "end": 6653
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6656,
            "end": 6657
          },
          "typeArguments": null,
          "start": 6656,
          "end": 6657
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6660,
          "end": 6665
        },
        "start": 6597,
        "end": 6665
      },
      "declare": false,
      "start": 6573,
      "end": 6666
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral04",
        "optional": false,
        "typeAnnotation": null,
        "start": 6707,
        "end": 6723
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 6726,
            "end": 6729
          },
          "start": 6726,
          "end": 6729
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
              "start": 6738,
              "end": 6741
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 6769,
              "end": 6771
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
                  "start": 6747,
                  "end": 6748
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 6757,
                        "end": 6760
                      },
                      "start": 6757,
                      "end": 6760
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 6763,
                      "end": 6769
                    }
                  ],
                  "start": 6757,
                  "end": 6769
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6747,
                "end": 6769
              },
              "start": 6741,
              "end": 6769
            }
          ],
          "start": 6738,
          "end": 6771
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6774,
            "end": 6775
          },
          "typeArguments": null,
          "start": 6774,
          "end": 6775
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6778,
          "end": 6783
        },
        "start": 6726,
        "end": 6783
      },
      "declare": false,
      "start": 6702,
      "end": 6784
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral05",
        "optional": false,
        "typeAnnotation": null,
        "start": 6833,
        "end": 6849
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 6852,
            "end": 6855
          },
          "start": 6852,
          "end": 6855
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
              "start": 6864,
              "end": 6867
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 6891,
              "end": 6893
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
                  "start": 6873,
                  "end": 6874
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 6883,
                        "end": 6886
                      },
                      "start": 6883,
                      "end": 6886
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "0n",
                        "bigint": "0",
                        "start": 6889,
                        "end": 6891
                      },
                      "start": 6889,
                      "end": 6891
                    }
                  ],
                  "start": 6883,
                  "end": 6891
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6873,
                "end": 6891
              },
              "start": 6867,
              "end": 6891
            }
          ],
          "start": 6864,
          "end": 6893
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 6896,
            "end": 6897
          },
          "typeArguments": null,
          "start": 6896,
          "end": 6897
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 6900,
          "end": 6905
        },
        "start": 6852,
        "end": 6905
      },
      "declare": false,
      "start": 6828,
      "end": 6906
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral06",
        "optional": false,
        "typeAnnotation": null,
        "start": 6948,
        "end": 6964
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 6967,
            "end": 6973
          },
          "start": 6967,
          "end": 6973
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
              "start": 6982,
              "end": 6985
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7027,
              "end": 7029
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
                  "start": 6991,
                  "end": 6992
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "true",
                        "raw": "\"true\"",
                        "start": 7001,
                        "end": 7007
                      },
                      "start": 7001,
                      "end": 7007
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "false",
                        "raw": "\"false\"",
                        "start": 7010,
                        "end": 7017
                      },
                      "start": 7010,
                      "end": 7017
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 7020,
                      "end": 7027
                    }
                  ],
                  "start": 7001,
                  "end": 7027
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 6991,
                "end": 7027
              },
              "start": 6985,
              "end": 7027
            }
          ],
          "start": 6982,
          "end": 7029
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7032,
            "end": 7033
          },
          "typeArguments": null,
          "start": 7032,
          "end": 7033
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 7036,
          "end": 7041
        },
        "start": 6967,
        "end": 7041
      },
      "declare": false,
      "start": 6943,
      "end": 7042
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral07",
        "optional": false,
        "typeAnnotation": null,
        "start": 7058,
        "end": 7074
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 7077,
            "end": 7084
          },
          "start": 7077,
          "end": 7084
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
              "start": 7093,
              "end": 7096
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7138,
              "end": 7140
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
                  "start": 7102,
                  "end": 7103
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "true",
                        "raw": "\"true\"",
                        "start": 7112,
                        "end": 7118
                      },
                      "start": 7112,
                      "end": 7118
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "false",
                        "raw": "\"false\"",
                        "start": 7121,
                        "end": 7128
                      },
                      "start": 7121,
                      "end": 7128
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 7131,
                      "end": 7138
                    }
                  ],
                  "start": 7112,
                  "end": 7138
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 7102,
                "end": 7138
              },
              "start": 7096,
              "end": 7138
            }
          ],
          "start": 7093,
          "end": 7140
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7143,
            "end": 7144
          },
          "typeArguments": null,
          "start": 7143,
          "end": 7144
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 7147,
          "end": 7152
        },
        "start": 7077,
        "end": 7152
      },
      "declare": false,
      "start": 7053,
      "end": 7153
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral08",
        "optional": false,
        "typeAnnotation": null,
        "start": 7228,
        "end": 7244
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 7247,
            "end": 7253
          },
          "start": 7247,
          "end": 7253
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
              "start": 7262,
              "end": 7265
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7294,
              "end": 7296
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
                  "start": 7271,
                  "end": 7272
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "true",
                        "raw": "\"true\"",
                        "start": 7281,
                        "end": 7287
                      },
                      "start": 7281,
                      "end": 7287
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7290,
                        "end": 7294
                      },
                      "start": 7290,
                      "end": 7294
                    }
                  ],
                  "start": 7281,
                  "end": 7294
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 7271,
                "end": 7294
              },
              "start": 7265,
              "end": 7294
            }
          ],
          "start": 7262,
          "end": 7296
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7299,
            "end": 7300
          },
          "typeArguments": null,
          "start": 7299,
          "end": 7300
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 7303,
          "end": 7308
        },
        "start": 7247,
        "end": 7308
      },
      "declare": false,
      "start": 7223,
      "end": 7309
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral09",
        "optional": false,
        "typeAnnotation": null,
        "start": 7325,
        "end": 7341
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 7344,
            "end": 7351
          },
          "start": 7344,
          "end": 7351
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
              "start": 7360,
              "end": 7363
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7394,
              "end": 7396
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
                  "start": 7369,
                  "end": 7370
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "false",
                        "raw": "\"false\"",
                        "start": 7379,
                        "end": 7386
                      },
                      "start": 7379,
                      "end": 7386
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 7389,
                        "end": 7394
                      },
                      "start": 7389,
                      "end": 7394
                    }
                  ],
                  "start": 7379,
                  "end": 7394
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 7369,
                "end": 7394
              },
              "start": 7363,
              "end": 7394
            }
          ],
          "start": 7360,
          "end": 7396
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7399,
            "end": 7400
          },
          "typeArguments": null,
          "start": 7399,
          "end": 7400
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 7403,
          "end": 7408
        },
        "start": 7344,
        "end": 7408
      },
      "declare": false,
      "start": 7320,
      "end": 7409
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral10",
        "optional": false,
        "typeAnnotation": null,
        "start": 7426,
        "end": 7442
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "undefined",
            "raw": "\"undefined\"",
            "start": 7445,
            "end": 7456
          },
          "start": 7445,
          "end": 7456
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
              "start": 7465,
              "end": 7468
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7507,
              "end": 7509
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
                  "start": 7474,
                  "end": 7475
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "undefined",
                        "raw": "\"undefined\"",
                        "start": 7484,
                        "end": 7495
                      },
                      "start": 7484,
                      "end": 7495
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 7498,
                      "end": 7507
                    }
                  ],
                  "start": 7484,
                  "end": 7507
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 7474,
                "end": 7507
              },
              "start": 7468,
              "end": 7507
            }
          ],
          "start": 7465,
          "end": 7509
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7512,
            "end": 7513
          },
          "typeArguments": null,
          "start": 7512,
          "end": 7513
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 7516,
          "end": 7521
        },
        "start": 7445,
        "end": 7521
      },
      "declare": false,
      "start": 7421,
      "end": 7522
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteral11",
        "optional": false,
        "typeAnnotation": null,
        "start": 7543,
        "end": 7559
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "null",
            "raw": "\"null\"",
            "start": 7562,
            "end": 7568
          },
          "start": 7562,
          "end": 7568
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
              "start": 7577,
              "end": 7580
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7609,
              "end": 7611
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
                  "start": 7586,
                  "end": 7587
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "null",
                        "raw": "\"null\"",
                        "start": 7596,
                        "end": 7602
                      },
                      "start": 7596,
                      "end": 7602
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 7605,
                      "end": 7609
                    }
                  ],
                  "start": 7596,
                  "end": 7609
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 7586,
                "end": 7609
              },
              "start": 7580,
              "end": 7609
            }
          ],
          "start": 7577,
          "end": 7611
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7614,
            "end": 7615
          },
          "typeArguments": null,
          "start": 7614,
          "end": 7615
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 7618,
          "end": 7623
        },
        "start": 7562,
        "end": 7623
      },
      "declare": false,
      "start": 7538,
      "end": 7624
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum00",
        "optional": false,
        "typeAnnotation": null,
        "start": 7733,
        "end": 7753
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 7756,
            "end": 7759
          },
          "start": 7756,
          "end": 7759
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
              "start": 7768,
              "end": 7771
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7813,
              "end": 7815
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
                  "start": 7777,
                  "end": 7778
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7787,
                        "end": 7804
                      },
                      "typeArguments": null,
                      "start": 7787,
                      "end": 7804
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 7807,
                      "end": 7813
                    }
                  ],
                  "start": 7787,
                  "end": 7813
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 7777,
                "end": 7813
              },
              "start": 7771,
              "end": 7813
            }
          ],
          "start": 7768,
          "end": 7815
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7818,
            "end": 7819
          },
          "typeArguments": null,
          "start": 7818,
          "end": 7819
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 7822,
          "end": 7827
        },
        "start": 7756,
        "end": 7827
      },
      "declare": false,
      "start": 7728,
      "end": 7828
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum01",
        "optional": false,
        "typeAnnotation": null,
        "start": 7891,
        "end": 7911
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 7914,
            "end": 7917
          },
          "start": 7914,
          "end": 7917
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
              "start": 7926,
              "end": 7929
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 7979,
              "end": 7981
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
                  "start": 7935,
                  "end": 7936
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7945,
                        "end": 7962
                      },
                      "typeArguments": null,
                      "start": 7945,
                      "end": 7962
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7965,
                        "end": 7979
                      },
                      "typeArguments": null,
                      "start": 7965,
                      "end": 7979
                    }
                  ],
                  "start": 7945,
                  "end": 7979
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 7935,
                "end": 7979
              },
              "start": 7929,
              "end": 7979
            }
          ],
          "start": 7926,
          "end": 7981
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7984,
            "end": 7985
          },
          "typeArguments": null,
          "start": 7984,
          "end": 7985
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 7988,
          "end": 7993
        },
        "start": 7914,
        "end": 7993
      },
      "declare": false,
      "start": 7886,
      "end": 7994
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum02",
        "optional": false,
        "typeAnnotation": null,
        "start": 8091,
        "end": 8111
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 8114,
            "end": 8117
          },
          "start": 8114,
          "end": 8117
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
              "start": 8126,
              "end": 8129
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 8166,
              "end": 8168
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
                  "start": 8135,
                  "end": 8136
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8145,
                        "end": 8162
                      },
                      "typeArguments": null,
                      "start": 8145,
                      "end": 8162
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 8165,
                        "end": 8166
                      },
                      "start": 8165,
                      "end": 8166
                    }
                  ],
                  "start": 8145,
                  "end": 8166
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 8135,
                "end": 8166
              },
              "start": 8129,
              "end": 8166
            }
          ],
          "start": 8126,
          "end": 8168
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 8171,
            "end": 8172
          },
          "typeArguments": null,
          "start": 8171,
          "end": 8172
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8175,
          "end": 8180
        },
        "start": 8114,
        "end": 8180
      },
      "declare": false,
      "start": 8086,
      "end": 8181
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum03",
        "optional": false,
        "typeAnnotation": null,
        "start": 8213,
        "end": 8233
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 8236,
            "end": 8239
          },
          "start": 8236,
          "end": 8239
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
              "start": 8248,
              "end": 8251
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 8304,
              "end": 8306
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
                  "start": 8257,
                  "end": 8258
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8267,
                        "end": 8284
                      },
                      "typeArguments": null,
                      "start": 8267,
                      "end": 8284
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8287,
                        "end": 8304
                      },
                      "typeArguments": null,
                      "start": 8287,
                      "end": 8304
                    }
                  ],
                  "start": 8267,
                  "end": 8304
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 8257,
                "end": 8304
              },
              "start": 8251,
              "end": 8304
            }
          ],
          "start": 8248,
          "end": 8306
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 8309,
            "end": 8310
          },
          "typeArguments": null,
          "start": 8309,
          "end": 8310
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8313,
          "end": 8318
        },
        "start": 8236,
        "end": 8318
      },
      "declare": false,
      "start": 8208,
      "end": 8319
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum04",
        "optional": false,
        "typeAnnotation": null,
        "start": 8384,
        "end": 8404
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 8407,
            "end": 8410
          },
          "start": 8407,
          "end": 8410
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
              "start": 8419,
              "end": 8422
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 8464,
              "end": 8466
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
                  "start": 8428,
                  "end": 8429
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8438,
                        "end": 8455
                      },
                      "typeArguments": null,
                      "start": 8438,
                      "end": 8455
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 8458,
                      "end": 8464
                    }
                  ],
                  "start": 8438,
                  "end": 8464
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 8428,
                "end": 8464
              },
              "start": 8422,
              "end": 8464
            }
          ],
          "start": 8419,
          "end": 8466
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 8469,
            "end": 8470
          },
          "typeArguments": null,
          "start": 8469,
          "end": 8470
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8473,
          "end": 8478
        },
        "start": 8407,
        "end": 8478
      },
      "declare": false,
      "start": 8379,
      "end": 8479
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum05",
        "optional": false,
        "typeAnnotation": null,
        "start": 8552,
        "end": 8572
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 8575,
            "end": 8578
          },
          "start": 8575,
          "end": 8578
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
              "start": 8587,
              "end": 8590
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 8628,
              "end": 8630
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
                  "start": 8596,
                  "end": 8597
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8606,
                        "end": 8623
                      },
                      "typeArguments": null,
                      "start": 8606,
                      "end": 8623
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "0n",
                        "bigint": "0",
                        "start": 8626,
                        "end": 8628
                      },
                      "start": 8626,
                      "end": 8628
                    }
                  ],
                  "start": 8606,
                  "end": 8628
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 8596,
                "end": 8628
              },
              "start": 8590,
              "end": 8628
            }
          ],
          "start": 8587,
          "end": 8630
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 8633,
            "end": 8634
          },
          "typeArguments": null,
          "start": 8633,
          "end": 8634
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8637,
          "end": 8642
        },
        "start": 8575,
        "end": 8642
      },
      "declare": false,
      "start": 8547,
      "end": 8643
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum06",
        "optional": false,
        "typeAnnotation": null,
        "start": 8709,
        "end": 8729
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 8732,
            "end": 8738
          },
          "start": 8732,
          "end": 8738
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
              "start": 8747,
              "end": 8750
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 8793,
              "end": 8795
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
                  "start": 8756,
                  "end": 8757
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8766,
                        "end": 8783
                      },
                      "typeArguments": null,
                      "start": 8766,
                      "end": 8783
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 8786,
                      "end": 8793
                    }
                  ],
                  "start": 8766,
                  "end": 8793
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 8756,
                "end": 8793
              },
              "start": 8750,
              "end": 8793
            }
          ],
          "start": 8747,
          "end": 8795
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 8798,
            "end": 8799
          },
          "typeArguments": null,
          "start": 8798,
          "end": 8799
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8802,
          "end": 8807
        },
        "start": 8732,
        "end": 8807
      },
      "declare": false,
      "start": 8704,
      "end": 8808
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum07",
        "optional": false,
        "typeAnnotation": null,
        "start": 8840,
        "end": 8860
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 8863,
            "end": 8870
          },
          "start": 8863,
          "end": 8870
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
              "start": 8879,
              "end": 8882
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 8925,
              "end": 8927
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
                  "start": 8888,
                  "end": 8889
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8898,
                        "end": 8915
                      },
                      "typeArguments": null,
                      "start": 8898,
                      "end": 8915
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 8918,
                      "end": 8925
                    }
                  ],
                  "start": 8898,
                  "end": 8925
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 8888,
                "end": 8925
              },
              "start": 8882,
              "end": 8925
            }
          ],
          "start": 8879,
          "end": 8927
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 8930,
            "end": 8931
          },
          "typeArguments": null,
          "start": 8930,
          "end": 8931
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8934,
          "end": 8939
        },
        "start": 8863,
        "end": 8939
      },
      "declare": false,
      "start": 8835,
      "end": 8940
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum08",
        "optional": false,
        "typeAnnotation": null,
        "start": 9036,
        "end": 9056
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 9059,
            "end": 9065
          },
          "start": 9059,
          "end": 9065
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
              "start": 9074,
              "end": 9077
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 9117,
              "end": 9119
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
                  "start": 9083,
                  "end": 9084
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9093,
                        "end": 9110
                      },
                      "typeArguments": null,
                      "start": 9093,
                      "end": 9110
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 9113,
                        "end": 9117
                      },
                      "start": 9113,
                      "end": 9117
                    }
                  ],
                  "start": 9093,
                  "end": 9117
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 9083,
                "end": 9117
              },
              "start": 9077,
              "end": 9117
            }
          ],
          "start": 9074,
          "end": 9119
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 9122,
            "end": 9123
          },
          "typeArguments": null,
          "start": 9122,
          "end": 9123
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 9126,
          "end": 9131
        },
        "start": 9059,
        "end": 9131
      },
      "declare": false,
      "start": 9031,
      "end": 9132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum09",
        "optional": false,
        "typeAnnotation": null,
        "start": 9164,
        "end": 9184
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 9187,
            "end": 9194
          },
          "start": 9187,
          "end": 9194
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
              "start": 9203,
              "end": 9206
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 9247,
              "end": 9249
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
                  "start": 9212,
                  "end": 9213
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9222,
                        "end": 9239
                      },
                      "typeArguments": null,
                      "start": 9222,
                      "end": 9239
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 9242,
                        "end": 9247
                      },
                      "start": 9242,
                      "end": 9247
                    }
                  ],
                  "start": 9222,
                  "end": 9247
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 9212,
                "end": 9247
              },
              "start": 9206,
              "end": 9247
            }
          ],
          "start": 9203,
          "end": 9249
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 9252,
            "end": 9253
          },
          "typeArguments": null,
          "start": 9252,
          "end": 9253
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 9256,
          "end": 9261
        },
        "start": 9187,
        "end": 9261
      },
      "declare": false,
      "start": 9159,
      "end": 9262
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum10",
        "optional": false,
        "typeAnnotation": null,
        "start": 9295,
        "end": 9315
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "undefined",
            "raw": "\"undefined\"",
            "start": 9318,
            "end": 9329
          },
          "start": 9318,
          "end": 9329
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
              "start": 9338,
              "end": 9341
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 9386,
              "end": 9388
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
                  "start": 9347,
                  "end": 9348
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9357,
                        "end": 9374
                      },
                      "typeArguments": null,
                      "start": 9357,
                      "end": 9374
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 9377,
                      "end": 9386
                    }
                  ],
                  "start": 9357,
                  "end": 9386
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 9347,
                "end": 9386
              },
              "start": 9341,
              "end": 9386
            }
          ],
          "start": 9338,
          "end": 9388
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 9391,
            "end": 9392
          },
          "typeArguments": null,
          "start": 9391,
          "end": 9392
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 9395,
          "end": 9400
        },
        "start": 9318,
        "end": 9400
      },
      "declare": false,
      "start": 9290,
      "end": 9401
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PStringLiteralEnum11",
        "optional": false,
        "typeAnnotation": null,
        "start": 9438,
        "end": 9458
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "null",
            "raw": "\"null\"",
            "start": 9461,
            "end": 9467
          },
          "start": 9461,
          "end": 9467
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
              "start": 9476,
              "end": 9479
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 9519,
              "end": 9521
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
                  "start": 9485,
                  "end": 9486
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StringLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9495,
                        "end": 9512
                      },
                      "typeArguments": null,
                      "start": 9495,
                      "end": 9512
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 9515,
                      "end": 9519
                    }
                  ],
                  "start": 9495,
                  "end": 9519
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 9485,
                "end": 9519
              },
              "start": 9479,
              "end": 9519
            }
          ],
          "start": 9476,
          "end": 9521
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 9524,
            "end": 9525
          },
          "typeArguments": null,
          "start": 9524,
          "end": 9525
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 9528,
          "end": 9533
        },
        "start": 9461,
        "end": 9533
      },
      "declare": false,
      "start": 9433,
      "end": 9534
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PNumber0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9636,
        "end": 9644
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 9647,
            "end": 9650
          },
          "start": 9647,
          "end": 9650
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
              "start": 9659,
              "end": 9662
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 9701,
              "end": 9703
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
                  "start": 9668,
                  "end": 9669
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9678,
                      "end": 9684
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9687,
                        "end": 9701
                      },
                      "typeArguments": null,
                      "start": 9687,
                      "end": 9701
                    }
                  ],
                  "start": 9678,
                  "end": 9701
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 9668,
                "end": 9701
              },
              "start": 9662,
              "end": 9701
            }
          ],
          "start": 9659,
          "end": 9703
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 9706,
            "end": 9707
          },
          "typeArguments": null,
          "start": 9706,
          "end": 9707
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 9710,
          "end": 9715
        },
        "start": 9647,
        "end": 9715
      },
      "declare": false,
      "start": 9631,
      "end": 9716
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PNumber1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9760,
        "end": 9768
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 9771,
            "end": 9774
          },
          "start": 9771,
          "end": 9774
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
              "start": 9783,
              "end": 9786
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 9828,
              "end": 9830
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
                  "start": 9792,
                  "end": 9793
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9802,
                      "end": 9808
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9811,
                        "end": 9828
                      },
                      "typeArguments": null,
                      "start": 9811,
                      "end": 9828
                    }
                  ],
                  "start": 9802,
                  "end": 9828
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 9792,
                "end": 9828
              },
              "start": 9786,
              "end": 9828
            }
          ],
          "start": 9783,
          "end": 9830
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 9833,
            "end": 9834
          },
          "typeArguments": null,
          "start": 9833,
          "end": 9834
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 9837,
          "end": 9842
        },
        "start": 9771,
        "end": 9842
      },
      "declare": false,
      "start": 9755,
      "end": 9843
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PNumber2",
        "optional": false,
        "typeAnnotation": null,
        "start": 9874,
        "end": 9882
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 9885,
            "end": 9888
          },
          "start": 9885,
          "end": 9888
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
              "start": 9897,
              "end": 9900
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 9931,
              "end": 9933
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
                  "start": 9906,
                  "end": 9907
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9916,
                      "end": 9922
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 9925,
                      "end": 9931
                    }
                  ],
                  "start": 9916,
                  "end": 9931
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 9906,
                "end": 9931
              },
              "start": 9900,
              "end": 9931
            }
          ],
          "start": 9897,
          "end": 9933
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 9936,
            "end": 9937
          },
          "typeArguments": null,
          "start": 9936,
          "end": 9937
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 9940,
          "end": 9945
        },
        "start": 9885,
        "end": 9945
      },
      "declare": false,
      "start": 9869,
      "end": 9946
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PNumber3",
        "optional": false,
        "typeAnnotation": null,
        "start": 9985,
        "end": 9993
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 9996,
            "end": 9999
          },
          "start": 9996,
          "end": 9999
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
              "start": 10008,
              "end": 10011
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 10038,
              "end": 10040
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
                  "start": 10017,
                  "end": 10018
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 10027,
                      "end": 10033
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "0n",
                        "bigint": "0",
                        "start": 10036,
                        "end": 10038
                      },
                      "start": 10036,
                      "end": 10038
                    }
                  ],
                  "start": 10027,
                  "end": 10038
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 10017,
                "end": 10038
              },
              "start": 10011,
              "end": 10038
            }
          ],
          "start": 10008,
          "end": 10040
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 10043,
            "end": 10044
          },
          "typeArguments": null,
          "start": 10043,
          "end": 10044
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 10047,
          "end": 10052
        },
        "start": 9996,
        "end": 10052
      },
      "declare": false,
      "start": 9980,
      "end": 10053
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PEnum0",
        "optional": false,
        "typeAnnotation": null,
        "start": 10132,
        "end": 10138
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 10141,
            "end": 10144
          },
          "start": 10141,
          "end": 10144
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
              "start": 10153,
              "end": 10156
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 10206,
              "end": 10208
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
                  "start": 10162,
                  "end": 10163
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10172,
                        "end": 10186
                      },
                      "typeArguments": null,
                      "start": 10172,
                      "end": 10186
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10189,
                        "end": 10206
                      },
                      "typeArguments": null,
                      "start": 10189,
                      "end": 10206
                    }
                  ],
                  "start": 10172,
                  "end": 10206
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 10162,
                "end": 10206
              },
              "start": 10156,
              "end": 10206
            }
          ],
          "start": 10153,
          "end": 10208
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 10211,
            "end": 10212
          },
          "typeArguments": null,
          "start": 10211,
          "end": 10212
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 10215,
          "end": 10220
        },
        "start": 10141,
        "end": 10220
      },
      "declare": false,
      "start": 10127,
      "end": 10221
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PEnum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10250,
        "end": 10256
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 10259,
            "end": 10262
          },
          "start": 10259,
          "end": 10262
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
              "start": 10271,
              "end": 10274
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 10313,
              "end": 10315
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
                  "start": 10280,
                  "end": 10281
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10290,
                        "end": 10304
                      },
                      "typeArguments": null,
                      "start": 10290,
                      "end": 10304
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 10307,
                      "end": 10313
                    }
                  ],
                  "start": 10290,
                  "end": 10313
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 10280,
                "end": 10313
              },
              "start": 10274,
              "end": 10313
            }
          ],
          "start": 10271,
          "end": 10315
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 10318,
            "end": 10319
          },
          "typeArguments": null,
          "start": 10318,
          "end": 10319
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 10322,
          "end": 10327
        },
        "start": 10259,
        "end": 10327
      },
      "declare": false,
      "start": 10245,
      "end": 10328
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PEnum2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10365,
        "end": 10371
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 10374,
            "end": 10377
          },
          "start": 10374,
          "end": 10377
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
              "start": 10386,
              "end": 10389
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 10424,
              "end": 10426
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
                  "start": 10395,
                  "end": 10396
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10405,
                        "end": 10419
                      },
                      "typeArguments": null,
                      "start": 10405,
                      "end": 10419
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "0n",
                        "bigint": "0",
                        "start": 10422,
                        "end": 10424
                      },
                      "start": 10422,
                      "end": 10424
                    }
                  ],
                  "start": 10405,
                  "end": 10424
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 10395,
                "end": 10424
              },
              "start": 10389,
              "end": 10424
            }
          ],
          "start": 10386,
          "end": 10426
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 10429,
            "end": 10430
          },
          "typeArguments": null,
          "start": 10429,
          "end": 10430
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 10433,
          "end": 10438
        },
        "start": 10374,
        "end": 10438
      },
      "declare": false,
      "start": 10360,
      "end": 10439
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PNumberLiteral0",
        "optional": false,
        "typeAnnotation": null,
        "start": 10523,
        "end": 10538
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 10541,
            "end": 10544
          },
          "start": 10541,
          "end": 10544
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
              "start": 10553,
              "end": 10556
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 10582,
              "end": 10584
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
                  "start": 10562,
                  "end": 10563
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 10572,
                        "end": 10573
                      },
                      "start": 10572,
                      "end": 10573
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 10576,
                      "end": 10582
                    }
                  ],
                  "start": 10572,
                  "end": 10582
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 10562,
                "end": 10582
              },
              "start": 10556,
              "end": 10582
            }
          ],
          "start": 10553,
          "end": 10584
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 10587,
            "end": 10588
          },
          "typeArguments": null,
          "start": 10587,
          "end": 10588
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 10591,
          "end": 10596
        },
        "start": 10541,
        "end": 10596
      },
      "declare": false,
      "start": 10518,
      "end": 10597
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PNumberLiteral1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10644,
        "end": 10659
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 10662,
            "end": 10665
          },
          "start": 10662,
          "end": 10665
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
              "start": 10674,
              "end": 10677
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 10699,
              "end": 10701
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
                  "start": 10683,
                  "end": 10684
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 10693,
                        "end": 10694
                      },
                      "start": 10693,
                      "end": 10694
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "0n",
                        "bigint": "0",
                        "start": 10697,
                        "end": 10699
                      },
                      "start": 10697,
                      "end": 10699
                    }
                  ],
                  "start": 10693,
                  "end": 10699
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 10683,
                "end": 10699
              },
              "start": 10677,
              "end": 10699
            }
          ],
          "start": 10674,
          "end": 10701
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 10704,
            "end": 10705
          },
          "typeArguments": null,
          "start": 10704,
          "end": 10705
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 10708,
          "end": 10713
        },
        "start": 10662,
        "end": 10713
      },
      "declare": false,
      "start": 10639,
      "end": 10714
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PNumberLiteralEnum0",
        "optional": false,
        "typeAnnotation": null,
        "start": 10818,
        "end": 10837
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 10840,
            "end": 10843
          },
          "start": 10840,
          "end": 10843
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
              "start": 10852,
              "end": 10855
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 10897,
              "end": 10899
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
                  "start": 10861,
                  "end": 10862
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10871,
                        "end": 10888
                      },
                      "typeArguments": null,
                      "start": 10871,
                      "end": 10888
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 10891,
                      "end": 10897
                    }
                  ],
                  "start": 10871,
                  "end": 10897
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 10861,
                "end": 10897
              },
              "start": 10855,
              "end": 10897
            }
          ],
          "start": 10852,
          "end": 10899
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 10902,
            "end": 10903
          },
          "typeArguments": null,
          "start": 10902,
          "end": 10903
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 10906,
          "end": 10911
        },
        "start": 10840,
        "end": 10911
      },
      "declare": false,
      "start": 10813,
      "end": 10912
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PNumberLiteralEnum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10985,
        "end": 11004
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 11007,
            "end": 11010
          },
          "start": 11007,
          "end": 11010
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
              "start": 11019,
              "end": 11022
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11060,
              "end": 11062
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
                  "start": 11028,
                  "end": 11029
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberLiteralEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11038,
                        "end": 11055
                      },
                      "typeArguments": null,
                      "start": 11038,
                      "end": 11055
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "0n",
                        "bigint": "0",
                        "start": 11058,
                        "end": 11060
                      },
                      "start": 11058,
                      "end": 11060
                    }
                  ],
                  "start": 11038,
                  "end": 11060
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11028,
                "end": 11060
              },
              "start": 11022,
              "end": 11060
            }
          ],
          "start": 11019,
          "end": 11062
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11065,
            "end": 11066
          },
          "typeArguments": null,
          "start": 11065,
          "end": 11066
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 11069,
          "end": 11074
        },
        "start": 11007,
        "end": 11074
      },
      "declare": false,
      "start": 10980,
      "end": 11075
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PExclude0",
        "optional": false,
        "typeAnnotation": null,
        "start": 11185,
        "end": 11194
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 11197,
            "end": 11200
          },
          "start": 11197,
          "end": 11200
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
              "start": 11209,
              "end": 11212
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11240,
              "end": 11242
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
                  "start": 11218,
                  "end": 11219
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "\"1\"",
                        "start": 11228,
                        "end": 11231
                      },
                      "start": 11228,
                      "end": 11231
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 11234,
                      "end": 11240
                    }
                  ],
                  "start": 11228,
                  "end": 11240
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11218,
                "end": 11240
              },
              "start": 11212,
              "end": 11240
            }
          ],
          "start": 11209,
          "end": 11242
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11245,
            "end": 11246
          },
          "typeArguments": null,
          "start": 11245,
          "end": 11246
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 11249,
          "end": 11254
        },
        "start": 11197,
        "end": 11254
      },
      "declare": false,
      "start": 11180,
      "end": 11255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PExclude1",
        "optional": false,
        "typeAnnotation": null,
        "start": 11266,
        "end": 11275
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 11278,
            "end": 11281
          },
          "start": 11278,
          "end": 11281
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
              "start": 11290,
              "end": 11293
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11330,
              "end": 11332
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
                  "start": 11299,
                  "end": 11300
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": false,
                          "start": 11309,
                          "end": 11313
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 11319,
                          "end": 11321
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 11313,
                          "end": 11319
                        }
                      ],
                      "start": 11309,
                      "end": 11321
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 11324,
                      "end": 11330
                    }
                  ],
                  "start": 11309,
                  "end": 11330
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11299,
                "end": 11330
              },
              "start": 11293,
              "end": 11330
            }
          ],
          "start": 11290,
          "end": 11332
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11335,
            "end": 11336
          },
          "typeArguments": null,
          "start": 11335,
          "end": 11336
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 11339,
          "end": 11344
        },
        "start": 11278,
        "end": 11344
      },
      "declare": false,
      "start": 11261,
      "end": 11345
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PExclude2",
        "optional": false,
        "typeAnnotation": null,
        "start": 11356,
        "end": 11365
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 11368,
            "end": 11371
          },
          "start": 11368,
          "end": 11371
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
              "start": 11380,
              "end": 11383
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11409,
              "end": 11411
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
                  "start": 11389,
                  "end": 11390
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 11399,
                        "end": 11400
                      },
                      "start": 11399,
                      "end": 11400
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 11403,
                      "end": 11409
                    }
                  ],
                  "start": 11399,
                  "end": 11409
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11389,
                "end": 11409
              },
              "start": 11383,
              "end": 11409
            }
          ],
          "start": 11380,
          "end": 11411
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11414,
            "end": 11415
          },
          "typeArguments": null,
          "start": 11414,
          "end": 11415
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 11418,
          "end": 11423
        },
        "start": 11368,
        "end": 11423
      },
      "declare": false,
      "start": 11351,
      "end": 11424
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PExclude3",
        "optional": false,
        "typeAnnotation": null,
        "start": 11436,
        "end": 11445
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 11448,
            "end": 11451
          },
          "start": 11448,
          "end": 11451
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
              "start": 11460,
              "end": 11463
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11509,
              "end": 11511
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
                  "start": 11469,
                  "end": 11470
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NumberLiteralEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11479,
                          "end": 11496
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "One",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11497,
                          "end": 11500
                        },
                        "start": 11479,
                        "end": 11500
                      },
                      "typeArguments": null,
                      "start": 11479,
                      "end": 11500
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 11503,
                      "end": 11509
                    }
                  ],
                  "start": 11479,
                  "end": 11509
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11469,
                "end": 11509
              },
              "start": 11463,
              "end": 11509
            }
          ],
          "start": 11460,
          "end": 11511
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11514,
            "end": 11515
          },
          "typeArguments": null,
          "start": 11514,
          "end": 11515
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 11518,
          "end": 11523
        },
        "start": 11448,
        "end": 11523
      },
      "declare": false,
      "start": 11431,
      "end": 11524
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PExclude4",
        "optional": false,
        "typeAnnotation": null,
        "start": 11536,
        "end": 11545
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "100000000000000000000000",
            "raw": "\"100000000000000000000000\"",
            "start": 11548,
            "end": 11574
          },
          "start": 11548,
          "end": 11574
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
              "start": 11583,
              "end": 11586
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11617,
              "end": 11619
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
                  "start": 11592,
                  "end": 11593
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 11602,
                      "end": 11608
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 11611,
                      "end": 11617
                    }
                  ],
                  "start": 11602,
                  "end": 11617
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11592,
                "end": 11617
              },
              "start": 11586,
              "end": 11617
            }
          ],
          "start": 11583,
          "end": 11619
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11622,
            "end": 11623
          },
          "typeArguments": null,
          "start": 11622,
          "end": 11623
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 11626,
          "end": 11631
        },
        "start": 11548,
        "end": 11631
      },
      "declare": false,
      "start": 11531,
      "end": 11632
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TPrefix0",
        "optional": false,
        "typeAnnotation": null,
        "start": 11699,
        "end": 11707
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "100",
            "raw": "\"100\"",
            "start": 11710,
            "end": 11715
          },
          "start": 11710,
          "end": 11715
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
              "start": 11724,
              "end": 11727
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 11749,
              "end": 11752
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11758,
              "end": 11760
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
                  "start": 11733,
                  "end": 11734
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 11743,
                  "end": 11749
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11733,
                "end": 11749
              },
              "start": 11727,
              "end": 11749
            },
            {
              "type": "TSStringKeyword",
              "start": 11752,
              "end": 11758
            }
          ],
          "start": 11724,
          "end": 11760
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11763,
            "end": 11764
          },
          "typeArguments": null,
          "start": 11763,
          "end": 11764
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 11767,
          "end": 11772
        },
        "start": 11710,
        "end": 11772
      },
      "declare": false,
      "start": 11694,
      "end": 11773
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TPrefix1",
        "optional": false,
        "typeAnnotation": null,
        "start": 11784,
        "end": 11792
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "trueabc",
            "raw": "\"trueabc\"",
            "start": 11795,
            "end": 11804
          },
          "start": 11795,
          "end": 11804
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
              "start": 11813,
              "end": 11816
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 11839,
              "end": 11842
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11848,
              "end": 11850
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
                  "start": 11822,
                  "end": 11823
                },
                "constraint": {
                  "type": "TSBooleanKeyword",
                  "start": 11832,
                  "end": 11839
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11822,
                "end": 11839
              },
              "start": 11816,
              "end": 11839
            },
            {
              "type": "TSStringKeyword",
              "start": 11842,
              "end": 11848
            }
          ],
          "start": 11813,
          "end": 11850
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11853,
            "end": 11854
          },
          "typeArguments": null,
          "start": 11853,
          "end": 11854
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 11857,
          "end": 11862
        },
        "start": 11795,
        "end": 11862
      },
      "declare": false,
      "start": 11779,
      "end": 11863
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TPrefix2",
        "optional": false,
        "typeAnnotation": null,
        "start": 11924,
        "end": 11932
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "100:",
                "cooked": "100:"
              },
              "tail": false,
              "start": 11935,
              "end": 11942
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11948,
              "end": 11950
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 11942,
              "end": 11948
            }
          ],
          "start": 11935,
          "end": 11950
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
              "start": 11959,
              "end": 11962
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ":",
                "cooked": ":"
              },
              "tail": false,
              "start": 11984,
              "end": 11988
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 11994,
              "end": 11996
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
                  "start": 11968,
                  "end": 11969
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 11978,
                  "end": 11984
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 11968,
                "end": 11984
              },
              "start": 11962,
              "end": 11984
            },
            {
              "type": "TSStringKeyword",
              "start": 11988,
              "end": 11994
            }
          ],
          "start": 11959,
          "end": 11996
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 11999,
            "end": 12000
          },
          "typeArguments": null,
          "start": 11999,
          "end": 12000
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 12003,
          "end": 12008
        },
        "start": 11935,
        "end": 12008
      },
      "declare": false,
      "start": 11919,
      "end": 12009
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractPrimitives",
        "optional": false,
        "typeAnnotation": null,
        "start": 12134,
        "end": 12151
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
              "start": 12152,
              "end": 12153
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 12162,
              "end": 12168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12152,
            "end": 12168
          }
        ],
        "start": 12151,
        "end": 12169
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
              "start": 12178,
              "end": 12179
            },
            "typeArguments": null,
            "start": 12178,
            "end": 12179
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 12187,
                "end": 12188
              },
              "typeArguments": null,
              "start": 12187,
              "end": 12188
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
                  "start": 12197,
                  "end": 12200
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 12222,
                  "end": 12224
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12206,
                      "end": 12207
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 12216,
                      "end": 12222
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 12206,
                    "end": 12222
                  },
                  "start": 12200,
                  "end": 12222
                }
              ],
              "start": 12197,
              "end": 12224
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 12227,
                "end": 12228
              },
              "typeArguments": null,
              "start": 12227,
              "end": 12228
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 12231,
              "end": 12236
            },
            "start": 12187,
            "end": 12236
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 12245,
                "end": 12246
              },
              "typeArguments": null,
              "start": 12245,
              "end": 12246
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
                  "start": 12255,
                  "end": 12258
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 12280,
                  "end": 12282
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12264,
                      "end": 12265
                    },
                    "constraint": {
                      "type": "TSBigIntKeyword",
                      "start": 12274,
                      "end": 12280
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 12264,
                    "end": 12280
                  },
                  "start": 12258,
                  "end": 12280
                }
              ],
              "start": 12255,
              "end": 12282
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 12285,
                "end": 12286
              },
              "typeArguments": null,
              "start": 12285,
              "end": 12286
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 12289,
              "end": 12294
            },
            "start": 12245,
            "end": 12294
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 12303,
                "end": 12304
              },
              "typeArguments": null,
              "start": 12303,
              "end": 12304
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
                  "start": 12313,
                  "end": 12316
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 12358,
                  "end": 12360
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12322,
                      "end": 12323
                    },
                    "constraint": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 12332,
                          "end": 12339
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 12342,
                          "end": 12346
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 12349,
                          "end": 12358
                        }
                      ],
                      "start": 12332,
                      "end": 12358
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 12322,
                    "end": 12358
                  },
                  "start": 12316,
                  "end": 12358
                }
              ],
              "start": 12313,
              "end": 12360
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 12363,
                "end": 12364
              },
              "typeArguments": null,
              "start": 12363,
              "end": 12364
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 12367,
              "end": 12372
            },
            "start": 12303,
            "end": 12372
          }
        ],
        "start": 12176,
        "end": 12373
      },
      "declare": false,
      "start": 12129,
      "end": 12379
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TExtract0",
        "optional": false,
        "typeAnnotation": null,
        "start": 12386,
        "end": 12395
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtractPrimitives",
          "optional": false,
          "typeAnnotation": null,
          "start": 12398,
          "end": 12415
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "100",
                "raw": "\"100\"",
                "start": 12416,
                "end": 12421
              },
              "start": 12416,
              "end": 12421
            }
          ],
          "start": 12415,
          "end": 12422
        },
        "start": 12398,
        "end": 12422
      },
      "declare": false,
      "start": 12381,
      "end": 12423
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TExtract1",
        "optional": false,
        "typeAnnotation": null,
        "start": 12451,
        "end": 12460
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtractPrimitives",
          "optional": false,
          "typeAnnotation": null,
          "start": 12463,
          "end": 12480
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "1.1",
                "raw": "\"1.1\"",
                "start": 12481,
                "end": 12486
              },
              "start": 12481,
              "end": 12486
            }
          ],
          "start": 12480,
          "end": 12487
        },
        "start": 12463,
        "end": 12487
      },
      "declare": false,
      "start": 12446,
      "end": 12488
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TExtract2",
        "optional": false,
        "typeAnnotation": null,
        "start": 12509,
        "end": 12518
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtractPrimitives",
          "optional": false,
          "typeAnnotation": null,
          "start": 12521,
          "end": 12538
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "true",
                "raw": "\"true\"",
                "start": 12539,
                "end": 12545
              },
              "start": 12539,
              "end": 12545
            }
          ],
          "start": 12538,
          "end": 12546
        },
        "start": 12521,
        "end": 12546
      },
      "declare": false,
      "start": 12504,
      "end": 12547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndexFor",
        "optional": false,
        "typeAnnotation": null,
        "start": 12714,
        "end": 12722
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
              "start": 12723,
              "end": 12724
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 12733,
              "end": 12739
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12723,
            "end": 12739
          }
        ],
        "start": 12722,
        "end": 12740
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
            "start": 12743,
            "end": 12744
          },
          "typeArguments": null,
          "start": 12743,
          "end": 12744
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
              "start": 12753,
              "end": 12756
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 12778,
              "end": 12780
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
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12762,
                  "end": 12763
                },
                "constraint": {
                  "type": "TSNumberKeyword",
                  "start": 12772,
                  "end": 12778
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 12762,
                "end": 12778
              },
              "start": 12756,
              "end": 12778
            }
          ],
          "start": 12753,
          "end": 12780
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 12783,
            "end": 12784
          },
          "typeArguments": null,
          "start": 12783,
          "end": 12784
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 12787,
          "end": 12792
        },
        "start": 12743,
        "end": 12792
      },
      "declare": false,
      "start": 12709,
      "end": 12793
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndicesOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 12799,
        "end": 12808
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
              "start": 12809,
              "end": 12810
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12809,
            "end": 12810
          }
        ],
        "start": 12808,
        "end": 12811
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IndexFor",
          "optional": false,
          "typeAnnotation": null,
          "start": 12814,
          "end": 12822
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 12823,
                "end": 12830
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                        "start": 12837,
                        "end": 12838
                      },
                      "typeArguments": null,
                      "start": 12837,
                      "end": 12838
                    },
                    "start": 12831,
                    "end": 12838
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 12840,
                    "end": 12846
                  }
                ],
                "start": 12830,
                "end": 12847
              },
              "start": 12823,
              "end": 12847
            }
          ],
          "start": 12822,
          "end": 12848
        },
        "start": 12814,
        "end": 12848
      },
      "declare": false,
      "start": 12794,
      "end": 12849
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldDefinition",
        "optional": false,
        "typeAnnotation": null,
        "start": 12899,
        "end": 12914
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 12930,
              "end": 12934
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 12936,
                "end": 12942
              },
              "start": 12934,
              "end": 12942
            },
            "accessibility": null,
            "static": false,
            "start": 12921,
            "end": 12943
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 12957,
              "end": 12961
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
                      "value": "i8",
                      "raw": "\"i8\"",
                      "start": 12963,
                      "end": 12967
                    },
                    "start": 12963,
                    "end": 12967
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "i16",
                      "raw": "\"i16\"",
                      "start": 12970,
                      "end": 12975
                    },
                    "start": 12970,
                    "end": 12975
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "i32",
                      "raw": "\"i32\"",
                      "start": 12978,
                      "end": 12983
                    },
                    "start": 12978,
                    "end": 12983
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "i64",
                      "raw": "\"i64\"",
                      "start": 12986,
                      "end": 12991
                    },
                    "start": 12986,
                    "end": 12991
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "u8",
                      "raw": "\"u8\"",
                      "start": 12994,
                      "end": 12998
                    },
                    "start": 12994,
                    "end": 12998
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "u16",
                      "raw": "\"u16\"",
                      "start": 13001,
                      "end": 13006
                    },
                    "start": 13001,
                    "end": 13006
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "u32",
                      "raw": "\"u32\"",
                      "start": 13009,
                      "end": 13014
                    },
                    "start": 13009,
                    "end": 13014
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "u64",
                      "raw": "\"u64\"",
                      "start": 13017,
                      "end": 13022
                    },
                    "start": 13017,
                    "end": 13022
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "f32",
                      "raw": "\"f32\"",
                      "start": 13025,
                      "end": 13030
                    },
                    "start": 13025,
                    "end": 13030
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "f64",
                      "raw": "\"f64\"",
                      "start": 13033,
                      "end": 13038
                    },
                    "start": 13033,
                    "end": 13038
                  }
                ],
                "start": 12963,
                "end": 13038
              },
              "start": 12961,
              "end": 13038
            },
            "accessibility": null,
            "static": false,
            "start": 12948,
            "end": 13039
          }
        ],
        "start": 12915,
        "end": 13041
      },
      "declare": false,
      "start": 12889,
      "end": 13041
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldType",
        "optional": false,
        "typeAnnotation": null,
        "start": 13048,
        "end": 13057
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
              "start": 13058,
              "end": 13059
            },
            "constraint": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldDefinition",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13068,
                  "end": 13083
                },
                "typeArguments": null,
                "start": 13068,
                "end": 13083
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "type",
                  "raw": "\"type\"",
                  "start": 13084,
                  "end": 13090
                },
                "start": 13084,
                "end": 13090
              },
              "start": 13068,
              "end": 13091
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13058,
            "end": 13091
          }
        ],
        "start": 13057,
        "end": 13092
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
            "start": 13099,
            "end": 13100
          },
          "typeArguments": null,
          "start": 13099,
          "end": 13100
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "i8",
                "raw": "\"i8\"",
                "start": 13109,
                "end": 13113
              },
              "start": 13109,
              "end": 13113
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "i16",
                "raw": "\"i16\"",
                "start": 13116,
                "end": 13121
              },
              "start": 13116,
              "end": 13121
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "i32",
                "raw": "\"i32\"",
                "start": 13124,
                "end": 13129
              },
              "start": 13124,
              "end": 13129
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "u8",
                "raw": "\"u8\"",
                "start": 13132,
                "end": 13136
              },
              "start": 13132,
              "end": 13136
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "u16",
                "raw": "\"u16\"",
                "start": 13139,
                "end": 13144
              },
              "start": 13139,
              "end": 13144
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "u32",
                "raw": "\"u32\"",
                "start": 13147,
                "end": 13152
              },
              "start": 13147,
              "end": 13152
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "f32",
                "raw": "\"f32\"",
                "start": 13155,
                "end": 13160
              },
              "start": 13155,
              "end": 13160
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "f64",
                "raw": "\"f64\"",
                "start": 13163,
                "end": 13168
              },
              "start": 13163,
              "end": 13168
            }
          ],
          "start": 13109,
          "end": 13168
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 13171,
          "end": 13177
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
              "start": 13184,
              "end": 13185
            },
            "typeArguments": null,
            "start": 13184,
            "end": 13185
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "f32",
                  "raw": "\"f32\"",
                  "start": 13194,
                  "end": 13199
                },
                "start": 13194,
                "end": 13199
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "f64",
                  "raw": "\"f64\"",
                  "start": 13202,
                  "end": 13207
                },
                "start": 13202,
                "end": 13207
              }
            ],
            "start": 13194,
            "end": 13207
          },
          "trueType": {
            "type": "TSBigIntKeyword",
            "start": 13210,
            "end": 13216
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 13223,
            "end": 13228
          },
          "start": 13184,
          "end": 13228
        },
        "start": 13099,
        "end": 13228
      },
      "declare": false,
      "start": 13043,
      "end": 13229
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypedObjectNamedMembers",
        "optional": false,
        "typeAnnotation": null,
        "start": 13359,
        "end": 13382
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDef",
              "optional": false,
              "typeAnnotation": null,
              "start": 13383,
              "end": 13387
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FieldDefinition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13405,
                    "end": 13420
                  },
                  "typeArguments": null,
                  "start": 13405,
                  "end": 13420
                },
                "start": 13405,
                "end": 13422
              },
              "start": 13396,
              "end": 13422
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13383,
            "end": 13422
          }
        ],
        "start": 13382,
        "end": 13423
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 13433,
          "end": 13434
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDef",
                "optional": false,
                "typeAnnotation": null,
                "start": 13438,
                "end": 13442
              },
              "typeArguments": null,
              "start": 13438,
              "end": 13442
            },
            "indexType": {
              "type": "TSNumberKeyword",
              "start": 13443,
              "end": 13449
            },
            "start": 13438,
            "end": 13450
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "name",
              "raw": "\"name\"",
              "start": 13451,
              "end": 13457
            },
            "start": 13451,
            "end": 13457
          },
          "start": 13438,
          "end": 13458
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FieldType",
            "optional": false,
            "typeAnnotation": null,
            "start": 13461,
            "end": 13470
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
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13471,
                    "end": 13478
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
                            "name": "TDef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13479,
                            "end": 13483
                          },
                          "typeArguments": null,
                          "start": 13479,
                          "end": 13483
                        },
                        "indexType": {
                          "type": "TSNumberKeyword",
                          "start": 13484,
                          "end": 13490
                        },
                        "start": 13479,
                        "end": 13491
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": true,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13504,
                              "end": 13508
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13510,
                                  "end": 13511
                                },
                                "typeArguments": null,
                                "start": 13510,
                                "end": 13511
                              },
                              "start": 13508,
                              "end": 13511
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 13495,
                            "end": 13511
                          }
                        ],
                        "start": 13493,
                        "end": 13513
                      }
                    ],
                    "start": 13478,
                    "end": 13514
                  },
                  "start": 13471,
                  "end": 13514
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "type",
                    "raw": "\"type\"",
                    "start": 13515,
                    "end": 13521
                  },
                  "start": 13515,
                  "end": 13521
                },
                "start": 13471,
                "end": 13522
              }
            ],
            "start": 13470,
            "end": 13523
          },
          "start": 13461,
          "end": 13523
        },
        "optional": false,
        "readonly": null,
        "start": 13426,
        "end": 13526
      },
      "declare": false,
      "start": 13354,
      "end": 13527
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypedObjectOrdinalMembers",
        "optional": false,
        "typeAnnotation": null,
        "start": 13659,
        "end": 13684
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDef",
              "optional": false,
              "typeAnnotation": null,
              "start": 13685,
              "end": 13689
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FieldDefinition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13707,
                    "end": 13722
                  },
                  "typeArguments": null,
                  "start": 13707,
                  "end": 13722
                },
                "start": 13707,
                "end": 13724
              },
              "start": 13698,
              "end": 13724
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13685,
            "end": 13724
          }
        ],
        "start": 13684,
        "end": 13725
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 13735,
          "end": 13736
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 13740,
            "end": 13747
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDef",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13754,
                    "end": 13758
                  },
                  "typeArguments": null,
                  "start": 13754,
                  "end": 13758
                },
                "start": 13748,
                "end": 13758
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
                    "start": 13760,
                    "end": 13763
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 13769,
                    "end": 13771
                  }
                ],
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 13763,
                    "end": 13769
                  }
                ],
                "start": 13760,
                "end": 13771
              }
            ],
            "start": 13747,
            "end": 13772
          },
          "start": 13740,
          "end": 13772
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FieldType",
            "optional": false,
            "typeAnnotation": null,
            "start": 13775,
            "end": 13784
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
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13785,
                    "end": 13792
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
                            "name": "TDef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13793,
                            "end": 13797
                          },
                          "typeArguments": null,
                          "start": 13793,
                          "end": 13797
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13798,
                            "end": 13799
                          },
                          "typeArguments": null,
                          "start": 13798,
                          "end": 13799
                        },
                        "start": 13793,
                        "end": 13800
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FieldDefinition",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13802,
                          "end": 13817
                        },
                        "typeArguments": null,
                        "start": 13802,
                        "end": 13817
                      }
                    ],
                    "start": 13792,
                    "end": 13818
                  },
                  "start": 13785,
                  "end": 13818
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "type",
                    "raw": "\"type\"",
                    "start": 13819,
                    "end": 13825
                  },
                  "start": 13819,
                  "end": 13825
                },
                "start": 13785,
                "end": 13826
              }
            ],
            "start": 13784,
            "end": 13827
          },
          "start": 13775,
          "end": 13827
        },
        "optional": false,
        "readonly": null,
        "start": 13728,
        "end": 13830
      },
      "declare": false,
      "start": 13654,
      "end": 13831
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypedObjectMembers",
        "optional": false,
        "typeAnnotation": null,
        "start": 13862,
        "end": 13880
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDef",
              "optional": false,
              "typeAnnotation": null,
              "start": 13881,
              "end": 13885
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FieldDefinition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13903,
                    "end": 13918
                  },
                  "typeArguments": null,
                  "start": 13903,
                  "end": 13918
                },
                "start": 13903,
                "end": 13920
              },
              "start": 13894,
              "end": 13920
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13881,
            "end": 13920
          }
        ],
        "start": 13880,
        "end": 13921
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 13959,
              "end": 13962
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 13963,
                    "end": 13964
                  },
                  "constraint": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TDef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13973,
                          "end": 13977
                        },
                        "typeArguments": null,
                        "start": 13973,
                        "end": 13977
                      },
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "start": 13978,
                        "end": 13984
                      },
                      "start": 13973,
                      "end": 13985
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "name",
                        "raw": "\"name\"",
                        "start": 13986,
                        "end": 13992
                      },
                      "start": 13986,
                      "end": 13992
                    },
                    "start": 13973,
                    "end": 13993
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 13963,
                  "end": 13993
                }
              ],
              "start": 13962,
              "end": 13994
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14000,
                      "end": 14001
                    },
                    "typeArguments": null,
                    "start": 14000,
                    "end": 14001
                  },
                  "start": 13998,
                  "end": 14001
                },
                "start": 13995,
                "end": 14001
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14004,
                  "end": 14013
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
                          "name": "Extract",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14014,
                          "end": 14021
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
                                  "name": "TDef",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14022,
                                  "end": 14026
                                },
                                "typeArguments": null,
                                "start": 14022,
                                "end": 14026
                              },
                              "indexType": {
                                "type": "TSNumberKeyword",
                                "start": 14027,
                                "end": 14033
                              },
                              "start": 14022,
                              "end": 14034
                            },
                            {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": true,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 14047,
                                    "end": 14051
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 14053,
                                        "end": 14054
                                      },
                                      "typeArguments": null,
                                      "start": 14053,
                                      "end": 14054
                                    },
                                    "start": 14051,
                                    "end": 14054
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 14038,
                                  "end": 14054
                                }
                              ],
                              "start": 14036,
                              "end": 14056
                            }
                          ],
                          "start": 14021,
                          "end": 14057
                        },
                        "start": 14014,
                        "end": 14057
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "type",
                          "raw": "\"type\"",
                          "start": 14058,
                          "end": 14064
                        },
                        "start": 14058,
                        "end": 14064
                      },
                      "start": 14014,
                      "end": 14065
                    }
                  ],
                  "start": 14013,
                  "end": 14066
                },
                "start": 14004,
                "end": 14066
              },
              "start": 14002,
              "end": 14066
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 13959,
            "end": 14067
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 14072,
              "end": 14075
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 14076,
                    "end": 14077
                  },
                  "constraint": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TDef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14086,
                          "end": 14090
                        },
                        "typeArguments": null,
                        "start": 14086,
                        "end": 14090
                      },
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "start": 14091,
                        "end": 14097
                      },
                      "start": 14086,
                      "end": 14098
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "name",
                        "raw": "\"name\"",
                        "start": 14099,
                        "end": 14105
                      },
                      "start": 14099,
                      "end": 14105
                    },
                    "start": 14086,
                    "end": 14106
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 14076,
                  "end": 14106
                }
              ],
              "start": 14075,
              "end": 14107
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14113,
                      "end": 14114
                    },
                    "typeArguments": null,
                    "start": 14113,
                    "end": 14114
                  },
                  "start": 14111,
                  "end": 14114
                },
                "start": 14108,
                "end": 14114
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
                      "name": "FieldType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14123,
                      "end": 14132
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
                              "name": "Extract",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14133,
                              "end": 14140
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
                                      "name": "TDef",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 14141,
                                      "end": 14145
                                    },
                                    "typeArguments": null,
                                    "start": 14141,
                                    "end": 14145
                                  },
                                  "indexType": {
                                    "type": "TSNumberKeyword",
                                    "start": 14146,
                                    "end": 14152
                                  },
                                  "start": 14141,
                                  "end": 14153
                                },
                                {
                                  "type": "TSTypeLiteral",
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "computed": false,
                                      "optional": false,
                                      "readonly": true,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 14166,
                                        "end": 14170
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "K",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 14172,
                                            "end": 14173
                                          },
                                          "typeArguments": null,
                                          "start": 14172,
                                          "end": 14173
                                        },
                                        "start": 14170,
                                        "end": 14173
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 14157,
                                      "end": 14173
                                    }
                                  ],
                                  "start": 14155,
                                  "end": 14175
                                }
                              ],
                              "start": 14140,
                              "end": 14176
                            },
                            "start": 14133,
                            "end": 14176
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "type",
                              "raw": "\"type\"",
                              "start": 14177,
                              "end": 14183
                            },
                            "start": 14177,
                            "end": 14183
                          },
                          "start": 14133,
                          "end": 14184
                        }
                      ],
                      "start": 14132,
                      "end": 14185
                    },
                    "start": 14123,
                    "end": 14185
                  },
                  "start": 14121,
                  "end": 14185
                },
                "start": 14116,
                "end": 14185
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 14188,
                "end": 14192
              },
              "start": 14186,
              "end": 14192
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 14072,
            "end": 14193
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 14231,
              "end": 14239
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14240,
                    "end": 14241
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IndicesOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14250,
                      "end": 14259
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TDef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14260,
                            "end": 14264
                          },
                          "typeArguments": null,
                          "start": 14260,
                          "end": 14264
                        }
                      ],
                      "start": 14259,
                      "end": 14265
                    },
                    "start": 14250,
                    "end": 14265
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 14240,
                  "end": 14265
                }
              ],
              "start": 14239,
              "end": 14266
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14274,
                      "end": 14275
                    },
                    "typeArguments": null,
                    "start": 14274,
                    "end": 14275
                  },
                  "start": 14272,
                  "end": 14275
                },
                "start": 14267,
                "end": 14275
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14278,
                  "end": 14287
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
                          "name": "Extract",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14288,
                          "end": 14295
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
                                  "name": "TDef",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14296,
                                  "end": 14300
                                },
                                "typeArguments": null,
                                "start": 14296,
                                "end": 14300
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 14301,
                                  "end": 14302
                                },
                                "typeArguments": null,
                                "start": 14301,
                                "end": 14302
                              },
                              "start": 14296,
                              "end": 14303
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "FieldDefinition",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14305,
                                "end": 14320
                              },
                              "typeArguments": null,
                              "start": 14305,
                              "end": 14320
                            }
                          ],
                          "start": 14295,
                          "end": 14321
                        },
                        "start": 14288,
                        "end": 14321
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "type",
                          "raw": "\"type\"",
                          "start": 14322,
                          "end": 14328
                        },
                        "start": 14322,
                        "end": 14328
                      },
                      "start": 14288,
                      "end": 14329
                    }
                  ],
                  "start": 14287,
                  "end": 14330
                },
                "start": 14278,
                "end": 14330
              },
              "start": 14276,
              "end": 14330
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 14231,
            "end": 14331
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 14336,
              "end": 14344
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14345,
                    "end": 14346
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IndicesOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14355,
                      "end": 14364
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TDef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14365,
                            "end": 14369
                          },
                          "typeArguments": null,
                          "start": 14365,
                          "end": 14369
                        }
                      ],
                      "start": 14364,
                      "end": 14370
                    },
                    "start": 14355,
                    "end": 14370
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 14345,
                  "end": 14370
                }
              ],
              "start": 14344,
              "end": 14371
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14379,
                      "end": 14380
                    },
                    "typeArguments": null,
                    "start": 14379,
                    "end": 14380
                  },
                  "start": 14377,
                  "end": 14380
                },
                "start": 14372,
                "end": 14380
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
                      "name": "FieldType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14389,
                      "end": 14398
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
                              "name": "Extract",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14399,
                              "end": 14406
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
                                      "name": "TDef",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 14407,
                                      "end": 14411
                                    },
                                    "typeArguments": null,
                                    "start": 14407,
                                    "end": 14411
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 14412,
                                      "end": 14413
                                    },
                                    "typeArguments": null,
                                    "start": 14412,
                                    "end": 14413
                                  },
                                  "start": 14407,
                                  "end": 14414
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FieldDefinition",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 14416,
                                    "end": 14431
                                  },
                                  "typeArguments": null,
                                  "start": 14416,
                                  "end": 14431
                                }
                              ],
                              "start": 14406,
                              "end": 14432
                            },
                            "start": 14399,
                            "end": 14432
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "type",
                              "raw": "\"type\"",
                              "start": 14433,
                              "end": 14439
                            },
                            "start": 14433,
                            "end": 14439
                          },
                          "start": 14399,
                          "end": 14440
                        }
                      ],
                      "start": 14398,
                      "end": 14441
                    },
                    "start": 14389,
                    "end": 14441
                  },
                  "start": 14387,
                  "end": 14441
                },
                "start": 14382,
                "end": 14441
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 14444,
                "end": 14448
              },
              "start": 14442,
              "end": 14448
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 14336,
            "end": 14449
          }
        ],
        "start": 13922,
        "end": 14451
      },
      "declare": false,
      "start": 13852,
      "end": 14451
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypedObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 14458,
        "end": 14469
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDef",
              "optional": false,
              "typeAnnotation": null,
              "start": 14470,
              "end": 14474
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FieldDefinition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14492,
                    "end": 14507
                  },
                  "typeArguments": null,
                  "start": 14492,
                  "end": 14507
                },
                "start": 14492,
                "end": 14509
              },
              "start": 14483,
              "end": 14509
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14470,
            "end": 14509
          }
        ],
        "start": 14469,
        "end": 14510
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypedObjectMembers",
              "optional": false,
              "typeAnnotation": null,
              "start": 14519,
              "end": 14537
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDef",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14538,
                    "end": 14542
                  },
                  "typeArguments": null,
                  "start": 14538,
                  "end": 14542
                }
              ],
              "start": 14537,
              "end": 14543
            },
            "start": 14519,
            "end": 14543
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypedObjectNamedMembers",
              "optional": false,
              "typeAnnotation": null,
              "start": 14550,
              "end": 14573
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDef",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14574,
                    "end": 14578
                  },
                  "typeArguments": null,
                  "start": 14574,
                  "end": 14578
                }
              ],
              "start": 14573,
              "end": 14579
            },
            "start": 14550,
            "end": 14579
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypedObjectOrdinalMembers",
              "optional": false,
              "typeAnnotation": null,
              "start": 14586,
              "end": 14611
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDef",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14612,
                    "end": 14616
                  },
                  "typeArguments": null,
                  "start": 14612,
                  "end": 14616
                }
              ],
              "start": 14611,
              "end": 14617
            },
            "start": 14586,
            "end": 14617
          }
        ],
        "start": 14517,
        "end": 14617
      },
      "declare": false,
      "start": 14453,
      "end": 14618
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 14755,
        "end": 14760
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypedObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 14763,
          "end": 14774
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14783,
                        "end": 14787
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 14789,
                            "end": 14792
                          },
                          "start": 14789,
                          "end": 14792
                        },
                        "start": 14787,
                        "end": 14792
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 14783,
                      "end": 14793
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
                        "start": 14794,
                        "end": 14798
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "f64",
                            "raw": "\"f64\"",
                            "start": 14800,
                            "end": 14805
                          },
                          "start": 14800,
                          "end": 14805
                        },
                        "start": 14798,
                        "end": 14805
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 14794,
                      "end": 14805
                    }
                  ],
                  "start": 14781,
                  "end": 14807
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14815,
                        "end": 14819
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 14821,
                            "end": 14824
                          },
                          "start": 14821,
                          "end": 14824
                        },
                        "start": 14819,
                        "end": 14824
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 14815,
                      "end": 14825
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
                        "start": 14826,
                        "end": 14830
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "f64",
                            "raw": "\"f64\"",
                            "start": 14832,
                            "end": 14837
                          },
                          "start": 14832,
                          "end": 14837
                        },
                        "start": 14830,
                        "end": 14837
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 14826,
                      "end": 14837
                    }
                  ],
                  "start": 14813,
                  "end": 14839
                }
              ],
              "start": 14775,
              "end": 14842
            }
          ],
          "start": 14774,
          "end": 14843
        },
        "start": 14763,
        "end": 14843
      },
      "declare": false,
      "start": 14750,
      "end": 14844
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14863,
                  "end": 14868
                },
                "typeArguments": null,
                "start": 14863,
                "end": 14868
              },
              "start": 14861,
              "end": 14868
            },
            "start": 14860,
            "end": 14868
          },
          "init": null,
          "definite": false,
          "start": 14860,
          "end": 14868
        }
      ],
      "declare": true,
      "start": 14846,
      "end": 14869
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 14870,
            "end": 14871
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 14872,
            "end": 14880
          },
          "optional": false,
          "computed": false,
          "start": 14870,
          "end": 14880
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 14881,
            "end": 14882
          }
        ],
        "optional": false,
        "start": 14870,
        "end": 14883
      },
      "directive": null,
      "start": 14870,
      "end": 14884
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 14911,
            "end": 14912
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 14913,
            "end": 14921
          },
          "optional": false,
          "computed": false,
          "start": 14911,
          "end": 14921
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 14922,
            "end": 14923
          }
        ],
        "optional": false,
        "start": 14911,
        "end": 14924
      },
      "directive": null,
      "start": 14911,
      "end": 14925
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 14952,
            "end": 14953
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 14954,
            "end": 14962
          },
          "optional": false,
          "computed": false,
          "start": 14952,
          "end": 14962
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 14963,
            "end": 14964
          }
        ],
        "optional": false,
        "start": 14952,
        "end": 14965
      },
      "directive": null,
      "start": 14952,
      "end": 14966
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 15001,
            "end": 15002
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 15003,
            "end": 15011
          },
          "optional": false,
          "computed": false,
          "start": 15001,
          "end": 15011
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 15012,
            "end": 15013
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 15015,
            "end": 15016
          }
        ],
        "optional": false,
        "start": 15001,
        "end": 15017
      },
      "directive": null,
      "start": 15001,
      "end": 15018
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 15045,
            "end": 15046
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 15047,
            "end": 15055
          },
          "optional": false,
          "computed": false,
          "start": 15045,
          "end": 15055
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 15056,
            "end": 15057
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 15059,
            "end": 15060
          }
        ],
        "optional": false,
        "start": 15045,
        "end": 15061
      },
      "directive": null,
      "start": 15045,
      "end": 15062
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 15089,
            "end": 15090
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 15091,
            "end": 15099
          },
          "optional": false,
          "computed": false,
          "start": 15089,
          "end": 15099
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 15100,
            "end": 15101
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 15103,
            "end": 15104
          }
        ],
        "optional": false,
        "start": 15089,
        "end": 15105
      },
      "directive": null,
      "start": 15089,
      "end": 15106
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15180,
        "end": 15182
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
              "start": 15183,
              "end": 15184
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 15193,
                  "end": 15199
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 15202,
                  "end": 15208
                }
              ],
              "start": 15193,
              "end": 15208
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15183,
            "end": 15208
          }
        ],
        "start": 15182,
        "end": 15209
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 15213,
                  "end": 15218
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 15219,
                  "end": 15223
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15218,
                    "end": 15219
                  },
                  "typeArguments": null,
                  "start": 15218,
                  "end": 15219
                }
              ],
              "start": 15213,
              "end": 15223
            },
            "start": 15211,
            "end": 15223
          },
          "start": 15210,
          "end": 15223
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
            "start": 15226,
            "end": 15227
          },
          "typeArguments": null,
          "start": 15226,
          "end": 15227
        },
        "start": 15224,
        "end": 15227
      },
      "body": null,
      "expression": false,
      "start": 15163,
      "end": 15228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 15229,
          "end": 15231
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "**123**",
            "raw": "\"**123**\"",
            "start": 15232,
            "end": 15241
          }
        ],
        "optional": false,
        "start": 15229,
        "end": 15242
      },
      "directive": null,
      "start": 15229,
      "end": 15243
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 15271,
        "end": 15273
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
              "start": 15274,
              "end": 15275
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 15284,
              "end": 15290
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15274,
            "end": 15290
          }
        ],
        "start": 15273,
        "end": 15291
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 15295,
                  "end": 15300
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 15301,
                  "end": 15305
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15300,
                    "end": 15301
                  },
                  "typeArguments": null,
                  "start": 15300,
                  "end": 15301
                }
              ],
              "start": 15295,
              "end": 15305
            },
            "start": 15293,
            "end": 15305
          },
          "start": 15292,
          "end": 15305
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
            "start": 15308,
            "end": 15309
          },
          "typeArguments": null,
          "start": 15308,
          "end": 15309
        },
        "start": 15306,
        "end": 15309
      },
      "body": null,
      "expression": false,
      "start": 15254,
      "end": 15310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 15311,
          "end": 15313
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "**123**",
            "raw": "\"**123**\"",
            "start": 15314,
            "end": 15323
          }
        ],
        "optional": false,
        "start": 15311,
        "end": 15324
      },
      "directive": null,
      "start": 15311,
      "end": 15325
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 15351,
        "end": 15353
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
              "start": 15354,
              "end": 15355
            },
            "constraint": {
              "type": "TSBigIntKeyword",
              "start": 15364,
              "end": 15370
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15354,
            "end": 15370
          }
        ],
        "start": 15353,
        "end": 15371
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 15375,
                  "end": 15380
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 15381,
                  "end": 15385
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15380,
                    "end": 15381
                  },
                  "typeArguments": null,
                  "start": 15380,
                  "end": 15381
                }
              ],
              "start": 15375,
              "end": 15385
            },
            "start": 15373,
            "end": 15385
          },
          "start": 15372,
          "end": 15385
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
            "start": 15388,
            "end": 15389
          },
          "typeArguments": null,
          "start": 15388,
          "end": 15389
        },
        "start": 15386,
        "end": 15389
      },
      "body": null,
      "expression": false,
      "start": 15334,
      "end": 15390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 15391,
          "end": 15393
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "**123**",
            "raw": "\"**123**\"",
            "start": 15394,
            "end": 15403
          }
        ],
        "optional": false,
        "start": 15391,
        "end": 15404
      },
      "directive": null,
      "start": 15391,
      "end": 15405
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 15432,
        "end": 15434
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
              "start": 15435,
              "end": 15436
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 15445,
              "end": 15452
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15435,
            "end": 15452
          }
        ],
        "start": 15434,
        "end": 15453
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false,
                  "start": 15457,
                  "end": 15462
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true,
                  "start": 15463,
                  "end": 15467
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15462,
                    "end": 15463
                  },
                  "typeArguments": null,
                  "start": 15462,
                  "end": 15463
                }
              ],
              "start": 15457,
              "end": 15467
            },
            "start": 15455,
            "end": 15467
          },
          "start": 15454,
          "end": 15467
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
            "start": 15470,
            "end": 15471
          },
          "typeArguments": null,
          "start": 15470,
          "end": 15471
        },
        "start": 15468,
        "end": 15471
      },
      "body": null,
      "expression": false,
      "start": 15415,
      "end": 15472
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 15473,
          "end": 15475
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "**true**",
            "raw": "\"**true**\"",
            "start": 15476,
            "end": 15486
          }
        ],
        "optional": false,
        "start": 15473,
        "end": 15487
      },
      "directive": null,
      "start": 15473,
      "end": 15488
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 15506,
          "end": 15508
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "**false**",
            "raw": "\"**false**\"",
            "start": 15509,
            "end": 15520
          }
        ],
        "optional": false,
        "start": 15506,
        "end": 15521
      },
      "directive": null,
      "start": 15506,
      "end": 15522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 15541
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 21,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "TNumber0",
    "start": 26,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"100\"",
    "start": 37,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 43,
    "end": 50
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 62,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 70,
    "end": 76
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "TNumber1",
    "start": 104,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"-100\"",
    "start": 115,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 122,
    "end": 129
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 141,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 149,
    "end": 155
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 179,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "TNumber2",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"1.1\"",
    "start": 195,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 201,
    "end": 208
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 220,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 228,
    "end": 234
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 257,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "TNumber3",
    "start": 262,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "String",
    "value": "\"8e-11\"",
    "start": 273,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 281,
    "end": 288
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 289,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 292,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 300,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 308,
    "end": 314
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 355,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "TNumber4",
    "start": 360,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "\"0x10\"",
    "start": 371,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 378,
    "end": 385
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 386,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 389,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 397,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 405,
    "end": 411
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 420,
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
    "start": 459,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "TNumber5",
    "start": 464,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "String",
    "value": "\"0o10\"",
    "start": 475,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 482,
    "end": 489
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 493,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 501,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 509,
    "end": 515
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 563,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "TNumber6",
    "start": 568,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "String",
    "value": "\"0b10\"",
    "start": 579,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 586,
    "end": 593
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 597,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 605,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 613,
    "end": 619
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 619,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 628,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 667,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "TNumber7",
    "start": 672,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "String",
    "value": "\"10e2\"",
    "start": 683,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 690,
    "end": 697
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 698,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 701,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 709,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 717,
    "end": 723
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 732,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 771,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "TNumber8",
    "start": 776,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "String",
    "value": "\"abcd\"",
    "start": 787,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 794,
    "end": 801
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 802,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 805,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 813,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 821,
    "end": 827
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 827,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 836,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 874,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "TBigInt0",
    "start": 879,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 888,
    "end": 889
  },
  {
    "type": "String",
    "value": "\"100\"",
    "start": 890,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 896,
    "end": 903
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 907,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 915,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 923,
    "end": 929
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 929,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 938,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 953,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "TBigInt1",
    "start": 958,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968
  },
  {
    "type": "String",
    "value": "\"-100\"",
    "start": 969,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 976,
    "end": 983
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 984,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 987,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 995,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1018,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "TBigInt2",
    "start": 1039,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "String",
    "value": "\"0x10\"",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1057,
    "end": 1064
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1076,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1099,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1138,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "TBigInt3",
    "start": 1143,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "String",
    "value": "\"0o10\"",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1172,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1180,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1188,
    "end": 1194
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1194,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1203,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1242,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "TBigInt4",
    "start": 1247,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "String",
    "value": "\"0b10\"",
    "start": 1258,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1265,
    "end": 1272
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1276,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1284,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1292,
    "end": 1298
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1298,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1307,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1346,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "TBigInt5",
    "start": 1351,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "String",
    "value": "\"1.1\"",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1368,
    "end": 1375
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1379,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1387,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1395,
    "end": 1401
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1401,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1410,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1426,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "TBigInt6",
    "start": 1431,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "String",
    "value": "\"10e2\"",
    "start": 1442,
    "end": 1448
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1449,
    "end": 1456
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1457,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1460,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1468,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1476,
    "end": 1482
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1482,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1491,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1507,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "TBigInt7",
    "start": 1512,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "String",
    "value": "\"abcd\"",
    "start": 1523,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1530,
    "end": 1537
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1538,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1541,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1549,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1557,
    "end": 1563
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1563,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1572,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1611,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "TBoolean0",
    "start": 1616,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 1628,
    "end": 1634
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1635,
    "end": 1642
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1643,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1646,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "boolean",
    "start": 1662,
    "end": 1669
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1669,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1678,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1693,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "TBoolean1",
    "start": 1698,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 1710,
    "end": 1717
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1726,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1729,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1737,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1745,
    "end": 1752
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1761,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1777,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "TBoolean2",
    "start": 1782,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "String",
    "value": "\"abcd\"",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1801,
    "end": 1808
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1809,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1812,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1820,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1828,
    "end": 1835
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1835,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1844,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1880,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "TNull0",
    "start": 1885,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 1894,
    "end": 1900
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1901,
    "end": 1908
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1909,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1912,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1920,
    "end": 1927
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1928,
    "end": 1932
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1932,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1941,
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
    "value": "type",
    "start": 1956,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "TNull1",
    "start": 1961,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "String",
    "value": "\"abcd\"",
    "start": 1970,
    "end": 1976
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1977,
    "end": 1984
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1988,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1996,
    "end": 2003
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2004,
    "end": 2008
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2008,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2017,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2058,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "TUndefined0",
    "start": 2063,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 2077,
    "end": 2088
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2089,
    "end": 2096
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2097,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2100,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2108,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2116,
    "end": 2125
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2125,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2134,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2154,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "TUndefined1",
    "start": 2159,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "String",
    "value": "\"abcd\"",
    "start": 2173,
    "end": 2179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2180,
    "end": 2187
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2191,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2199,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2207,
    "end": 2216
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2216,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2225,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2270,
    "end": 2275
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2276,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 2281,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 2301,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 2308,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "True",
    "start": 2313,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 2320,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "False",
    "start": 2328,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 2336,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "Undefined",
    "start": 2345,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 2357,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "Null",
    "start": 2370,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 2377,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2386,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "TStringLiteralEnum0",
    "start": 2391,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 2413,
    "end": 2416
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2417,
    "end": 2424
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2425,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2428,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2436,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 2444,
    "end": 2461
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2461,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2470,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2504,
    "end": 2509
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2510,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 2515,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 2535,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 2541,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2547,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "TNumberLiteralEnum0",
    "start": 2552,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 2574,
    "end": 2577
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2578,
    "end": 2585
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2586,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2589,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2597,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 2605,
    "end": 2622
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2622,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2631,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2697,
    "end": 2702
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2703,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 2708,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 2725,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 2732,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 2750,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 2756,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 2762,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 2780,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2786,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "TNonLiteralEnum0",
    "start": 2791,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 2810,
    "end": 2813
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2814,
    "end": 2821
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2822,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2825,
    "end": 2830
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2833,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 2841,
    "end": 2855
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2855,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2864,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3181,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "PString00",
    "start": 3186,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 3198,
    "end": 3201
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3202,
    "end": 3209
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3210,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3213,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3221,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3229,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 3238,
    "end": 3255
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3255,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3264,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3298,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "PString01",
    "start": 3303,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 3315,
    "end": 3318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3319,
    "end": 3326
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3327,
    "end": 3330
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3330,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3338,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3346,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3355,
    "end": 3361
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3361,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3370,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3402,
    "end": 3406
  },
  {
    "type": "Identifier",
    "value": "PString02",
    "start": 3407,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 3419,
    "end": 3422
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3423,
    "end": 3430
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3431,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3434,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3442,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3450,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 3459,
    "end": 3473
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3473,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3482,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3548,
    "end": 3552
  },
  {
    "type": "Identifier",
    "value": "PString03",
    "start": 3553,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 3565,
    "end": 3568
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3569,
    "end": 3576
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3577,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3580,
    "end": 3585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3588,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3596,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3606,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3615,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3629,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "PString04",
    "start": 3634,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 3646,
    "end": 3649
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3650,
    "end": 3657
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3658,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3661,
    "end": 3666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3669,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3677,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 3686,
    "end": 3703
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3703,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3712,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3746,
    "end": 3750
  },
  {
    "type": "Identifier",
    "value": "PString05",
    "start": 3751,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 3763,
    "end": 3766
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3767,
    "end": 3774
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3775,
    "end": 3778
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3778,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3786,
    "end": 3793
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3794,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 3803,
    "end": 3809
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3809,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3818,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3860,
    "end": 3864
  },
  {
    "type": "Identifier",
    "value": "PString06",
    "start": 3865,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 3877,
    "end": 3880
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3881,
    "end": 3888
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3889,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3892,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3898,
    "end": 3899
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3900,
    "end": 3907
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3908,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 3917,
    "end": 3919
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3919,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3928,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3963,
    "end": 3967
  },
  {
    "type": "Identifier",
    "value": "PString07",
    "start": 3968,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 3980,
    "end": 3986
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3987,
    "end": 3994
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3995,
    "end": 3998
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3998,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4006,
    "end": 4013
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4014,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4023,
    "end": 4030
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4030,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4039,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4056,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "PString08",
    "start": 4061,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 4073,
    "end": 4080
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4081,
    "end": 4088
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4089,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4092,
    "end": 4097
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4100,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4108,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4117,
    "end": 4124
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4124,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4133,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4201,
    "end": 4205
  },
  {
    "type": "Identifier",
    "value": "PString09",
    "start": 4206,
    "end": 4215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 4218,
    "end": 4224
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4225,
    "end": 4232
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4233,
    "end": 4236
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4236,
    "end": 4241
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4244,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4252,
    "end": 4258
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4261,
    "end": 4265
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4265,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4270,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4274,
    "end": 4279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4291,
    "end": 4295
  },
  {
    "type": "Identifier",
    "value": "PString10",
    "start": 4296,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 4308,
    "end": 4315
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4316,
    "end": 4323
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4324,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4327,
    "end": 4332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4335,
    "end": 4342
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4343,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4352,
    "end": 4357
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4357,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4364,
    "end": 4365
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4366,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4384,
    "end": 4388
  },
  {
    "type": "Identifier",
    "value": "PString11",
    "start": 4389,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 4401,
    "end": 4412
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4413,
    "end": 4420
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4421,
    "end": 4424
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4424,
    "end": 4429
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4432,
    "end": 4439
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4440,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4449,
    "end": 4458
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4458,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4467,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4489,
    "end": 4493
  },
  {
    "type": "Identifier",
    "value": "PString12",
    "start": 4494,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4504,
    "end": 4505
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 4506,
    "end": 4512
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4513,
    "end": 4520
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4521,
    "end": 4524
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4524,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4532,
    "end": 4539
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4540,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4549,
    "end": 4553
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4553,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4562,
    "end": 4567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4567,
    "end": 4568
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4658,
    "end": 4662
  },
  {
    "type": "Identifier",
    "value": "PTemplate00",
    "start": 4663,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 4677,
    "end": 4681
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4682,
    "end": 4689
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4690,
    "end": 4693
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4693,
    "end": 4698
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4701,
    "end": 4708
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 4709,
    "end": 4713
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4713,
    "end": 4719
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4719,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4724,
    "end": 4730
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4730,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4735,
    "end": 4736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4739,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4782,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "PTemplate01",
    "start": 4787,
    "end": 4798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 4801,
    "end": 4805
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4806,
    "end": 4813
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4814,
    "end": 4817
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4817,
    "end": 4822
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4823,
    "end": 4824
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4825,
    "end": 4832
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 4833,
    "end": 4837
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4837,
    "end": 4843
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4843,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4846,
    "end": 4847
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 4848,
    "end": 4862
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4862,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4865,
    "end": 4866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4869,
    "end": 4870
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4871,
    "end": 4876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4876,
    "end": 4877
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4948,
    "end": 4952
  },
  {
    "type": "Identifier",
    "value": "PTemplate02",
    "start": 4953,
    "end": 4964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 4967,
    "end": 4971
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4972,
    "end": 4979
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4980,
    "end": 4983
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4983,
    "end": 4988
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4989,
    "end": 4990
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4991,
    "end": 4998
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 4999,
    "end": 5003
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5003,
    "end": 5009
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5009,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 5014,
    "end": 5016
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5016,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5025,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5040,
    "end": 5044
  },
  {
    "type": "Identifier",
    "value": "PTemplate03",
    "start": 5045,
    "end": 5056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 5059,
    "end": 5063
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5064,
    "end": 5071
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5072,
    "end": 5075
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5075,
    "end": 5080
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5083,
    "end": 5090
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 5091,
    "end": 5095
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5095,
    "end": 5101
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5101,
    "end": 5103
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 5106,
    "end": 5123
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5123,
    "end": 5125
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5126,
    "end": 5127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5132,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5177,
    "end": 5181
  },
  {
    "type": "Identifier",
    "value": "PTemplate04",
    "start": 5182,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5194,
    "end": 5195
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 5196,
    "end": 5200
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5201,
    "end": 5208
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5209,
    "end": 5212
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5212,
    "end": 5217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5220,
    "end": 5227
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 5228,
    "end": 5232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5232,
    "end": 5238
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5238,
    "end": 5240
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5241,
    "end": 5242
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 5243,
    "end": 5249
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5249,
    "end": 5251
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5254,
    "end": 5255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5256,
    "end": 5257
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5258,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5311,
    "end": 5315
  },
  {
    "type": "Identifier",
    "value": "PTemplate05",
    "start": 5316,
    "end": 5327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5328,
    "end": 5329
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 5330,
    "end": 5334
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5335,
    "end": 5342
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5343,
    "end": 5346
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5346,
    "end": 5351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5352,
    "end": 5353
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5354,
    "end": 5361
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 5362,
    "end": 5366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5366,
    "end": 5372
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5372,
    "end": 5374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5375,
    "end": 5376
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 5377,
    "end": 5380
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5380,
    "end": 5382
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5383,
    "end": 5384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5385,
    "end": 5386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5387,
    "end": 5388
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5389,
    "end": 5394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5394,
    "end": 5395
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5435,
    "end": 5439
  },
  {
    "type": "Identifier",
    "value": "PTemplate06",
    "start": 5440,
    "end": 5451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5452,
    "end": 5453
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 5454,
    "end": 5460
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5461,
    "end": 5468
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5469,
    "end": 5472
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5472,
    "end": 5477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5478,
    "end": 5479
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5480,
    "end": 5487
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5488,
    "end": 5491
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5491,
    "end": 5497
  },
  {
    "type": "Template",
    "value": "}e`",
    "start": 5497,
    "end": 5500
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5503,
    "end": 5510
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5510,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5513,
    "end": 5514
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5515,
    "end": 5516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5517,
    "end": 5518
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5519,
    "end": 5524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5524,
    "end": 5525
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5536,
    "end": 5540
  },
  {
    "type": "Identifier",
    "value": "PTemplate07",
    "start": 5541,
    "end": 5552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 5555,
    "end": 5562
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5563,
    "end": 5570
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5571,
    "end": 5574
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5574,
    "end": 5579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5580,
    "end": 5581
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5582,
    "end": 5589
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5590,
    "end": 5593
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5593,
    "end": 5599
  },
  {
    "type": "Template",
    "value": "}e`",
    "start": 5599,
    "end": 5602
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5603,
    "end": 5604
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5605,
    "end": 5612
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5612,
    "end": 5614
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5615,
    "end": 5616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5617,
    "end": 5618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5619,
    "end": 5620
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5621,
    "end": 5626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5626,
    "end": 5627
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5699,
    "end": 5703
  },
  {
    "type": "Identifier",
    "value": "PTemplate08",
    "start": 5704,
    "end": 5715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5716,
    "end": 5717
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 5718,
    "end": 5724
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5725,
    "end": 5732
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5733,
    "end": 5736
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5736,
    "end": 5741
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5742,
    "end": 5743
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5744,
    "end": 5751
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5752,
    "end": 5755
  },
  {
    "type": "String",
    "value": "\"t\"",
    "start": 5755,
    "end": 5758
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 5758,
    "end": 5761
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5761,
    "end": 5767
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5767,
    "end": 5769
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5770,
    "end": 5771
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5772,
    "end": 5776
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5776,
    "end": 5778
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5779,
    "end": 5780
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5781,
    "end": 5782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5783,
    "end": 5784
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5785,
    "end": 5790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5802,
    "end": 5806
  },
  {
    "type": "Identifier",
    "value": "PTemplate09",
    "start": 5807,
    "end": 5818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5819,
    "end": 5820
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 5821,
    "end": 5828
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5829,
    "end": 5836
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5837,
    "end": 5840
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5840,
    "end": 5845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5846,
    "end": 5847
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5848,
    "end": 5855
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5856,
    "end": 5859
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 5859,
    "end": 5862
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 5862,
    "end": 5865
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5865,
    "end": 5871
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5871,
    "end": 5873
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5874,
    "end": 5875
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 5876,
    "end": 5881
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5881,
    "end": 5883
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5884,
    "end": 5885
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5886,
    "end": 5887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5888,
    "end": 5889
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5890,
    "end": 5895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5895,
    "end": 5896
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5908,
    "end": 5912
  },
  {
    "type": "Identifier",
    "value": "PTemplate10",
    "start": 5913,
    "end": 5924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5925,
    "end": 5926
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 5927,
    "end": 5938
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5939,
    "end": 5946
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5947,
    "end": 5950
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5950,
    "end": 5955
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5956,
    "end": 5957
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5958,
    "end": 5965
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5966,
    "end": 5969
  },
  {
    "type": "String",
    "value": "\"u\"",
    "start": 5969,
    "end": 5972
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 5972,
    "end": 5975
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5975,
    "end": 5981
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5981,
    "end": 5983
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5984,
    "end": 5985
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5986,
    "end": 5995
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5995,
    "end": 5997
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6000,
    "end": 6001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6002,
    "end": 6003
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6004,
    "end": 6009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6009,
    "end": 6010
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6026,
    "end": 6030
  },
  {
    "type": "Identifier",
    "value": "PTemplate11",
    "start": 6031,
    "end": 6042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6043,
    "end": 6044
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 6045,
    "end": 6051
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6052,
    "end": 6059
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6060,
    "end": 6063
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6063,
    "end": 6068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6069,
    "end": 6070
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6071,
    "end": 6078
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6079,
    "end": 6082
  },
  {
    "type": "String",
    "value": "\"n\"",
    "start": 6082,
    "end": 6085
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 6085,
    "end": 6088
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6088,
    "end": 6094
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6094,
    "end": 6096
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6097,
    "end": 6098
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6099,
    "end": 6103
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6103,
    "end": 6105
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6106,
    "end": 6107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6108,
    "end": 6109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6110,
    "end": 6111
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6112,
    "end": 6117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6117,
    "end": 6118
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6214,
    "end": 6218
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral00",
    "start": 6219,
    "end": 6235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6236,
    "end": 6237
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6238,
    "end": 6241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6242,
    "end": 6249
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6250,
    "end": 6253
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6253,
    "end": 6258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6259,
    "end": 6260
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6261,
    "end": 6268
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6269,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6273,
    "end": 6274
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6275,
    "end": 6281
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6281,
    "end": 6283
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6284,
    "end": 6285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6286,
    "end": 6287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6288,
    "end": 6289
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6290,
    "end": 6295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6295,
    "end": 6296
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6330,
    "end": 6334
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral01",
    "start": 6335,
    "end": 6351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6352,
    "end": 6353
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6354,
    "end": 6357
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6358,
    "end": 6365
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6366,
    "end": 6369
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6369,
    "end": 6374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6375,
    "end": 6376
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6377,
    "end": 6384
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6385,
    "end": 6388
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6389,
    "end": 6390
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 6391,
    "end": 6405
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6405,
    "end": 6407
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6408,
    "end": 6409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6410,
    "end": 6411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6412,
    "end": 6413
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6414,
    "end": 6419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6419,
    "end": 6420
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6488,
    "end": 6492
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral02",
    "start": 6493,
    "end": 6509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6510,
    "end": 6511
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6512,
    "end": 6515
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6516,
    "end": 6523
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6524,
    "end": 6527
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6527,
    "end": 6532
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6533,
    "end": 6534
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6535,
    "end": 6542
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6543,
    "end": 6546
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6547,
    "end": 6548
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6549,
    "end": 6550
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6550,
    "end": 6552
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6553,
    "end": 6554
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6555,
    "end": 6556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6557,
    "end": 6558
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6559,
    "end": 6564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6564,
    "end": 6565
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6573,
    "end": 6577
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral03",
    "start": 6578,
    "end": 6594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6595,
    "end": 6596
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6597,
    "end": 6600
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6601,
    "end": 6608
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6609,
    "end": 6612
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6612,
    "end": 6617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6618,
    "end": 6619
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6620,
    "end": 6627
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6628,
    "end": 6631
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6632,
    "end": 6633
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 6634,
    "end": 6651
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6651,
    "end": 6653
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6654,
    "end": 6655
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6656,
    "end": 6657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6658,
    "end": 6659
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6660,
    "end": 6665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6665,
    "end": 6666
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6702,
    "end": 6706
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral04",
    "start": 6707,
    "end": 6723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6724,
    "end": 6725
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6726,
    "end": 6729
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6730,
    "end": 6737
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6738,
    "end": 6741
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6741,
    "end": 6746
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6747,
    "end": 6748
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6749,
    "end": 6756
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6757,
    "end": 6760
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6761,
    "end": 6762
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 6763,
    "end": 6769
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6769,
    "end": 6771
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6772,
    "end": 6773
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6774,
    "end": 6775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6776,
    "end": 6777
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6778,
    "end": 6783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6783,
    "end": 6784
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6828,
    "end": 6832
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral05",
    "start": 6833,
    "end": 6849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6850,
    "end": 6851
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6852,
    "end": 6855
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6856,
    "end": 6863
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6864,
    "end": 6867
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6867,
    "end": 6872
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6873,
    "end": 6874
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6875,
    "end": 6882
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 6883,
    "end": 6886
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6887,
    "end": 6888
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 6889,
    "end": 6891
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6891,
    "end": 6893
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6894,
    "end": 6895
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6896,
    "end": 6897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6898,
    "end": 6899
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6900,
    "end": 6905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6905,
    "end": 6906
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6943,
    "end": 6947
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral06",
    "start": 6948,
    "end": 6964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6965,
    "end": 6966
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 6967,
    "end": 6973
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6974,
    "end": 6981
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6982,
    "end": 6985
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 6985,
    "end": 6990
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6991,
    "end": 6992
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6993,
    "end": 7000
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 7001,
    "end": 7007
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7008,
    "end": 7009
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 7010,
    "end": 7017
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7018,
    "end": 7019
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7020,
    "end": 7027
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7027,
    "end": 7029
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7030,
    "end": 7031
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7032,
    "end": 7033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7034,
    "end": 7035
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7036,
    "end": 7041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7041,
    "end": 7042
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7053,
    "end": 7057
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral07",
    "start": 7058,
    "end": 7074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7075,
    "end": 7076
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 7077,
    "end": 7084
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7085,
    "end": 7092
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7093,
    "end": 7096
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 7096,
    "end": 7101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7102,
    "end": 7103
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7104,
    "end": 7111
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 7112,
    "end": 7118
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7119,
    "end": 7120
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 7121,
    "end": 7128
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7129,
    "end": 7130
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7131,
    "end": 7138
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7138,
    "end": 7140
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7141,
    "end": 7142
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7143,
    "end": 7144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7145,
    "end": 7146
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7147,
    "end": 7152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7152,
    "end": 7153
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7223,
    "end": 7227
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral08",
    "start": 7228,
    "end": 7244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7245,
    "end": 7246
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 7247,
    "end": 7253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7254,
    "end": 7261
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7262,
    "end": 7265
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 7265,
    "end": 7270
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7271,
    "end": 7272
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7273,
    "end": 7280
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 7281,
    "end": 7287
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7288,
    "end": 7289
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7290,
    "end": 7294
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7294,
    "end": 7296
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7297,
    "end": 7298
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7299,
    "end": 7300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7301,
    "end": 7302
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7303,
    "end": 7308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7308,
    "end": 7309
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7320,
    "end": 7324
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral09",
    "start": 7325,
    "end": 7341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7342,
    "end": 7343
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 7344,
    "end": 7351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7352,
    "end": 7359
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7360,
    "end": 7363
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 7363,
    "end": 7368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7369,
    "end": 7370
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7371,
    "end": 7378
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 7379,
    "end": 7386
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7387,
    "end": 7388
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 7389,
    "end": 7394
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7394,
    "end": 7396
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7397,
    "end": 7398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7399,
    "end": 7400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7401,
    "end": 7402
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7403,
    "end": 7408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7408,
    "end": 7409
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7421,
    "end": 7425
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral10",
    "start": 7426,
    "end": 7442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7443,
    "end": 7444
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 7445,
    "end": 7456
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7457,
    "end": 7464
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7465,
    "end": 7468
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 7468,
    "end": 7473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7474,
    "end": 7475
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7476,
    "end": 7483
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 7484,
    "end": 7495
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7496,
    "end": 7497
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 7498,
    "end": 7507
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7507,
    "end": 7509
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7510,
    "end": 7511
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7512,
    "end": 7513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7514,
    "end": 7515
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7516,
    "end": 7521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7521,
    "end": 7522
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7538,
    "end": 7542
  },
  {
    "type": "Identifier",
    "value": "PStringLiteral11",
    "start": 7543,
    "end": 7559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7560,
    "end": 7561
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 7562,
    "end": 7568
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7569,
    "end": 7576
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7577,
    "end": 7580
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 7580,
    "end": 7585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7586,
    "end": 7587
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7588,
    "end": 7595
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 7596,
    "end": 7602
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7603,
    "end": 7604
  },
  {
    "type": "Null",
    "value": "null",
    "start": 7605,
    "end": 7609
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7609,
    "end": 7611
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7612,
    "end": 7613
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7614,
    "end": 7615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7616,
    "end": 7617
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7618,
    "end": 7623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7623,
    "end": 7624
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7728,
    "end": 7732
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum00",
    "start": 7733,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7754,
    "end": 7755
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 7756,
    "end": 7759
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7760,
    "end": 7767
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7768,
    "end": 7771
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 7771,
    "end": 7776
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7777,
    "end": 7778
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7779,
    "end": 7786
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 7787,
    "end": 7804
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7805,
    "end": 7806
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7807,
    "end": 7813
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7813,
    "end": 7815
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7816,
    "end": 7817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7818,
    "end": 7819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7820,
    "end": 7821
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7822,
    "end": 7827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7827,
    "end": 7828
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7886,
    "end": 7890
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum01",
    "start": 7891,
    "end": 7911
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7912,
    "end": 7913
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 7914,
    "end": 7917
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7918,
    "end": 7925
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 7926,
    "end": 7929
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 7929,
    "end": 7934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7935,
    "end": 7936
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7937,
    "end": 7944
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 7945,
    "end": 7962
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7963,
    "end": 7964
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 7965,
    "end": 7979
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 7979,
    "end": 7981
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7982,
    "end": 7983
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7984,
    "end": 7985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7986,
    "end": 7987
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7988,
    "end": 7993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7993,
    "end": 7994
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8086,
    "end": 8090
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum02",
    "start": 8091,
    "end": 8111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8112,
    "end": 8113
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 8114,
    "end": 8117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8118,
    "end": 8125
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8126,
    "end": 8129
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 8129,
    "end": 8134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8135,
    "end": 8136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8137,
    "end": 8144
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 8145,
    "end": 8162
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8163,
    "end": 8164
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8165,
    "end": 8166
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8166,
    "end": 8168
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8169,
    "end": 8170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8171,
    "end": 8172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8173,
    "end": 8174
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8175,
    "end": 8180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8180,
    "end": 8181
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8208,
    "end": 8212
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum03",
    "start": 8213,
    "end": 8233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8234,
    "end": 8235
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 8236,
    "end": 8239
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8240,
    "end": 8247
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8248,
    "end": 8251
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 8251,
    "end": 8256
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8257,
    "end": 8258
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8259,
    "end": 8266
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 8267,
    "end": 8284
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8285,
    "end": 8286
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 8287,
    "end": 8304
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8304,
    "end": 8306
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8307,
    "end": 8308
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8309,
    "end": 8310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8311,
    "end": 8312
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8313,
    "end": 8318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8318,
    "end": 8319
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8379,
    "end": 8383
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum04",
    "start": 8384,
    "end": 8404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8405,
    "end": 8406
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 8407,
    "end": 8410
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8411,
    "end": 8418
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8419,
    "end": 8422
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 8422,
    "end": 8427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8428,
    "end": 8429
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8430,
    "end": 8437
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 8438,
    "end": 8455
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8456,
    "end": 8457
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 8458,
    "end": 8464
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8464,
    "end": 8466
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8467,
    "end": 8468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8469,
    "end": 8470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8471,
    "end": 8472
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8473,
    "end": 8478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8478,
    "end": 8479
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8547,
    "end": 8551
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum05",
    "start": 8552,
    "end": 8572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8573,
    "end": 8574
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 8575,
    "end": 8578
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8579,
    "end": 8586
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8587,
    "end": 8590
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 8590,
    "end": 8595
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8596,
    "end": 8597
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8598,
    "end": 8605
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 8606,
    "end": 8623
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8624,
    "end": 8625
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 8626,
    "end": 8628
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8628,
    "end": 8630
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8631,
    "end": 8632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8633,
    "end": 8634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8635,
    "end": 8636
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8637,
    "end": 8642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8642,
    "end": 8643
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8704,
    "end": 8708
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum06",
    "start": 8709,
    "end": 8729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8730,
    "end": 8731
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 8732,
    "end": 8738
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8739,
    "end": 8746
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8747,
    "end": 8750
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 8750,
    "end": 8755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8756,
    "end": 8757
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8758,
    "end": 8765
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 8766,
    "end": 8783
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8784,
    "end": 8785
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8786,
    "end": 8793
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8793,
    "end": 8795
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8796,
    "end": 8797
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8798,
    "end": 8799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8800,
    "end": 8801
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8802,
    "end": 8807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8807,
    "end": 8808
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8835,
    "end": 8839
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum07",
    "start": 8840,
    "end": 8860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8861,
    "end": 8862
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 8863,
    "end": 8870
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8871,
    "end": 8878
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8879,
    "end": 8882
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 8882,
    "end": 8887
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8888,
    "end": 8889
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8890,
    "end": 8897
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 8898,
    "end": 8915
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8916,
    "end": 8917
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8918,
    "end": 8925
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8925,
    "end": 8927
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8928,
    "end": 8929
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8930,
    "end": 8931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8932,
    "end": 8933
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8934,
    "end": 8939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8939,
    "end": 8940
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9031,
    "end": 9035
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum08",
    "start": 9036,
    "end": 9056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9057,
    "end": 9058
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 9059,
    "end": 9065
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9066,
    "end": 9073
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9074,
    "end": 9077
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 9077,
    "end": 9082
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9083,
    "end": 9084
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9085,
    "end": 9092
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 9093,
    "end": 9110
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9111,
    "end": 9112
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 9113,
    "end": 9117
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9117,
    "end": 9119
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9120,
    "end": 9121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9122,
    "end": 9123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9124,
    "end": 9125
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 9126,
    "end": 9131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9131,
    "end": 9132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9159,
    "end": 9163
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum09",
    "start": 9164,
    "end": 9184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9185,
    "end": 9186
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 9187,
    "end": 9194
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9195,
    "end": 9202
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9203,
    "end": 9206
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 9206,
    "end": 9211
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9212,
    "end": 9213
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9214,
    "end": 9221
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 9222,
    "end": 9239
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9240,
    "end": 9241
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 9242,
    "end": 9247
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9247,
    "end": 9249
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9250,
    "end": 9251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9252,
    "end": 9253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9254,
    "end": 9255
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 9256,
    "end": 9261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9261,
    "end": 9262
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9290,
    "end": 9294
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum10",
    "start": 9295,
    "end": 9315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9316,
    "end": 9317
  },
  {
    "type": "String",
    "value": "\"undefined\"",
    "start": 9318,
    "end": 9329
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9330,
    "end": 9337
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9338,
    "end": 9341
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 9341,
    "end": 9346
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9347,
    "end": 9348
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9349,
    "end": 9356
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 9357,
    "end": 9374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9375,
    "end": 9376
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 9377,
    "end": 9386
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9386,
    "end": 9388
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9389,
    "end": 9390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9391,
    "end": 9392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9393,
    "end": 9394
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 9395,
    "end": 9400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9400,
    "end": 9401
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9433,
    "end": 9437
  },
  {
    "type": "Identifier",
    "value": "PStringLiteralEnum11",
    "start": 9438,
    "end": 9458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9459,
    "end": 9460
  },
  {
    "type": "String",
    "value": "\"null\"",
    "start": 9461,
    "end": 9467
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9468,
    "end": 9475
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9476,
    "end": 9479
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 9479,
    "end": 9484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9485,
    "end": 9486
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9487,
    "end": 9494
  },
  {
    "type": "Identifier",
    "value": "StringLiteralEnum",
    "start": 9495,
    "end": 9512
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9513,
    "end": 9514
  },
  {
    "type": "Null",
    "value": "null",
    "start": 9515,
    "end": 9519
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9519,
    "end": 9521
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9522,
    "end": 9523
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9524,
    "end": 9525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9526,
    "end": 9527
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 9528,
    "end": 9533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9533,
    "end": 9534
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9631,
    "end": 9635
  },
  {
    "type": "Identifier",
    "value": "PNumber0",
    "start": 9636,
    "end": 9644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9645,
    "end": 9646
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 9647,
    "end": 9650
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9651,
    "end": 9658
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9659,
    "end": 9662
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 9662,
    "end": 9667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9668,
    "end": 9669
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9670,
    "end": 9677
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9678,
    "end": 9684
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9685,
    "end": 9686
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 9687,
    "end": 9701
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9701,
    "end": 9703
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9704,
    "end": 9705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9706,
    "end": 9707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9708,
    "end": 9709
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 9710,
    "end": 9715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9715,
    "end": 9716
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9755,
    "end": 9759
  },
  {
    "type": "Identifier",
    "value": "PNumber1",
    "start": 9760,
    "end": 9768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9769,
    "end": 9770
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 9771,
    "end": 9774
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9775,
    "end": 9782
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9783,
    "end": 9786
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 9786,
    "end": 9791
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9792,
    "end": 9793
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9794,
    "end": 9801
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9802,
    "end": 9808
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9809,
    "end": 9810
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 9811,
    "end": 9828
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9828,
    "end": 9830
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9831,
    "end": 9832
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9833,
    "end": 9834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9835,
    "end": 9836
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 9837,
    "end": 9842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9842,
    "end": 9843
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9869,
    "end": 9873
  },
  {
    "type": "Identifier",
    "value": "PNumber2",
    "start": 9874,
    "end": 9882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9883,
    "end": 9884
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 9885,
    "end": 9888
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9889,
    "end": 9896
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 9897,
    "end": 9900
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 9900,
    "end": 9905
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9906,
    "end": 9907
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9908,
    "end": 9915
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9916,
    "end": 9922
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9923,
    "end": 9924
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 9925,
    "end": 9931
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 9931,
    "end": 9933
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9934,
    "end": 9935
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9936,
    "end": 9937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9938,
    "end": 9939
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 9940,
    "end": 9945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9945,
    "end": 9946
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9980,
    "end": 9984
  },
  {
    "type": "Identifier",
    "value": "PNumber3",
    "start": 9985,
    "end": 9993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9994,
    "end": 9995
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 9996,
    "end": 9999
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10000,
    "end": 10007
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 10008,
    "end": 10011
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 10011,
    "end": 10016
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10017,
    "end": 10018
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10019,
    "end": 10026
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 10027,
    "end": 10033
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10034,
    "end": 10035
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 10036,
    "end": 10038
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 10038,
    "end": 10040
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10041,
    "end": 10042
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10043,
    "end": 10044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10045,
    "end": 10046
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 10047,
    "end": 10052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10052,
    "end": 10053
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10127,
    "end": 10131
  },
  {
    "type": "Identifier",
    "value": "PEnum0",
    "start": 10132,
    "end": 10138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10139,
    "end": 10140
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 10141,
    "end": 10144
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10145,
    "end": 10152
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 10153,
    "end": 10156
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 10156,
    "end": 10161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10162,
    "end": 10163
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10164,
    "end": 10171
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 10172,
    "end": 10186
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10187,
    "end": 10188
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 10189,
    "end": 10206
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 10206,
    "end": 10208
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10209,
    "end": 10210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10211,
    "end": 10212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10213,
    "end": 10214
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 10215,
    "end": 10220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10220,
    "end": 10221
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10245,
    "end": 10249
  },
  {
    "type": "Identifier",
    "value": "PEnum1",
    "start": 10250,
    "end": 10256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10257,
    "end": 10258
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 10259,
    "end": 10262
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10263,
    "end": 10270
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 10271,
    "end": 10274
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 10274,
    "end": 10279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10280,
    "end": 10281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10282,
    "end": 10289
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 10290,
    "end": 10304
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10305,
    "end": 10306
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 10307,
    "end": 10313
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 10313,
    "end": 10315
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10316,
    "end": 10317
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10318,
    "end": 10319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10320,
    "end": 10321
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 10322,
    "end": 10327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10327,
    "end": 10328
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10360,
    "end": 10364
  },
  {
    "type": "Identifier",
    "value": "PEnum2",
    "start": 10365,
    "end": 10371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10372,
    "end": 10373
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 10374,
    "end": 10377
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10378,
    "end": 10385
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 10386,
    "end": 10389
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 10389,
    "end": 10394
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10395,
    "end": 10396
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10397,
    "end": 10404
  },
  {
    "type": "Identifier",
    "value": "NonLiteralEnum",
    "start": 10405,
    "end": 10419
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10420,
    "end": 10421
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 10422,
    "end": 10424
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 10424,
    "end": 10426
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10427,
    "end": 10428
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10429,
    "end": 10430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10431,
    "end": 10432
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 10433,
    "end": 10438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10438,
    "end": 10439
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10518,
    "end": 10522
  },
  {
    "type": "Identifier",
    "value": "PNumberLiteral0",
    "start": 10523,
    "end": 10538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10539,
    "end": 10540
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 10541,
    "end": 10544
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10545,
    "end": 10552
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 10553,
    "end": 10556
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 10556,
    "end": 10561
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10562,
    "end": 10563
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10564,
    "end": 10571
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 10572,
    "end": 10573
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10574,
    "end": 10575
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 10576,
    "end": 10582
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 10582,
    "end": 10584
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10585,
    "end": 10586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10587,
    "end": 10588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10589,
    "end": 10590
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 10591,
    "end": 10596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10596,
    "end": 10597
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10639,
    "end": 10643
  },
  {
    "type": "Identifier",
    "value": "PNumberLiteral1",
    "start": 10644,
    "end": 10659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10660,
    "end": 10661
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 10662,
    "end": 10665
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10666,
    "end": 10673
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 10674,
    "end": 10677
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 10677,
    "end": 10682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10683,
    "end": 10684
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10685,
    "end": 10692
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 10693,
    "end": 10694
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10695,
    "end": 10696
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 10697,
    "end": 10699
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 10699,
    "end": 10701
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10702,
    "end": 10703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10704,
    "end": 10705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10706,
    "end": 10707
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 10708,
    "end": 10713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10713,
    "end": 10714
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10813,
    "end": 10817
  },
  {
    "type": "Identifier",
    "value": "PNumberLiteralEnum0",
    "start": 10818,
    "end": 10837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10838,
    "end": 10839
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 10840,
    "end": 10843
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10844,
    "end": 10851
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 10852,
    "end": 10855
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 10855,
    "end": 10860
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10861,
    "end": 10862
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10863,
    "end": 10870
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 10871,
    "end": 10888
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10889,
    "end": 10890
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 10891,
    "end": 10897
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 10897,
    "end": 10899
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10900,
    "end": 10901
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10902,
    "end": 10903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10904,
    "end": 10905
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 10906,
    "end": 10911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10911,
    "end": 10912
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10980,
    "end": 10984
  },
  {
    "type": "Identifier",
    "value": "PNumberLiteralEnum1",
    "start": 10985,
    "end": 11004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11005,
    "end": 11006
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 11007,
    "end": 11010
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11011,
    "end": 11018
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11019,
    "end": 11022
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11022,
    "end": 11027
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11028,
    "end": 11029
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11030,
    "end": 11037
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 11038,
    "end": 11055
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 11056,
    "end": 11057
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 11058,
    "end": 11060
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11060,
    "end": 11062
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11063,
    "end": 11064
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11065,
    "end": 11066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11067,
    "end": 11068
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 11069,
    "end": 11074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11074,
    "end": 11075
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11180,
    "end": 11184
  },
  {
    "type": "Identifier",
    "value": "PExclude0",
    "start": 11185,
    "end": 11194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11195,
    "end": 11196
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 11197,
    "end": 11200
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11201,
    "end": 11208
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11209,
    "end": 11212
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11212,
    "end": 11217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11218,
    "end": 11219
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11220,
    "end": 11227
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 11228,
    "end": 11231
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 11232,
    "end": 11233
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 11234,
    "end": 11240
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11240,
    "end": 11242
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11243,
    "end": 11244
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11245,
    "end": 11246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11247,
    "end": 11248
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 11249,
    "end": 11254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11254,
    "end": 11255
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11261,
    "end": 11265
  },
  {
    "type": "Identifier",
    "value": "PExclude1",
    "start": 11266,
    "end": 11275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11276,
    "end": 11277
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 11278,
    "end": 11281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11282,
    "end": 11289
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11290,
    "end": 11293
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11293,
    "end": 11298
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11299,
    "end": 11300
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11301,
    "end": 11308
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 11309,
    "end": 11313
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11313,
    "end": 11319
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11319,
    "end": 11321
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 11322,
    "end": 11323
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 11324,
    "end": 11330
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11330,
    "end": 11332
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11333,
    "end": 11334
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11335,
    "end": 11336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11337,
    "end": 11338
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 11339,
    "end": 11344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11344,
    "end": 11345
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11351,
    "end": 11355
  },
  {
    "type": "Identifier",
    "value": "PExclude2",
    "start": 11356,
    "end": 11365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11366,
    "end": 11367
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 11368,
    "end": 11371
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11372,
    "end": 11379
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11380,
    "end": 11383
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11383,
    "end": 11388
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11389,
    "end": 11390
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11391,
    "end": 11398
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 11399,
    "end": 11400
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 11401,
    "end": 11402
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 11403,
    "end": 11409
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11409,
    "end": 11411
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11412,
    "end": 11413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11414,
    "end": 11415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11416,
    "end": 11417
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 11418,
    "end": 11423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11423,
    "end": 11424
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11431,
    "end": 11435
  },
  {
    "type": "Identifier",
    "value": "PExclude3",
    "start": 11436,
    "end": 11445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11446,
    "end": 11447
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 11448,
    "end": 11451
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11452,
    "end": 11459
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11460,
    "end": 11463
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11463,
    "end": 11468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11469,
    "end": 11470
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11471,
    "end": 11478
  },
  {
    "type": "Identifier",
    "value": "NumberLiteralEnum",
    "start": 11479,
    "end": 11496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11496,
    "end": 11497
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 11497,
    "end": 11500
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 11501,
    "end": 11502
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 11503,
    "end": 11509
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11509,
    "end": 11511
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11512,
    "end": 11513
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11514,
    "end": 11515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11516,
    "end": 11517
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 11518,
    "end": 11523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11523,
    "end": 11524
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11531,
    "end": 11535
  },
  {
    "type": "Identifier",
    "value": "PExclude4",
    "start": 11536,
    "end": 11545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11546,
    "end": 11547
  },
  {
    "type": "String",
    "value": "\"100000000000000000000000\"",
    "start": 11548,
    "end": 11574
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11575,
    "end": 11582
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11583,
    "end": 11586
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11586,
    "end": 11591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11592,
    "end": 11593
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11594,
    "end": 11601
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 11602,
    "end": 11608
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 11609,
    "end": 11610
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 11611,
    "end": 11617
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11617,
    "end": 11619
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11620,
    "end": 11621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11622,
    "end": 11623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11624,
    "end": 11625
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 11626,
    "end": 11631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11631,
    "end": 11632
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11694,
    "end": 11698
  },
  {
    "type": "Identifier",
    "value": "TPrefix0",
    "start": 11699,
    "end": 11707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11708,
    "end": 11709
  },
  {
    "type": "String",
    "value": "\"100\"",
    "start": 11710,
    "end": 11715
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11716,
    "end": 11723
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11724,
    "end": 11727
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11727,
    "end": 11732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11733,
    "end": 11734
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11735,
    "end": 11742
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 11743,
    "end": 11749
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 11749,
    "end": 11752
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11752,
    "end": 11758
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11758,
    "end": 11760
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11761,
    "end": 11762
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11763,
    "end": 11764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11765,
    "end": 11766
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 11767,
    "end": 11772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11772,
    "end": 11773
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11779,
    "end": 11783
  },
  {
    "type": "Identifier",
    "value": "TPrefix1",
    "start": 11784,
    "end": 11792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11793,
    "end": 11794
  },
  {
    "type": "String",
    "value": "\"trueabc\"",
    "start": 11795,
    "end": 11804
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11805,
    "end": 11812
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11813,
    "end": 11816
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11816,
    "end": 11821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11822,
    "end": 11823
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11824,
    "end": 11831
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 11832,
    "end": 11839
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 11839,
    "end": 11842
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11842,
    "end": 11848
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11848,
    "end": 11850
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11851,
    "end": 11852
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11853,
    "end": 11854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11855,
    "end": 11856
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 11857,
    "end": 11862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11862,
    "end": 11863
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 11919,
    "end": 11923
  },
  {
    "type": "Identifier",
    "value": "TPrefix2",
    "start": 11924,
    "end": 11932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11933,
    "end": 11934
  },
  {
    "type": "Template",
    "value": "`100:${",
    "start": 11935,
    "end": 11942
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11942,
    "end": 11948
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11948,
    "end": 11950
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11951,
    "end": 11958
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 11959,
    "end": 11962
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 11962,
    "end": 11967
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11968,
    "end": 11969
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11970,
    "end": 11977
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 11978,
    "end": 11984
  },
  {
    "type": "Template",
    "value": "}:${",
    "start": 11984,
    "end": 11988
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11988,
    "end": 11994
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 11994,
    "end": 11996
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11997,
    "end": 11998
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11999,
    "end": 12000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12001,
    "end": 12002
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 12003,
    "end": 12008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12008,
    "end": 12009
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12129,
    "end": 12133
  },
  {
    "type": "Identifier",
    "value": "ExtractPrimitives",
    "start": 12134,
    "end": 12151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12151,
    "end": 12152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12152,
    "end": 12153
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12154,
    "end": 12161
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12162,
    "end": 12168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12168,
    "end": 12169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12170,
    "end": 12171
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12176,
    "end": 12177
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12178,
    "end": 12179
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12184,
    "end": 12185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12186,
    "end": 12187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12187,
    "end": 12188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12189,
    "end": 12196
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 12197,
    "end": 12200
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 12200,
    "end": 12205
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 12206,
    "end": 12207
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12208,
    "end": 12215
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 12216,
    "end": 12222
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 12222,
    "end": 12224
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12225,
    "end": 12226
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 12227,
    "end": 12228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12229,
    "end": 12230
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 12231,
    "end": 12236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12236,
    "end": 12237
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12242,
    "end": 12243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12244,
    "end": 12245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12245,
    "end": 12246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12247,
    "end": 12254
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 12255,
    "end": 12258
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 12258,
    "end": 12263
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 12264,
    "end": 12265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12266,
    "end": 12273
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 12274,
    "end": 12280
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 12280,
    "end": 12282
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12283,
    "end": 12284
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 12285,
    "end": 12286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12287,
    "end": 12288
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 12289,
    "end": 12294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12294,
    "end": 12295
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12300,
    "end": 12301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12302,
    "end": 12303
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12303,
    "end": 12304
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12305,
    "end": 12312
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 12313,
    "end": 12316
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 12316,
    "end": 12321
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 12322,
    "end": 12323
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12324,
    "end": 12331
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 12332,
    "end": 12339
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12340,
    "end": 12341
  },
  {
    "type": "Null",
    "value": "null",
    "start": 12342,
    "end": 12346
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12347,
    "end": 12348
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 12349,
    "end": 12358
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 12358,
    "end": 12360
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12361,
    "end": 12362
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 12363,
    "end": 12364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12365,
    "end": 12366
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 12367,
    "end": 12372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12372,
    "end": 12373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12378,
    "end": 12379
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12381,
    "end": 12385
  },
  {
    "type": "Identifier",
    "value": "TExtract0",
    "start": 12386,
    "end": 12395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12396,
    "end": 12397
  },
  {
    "type": "Identifier",
    "value": "ExtractPrimitives",
    "start": 12398,
    "end": 12415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12415,
    "end": 12416
  },
  {
    "type": "String",
    "value": "\"100\"",
    "start": 12416,
    "end": 12421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12421,
    "end": 12422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12422,
    "end": 12423
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12446,
    "end": 12450
  },
  {
    "type": "Identifier",
    "value": "TExtract1",
    "start": 12451,
    "end": 12460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12461,
    "end": 12462
  },
  {
    "type": "Identifier",
    "value": "ExtractPrimitives",
    "start": 12463,
    "end": 12480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12480,
    "end": 12481
  },
  {
    "type": "String",
    "value": "\"1.1\"",
    "start": 12481,
    "end": 12486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12486,
    "end": 12487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12487,
    "end": 12488
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12504,
    "end": 12508
  },
  {
    "type": "Identifier",
    "value": "TExtract2",
    "start": 12509,
    "end": 12518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12519,
    "end": 12520
  },
  {
    "type": "Identifier",
    "value": "ExtractPrimitives",
    "start": 12521,
    "end": 12538
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12538,
    "end": 12539
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 12539,
    "end": 12545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12545,
    "end": 12546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12546,
    "end": 12547
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12709,
    "end": 12713
  },
  {
    "type": "Identifier",
    "value": "IndexFor",
    "start": 12714,
    "end": 12722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12722,
    "end": 12723
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 12723,
    "end": 12724
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12725,
    "end": 12732
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12733,
    "end": 12739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12739,
    "end": 12740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12741,
    "end": 12742
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 12743,
    "end": 12744
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12745,
    "end": 12752
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 12753,
    "end": 12756
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 12756,
    "end": 12761
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 12762,
    "end": 12763
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12764,
    "end": 12771
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 12772,
    "end": 12778
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 12778,
    "end": 12780
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12781,
    "end": 12782
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 12783,
    "end": 12784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12785,
    "end": 12786
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 12787,
    "end": 12792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12792,
    "end": 12793
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12794,
    "end": 12798
  },
  {
    "type": "Identifier",
    "value": "IndicesOf",
    "start": 12799,
    "end": 12808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12808,
    "end": 12809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12809,
    "end": 12810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12810,
    "end": 12811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12812,
    "end": 12813
  },
  {
    "type": "Identifier",
    "value": "IndexFor",
    "start": 12814,
    "end": 12822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12822,
    "end": 12823
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 12823,
    "end": 12830
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12830,
    "end": 12831
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 12831,
    "end": 12836
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12837,
    "end": 12838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12838,
    "end": 12839
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12840,
    "end": 12846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12846,
    "end": 12847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12847,
    "end": 12848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12848,
    "end": 12849
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12889,
    "end": 12898
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 12899,
    "end": 12914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12915,
    "end": 12916
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 12921,
    "end": 12929
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 12930,
    "end": 12934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12934,
    "end": 12935
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12936,
    "end": 12942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12942,
    "end": 12943
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 12948,
    "end": 12956
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12957,
    "end": 12961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12961,
    "end": 12962
  },
  {
    "type": "String",
    "value": "\"i8\"",
    "start": 12963,
    "end": 12967
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12968,
    "end": 12969
  },
  {
    "type": "String",
    "value": "\"i16\"",
    "start": 12970,
    "end": 12975
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12976,
    "end": 12977
  },
  {
    "type": "String",
    "value": "\"i32\"",
    "start": 12978,
    "end": 12983
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12984,
    "end": 12985
  },
  {
    "type": "String",
    "value": "\"i64\"",
    "start": 12986,
    "end": 12991
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12992,
    "end": 12993
  },
  {
    "type": "String",
    "value": "\"u8\"",
    "start": 12994,
    "end": 12998
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 12999,
    "end": 13000
  },
  {
    "type": "String",
    "value": "\"u16\"",
    "start": 13001,
    "end": 13006
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13007,
    "end": 13008
  },
  {
    "type": "String",
    "value": "\"u32\"",
    "start": 13009,
    "end": 13014
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13015,
    "end": 13016
  },
  {
    "type": "String",
    "value": "\"u64\"",
    "start": 13017,
    "end": 13022
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13023,
    "end": 13024
  },
  {
    "type": "String",
    "value": "\"f32\"",
    "start": 13025,
    "end": 13030
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13031,
    "end": 13032
  },
  {
    "type": "String",
    "value": "\"f64\"",
    "start": 13033,
    "end": 13038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13038,
    "end": 13039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13040,
    "end": 13041
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 13043,
    "end": 13047
  },
  {
    "type": "Identifier",
    "value": "FieldType",
    "start": 13048,
    "end": 13057
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13057,
    "end": 13058
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13058,
    "end": 13059
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13060,
    "end": 13067
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 13068,
    "end": 13083
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13083,
    "end": 13084
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 13084,
    "end": 13090
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13090,
    "end": 13091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13091,
    "end": 13092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13093,
    "end": 13094
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13099,
    "end": 13100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13101,
    "end": 13108
  },
  {
    "type": "String",
    "value": "\"i8\"",
    "start": 13109,
    "end": 13113
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13114,
    "end": 13115
  },
  {
    "type": "String",
    "value": "\"i16\"",
    "start": 13116,
    "end": 13121
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13122,
    "end": 13123
  },
  {
    "type": "String",
    "value": "\"i32\"",
    "start": 13124,
    "end": 13129
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13130,
    "end": 13131
  },
  {
    "type": "String",
    "value": "\"u8\"",
    "start": 13132,
    "end": 13136
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13137,
    "end": 13138
  },
  {
    "type": "String",
    "value": "\"u16\"",
    "start": 13139,
    "end": 13144
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13145,
    "end": 13146
  },
  {
    "type": "String",
    "value": "\"u32\"",
    "start": 13147,
    "end": 13152
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13153,
    "end": 13154
  },
  {
    "type": "String",
    "value": "\"f32\"",
    "start": 13155,
    "end": 13160
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13161,
    "end": 13162
  },
  {
    "type": "String",
    "value": "\"f64\"",
    "start": 13163,
    "end": 13168
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13169,
    "end": 13170
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13171,
    "end": 13177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13178,
    "end": 13179
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13184,
    "end": 13185
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13186,
    "end": 13193
  },
  {
    "type": "String",
    "value": "\"f32\"",
    "start": 13194,
    "end": 13199
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13200,
    "end": 13201
  },
  {
    "type": "String",
    "value": "\"f64\"",
    "start": 13202,
    "end": 13207
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13208,
    "end": 13209
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 13210,
    "end": 13216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13217,
    "end": 13218
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 13223,
    "end": 13228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13228,
    "end": 13229
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 13354,
    "end": 13358
  },
  {
    "type": "Identifier",
    "value": "TypedObjectNamedMembers",
    "start": 13359,
    "end": 13382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13382,
    "end": 13383
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 13383,
    "end": 13387
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13388,
    "end": 13395
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 13396,
    "end": 13404
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 13405,
    "end": 13420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13420,
    "end": 13421
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13421,
    "end": 13422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13422,
    "end": 13423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13424,
    "end": 13425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13426,
    "end": 13427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13432,
    "end": 13433
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 13433,
    "end": 13434
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 13435,
    "end": 13437
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 13438,
    "end": 13442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13442,
    "end": 13443
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13443,
    "end": 13449
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13449,
    "end": 13450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13450,
    "end": 13451
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 13451,
    "end": 13457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13457,
    "end": 13458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13458,
    "end": 13459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13459,
    "end": 13460
  },
  {
    "type": "Identifier",
    "value": "FieldType",
    "start": 13461,
    "end": 13470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13470,
    "end": 13471
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 13471,
    "end": 13478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13478,
    "end": 13479
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 13479,
    "end": 13483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13483,
    "end": 13484
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13484,
    "end": 13490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13490,
    "end": 13491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13491,
    "end": 13492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13493,
    "end": 13494
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 13495,
    "end": 13503
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 13504,
    "end": 13508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13508,
    "end": 13509
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 13510,
    "end": 13511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13512,
    "end": 13513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13513,
    "end": 13514
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13514,
    "end": 13515
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 13515,
    "end": 13521
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13521,
    "end": 13522
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13522,
    "end": 13523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13523,
    "end": 13524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13525,
    "end": 13526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13526,
    "end": 13527
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 13654,
    "end": 13658
  },
  {
    "type": "Identifier",
    "value": "TypedObjectOrdinalMembers",
    "start": 13659,
    "end": 13684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13684,
    "end": 13685
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 13685,
    "end": 13689
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13690,
    "end": 13697
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 13698,
    "end": 13706
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 13707,
    "end": 13722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13722,
    "end": 13723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13723,
    "end": 13724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13724,
    "end": 13725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13726,
    "end": 13727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13728,
    "end": 13729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13734,
    "end": 13735
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 13735,
    "end": 13736
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 13737,
    "end": 13739
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 13740,
    "end": 13747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13747,
    "end": 13748
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 13748,
    "end": 13753
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 13754,
    "end": 13758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13758,
    "end": 13759
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 13760,
    "end": 13763
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13763,
    "end": 13769
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 13769,
    "end": 13771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13771,
    "end": 13772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13772,
    "end": 13773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13773,
    "end": 13774
  },
  {
    "type": "Identifier",
    "value": "FieldType",
    "start": 13775,
    "end": 13784
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13784,
    "end": 13785
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 13785,
    "end": 13792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13792,
    "end": 13793
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 13793,
    "end": 13797
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13797,
    "end": 13798
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 13798,
    "end": 13799
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13799,
    "end": 13800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13800,
    "end": 13801
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 13802,
    "end": 13817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13817,
    "end": 13818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13818,
    "end": 13819
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 13819,
    "end": 13825
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13825,
    "end": 13826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13826,
    "end": 13827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13827,
    "end": 13828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13829,
    "end": 13830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13830,
    "end": 13831
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 13852,
    "end": 13861
  },
  {
    "type": "Identifier",
    "value": "TypedObjectMembers",
    "start": 13862,
    "end": 13880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13880,
    "end": 13881
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 13881,
    "end": 13885
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13886,
    "end": 13893
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 13894,
    "end": 13902
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 13903,
    "end": 13918
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13918,
    "end": 13919
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13919,
    "end": 13920
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13920,
    "end": 13921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13922,
    "end": 13923
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 13959,
    "end": 13962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13962,
    "end": 13963
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 13963,
    "end": 13964
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13965,
    "end": 13972
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 13973,
    "end": 13977
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13977,
    "end": 13978
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13978,
    "end": 13984
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13984,
    "end": 13985
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13985,
    "end": 13986
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 13986,
    "end": 13992
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13992,
    "end": 13993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13993,
    "end": 13994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13994,
    "end": 13995
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 13995,
    "end": 13998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13998,
    "end": 13999
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 14000,
    "end": 14001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14001,
    "end": 14002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14002,
    "end": 14003
  },
  {
    "type": "Identifier",
    "value": "FieldType",
    "start": 14004,
    "end": 14013
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14013,
    "end": 14014
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 14014,
    "end": 14021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14021,
    "end": 14022
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14022,
    "end": 14026
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14026,
    "end": 14027
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 14027,
    "end": 14033
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14033,
    "end": 14034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14034,
    "end": 14035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14036,
    "end": 14037
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 14038,
    "end": 14046
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 14047,
    "end": 14051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14051,
    "end": 14052
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 14053,
    "end": 14054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14055,
    "end": 14056
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14056,
    "end": 14057
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14057,
    "end": 14058
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 14058,
    "end": 14064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14064,
    "end": 14065
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14065,
    "end": 14066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14066,
    "end": 14067
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 14072,
    "end": 14075
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14075,
    "end": 14076
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 14076,
    "end": 14077
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14078,
    "end": 14085
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14086,
    "end": 14090
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14090,
    "end": 14091
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 14091,
    "end": 14097
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14097,
    "end": 14098
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14098,
    "end": 14099
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 14099,
    "end": 14105
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14105,
    "end": 14106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14106,
    "end": 14107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14107,
    "end": 14108
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 14108,
    "end": 14111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14111,
    "end": 14112
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 14113,
    "end": 14114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14114,
    "end": 14115
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 14116,
    "end": 14121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14121,
    "end": 14122
  },
  {
    "type": "Identifier",
    "value": "FieldType",
    "start": 14123,
    "end": 14132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14132,
    "end": 14133
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 14133,
    "end": 14140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14140,
    "end": 14141
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14141,
    "end": 14145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14145,
    "end": 14146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 14146,
    "end": 14152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14152,
    "end": 14153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14153,
    "end": 14154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14155,
    "end": 14156
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 14157,
    "end": 14165
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 14166,
    "end": 14170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14170,
    "end": 14171
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 14172,
    "end": 14173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14174,
    "end": 14175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14175,
    "end": 14176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14176,
    "end": 14177
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 14177,
    "end": 14183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14183,
    "end": 14184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14184,
    "end": 14185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14185,
    "end": 14186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14186,
    "end": 14187
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 14188,
    "end": 14192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14192,
    "end": 14193
  },
  {
    "type": "Identifier",
    "value": "getIndex",
    "start": 14231,
    "end": 14239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14239,
    "end": 14240
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 14240,
    "end": 14241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14242,
    "end": 14249
  },
  {
    "type": "Identifier",
    "value": "IndicesOf",
    "start": 14250,
    "end": 14259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14259,
    "end": 14260
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14260,
    "end": 14264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14264,
    "end": 14265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14265,
    "end": 14266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14266,
    "end": 14267
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 14267,
    "end": 14272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14272,
    "end": 14273
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 14274,
    "end": 14275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14275,
    "end": 14276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14276,
    "end": 14277
  },
  {
    "type": "Identifier",
    "value": "FieldType",
    "start": 14278,
    "end": 14287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14287,
    "end": 14288
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 14288,
    "end": 14295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14295,
    "end": 14296
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14296,
    "end": 14300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14300,
    "end": 14301
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 14301,
    "end": 14302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14302,
    "end": 14303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14303,
    "end": 14304
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 14305,
    "end": 14320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14320,
    "end": 14321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14321,
    "end": 14322
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 14322,
    "end": 14328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14328,
    "end": 14329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14329,
    "end": 14330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14330,
    "end": 14331
  },
  {
    "type": "Identifier",
    "value": "setIndex",
    "start": 14336,
    "end": 14344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14344,
    "end": 14345
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 14345,
    "end": 14346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14347,
    "end": 14354
  },
  {
    "type": "Identifier",
    "value": "IndicesOf",
    "start": 14355,
    "end": 14364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14364,
    "end": 14365
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14365,
    "end": 14369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14369,
    "end": 14370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14370,
    "end": 14371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14371,
    "end": 14372
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 14372,
    "end": 14377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14377,
    "end": 14378
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 14379,
    "end": 14380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14380,
    "end": 14381
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 14382,
    "end": 14387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14387,
    "end": 14388
  },
  {
    "type": "Identifier",
    "value": "FieldType",
    "start": 14389,
    "end": 14398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14398,
    "end": 14399
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 14399,
    "end": 14406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14406,
    "end": 14407
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14407,
    "end": 14411
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14411,
    "end": 14412
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 14412,
    "end": 14413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14413,
    "end": 14414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14414,
    "end": 14415
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 14416,
    "end": 14431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14431,
    "end": 14432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14432,
    "end": 14433
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 14433,
    "end": 14439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14439,
    "end": 14440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14440,
    "end": 14441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14441,
    "end": 14442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14442,
    "end": 14443
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 14444,
    "end": 14448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14448,
    "end": 14449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14450,
    "end": 14451
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 14453,
    "end": 14457
  },
  {
    "type": "Identifier",
    "value": "TypedObject",
    "start": 14458,
    "end": 14469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14469,
    "end": 14470
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14470,
    "end": 14474
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14475,
    "end": 14482
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 14483,
    "end": 14491
  },
  {
    "type": "Identifier",
    "value": "FieldDefinition",
    "start": 14492,
    "end": 14507
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14507,
    "end": 14508
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14508,
    "end": 14509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14509,
    "end": 14510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14511,
    "end": 14512
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 14517,
    "end": 14518
  },
  {
    "type": "Identifier",
    "value": "TypedObjectMembers",
    "start": 14519,
    "end": 14537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14537,
    "end": 14538
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14538,
    "end": 14542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14542,
    "end": 14543
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 14548,
    "end": 14549
  },
  {
    "type": "Identifier",
    "value": "TypedObjectNamedMembers",
    "start": 14550,
    "end": 14573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14573,
    "end": 14574
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14574,
    "end": 14578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14578,
    "end": 14579
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 14584,
    "end": 14585
  },
  {
    "type": "Identifier",
    "value": "TypedObjectOrdinalMembers",
    "start": 14586,
    "end": 14611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14611,
    "end": 14612
  },
  {
    "type": "Identifier",
    "value": "TDef",
    "start": 14612,
    "end": 14616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14616,
    "end": 14617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14617,
    "end": 14618
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 14750,
    "end": 14754
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 14755,
    "end": 14760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14761,
    "end": 14762
  },
  {
    "type": "Identifier",
    "value": "TypedObject",
    "start": 14763,
    "end": 14774
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14774,
    "end": 14775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14775,
    "end": 14776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14781,
    "end": 14782
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 14783,
    "end": 14787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14787,
    "end": 14788
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 14789,
    "end": 14792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14792,
    "end": 14793
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 14794,
    "end": 14798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14798,
    "end": 14799
  },
  {
    "type": "String",
    "value": "\"f64\"",
    "start": 14800,
    "end": 14805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14806,
    "end": 14807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14807,
    "end": 14808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14813,
    "end": 14814
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 14815,
    "end": 14819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14819,
    "end": 14820
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 14821,
    "end": 14824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14824,
    "end": 14825
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 14826,
    "end": 14830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14830,
    "end": 14831
  },
  {
    "type": "String",
    "value": "\"f64\"",
    "start": 14832,
    "end": 14837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14838,
    "end": 14839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14839,
    "end": 14840
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14841,
    "end": 14842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14842,
    "end": 14843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14843,
    "end": 14844
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 14846,
    "end": 14853
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 14854,
    "end": 14859
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 14860,
    "end": 14861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14861,
    "end": 14862
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 14863,
    "end": 14868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14868,
    "end": 14869
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 14870,
    "end": 14871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14871,
    "end": 14872
  },
  {
    "type": "Identifier",
    "value": "getIndex",
    "start": 14872,
    "end": 14880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14880,
    "end": 14881
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 14881,
    "end": 14882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14882,
    "end": 14883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14883,
    "end": 14884
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 14911,
    "end": 14912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14912,
    "end": 14913
  },
  {
    "type": "Identifier",
    "value": "getIndex",
    "start": 14913,
    "end": 14921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14921,
    "end": 14922
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 14922,
    "end": 14923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14923,
    "end": 14924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14924,
    "end": 14925
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 14952,
    "end": 14953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14953,
    "end": 14954
  },
  {
    "type": "Identifier",
    "value": "getIndex",
    "start": 14954,
    "end": 14962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14962,
    "end": 14963
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 14963,
    "end": 14964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14964,
    "end": 14965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14965,
    "end": 14966
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 15001,
    "end": 15002
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 15002,
    "end": 15003
  },
  {
    "type": "Identifier",
    "value": "setIndex",
    "start": 15003,
    "end": 15011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15011,
    "end": 15012
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 15012,
    "end": 15013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15013,
    "end": 15014
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 15015,
    "end": 15016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15016,
    "end": 15017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15017,
    "end": 15018
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 15045,
    "end": 15046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 15046,
    "end": 15047
  },
  {
    "type": "Identifier",
    "value": "setIndex",
    "start": 15047,
    "end": 15055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15055,
    "end": 15056
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 15056,
    "end": 15057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15057,
    "end": 15058
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 15059,
    "end": 15060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15060,
    "end": 15061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15061,
    "end": 15062
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 15089,
    "end": 15090
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 15090,
    "end": 15091
  },
  {
    "type": "Identifier",
    "value": "setIndex",
    "start": 15091,
    "end": 15099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15099,
    "end": 15100
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 15100,
    "end": 15101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15101,
    "end": 15102
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 15103,
    "end": 15104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15104,
    "end": 15105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15105,
    "end": 15106
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 15163,
    "end": 15170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15171,
    "end": 15179
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 15180,
    "end": 15182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15182,
    "end": 15183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15183,
    "end": 15184
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15185,
    "end": 15192
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 15193,
    "end": 15199
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 15200,
    "end": 15201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 15202,
    "end": 15208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15208,
    "end": 15209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15209,
    "end": 15210
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 15210,
    "end": 15211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15211,
    "end": 15212
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 15213,
    "end": 15218
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15218,
    "end": 15219
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 15219,
    "end": 15223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15223,
    "end": 15224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15224,
    "end": 15225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15226,
    "end": 15227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15227,
    "end": 15228
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 15229,
    "end": 15231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15231,
    "end": 15232
  },
  {
    "type": "String",
    "value": "\"**123**\"",
    "start": 15232,
    "end": 15241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15241,
    "end": 15242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15242,
    "end": 15243
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 15254,
    "end": 15261
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15262,
    "end": 15270
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 15271,
    "end": 15273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15273,
    "end": 15274
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15274,
    "end": 15275
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15276,
    "end": 15283
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 15284,
    "end": 15290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15290,
    "end": 15291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15291,
    "end": 15292
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 15292,
    "end": 15293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15293,
    "end": 15294
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 15295,
    "end": 15300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15300,
    "end": 15301
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 15301,
    "end": 15305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15305,
    "end": 15306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15306,
    "end": 15307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15308,
    "end": 15309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15309,
    "end": 15310
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 15311,
    "end": 15313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15313,
    "end": 15314
  },
  {
    "type": "String",
    "value": "\"**123**\"",
    "start": 15314,
    "end": 15323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15323,
    "end": 15324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15324,
    "end": 15325
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 15334,
    "end": 15341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15342,
    "end": 15350
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 15351,
    "end": 15353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15353,
    "end": 15354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15354,
    "end": 15355
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15356,
    "end": 15363
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 15364,
    "end": 15370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15370,
    "end": 15371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15371,
    "end": 15372
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 15372,
    "end": 15373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15373,
    "end": 15374
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 15375,
    "end": 15380
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15380,
    "end": 15381
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 15381,
    "end": 15385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15385,
    "end": 15386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15386,
    "end": 15387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15388,
    "end": 15389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15389,
    "end": 15390
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 15391,
    "end": 15393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15393,
    "end": 15394
  },
  {
    "type": "String",
    "value": "\"**123**\"",
    "start": 15394,
    "end": 15403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15403,
    "end": 15404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15404,
    "end": 15405
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 15415,
    "end": 15422
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15423,
    "end": 15431
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 15432,
    "end": 15434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15434,
    "end": 15435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15435,
    "end": 15436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15437,
    "end": 15444
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 15445,
    "end": 15452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15452,
    "end": 15453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15453,
    "end": 15454
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 15454,
    "end": 15455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15455,
    "end": 15456
  },
  {
    "type": "Template",
    "value": "`**${",
    "start": 15457,
    "end": 15462
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15462,
    "end": 15463
  },
  {
    "type": "Template",
    "value": "}**`",
    "start": 15463,
    "end": 15467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15467,
    "end": 15468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15468,
    "end": 15469
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15470,
    "end": 15471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15471,
    "end": 15472
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 15473,
    "end": 15475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15475,
    "end": 15476
  },
  {
    "type": "String",
    "value": "\"**true**\"",
    "start": 15476,
    "end": 15486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15486,
    "end": 15487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15487,
    "end": 15488
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 15506,
    "end": 15508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15508,
    "end": 15509
  },
  {
    "type": "String",
    "value": "\"**false**\"",
    "start": 15509,
    "end": 15520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15520,
    "end": 15521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15521,
    "end": 15522
  }
]
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
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
            "start": 18,
            "end": 31
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
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
            "start": 36,
            "end": 50
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
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
            "start": 55,
            "end": 70
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "visible",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 84,
                "end": 91
              },
              "start": 82,
              "end": 91
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
            "start": 75,
            "end": 92
          }
        ],
        "start": 12,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 111
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
              "start": 112,
              "end": 113
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 112,
            "end": 113
          }
        ],
        "start": 111,
        "end": 114
      },
      "typeAnnotation": {
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
                    "start": 123,
                    "end": 129
                  },
                  "start": 121,
                  "end": 129
                },
                "start": 120,
                "end": 129
              }
            ],
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
                  "start": 132,
                  "end": 133
                },
                "typeArguments": null,
                "start": 132,
                "end": 133
              },
              "start": 130,
              "end": 133
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 119,
            "end": 133
          }
        ],
        "start": 117,
        "end": 135
      },
      "declare": false,
      "start": 96,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 146
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
            "name": "K0",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 157
          },
          "typeArguments": null,
          "start": 155,
          "end": 157
        },
        "start": 149,
        "end": 157
      },
      "declare": false,
      "start": 138,
      "end": 158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 178
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 193
          },
          "typeArguments": null,
          "start": 187,
          "end": 193
        },
        "start": 181,
        "end": 193
      },
      "declare": false,
      "start": 170,
      "end": 194
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 203
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 224
            },
            "typeArguments": null,
            "start": 218,
            "end": 224
          },
          "start": 212,
          "end": 224
        },
        "start": 206,
        "end": 224
      },
      "declare": false,
      "start": 195,
      "end": 225
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 234
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 261
              },
              "typeArguments": null,
              "start": 255,
              "end": 261
            },
            "start": 249,
            "end": 261
          },
          "start": 243,
          "end": 261
        },
        "start": 237,
        "end": 261
      },
      "declare": false,
      "start": 226,
      "end": 262
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 271
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 304
                },
                "typeArguments": null,
                "start": 298,
                "end": 304
              },
              "start": 292,
              "end": 304
            },
            "start": 286,
            "end": 304
          },
          "start": 280,
          "end": 304
        },
        "start": 274,
        "end": 304
      },
      "declare": false,
      "start": 263,
      "end": 305
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 314
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 353
                  },
                  "typeArguments": null,
                  "start": 347,
                  "end": 353
                },
                "start": 341,
                "end": 353
              },
              "start": 335,
              "end": 353
            },
            "start": 329,
            "end": 353
          },
          "start": 323,
          "end": 353
        },
        "start": 317,
        "end": 353
      },
      "declare": false,
      "start": 306,
      "end": 354
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 363
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 408
                    },
                    "typeArguments": null,
                    "start": 402,
                    "end": 408
                  },
                  "start": 396,
                  "end": 408
                },
                "start": 390,
                "end": 408
              },
              "start": 384,
              "end": 408
            },
            "start": 378,
            "end": 408
          },
          "start": 372,
          "end": 408
        },
        "start": 366,
        "end": 408
      },
      "declare": false,
      "start": 355,
      "end": 409
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 419
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 427
          },
          "typeArguments": null,
          "start": 422,
          "end": 427
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "name",
            "raw": "\"name\"",
            "start": 428,
            "end": 434
          },
          "start": 428,
          "end": 434
        },
        "start": 422,
        "end": 435
      },
      "declare": false,
      "start": 411,
      "end": 436
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 445
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 453
          },
          "typeArguments": null,
          "start": 448,
          "end": 453
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 454,
            "end": 459
          },
          "start": 454,
          "end": 459
        },
        "start": 448,
        "end": 460
      },
      "declare": false,
      "start": 437,
      "end": 461
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 480
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 488
          },
          "typeArguments": null,
          "start": 483,
          "end": 488
        },
        "indexType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 489,
                "end": 495
              },
              "start": 489,
              "end": 495
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 498,
                "end": 503
              },
              "start": 498,
              "end": 503
            }
          ],
          "start": 489,
          "end": 503
        },
        "start": 483,
        "end": 504
      },
      "declare": false,
      "start": 472,
      "end": 505
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 521,
        "end": 524
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 532
          },
          "typeArguments": null,
          "start": 527,
          "end": 532
        },
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 533,
          "end": 536
        },
        "start": 527,
        "end": 537
      },
      "declare": false,
      "start": 516,
      "end": 538
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 557
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 565
          },
          "typeArguments": null,
          "start": 560,
          "end": 565
        },
        "indexType": {
          "type": "TSStringKeyword",
          "start": 566,
          "end": 572
        },
        "start": 560,
        "end": 573
      },
      "declare": false,
      "start": 549,
      "end": 574
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 593
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 601
          },
          "typeArguments": null,
          "start": 596,
          "end": 601
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 602,
          "end": 608
        },
        "start": 596,
        "end": 609
      },
      "declare": false,
      "start": 585,
      "end": 610
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T16",
        "optional": false,
        "typeAnnotation": null,
        "start": 626,
        "end": 629
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 632,
            "end": 637
          },
          "typeArguments": null,
          "start": 632,
          "end": 637
        },
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 638,
          "end": 645
        },
        "start": 632,
        "end": 646
      },
      "declare": false,
      "start": 621,
      "end": 647
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T17",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 666
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 674
          },
          "typeArguments": null,
          "start": 669,
          "end": 674
        },
        "indexType": {
          "type": "TSVoidKeyword",
          "start": 675,
          "end": 679
        },
        "start": 669,
        "end": 680
      },
      "declare": false,
      "start": 658,
      "end": 681
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T18",
        "optional": false,
        "typeAnnotation": null,
        "start": 697,
        "end": 700
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 708
          },
          "typeArguments": null,
          "start": 703,
          "end": 708
        },
        "indexType": {
          "type": "TSUndefinedKeyword",
          "start": 709,
          "end": 718
        },
        "start": 703,
        "end": 719
      },
      "declare": false,
      "start": 692,
      "end": 720
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T19",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 739
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 742,
            "end": 747
          },
          "typeArguments": null,
          "start": 742,
          "end": 747
        },
        "indexType": {
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
                "start": 750,
                "end": 751
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 753,
                  "end": 759
                },
                "start": 751,
                "end": 759
              },
              "accessibility": null,
              "static": false,
              "start": 750,
              "end": 759
            }
          ],
          "start": 748,
          "end": 761
        },
        "start": 742,
        "end": 762
      },
      "declare": false,
      "start": 731,
      "end": 763
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 779,
        "end": 782
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 790
          },
          "typeArguments": null,
          "start": 785,
          "end": 790
        },
        "indexType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 791,
              "end": 797
            },
            {
              "type": "TSNumberKeyword",
              "start": 800,
              "end": 806
            }
          ],
          "start": 791,
          "end": 806
        },
        "start": 785,
        "end": 807
      },
      "declare": false,
      "start": 774,
      "end": 808
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 827
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 835
          },
          "typeArguments": null,
          "start": 830,
          "end": 835
        },
        "indexType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 836,
              "end": 842
            },
            {
              "type": "TSNumberKeyword",
              "start": 845,
              "end": 851
            }
          ],
          "start": 836,
          "end": 851
        },
        "start": 830,
        "end": 852
      },
      "declare": false,
      "start": 819,
      "end": 853
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 859,
        "end": 862
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shape",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 870
          },
          "typeArguments": null,
          "start": 865,
          "end": 870
        },
        "indexType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 871,
              "end": 877
            },
            {
              "type": "TSBooleanKeyword",
              "start": 880,
              "end": 887
            }
          ],
          "start": 871,
          "end": 887
        },
        "start": 865,
        "end": 888
      },
      "declare": false,
      "start": 854,
      "end": 889
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 909
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 912,
            "end": 918
          },
          "start": 912,
          "end": 920
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 921,
            "end": 929
          },
          "start": 921,
          "end": 929
        },
        "start": 912,
        "end": 930
      },
      "declare": false,
      "start": 901,
      "end": 931
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 937,
        "end": 940
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 943,
            "end": 949
          },
          "start": 943,
          "end": 951
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 952,
          "end": 958
        },
        "start": 943,
        "end": 959
      },
      "declare": false,
      "start": 932,
      "end": 960
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 966,
        "end": 969
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 972,
            "end": 978
          },
          "start": 972,
          "end": 980
        },
        "indexType": {
          "type": "TSStringKeyword",
          "start": 981,
          "end": 987
        },
        "start": 972,
        "end": 988
      },
      "declare": false,
      "start": 961,
      "end": 989
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T33",
        "optional": false,
        "typeAnnotation": null,
        "start": 1005,
        "end": 1008
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 1011,
            "end": 1017
          },
          "start": 1011,
          "end": 1019
        },
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1020,
          "end": 1027
        },
        "start": 1011,
        "end": 1028
      },
      "declare": false,
      "start": 1000,
      "end": 1029
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1049
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 1052,
            "end": 1062
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1063,
                "end": 1069
              }
            ],
            "start": 1062,
            "end": 1070
          },
          "start": 1052,
          "end": 1070
        },
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 1071,
          "end": 1074
        },
        "start": 1052,
        "end": 1075
      },
      "declare": false,
      "start": 1041,
      "end": 1076
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 1082,
        "end": 1085
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 1088,
            "end": 1098
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1099,
                "end": 1105
              }
            ],
            "start": 1098,
            "end": 1106
          },
          "start": 1088,
          "end": 1106
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 1107,
          "end": 1113
        },
        "start": 1088,
        "end": 1114
      },
      "declare": false,
      "start": 1077,
      "end": 1115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null,
        "start": 1121,
        "end": 1124
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1137
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1138,
                "end": 1144
              }
            ],
            "start": 1137,
            "end": 1145
          },
          "start": 1127,
          "end": 1145
        },
        "indexType": {
          "type": "TSStringKeyword",
          "start": 1146,
          "end": 1152
        },
        "start": 1127,
        "end": 1153
      },
      "declare": false,
      "start": 1116,
      "end": 1154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1163
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1176
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1177,
                "end": 1183
              }
            ],
            "start": 1176,
            "end": 1184
          },
          "start": 1166,
          "end": 1184
        },
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1185,
          "end": 1192
        },
        "start": 1166,
        "end": 1193
      },
      "declare": false,
      "start": 1155,
      "end": 1194
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T50",
        "optional": false,
        "typeAnnotation": null,
        "start": 1211,
        "end": 1214
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1217,
          "end": 1220
        },
        "indexType": {
          "type": "TSAnyKeyword",
          "start": 1221,
          "end": 1224
        },
        "start": 1217,
        "end": 1225
      },
      "declare": false,
      "start": 1206,
      "end": 1226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T51",
        "optional": false,
        "typeAnnotation": null,
        "start": 1232,
        "end": 1235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1238,
          "end": 1241
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 1242,
          "end": 1248
        },
        "start": 1238,
        "end": 1249
      },
      "declare": false,
      "start": 1227,
      "end": 1250
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1256,
        "end": 1259
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1262,
          "end": 1265
        },
        "indexType": {
          "type": "TSStringKeyword",
          "start": 1266,
          "end": 1272
        },
        "start": 1262,
        "end": 1273
      },
      "declare": false,
      "start": 1251,
      "end": 1274
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T53",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSAnyKeyword",
          "start": 1286,
          "end": 1289
        },
        "indexType": {
          "type": "TSBooleanKeyword",
          "start": 1290,
          "end": 1297
        },
        "start": 1286,
        "end": 1298
      },
      "declare": false,
      "start": 1275,
      "end": 1299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T60",
        "optional": false,
        "typeAnnotation": null,
        "start": 1316,
        "end": 1319
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 1322,
          "end": 1324
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "toString",
            "raw": "\"toString\"",
            "start": 1325,
            "end": 1335
          },
          "start": 1325,
          "end": 1335
        },
        "start": 1322,
        "end": 1336
      },
      "declare": false,
      "start": 1311,
      "end": 1337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T61",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1346
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 1349,
          "end": 1351
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "toString",
            "raw": "\"toString\"",
            "start": 1352,
            "end": 1362
          },
          "start": 1352,
          "end": 1362
        },
        "start": 1349,
        "end": 1363
      },
      "declare": false,
      "start": 1338,
      "end": 1364
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1384,
                "end": 1391
              },
              "start": 1382,
              "end": 1391
            },
            "start": 1378,
            "end": 1391
          },
          "init": null,
          "definite": false,
          "start": 1378,
          "end": 1391
        }
      ],
      "declare": true,
      "start": 1366,
      "end": 1392
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1403,
        "end": 1414
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
              "start": 1415,
              "end": 1416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1415,
            "end": 1416
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1419
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
                  "start": 1434,
                  "end": 1435
                },
                "typeArguments": null,
                "start": 1434,
                "end": 1435
              },
              "start": 1428,
              "end": 1435
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1418,
            "end": 1435
          }
        ],
        "start": 1414,
        "end": 1436
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
                "start": 1442,
                "end": 1443
              },
              "typeArguments": null,
              "start": 1442,
              "end": 1443
            },
            "start": 1440,
            "end": 1443
          },
          "start": 1437,
          "end": 1443
        },
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
                "start": 1450,
                "end": 1451
              },
              "typeArguments": null,
              "start": 1450,
              "end": 1451
            },
            "start": 1448,
            "end": 1451
          },
          "start": 1445,
          "end": 1451
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1466,
                "end": 1469
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 1470,
                "end": 1473
              },
              "optional": false,
              "computed": true,
              "start": 1466,
              "end": 1474
            },
            "start": 1459,
            "end": 1475
          }
        ],
        "start": 1453,
        "end": 1477
      },
      "expression": false,
      "start": 1394,
      "end": 1477
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1499
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
              "start": 1500,
              "end": 1501
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1500,
            "end": 1501
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1504
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
                  "start": 1519,
                  "end": 1520
                },
                "typeArguments": null,
                "start": 1519,
                "end": 1520
              },
              "start": 1513,
              "end": 1520
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1503,
            "end": 1520
          }
        ],
        "start": 1499,
        "end": 1521
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
                "start": 1527,
                "end": 1528
              },
              "typeArguments": null,
              "start": 1527,
              "end": 1528
            },
            "start": 1525,
            "end": 1528
          },
          "start": 1522,
          "end": 1528
        },
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
                "start": 1535,
                "end": 1536
              },
              "typeArguments": null,
              "start": 1535,
              "end": 1536
            },
            "start": 1533,
            "end": 1536
          },
          "start": 1530,
          "end": 1536
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 1545,
                  "end": 1546
                },
                "typeArguments": null,
                "start": 1545,
                "end": 1546
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
                },
                "typeArguments": null,
                "start": 1547,
                "end": 1548
              },
              "start": 1545,
              "end": 1549
            },
            "start": 1543,
            "end": 1549
          },
          "start": 1538,
          "end": 1549
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1557,
                  "end": 1560
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1564
                },
                "optional": false,
                "computed": true,
                "start": 1557,
                "end": 1565
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1568,
                "end": 1573
              },
              "start": 1557,
              "end": 1573
            },
            "directive": null,
            "start": 1557,
            "end": 1574
          }
        ],
        "start": 1551,
        "end": 1576
      },
      "expression": false,
      "start": 1479,
      "end": 1576
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1587,
        "end": 1590
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1603
              },
              "typeArguments": null,
              "start": 1598,
              "end": 1603
            },
            "start": 1596,
            "end": 1603
          },
          "start": 1591,
          "end": 1603
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1615,
                  "end": 1617
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1620,
                    "end": 1631
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1632,
                      "end": 1637
                    },
                    {
                      "type": "Literal",
                      "value": "name",
                      "raw": "\"name\"",
                      "start": 1639,
                      "end": 1645
                    }
                  ],
                  "optional": false,
                  "start": 1620,
                  "end": 1646
                },
                "definite": false,
                "start": 1615,
                "end": 1646
              }
            ],
            "declare": false,
            "start": 1611,
            "end": 1647
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
                  "start": 1656,
                  "end": 1658
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1661,
                    "end": 1672
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1673,
                      "end": 1678
                    },
                    {
                      "type": "Literal",
                      "value": "size",
                      "raw": "\"size\"",
                      "start": 1680,
                      "end": 1686
                    }
                  ],
                  "optional": false,
                  "start": 1661,
                  "end": 1687
                },
                "definite": false,
                "start": 1656,
                "end": 1687
              }
            ],
            "declare": false,
            "start": 1652,
            "end": 1688
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
                  "start": 1707,
                  "end": 1709
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1712,
                    "end": 1723
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1729
                    },
                    {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1731,
                        "end": 1735
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": "name",
                        "raw": "\"name\"",
                        "start": 1738,
                        "end": 1744
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": "size",
                        "raw": "\"size\"",
                        "start": 1747,
                        "end": 1753
                      },
                      "start": 1731,
                      "end": 1753
                    }
                  ],
                  "optional": false,
                  "start": 1712,
                  "end": 1754
                },
                "definite": false,
                "start": 1707,
                "end": 1754
              }
            ],
            "declare": false,
            "start": 1703,
            "end": 1755
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "setProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 1770,
                "end": 1781
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1782,
                  "end": 1787
                },
                {
                  "type": "Literal",
                  "value": "name",
                  "raw": "\"name\"",
                  "start": 1789,
                  "end": 1795
                },
                {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 1797,
                  "end": 1808
                }
              ],
              "optional": false,
              "start": 1770,
              "end": 1809
            },
            "directive": null,
            "start": 1770,
            "end": 1810
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "setProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 1815,
                "end": 1826
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1827,
                  "end": 1832
                },
                {
                  "type": "Literal",
                  "value": "size",
                  "raw": "\"size\"",
                  "start": 1834,
                  "end": 1840
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1842,
                  "end": 1844
                }
              ],
              "optional": false,
              "start": 1815,
              "end": 1845
            },
            "directive": null,
            "start": 1815,
            "end": 1846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "setProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 1861,
                "end": 1872
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1878
                },
                {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1880,
                    "end": 1884
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 1887,
                    "end": 1893
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "size",
                    "raw": "\"size\"",
                    "start": 1896,
                    "end": 1902
                  },
                  "start": 1880,
                  "end": 1902
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1904,
                  "end": 1906
                }
              ],
              "optional": false,
              "start": 1861,
              "end": 1907
            },
            "directive": null,
            "start": 1861,
            "end": 1908
          }
        ],
        "start": 1605,
        "end": 1920
      },
      "expression": false,
      "start": 1578,
      "end": 1920
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1931,
        "end": 1934
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
              "start": 1935,
              "end": 1936
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1935,
            "end": 1936
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1938,
            "end": 1939
          }
        ],
        "start": 1934,
        "end": 1940
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
                    "start": 1944,
                    "end": 1945
                  },
                  "typeArguments": null,
                  "start": 1944,
                  "end": 1945
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1948,
                    "end": 1949
                  },
                  "typeArguments": null,
                  "start": 1948,
                  "end": 1949
                }
              ],
              "start": 1944,
              "end": 1949
            },
            "start": 1942,
            "end": 1949
          },
          "start": 1941,
          "end": 1949
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1954,
                    "end": 1955
                  },
                  "typeArguments": null,
                  "start": 1954,
                  "end": 1955
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1958,
                    "end": 1959
                  },
                  "typeArguments": null,
                  "start": 1958,
                  "end": 1959
                }
              ],
              "start": 1954,
              "end": 1959
            },
            "start": 1952,
            "end": 1959
          },
          "start": 1951,
          "end": 1959
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
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
                      "start": 1972,
                      "end": 1973
                    },
                    "typeArguments": null,
                    "start": 1972,
                    "end": 1973
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1976,
                      "end": 1977
                    },
                    "typeArguments": null,
                    "start": 1976,
                    "end": 1977
                  }
                ],
                "start": 1972,
                "end": 1977
              },
              "start": 1965,
              "end": 1978
            },
            "start": 1963,
            "end": 1978
          },
          "start": 1961,
          "end": 1978
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1990,
                      "end": 1991
                    },
                    "typeArguments": null,
                    "start": 1990,
                    "end": 1991
                  },
                  "start": 1984,
                  "end": 1991
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2000,
                      "end": 2001
                    },
                    "typeArguments": null,
                    "start": 2000,
                    "end": 2001
                  },
                  "start": 1994,
                  "end": 2001
                }
              ],
              "start": 1984,
              "end": 2001
            },
            "start": 1982,
            "end": 2001
          },
          "start": 1980,
          "end": 2001
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2014,
                      "end": 2015
                    },
                    "typeArguments": null,
                    "start": 2014,
                    "end": 2015
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2018,
                      "end": 2019
                    },
                    "typeArguments": null,
                    "start": 2018,
                    "end": 2019
                  }
                ],
                "start": 2014,
                "end": 2019
              },
              "start": 2007,
              "end": 2020
            },
            "start": 2005,
            "end": 2020
          },
          "start": 2003,
          "end": 2020
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
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
                      "start": 2032,
                      "end": 2033
                    },
                    "typeArguments": null,
                    "start": 2032,
                    "end": 2033
                  },
                  "start": 2026,
                  "end": 2033
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2042,
                      "end": 2043
                    },
                    "typeArguments": null,
                    "start": 2042,
                    "end": 2043
                  },
                  "start": 2036,
                  "end": 2043
                }
              ],
              "start": 2026,
              "end": 2043
            },
            "start": 2024,
            "end": 2043
          },
          "start": 2022,
          "end": 2043
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2051,
                "end": 2052
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2055
              },
              "optional": false,
              "computed": true,
              "start": 2051,
              "end": 2056
            },
            "directive": null,
            "start": 2051,
            "end": 2057
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2062,
                "end": 2063
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2064,
                "end": 2066
              },
              "optional": false,
              "computed": true,
              "start": 2062,
              "end": 2067
            },
            "directive": null,
            "start": 2062,
            "end": 2068
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2073,
                "end": 2074
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2075,
                "end": 2077
              },
              "optional": false,
              "computed": true,
              "start": 2073,
              "end": 2078
            },
            "directive": null,
            "start": 2073,
            "end": 2079
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2094,
                "end": 2095
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2096,
                "end": 2098
              },
              "optional": false,
              "computed": true,
              "start": 2094,
              "end": 2099
            },
            "directive": null,
            "start": 2094,
            "end": 2100
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2116,
                "end": 2117
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2118,
                "end": 2120
              },
              "optional": false,
              "computed": true,
              "start": 2116,
              "end": 2121
            },
            "directive": null,
            "start": 2116,
            "end": 2122
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2127,
                "end": 2128
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2129,
                "end": 2131
              },
              "optional": false,
              "computed": true,
              "start": 2127,
              "end": 2132
            },
            "directive": null,
            "start": 2127,
            "end": 2133
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2138,
                "end": 2139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2140,
                "end": 2142
              },
              "optional": false,
              "computed": true,
              "start": 2138,
              "end": 2143
            },
            "directive": null,
            "start": 2138,
            "end": 2144
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2149,
                "end": 2150
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2151,
                "end": 2153
              },
              "optional": false,
              "computed": true,
              "start": 2149,
              "end": 2154
            },
            "directive": null,
            "start": 2149,
            "end": 2155
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2161,
                "end": 2163
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2166,
                "end": 2168
              },
              "start": 2161,
              "end": 2168
            },
            "directive": null,
            "start": 2161,
            "end": 2169
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2174,
                "end": 2176
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2179,
                "end": 2181
              },
              "start": 2174,
              "end": 2181
            },
            "directive": null,
            "start": 2174,
            "end": 2182
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2197,
                "end": 2199
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2202,
                "end": 2204
              },
              "start": 2197,
              "end": 2204
            },
            "directive": null,
            "start": 2197,
            "end": 2205
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2221,
                "end": 2223
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2226,
                "end": 2228
              },
              "start": 2221,
              "end": 2228
            },
            "directive": null,
            "start": 2221,
            "end": 2229
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2234,
                "end": 2236
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2239,
                "end": 2241
              },
              "start": 2234,
              "end": 2241
            },
            "directive": null,
            "start": 2234,
            "end": 2242
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2257,
                "end": 2259
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2262,
                "end": 2264
              },
              "start": 2257,
              "end": 2264
            },
            "directive": null,
            "start": 2257,
            "end": 2265
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2281,
                "end": 2283
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2286,
                "end": 2288
              },
              "start": 2281,
              "end": 2288
            },
            "directive": null,
            "start": 2281,
            "end": 2289
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2294,
                "end": 2296
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2299,
                "end": 2301
              },
              "start": 2294,
              "end": 2301
            },
            "directive": null,
            "start": 2294,
            "end": 2302
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2307,
                "end": 2309
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2312,
                "end": 2314
              },
              "start": 2307,
              "end": 2314
            },
            "directive": null,
            "start": 2307,
            "end": 2315
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2321,
                "end": 2323
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2326,
                "end": 2328
              },
              "start": 2321,
              "end": 2328
            },
            "directive": null,
            "start": 2321,
            "end": 2329
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2334,
                "end": 2336
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2339,
                "end": 2341
              },
              "start": 2334,
              "end": 2341
            },
            "directive": null,
            "start": 2334,
            "end": 2342
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2347,
                "end": 2349
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2352,
                "end": 2354
              },
              "start": 2347,
              "end": 2354
            },
            "directive": null,
            "start": 2347,
            "end": 2355
          }
        ],
        "start": 2045,
        "end": 2357
      },
      "expression": false,
      "start": 1922,
      "end": 2357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2389,
        "end": 2391
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
              "start": 2392,
              "end": 2393
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2392,
            "end": 2393
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2395,
              "end": 2396
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 2405,
                "end": 2412
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
                        "start": 2419,
                        "end": 2420
                      },
                      "typeArguments": null,
                      "start": 2419,
                      "end": 2420
                    },
                    "start": 2413,
                    "end": 2420
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2422,
                    "end": 2428
                  }
                ],
                "start": 2412,
                "end": 2429
              },
              "start": 2405,
              "end": 2429
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2395,
            "end": 2429
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2431,
              "end": 2432
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2441,
                "end": 2442
              },
              "typeArguments": null,
              "start": 2441,
              "end": 2442
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2431,
            "end": 2442
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null,
              "start": 2444,
              "end": 2445
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2454,
                "end": 2455
              },
              "typeArguments": null,
              "start": 2454,
              "end": 2455
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2444,
            "end": 2455
          }
        ],
        "start": 2391,
        "end": 2456
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2465,
                "end": 2466
              },
              "typeArguments": null,
              "start": 2465,
              "end": 2466
            },
            "start": 2463,
            "end": 2466
          },
          "start": 2462,
          "end": 2466
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
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
                "start": 2471,
                "end": 2472
              },
              "typeArguments": null,
              "start": 2471,
              "end": 2472
            },
            "start": 2469,
            "end": 2472
          },
          "start": 2468,
          "end": 2472
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tk",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 2478,
                  "end": 2479
                },
                "typeArguments": null,
                "start": 2478,
                "end": 2479
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2480,
                  "end": 2481
                },
                "typeArguments": null,
                "start": 2480,
                "end": 2481
              },
              "start": 2478,
              "end": 2482
            },
            "start": 2476,
            "end": 2482
          },
          "start": 2474,
          "end": 2482
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2487,
                "end": 2488
              },
              "typeArguments": null,
              "start": 2487,
              "end": 2488
            },
            "start": 2485,
            "end": 2488
          },
          "start": 2484,
          "end": 2488
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "J",
                "optional": false,
                "typeAnnotation": null,
                "start": 2493,
                "end": 2494
              },
              "typeArguments": null,
              "start": 2493,
              "end": 2494
            },
            "start": 2491,
            "end": 2494
          },
          "start": 2490,
          "end": 2494
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "uk",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2500,
                  "end": 2501
                },
                "typeArguments": null,
                "start": 2500,
                "end": 2501
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2502,
                  "end": 2503
                },
                "typeArguments": null,
                "start": 2502,
                "end": 2503
              },
              "start": 2500,
              "end": 2504
            },
            "start": 2498,
            "end": 2504
          },
          "start": 2496,
          "end": 2504
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 2510,
                  "end": 2511
                },
                "typeArguments": null,
                "start": 2510,
                "end": 2511
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "J",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2512,
                  "end": 2513
                },
                "typeArguments": null,
                "start": 2512,
                "end": 2513
              },
              "start": 2510,
              "end": 2514
            },
            "start": 2508,
            "end": 2514
          },
          "start": 2506,
          "end": 2514
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "uj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2520,
                  "end": 2521
                },
                "typeArguments": null,
                "start": 2520,
                "end": 2521
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "J",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2522,
                  "end": 2523
                },
                "typeArguments": null,
                "start": 2522,
                "end": 2523
              },
              "start": 2520,
              "end": 2524
            },
            "start": 2518,
            "end": 2524
          },
          "start": 2516,
          "end": 2524
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2527,
          "end": 2531
        },
        "start": 2525,
        "end": 2531
      },
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2547,
                    "end": 2550
                  },
                  "init": null,
                  "definite": false,
                  "start": 2547,
                  "end": 2550
                }
              ],
              "declare": false,
              "start": 2543,
              "end": 2550
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2554,
              "end": 2555
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2567,
                      "end": 2570
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2573,
                      "end": 2574
                    },
                    "start": 2567,
                    "end": 2574
                  },
                  "directive": null,
                  "start": 2567,
                  "end": 2574
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2604,
                      "end": 2605
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2608,
                      "end": 2611
                    },
                    "start": 2604,
                    "end": 2611
                  },
                  "directive": null,
                  "start": 2604,
                  "end": 2611
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2645,
                        "end": 2646
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2647,
                        "end": 2650
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2645,
                      "end": 2651
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tk",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2654,
                      "end": 2656
                    },
                    "start": 2645,
                    "end": 2656
                  },
                  "directive": null,
                  "start": 2645,
                  "end": 2657
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tk",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2693,
                      "end": 2695
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2698,
                        "end": 2699
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2700,
                        "end": 2703
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2698,
                      "end": 2704
                    },
                    "start": 2693,
                    "end": 2704
                  },
                  "directive": null,
                  "start": 2693,
                  "end": 2705
                }
              ],
              "start": 2557,
              "end": 2742
            },
            "start": 2538,
            "end": 2742
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2747,
                "end": 2749
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2752,
                "end": 2754
              },
              "start": 2747,
              "end": 2754
            },
            "directive": null,
            "start": 2747,
            "end": 2755
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2760,
                "end": 2762
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2765,
                "end": 2767
              },
              "start": 2760,
              "end": 2767
            },
            "directive": null,
            "start": 2760,
            "end": 2768
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2783,
                "end": 2785
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2788,
                "end": 2790
              },
              "start": 2783,
              "end": 2790
            },
            "directive": null,
            "start": 2783,
            "end": 2791
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2796,
                "end": 2798
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2801,
                "end": 2803
              },
              "start": 2796,
              "end": 2803
            },
            "directive": null,
            "start": 2796,
            "end": 2804
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2819,
                "end": 2821
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2824,
                "end": 2826
              },
              "start": 2819,
              "end": 2826
            },
            "directive": null,
            "start": 2819,
            "end": 2827
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2832,
                "end": 2834
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2837,
                "end": 2839
              },
              "start": 2832,
              "end": 2839
            },
            "directive": null,
            "start": 2832,
            "end": 2840
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2855,
                "end": 2857
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "uj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2860,
                "end": 2862
              },
              "start": 2855,
              "end": 2862
            },
            "directive": null,
            "start": 2855,
            "end": 2863
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "uj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2868,
                "end": 2870
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tk",
                "optional": false,
                "typeAnnotation": null,
                "start": 2873,
                "end": 2875
              },
              "start": 2868,
              "end": 2875
            },
            "directive": null,
            "start": 2868,
            "end": 2876
          }
        ],
        "start": 2532,
        "end": 2887
      },
      "expression": false,
      "start": 2380,
      "end": 2887
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2942,
        "end": 2944
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
              "start": 2945,
              "end": 2946
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2958,
                "end": 2959
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
                    "start": 2969,
                    "end": 2970
                  },
                  "typeArguments": null,
                  "start": 2969,
                  "end": 2970
                },
                "start": 2963,
                "end": 2970
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2973,
                "end": 2979
              },
              "optional": false,
              "readonly": null,
              "start": 2955,
              "end": 2981
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2945,
            "end": 2981
          }
        ],
        "start": 2944,
        "end": 2982
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 2992,
                  "end": 2993
                },
                "typeArguments": null,
                "start": 2992,
                "end": 2993
              },
              "start": 2986,
              "end": 2993
            },
            "start": 2984,
            "end": 2993
          },
          "start": 2983,
          "end": 2993
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
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 3001,
                "end": 3002
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 3005,
                "end": 3007
              },
              "start": 3001,
              "end": 3007
            },
            "directive": null,
            "start": 3001,
            "end": 3008
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 3022,
                "end": 3023
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3026,
                "end": 3033
              },
              "start": 3022,
              "end": 3033
            },
            "directive": null,
            "start": 3022,
            "end": 3034
          }
        ],
        "start": 2995,
        "end": 3045
      },
      "expression": false,
      "start": 2933,
      "end": 3045
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UndefinedKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 3074,
        "end": 3087
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
              "start": 3088,
              "end": 3089
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3098,
                "end": 3104
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3105,
                    "end": 3111
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3113,
                    "end": 3116
                  }
                ],
                "start": 3104,
                "end": 3117
              },
              "start": 3098,
              "end": 3117
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3088,
            "end": 3117
          }
        ],
        "start": 3087,
        "end": 3118
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 3126,
          "end": 3127
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
              "start": 3137,
              "end": 3138
            },
            "typeArguments": null,
            "start": 3137,
            "end": 3138
          },
          "start": 3131,
          "end": 3138
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSUndefinedKeyword",
            "start": 3141,
            "end": 3150
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
                "start": 3159,
                "end": 3160
              },
              "typeArguments": null,
              "start": 3159,
              "end": 3160
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3161,
                "end": 3162
              },
              "typeArguments": null,
              "start": 3161,
              "end": 3162
            },
            "start": 3159,
            "end": 3163
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3166,
              "end": 3167
            },
            "typeArguments": null,
            "start": 3166,
            "end": 3167
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3170,
            "end": 3175
          },
          "start": 3141,
          "end": 3175
        },
        "optional": false,
        "readonly": null,
        "start": 3121,
        "end": 3177
      },
      "declare": false,
      "start": 3069,
      "end": 3178
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3185,
        "end": 3191
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3195,
              "end": 3196
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3198,
                "end": 3204
              },
              "start": 3196,
              "end": 3204
            },
            "accessibility": null,
            "static": false,
            "start": 3195,
            "end": 3205
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
              "start": 3206,
              "end": 3207
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3209,
                    "end": 3215
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 3218,
                    "end": 3227
                  }
                ],
                "start": 3209,
                "end": 3227
              },
              "start": 3207,
              "end": 3227
            },
            "accessibility": null,
            "static": false,
            "start": 3206,
            "end": 3227
          }
        ],
        "start": 3194,
        "end": 3228
      },
      "declare": false,
      "start": 3180,
      "end": 3228
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3235,
        "end": 3242
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UndefinedKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3245,
          "end": 3258
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "typeAnnotation": null,
                "start": 3259,
                "end": 3265
              },
              "typeArguments": null,
              "start": 3259,
              "end": 3265
            }
          ],
          "start": 3258,
          "end": 3266
        },
        "start": 3245,
        "end": 3266
      },
      "declare": false,
      "start": 3230,
      "end": 3267
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3279,
                    "end": 3286
                  },
                  "typeArguments": null,
                  "start": 3279,
                  "end": 3286
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 3287,
                    "end": 3290
                  },
                  "start": 3287,
                  "end": 3290
                },
                "start": 3279,
                "end": 3291
              },
              "start": 3277,
              "end": 3291
            },
            "start": 3275,
            "end": 3291
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 3294,
            "end": 3297
          },
          "definite": false,
          "start": 3275,
          "end": 3297
        }
      ],
      "declare": false,
      "start": 3269,
      "end": 3298
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3319,
                    "end": 3326
                  },
                  "typeArguments": null,
                  "start": 3319,
                  "end": 3326
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 3327,
                    "end": 3330
                  },
                  "start": 3327,
                  "end": 3330
                },
                "start": 3319,
                "end": 3331
              },
              "start": 3317,
              "end": 3331
            },
            "start": 3315,
            "end": 3331
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 3334,
            "end": 3337
          },
          "definite": false,
          "start": 3315,
          "end": 3337
        }
      ],
      "declare": false,
      "start": 3309,
      "end": 3338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3349,
        "end": 3354
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
              "start": 3355,
              "end": 3356
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3365,
                "end": 3371
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3372,
                    "end": 3378
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3380,
                    "end": 3383
                  }
                ],
                "start": 3371,
                "end": 3384
              },
              "start": 3365,
              "end": 3384
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3355,
            "end": 3384
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3386,
              "end": 3387
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
                  "start": 3402,
                  "end": 3403
                },
                "typeArguments": null,
                "start": 3402,
                "end": 3403
              },
              "start": 3396,
              "end": 3403
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3386,
            "end": 3403
          }
        ],
        "start": 3354,
        "end": 3404
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3408,
                "end": 3409
              },
              "typeArguments": null,
              "start": 3408,
              "end": 3409
            },
            "start": 3406,
            "end": 3409
          },
          "start": 3405,
          "end": 3409
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
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
                "start": 3414,
                "end": 3415
              },
              "typeArguments": null,
              "start": 3414,
              "end": 3415
            },
            "start": 3412,
            "end": 3415
          },
          "start": 3411,
          "end": 3415
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3423,
                  "end": 3424
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3425,
                  "end": 3426
                },
                "optional": false,
                "computed": true,
                "start": 3423,
                "end": 3427
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 3430,
                "end": 3432
              },
              "start": 3423,
              "end": 3432
            },
            "directive": null,
            "start": 3423,
            "end": 3433
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3448,
                  "end": 3449
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3450,
                  "end": 3451
                },
                "optional": false,
                "computed": true,
                "start": 3448,
                "end": 3452
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3455,
                "end": 3462
              },
              "start": 3448,
              "end": 3462
            },
            "directive": null,
            "start": 3448,
            "end": 3463
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3478,
                  "end": 3479
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3480,
                  "end": 3481
                },
                "optional": false,
                "computed": true,
                "start": 3478,
                "end": 3482
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 3486,
                    "end": 3488
                  },
                  {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 3490,
                    "end": 3492
                  }
                ],
                "start": 3485,
                "end": 3493
              },
              "start": 3478,
              "end": 3493
            },
            "directive": null,
            "start": 3478,
            "end": 3494
          }
        ],
        "start": 3417,
        "end": 3506
      },
      "expression": false,
      "start": 3340,
      "end": 3506
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 3539,
        "end": 3542
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
              "start": 3543,
              "end": 3544
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3543,
            "end": 3544
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3546,
              "end": 3547
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
                  "start": 3562,
                  "end": 3563
                },
                "typeArguments": null,
                "start": 3562,
                "end": 3563
              },
              "start": 3556,
              "end": 3563
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3546,
            "end": 3563
          }
        ],
        "start": 3542,
        "end": 3564
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3580,
                          "end": 3587
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Record",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3588,
                                "end": 3594
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
                                        "start": 3601,
                                        "end": 3602
                                      },
                                      "typeArguments": null,
                                      "start": 3601,
                                      "end": 3602
                                    },
                                    "start": 3595,
                                    "end": 3602
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 3604,
                                    "end": 3610
                                  }
                                ],
                                "start": 3594,
                                "end": 3611
                              },
                              "start": 3588,
                              "end": 3611
                            }
                          ],
                          "start": 3587,
                          "end": 3612
                        },
                        "start": 3580,
                        "end": 3612
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3613,
                          "end": 3614
                        },
                        "typeArguments": null,
                        "start": 3613,
                        "end": 3614
                      },
                      "start": 3580,
                      "end": 3615
                    },
                    "start": 3578,
                    "end": 3615
                  },
                  "start": 3577,
                  "end": 3615
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 3618,
                  "end": 3625
                },
                "definite": false,
                "start": 3577,
                "end": 3625
              }
            ],
            "declare": false,
            "start": 3573,
            "end": 3626
          }
        ],
        "start": 3567,
        "end": 3628
      },
      "expression": false,
      "start": 3530,
      "end": 3628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 3639,
        "end": 3642
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
              "start": 3643,
              "end": 3644
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3643,
            "end": 3644
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3646,
              "end": 3647
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
                  "start": 3662,
                  "end": 3663
                },
                "typeArguments": null,
                "start": 3662,
                "end": 3663
              },
              "start": 3656,
              "end": 3663
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3646,
            "end": 3663
          }
        ],
        "start": 3642,
        "end": 3664
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3680,
                          "end": 3687
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Partial",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3688,
                                "end": 3695
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Partial",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3696,
                                      "end": 3703
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Partial",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3704,
                                            "end": 3711
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Partial",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3712,
                                                  "end": 3719
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "Partial",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3720,
                                                        "end": 3727
                                                      },
                                                      "typeArguments": {
                                                        "type": "TSTypeParameterInstantiation",
                                                        "params": [
                                                          {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "Partial",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 3728,
                                                              "end": 3735
                                                            },
                                                            "typeArguments": {
                                                              "type": "TSTypeParameterInstantiation",
                                                              "params": [
                                                                {
                                                                  "type": "TSTypeReference",
                                                                  "typeName": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "Record",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 3736,
                                                                    "end": 3742
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
                                                                            "start": 3749,
                                                                            "end": 3750
                                                                          },
                                                                          "typeArguments": null,
                                                                          "start": 3749,
                                                                          "end": 3750
                                                                        },
                                                                        "start": 3743,
                                                                        "end": 3750
                                                                      },
                                                                      {
                                                                        "type": "TSStringKeyword",
                                                                        "start": 3752,
                                                                        "end": 3758
                                                                      }
                                                                    ],
                                                                    "start": 3742,
                                                                    "end": 3759
                                                                  },
                                                                  "start": 3736,
                                                                  "end": 3759
                                                                }
                                                              ],
                                                              "start": 3735,
                                                              "end": 3760
                                                            },
                                                            "start": 3728,
                                                            "end": 3760
                                                          }
                                                        ],
                                                        "start": 3727,
                                                        "end": 3761
                                                      },
                                                      "start": 3720,
                                                      "end": 3761
                                                    }
                                                  ],
                                                  "start": 3719,
                                                  "end": 3762
                                                },
                                                "start": 3712,
                                                "end": 3762
                                              }
                                            ],
                                            "start": 3711,
                                            "end": 3763
                                          },
                                          "start": 3704,
                                          "end": 3763
                                        }
                                      ],
                                      "start": 3703,
                                      "end": 3764
                                    },
                                    "start": 3696,
                                    "end": 3764
                                  }
                                ],
                                "start": 3695,
                                "end": 3765
                              },
                              "start": 3688,
                              "end": 3765
                            }
                          ],
                          "start": 3687,
                          "end": 3766
                        },
                        "start": 3680,
                        "end": 3766
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3767,
                          "end": 3768
                        },
                        "typeArguments": null,
                        "start": 3767,
                        "end": 3768
                      },
                      "start": 3680,
                      "end": 3769
                    },
                    "start": 3678,
                    "end": 3769
                  },
                  "start": 3677,
                  "end": 3769
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 3772,
                  "end": 3779
                },
                "definite": false,
                "start": 3677,
                "end": 3779
              }
            ],
            "declare": false,
            "start": 3673,
            "end": 3780
          }
        ],
        "start": 3667,
        "end": 3782
      },
      "expression": false,
      "start": 3630,
      "end": 3782
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 3812,
        "end": 3816
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
              "start": 3817,
              "end": 3818
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3827,
                "end": 3833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3834,
                    "end": 3840
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3842,
                    "end": 3848
                  }
                ],
                "start": 3833,
                "end": 3849
              },
              "start": 3827,
              "end": 3849
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3817,
            "end": 3849
          }
        ],
        "start": 3816,
        "end": 3850
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
              "name": "testy",
              "optional": false,
              "typeAnnotation": null,
              "start": 3855,
              "end": 3860
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
                  "start": 3862,
                  "end": 3863
                },
                "typeArguments": null,
                "start": 3862,
                "end": 3863
              },
              "start": 3860,
              "end": 3863
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
            "start": 3855,
            "end": 3864
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
              "start": 3868,
              "end": 3879
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
                  "name": "t",
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
                        "start": 3883,
                        "end": 3884
                      },
                      "typeArguments": null,
                      "start": 3883,
                      "end": 3884
                    },
                    "start": 3881,
                    "end": 3884
                  },
                  "start": 3880,
                  "end": 3884
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
                          "start": 3892,
                          "end": 3896
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "testy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3897,
                          "end": 3902
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3892,
                        "end": 3902
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3905,
                        "end": 3906
                      },
                      "start": 3892,
                      "end": 3906
                    },
                    "directive": null,
                    "start": 3892,
                    "end": 3907
                  }
                ],
                "start": 3886,
                "end": 3911
              },
              "expression": false,
              "start": 3879,
              "end": 3911
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3868,
            "end": 3911
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 3922,
              "end": 3923
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                          "start": 3935,
                          "end": 3936
                        },
                        "typeArguments": null,
                        "start": 3935,
                        "end": 3936
                      },
                      "start": 3929,
                      "end": 3936
                    },
                    "start": 3927,
                    "end": 3936
                  },
                  "start": 3924,
                  "end": 3936
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3939,
                  "end": 3945
                },
                "start": 3937,
                "end": 3945
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3952,
                            "end": 3956
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3957,
                            "end": 3962
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3952,
                          "end": 3962
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3963,
                          "end": 3966
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3952,
                        "end": 3967
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3971,
                        "end": 3972
                      },
                      "start": 3952,
                      "end": 3972
                    },
                    "directive": null,
                    "start": 3952,
                    "end": 3973
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 3995,
                          "end": 3999
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "testy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4000,
                          "end": 4005
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3995,
                        "end": 4005
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4006,
                        "end": 4009
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3995,
                      "end": 4010
                    },
                    "start": 3988,
                    "end": 4011
                  }
                ],
                "start": 3946,
                "end": 4015
              },
              "expression": false,
              "start": 3923,
              "end": 4015
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3915,
            "end": 4015
          }
        ],
        "start": 3851,
        "end": 4017
      },
      "abstract": false,
      "declare": false,
      "start": 3806,
      "end": 4017
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4017
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "visible",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 96,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 101,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "start": 138,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "T00",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "K0",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 170,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 195,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 206,
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
    "value": "Object",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 226,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 243,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 292,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 306,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 335,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 341,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 355,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "T06",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 366,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 372,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 378,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 384,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 390,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 396,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 411,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 437,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 453,
    "end": 454
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 454,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 472,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 483,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 488,
    "end": 489
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 496,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 516,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 527,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 549,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 560,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 566,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 585,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 602,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 621,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "T16",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 632,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 638,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 658,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "T17",
    "start": 663,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 669,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 675,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 692,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "T18",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 703,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 709,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 718,
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
    "value": "type",
    "start": 731,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "T19",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 742,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 774,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 779,
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
    "value": "Shape",
    "start": 785,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 819,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 845,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 854,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 859,
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
    "value": "Shape",
    "start": 865,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 880,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 901,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 906,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 912,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 921,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 932,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 937,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 943,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 952,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 961,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "T32",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 972,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 981,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "T33",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1011,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1020,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1041,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "T40",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 1052,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1077,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "T41",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 1088,
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
    "value": "string",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1107,
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
    "value": ";",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "T42",
    "start": 1121,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 1127,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1155,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "T43",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 1166,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1177,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1185,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1206,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "T50",
    "start": 1211,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "T51",
    "start": 1232,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1238,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1242,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "T52",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1262,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1266,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1275,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "T53",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "T60",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 1325,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1338,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "T61",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 1352,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1366,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1378,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1384,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1394,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "getProperty",
    "start": 1403,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1420,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1428,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1434,
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
    "value": "obj",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1445,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1459,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1466,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1479,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "setProperty",
    "start": 1488,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1505,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1513,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1538,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1557,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1568,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1578,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1587,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1591,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1598,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1611,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1615,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "getProperty",
    "start": 1620,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1632,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1639,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1652,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1656,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "getProperty",
    "start": 1661,
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
    "value": "shape",
    "start": 1673,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "String",
    "value": "\"size\"",
    "start": 1680,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1703,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1707,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "getProperty",
    "start": 1712,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1724,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1731,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1738,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "String",
    "value": "\"size\"",
    "start": 1747,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "setProperty",
    "start": 1770,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1782,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1789,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 1797,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "setProperty",
    "start": 1815,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1827,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "String",
    "value": "\"size\"",
    "start": 1834,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1842,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "setProperty",
    "start": 1861,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 1873,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1880,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 1887,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "String",
    "value": "\"size\"",
    "start": 1896,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1904,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1922,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1931,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 1961,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1965,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1980,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1984,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1994,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2003,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2007,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2022,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2026,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2036,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2053,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2064,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2075,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2096,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2118,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2129,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2140,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2151,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2161,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2166,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2174,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2179,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2197,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2202,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2221,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2226,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2234,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2239,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2257,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2262,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2281,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2286,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2294,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2299,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2307,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2312,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2321,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2326,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2334,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2339,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 2347,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2352,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2380,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2389,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2397,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 2405,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2413,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2422,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2433,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2446,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2474,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "uk",
    "start": 2496,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "tj",
    "start": 2506,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "uj",
    "start": 2516,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2527,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2538,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2543,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2547,
    "end": 2550
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2551,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2567,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2608,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2647,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2654,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2693,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2700,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2747,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "uk",
    "start": 2752,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "uk",
    "start": 2760,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2765,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Identifier",
    "value": "tj",
    "start": 2783,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "uj",
    "start": 2788,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "uj",
    "start": 2796,
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
    "value": "tj",
    "start": 2801,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2819,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "tj",
    "start": 2824,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "tj",
    "start": 2832,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2837,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2855,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "uj",
    "start": 2860,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "uj",
    "start": 2868,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "tk",
    "start": 2873,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2933,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2942,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2947,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2960,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2963,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2973,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2986,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3005,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3026,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3069,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "UndefinedKeys",
    "start": 3074,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3090,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3098,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3105,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3113,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3128,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3131,
    "end": 3136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3141,
    "end": 3150
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3151,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3170,
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
    "type": "Identifier",
    "value": "type",
    "start": 3180,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 3185,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3198,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3209,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3218,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3230,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "Result1",
    "start": 3235,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "UndefinedKeys",
    "start": 3245,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 3259,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3269,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 3275,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Identifier",
    "value": "Result1",
    "start": 3279,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3287,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3294,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3309,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 3315,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "Result1",
    "start": 3319,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3327,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3334,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3340,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 3349,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3357,
    "end": 3364
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3365,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3372,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3380,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3388,
    "end": 3395
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3396,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3430,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3455,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3486,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 3490,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3530,
    "end": 3538
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 3539,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3543,
    "end": 3544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3548,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3556,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3573,
    "end": 3576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3580,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3588,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3595,
    "end": 3600
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3604,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3618,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3627,
    "end": 3628
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3630,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "f31",
    "start": 3639,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3648,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3656,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3673,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3680,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3688,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3696,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3704,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3712,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3720,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3728,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3736,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3743,
    "end": 3748
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3752,
    "end": 3758
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3772,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3806,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 3812,
    "end": 3816
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3819,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3827,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3834,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3842,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Identifier",
    "value": "testy",
    "start": 3855,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3868,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3892,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "testy",
    "start": 3897,
    "end": 3902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3915,
    "end": 3921
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3924,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3929,
    "end": 3934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3939,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3952,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Identifier",
    "value": "testy",
    "start": 3957,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3963,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 3968,
    "end": 3970
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3988,
    "end": 3994
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3995,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Identifier",
    "value": "testy",
    "start": 4000,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4006,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4016,
    "end": 4017
  }
]
```

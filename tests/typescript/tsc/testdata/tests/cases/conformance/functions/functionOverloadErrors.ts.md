__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 64,
            "end": 65
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 65
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 47,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 80
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 83,
        "end": 86
      },
      "expression": false,
      "start": 68,
      "end": 86
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 160
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 147,
      "end": 163
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 177
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 164,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 194
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 197,
        "end": 201
      },
      "expression": false,
      "start": 181,
      "end": 201
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 215
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 219,
                "end": 225
              },
              "start": 219,
              "end": 227
            },
            "start": 217,
            "end": 227
          },
          "start": 216,
          "end": 227
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 202,
      "end": 229
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 243
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 252
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 253,
                    "end": 259
                  }
                ],
                "start": 252,
                "end": 260
              },
              "start": 247,
              "end": 260
            },
            "start": 245,
            "end": 260
          },
          "start": 244,
          "end": 260
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 230,
      "end": 262
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 276
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 279,
        "end": 282
      },
      "expression": false,
      "start": 263,
      "end": 282
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 365,
        "end": 368
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 372,
              "end": 378
            },
            "start": 370,
            "end": 378
          },
          "start": 369,
          "end": 378
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 381,
          "end": 387
        },
        "start": 379,
        "end": 387
      },
      "body": null,
      "expression": false,
      "start": 356,
      "end": 388
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 401
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 405,
              "end": 411
            },
            "start": 403,
            "end": 411
          },
          "start": 402,
          "end": 411
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 414,
          "end": 420
        },
        "start": 412,
        "end": 420
      },
      "body": null,
      "expression": false,
      "start": 389,
      "end": 421
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 434
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 438,
          "end": 441
        },
        "start": 436,
        "end": 441
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 455,
              "end": 459
            },
            "start": 448,
            "end": 460
          }
        ],
        "start": 442,
        "end": 462
      },
      "expression": false,
      "start": 422,
      "end": 462
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 556
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 561
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 563,
                "end": 566
              },
              "start": 563,
              "end": 568
            },
            "start": 561,
            "end": 568
          },
          "value": null,
          "start": 557,
          "end": 568
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 544,
      "end": 570
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 583
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 588,
              "end": 591
            },
            "start": 586,
            "end": 591
          },
          "start": 584,
          "end": 591
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 571,
      "end": 593
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 606
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 609,
        "end": 612
      },
      "expression": false,
      "start": 594,
      "end": 612
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 704
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 709
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 711,
                "end": 714
              },
              "start": 711,
              "end": 716
            },
            "start": 709,
            "end": 716
          },
          "value": null,
          "start": 705,
          "end": 716
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 692,
      "end": 718
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null,
        "start": 728,
        "end": 731
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 736,
              "end": 739
            },
            "start": 734,
            "end": 739
          },
          "start": 732,
          "end": 739
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 745,
              "end": 748
            },
            "start": 743,
            "end": 748
          },
          "start": 741,
          "end": 748
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 754,
              "end": 757
            },
            "start": 752,
            "end": 757
          },
          "start": 750,
          "end": 757
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 719,
      "end": 759
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 772
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 775,
        "end": 778
      },
      "expression": false,
      "start": 760,
      "end": 778
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 850,
        "end": 853
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
              "start": 854,
              "end": 855
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 854,
            "end": 855
          }
        ],
        "start": 853,
        "end": 856
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 860,
              "end": 866
            },
            "start": 858,
            "end": 866
          },
          "start": 857,
          "end": 866
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 841,
      "end": 868
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 878,
        "end": 881
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 882,
              "end": 883
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 882,
            "end": 883
          }
        ],
        "start": 881,
        "end": 884
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 888,
              "end": 894
            },
            "start": 886,
            "end": 894
          },
          "start": 885,
          "end": 894
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 869,
      "end": 896
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 909
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 912,
        "end": 915
      },
      "expression": false,
      "start": 897,
      "end": 915
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1027,
        "end": 1030
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
              "start": 1031,
              "end": 1032
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1031,
            "end": 1032
          }
        ],
        "start": 1030,
        "end": 1033
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
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
                "start": 1037,
                "end": 1038
              },
              "typeArguments": null,
              "start": 1037,
              "end": 1038
            },
            "start": 1035,
            "end": 1038
          },
          "start": 1034,
          "end": 1038
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1018,
      "end": 1040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1050,
        "end": 1053
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1054,
              "end": 1055
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1054,
            "end": 1055
          }
        ],
        "start": 1053,
        "end": 1056
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1061
              },
              "typeArguments": null,
              "start": 1060,
              "end": 1061
            },
            "start": 1058,
            "end": 1061
          },
          "start": 1057,
          "end": 1061
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1041,
      "end": 1063
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1073,
        "end": 1076
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1079,
        "end": 1082
      },
      "expression": false,
      "start": 1064,
      "end": 1082
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1161,
        "end": 1165
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
              "start": 1166,
              "end": 1167
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1176,
                "end": 1182
              },
              "typeArguments": null,
              "start": 1176,
              "end": 1182
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1166,
            "end": 1182
          }
        ],
        "start": 1165,
        "end": 1183
      },
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1152,
      "end": 1186
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1196,
        "end": 1200
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1202
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1215
              },
              "typeArguments": null,
              "start": 1211,
              "end": 1215
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1201,
            "end": 1215
          }
        ],
        "start": 1200,
        "end": 1216
      },
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1187,
      "end": 1219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1229,
        "end": 1233
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1236,
        "end": 1239
      },
      "expression": false,
      "start": 1220,
      "end": 1239
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1379,
        "end": 1383
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
              "start": 1384,
              "end": 1385
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1394,
                "end": 1400
              },
              "typeArguments": null,
              "start": 1394,
              "end": 1400
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1384,
            "end": 1400
          }
        ],
        "start": 1383,
        "end": 1401
      },
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1370,
      "end": 1404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1414,
        "end": 1418
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1419,
              "end": 1420
            },
            "constraint": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1436,
                "end": 1442
              },
              "typeArguments": null,
              "start": 1429,
              "end": 1442
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1419,
            "end": 1442
          }
        ],
        "start": 1418,
        "end": 1443
      },
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1405,
      "end": 1446
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1456,
        "end": 1460
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1463,
        "end": 1466
      },
      "expression": false,
      "start": 1447,
      "end": 1466
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 1608,
        "end": 1612
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
              "start": 1613,
              "end": 1614
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1613,
            "end": 1614
          }
        ],
        "start": 1612,
        "end": 1615
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
              "name": "parents",
              "optional": false,
              "typeAnnotation": null,
              "start": 1622,
              "end": 1629
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1631,
                  "end": 1635
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1636,
                        "end": 1640
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
                              "start": 1641,
                              "end": 1642
                            },
                            "typeArguments": null,
                            "start": 1641,
                            "end": 1642
                          }
                        ],
                        "start": 1640,
                        "end": 1643
                      },
                      "start": 1636,
                      "end": 1643
                    }
                  ],
                  "start": 1635,
                  "end": 1644
                },
                "start": 1631,
                "end": 1644
              },
              "start": 1629,
              "end": 1644
            },
            "accessibility": null,
            "static": false,
            "start": 1622,
            "end": 1645
          }
        ],
        "start": 1616,
        "end": 1647
      },
      "declare": false,
      "start": 1598,
      "end": 1647
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1657,
        "end": 1661
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
              "start": 1662,
              "end": 1663
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 1672,
                "end": 1676
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "List",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1677,
                      "end": 1681
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 1682,
                          "end": 1685
                        }
                      ],
                      "start": 1681,
                      "end": 1686
                    },
                    "start": 1677,
                    "end": 1686
                  }
                ],
                "start": 1676,
                "end": 1687
              },
              "start": 1672,
              "end": 1687
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1662,
            "end": 1687
          }
        ],
        "start": 1661,
        "end": 1688
      },
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1648,
      "end": 1691
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1701,
        "end": 1705
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
              "start": 1706,
              "end": 1707
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 1716,
                "end": 1720
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1721,
                    "end": 1724
                  }
                ],
                "start": 1720,
                "end": 1725
              },
              "start": 1716,
              "end": 1725
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1706,
            "end": 1725
          }
        ],
        "start": 1705,
        "end": 1726
      },
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1692,
      "end": 1729
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1743
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1746,
        "end": 1749
      },
      "expression": false,
      "start": 1730,
      "end": 1749
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cls",
        "optional": false,
        "typeAnnotation": null,
        "start": 1807,
        "end": 1810
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1824,
              "end": 1825
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1825,
              "end": 1828
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1817,
            "end": 1828
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1842
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1846,
                      "end": 1852
                    },
                    "start": 1844,
                    "end": 1852
                  },
                  "start": 1843,
                  "end": 1852
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1842,
              "end": 1854
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1833,
            "end": 1854
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1859,
              "end": 1860
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
                "body": [],
                "start": 1863,
                "end": 1866
              },
              "expression": false,
              "start": 1860,
              "end": 1866
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1859,
            "end": 1866
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1880,
              "end": 1881
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1885,
                      "end": 1891
                    },
                    "start": 1883,
                    "end": 1891
                  },
                  "start": 1882,
                  "end": 1891
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1881,
              "end": 1893
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1872,
            "end": 1893
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1905,
              "end": 1906
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1906,
              "end": 1909
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1898,
            "end": 1909
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1914,
              "end": 1915
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
                "body": [],
                "start": 1918,
                "end": 1921
              },
              "expression": false,
              "start": 1915,
              "end": 1921
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1914,
            "end": 1921
          }
        ],
        "start": 1811,
        "end": 1923
      },
      "abstract": false,
      "declare": false,
      "start": 1801,
      "end": 1923
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1978,
        "end": 1979
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2002,
                "end": 2005
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1993,
              "end": 2008
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1986,
            "end": 2008
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2022,
              "end": 2025
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2029,
                    "end": 2035
                  },
                  "start": 2027,
                  "end": 2035
                },
                "start": 2026,
                "end": 2035
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 2013,
            "end": 2037
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2051,
              "end": 2054
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2057,
              "end": 2060
            },
            "expression": false,
            "start": 2042,
            "end": 2060
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2076,
              "end": 2079
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2083,
                    "end": 2089
                  },
                  "start": 2081,
                  "end": 2089
                },
                "start": 2080,
                "end": 2089
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 2067,
            "end": 2091
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2112,
                "end": 2115
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2103,
              "end": 2118
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2096,
            "end": 2118
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2139,
                "end": 2142
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2145,
                "end": 2148
              },
              "expression": false,
              "start": 2130,
              "end": 2148
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2123,
            "end": 2148
          }
        ],
        "start": 1980,
        "end": 2151
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1968,
      "end": 2151
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dfn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2215,
        "end": 2219
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2198,
      "end": 2222
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dfn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2232,
        "end": 2236
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2240,
              "end": 2246
            },
            "start": 2238,
            "end": 2246
          },
          "start": 2237,
          "end": 2246
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2223,
      "end": 2248
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dfn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2258,
        "end": 2262
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2265,
        "end": 2268
      },
      "expression": false,
      "start": 2249,
      "end": 2268
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dfn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2279,
        "end": 2283
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2270,
      "end": 2286
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dfn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2304,
        "end": 2308
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2312,
              "end": 2318
            },
            "start": 2310,
            "end": 2318
          },
          "start": 2309,
          "end": 2318
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2287,
      "end": 2320
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dfn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2330,
        "end": 2334
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2337,
        "end": 2340
      },
      "expression": false,
      "start": 2321,
      "end": 2340
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fewerParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 2420,
        "end": 2431
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2411,
      "end": 2434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fewerParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 2444,
        "end": 2455
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2459,
              "end": 2465
            },
            "start": 2457,
            "end": 2465
          },
          "start": 2456,
          "end": 2465
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2467,
        "end": 2470
      },
      "expression": false,
      "start": 2435,
      "end": 2470
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2599,
        "end": 2603
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2607,
              "end": 2613
            },
            "start": 2605,
            "end": 2613
          },
          "start": 2604,
          "end": 2613
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2590,
      "end": 2615
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2625,
        "end": 2629
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2633,
              "end": 2639
            },
            "start": 2631,
            "end": 2639
          },
          "start": 2630,
          "end": 2639
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2641,
        "end": 2644
      },
      "expression": false,
      "start": 2616,
      "end": 2644
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2745,
        "end": 2749
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2753,
              "end": 2759
            },
            "start": 2751,
            "end": 2759
          },
          "start": 2750,
          "end": 2759
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2762,
          "end": 2768
        },
        "start": 2760,
        "end": 2768
      },
      "body": null,
      "expression": false,
      "start": 2736,
      "end": 2769
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2779,
        "end": 2783
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 2799,
              "end": 2800
            },
            "start": 2792,
            "end": 2801
          }
        ],
        "start": 2786,
        "end": 2803
      },
      "expression": false,
      "start": 2770,
      "end": 2803
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2904,
        "end": 2908
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
              "start": 2909,
              "end": 2910
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 2919,
                "end": 2923
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "List",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2924,
                      "end": 2928
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 2929,
                          "end": 2932
                        }
                      ],
                      "start": 2928,
                      "end": 2933
                    },
                    "start": 2924,
                    "end": 2933
                  }
                ],
                "start": 2923,
                "end": 2934
              },
              "start": 2919,
              "end": 2934
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2909,
            "end": 2934
          }
        ],
        "start": 2908,
        "end": 2935
      },
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
            "start": 2939,
            "end": 2940
          },
          "typeArguments": null,
          "start": 2939,
          "end": 2940
        },
        "start": 2937,
        "end": 2940
      },
      "body": null,
      "expression": false,
      "start": 2895,
      "end": 2941
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2951,
        "end": 2955
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
              "start": 2956,
              "end": 2957
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 2966,
                "end": 2970
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 2971,
                    "end": 2974
                  }
                ],
                "start": 2970,
                "end": 2975
              },
              "start": 2966,
              "end": 2975
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2956,
            "end": 2975
          }
        ],
        "start": 2955,
        "end": 2976
      },
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
            "start": 2980,
            "end": 2981
          },
          "typeArguments": null,
          "start": 2980,
          "end": 2981
        },
        "start": 2978,
        "end": 2981
      },
      "body": null,
      "expression": false,
      "start": 2942,
      "end": 2982
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2992,
        "end": 2996
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 3012,
              "end": 3021
            },
            "start": 3005,
            "end": 3022
          }
        ],
        "start": 2999,
        "end": 3024
      },
      "expression": false,
      "start": 2983,
      "end": 3024
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "initExpr",
        "optional": false,
        "typeAnnotation": null,
        "start": 3090,
        "end": 3098
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 3099,
            "end": 3100
          },
          "right": {
            "type": "Literal",
            "value": 13,
            "raw": "13",
            "start": 3103,
            "end": 3105
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 3099,
          "end": 3105
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3081,
      "end": 3107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "initExpr",
        "optional": false,
        "typeAnnotation": null,
        "start": 3117,
        "end": 3125
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3128,
        "end": 3131
      },
      "expression": false,
      "start": 3108,
      "end": 3131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 47,
  "end": 3131
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 147,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "fn2a",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 164,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "fn2a",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 181,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "fn2a",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 202,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "fn2b",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "fn2b",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 253,
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
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 263,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "fn2b",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 356,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 422,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 448,
    "end": 454
  },
  {
    "type": "Null",
    "value": "null",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 544,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "fn6",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 566,
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
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 571,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "fn6",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 594,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "fn6",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 692,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "fn7",
    "start": 701,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 705,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 719,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "fn7",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 745,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 760,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "fn7",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 841,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "fn8",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 860,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 869,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "fn8",
    "start": 878,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 882,
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
    "value": "n",
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
    "value": "string",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 897,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "fn8",
    "start": 906,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1018,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "fn9",
    "start": 1027,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "T",
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
    "value": "function",
    "start": 1041,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "fn9",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1064,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "fn9",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1152,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "fn10",
    "start": 1161,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1168,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1176,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1187,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "fn10",
    "start": 1196,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1203,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1211,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1220,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "fn10",
    "start": 1229,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1370,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "fn11",
    "start": 1379,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1386,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1394,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1405,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "fn11",
    "start": 1414,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1421,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1447,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "fn11",
    "start": 1456,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1598,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "parents",
    "start": 1622,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1631,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1636,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1648,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "fn12",
    "start": 1657,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1664,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1672,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1677,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1682,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1692,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "fn12",
    "start": 1701,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1708,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1716,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1721,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "fn12",
    "start": 1739,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1801,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 1807,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1817,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1833,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1846,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1872,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "type": "Identifier",
    "value": "string",
    "start": 1885,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "public",
    "start": 1898,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1968,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1986,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1993,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 2002,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2013,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 2022,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Identifier",
    "value": "string",
    "start": 2029,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2042,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 2051,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2067,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 2076,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2083,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2096,
    "end": 2102
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2103,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 2112,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2123,
    "end": 2129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2130,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 2139,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2198,
    "end": 2205
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2206,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "dfn1",
    "start": 2215,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2223,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "dfn1",
    "start": 2232,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2240,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2249,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "dfn1",
    "start": 2258,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2270,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "dfn2",
    "start": 2279,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2287,
    "end": 2294
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2295,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "dfn2",
    "start": 2304,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2312,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2321,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "dfn2",
    "start": 2330,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2411,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "fewerParams",
    "start": 2420,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2435,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "fewerParams",
    "start": 2444,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2459,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2590,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "fn13",
    "start": 2599,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2607,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2616,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "fn13",
    "start": 2625,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2633,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2736,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "fn14",
    "start": 2745,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2753,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2759,
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
    "value": "string",
    "start": 2762,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2770,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "fn14",
    "start": 2779,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2792,
    "end": 2798
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2895,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "fn15",
    "start": 2904,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2911,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2919,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2924,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2929,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2942,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "fn15",
    "start": 2951,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2958,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2966,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2971,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2975,
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
    "value": ")",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2983,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "fn15",
    "start": 2992,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3005,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3012,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3081,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "initExpr",
    "start": 3090,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 3103,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3108,
    "end": 3116
  },
  {
    "type": "Identifier",
    "value": "initExpr",
    "start": 3117,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3130,
    "end": 3131
  }
]
```

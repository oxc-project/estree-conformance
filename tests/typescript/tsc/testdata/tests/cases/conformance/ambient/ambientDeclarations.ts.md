__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 57
        }
      ],
      "declare": true,
      "start": 44,
      "end": 58
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
            },
            "start": 113,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 113,
          "end": 122
        }
      ],
      "declare": true,
      "start": 101,
      "end": 123
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 190
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 170,
      "end": 193
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 257
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 261,
              "end": 267
            },
            "start": 259,
            "end": 267
          },
          "start": 258,
          "end": 267
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 270,
          "end": 276
        },
        "start": 268,
        "end": 276
      },
      "body": null,
      "expression": false,
      "start": 237,
      "end": 277
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 340
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 344,
              "end": 350
            },
            "start": 342,
            "end": 350
          },
          "start": 341,
          "end": 350
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 353,
          "end": 359
        },
        "start": 351,
        "end": 359
      },
      "body": null,
      "expression": false,
      "start": 320,
      "end": 360
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 381
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 385,
              "end": 391
            },
            "start": 383,
            "end": 391
          },
          "start": 382,
          "end": 391
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 396,
              "end": 402
            },
            "start": 394,
            "end": 402
          },
          "start": 393,
          "end": 402
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 405,
          "end": 411
        },
        "start": 403,
        "end": 411
      },
      "body": null,
      "expression": false,
      "start": 361,
      "end": 412
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 476,
        "end": 479
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 481
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": null,
          "start": 483,
          "end": 485
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 459,
      "end": 487
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 508
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": true,
          "typeAnnotation": null,
          "start": 509,
          "end": 511
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 488,
      "end": 513
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 534
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 535,
          "end": 536
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": null,
          "start": 538,
          "end": 540
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 546
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 542,
          "end": 546
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 514,
      "end": 548
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 569
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": null,
          "start": 570,
          "end": 572
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 578
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 580,
                "end": 586
              },
              "start": 580,
              "end": 588
            },
            "start": 578,
            "end": 588
          },
          "value": null,
          "start": 574,
          "end": 588
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 549,
      "end": 590
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn9",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 611
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 616
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 618,
                "end": 620
              },
              "start": 618,
              "end": 622
            },
            "start": 616,
            "end": 622
          },
          "value": null,
          "start": 612,
          "end": 622
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 591,
      "end": 624
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 646
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
              "start": 647,
              "end": 648
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 647,
            "end": 648
          }
        ],
        "start": 646,
        "end": 649
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 654
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 656,
                  "end": 657
                },
                "typeArguments": null,
                "start": 656,
                "end": 657
              },
              "start": 656,
              "end": 659
            },
            "start": 654,
            "end": 659
          },
          "value": null,
          "start": 650,
          "end": 659
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 625,
      "end": 661
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
        "start": 694,
        "end": 697
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 715
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
              "start": 715,
              "end": 718
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 704,
            "end": 718
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 729
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
                    "name": "cls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 733,
                    "end": 736
                  },
                  "typeArguments": null,
                  "start": 733,
                  "end": 736
                },
                "start": 731,
                "end": 736
              },
              "body": null,
              "expression": false,
              "start": 729,
              "end": 737
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 723,
            "end": 737
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "static",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 755
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 757
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 760,
                  "end": 766
                },
                "start": 758,
                "end": 766
              },
              "body": null,
              "expression": false,
              "start": 755,
              "end": 767
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 742,
            "end": 767
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 780
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 772,
            "end": 781
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 796
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
              "start": 796,
              "end": 799
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 786,
            "end": 799
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fns",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 822
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
              "start": 822,
              "end": 825
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 804,
            "end": 825
          }
        ],
        "start": 698,
        "end": 827
      },
      "abstract": false,
      "declare": true,
      "start": 680,
      "end": 827
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 858,
        "end": 860
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 868
            },
            "initializer": null,
            "computed": false,
            "start": 867,
            "end": 868
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 874,
              "end": 875
            },
            "initializer": null,
            "computed": false,
            "start": 874,
            "end": 875
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 881,
              "end": 882
            },
            "initializer": null,
            "computed": false,
            "start": 881,
            "end": 882
          }
        ],
        "start": 861,
        "end": 884
      },
      "const": false,
      "declare": true,
      "start": 845,
      "end": 884
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 948,
        "end": 950
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 958
            },
            "initializer": null,
            "computed": false,
            "start": 957,
            "end": 958
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 964,
              "end": 965
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 968,
              "end": 969
            },
            "computed": false,
            "start": 964,
            "end": 969
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 975,
              "end": 976
            },
            "initializer": null,
            "computed": false,
            "start": 975,
            "end": 976
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 982,
              "end": 983
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 986,
              "end": 987
            },
            "computed": false,
            "start": 982,
            "end": 987
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 993,
              "end": 994
            },
            "initializer": null,
            "computed": false,
            "start": 993,
            "end": 994
          }
        ],
        "start": 951,
        "end": 996
      },
      "const": false,
      "declare": true,
      "start": 935,
      "end": 996
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1086,
        "end": 1088
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1096
            },
            "initializer": null,
            "computed": false,
            "start": 1095,
            "end": 1096
          }
        ],
        "start": 1089,
        "end": 1098
      },
      "const": false,
      "declare": true,
      "start": 1073,
      "end": 1098
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1117,
        "end": 1119
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1131
                },
                "init": null,
                "definite": false,
                "start": 1130,
                "end": 1131
              }
            ],
            "declare": false,
            "start": 1126,
            "end": 1132
          }
        ],
        "start": 1120,
        "end": 1134
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1099,
      "end": 1134
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
            "typeAnnotation": null,
            "start": 1139,
            "end": 1140
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1143,
              "end": 1145
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1147
            },
            "optional": false,
            "computed": false,
            "start": 1143,
            "end": 1147
          },
          "definite": false,
          "start": 1139,
          "end": 1147
        }
      ],
      "declare": false,
      "start": 1135,
      "end": 1148
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1186,
        "end": 1188
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1200
                },
                "init": null,
                "definite": false,
                "start": 1199,
                "end": 1200
              }
            ],
            "declare": false,
            "start": 1195,
            "end": 1201
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1217
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1221,
                "end": 1227
              },
              "start": 1219,
              "end": 1227
            },
            "body": null,
            "expression": false,
            "start": 1206,
            "end": 1228
          }
        ],
        "start": 1189,
        "end": 1230
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1168,
      "end": 1230
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 1313,
            "end": 1314
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1319
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1321
            },
            "optional": false,
            "computed": false,
            "start": 1317,
            "end": 1321
          },
          "definite": false,
          "start": 1313,
          "end": 1321
        }
      ],
      "declare": false,
      "start": 1309,
      "end": 1322
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 1327,
            "end": 1328
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 1334,
                "end": 1336
              },
              "optional": false,
              "computed": false,
              "start": 1331,
              "end": 1336
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1331,
            "end": 1338
          },
          "definite": false,
          "start": 1327,
          "end": 1338
        }
      ],
      "declare": false,
      "start": 1323,
      "end": 1339
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "external1",
        "raw": "'external1'",
        "start": 1499,
        "end": 1510
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1521,
                  "end": 1522
                },
                "init": null,
                "definite": false,
                "start": 1521,
                "end": 1522
              }
            ],
            "declare": false,
            "start": 1517,
            "end": 1523
          }
        ],
        "start": 1511,
        "end": 1525
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1484,
      "end": 1525
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 1526
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 44,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 101,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 170,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 178,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 237,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 320,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 361,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 369,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 459,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 467,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 476,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 488,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 496,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "fn6",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 514,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 522,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "fn7",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 542,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "declare",
    "start": 549,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 557,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "fn8",
    "start": 566,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 591,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 599,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "fn9",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 625,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 633,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "fn10",
    "start": 642,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 650,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 680,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 688,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 694,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 704,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "method",
    "start": 723,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "cls",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 742,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 756,
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
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 760,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 772,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 786,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 804,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 812,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "fns",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 845,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 853,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 935,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 943,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 948,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 966,
    "end": 967
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1081,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1099,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1107,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1117,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1143,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1168,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1176,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1195,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1206,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1215,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1221,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1309,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 1317,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1323,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 1331,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1484,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 1492,
    "end": 1498
  },
  {
    "type": "String",
    "value": "'external1'",
    "start": 1499,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1524,
    "end": 1525
  }
]
```

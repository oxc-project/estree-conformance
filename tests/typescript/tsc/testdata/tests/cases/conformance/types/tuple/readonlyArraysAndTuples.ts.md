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
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSStringKeyword",
          "start": 11,
          "end": 17
        },
        "start": 11,
        "end": 19
      },
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 29
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 37
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            }
          ],
          "start": 37,
          "end": 45
        },
        "start": 32,
        "end": 45
      },
      "declare": false,
      "start": 21,
      "end": 46
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 67,
            "end": 73
          },
          "start": 67,
          "end": 75
        },
        "start": 58,
        "end": 75
      },
      "declare": false,
      "start": 47,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 85
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 101
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            }
          ],
          "start": 101,
          "end": 109
        },
        "start": 88,
        "end": 109
      },
      "declare": false,
      "start": 77,
      "end": 110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 124,
            "end": 130
          },
          {
            "type": "TSNumberKeyword",
            "start": 132,
            "end": 138
          }
        ],
        "start": 123,
        "end": 139
      },
      "declare": false,
      "start": 112,
      "end": 140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 149
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 162,
              "end": 168
            },
            {
              "type": "TSNumberKeyword",
              "start": 170,
              "end": 176
            }
          ],
          "start": 161,
          "end": 177
        },
        "start": 152,
        "end": 177
      },
      "declare": false,
      "start": 141,
      "end": 178
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 188
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 200,
          "end": 206
        },
        "start": 191,
        "end": 206
      },
      "declare": false,
      "start": 180,
      "end": 207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 226
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
              "start": 227,
              "end": 228
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 228
          }
        ],
        "start": 226,
        "end": 229
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
          },
          "typeArguments": null,
          "start": 241,
          "end": 242
        },
        "start": 232,
        "end": 242
      },
      "declare": false,
      "start": 218,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 262
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            },
            "start": 283,
            "end": 291
          },
          "start": 274,
          "end": 291
        },
        "start": 265,
        "end": 291
      },
      "declare": false,
      "start": 254,
      "end": 292
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T33",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 311
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 328
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 329,
                "end": 335
              }
            ],
            "start": 328,
            "end": 336
          },
          "start": 323,
          "end": 336
        },
        "start": 314,
        "end": 336
      },
      "declare": false,
      "start": 303,
      "end": 337
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 360
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ma",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 365,
                "end": 371
              },
              "start": 365,
              "end": 373
            },
            "start": 363,
            "end": 373
          },
          "start": 361,
          "end": 373
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ra",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 388,
                  "end": 394
                },
                "start": 388,
                "end": 396
              },
              "start": 379,
              "end": 396
            },
            "start": 377,
            "end": 396
          },
          "start": 375,
          "end": 396
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 403,
                  "end": 409
                },
                {
                  "type": "TSStringKeyword",
                  "start": 411,
                  "end": 417
                }
              ],
              "start": 402,
              "end": 418
            },
            "start": 400,
            "end": 418
          },
          "start": 398,
          "end": 418
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 434,
                    "end": 440
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  }
                ],
                "start": 433,
                "end": 449
              },
              "start": 424,
              "end": 449
            },
            "start": 422,
            "end": 449
          },
          "start": 420,
          "end": 449
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
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 459
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 464
              },
              "start": 457,
              "end": 464
            },
            "directive": null,
            "start": 457,
            "end": 465
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 482
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 487
              },
              "start": 480,
              "end": 487
            },
            "directive": null,
            "start": 480,
            "end": 488
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 495
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 500
              },
              "start": 493,
              "end": 500
            },
            "directive": null,
            "start": 493,
            "end": 501
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 518
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 523
              },
              "start": 516,
              "end": 523
            },
            "directive": null,
            "start": 516,
            "end": 524
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 531
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 536
              },
              "start": 529,
              "end": 536
            },
            "directive": null,
            "start": 529,
            "end": 537
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 544
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 549
              },
              "start": 542,
              "end": 549
            },
            "directive": null,
            "start": 542,
            "end": 550
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 557
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 562
              },
              "start": 555,
              "end": 562
            },
            "directive": null,
            "start": 555,
            "end": 563
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 585
              },
              "start": 578,
              "end": 585
            },
            "directive": null,
            "start": 578,
            "end": 586
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 603
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 608
              },
              "start": 601,
              "end": 608
            },
            "directive": null,
            "start": 601,
            "end": 609
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 626
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 631
              },
              "start": 624,
              "end": 631
            },
            "directive": null,
            "start": 624,
            "end": 632
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 649
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 654
              },
              "start": 647,
              "end": 654
            },
            "directive": null,
            "start": 647,
            "end": 655
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 672
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 677
              },
              "start": 670,
              "end": 677
            },
            "directive": null,
            "start": 670,
            "end": 678
          }
        ],
        "start": 451,
        "end": 680
      },
      "expression": false,
      "start": 349,
      "end": 680
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 706,
                      "end": 712
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 714,
                      "end": 720
                    },
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 725,
                          "end": 731
                        },
                        "start": 725,
                        "end": 733
                      },
                      "start": 722,
                      "end": 733
                    }
                  ],
                  "start": 705,
                  "end": 734
                },
                "start": 697,
                "end": 734
              },
              "start": 695,
              "end": 734
            },
            "start": 694,
            "end": 734
          },
          "init": null,
          "definite": false,
          "start": 694,
          "end": 734
        }
      ],
      "declare": true,
      "start": 682,
      "end": 735
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 737
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 738,
            "end": 739
          },
          "optional": false,
          "computed": true,
          "start": 736,
          "end": 740
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 743,
          "end": 744
        },
        "start": 736,
        "end": 744
      },
      "directive": null,
      "start": 736,
      "end": 745
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 763
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 764,
            "end": 765
          },
          "optional": false,
          "computed": true,
          "start": 762,
          "end": 766
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 769,
          "end": 770
        },
        "start": 762,
        "end": 770
      },
      "directive": null,
      "start": 762,
      "end": 771
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 789
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 790,
            "end": 791
          },
          "optional": false,
          "computed": true,
          "start": 788,
          "end": 792
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 795,
          "end": 796
        },
        "start": 788,
        "end": 796
      },
      "directive": null,
      "start": 788,
      "end": 797
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 823,
            "end": 824
          },
          "optional": false,
          "computed": true,
          "start": 821,
          "end": 825
        },
        "prefix": true,
        "start": 814,
        "end": 825
      },
      "directive": null,
      "start": 814,
      "end": 826
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 840,
            "end": 841
          },
          "property": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 842,
              "end": 843
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 846,
              "end": 847
            },
            "start": 842,
            "end": 847
          },
          "optional": false,
          "computed": true,
          "start": 840,
          "end": 848
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 851,
          "end": 852
        },
        "start": 840,
        "end": 852
      },
      "directive": null,
      "start": 840,
      "end": 853
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 867
          },
          "property": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 868,
              "end": 869
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 872,
              "end": 873
            },
            "start": 868,
            "end": 873
          },
          "optional": false,
          "computed": true,
          "start": 866,
          "end": 874
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 877,
          "end": 878
        },
        "start": 866,
        "end": 878
      },
      "directive": null,
      "start": 866,
      "end": 879
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 900
          },
          "property": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 901,
              "end": 902
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 905,
              "end": 906
            },
            "start": 901,
            "end": 906
          },
          "optional": false,
          "computed": true,
          "start": 899,
          "end": 907
        },
        "prefix": true,
        "start": 892,
        "end": 907
      },
      "directive": null,
      "start": 892,
      "end": 908
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 917
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 21,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 47,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 58,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 88,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 112,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 141,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 152,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 180,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 191,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 218,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 232,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 254,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "T32",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 265,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 274,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 303,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "T33",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 314,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 349,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "ma",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
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
    "value": "ra",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 379,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 398,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "rt",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 424,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "ma",
    "start": 457,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "ra",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "ma",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "ma",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "rt",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "ra",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "ma",
    "start": 521,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "ra",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "ra",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "rt",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 555,
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
    "value": "ma",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "ra",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "rt",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "rt",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "ma",
    "start": 629,
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
    "value": "rt",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "ra",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "rt",
    "start": 670,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 675,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 682,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 690,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "readonly",
    "start": 697,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 714,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 737,
    "end": 738
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 763,
    "end": 764
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 767,
    "end": 768
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 789,
    "end": 790
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 814,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 822,
    "end": 823
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 841,
    "end": 842
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 844,
    "end": 845
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "v",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 867,
    "end": 868
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 870,
    "end": 871
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 875,
    "end": 876
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 892,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 900,
    "end": 901
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 903,
    "end": 904
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  }
]
```

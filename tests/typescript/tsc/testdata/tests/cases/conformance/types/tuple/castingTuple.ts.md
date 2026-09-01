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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 12,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 23
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 30,
              "end": 32
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 26,
            "end": 33
          }
        ],
        "start": 24,
        "end": 35
      },
      "abstract": false,
      "declare": false,
      "start": 16,
      "end": 35
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
        "start": 42,
        "end": 43
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "typeArguments": null,
          "start": 55,
          "end": 56
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 59,
            "end": 60
          }
        ],
        "start": 57,
        "end": 62
      },
      "abstract": false,
      "declare": false,
      "start": 36,
      "end": 62
    },
    {
      "type": "EmptyStatement",
      "start": 62,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "typeArguments": null,
          "start": 83,
          "end": 84
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 87,
            "end": 88
          }
        ],
        "start": 85,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 64,
      "end": 90
    },
    {
      "type": "EmptyStatement",
      "start": 90,
      "end": 91
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 112,
            "end": 113
          }
        ],
        "start": 110,
        "end": 115
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 115
    },
    {
      "type": "EmptyStatement",
      "start": 115,
      "end": 116
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 134
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 137,
            "end": 138
          }
        ],
        "start": 135,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 117,
      "end": 140
    },
    {
      "type": "EmptyStatement",
      "start": 140,
      "end": 141
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 155
            },
            "initializer": null,
            "computed": false,
            "start": 152,
            "end": 155
          }
        ],
        "start": 150,
        "end": 157
      },
      "const": false,
      "declare": false,
      "start": 142,
      "end": 157
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 165
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "initializer": null,
            "computed": false,
            "start": 168,
            "end": 171
          }
        ],
        "start": 166,
        "end": 173
      },
      "const": false,
      "declare": false,
      "start": 158,
      "end": 173
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
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 205,
                    "end": 211
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 213,
                    "end": 219
                  }
                ],
                "start": 204,
                "end": 220
              },
              "start": 202,
              "end": 220
            },
            "start": 191,
            "end": 220
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 224,
                "end": 225
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 227,
                "end": 232
              }
            ],
            "start": 223,
            "end": 233
          },
          "definite": false,
          "start": 191,
          "end": 233
        }
      ],
      "declare": false,
      "start": 187,
      "end": 234
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
            "name": "emptyObjTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 252
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 257,
                  "end": 259
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 261,
                  "end": 263
                }
              ],
              "start": 256,
              "end": 264
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 276
            },
            "start": 255,
            "end": 276
          },
          "definite": false,
          "start": 239,
          "end": 276
        }
      ],
      "declare": false,
      "start": 235,
      "end": 277
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
            "name": "numStrBoolTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 297
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 302,
                  "end": 308
                },
                {
                  "type": "TSStringKeyword",
                  "start": 310,
                  "end": 316
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 318,
                  "end": 325
                }
              ],
              "start": 301,
              "end": 326
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 338
            },
            "start": 300,
            "end": 338
          },
          "definite": false,
          "start": 282,
          "end": 338
        }
      ],
      "declare": false,
      "start": 278,
      "end": 339
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
            "name": "shorter",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 351
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrBoolTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 369
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 374,
                  "end": 380
                },
                {
                  "type": "TSStringKeyword",
                  "start": 382,
                  "end": 388
                }
              ],
              "start": 373,
              "end": 389
            },
            "start": 354,
            "end": 389
          },
          "definite": false,
          "start": 344,
          "end": 389
        }
      ],
      "declare": false,
      "start": 340,
      "end": 389
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
            "name": "longer",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 400
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 414
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 419,
                  "end": 425
                },
                {
                  "type": "TSStringKeyword",
                  "start": 427,
                  "end": 433
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 435,
                  "end": 442
                }
              ],
              "start": 418,
              "end": 443
            },
            "start": 403,
            "end": 443
          },
          "definite": false,
          "start": 394,
          "end": 443
        }
      ],
      "declare": false,
      "start": 390,
      "end": 443
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
            "name": "classCDTuple",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 464
                    },
                    "typeArguments": null,
                    "start": 463,
                    "end": 464
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 466,
                      "end": 467
                    },
                    "typeArguments": null,
                    "start": 466,
                    "end": 467
                  }
                ],
                "start": 462,
                "end": 468
              },
              "start": 460,
              "end": 468
            },
            "start": 448,
            "end": 468
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 477
                },
                "typeArguments": null,
                "arguments": [],
                "start": 472,
                "end": 479
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 486
                },
                "typeArguments": null,
                "arguments": [],
                "start": 481,
                "end": 488
              }
            ],
            "start": 471,
            "end": 489
          },
          "definite": false,
          "start": 448,
          "end": 489
        }
      ],
      "declare": false,
      "start": 444,
      "end": 490
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
            "name": "interfaceIITuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 511
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "typeArguments": null,
                  "start": 516,
                  "end": 517
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 520
                  },
                  "typeArguments": null,
                  "start": 519,
                  "end": 520
                }
              ],
              "start": 515,
              "end": 521
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 534
            },
            "start": 514,
            "end": 534
          },
          "definite": false,
          "start": 495,
          "end": 534
        }
      ],
      "declare": false,
      "start": 491,
      "end": 535
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
            "name": "classCDATuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 553
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 559
                  },
                  "typeArguments": null,
                  "start": 558,
                  "end": 559
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "typeArguments": null,
                  "start": 561,
                  "end": 562
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 565
                  },
                  "typeArguments": null,
                  "start": 564,
                  "end": 565
                }
              ],
              "start": 557,
              "end": 566
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 579
            },
            "start": 556,
            "end": 579
          },
          "definite": false,
          "start": 540,
          "end": 579
        }
      ],
      "declare": false,
      "start": 536,
      "end": 580
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
            "name": "eleFromCDA1",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 596
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDATuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 612
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 613,
              "end": 614
            },
            "optional": false,
            "computed": true,
            "start": 599,
            "end": 615
          },
          "definite": false,
          "start": 585,
          "end": 615
        }
      ],
      "declare": false,
      "start": 581,
      "end": 616
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
            "name": "eleFromCDA2",
            "optional": false,
            "typeAnnotation": null,
            "start": 626,
            "end": 637
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDATuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 653
            },
            "property": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 654,
              "end": 655
            },
            "optional": false,
            "computed": true,
            "start": 640,
            "end": 656
          },
          "definite": false,
          "start": 626,
          "end": 656
        }
      ],
      "declare": false,
      "start": 622,
      "end": 657
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
            "name": "t10",
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
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 683
                    },
                    "typeArguments": null,
                    "start": 681,
                    "end": 683
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 685,
                      "end": 687
                    },
                    "typeArguments": null,
                    "start": 685,
                    "end": 687
                  }
                ],
                "start": 680,
                "end": 688
              },
              "start": 678,
              "end": 688
            },
            "start": 675,
            "end": 688
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 694
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 698
                },
                "optional": false,
                "computed": false,
                "start": 692,
                "end": 698
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 702
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 706
                },
                "optional": false,
                "computed": false,
                "start": 700,
                "end": 706
              }
            ],
            "start": 691,
            "end": 707
          },
          "definite": false,
          "start": 675,
          "end": 707
        }
      ],
      "declare": false,
      "start": 671,
      "end": 708
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
            "name": "t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 716
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 721,
                  "end": 727
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 729,
                  "end": 735
                }
              ],
              "start": 720,
              "end": 736
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 740
            },
            "start": 719,
            "end": 740
          },
          "definite": false,
          "start": 713,
          "end": 740
        }
      ],
      "declare": false,
      "start": 709,
      "end": 741
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
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 752
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 756,
                "end": 758
              },
              "start": 756,
              "end": 760
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "emptyObjTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 774
            },
            "start": 755,
            "end": 774
          },
          "definite": false,
          "start": 746,
          "end": 774
        }
      ],
      "declare": false,
      "start": 742,
      "end": 775
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
            "name": "unionTuple",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 793,
                      "end": 794
                    },
                    "typeArguments": null,
                    "start": 793,
                    "end": 794
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 796,
                        "end": 802
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 805,
                        "end": 811
                      }
                    ],
                    "start": 796,
                    "end": 811
                  }
                ],
                "start": 792,
                "end": 812
              },
              "start": 790,
              "end": 812
            },
            "start": 780,
            "end": 812
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 820,
                  "end": 821
                },
                "typeArguments": null,
                "arguments": [],
                "start": 816,
                "end": 823
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 825,
                "end": 830
              }
            ],
            "start": 815,
            "end": 831
          },
          "definite": false,
          "start": 780,
          "end": 831
        }
      ],
      "declare": false,
      "start": 776,
      "end": 832
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
            "name": "unionTuple2",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 851,
                      "end": 852
                    },
                    "typeArguments": null,
                    "start": 851,
                    "end": 852
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 854,
                        "end": 860
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 863,
                        "end": 869
                      }
                    ],
                    "start": 854,
                    "end": 869
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 871,
                      "end": 872
                    },
                    "typeArguments": null,
                    "start": 871,
                    "end": 872
                  }
                ],
                "start": 850,
                "end": 873
              },
              "start": 848,
              "end": 873
            },
            "start": 837,
            "end": 873
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 882
                },
                "typeArguments": null,
                "arguments": [],
                "start": 877,
                "end": 884
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 886,
                "end": 891
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 898
                },
                "typeArguments": null,
                "arguments": [],
                "start": 893,
                "end": 900
              }
            ],
            "start": 876,
            "end": 901
          },
          "definite": false,
          "start": 837,
          "end": 901
        }
      ],
      "declare": false,
      "start": 833,
      "end": 902
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
            "name": "unionTuple3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 921,
                    "end": 927
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 929,
                        "end": 935
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 937,
                        "end": 943
                      }
                    ],
                    "start": 929,
                    "end": 943
                  }
                ],
                "start": 920,
                "end": 944
              },
              "start": 918,
              "end": 944
            },
            "start": 907,
            "end": 944
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 948,
                "end": 950
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 952,
                "end": 957
              }
            ],
            "start": 947,
            "end": 958
          },
          "definite": false,
          "start": 907,
          "end": 958
        }
      ],
      "declare": false,
      "start": 903,
      "end": 959
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
            "name": "unionTuple4",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 976
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 981,
                  "end": 987
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 989,
                  "end": 995
                }
              ],
              "start": 980,
              "end": 996
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple3",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 1008
            },
            "start": 979,
            "end": 1008
          },
          "definite": false,
          "start": 965,
          "end": 1008
        }
      ],
      "declare": false,
      "start": 961,
      "end": 1009
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1025,
            "end": 1027
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1032,
                  "end": 1038
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1040,
                  "end": 1046
                }
              ],
              "start": 1031,
              "end": 1047
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1059
            },
            "start": 1030,
            "end": 1059
          },
          "definite": false,
          "start": 1025,
          "end": 1059
        }
      ],
      "declare": false,
      "start": 1021,
      "end": 1060
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
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1065,
            "end": 1067
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1073
                  },
                  "typeArguments": null,
                  "start": 1072,
                  "end": 1073
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1075,
                    "end": 1076
                  },
                  "typeArguments": null,
                  "start": 1075,
                  "end": 1076
                }
              ],
              "start": 1071,
              "end": 1077
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 1078,
              "end": 1090
            },
            "start": 1070,
            "end": 1090
          },
          "definite": false,
          "start": 1065,
          "end": 1090
        }
      ],
      "declare": false,
      "start": 1061,
      "end": 1091
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
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1096,
            "end": 1102
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1106,
                "end": 1112
              },
              "start": 1106,
              "end": 1114
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1126
            },
            "start": 1105,
            "end": 1126
          },
          "definite": false,
          "start": 1096,
          "end": 1126
        }
      ],
      "declare": false,
      "start": 1092,
      "end": 1127
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1128,
            "end": 1130
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1131,
            "end": 1132
          },
          "optional": false,
          "computed": true,
          "start": 1128,
          "end": 1133
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1136,
          "end": 1138
        },
        "start": 1128,
        "end": 1138
      },
      "directive": null,
      "start": 1128,
      "end": 1139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1139
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
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 16,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 44,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 72,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 100,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 125,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 142,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 158,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 191,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "emptyObjTuple",
    "start": 239,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 265,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "numStrBoolTuple",
    "start": 282,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 318,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 327,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "shorter",
    "start": 344,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "numStrBoolTuple",
    "start": 354,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "longer",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 403,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 435,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "classCDTuple",
    "start": 448,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 481,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "interfaceIITuple",
    "start": 495,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "classCDTuple",
    "start": 522,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "classCDATuple",
    "start": 540,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "classCDTuple",
    "start": 567,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "eleFromCDA1",
    "start": 585,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "classCDATuple",
    "start": 599,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 612,
    "end": 613
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "eleFromCDA2",
    "start": 626,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "classCDATuple",
    "start": 640,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 653,
    "end": 654
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 671,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 709,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "emptyObjTuple",
    "start": 761,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 776,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "unionTuple",
    "start": 780,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 805,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 816,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 825,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 837,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 877,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 886,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 893,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 903,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "unionTuple3",
    "start": 907,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 921,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 937,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 947,
    "end": 948
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 948,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 952,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 961,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "unionTuple4",
    "start": 965,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "value": "number",
    "start": 981,
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
    "value": "number",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "unionTuple3",
    "start": 997,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1021,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1025,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1032,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 1048,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1061,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": ">",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "classCDTuple",
    "start": 1078,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1106,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ">",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 1115,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1128,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  }
]
```

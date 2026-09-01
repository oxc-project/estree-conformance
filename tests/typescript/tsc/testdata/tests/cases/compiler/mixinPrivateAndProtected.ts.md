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
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 38
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
              "start": 39,
              "end": 40
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 38,
        "end": 41
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 55
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 57,
                  "end": 60
                },
                "start": 57,
                "end": 62
              },
              "start": 55,
              "end": 62
            },
            "value": null,
            "start": 48,
            "end": 62
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
              "start": 67,
              "end": 68
            },
            "typeArguments": null,
            "start": 67,
            "end": 68
          },
          "start": 64,
          "end": 68
        },
        "start": 44,
        "end": 68
      },
      "declare": false,
      "start": 22,
      "end": 69
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
        "start": 77,
        "end": 78
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
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 105,
              "end": 106
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 85,
            "end": 107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 136,
              "end": 137
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 112,
            "end": 138
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 156,
                "end": 162
              },
              "start": 154,
              "end": 162
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 165,
              "end": 166
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 143,
            "end": 167
          }
        ],
        "start": 79,
        "end": 169
      },
      "abstract": false,
      "declare": false,
      "start": 71,
      "end": 169
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixB",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 184
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
              "start": 185,
              "end": 186
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 206
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 207,
                    "end": 209
                  }
                ],
                "start": 206,
                "end": 210
              },
              "start": 195,
              "end": 210
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 210
          }
        ],
        "start": 184,
        "end": 211
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
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
                "start": 217,
                "end": 218
              },
              "typeArguments": null,
              "start": 217,
              "end": 218
            },
            "start": 215,
            "end": 218
          },
          "start": 212,
          "end": 218
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 250
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
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 274
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 276,
                        "end": 282
                      },
                      "start": 274,
                      "end": 282
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 285,
                      "end": 287
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected",
                    "start": 261,
                    "end": 288
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pvt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 308
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 310,
                        "end": 316
                      },
                      "start": 308,
                      "end": 316
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 319,
                      "end": 320
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 297,
                    "end": 321
                  }
                ],
                "start": 251,
                "end": 327
              },
              "abstract": false,
              "declare": false,
              "start": 233,
              "end": 327
            },
            "start": 226,
            "end": 328
          }
        ],
        "start": 220,
        "end": 330
      },
      "expression": false,
      "start": 171,
      "end": 330
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixB2",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 346
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
              "start": 347,
              "end": 348
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 368
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
                      "start": 369,
                      "end": 370
                    },
                    "typeArguments": null,
                    "start": 369,
                    "end": 370
                  }
                ],
                "start": 368,
                "end": 371
              },
              "start": 357,
              "end": 371
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 371
          }
        ],
        "start": 346,
        "end": 372
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
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
                "start": 378,
                "end": 379
              },
              "typeArguments": null,
              "start": 378,
              "end": 379
            },
            "start": 376,
            "end": 379
          },
          "start": 373,
          "end": 379
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 411
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
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 435
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 437,
                        "end": 443
                      },
                      "start": 435,
                      "end": 443
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 446,
                      "end": 448
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected",
                    "start": 422,
                    "end": 449
                  }
                ],
                "start": 412,
                "end": 455
              },
              "abstract": false,
              "declare": false,
              "start": 394,
              "end": 455
            },
            "start": 387,
            "end": 456
          }
        ],
        "start": 381,
        "end": 458
      },
      "expression": false,
      "start": 332,
      "end": 458
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
            "name": "AB",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 472
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixB",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 479
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              }
            ],
            "optional": false,
            "start": 475,
            "end": 482
          },
          "definite": false,
          "start": 470,
          "end": 482
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB2",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 491
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixB2",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 499
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              }
            ],
            "optional": false,
            "start": 494,
            "end": 502
          },
          "definite": false,
          "start": 488,
          "end": 502
        }
      ],
      "declare": false,
      "start": 460,
      "end": 503
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixC",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 518
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
              "start": 519,
              "end": 520
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 540
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 541,
                    "end": 543
                  }
                ],
                "start": 540,
                "end": 544
              },
              "start": 529,
              "end": 544
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 544
          }
        ],
        "start": 518,
        "end": 545
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
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
                "start": 551,
                "end": 552
              },
              "typeArguments": null,
              "start": 551,
              "end": 552
            },
            "start": 549,
            "end": 552
          },
          "start": 546,
          "end": 552
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 584
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
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 608
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 610,
                        "end": 616
                      },
                      "start": 608,
                      "end": 616
                    },
                    "value": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 619,
                      "end": 622
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected",
                    "start": 595,
                    "end": 623
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pvt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 640,
                      "end": 643
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 645,
                        "end": 651
                      },
                      "start": 643,
                      "end": 651
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 654,
                      "end": 655
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 632,
                    "end": 656
                  }
                ],
                "start": 585,
                "end": 662
              },
              "abstract": false,
              "declare": false,
              "start": 567,
              "end": 662
            },
            "start": 560,
            "end": 663
          }
        ],
        "start": 554,
        "end": 665
      },
      "expression": false,
      "start": 505,
      "end": 665
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
            "name": "AB2C",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixC",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 688
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AB2",
                "optional": false,
                "typeAnnotation": null,
                "start": 689,
                "end": 692
              }
            ],
            "optional": false,
            "start": 684,
            "end": 693
          },
          "definite": false,
          "start": 677,
          "end": 693
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ABC",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 702
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixC",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 709
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 712
              }
            ],
            "optional": false,
            "start": 705,
            "end": 713
          },
          "definite": false,
          "start": 699,
          "end": 713
        }
      ],
      "declare": false,
      "start": 667,
      "end": 714
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 727
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 735
            },
            "typeArguments": null,
            "arguments": [],
            "start": 730,
            "end": 737
          },
          "definite": false,
          "start": 726,
          "end": 737
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": null,
            "start": 743,
            "end": 745
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 754
            },
            "typeArguments": null,
            "arguments": [],
            "start": 748,
            "end": 756
          },
          "definite": false,
          "start": 743,
          "end": 756
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 765
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 775
            },
            "typeArguments": null,
            "arguments": [],
            "start": 768,
            "end": 777
          },
          "definite": false,
          "start": 762,
          "end": 777
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 787
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB2C",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 798
            },
            "typeArguments": null,
            "arguments": [],
            "start": 790,
            "end": 800
          },
          "definite": false,
          "start": 783,
          "end": 800
        }
      ],
      "declare": false,
      "start": 716,
      "end": 801
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 804
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 807
            },
            "optional": false,
            "computed": false,
            "start": 803,
            "end": 807
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 815
          },
          "optional": false,
          "computed": false,
          "start": 803,
          "end": 815
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 803,
        "end": 817
      },
      "directive": null,
      "start": 803,
      "end": 818
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 820
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 824
            },
            "optional": false,
            "computed": false,
            "start": 819,
            "end": 824
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 832
          },
          "optional": false,
          "computed": false,
          "start": 819,
          "end": 832
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 819,
        "end": 834
      },
      "directive": null,
      "start": 819,
      "end": 835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 849
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 853
            },
            "optional": false,
            "computed": false,
            "start": 848,
            "end": 853
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 861
          },
          "optional": false,
          "computed": false,
          "start": 848,
          "end": 861
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 848,
        "end": 863
      },
      "directive": null,
      "start": 848,
      "end": 864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 880
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 881,
              "end": 883
            },
            "optional": false,
            "computed": false,
            "start": 878,
            "end": 883
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 891
          },
          "optional": false,
          "computed": false,
          "start": 878,
          "end": 891
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 878,
        "end": 893
      },
      "directive": null,
      "start": 878,
      "end": 894
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 897
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 901
            },
            "optional": false,
            "computed": false,
            "start": 895,
            "end": 901
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 909
          },
          "optional": false,
          "computed": false,
          "start": 895,
          "end": 909
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 895,
        "end": 911
      },
      "directive": null,
      "start": 895,
      "end": 912
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 926
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 930
            },
            "optional": false,
            "computed": false,
            "start": 924,
            "end": 930
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 931,
            "end": 938
          },
          "optional": false,
          "computed": false,
          "start": 924,
          "end": 938
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 924,
        "end": 940
      },
      "directive": null,
      "start": 924,
      "end": 941
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 957
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 960
            },
            "optional": false,
            "computed": false,
            "start": 954,
            "end": 960
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 968
          },
          "optional": false,
          "computed": false,
          "start": 954,
          "end": 968
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 954,
        "end": 970
      },
      "directive": null,
      "start": 954,
      "end": 971
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 975
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 979
            },
            "optional": false,
            "computed": false,
            "start": 972,
            "end": 979
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 980,
            "end": 987
          },
          "optional": false,
          "computed": false,
          "start": 972,
          "end": 987
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 972,
        "end": 989
      },
      "directive": null,
      "start": 972,
      "end": 990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1004
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 1005,
              "end": 1008
            },
            "optional": false,
            "computed": false,
            "start": 1001,
            "end": 1008
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1016
          },
          "optional": false,
          "computed": false,
          "start": 1001,
          "end": 1016
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1001,
        "end": 1018
      },
      "directive": null,
      "start": 1001,
      "end": 1019
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1035
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 1036,
              "end": 1038
            },
            "optional": false,
            "computed": false,
            "start": 1031,
            "end": 1038
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1039,
            "end": 1046
          },
          "optional": false,
          "computed": false,
          "start": 1031,
          "end": 1046
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1031,
        "end": 1048
      },
      "directive": null,
      "start": 1031,
      "end": 1049
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1054
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1058
            },
            "optional": false,
            "computed": false,
            "start": 1050,
            "end": 1058
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1059,
            "end": 1066
          },
          "optional": false,
          "computed": false,
          "start": 1050,
          "end": 1066
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1050,
        "end": 1068
      },
      "directive": null,
      "start": 1050,
      "end": 1069
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1083
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1087
            },
            "optional": false,
            "computed": false,
            "start": 1079,
            "end": 1087
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1088,
            "end": 1095
          },
          "optional": false,
          "computed": false,
          "start": 1079,
          "end": 1095
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1079,
        "end": 1097
      },
      "directive": null,
      "start": 1079,
      "end": 1098
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 1137,
        "end": 1143
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
              "start": 1147,
              "end": 1158
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1172,
                        "end": 1178
                      },
                      "start": 1170,
                      "end": 1178
                    },
                    "start": 1166,
                    "end": 1178
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1159,
                  "end": 1178
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1180,
                "end": 1182
              },
              "expression": false,
              "start": 1158,
              "end": 1182
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1147,
            "end": 1182
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myProtectedFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1195,
              "end": 1214
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
                "start": 1217,
                "end": 1239
              },
              "expression": false,
              "start": 1214,
              "end": 1239
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 1185,
            "end": 1239
          }
        ],
        "start": 1144,
        "end": 1241
      },
      "abstract": false,
      "declare": false,
      "start": 1131,
      "end": 1241
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 1252,
        "end": 1263
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
              "start": 1264,
              "end": 1265
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1285
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1286,
                      "end": 1292
                    },
                    "typeArguments": null,
                    "start": 1286,
                    "end": 1292
                  }
                ],
                "start": 1285,
                "end": 1293
              },
              "start": 1274,
              "end": 1293
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1264,
            "end": 1293
          }
        ],
        "start": 1263,
        "end": 1294
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
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
                "start": 1301,
                "end": 1302
              },
              "typeArguments": null,
              "start": 1301,
              "end": 1302
            },
            "start": 1299,
            "end": 1302
          },
          "start": 1295,
          "end": 1302
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 1328,
                "end": 1332
              },
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
                      "start": 1337,
                      "end": 1348
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
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1352,
                            "end": 1356
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 1358,
                                "end": 1361
                              },
                              "start": 1358,
                              "end": 1363
                            },
                            "start": 1356,
                            "end": 1363
                          },
                          "value": null,
                          "start": 1349,
                          "end": 1363
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1370,
                                "end": 1375
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1379,
                                    "end": 1383
                                  },
                                  "start": 1376,
                                  "end": 1383
                                }
                              ],
                              "optional": false,
                              "start": 1370,
                              "end": 1384
                            },
                            "directive": null,
                            "start": 1370,
                            "end": 1385
                          }
                        ],
                        "start": 1365,
                        "end": 1389
                      },
                      "expression": false,
                      "start": 1348,
                      "end": 1389
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1337,
                    "end": 1389
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProtectedFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1412
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
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 1420,
                                  "end": 1425
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "myProtectedFunction",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1426,
                                  "end": 1445
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1420,
                                "end": 1445
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1420,
                              "end": 1447
                            },
                            "directive": null,
                            "start": 1420,
                            "end": 1448
                          }
                        ],
                        "start": 1415,
                        "end": 1473
                      },
                      "expression": false,
                      "start": 1412,
                      "end": 1473
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1393,
                    "end": 1473
                  }
                ],
                "start": 1333,
                "end": 1476
              },
              "abstract": false,
              "declare": false,
              "start": 1314,
              "end": 1476
            },
            "start": 1307,
            "end": 1477
          }
        ],
        "start": 1304,
        "end": 1479
      },
      "expression": false,
      "start": 1243,
      "end": 1479
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Customer",
        "optional": false,
        "typeAnnotation": null,
        "start": 1487,
        "end": 1495
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "PersonMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 1504,
          "end": 1515
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": null,
            "start": 1516,
            "end": 1522
          }
        ],
        "optional": false,
        "start": 1504,
        "end": 1523
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
              "name": "accountBalance",
              "optional": false,
              "typeAnnotation": null,
              "start": 1527,
              "end": 1541
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1543,
                "end": 1549
              },
              "start": 1541,
              "end": 1549
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
            "start": 1527,
            "end": 1550
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
              "start": 1555,
              "end": 1556
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
                "start": 1559,
                "end": 1566
              },
              "expression": false,
              "start": 1556,
              "end": 1566
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1555,
            "end": 1566
          }
        ],
        "start": 1524,
        "end": 1568
      },
      "abstract": false,
      "declare": false,
      "start": 1481,
      "end": 1568
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 1568
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 27,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "pb",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 112,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "ptd",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 143,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "pvt",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 171,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "mixB",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "Constructor",
    "start": 195,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
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
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 226,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 233,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 239,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 261,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "ptd",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 297,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "pvt",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 332,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "mixB2",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 349,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 357,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 387,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 394,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 400,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 422,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "ptd",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 460,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "mixB",
    "start": 475,
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
    "value": "A",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "AB2",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "mixB2",
    "start": 494,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 505,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "mixC",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 521,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 529,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 560,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 567,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 573,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 595,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "ptd",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 617,
    "end": 618
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 632,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "pvt",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 645,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 652,
    "end": 653
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 667,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "AB2C",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "mixC",
    "start": 684,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "AB2",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "ABC",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "mixC",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 710,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 716,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 748,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 762,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "ABC",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "ab2c",
    "start": 783,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 790,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "AB2C",
    "start": 794,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "pb",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 808,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "ptd",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 825,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "pvt",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 854,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "pb",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 884,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 895,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "ptd",
    "start": 898,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 902,
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
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 924,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "pvt",
    "start": 927,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 931,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "pb",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 961,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 972,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "ptd",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 980,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "pvt",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1009,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "ab2c",
    "start": 1031,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "pb",
    "start": 1036,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1039,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "ab2c",
    "start": 1050,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "ptd",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1059,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "ab2c",
    "start": 1079,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "pvt",
    "start": 1084,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1088,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1131,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 1137,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1147,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1159,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1166,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1185,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "myProtectedFunction",
    "start": 1195,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1243,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "PersonMixin",
    "start": 1252,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1266,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 1274,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 1286,
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
    "value": ">",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1295,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1307,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1314,
    "end": 1319
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1320,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1328,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1337,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1352,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1361,
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
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1370,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1379,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "myProtectedFunction",
    "start": 1393,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1420,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "myProtectedFunction",
    "start": 1426,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1481,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "Customer",
    "start": 1487,
    "end": 1495
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1496,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "PersonMixin",
    "start": 1504,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 1516,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "accountBalance",
    "start": 1527,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1543,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1567,
    "end": 1568
  }
]
```

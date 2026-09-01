__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterPropsByType",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 29
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
                "start": 30,
                "end": 31
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 30,
              "end": 31
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TT",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 35
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 33,
              "end": 35
            }
          ],
          "start": 29,
          "end": 36
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
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
                  "start": 55,
                  "end": 56
                },
                "typeArguments": null,
                "start": 55,
                "end": 56
              },
              "start": 49,
              "end": 56
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "typeArguments": null,
                  "start": 59,
                  "end": 60
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 62
                  },
                  "typeArguments": null,
                  "start": 61,
                  "end": 62
                },
                "start": 59,
                "end": 63
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 74
                },
                "typeArguments": null,
                "start": 72,
                "end": 74
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "typeArguments": null,
                "start": 77,
                "end": 78
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 81,
                "end": 86
              },
              "start": 59,
              "end": 86
            },
            "optional": false,
            "readonly": null,
            "start": 39,
            "end": 88
          },
          "indexType": {
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
                "start": 95,
                "end": 96
              },
              "typeArguments": null,
              "start": 95,
              "end": 96
            },
            "start": 89,
            "end": 96
          },
          "start": 39,
          "end": 97
        },
        "declare": false,
        "start": 7,
        "end": 98
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "select",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 115
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
              "start": 119,
              "end": 120
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 138,
                  "end": 144
                }
              ],
              "start": 129,
              "end": 144
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 144
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TList",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 153
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 162,
              "end": 168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 148,
            "end": 168
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValueProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 182
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FilterPropsByType",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 208
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 209,
                    "end": 214
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 217
                    },
                    "typeArguments": null,
                    "start": 216,
                    "end": 217
                  }
                ],
                "start": 208,
                "end": 218
              },
              "start": 191,
              "end": 218
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 172,
            "end": 218
          }
        ],
        "start": 115,
        "end": 220
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "property",
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
                "start": 231,
                "end": 232
              },
              "typeArguments": null,
              "start": 231,
              "end": 232
            },
            "start": 229,
            "end": 232
          },
          "start": 221,
          "end": 232
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
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
                  "name": "TList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 245
                },
                "typeArguments": null,
                "start": 240,
                "end": 245
              },
              "start": 240,
              "end": 247
            },
            "start": 238,
            "end": 247
          },
          "start": 234,
          "end": 247
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "valueProp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValueProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 270
              },
              "typeArguments": null,
              "start": 260,
              "end": 270
            },
            "start": 258,
            "end": 270
          },
          "start": 249,
          "end": 270
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 272,
        "end": 274
      },
      "expression": false,
      "start": 100,
      "end": 274
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 296
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
                "name": "XX",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 299
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 297,
              "end": 314
            }
          ],
          "start": 296,
          "end": 315
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "XX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 321
                },
                "typeArguments": null,
                "start": 319,
                "end": 321
              },
              "start": 317,
              "end": 321
            },
            "start": 316,
            "end": 321
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tipos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 337
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "XX",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 341
                          },
                          "typeArguments": null,
                          "start": 339,
                          "end": 341
                        },
                        "start": 337,
                        "end": 341
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 332,
                      "end": 341
                    }
                  ],
                  "start": 330,
                  "end": 343
                },
                "start": 330,
                "end": 345
              },
              "start": 328,
              "end": 345
            },
            "start": 323,
            "end": 345
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "select",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 357
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tipos",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 366
                  },
                  {
                    "type": "Literal",
                    "value": "value",
                    "raw": "\"value\"",
                    "start": 368,
                    "end": 375
                  }
                ],
                "optional": false,
                "start": 351,
                "end": 376
              },
              "directive": null,
              "start": 351,
              "end": 377
            }
          ],
          "start": 347,
          "end": 379
        },
        "expression": false,
        "start": 283,
        "end": 379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 276,
      "end": 379
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyNullablePlease",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 416
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
              "start": 417,
              "end": 418
            },
            "constraint": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSNullKeyword",
                "start": 427,
                "end": 431
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 441
                },
                "typeArguments": null,
                "start": 440,
                "end": 441
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 444,
                "end": 447
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 450,
                "end": 455
              },
              "start": 427,
              "end": 455
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 417,
            "end": 455
          }
        ],
        "start": 416,
        "end": 456
      },
      "params": [
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "typeArguments": null,
              "start": 467,
              "end": 468
            },
            "start": 465,
            "end": 468
          },
          "start": 460,
          "end": 468
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 472,
          "end": 476
        },
        "start": 470,
        "end": 476
      },
      "body": null,
      "expression": false,
      "start": 381,
      "end": 477
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyNullablePlease2",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 515
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
              "start": 519,
              "end": 520
            },
            "constraint": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNullKeyword",
                    "start": 530,
                    "end": 534
                  }
                ],
                "start": 529,
                "end": 535
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 546
                    },
                    "typeArguments": null,
                    "start": 545,
                    "end": 546
                  }
                ],
                "start": 544,
                "end": 547
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 550,
                "end": 553
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 556,
                "end": 561
              },
              "start": 529,
              "end": 561
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 561
          }
        ],
        "start": 515,
        "end": 563
      },
      "params": [
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 572
              },
              "typeArguments": null,
              "start": 571,
              "end": 572
            },
            "start": 569,
            "end": 572
          },
          "start": 564,
          "end": 572
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 575,
          "end": 579
        },
        "start": 573,
        "end": 579
      },
      "body": null,
      "expression": false,
      "start": 479,
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 597,
                    "end": 603
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 606,
                    "end": 610
                  }
                ],
                "start": 597,
                "end": 610
              },
              "start": 595,
              "end": 610
            },
            "start": 594,
            "end": 610
          },
          "init": null,
          "definite": false,
          "start": 594,
          "end": 610
        }
      ],
      "declare": true,
      "start": 582,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 630
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 632
          }
        ],
        "optional": false,
        "start": 612,
        "end": 633
      },
      "directive": null,
      "start": 612,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease2",
          "optional": false,
          "typeAnnotation": null,
          "start": 656,
          "end": 675
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 677
          }
        ],
        "optional": false,
        "start": 656,
        "end": 678
      },
      "directive": null,
      "start": 656,
      "end": 679
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 717,
                "end": 723
              },
              "start": 715,
              "end": 723
            },
            "start": 714,
            "end": 723
          },
          "init": null,
          "definite": false,
          "start": 714,
          "end": 723
        }
      ],
      "declare": true,
      "start": 702,
      "end": 724
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 743
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 744,
            "end": 745
          }
        ],
        "optional": false,
        "start": 725,
        "end": 746
      },
      "directive": null,
      "start": 725,
      "end": 747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease2",
          "optional": false,
          "typeAnnotation": null,
          "start": 769,
          "end": 788
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 790
          }
        ],
        "optional": false,
        "start": 769,
        "end": 791
      },
      "directive": null,
      "start": 769,
      "end": 792
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 825
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
              "start": 826,
              "end": 827
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 826,
            "end": 827
          }
        ],
        "start": 825,
        "end": 828
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
                "start": 832,
                "end": 833
              },
              "typeArguments": null,
              "start": 832,
              "end": 833
            },
            "start": 830,
            "end": 833
          },
          "start": 829,
          "end": 833
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                            "start": 846,
                            "end": 847
                          },
                          "typeArguments": null,
                          "start": 846,
                          "end": 847
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 850,
                          "end": 854
                        }
                      ],
                      "start": 846,
                      "end": 854
                    },
                    "start": 844,
                    "end": 854
                  },
                  "start": 843,
                  "end": 854
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 861
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 862,
                          "end": 868
                        },
                        "optional": false,
                        "computed": false,
                        "start": 857,
                        "end": 868
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 857,
                      "end": 870
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 873,
                      "end": 876
                    },
                    "start": 857,
                    "end": 876
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 879,
                    "end": 883
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 886,
                    "end": 887
                  },
                  "start": 857,
                  "end": 887
                },
                "definite": false,
                "start": 843,
                "end": 887
              }
            ],
            "declare": false,
            "start": 839,
            "end": 888
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "onlyNullablePlease",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 909
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 911
                }
              ],
              "optional": false,
              "start": 891,
              "end": 912
            },
            "directive": null,
            "start": 891,
            "end": 913
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "onlyNullablePlease2",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 950
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 952
                }
              ],
              "optional": false,
              "start": 931,
              "end": 953
            },
            "directive": null,
            "start": 931,
            "end": 954
          }
        ],
        "start": 835,
        "end": 971
      },
      "expression": false,
      "start": 815,
      "end": 971
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 984
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
              "start": 985,
              "end": 986
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 985,
            "end": 986
          }
        ],
        "start": 984,
        "end": 987
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 994,
                    "end": 995
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
                        "start": 997,
                        "end": 998
                      },
                      "typeArguments": null,
                      "start": 997,
                      "end": 998
                    },
                    "start": 995,
                    "end": 998
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 994,
                  "end": 999
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1000,
                    "end": 1001
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
                        "start": 1003,
                        "end": 1004
                      },
                      "typeArguments": null,
                      "start": 1003,
                      "end": 1004
                    },
                    "start": 1001,
                    "end": 1004
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1000,
                  "end": 1004
                }
              ],
              "start": 992,
              "end": 1006
            },
            "start": 990,
            "end": 1006
          },
          "start": 988,
          "end": 1006
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 1012,
                  "end": 1013
                },
                "typeArguments": null,
                "start": 1012,
                "end": 1013
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1023
                },
                "typeArguments": null,
                "start": 1022,
                "end": 1023
              },
              "trueType": {
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
                      "start": 1028,
                      "end": 1029
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
                          "start": 1031,
                          "end": 1032
                        },
                        "typeArguments": null,
                        "start": 1031,
                        "end": 1032
                      },
                      "start": 1029,
                      "end": 1032
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1028,
                    "end": 1033
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1034,
                      "end": 1035
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
                    "accessibility": null,
                    "static": false,
                    "start": 1034,
                    "end": 1038
                  }
                ],
                "start": 1026,
                "end": 1040
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1043,
                "end": 1048
              },
              "start": 1012,
              "end": 1048
            },
            "start": 1010,
            "end": 1048
          },
          "start": 1008,
          "end": 1048
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
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1054,
                "end": 1056
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1061
              },
              "start": 1054,
              "end": 1061
            },
            "directive": null,
            "start": 1054,
            "end": 1062
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1071,
                "end": 1073
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1078
              },
              "start": 1071,
              "end": 1078
            },
            "directive": null,
            "start": 1071,
            "end": 1079
          }
        ],
        "start": 1050,
        "end": 1096
      },
      "expression": false,
      "start": 973,
      "end": 1096
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1103,
        "end": 1106
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
              "start": 1107,
              "end": 1108
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1107,
            "end": 1108
          }
        ],
        "start": 1106,
        "end": 1109
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
            "start": 1112,
            "end": 1113
          },
          "typeArguments": null,
          "start": 1112,
          "end": 1113
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1122,
            "end": 1126
          },
          "start": 1122,
          "end": 1126
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 1129,
          "end": 1135
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 1138,
            "end": 1141
          },
          "start": 1138,
          "end": 1141
        },
        "start": 1112,
        "end": 1141
      },
      "declare": false,
      "start": 1098,
      "end": 1142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1157
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
              "start": 1158,
              "end": 1159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1158,
            "end": 1159
          }
        ],
        "start": 1157,
        "end": 1160
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1167
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
                      "start": 1168,
                      "end": 1169
                    },
                    "typeArguments": null,
                    "start": 1168,
                    "end": 1169
                  }
                ],
                "start": 1167,
                "end": 1170
              },
              "start": 1164,
              "end": 1170
            },
            "start": 1162,
            "end": 1170
          },
          "start": 1161,
          "end": 1170
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1175,
              "end": 1181
            },
            "start": 1173,
            "end": 1181
          },
          "start": 1172,
          "end": 1181
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1187,
                "end": 1188
              },
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1191,
                "end": 1194
              },
              "start": 1187,
              "end": 1194
            },
            "directive": null,
            "start": 1187,
            "end": 1195
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1235
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1238,
                "end": 1239
              },
              "start": 1234,
              "end": 1239
            },
            "directive": null,
            "start": 1234,
            "end": 1240
          }
        ],
        "start": 1183,
        "end": 1251
      },
      "expression": false,
      "start": 1144,
      "end": 1251
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Distributive",
        "optional": false,
        "typeAnnotation": null,
        "start": 1268,
        "end": 1280
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
              "start": 1281,
              "end": 1282
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1281,
            "end": 1282
          }
        ],
        "start": 1280,
        "end": 1283
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
            "start": 1286,
            "end": 1287
          },
          "typeArguments": null,
          "start": 1286,
          "end": 1287
        },
        "extendsType": {
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
                "start": 1298,
                "end": 1299
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1301,
                  "end": 1307
                },
                "start": 1299,
                "end": 1307
              },
              "accessibility": null,
              "static": false,
              "start": 1298,
              "end": 1307
            }
          ],
          "start": 1296,
          "end": 1309
        },
        "trueType": {
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
                "start": 1314,
                "end": 1315
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1317,
                  "end": 1323
                },
                "start": 1315,
                "end": 1323
              },
              "accessibility": null,
              "static": false,
              "start": 1314,
              "end": 1323
            }
          ],
          "start": 1312,
          "end": 1325
        },
        "falseType": {
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1330,
                "end": 1331
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1333,
                  "end": 1339
                },
                "start": 1331,
                "end": 1339
              },
              "accessibility": null,
              "static": false,
              "start": 1330,
              "end": 1339
            }
          ],
          "start": 1328,
          "end": 1341
        },
        "start": 1286,
        "end": 1341
      },
      "declare": false,
      "start": 1263,
      "end": 1342
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testAssignabilityToConditionalType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1352,
        "end": 1386
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
              "start": 1387,
              "end": 1388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1387,
            "end": 1388
          }
        ],
        "start": 1386,
        "end": 1389
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1403
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1409
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1411,
                        "end": 1412
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1408,
                      "end": 1412
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1414,
                        "end": 1415
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1417,
                        "end": 1418
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1414,
                      "end": 1418
                    }
                  ],
                  "start": 1406,
                  "end": 1420
                },
                "definite": false,
                "start": 1402,
                "end": 1420
              }
            ],
            "declare": false,
            "start": 1396,
            "end": 1421
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
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
                          }
                        ],
                        "start": 1433,
                        "end": 1436
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1446,
                            "end": 1452
                          }
                        ],
                        "start": 1445,
                        "end": 1453
                      },
                      "trueType": {
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1462,
                              "end": 1463
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1465,
                                "end": 1471
                              },
                              "start": 1463,
                              "end": 1471
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1462,
                            "end": 1471
                          }
                        ],
                        "start": 1460,
                        "end": 1473
                      },
                      "falseType": {
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
                              "start": 1482,
                              "end": 1483
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1485,
                                "end": 1491
                              },
                              "start": 1483,
                              "end": 1491
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1482,
                            "end": 1492
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
                              "start": 1493,
                              "end": 1494
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1496,
                                "end": 1502
                              },
                              "start": 1494,
                              "end": 1502
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1493,
                            "end": 1502
                          }
                        ],
                        "start": 1480,
                        "end": 1504
                      },
                      "start": 1433,
                      "end": 1504
                    },
                    "start": 1431,
                    "end": 1504
                  },
                  "start": 1430,
                  "end": 1504
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1507,
                    "end": 1516
                  },
                  "start": 1507,
                  "end": 1517
                },
                "definite": false,
                "start": 1430,
                "end": 1517
              }
            ],
            "declare": false,
            "start": 1424,
            "end": 1518
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
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1553,
                              "end": 1554
                            },
                            "typeArguments": null,
                            "start": 1553,
                            "end": 1554
                          }
                        ],
                        "start": 1552,
                        "end": 1555
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1565,
                            "end": 1571
                          }
                        ],
                        "start": 1564,
                        "end": 1572
                      },
                      "trueType": {
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
                              "start": 1577,
                              "end": 1578
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1580,
                                "end": 1586
                              },
                              "start": 1578,
                              "end": 1586
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1577,
                            "end": 1586
                          }
                        ],
                        "start": 1575,
                        "end": 1588
                      },
                      "falseType": {
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1593,
                              "end": 1594
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1596,
                                "end": 1602
                              },
                              "start": 1594,
                              "end": 1602
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1593,
                            "end": 1602
                          }
                        ],
                        "start": 1591,
                        "end": 1604
                      },
                      "start": 1552,
                      "end": 1604
                    },
                    "start": 1550,
                    "end": 1604
                  },
                  "start": 1548,
                  "end": 1604
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1607,
                  "end": 1608
                },
                "definite": false,
                "start": 1548,
                "end": 1608
              }
            ],
            "declare": false,
            "start": 1542,
            "end": 1609
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1695,
                              "end": 1696
                            },
                            "typeArguments": null,
                            "start": 1695,
                            "end": 1696
                          }
                        ],
                        "start": 1694,
                        "end": 1697
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1707,
                            "end": 1713
                          }
                        ],
                        "start": 1706,
                        "end": 1714
                      },
                      "trueType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1723,
                                "end": 1724
                              },
                              "typeArguments": null,
                              "start": 1723,
                              "end": 1724
                            }
                          ],
                          "start": 1722,
                          "end": 1725
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1735,
                              "end": 1741
                            }
                          ],
                          "start": 1734,
                          "end": 1742
                        },
                        "trueType": {
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1747,
                                "end": 1748
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1750,
                                  "end": 1756
                                },
                                "start": 1748,
                                "end": 1756
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1747,
                              "end": 1756
                            }
                          ],
                          "start": 1745,
                          "end": 1758
                        },
                        "falseType": {
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
                                "start": 1763,
                                "end": 1764
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1766,
                                  "end": 1772
                                },
                                "start": 1764,
                                "end": 1772
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1763,
                              "end": 1772
                            }
                          ],
                          "start": 1761,
                          "end": 1774
                        },
                        "start": 1722,
                        "end": 1774
                      },
                      "falseType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1784,
                                "end": 1785
                              },
                              "typeArguments": null,
                              "start": 1784,
                              "end": 1785
                            }
                          ],
                          "start": 1783,
                          "end": 1786
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1796,
                              "end": 1802
                            }
                          ],
                          "start": 1795,
                          "end": 1803
                        },
                        "trueType": {
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1808,
                                "end": 1809
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1811,
                                  "end": 1817
                                },
                                "start": 1809,
                                "end": 1817
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1808,
                              "end": 1817
                            }
                          ],
                          "start": 1806,
                          "end": 1819
                        },
                        "falseType": {
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1824,
                                "end": 1825
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1827,
                                  "end": 1833
                                },
                                "start": 1825,
                                "end": 1833
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1824,
                              "end": 1833
                            }
                          ],
                          "start": 1822,
                          "end": 1835
                        },
                        "start": 1783,
                        "end": 1835
                      },
                      "start": 1694,
                      "end": 1836
                    },
                    "start": 1692,
                    "end": 1836
                  },
                  "start": 1690,
                  "end": 1836
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1839,
                  "end": 1840
                },
                "definite": false,
                "start": 1690,
                "end": 1840
              }
            ],
            "declare": false,
            "start": 1684,
            "end": 1841
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1891,
                              "end": 1892
                            },
                            "typeArguments": null,
                            "start": 1891,
                            "end": 1892
                          }
                        ],
                        "start": 1890,
                        "end": 1893
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
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
                                    "start": 1910,
                                    "end": 1911
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1910,
                                  "end": 1911
                                },
                                "start": 1904,
                                "end": 1911
                              }
                            ],
                            "start": 1903,
                            "end": 1912
                          }
                        ],
                        "start": 1902,
                        "end": 1913
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1916,
                          "end": 1917
                        },
                        "typeArguments": null,
                        "start": 1916,
                        "end": 1917
                      },
                      "falseType": {
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1922,
                              "end": 1923
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1925,
                                "end": 1931
                              },
                              "start": 1923,
                              "end": 1931
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1922,
                            "end": 1931
                          }
                        ],
                        "start": 1920,
                        "end": 1933
                      },
                      "start": 1890,
                      "end": 1933
                    },
                    "start": 1888,
                    "end": 1933
                  },
                  "start": 1886,
                  "end": 1933
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1937
                },
                "definite": false,
                "start": 1886,
                "end": 1937
              }
            ],
            "declare": false,
            "start": 1880,
            "end": 1938
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
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2509,
                        "end": 2521
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
                              "start": 2522,
                              "end": 2523
                            },
                            "typeArguments": null,
                            "start": 2522,
                            "end": 2523
                          }
                        ],
                        "start": 2521,
                        "end": 2524
                      },
                      "start": 2509,
                      "end": 2524
                    },
                    "start": 2507,
                    "end": 2524
                  },
                  "start": 2505,
                  "end": 2524
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2527,
                  "end": 2528
                },
                "definite": false,
                "start": 2505,
                "end": 2528
              }
            ],
            "declare": false,
            "start": 2499,
            "end": 2529
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
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2618,
                        "end": 2630
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
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
                                  "start": 2631,
                                  "end": 2632
                                },
                                "typeArguments": null,
                                "start": 2631,
                                "end": 2632
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 2635,
                                "end": 2641
                              }
                            ],
                            "start": 2631,
                            "end": 2641
                          }
                        ],
                        "start": 2630,
                        "end": 2642
                      },
                      "start": 2618,
                      "end": 2642
                    },
                    "start": 2616,
                    "end": 2642
                  },
                  "start": 2614,
                  "end": 2642
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2645,
                  "end": 2646
                },
                "definite": false,
                "start": 2614,
                "end": 2646
              }
            ],
            "declare": false,
            "start": 2608,
            "end": 2647
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
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2723,
                        "end": 2735
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2738,
                                  "end": 2739
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
                                      "start": 2741,
                                      "end": 2742
                                    },
                                    "typeArguments": null,
                                    "start": 2741,
                                    "end": 2742
                                  },
                                  "start": 2739,
                                  "end": 2742
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2738,
                                "end": 2742
                              }
                            ],
                            "start": 2736,
                            "end": 2744
                          }
                        ],
                        "start": 2735,
                        "end": 2745
                      },
                      "start": 2723,
                      "end": 2745
                    },
                    "start": 2721,
                    "end": 2745
                  },
                  "start": 2719,
                  "end": 2745
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2748,
                  "end": 2749
                },
                "definite": false,
                "start": 2719,
                "end": 2749
              }
            ],
            "declare": false,
            "start": 2713,
            "end": 2750
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
                  "name": "o6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2924,
                        "end": 2936
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2938,
                                    "end": 2939
                                  },
                                  "typeArguments": null,
                                  "start": 2938,
                                  "end": 2939
                                }
                              ],
                              "start": 2937,
                              "end": 2940
                            },
                            "extendsType": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSNeverKeyword",
                                  "start": 2950,
                                  "end": 2955
                                }
                              ],
                              "start": 2949,
                              "end": 2956
                            },
                            "trueType": {
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
                                    "start": 2961,
                                    "end": 2962
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2964,
                                      "end": 2970
                                    },
                                    "start": 2962,
                                    "end": 2970
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 2961,
                                  "end": 2970
                                }
                              ],
                              "start": 2959,
                              "end": 2972
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2975,
                              "end": 2980
                            },
                            "start": 2937,
                            "end": 2980
                          }
                        ],
                        "start": 2936,
                        "end": 2981
                      },
                      "start": 2924,
                      "end": 2981
                    },
                    "start": 2922,
                    "end": 2981
                  },
                  "start": 2920,
                  "end": 2981
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2984,
                  "end": 2985
                },
                "definite": false,
                "start": 2920,
                "end": 2985
              }
            ],
            "declare": false,
            "start": 2914,
            "end": 2986
          }
        ],
        "start": 1392,
        "end": 2988
      },
      "expression": false,
      "start": 1343,
      "end": 2988
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 2995,
        "end": 3002
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
              "start": 3003,
              "end": 3004
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3003,
            "end": 3004
          }
        ],
        "start": 3002,
        "end": 3005
      },
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
              "name": "___secret",
              "optional": false,
              "typeAnnotation": null,
              "start": 3010,
              "end": 3019
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
                  "start": 3021,
                  "end": 3022
                },
                "typeArguments": null,
                "start": 3021,
                "end": 3022
              },
              "start": 3019,
              "end": 3022
            },
            "accessibility": null,
            "static": false,
            "start": 3010,
            "end": 3022
          }
        ],
        "start": 3008,
        "end": 3024
      },
      "declare": false,
      "start": 2990,
      "end": 3025
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 3031,
        "end": 3037
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
              "start": 3038,
              "end": 3039
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3038,
            "end": 3039
          }
        ],
        "start": 3037,
        "end": 3040
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
            "start": 3043,
            "end": 3044
          },
          "typeArguments": null,
          "start": 3043,
          "end": 3044
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 3053,
            "end": 3060
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                    "start": 3067,
                    "end": 3068
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3067,
                  "end": 3068
                },
                "start": 3061,
                "end": 3068
              }
            ],
            "start": 3060,
            "end": 3069
          },
          "start": 3053,
          "end": 3069
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 3072,
            "end": 3073
          },
          "typeArguments": null,
          "start": 3072,
          "end": 3073
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3076,
            "end": 3077
          },
          "typeArguments": null,
          "start": 3076,
          "end": 3077
        },
        "start": 3043,
        "end": 3077
      },
      "declare": false,
      "start": 3026,
      "end": 3078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 3097,
        "end": 3100
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
              "start": 3101,
              "end": 3102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3101,
            "end": 3102
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3104,
              "end": 3105
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
                  "start": 3120,
                  "end": 3121
                },
                "typeArguments": null,
                "start": 3120,
                "end": 3121
              },
              "start": 3114,
              "end": 3121
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3104,
            "end": 3121
          }
        ],
        "start": 3100,
        "end": 3122
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
                "start": 3131,
                "end": 3132
              },
              "typeArguments": null,
              "start": 3131,
              "end": 3132
            },
            "start": 3129,
            "end": 3132
          },
          "start": 3126,
          "end": 3132
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
                "start": 3141,
                "end": 3142
              },
              "typeArguments": null,
              "start": 3141,
              "end": 3142
            },
            "start": 3139,
            "end": 3142
          },
          "start": 3136,
          "end": 3142
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
                "name": "Unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 3153,
                "end": 3159
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
                        "start": 3160,
                        "end": 3161
                      },
                      "typeArguments": null,
                      "start": 3160,
                      "end": 3161
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3162,
                        "end": 3163
                      },
                      "typeArguments": null,
                      "start": 3162,
                      "end": 3163
                    },
                    "start": 3160,
                    "end": 3164
                  }
                ],
                "start": 3159,
                "end": 3165
              },
              "start": 3153,
              "end": 3165
            },
            "start": 3151,
            "end": 3165
          },
          "start": 3146,
          "end": 3165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unwrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 3169,
            "end": 3175
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
                    "start": 3176,
                    "end": 3177
                  },
                  "typeArguments": null,
                  "start": 3176,
                  "end": 3177
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3178,
                    "end": 3179
                  },
                  "typeArguments": null,
                  "start": 3178,
                  "end": 3179
                },
                "start": 3176,
                "end": 3180
              }
            ],
            "start": 3175,
            "end": 3181
          },
          "start": 3169,
          "end": 3181
        },
        "start": 3167,
        "end": 3181
      },
      "body": null,
      "expression": false,
      "start": 3080,
      "end": 3182
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3190,
        "end": 3194
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 3199,
              "end": 3203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3206,
                  "end": 3213
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3214,
                      "end": 3220
                    }
                  ],
                  "start": 3213,
                  "end": 3221
                },
                "start": 3206,
                "end": 3221
              },
              "start": 3204,
              "end": 3221
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 3199,
            "end": 3222
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
              "start": 3226,
              "end": 3232
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "set",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3241,
                        "end": 3244
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 3245,
                          "end": 3249
                        },
                        {
                          "type": "Literal",
                          "value": "prop",
                          "raw": "\"prop\"",
                          "start": 3251,
                          "end": 3257
                        },
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 3259,
                          "end": 3263
                        }
                      ],
                      "optional": false,
                      "start": 3241,
                      "end": 3264
                    },
                    "directive": null,
                    "start": 3241,
                    "end": 3265
                  }
                ],
                "start": 3235,
                "end": 3287
              },
              "expression": false,
              "start": 3232,
              "end": 3287
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3226,
            "end": 3287
          }
        ],
        "start": 3195,
        "end": 3289
      },
      "abstract": false,
      "declare": false,
      "start": 3184,
      "end": 3289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": null,
          "start": 3291,
          "end": 3294
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3299,
              "end": 3303
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3295,
            "end": 3305
          },
          {
            "type": "Literal",
            "value": "prop",
            "raw": "\"prop\"",
            "start": 3307,
            "end": 3313
          },
          {
            "type": "Literal",
            "value": "hi",
            "raw": "\"hi\"",
            "start": 3315,
            "end": 3319
          }
        ],
        "optional": false,
        "start": 3291,
        "end": 3320
      },
      "directive": null,
      "start": 3291,
      "end": 3321
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferBecauseWhyNot",
        "optional": false,
        "typeAnnotation": null,
        "start": 3346,
        "end": 3364
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
              "start": 3365,
              "end": 3366
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3365,
            "end": 3366
          }
        ],
        "start": 3364,
        "end": 3367
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3371,
                "end": 3372
              },
              "typeArguments": null,
              "start": 3371,
              "end": 3372
            }
          ],
          "start": 3370,
          "end": 3373
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3393,
                          "end": 3395
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3393,
                        "end": 3395
                      },
                      "start": 3387,
                      "end": 3395
                    },
                    "start": 3385,
                    "end": 3395
                  },
                  "start": 3384,
                  "end": 3395
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3400,
                  "end": 3403
                },
                "start": 3397,
                "end": 3403
              },
              "start": 3383,
              "end": 3403
            }
          ],
          "start": 3382,
          "end": 3404
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3409,
                "end": 3411
              },
              "typeArguments": null,
              "start": 3409,
              "end": 3411
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3414,
                "end": 3415
              },
              "typeArguments": null,
              "start": 3414,
              "end": 3415
            }
          ],
          "start": 3409,
          "end": 3415
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3420,
          "end": 3425
        },
        "start": 3370,
        "end": 3425
      },
      "declare": false,
      "start": 3341,
      "end": 3426
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3437,
        "end": 3439
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
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 3440,
              "end": 3441
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3456,
                      "end": 3459
                    },
                    "start": 3454,
                    "end": 3459
                  },
                  "start": 3451,
                  "end": 3459
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3464,
                  "end": 3467
                },
                "start": 3461,
                "end": 3467
              },
              "start": 3450,
              "end": 3467
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3440,
            "end": 3467
          }
        ],
        "start": 3439,
        "end": 3468
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 3472,
                "end": 3473
              },
              "typeArguments": null,
              "start": 3472,
              "end": 3473
            },
            "start": 3470,
            "end": 3473
          },
          "start": 3469,
          "end": 3473
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferBecauseWhyNot",
            "optional": false,
            "typeAnnotation": null,
            "start": 3476,
            "end": 3494
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3495,
                  "end": 3496
                },
                "typeArguments": null,
                "start": 3495,
                "end": 3496
              }
            ],
            "start": 3494,
            "end": 3497
          },
          "start": 3476,
          "end": 3497
        },
        "start": 3474,
        "end": 3497
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3509,
              "end": 3510
            },
            "start": 3502,
            "end": 3511
          }
        ],
        "start": 3498,
        "end": 3513
      },
      "expression": false,
      "start": 3428,
      "end": 3513
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferBecauseWhyNotDistributive",
        "optional": false,
        "typeAnnotation": null,
        "start": 3520,
        "end": 3550
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
              "start": 3551,
              "end": 3552
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3551,
            "end": 3552
          }
        ],
        "start": 3550,
        "end": 3553
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
            "start": 3556,
            "end": 3557
          },
          "typeArguments": null,
          "start": 3556,
          "end": 3557
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3576,
                      "end": 3578
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3576,
                    "end": 3578
                  },
                  "start": 3570,
                  "end": 3578
                },
                "start": 3568,
                "end": 3578
              },
              "start": 3567,
              "end": 3578
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3583,
              "end": 3586
            },
            "start": 3580,
            "end": 3586
          },
          "start": 3566,
          "end": 3586
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3591,
                "end": 3593
              },
              "typeArguments": null,
              "start": 3591,
              "end": 3593
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3596,
                "end": 3597
              },
              "typeArguments": null,
              "start": 3596,
              "end": 3597
            }
          ],
          "start": 3591,
          "end": 3597
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3602,
          "end": 3607
        },
        "start": 3556,
        "end": 3607
      },
      "declare": false,
      "start": 3515,
      "end": 3608
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3619,
        "end": 3621
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
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 3622,
              "end": 3623
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3638,
                      "end": 3641
                    },
                    "start": 3636,
                    "end": 3641
                  },
                  "start": 3633,
                  "end": 3641
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3646,
                  "end": 3649
                },
                "start": 3643,
                "end": 3649
              },
              "start": 3632,
              "end": 3649
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3622,
            "end": 3649
          }
        ],
        "start": 3621,
        "end": 3650
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 3657,
                "end": 3658
              },
              "typeArguments": null,
              "start": 3657,
              "end": 3658
            },
            "start": 3655,
            "end": 3658
          },
          "start": 3654,
          "end": 3658
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferBecauseWhyNotDistributive",
            "optional": false,
            "typeAnnotation": null,
            "start": 3662,
            "end": 3692
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3693,
                  "end": 3694
                },
                "typeArguments": null,
                "start": 3693,
                "end": 3694
              }
            ],
            "start": 3692,
            "end": 3695
          },
          "start": 3662,
          "end": 3695
        },
        "start": 3660,
        "end": 3695
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3707,
              "end": 3708
            },
            "start": 3700,
            "end": 3709
          }
        ],
        "start": 3696,
        "end": 3726
      },
      "expression": false,
      "start": 3610,
      "end": 3726
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3726
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "FilterPropsByType",
    "start": 12,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "TT",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 46,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 64,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "TT",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "TList",
    "start": 148,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 154,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "object",
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
    "value": "TValueProp",
    "start": 172,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "FilterPropsByType",
    "start": 191,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "TList",
    "start": 209,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "TList",
    "start": 240,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "valueProp",
    "start": 249,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "TValueProp",
    "start": 260,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 276,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 283,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "XX",
    "start": 297,
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
    "value": "string",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "XX",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "tipos",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "XX",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "tipos",
    "start": 361,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 368,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 381,
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
    "value": "onlyNullablePlease",
    "start": 398,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 419,
    "end": 426
  },
  {
    "type": "Null",
    "value": "null",
    "start": 427,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 432,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 460,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 472,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 479,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 487,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease2",
    "start": 496,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516
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
    "type": "Punctuator",
    "value": "[",
    "start": 529,
    "end": 530
  },
  {
    "type": "Null",
    "value": "null",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 536,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 556,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 564,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 582,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 604,
    "end": 605
  },
  {
    "type": "Null",
    "value": "null",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease",
    "start": 612,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
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
    "value": "onlyNullablePlease2",
    "start": 656,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 702,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 710,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 717,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease",
    "start": 725,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease2",
    "start": 769,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 815,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 839,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 848,
    "end": 849
  },
  {
    "type": "Null",
    "value": "null",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 871,
    "end": 872
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 877,
    "end": 878
  },
  {
    "type": "Null",
    "value": "null",
    "start": 879,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease",
    "start": 891,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease2",
    "start": 931,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 973,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 982,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 988,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1008,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1014,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "}",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1043,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1059,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1071,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1098,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1114,
    "end": 1121
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1122,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1138,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1144,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1153,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1158,
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
    "value": "x",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1175,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1234,
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
    "value": "s",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1263,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 1268,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1282,
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
    "value": "T",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1288,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1298,
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
    "value": "number",
    "start": 1301,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1317,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1333,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1343,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "testAssignabilityToConditionalType",
    "start": 1352,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1396,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1424,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1437,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1446,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1465,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1485,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1496,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1507,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1542,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 1548,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1556,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1565,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1580,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1596,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1684,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1690,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1698,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1707,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1726,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1735,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1750,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1766,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1787,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1796,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1811,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1827,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1880,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1886,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1894,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1904,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2499,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 2505,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 2509,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2608,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 2614,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 2618,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2635,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2713,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 2719,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 2723,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2914,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 2920,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 2924,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2941,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2950,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2964,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2975,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2990,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "Wrapped",
    "start": 2995,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "___secret",
    "start": 3010,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": ";",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3026,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 3031,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3045,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "Wrapped",
    "start": 3053,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3061,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3080,
    "end": 3087
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3088,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3097,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3106,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3114,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3126,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3136,
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
    "value": "K",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3146,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 3153,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 3169,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3184,
    "end": 3189
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 3190,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 3199,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "Wrapped",
    "start": 3206,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3214,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 3226,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3241,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3245,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 3251,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3259,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3291,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3295,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 3299,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 3307,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3315,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3341,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "InferBecauseWhyNot",
    "start": 3346,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3374,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3387,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 3393,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3397,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3400,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 3409,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3420,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3428,
    "end": 3436
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 3437,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "Q",
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
    "type": "Punctuator",
    "value": "(",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3451,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3456,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3461,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3464,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "InferBecauseWhyNot",
    "start": 3476,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3502,
    "end": 3508
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3515,
    "end": 3519
  },
  {
    "type": "Identifier",
    "value": "InferBecauseWhyNotDistributive",
    "start": 3520,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3558,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3570,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 3576,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3580,
    "end": 3582
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3583,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 3591,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3602,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3610,
    "end": 3618
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 3619,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3624,
    "end": 3631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3633,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3638,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3643,
    "end": 3645
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3646,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "InferBecauseWhyNotDistributive",
    "start": 3662,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3700,
    "end": 3706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3725,
    "end": 3726
  }
]
```

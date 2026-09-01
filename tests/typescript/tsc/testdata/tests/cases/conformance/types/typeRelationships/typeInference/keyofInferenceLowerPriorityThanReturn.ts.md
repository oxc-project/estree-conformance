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
        "name": "Write",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 29
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Write",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 58
                },
                "typeArguments": null,
                "start": 53,
                "end": 58
              },
              "start": 51,
              "end": 58
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 36,
            "end": 59
          }
        ],
        "start": 30,
        "end": 61
      },
      "abstract": false,
      "declare": true,
      "start": 10,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Col",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 80
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 82
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 85
          }
        ],
        "start": 80,
        "end": 86
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 108
            },
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
                      "name": "Col",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 114
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 115,
                            "end": 116
                          },
                          "typeArguments": null,
                          "start": 115,
                          "end": 116
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 119
                          },
                          "typeArguments": null,
                          "start": 118,
                          "end": 119
                        }
                      ],
                      "start": 114,
                      "end": 120
                    },
                    "start": 111,
                    "end": 120
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 123
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 126
                    },
                    "typeArguments": null,
                    "start": 125,
                    "end": 126
                  }
                ],
                "start": 110,
                "end": 127
              },
              "start": 108,
              "end": 127
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 93,
            "end": 128
          }
        ],
        "start": 87,
        "end": 130
      },
      "abstract": false,
      "declare": true,
      "start": 63,
      "end": 130
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 151
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Req",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 155
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Def",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 160
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 157,
            "end": 160
          }
        ],
        "start": 151,
        "end": 161
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 183
            },
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
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 191
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Req",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 192,
                            "end": 195
                          },
                          "typeArguments": null,
                          "start": 192,
                          "end": 195
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Def",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 197,
                            "end": 200
                          },
                          "typeArguments": null,
                          "start": 197,
                          "end": 200
                        }
                      ],
                      "start": 191,
                      "end": 201
                    },
                    "start": 186,
                    "end": 201
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Req",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 206
                    },
                    "typeArguments": null,
                    "start": 203,
                    "end": 206
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 211
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 211
                  }
                ],
                "start": 185,
                "end": 212
              },
              "start": 183,
              "end": 212
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 168,
            "end": 213
          }
        ],
        "start": 162,
        "end": 215
      },
      "abstract": false,
      "declare": true,
      "start": 132,
      "end": 215
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MakeTable",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 231
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 234
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 243,
              "end": 249
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 232,
            "end": 249
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 253
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 262,
              "end": 268
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 251,
            "end": 268
          }
        ],
        "start": 231,
        "end": 269
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 292
                },
                "typeArguments": null,
                "start": 290,
                "end": 292
              },
              "start": 284,
              "end": 292
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Col",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 298
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Write",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 304
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 304
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 308
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 308
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    },
                    "start": 306,
                    "end": 311
                  }
                ],
                "start": 298,
                "end": 312
              },
              "start": 295,
              "end": 312
            },
            "optional": false,
            "readonly": null,
            "start": 272,
            "end": 315
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 342
                },
                "typeArguments": null,
                "start": 340,
                "end": 342
              },
              "start": 334,
              "end": 342
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Col",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 348
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Write",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 354
                    },
                    "typeArguments": null,
                    "start": 349,
                    "end": 354
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 356,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 356,
                      "end": 358
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 359,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 359,
                      "end": 360
                    },
                    "start": 356,
                    "end": 361
                  }
                ],
                "start": 348,
                "end": 362
              },
              "start": 345,
              "end": 362
            },
            "optional": false,
            "readonly": null,
            "start": 318,
            "end": 369
          }
        ],
        "start": 272,
        "end": 369
      },
      "declare": false,
      "start": 217,
      "end": 370
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConflictTarget",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 400
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cols",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 405
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 401,
            "end": 405
          }
        ],
        "start": 400,
        "end": 406
      },
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
              "name": "tableColumns",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 439
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "Cols",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 444
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 440,
                    "end": 444
                  }
                ],
                "start": 439,
                "end": 445
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cols",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Cols",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 459,
                            "end": 463
                          },
                          "typeArguments": null,
                          "start": 459,
                          "end": 463
                        },
                        "start": 453,
                        "end": 463
                      },
                      "start": 452,
                      "end": 466
                    },
                    "start": 450,
                    "end": 466
                  },
                  "start": 446,
                  "end": 466
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConflictTarget",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 483
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Cols",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 488
                        },
                        "typeArguments": null,
                        "start": 484,
                        "end": 488
                      }
                    ],
                    "start": 483,
                    "end": 489
                  },
                  "start": 469,
                  "end": 489
                },
                "start": 467,
                "end": 489
              },
              "body": null,
              "expression": false,
              "start": 439,
              "end": 490
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 413,
            "end": 490
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 510
            },
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
                      "name": "ConflictTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 527
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Cols",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 528,
                            "end": 532
                          },
                          "typeArguments": null,
                          "start": 528,
                          "end": 532
                        }
                      ],
                      "start": 527,
                      "end": 533
                    },
                    "start": 513,
                    "end": 533
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cols",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 535,
                      "end": 539
                    },
                    "typeArguments": null,
                    "start": 535,
                    "end": 539
                  }
                ],
                "start": 512,
                "end": 540
              },
              "start": 510,
              "end": 540
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 495,
            "end": 541
          }
        ],
        "start": 407,
        "end": 543
      },
      "abstract": false,
      "declare": true,
      "start": 372,
      "end": 543
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
            "name": "bookTable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 564,
                  "end": 569
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BookReq",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 570,
                      "end": 577
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BookDef",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 579,
                        "end": 586
                      },
                      "typeArguments": null,
                      "start": 579,
                      "end": 586
                    }
                  ],
                  "start": 569,
                  "end": 587
                },
                "start": 564,
                "end": 587
              },
              "start": 562,
              "end": 587
            },
            "start": 553,
            "end": 587
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 590,
              "end": 594
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 598,
              "end": 601
            },
            "start": 590,
            "end": 601
          },
          "definite": false,
          "start": 553,
          "end": 601
        }
      ],
      "declare": false,
      "start": 547,
      "end": 601
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BookReq",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 620
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
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 641
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 643,
                "end": 649
              },
              "start": 641,
              "end": 649
            },
            "accessibility": null,
            "static": false,
            "start": 627,
            "end": 650
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "serial",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 670
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 672,
                "end": 678
              },
              "start": 670,
              "end": 678
            },
            "accessibility": null,
            "static": false,
            "start": 655,
            "end": 679
          }
        ],
        "start": 621,
        "end": 681
      },
      "declare": false,
      "start": 603,
      "end": 681
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BookDef",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 700
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
              "name": "author",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 722
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 724,
                "end": 730
              },
              "start": 722,
              "end": 730
            },
            "accessibility": null,
            "static": false,
            "start": 707,
            "end": 731
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "numPages",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 753
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 755,
                    "end": 761
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 764,
                    "end": 768
                  }
                ],
                "start": 755,
                "end": 768
              },
              "start": 753,
              "end": 768
            },
            "accessibility": null,
            "static": false,
            "start": 736,
            "end": 769
          }
        ],
        "start": 701,
        "end": 771
      },
      "declare": false,
      "start": 683,
      "end": 771
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "insertOnConflictDoNothing",
        "optional": false,
        "typeAnnotation": null,
        "start": 783,
        "end": 808
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
              "name": "Req",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 812
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 821,
              "end": 827
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 809,
            "end": 827
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Def",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 832
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 841,
              "end": 847
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 829,
            "end": 847
          }
        ],
        "start": 808,
        "end": 848
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_table",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Table",
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 862
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Req",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 866
                    },
                    "typeArguments": null,
                    "start": 863,
                    "end": 866
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 868,
                      "end": 871
                    },
                    "typeArguments": null,
                    "start": 868,
                    "end": 871
                  }
                ],
                "start": 862,
                "end": 872
              },
              "start": 857,
              "end": 872
            },
            "start": 855,
            "end": 872
          },
          "start": 849,
          "end": 872
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_conflictTarget",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConflictTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 905
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
                          "name": "Req",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 906,
                          "end": 909
                        },
                        "typeArguments": null,
                        "start": 906,
                        "end": 909
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Def",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 915
                        },
                        "typeArguments": null,
                        "start": 912,
                        "end": 915
                      }
                    ],
                    "start": 906,
                    "end": 915
                  }
                ],
                "start": 905,
                "end": 916
              },
              "start": 891,
              "end": 916
            },
            "start": 889,
            "end": 916
          },
          "start": 874,
          "end": 916
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 919,
          "end": 926
        },
        "start": 917,
        "end": 926
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 943,
                "end": 948
              },
              "typeArguments": null,
              "arguments": [],
              "start": 939,
              "end": 950
            },
            "start": 933,
            "end": 951
          }
        ],
        "start": 927,
        "end": 953
      },
      "expression": false,
      "start": 774,
      "end": 953
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 964,
        "end": 965
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "insertOnConflictDoNothing",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 999
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bookTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1000,
                  "end": 1009
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ConflictTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1011,
                      "end": 1025
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tableColumns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1026,
                      "end": 1038
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1011,
                    "end": 1038
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "serial",
                          "raw": "\"serial\"",
                          "start": 1040,
                          "end": 1048
                        }
                      ],
                      "start": 1039,
                      "end": 1049
                    }
                  ],
                  "optional": false,
                  "start": 1011,
                  "end": 1050
                }
              ],
              "optional": false,
              "start": 974,
              "end": 1051
            },
            "directive": null,
            "start": 974,
            "end": 1052
          }
        ],
        "start": 968,
        "end": 1144
      },
      "expression": false,
      "start": 955,
      "end": 1144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 1144
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 10,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Write",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 36,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Write",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 63,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Col",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 93,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Col",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 132,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Def",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 168,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Def",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Def",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 217,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "MakeTable",
    "start": 222,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 232,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 235,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 251,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 254,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 281,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Col",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Write",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 331,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 334,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Col",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Write",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 372,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 380,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "ConflictTarget",
    "start": 386,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Cols",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 413,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 420,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "tableColumns",
    "start": 427,
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
    "value": "Cols",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "cols",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 453,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Cols",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "ConflictTarget",
    "start": 469,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Cols",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "protected",
    "start": 495,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "dummy",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "ConflictTarget",
    "start": 513,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "Cols",
    "start": 528,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "Cols",
    "start": 535,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 547,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "bookTable",
    "start": 553,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 564,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "BookReq",
    "start": 570,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "BookDef",
    "start": 579,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Null",
    "value": "null",
    "start": 590,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 595,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 598,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 603,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "BookReq",
    "start": 613,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 627,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 636,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 655,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "serial",
    "start": 664,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 683,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "BookDef",
    "start": 693,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 707,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "author",
    "start": 716,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 724,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 736,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "numPages",
    "start": 745,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 762,
    "end": 763
  },
  {
    "type": "Null",
    "value": "null",
    "start": 764,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 774,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "insertOnConflictDoNothing",
    "start": 783,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 809,
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
    "value": "object",
    "start": 821,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "Def",
    "start": 829,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 833,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "_table",
    "start": 849,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 857,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "Def",
    "start": 868,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "_conflictTarget",
    "start": 874,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "ConflictTarget",
    "start": 891,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 906,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "Def",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 919,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 933,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 939,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 943,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 952,
    "end": 953
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 955,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "insertOnConflictDoNothing",
    "start": 974,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "bookTable",
    "start": 1000,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "ConflictTarget",
    "start": 1011,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "tableColumns",
    "start": 1026,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "String",
    "value": "\"serial\"",
    "start": 1040,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1143,
    "end": 1144
  }
]
```

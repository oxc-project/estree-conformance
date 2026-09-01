__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "EffectTypeId",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 35,
                  "end": 41
                },
                "start": 28,
                "end": 41
              },
              "start": 26,
              "end": 41
            },
            "start": 14,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 41
        }
      ],
      "declare": true,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Variance",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 62
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 63,
            "end": 68
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 70,
            "end": 75
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 77,
            "end": 82
          }
        ],
        "start": 62,
        "end": 83
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "EffectTypeId",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 110
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceStruct",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 127
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
                        "start": 128,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 129
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 132
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 135
                      },
                      "typeArguments": null,
                      "start": 134,
                      "end": 135
                    }
                  ],
                  "start": 127,
                  "end": 136
                },
                "start": 113,
                "end": 136
              },
              "start": 111,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 137
          }
        ],
        "start": 84,
        "end": 139
      },
      "declare": false,
      "start": 44,
      "end": 139
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Covariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 155
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 157
          }
        ],
        "start": 155,
        "end": 158
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 165,
                "end": 170
              },
              "start": 163,
              "end": 170
            },
            "start": 162,
            "end": 170
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "typeArguments": null,
            "start": 175,
            "end": 176
          },
          "start": 172,
          "end": 176
        },
        "start": 161,
        "end": 176
      },
      "declare": false,
      "start": 141,
      "end": 177
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceStruct",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 203
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 204,
            "end": 209
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 211,
            "end": 216
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 218,
            "end": 223
          }
        ],
        "start": 203,
        "end": 224
      },
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
              "name": "_V",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 249
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 263
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 274
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
                        "start": 275,
                        "end": 276
                      },
                      "typeArguments": null,
                      "start": 275,
                      "end": 276
                    }
                  ],
                  "start": 274,
                  "end": 277
                },
                "start": 265,
                "end": 277
              },
              "start": 263,
              "end": 277
            },
            "accessibility": null,
            "static": false,
            "start": 252,
            "end": 278
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_E",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 303
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 304,
                        "end": 305
                      },
                      "typeArguments": null,
                      "start": 304,
                      "end": 305
                    }
                  ],
                  "start": 303,
                  "end": 306
                },
                "start": 294,
                "end": 306
              },
              "start": 292,
              "end": 306
            },
            "accessibility": null,
            "static": false,
            "start": 281,
            "end": 307
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 321
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 332
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 334
                      },
                      "typeArguments": null,
                      "start": 333,
                      "end": 334
                    }
                  ],
                  "start": 332,
                  "end": 335
                },
                "start": 323,
                "end": 335
              },
              "start": 321,
              "end": 335
            },
            "accessibility": null,
            "static": false,
            "start": 310,
            "end": 336
          }
        ],
        "start": 225,
        "end": 338
      },
      "declare": false,
      "start": 179,
      "end": 338
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 356
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 357,
            "end": 362
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 372,
              "end": 377
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 364,
            "end": 377
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 387,
              "end": 392
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 379,
            "end": 392
          }
        ],
        "start": 356,
        "end": 393
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Variance",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 412
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
                  "start": 413,
                  "end": 414
                },
                "typeArguments": null,
                "start": 413,
                "end": 414
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 417
                },
                "typeArguments": null,
                "start": 416,
                "end": 417
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 420
                },
                "typeArguments": null,
                "start": 419,
                "end": 420
              }
            ],
            "start": 412,
            "end": 421
          },
          "start": 404,
          "end": 421
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 422,
        "end": 424
      },
      "declare": false,
      "start": 340,
      "end": 424
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
            "name": "succeed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 451
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 450,
                      "end": 451
                    }
                  ],
                  "start": 449,
                  "end": 452
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 460,
                          "end": 461
                        },
                        "typeArguments": null,
                        "start": 460,
                        "end": 461
                      },
                      "start": 458,
                      "end": 461
                    },
                    "start": 453,
                    "end": 461
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Effect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 466,
                      "end": 472
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
                            "start": 473,
                            "end": 474
                          },
                          "typeArguments": null,
                          "start": 473,
                          "end": 474
                        }
                      ],
                      "start": 472,
                      "end": 475
                    },
                    "start": 466,
                    "end": 475
                  },
                  "start": 463,
                  "end": 475
                },
                "start": 449,
                "end": 475
              },
              "start": 447,
              "end": 475
            },
            "start": 440,
            "end": 475
          },
          "init": null,
          "definite": false,
          "start": 440,
          "end": 475
        }
      ],
      "declare": true,
      "start": 426,
      "end": 476
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 484
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 485,
            "end": 486
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 488,
            "end": 489
          }
        ],
        "start": 484,
        "end": 490
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 494
          },
          "typeArguments": null,
          "start": 493,
          "end": 494
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
                "name": "_type",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 510
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 519
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 518,
                    "end": 519
                  },
                  "start": 512,
                  "end": 519
                },
                "start": 510,
                "end": 519
              },
              "accessibility": null,
              "static": false,
              "start": 505,
              "end": 519
            }
          ],
          "start": 503,
          "end": 521
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 527
            },
            "typeArguments": null,
            "start": 526,
            "end": 527
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Effect",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 542
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 549,
                      "end": 550
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 549,
                    "end": 550
                  },
                  "start": 543,
                  "end": 550
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 558,
                      "end": 559
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 558,
                    "end": 559
                  },
                  "start": 552,
                  "end": 559
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 568
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 567,
                    "end": 568
                  },
                  "start": 561,
                  "end": 568
                }
              ],
              "start": 542,
              "end": 569
            },
            "start": 536,
            "end": 569
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Effect",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 582
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
                    "start": 583,
                    "end": 584
                  },
                  "typeArguments": null,
                  "start": 583,
                  "end": 584
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 586,
                    "end": 587
                  },
                  "typeArguments": null,
                  "start": 586,
                  "end": 587
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 590
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 593,
                        "end": 594
                      },
                      "typeArguments": null,
                      "start": 593,
                      "end": 594
                    }
                  ],
                  "start": 589,
                  "end": 594
                }
              ],
              "start": 582,
              "end": 595
            },
            "start": 576,
            "end": 595
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 603
            },
            "typeArguments": null,
            "start": 602,
            "end": 603
          },
          "start": 526,
          "end": 603
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 609
          },
          "typeArguments": null,
          "start": 608,
          "end": 609
        },
        "start": 493,
        "end": 609
      },
      "declare": false,
      "start": 478,
      "end": 610
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProxyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 625
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Service",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 633
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 626,
            "end": 633
          }
        ],
        "start": 625,
        "end": 634
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 642,
          "end": 643
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Service",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 660
            },
            "typeArguments": null,
            "start": 653,
            "end": 660
          },
          "start": 647,
          "end": 660
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Service",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 671
                },
                "typeArguments": null,
                "start": 664,
                "end": 671
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
                      "name": "_type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 681
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Service",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 690
                        },
                        "typeArguments": null,
                        "start": 683,
                        "end": 690
                      },
                      "start": 681,
                      "end": 690
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 676,
                    "end": 690
                  }
                ],
                "start": 674,
                "end": 692
              }
            ],
            "start": 664,
            "end": 692
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 694,
              "end": 695
            },
            "typeArguments": null,
            "start": 694,
            "end": 695
          },
          "start": 663,
          "end": 696
        },
        "optional": false,
        "readonly": null,
        "start": 637,
        "end": 699
      },
      "declare": false,
      "start": 612,
      "end": 700
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
            "name": "implement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 728,
                        "end": 729
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 728,
                      "end": 729
                    }
                  ],
                  "start": 727,
                  "end": 730
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "start": 737,
                            "end": 738
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ReadonlyArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 747,
                              "end": 760
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 761,
                                  "end": 764
                                }
                              ],
                              "start": 760,
                              "end": 765
                            },
                            "start": 747,
                            "end": 765
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 737,
                          "end": 765
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 767,
                            "end": 768
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 767,
                          "end": 768
                        }
                      ],
                      "start": 736,
                      "end": 769
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
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 780,
                                  "end": 781
                                },
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
                                      "start": 783,
                                      "end": 784
                                    },
                                    "typeArguments": null,
                                    "start": 783,
                                    "end": 784
                                  },
                                  "start": 781,
                                  "end": 784
                                },
                                "value": null,
                                "start": 777,
                                "end": 784
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "X",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 789,
                                  "end": 790
                                },
                                "typeArguments": null,
                                "start": 789,
                                "end": 790
                              },
                              "start": 786,
                              "end": 790
                            },
                            "start": 776,
                            "end": 790
                          },
                          "start": 774,
                          "end": 790
                        },
                        "start": 773,
                        "end": 790
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 801,
                              "end": 802
                            },
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
                                  "start": 804,
                                  "end": 805
                                },
                                "typeArguments": null,
                                "start": 804,
                                "end": 805
                              },
                              "start": 802,
                              "end": 805
                            },
                            "value": null,
                            "start": 798,
                            "end": 805
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 810,
                              "end": 811
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "X",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 812,
                                    "end": 813
                                  },
                                  "typeArguments": null,
                                  "start": 812,
                                  "end": 813
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 815,
                                    "end": 816
                                  },
                                  "typeArguments": null,
                                  "start": 815,
                                  "end": 816
                                }
                              ],
                              "start": 811,
                              "end": 817
                            },
                            "start": 810,
                            "end": 817
                          },
                          "start": 807,
                          "end": 817
                        },
                        "start": 797,
                        "end": 817
                      },
                      "start": 794,
                      "end": 817
                    },
                    "start": 736,
                    "end": 817
                  },
                  "start": 733,
                  "end": 817
                },
                "start": 727,
                "end": 817
              },
              "start": 725,
              "end": 817
            },
            "start": 716,
            "end": 817
          },
          "init": null,
          "definite": false,
          "start": 716,
          "end": 817
        }
      ],
      "declare": true,
      "start": 702,
      "end": 818
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XXX",
        "optional": false,
        "typeAnnotation": null,
        "start": 826,
        "end": 829
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
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 837
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "implement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 849
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 850,
                      "end": 854
                    }
                  ],
                  "start": 849,
                  "end": 855
                },
                "arguments": [],
                "optional": false,
                "start": 840,
                "end": 857
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 859,
                          "end": 860
                        },
                        "constraint": {
                          "type": "TSNumberKeyword",
                          "start": 869,
                          "end": 875
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 859,
                        "end": 875
                      }
                    ],
                    "start": 858,
                    "end": 876
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
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 880,
                            "end": 881
                          },
                          "typeArguments": null,
                          "start": 880,
                          "end": 881
                        },
                        "start": 878,
                        "end": 881
                      },
                      "start": 877,
                      "end": 881
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "succeed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 893
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 894,
                        "end": 895
                      }
                    ],
                    "optional": false,
                    "start": 886,
                    "end": 896
                  },
                  "id": null,
                  "generator": false,
                  "start": 858,
                  "end": 896
                }
              ],
              "optional": false,
              "start": 840,
              "end": 897
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 834,
            "end": 898
          }
        ],
        "start": 830,
        "end": 900
      },
      "abstract": false,
      "declare": false,
      "start": 820,
      "end": 900
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "XXX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 930,
                    "end": 933
                  },
                  "typeArguments": null,
                  "start": 930,
                  "end": 933
                },
                "start": 928,
                "end": 933
              },
              "start": 923,
              "end": 933
            },
            "init": null,
            "definite": false,
            "start": 923,
            "end": 933
          }
        ],
        "declare": true,
        "start": 909,
        "end": 934
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 902,
      "end": 934
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProxyMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 963,
                    "end": 971
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "XXX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 972,
                          "end": 975
                        },
                        "typeArguments": null,
                        "start": 972,
                        "end": 975
                      }
                    ],
                    "start": 971,
                    "end": 976
                  },
                  "start": 963,
                  "end": 976
                },
                "start": 961,
                "end": 976
              },
              "start": 956,
              "end": 976
            },
            "init": null,
            "definite": false,
            "start": 956,
            "end": 976
          }
        ],
        "declare": true,
        "start": 942,
        "end": 977
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 935,
      "end": 977
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "start": 992,
              "end": 993
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1001
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1002,
                  "end": 1005
                },
                "optional": false,
                "computed": false,
                "start": 996,
                "end": 1005
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 1006,
                  "end": 1009
                }
              ],
              "optional": false,
              "start": 996,
              "end": 1010
            },
            "definite": false,
            "start": 992,
            "end": 1010
          }
        ],
        "declare": false,
        "start": 986,
        "end": 1011
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 979,
      "end": 1011
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1054,
              "end": 1055
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1058,
                  "end": 1063
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1067
                },
                "optional": false,
                "computed": false,
                "start": 1058,
                "end": 1067
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 1068,
                  "end": 1071
                }
              ],
              "optional": false,
              "start": 1058,
              "end": 1072
            },
            "definite": false,
            "start": 1054,
            "end": 1072
          }
        ],
        "declare": false,
        "start": 1048,
        "end": 1073
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1041,
      "end": 1073
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1100
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "EffectTypeId",
    "start": 14,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 44,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "Variance",
    "start": 54,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 88,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "EffectTypeId",
    "start": 98,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "VarianceStruct",
    "start": 113,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 141,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 146,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 172,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 179,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "VarianceStruct",
    "start": 189,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 229,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "_V",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 242,
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
    "value": "readonly",
    "start": 252,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 281,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "_E",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 310,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 323,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 340,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 396,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Variance",
    "start": 404,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 426,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 434,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "succeed",
    "start": 440,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 463,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 478,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 495,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "_type",
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
    "type": "Identifier",
    "value": "infer",
    "start": 512,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 528,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 536,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 543,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 552,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "infer",
    "start": 561,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "X",
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
    "start": 612,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "ProxyMap",
    "start": 617,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Service",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 644,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 647,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "Service",
    "start": 653,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "Service",
    "start": 664,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "_type",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "Service",
    "start": 683,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
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
    "value": "[",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 702,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 710,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "implement",
    "start": 716,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 739,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 747,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 777,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 786,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 798,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 807,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "class",
    "start": 820,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "XXX",
    "start": 826,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "implement",
    "start": 840,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 861,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 869,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 883,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "succeed",
    "start": 886,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 902,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 909,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 917,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "XXX",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 935,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 942,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 950,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 956,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "ProxyMap",
    "start": 963,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "XXX",
    "start": 972,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 979,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 986,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 996,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1041,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1048,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  }
]
```

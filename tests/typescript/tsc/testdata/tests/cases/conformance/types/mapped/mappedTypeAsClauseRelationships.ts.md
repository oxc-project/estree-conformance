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
        "name": "Methods",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 45
          }
        ],
        "start": 43,
        "end": 46
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
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
              "start": 63,
              "end": 64
            },
            "typeArguments": null,
            "start": 63,
            "end": 64
          },
          "start": 57,
          "end": 64
        },
        "nameType": {
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
                "start": 68,
                "end": 69
              },
              "typeArguments": null,
              "start": 68,
              "end": 69
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 71
              },
              "typeArguments": null,
              "start": 70,
              "end": 71
            },
            "start": 68,
            "end": 72
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 89
            },
            "typeArguments": null,
            "start": 81,
            "end": 89
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "typeArguments": null,
            "start": 92,
            "end": 93
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 96,
            "end": 101
          },
          "start": 68,
          "end": 101
        },
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
              "start": 104,
              "end": 105
            },
            "typeArguments": null,
            "start": 104,
            "end": 105
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeArguments": null,
            "start": 106,
            "end": 107
          },
          "start": 104,
          "end": 108
        },
        "optional": false,
        "readonly": null,
        "start": 49,
        "end": 110
      },
      "declare": false,
      "start": 31,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
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
              "start": 119,
              "end": 120
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 120
          }
        ],
        "start": 118,
        "end": 121
      },
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
            "start": 124,
            "end": 125
          },
          "typeArguments": null,
          "start": 124,
          "end": 125
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Methods",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 139
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
                    "start": 140,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 140,
                  "end": 141
                }
              ],
              "start": 139,
              "end": 142
            },
            "start": 132,
            "end": 142
          },
          "start": 126,
          "end": 142
        },
        "start": 124,
        "end": 143
      },
      "declare": false,
      "start": 112,
      "end": 144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 213
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
              "start": 214,
              "end": 215
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 215
          }
        ],
        "start": 213,
        "end": 216
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 223
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
              "start": 233,
              "end": 234
            },
            "typeArguments": null,
            "start": 233,
            "end": 234
          },
          "start": 227,
          "end": 234
        },
        "nameType": {
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
                "start": 238,
                "end": 239
              },
              "typeArguments": null,
              "start": 238,
              "end": 239
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "typeArguments": null,
              "start": 240,
              "end": 241
            },
            "start": 238,
            "end": 242
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 259
            },
            "typeArguments": null,
            "start": 251,
            "end": 259
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "typeArguments": null,
            "start": 262,
            "end": 263
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 266,
            "end": 271
          },
          "start": 238,
          "end": 271
        },
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
              "start": 274,
              "end": 275
            },
            "typeArguments": null,
            "start": 274,
            "end": 275
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "typeArguments": null,
            "start": 276,
            "end": 277
          },
          "start": 274,
          "end": 278
        },
        "optional": false,
        "readonly": null,
        "start": 219,
        "end": 280
      },
      "declare": false,
      "start": 202,
      "end": 281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Modify",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 339
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
              "start": 340,
              "end": 341
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 340,
            "end": 341
          }
        ],
        "start": 339,
        "end": 342
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 349
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
              "start": 359,
              "end": 360
            },
            "typeArguments": null,
            "start": 359,
            "end": 360
          },
          "start": 353,
          "end": 360
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 365
            },
            "typeArguments": null,
            "start": 364,
            "end": 365
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 374,
            "end": 380
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "bool",
                  "cooked": "bool"
                },
                "tail": false,
                "start": 382,
                "end": 389
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 390,
                "end": 392
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 390
                },
                "typeArguments": null,
                "start": 389,
                "end": 390
              }
            ],
            "start": 382,
            "end": 392
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 395
            },
            "typeArguments": null,
            "start": 394,
            "end": 395
          },
          "start": 364,
          "end": 395
        },
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
              "start": 398,
              "end": 399
            },
            "typeArguments": null,
            "start": 398,
            "end": 399
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "typeArguments": null,
            "start": 400,
            "end": 401
          },
          "start": 398,
          "end": 402
        },
        "optional": false,
        "readonly": null,
        "start": 345,
        "end": 404
      },
      "declare": false,
      "start": 328,
      "end": 405
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 419
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
              "start": 420,
              "end": 421
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 420,
            "end": 421
          }
        ],
        "start": 419,
        "end": 422
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
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
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "start": 428,
              "end": 429
            },
            "start": 426,
            "end": 429
          },
          "start": 423,
          "end": 429
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Filter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 450
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
                              "start": 451,
                              "end": 452
                            },
                            "typeArguments": null,
                            "start": 451,
                            "end": 452
                          }
                        ],
                        "start": 450,
                        "end": 453
                      },
                      "start": 444,
                      "end": 453
                    },
                    "start": 442,
                    "end": 453
                  },
                  "start": 441,
                  "end": 453
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 459
                },
                "definite": false,
                "start": 441,
                "end": 459
              }
            ],
            "declare": false,
            "start": 437,
            "end": 460
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Modify",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 484
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
                              "start": 485,
                              "end": 486
                            },
                            "typeArguments": null,
                            "start": 485,
                            "end": 486
                          }
                        ],
                        "start": 484,
                        "end": 487
                      },
                      "start": 478,
                      "end": 487
                    },
                    "start": 476,
                    "end": 487
                  },
                  "start": 475,
                  "end": 487
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 493
                },
                "definite": false,
                "start": 475,
                "end": 493
              }
            ],
            "declare": false,
            "start": 471,
            "end": 494
          }
        ],
        "start": 431,
        "end": 505
      },
      "expression": false,
      "start": 407,
      "end": 505
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilterInclOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 525
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
              "start": 526,
              "end": 527
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 526,
            "end": 527
          }
        ],
        "start": 525,
        "end": 528
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 535
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
              "start": 545,
              "end": 546
            },
            "typeArguments": null,
            "start": 545,
            "end": 546
          },
          "start": 539,
          "end": 546
        },
        "nameType": {
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
                "start": 550,
                "end": 551
              },
              "typeArguments": null,
              "start": 550,
              "end": 551
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 553
              },
              "typeArguments": null,
              "start": 552,
              "end": 553
            },
            "start": 550,
            "end": 554
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 571
            },
            "typeArguments": null,
            "start": 563,
            "end": 571
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 575
            },
            "typeArguments": null,
            "start": 574,
            "end": 575
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 578,
            "end": 583
          },
          "start": 550,
          "end": 583
        },
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
              "start": 588,
              "end": 589
            },
            "typeArguments": null,
            "start": 588,
            "end": 589
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 591
            },
            "typeArguments": null,
            "start": 590,
            "end": 591
          },
          "start": 588,
          "end": 592
        },
        "optional": "+",
        "readonly": null,
        "start": 531,
        "end": 594
      },
      "declare": false,
      "start": 507,
      "end": 595
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModifyInclOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 601,
        "end": 614
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
              "start": 615,
              "end": 616
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 615,
            "end": 616
          }
        ],
        "start": 614,
        "end": 617
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 624
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
              "start": 634,
              "end": 635
            },
            "typeArguments": null,
            "start": 634,
            "end": 635
          },
          "start": 628,
          "end": 635
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 640
            },
            "typeArguments": null,
            "start": 639,
            "end": 640
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 649,
            "end": 655
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "bool",
                  "cooked": "bool"
                },
                "tail": false,
                "start": 657,
                "end": 664
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 665,
                "end": 667
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                },
                "typeArguments": null,
                "start": 664,
                "end": 665
              }
            ],
            "start": 657,
            "end": 667
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 669,
            "end": 674
          },
          "start": 639,
          "end": 674
        },
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
              "start": 680,
              "end": 681
            },
            "typeArguments": null,
            "start": 680,
            "end": 681
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 683
            },
            "typeArguments": null,
            "start": 682,
            "end": 683
          },
          "start": 680,
          "end": 684
        },
        "optional": "+",
        "readonly": null,
        "start": 620,
        "end": 686
      },
      "declare": false,
      "start": 596,
      "end": 687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilterExclOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 706
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
              "start": 707,
              "end": 708
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 707,
            "end": 708
          }
        ],
        "start": 706,
        "end": 709
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 715,
          "end": 716
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
              "start": 726,
              "end": 727
            },
            "typeArguments": null,
            "start": 726,
            "end": 727
          },
          "start": 720,
          "end": 727
        },
        "nameType": {
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
                "start": 731,
                "end": 732
              },
              "typeArguments": null,
              "start": 731,
              "end": 732
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 734
              },
              "typeArguments": null,
              "start": 733,
              "end": 734
            },
            "start": 731,
            "end": 735
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 752
            },
            "typeArguments": null,
            "start": 744,
            "end": 752
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 756
            },
            "typeArguments": null,
            "start": 755,
            "end": 756
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 759,
            "end": 764
          },
          "start": 731,
          "end": 764
        },
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
              "start": 769,
              "end": 770
            },
            "typeArguments": null,
            "start": 769,
            "end": 770
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 772
            },
            "typeArguments": null,
            "start": 771,
            "end": 772
          },
          "start": 769,
          "end": 773
        },
        "optional": "-",
        "readonly": null,
        "start": 712,
        "end": 775
      },
      "declare": false,
      "start": 688,
      "end": 776
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModifyExclOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 795
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
              "start": 796,
              "end": 797
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 796,
            "end": 797
          }
        ],
        "start": 795,
        "end": 798
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 804,
          "end": 805
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
              "start": 815,
              "end": 816
            },
            "typeArguments": null,
            "start": 815,
            "end": 816
          },
          "start": 809,
          "end": 816
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 821
            },
            "typeArguments": null,
            "start": 820,
            "end": 821
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 830,
            "end": 836
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "bool",
                  "cooked": "bool"
                },
                "tail": false,
                "start": 838,
                "end": 845
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 846,
                "end": 848
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 846
                },
                "typeArguments": null,
                "start": 845,
                "end": 846
              }
            ],
            "start": 838,
            "end": 848
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 850,
            "end": 855
          },
          "start": 820,
          "end": 855
        },
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
              "start": 861,
              "end": 862
            },
            "typeArguments": null,
            "start": 861,
            "end": 862
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 864
            },
            "typeArguments": null,
            "start": 863,
            "end": 864
          },
          "start": 861,
          "end": 865
        },
        "optional": "-",
        "readonly": null,
        "start": 801,
        "end": 867
      },
      "declare": false,
      "start": 777,
      "end": 868
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun2",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 883
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
              "start": 884,
              "end": 885
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 884,
            "end": 885
          }
        ],
        "start": 883,
        "end": 886
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
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
                "start": 892,
                "end": 893
              },
              "typeArguments": null,
              "start": 892,
              "end": 893
            },
            "start": 890,
            "end": 893
          },
          "start": 887,
          "end": 893
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterInclOpt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 908,
                        "end": 921
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
                              "start": 922,
                              "end": 923
                            },
                            "typeArguments": null,
                            "start": 922,
                            "end": 923
                          }
                        ],
                        "start": 921,
                        "end": 924
                      },
                      "start": 908,
                      "end": 924
                    },
                    "start": 906,
                    "end": 924
                  },
                  "start": 905,
                  "end": 924
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 930
                },
                "definite": false,
                "start": 905,
                "end": 930
              }
            ],
            "declare": false,
            "start": 901,
            "end": 931
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ModifyInclOpt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 949,
                        "end": 962
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
                              "start": 963,
                              "end": 964
                            },
                            "typeArguments": null,
                            "start": 963,
                            "end": 964
                          }
                        ],
                        "start": 962,
                        "end": 965
                      },
                      "start": 949,
                      "end": 965
                    },
                    "start": 947,
                    "end": 965
                  },
                  "start": 946,
                  "end": 965
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 971
                },
                "definite": false,
                "start": 946,
                "end": 971
              }
            ],
            "declare": false,
            "start": 942,
            "end": 972
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterExclOpt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 1003
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
                              "start": 1004,
                              "end": 1005
                            },
                            "typeArguments": null,
                            "start": 1004,
                            "end": 1005
                          }
                        ],
                        "start": 1003,
                        "end": 1006
                      },
                      "start": 990,
                      "end": 1006
                    },
                    "start": 988,
                    "end": 1006
                  },
                  "start": 987,
                  "end": 1006
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1009,
                  "end": 1012
                },
                "definite": false,
                "start": 987,
                "end": 1012
              }
            ],
            "declare": false,
            "start": 983,
            "end": 1013
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
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ModifyExclOpt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1034,
                        "end": 1047
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
                              "start": 1048,
                              "end": 1049
                            },
                            "typeArguments": null,
                            "start": 1048,
                            "end": 1049
                          }
                        ],
                        "start": 1047,
                        "end": 1050
                      },
                      "start": 1034,
                      "end": 1050
                    },
                    "start": 1032,
                    "end": 1050
                  },
                  "start": 1031,
                  "end": 1050
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1053,
                  "end": 1056
                },
                "definite": false,
                "start": 1031,
                "end": 1056
              }
            ],
            "declare": false,
            "start": 1027,
            "end": 1057
          }
        ],
        "start": 895,
        "end": 1068
      },
      "expression": false,
      "start": 870,
      "end": 1068
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 1070
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 31,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Methods",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 54,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 73,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 81,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 112,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 126,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Methods",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 202,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 224,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 243,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 251,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 266,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 328,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Modify",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 350,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 366,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 380,
    "end": 381
  },
  {
    "type": "Template",
    "value": "`bool${",
    "start": 382,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 389,
    "end": 390
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 407,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "Modify",
    "start": 478,
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
    "value": "T",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 507,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "FilterInclOpt",
    "start": 512,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 536,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 539,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 547,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 555,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 563,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 578,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "+",
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
    "value": "T",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 596,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "ModifyInclOpt",
    "start": 601,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 625,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 628,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 636,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 641,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 649,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 655,
    "end": 656
  },
  {
    "type": "Template",
    "value": "`bool${",
    "start": 657,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 664,
    "end": 665
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 665,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 669,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 688,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "FilterExclOpt",
    "start": 693,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 717,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 720,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 728,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 736,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 744,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 759,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 777,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "ModifyExclOpt",
    "start": 782,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 806,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 809,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 817,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 822,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 830,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 836,
    "end": 837
  },
  {
    "type": "Template",
    "value": "`bool${",
    "start": 838,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 845,
    "end": 846
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 846,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 850,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 870,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 879,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 901,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "FilterInclOpt",
    "start": 908,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 927,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 942,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "ModifyInclOpt",
    "start": 949,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "val",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 983,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "FilterExclOpt",
    "start": 990,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1027,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "ModifyExclOpt",
    "start": 1034,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1053,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1067,
    "end": 1068
  }
]
```

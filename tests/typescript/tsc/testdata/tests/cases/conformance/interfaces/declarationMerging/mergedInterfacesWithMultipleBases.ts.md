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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
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
              "start": 133,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
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
            "start": 133,
            "end": 143
          }
        ],
        "start": 127,
        "end": 145
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 145
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 155
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 165,
                "end": 171
              },
              "start": 163,
              "end": 171
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
            "start": 162,
            "end": 172
          }
        ],
        "start": 156,
        "end": 174
      },
      "abstract": false,
      "declare": false,
      "start": 147,
      "end": 174
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 187
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "typeArguments": null,
          "start": 196,
          "end": 197
        }
      ],
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 207,
                "end": 213
              },
              "start": 205,
              "end": 213
            },
            "accessibility": null,
            "static": false,
            "start": 204,
            "end": 214
          }
        ],
        "start": 198,
        "end": 216
      },
      "declare": false,
      "start": 176,
      "end": 216
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 229
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 240
          },
          "typeArguments": null,
          "start": 238,
          "end": 240
        }
      ],
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              },
              "start": 248,
              "end": 256
            },
            "accessibility": null,
            "static": false,
            "start": 247,
            "end": 257
          }
        ],
        "start": 241,
        "end": 259
      },
      "declare": false,
      "start": 218,
      "end": 259
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
        "start": 267,
        "end": 268
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 281
          },
          "typeArguments": null,
          "start": 280,
          "end": 281
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 291,
                "end": 297
              },
              "start": 289,
              "end": 297
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
            "start": 288,
            "end": 298
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 306,
                "end": 312
              },
              "start": 304,
              "end": 312
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
            "start": 303,
            "end": 313
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 319
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 321,
                "end": 327
              },
              "start": 319,
              "end": 327
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
            "start": 318,
            "end": 328
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 334
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 336,
                "end": 342
              },
              "start": 334,
              "end": 342
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
            "start": 333,
            "end": 343
          }
        ],
        "start": 282,
        "end": 345
      },
      "abstract": false,
      "declare": false,
      "start": 261,
      "end": 345
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
            "name": "a",
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
                  "start": 354,
                  "end": 355
                },
                "typeArguments": null,
                "start": 354,
                "end": 355
              },
              "start": 352,
              "end": 355
            },
            "start": 351,
            "end": 355
          },
          "init": null,
          "definite": false,
          "start": 351,
          "end": 355
        }
      ],
      "declare": false,
      "start": 347,
      "end": 356
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 362
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 366
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "optional": false,
            "computed": false,
            "start": 365,
            "end": 368
          },
          "definite": false,
          "start": 361,
          "end": 368
        }
      ],
      "declare": false,
      "start": 357,
      "end": 369
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 416
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 430
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
                    "start": 431,
                    "end": 432
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 431,
                  "end": 432
                }
              ],
              "start": 430,
              "end": 433
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 445
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
                        "start": 447,
                        "end": 448
                      },
                      "typeArguments": null,
                      "start": 447,
                      "end": 448
                    },
                    "start": 445,
                    "end": 448
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
                  "start": 444,
                  "end": 449
                }
              ],
              "start": 434,
              "end": 455
            },
            "abstract": false,
            "declare": false,
            "start": 423,
            "end": 455
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 469
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
                    "start": 470,
                    "end": 471
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 470,
                  "end": 471
                }
              ],
              "start": 469,
              "end": 472
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 484
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
                        "start": 486,
                        "end": 487
                      },
                      "typeArguments": null,
                      "start": 486,
                      "end": 487
                    },
                    "start": 484,
                    "end": 487
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
                  "start": 483,
                  "end": 488
                }
              ],
              "start": 473,
              "end": 494
            },
            "abstract": false,
            "declare": false,
            "start": 461,
            "end": 494
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 511
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
                    "start": 512,
                    "end": 513
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 512,
                  "end": 513
                }
              ],
              "start": 511,
              "end": 514
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 524
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
                        "start": 525,
                        "end": 526
                      },
                      "typeArguments": null,
                      "start": 525,
                      "end": 526
                    }
                  ],
                  "start": 524,
                  "end": 527
                },
                "start": 523,
                "end": 527
              }
            ],
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 538,
                    "end": 539
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
                        "start": 541,
                        "end": 542
                      },
                      "typeArguments": null,
                      "start": 541,
                      "end": 542
                    },
                    "start": 539,
                    "end": 542
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 538,
                  "end": 543
                }
              ],
              "start": 528,
              "end": 549
            },
            "declare": false,
            "start": 500,
            "end": 549
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 566
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
                }
              ],
              "start": 566,
              "end": 569
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 580
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 581,
                      "end": 587
                    }
                  ],
                  "start": 580,
                  "end": 588
                },
                "start": 578,
                "end": 588
              }
            ],
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 599,
                    "end": 600
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
                        "start": 602,
                        "end": 603
                      },
                      "typeArguments": null,
                      "start": 602,
                      "end": 603
                    },
                    "start": 600,
                    "end": 603
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 599,
                  "end": 604
                }
              ],
              "start": 589,
              "end": 610
            },
            "declare": false,
            "start": 555,
            "end": 610
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
              "start": 622,
              "end": 623
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 636
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 637,
                      "end": 644
                    }
                  ],
                  "start": 636,
                  "end": 645
                },
                "start": 635,
                "end": 645
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 656,
                    "end": 657
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 659,
                      "end": 666
                    },
                    "start": 657,
                    "end": 666
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
                  "start": 656,
                  "end": 667
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 677
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 679,
                      "end": 685
                    },
                    "start": 677,
                    "end": 685
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
                  "start": 676,
                  "end": 686
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 696
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 698,
                      "end": 705
                    },
                    "start": 696,
                    "end": 705
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
                  "start": 695,
                  "end": 706
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 716
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 718,
                      "end": 725
                    },
                    "start": 716,
                    "end": 725
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
                  "start": 715,
                  "end": 726
                }
              ],
              "start": 646,
              "end": 732
            },
            "abstract": false,
            "declare": false,
            "start": 616,
            "end": 732
          }
        ],
        "start": 417,
        "end": 734
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 405,
      "end": 734
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 119,
  "end": 734
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 176,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 188,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 218,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 230,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 261,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 269,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 405,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 447,
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
    "type": "Keyword",
    "value": "class",
    "start": 461,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 500,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 515,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 555,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "extends",
    "start": 570,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 616,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 624,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 637,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 659,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 698,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 733,
    "end": 734
  }
]
```

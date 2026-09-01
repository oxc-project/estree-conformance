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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 76
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              },
              "start": 82,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 91
          }
        ],
        "start": 77,
        "end": 93
      },
      "declare": false,
      "start": 62,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 111
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 124
          },
          "typeArguments": null,
          "start": 120,
          "end": 124
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 139
          }
        ],
        "start": 125,
        "end": 141
      },
      "declare": false,
      "start": 94,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 160
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "typeArguments": null,
          "start": 169,
          "end": 176
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 191
          }
        ],
        "start": 177,
        "end": 193
      },
      "declare": false,
      "start": 142,
      "end": 193
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
        "start": 201,
        "end": 202
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 213,
                    "end": 219
                  },
                  "start": 211,
                  "end": 219
                },
                "start": 210,
                "end": 219
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 226
                },
                "typeArguments": null,
                "start": 222,
                "end": 226
              },
              "start": 220,
              "end": 226
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 209,
            "end": 227
          }
        ],
        "start": 203,
        "end": 229
      },
      "abstract": false,
      "declare": false,
      "start": 195,
      "end": 229
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 238
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 248
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 259,
                    "end": 265
                  },
                  "start": 257,
                  "end": 265
                },
                "start": 256,
                "end": 265
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 275
                },
                "typeArguments": null,
                "start": 268,
                "end": 275
              },
              "start": 266,
              "end": 275
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 255,
            "end": 276
          }
        ],
        "start": 249,
        "end": 284
      },
      "abstract": false,
      "declare": false,
      "start": 231,
      "end": 284
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 294
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 304
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 315,
                    "end": 321
                  },
                  "start": 313,
                  "end": 321
                },
                "start": 312,
                "end": 321
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 332
                },
                "typeArguments": null,
                "start": 324,
                "end": 332
              },
              "start": 322,
              "end": 332
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 311,
            "end": 333
          }
        ],
        "start": 305,
        "end": 341
      },
      "abstract": false,
      "declare": false,
      "start": 286,
      "end": 341
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 361
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
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
                    "start": 376,
                    "end": 377
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 390
                    },
                    "typeArguments": null,
                    "start": 386,
                    "end": 390
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 376,
                  "end": 390
                }
              ],
              "start": 375,
              "end": 391
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 406,
                          "end": 412
                        },
                        "start": 404,
                        "end": 412
                      },
                      "start": 403,
                      "end": 412
                    }
                  ],
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
                        "start": 415,
                        "end": 416
                      },
                      "typeArguments": null,
                      "start": 415,
                      "end": 416
                    },
                    "start": 413,
                    "end": 416
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 402,
                  "end": 417
                }
              ],
              "start": 392,
              "end": 423
            },
            "abstract": false,
            "declare": false,
            "start": 368,
            "end": 423
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 451
                  },
                  "typeArguments": null,
                  "start": 447,
                  "end": 451
                }
              ],
              "start": 446,
              "end": 452
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 467,
                          "end": 473
                        },
                        "start": 465,
                        "end": 473
                      },
                      "start": 464,
                      "end": 473
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 483
                      },
                      "typeArguments": null,
                      "start": 476,
                      "end": 483
                    },
                    "start": 474,
                    "end": 483
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 463,
                  "end": 484
                }
              ],
              "start": 453,
              "end": 496
            },
            "abstract": false,
            "declare": false,
            "start": 429,
            "end": 496
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 510
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 521,
                    "end": 525
                  },
                  "typeArguments": null,
                  "start": 521,
                  "end": 525
                }
              ],
              "start": 520,
              "end": 526
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 541,
                          "end": 547
                        },
                        "start": 539,
                        "end": 547
                      },
                      "start": 538,
                      "end": 547
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 550,
                        "end": 558
                      },
                      "typeArguments": null,
                      "start": 550,
                      "end": 558
                    },
                    "start": 548,
                    "end": 558
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 537,
                  "end": 559
                }
              ],
              "start": 527,
              "end": 571
            },
            "abstract": false,
            "declare": false,
            "start": 502,
            "end": 571
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 585
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
                    "start": 586,
                    "end": 587
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 600
                    },
                    "typeArguments": null,
                    "start": 596,
                    "end": 600
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 586,
                  "end": 600
                }
              ],
              "start": 585,
              "end": 601
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 611
            },
            "superTypeArguments": {
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
                    "start": 612,
                    "end": 613
                  },
                  "typeArguments": null,
                  "start": 612,
                  "end": 613
                }
              ],
              "start": 611,
              "end": 614
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 629,
                          "end": 635
                        },
                        "start": 627,
                        "end": 635
                      },
                      "start": 626,
                      "end": 635
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 638,
                        "end": 645
                      },
                      "typeArguments": null,
                      "start": 638,
                      "end": 645
                    },
                    "start": 636,
                    "end": 645
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 625,
                  "end": 646
                }
              ],
              "start": 615,
              "end": 661
            },
            "abstract": false,
            "declare": false,
            "start": 577,
            "end": 661
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B4",
              "optional": false,
              "typeAnnotation": null,
              "start": 673,
              "end": 675
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
                    "start": 676,
                    "end": 677
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 686,
                      "end": 690
                    },
                    "typeArguments": null,
                    "start": 686,
                    "end": 690
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 676,
                  "end": 690
                }
              ],
              "start": 675,
              "end": 691
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 700,
              "end": 701
            },
            "superTypeArguments": {
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
                    "start": 702,
                    "end": 703
                  },
                  "typeArguments": null,
                  "start": 702,
                  "end": 703
                }
              ],
              "start": 701,
              "end": 704
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 719,
                          "end": 725
                        },
                        "start": 717,
                        "end": 725
                      },
                      "start": 716,
                      "end": 725
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 728,
                        "end": 736
                      },
                      "typeArguments": null,
                      "start": 728,
                      "end": 736
                    },
                    "start": 726,
                    "end": 736
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 715,
                  "end": 737
                }
              ],
              "start": 705,
              "end": 752
            },
            "abstract": false,
            "declare": false,
            "start": 667,
            "end": 752
          }
        ],
        "start": 362,
        "end": 754
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 343,
      "end": 754
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 754
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 94,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 104,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 112,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 142,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 152,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 169,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 237,
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
    "value": "A",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 268,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 292,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 295,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 324,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 343,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Generics",
    "start": 353,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 368,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 378,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 406,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 429,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 437,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 447,
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
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
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
    "value": "string",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 476,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 502,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 508,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 511,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 550,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 577,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 588,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 602,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 629,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 638,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 667,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 678,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 692,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 719,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 728,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  }
]
```

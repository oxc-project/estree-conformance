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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private",
            "start": 16,
            "end": 35
          }
        ],
        "start": 10,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 62
          },
          "typeArguments": null,
          "start": 59,
          "end": 62
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
              "start": 69,
              "end": 70
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 72,
                "end": 78
              },
              "start": 70,
              "end": 78
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 79
          }
        ],
        "start": 63,
        "end": 81
      },
      "declare": false,
      "start": 39,
      "end": 81
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 92
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 104
      },
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
            "start": 116,
            "end": 117
          },
          "typeArguments": null,
          "start": 116,
          "end": 117
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 134,
                "end": 140
              },
              "start": 132,
              "end": 140
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
            "start": 130,
            "end": 141
          }
        ],
        "start": 118,
        "end": 143
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 143
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 155
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 167
      },
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
            "start": 179,
            "end": 180
          },
          "typeArguments": null,
          "start": 179,
          "end": 180
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              },
              "start": 198,
              "end": 206
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
            "start": 196,
            "end": 207
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
              "start": 212,
              "end": 213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 216,
                "end": 222
              },
              "start": 214,
              "end": 222
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
            "start": 212,
            "end": 223
          }
        ],
        "start": 181,
        "end": 225
      },
      "abstract": false,
      "declare": false,
      "start": 145,
      "end": 225
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar3",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 237
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 249
      },
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
            "start": 261,
            "end": 262
          },
          "typeArguments": null,
          "start": 261,
          "end": 262
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              },
              "start": 288,
              "end": 296
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private",
            "start": 278,
            "end": 297
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
              "start": 302,
              "end": 303
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
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 302,
            "end": 313
          }
        ],
        "start": 263,
        "end": 315
      },
      "abstract": false,
      "declare": false,
      "start": 227,
      "end": 315
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 360
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 376
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 396
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 399,
                      "end": 405
                    },
                    "start": 397,
                    "end": 405
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 387,
                  "end": 406
                }
              ],
              "start": 377,
              "end": 412
            },
            "abstract": false,
            "declare": false,
            "start": 367,
            "end": 412
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 427
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 439
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 451
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 454,
                      "end": 460
                    },
                    "start": 452,
                    "end": 460
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
                  "start": 450,
                  "end": 461
                }
              ],
              "start": 440,
              "end": 467
            },
            "abstract": false,
            "declare": false,
            "start": 418,
            "end": 467
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 484
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 496
                },
                "typeArguments": null,
                "start": 493,
                "end": 496
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
                    "start": 507,
                    "end": 508
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 510,
                      "end": 516
                    },
                    "start": 508,
                    "end": 516
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 507,
                  "end": 517
                }
              ],
              "start": 497,
              "end": 523
            },
            "declare": false,
            "start": 473,
            "end": 523
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 538
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 550
            },
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
                  "start": 562,
                  "end": 563
                },
                "typeArguments": null,
                "start": 562,
                "end": 563
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 580,
                    "end": 581
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 584,
                      "end": 590
                    },
                    "start": 582,
                    "end": 590
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
                  "start": 580,
                  "end": 591
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
                    "start": 600,
                    "end": 601
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 604,
                      "end": 610
                    },
                    "start": 602,
                    "end": 610
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
                  "start": 600,
                  "end": 611
                }
              ],
              "start": 564,
              "end": 617
            },
            "abstract": false,
            "declare": false,
            "start": 529,
            "end": 617
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 633
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 645
            },
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
                  "start": 657,
                  "end": 658
                },
                "typeArguments": null,
                "start": 657,
                "end": 658
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 682,
                      "end": 688
                    },
                    "start": 680,
                    "end": 688
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
                  "start": 678,
                  "end": 689
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
                    "start": 698,
                    "end": 699
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 702,
                      "end": 708
                    },
                    "start": 700,
                    "end": 708
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
                  "start": 698,
                  "end": 709
                }
              ],
              "start": 659,
              "end": 715
            },
            "abstract": false,
            "declare": false,
            "start": 623,
            "end": 715
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar3",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 731
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 743
            },
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
                  "start": 755,
                  "end": 756
                },
                "typeArguments": null,
                "start": 755,
                "end": 756
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 785
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 788,
                      "end": 794
                    },
                    "start": 786,
                    "end": 794
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 776,
                  "end": 795
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
                    "start": 804,
                    "end": 805
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 808,
                      "end": 814
                    },
                    "start": 806,
                    "end": 814
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
                  "start": 804,
                  "end": 815
                }
              ],
              "start": 757,
              "end": 821
            },
            "abstract": false,
            "declare": false,
            "start": 721,
            "end": 821
          }
        ],
        "start": 361,
        "end": 823
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 349,
      "end": 823
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 861,
        "end": 863
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 879
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 899
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 902,
                      "end": 908
                    },
                    "start": 900,
                    "end": 908
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 890,
                  "end": 909
                }
              ],
              "start": 880,
              "end": 915
            },
            "abstract": false,
            "declare": false,
            "start": 870,
            "end": 915
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 930
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 939,
              "end": 942
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 961,
                    "end": 962
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 965,
                      "end": 971
                    },
                    "start": 963,
                    "end": 971
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 953,
                  "end": 972
                }
              ],
              "start": 943,
              "end": 978
            },
            "abstract": false,
            "declare": false,
            "start": 921,
            "end": 978
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 995
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1004,
                  "end": 1007
                },
                "typeArguments": null,
                "start": 1004,
                "end": 1007
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
                    "start": 1018,
                    "end": 1019
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1021,
                      "end": 1027
                    },
                    "start": 1019,
                    "end": 1027
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1018,
                  "end": 1028
                }
              ],
              "start": 1008,
              "end": 1034
            },
            "declare": false,
            "start": 984,
            "end": 1034
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1046,
              "end": 1049
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1061
            },
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
                  "start": 1073,
                  "end": 1074
                },
                "typeArguments": null,
                "start": 1073,
                "end": 1074
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1094,
                    "end": 1095
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1098,
                      "end": 1104
                    },
                    "start": 1096,
                    "end": 1104
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
                  "start": 1094,
                  "end": 1105
                }
              ],
              "start": 1075,
              "end": 1111
            },
            "abstract": false,
            "declare": false,
            "start": 1040,
            "end": 1111
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1132,
                        "end": 1135
                      },
                      "typeArguments": null,
                      "start": 1132,
                      "end": 1135
                    },
                    "start": 1130,
                    "end": 1135
                  },
                  "start": 1129,
                  "end": 1135
                },
                "init": null,
                "definite": false,
                "start": 1129,
                "end": 1135
              }
            ],
            "declare": true,
            "start": 1117,
            "end": 1136
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1145,
                  "end": 1147
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1152,
                    "end": 1153
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1150,
                  "end": 1153
                },
                "definite": false,
                "start": 1145,
                "end": 1153
              }
            ],
            "declare": false,
            "start": 1141,
            "end": 1154
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1163,
                  "end": 1165
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1168,
                    "end": 1169
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1171
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1168,
                  "end": 1171
                },
                "definite": false,
                "start": 1163,
                "end": 1171
              }
            ],
            "declare": false,
            "start": 1159,
            "end": 1172
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1190,
                  "end": 1192
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1195,
                    "end": 1196
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1197,
                    "end": 1198
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1195,
                  "end": 1198
                },
                "definite": false,
                "start": 1190,
                "end": 1198
              }
            ],
            "declare": false,
            "start": 1186,
            "end": 1199
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1224
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1236
            },
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
                  "start": 1248,
                  "end": 1249
                },
                "typeArguments": null,
                "start": 1248,
                "end": 1249
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1269,
                    "end": 1270
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1273,
                      "end": 1279
                    },
                    "start": 1271,
                    "end": 1279
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
                  "start": 1269,
                  "end": 1280
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
                    "start": 1289,
                    "end": 1290
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1293,
                      "end": 1299
                    },
                    "start": 1291,
                    "end": 1299
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
                  "start": 1289,
                  "end": 1300
                }
              ],
              "start": 1250,
              "end": 1306
            },
            "abstract": false,
            "declare": false,
            "start": 1214,
            "end": 1306
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1322
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1331,
              "end": 1334
            },
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
                  "start": 1346,
                  "end": 1347
                },
                "typeArguments": null,
                "start": 1346,
                "end": 1347
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1375,
                    "end": 1376
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1379,
                      "end": 1385
                    },
                    "start": 1377,
                    "end": 1385
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1367,
                  "end": 1386
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
                    "start": 1395,
                    "end": 1396
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1399,
                      "end": 1405
                    },
                    "start": 1397,
                    "end": 1405
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
                  "start": 1395,
                  "end": 1406
                }
              ],
              "start": 1348,
              "end": 1412
            },
            "abstract": false,
            "declare": false,
            "start": 1312,
            "end": 1412
          }
        ],
        "start": 864,
        "end": 1414
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 851,
      "end": 1414
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1414
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 16,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 25,
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
    "value": "string",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 51,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 89,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 93,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 101,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 105,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 145,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 151,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 156,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 164,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 168,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
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
    "value": "y",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Bar3",
    "start": 233,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 238,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 246,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 250,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 278,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 349,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 367,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 387,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 399,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 424,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 428,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 473,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 485,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 493,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 529,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 535,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 539,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 547,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 551,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 604,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 623,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 629,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 634,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 642,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 646,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 721,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "Bar3",
    "start": 727,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 732,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 740,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 744,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 776,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 851,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 870,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 876,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 890,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 902,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 921,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 927,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 931,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 939,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 953,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 965,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 984,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 996,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1040,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1050,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1062,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1098,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1117,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1145,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1163,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1186,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1190,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 1220,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1225,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1237,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1312,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "Bar3",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1323,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1331,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1335,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1367,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1379,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1399,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414
  }
]
```

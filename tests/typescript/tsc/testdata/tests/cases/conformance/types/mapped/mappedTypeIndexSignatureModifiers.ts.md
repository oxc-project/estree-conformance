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
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  },
                  "start": 91,
                  "end": 99
                },
                "start": 88,
                "end": 99
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 78,
            "end": 109
          }
        ],
        "start": 72,
        "end": 111
      },
      "declare": false,
      "start": 57,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 121
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 128
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 133
              },
              "typeArguments": null,
              "start": 129,
              "end": 133
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 145
                },
                "typeArguments": null,
                "start": 141,
                "end": 145
              },
              "start": 135,
              "end": 145
            }
          ],
          "start": 128,
          "end": 146
        },
        "start": 124,
        "end": 146
      },
      "declare": false,
      "start": 112,
      "end": 146
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
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
              "name": "concreteProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 181
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 183,
                  "end": 190
                },
                "start": 183,
                "end": 190
              },
              "start": 181,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 191
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 211,
                    "end": 217
                  },
                  "start": 209,
                  "end": 217
                },
                "start": 206,
                "end": 217
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 220,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 196,
            "end": 227
          }
        ],
        "start": 163,
        "end": 229
      },
      "declare": false,
      "start": 148,
      "end": 229
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 239
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 242,
          "end": 246
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 251
              },
              "typeArguments": null,
              "start": 247,
              "end": 251
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 263
                },
                "typeArguments": null,
                "start": 259,
                "end": 263
              },
              "start": 253,
              "end": 263
            }
          ],
          "start": 246,
          "end": 264
        },
        "start": 242,
        "end": 264
      },
      "declare": false,
      "start": 230,
      "end": 264
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 280
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 302,
                    "end": 308
                  },
                  "start": 300,
                  "end": 308
                },
                "start": 297,
                "end": 308
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              },
              "start": 309,
              "end": 317
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 287,
            "end": 318
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 338,
                    "end": 344
                  },
                  "start": 336,
                  "end": 344
                },
                "start": 333,
                "end": 344
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 347,
                  "end": 352
                },
                "start": 347,
                "end": 352
              },
              "start": 345,
              "end": 352
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 323,
            "end": 353
          }
        ],
        "start": 281,
        "end": 355
      },
      "declare": false,
      "start": 266,
      "end": 355
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 365
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 368,
          "end": 372
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj3",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 377
              },
              "typeArguments": null,
              "start": 373,
              "end": 377
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 389
                },
                "typeArguments": null,
                "start": 385,
                "end": 389
              },
              "start": 379,
              "end": 389
            }
          ],
          "start": 372,
          "end": 390
        },
        "start": 368,
        "end": 390
      },
      "declare": false,
      "start": 356,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj4",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 406
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 419,
                    "end": 425
                  },
                  "start": 417,
                  "end": 425
                },
                "start": 414,
                "end": 425
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 428,
                "end": 434
              },
              "start": 426,
              "end": 434
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 413,
            "end": 435
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 455,
                    "end": 461
                  },
                  "start": 453,
                  "end": 461
                },
                "start": 450,
                "end": 461
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 464,
                  "end": 469
                },
                "start": 464,
                "end": 469
              },
              "start": 462,
              "end": 469
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 440,
            "end": 470
          }
        ],
        "start": 407,
        "end": 472
      },
      "declare": false,
      "start": 392,
      "end": 472
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res4",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 482
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 485,
          "end": 489
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj4",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 494
              },
              "typeArguments": null,
              "start": 490,
              "end": 494
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 506
                },
                "typeArguments": null,
                "start": 502,
                "end": 506
              },
              "start": 496,
              "end": 506
            }
          ],
          "start": 489,
          "end": 507
        },
        "start": 485,
        "end": 507
      },
      "declare": false,
      "start": 473,
      "end": 507
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj5",
        "optional": false,
        "typeAnnotation": null,
        "start": 519,
        "end": 523
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 545,
                    "end": 551
                  },
                  "start": 543,
                  "end": 551
                },
                "start": 540,
                "end": 551
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 554,
                "end": 560
              },
              "start": 552,
              "end": 560
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 530,
            "end": 561
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 572,
                    "end": 578
                  },
                  "start": 570,
                  "end": 578
                },
                "start": 567,
                "end": 578
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 581,
                  "end": 586
                },
                "start": 581,
                "end": 586
              },
              "start": 579,
              "end": 586
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 566,
            "end": 587
          }
        ],
        "start": 524,
        "end": 589
      },
      "declare": false,
      "start": 509,
      "end": 589
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res5",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 599
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 606
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 611
              },
              "typeArguments": null,
              "start": 607,
              "end": 611
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 623
                },
                "typeArguments": null,
                "start": 619,
                "end": 623
              },
              "start": 613,
              "end": 623
            }
          ],
          "start": 606,
          "end": 624
        },
        "start": 602,
        "end": 624
      },
      "declare": false,
      "start": 590,
      "end": 624
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 639
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
              "start": 640,
              "end": 641
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 640,
            "end": 641
          }
        ],
        "start": 639,
        "end": 642
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 648,
          "end": 649
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
              "start": 659,
              "end": 660
            },
            "typeArguments": null,
            "start": 659,
            "end": 660
          },
          "start": 653,
          "end": 660
        },
        "nameType": null,
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
              "start": 663,
              "end": 664
            },
            "typeArguments": null,
            "start": 663,
            "end": 664
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 666
            },
            "typeArguments": null,
            "start": 665,
            "end": 666
          },
          "start": 663,
          "end": 667
        },
        "optional": false,
        "readonly": null,
        "start": 645,
        "end": 670
      },
      "declare": false,
      "start": 626,
      "end": 670
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj6",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 686
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false,
                        "start": 708,
                        "end": 714
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 720,
                        "end": 722
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 714,
                        "end": 720
                      }
                    ],
                    "start": 708,
                    "end": 722
                  },
                  "start": 706,
                  "end": 722
                },
                "start": 703,
                "end": 722
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 725,
                  "end": 730
                },
                "start": 725,
                "end": 730
              },
              "start": 723,
              "end": 730
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 693,
            "end": 731
          }
        ],
        "start": 687,
        "end": 733
      },
      "declare": false,
      "start": 672,
      "end": 733
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res6",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 743
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 754
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 759
              },
              "typeArguments": null,
              "start": 755,
              "end": 759
            }
          ],
          "start": 754,
          "end": 760
        },
        "start": 746,
        "end": 760
      },
      "declare": false,
      "start": 734,
      "end": 760
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj7",
        "optional": false,
        "typeAnnotation": null,
        "start": 772,
        "end": 776
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 789,
                    "end": 795
                  },
                  "start": 787,
                  "end": 795
                },
                "start": 784,
                "end": 795
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 798,
                "end": 804
              },
              "start": 796,
              "end": 804
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 783,
            "end": 805
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false,
                        "start": 825,
                        "end": 831
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 837,
                        "end": 839
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 831,
                        "end": 837
                      }
                    ],
                    "start": 825,
                    "end": 839
                  },
                  "start": 823,
                  "end": 839
                },
                "start": 820,
                "end": 839
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 842,
                  "end": 847
                },
                "start": 842,
                "end": 847
              },
              "start": 840,
              "end": 847
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 810,
            "end": 848
          }
        ],
        "start": 777,
        "end": 850
      },
      "declare": false,
      "start": 762,
      "end": 850
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res7",
        "optional": false,
        "typeAnnotation": null,
        "start": 856,
        "end": 860
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 871
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj7",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 876
              },
              "typeArguments": null,
              "start": 872,
              "end": 876
            }
          ],
          "start": 871,
          "end": 877
        },
        "start": 863,
        "end": 877
      },
      "declare": false,
      "start": 851,
      "end": 877
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj8",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 893
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 915,
                    "end": 921
                  },
                  "start": 913,
                  "end": 921
                },
                "start": 910,
                "end": 921
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 924,
                "end": 930
              },
              "start": 922,
              "end": 930
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 900,
            "end": 931
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false,
                        "start": 942,
                        "end": 948
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 954,
                        "end": 956
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      }
                    ],
                    "start": 942,
                    "end": 956
                  },
                  "start": 940,
                  "end": 956
                },
                "start": 937,
                "end": 956
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 959,
                  "end": 964
                },
                "start": 959,
                "end": 964
              },
              "start": 957,
              "end": 964
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 936,
            "end": 965
          }
        ],
        "start": 894,
        "end": 967
      },
      "declare": false,
      "start": 879,
      "end": 967
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res8",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 977
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 980,
          "end": 988
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj8",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 993
              },
              "typeArguments": null,
              "start": 989,
              "end": 993
            }
          ],
          "start": 988,
          "end": 994
        },
        "start": 980,
        "end": 994
      },
      "declare": false,
      "start": 968,
      "end": 994
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrippingPick",
        "optional": false,
        "typeAnnotation": null,
        "start": 1001,
        "end": 1014
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
              "start": 1015,
              "end": 1016
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1015,
            "end": 1016
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
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
                  "start": 1034,
                  "end": 1035
                },
                "typeArguments": null,
                "start": 1034,
                "end": 1035
              },
              "start": 1028,
              "end": 1035
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1018,
            "end": 1035
          }
        ],
        "start": 1014,
        "end": 1036
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1052,
          "end": 1053
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1057,
            "end": 1058
          },
          "typeArguments": null,
          "start": 1057,
          "end": 1058
        },
        "nameType": null,
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
              "start": 1061,
              "end": 1062
            },
            "typeArguments": null,
            "start": 1061,
            "end": 1062
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1064
            },
            "typeArguments": null,
            "start": 1063,
            "end": 1064
          },
          "start": 1061,
          "end": 1065
        },
        "optional": false,
        "readonly": "-",
        "start": 1039,
        "end": 1068
      },
      "declare": false,
      "start": 996,
      "end": 1068
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1080,
        "end": 1084
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1106,
                    "end": 1112
                  },
                  "start": 1104,
                  "end": 1112
                },
                "start": 1101,
                "end": 1112
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1115,
                "end": 1121
              },
              "start": 1113,
              "end": 1121
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1091,
            "end": 1122
          }
        ],
        "start": 1085,
        "end": 1124
      },
      "declare": false,
      "start": 1070,
      "end": 1124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1134
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1137,
          "end": 1150
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1155
              },
              "typeArguments": null,
              "start": 1151,
              "end": 1155
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1163,
                  "end": 1167
                },
                "typeArguments": null,
                "start": 1163,
                "end": 1167
              },
              "start": 1157,
              "end": 1167
            }
          ],
          "start": 1150,
          "end": 1168
        },
        "start": 1137,
        "end": 1168
      },
      "declare": false,
      "start": 1125,
      "end": 1168
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1185
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1207,
                    "end": 1213
                  },
                  "start": 1205,
                  "end": 1213
                },
                "start": 1202,
                "end": 1213
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1216,
                "end": 1222
              },
              "start": 1214,
              "end": 1222
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1192,
            "end": 1223
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1243,
                    "end": 1249
                  },
                  "start": 1241,
                  "end": 1249
                },
                "start": 1238,
                "end": 1249
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1252,
                  "end": 1257
                },
                "start": 1252,
                "end": 1257
              },
              "start": 1250,
              "end": 1257
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1228,
            "end": 1258
          }
        ],
        "start": 1186,
        "end": 1260
      },
      "declare": false,
      "start": 1170,
      "end": 1260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1266,
        "end": 1271
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1274,
          "end": 1287
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1293
              },
              "typeArguments": null,
              "start": 1288,
              "end": 1293
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1306
                },
                "typeArguments": null,
                "start": 1301,
                "end": 1306
              },
              "start": 1295,
              "end": 1306
            }
          ],
          "start": 1287,
          "end": 1307
        },
        "start": 1274,
        "end": 1307
      },
      "declare": false,
      "start": 1261,
      "end": 1307
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1319,
        "end": 1324
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1337,
                    "end": 1343
                  },
                  "start": 1335,
                  "end": 1343
                },
                "start": 1332,
                "end": 1343
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1346,
                "end": 1352
              },
              "start": 1344,
              "end": 1352
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1331,
            "end": 1353
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1373,
                    "end": 1379
                  },
                  "start": 1371,
                  "end": 1379
                },
                "start": 1368,
                "end": 1379
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1382,
                  "end": 1387
                },
                "start": 1382,
                "end": 1387
              },
              "start": 1380,
              "end": 1387
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1358,
            "end": 1388
          }
        ],
        "start": 1325,
        "end": 1390
      },
      "declare": false,
      "start": 1309,
      "end": 1390
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1401
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1404,
          "end": 1417
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj11",
                "optional": false,
                "typeAnnotation": null,
                "start": 1418,
                "end": 1423
              },
              "typeArguments": null,
              "start": 1418,
              "end": 1423
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1431,
                  "end": 1436
                },
                "typeArguments": null,
                "start": 1431,
                "end": 1436
              },
              "start": 1425,
              "end": 1436
            }
          ],
          "start": 1417,
          "end": 1437
        },
        "start": 1404,
        "end": 1437
      },
      "declare": false,
      "start": 1391,
      "end": 1437
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1454
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1476,
                    "end": 1482
                  },
                  "start": 1474,
                  "end": 1482
                },
                "start": 1471,
                "end": 1482
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1485,
                "end": 1491
              },
              "start": 1483,
              "end": 1491
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1461,
            "end": 1492
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1503,
                    "end": 1509
                  },
                  "start": 1501,
                  "end": 1509
                },
                "start": 1498,
                "end": 1509
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1512,
                  "end": 1517
                },
                "start": 1512,
                "end": 1517
              },
              "start": 1510,
              "end": 1517
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1497,
            "end": 1518
          }
        ],
        "start": 1455,
        "end": 1520
      },
      "declare": false,
      "start": 1439,
      "end": 1520
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1531
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1534,
          "end": 1547
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj12",
                "optional": false,
                "typeAnnotation": null,
                "start": 1548,
                "end": 1553
              },
              "typeArguments": null,
              "start": 1548,
              "end": 1553
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1566
                },
                "typeArguments": null,
                "start": 1561,
                "end": 1566
              },
              "start": 1555,
              "end": 1566
            }
          ],
          "start": 1547,
          "end": 1567
        },
        "start": 1534,
        "end": 1567
      },
      "declare": false,
      "start": 1521,
      "end": 1567
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrippingIdentity",
        "optional": false,
        "typeAnnotation": null,
        "start": 1574,
        "end": 1591
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
              "start": 1592,
              "end": 1593
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1592,
            "end": 1593
          }
        ],
        "start": 1591,
        "end": 1594
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1610,
          "end": 1611
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
              "start": 1621,
              "end": 1622
            },
            "typeArguments": null,
            "start": 1621,
            "end": 1622
          },
          "start": 1615,
          "end": 1622
        },
        "nameType": null,
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
              "start": 1625,
              "end": 1626
            },
            "typeArguments": null,
            "start": 1625,
            "end": 1626
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1627,
              "end": 1628
            },
            "typeArguments": null,
            "start": 1627,
            "end": 1628
          },
          "start": 1625,
          "end": 1629
        },
        "optional": false,
        "readonly": "-",
        "start": 1597,
        "end": 1632
      },
      "declare": false,
      "start": 1569,
      "end": 1632
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1644,
        "end": 1649
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false,
                        "start": 1671,
                        "end": 1677
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1683,
                        "end": 1685
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1677,
                        "end": 1683
                      }
                    ],
                    "start": 1671,
                    "end": 1685
                  },
                  "start": 1669,
                  "end": 1685
                },
                "start": 1666,
                "end": 1685
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1688,
                  "end": 1693
                },
                "start": 1688,
                "end": 1693
              },
              "start": 1686,
              "end": 1693
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1656,
            "end": 1694
          }
        ],
        "start": 1650,
        "end": 1696
      },
      "declare": false,
      "start": 1634,
      "end": 1696
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1702,
        "end": 1707
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingIdentity",
          "optional": false,
          "typeAnnotation": null,
          "start": 1710,
          "end": 1727
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj13",
                "optional": false,
                "typeAnnotation": null,
                "start": 1728,
                "end": 1733
              },
              "typeArguments": null,
              "start": 1728,
              "end": 1733
            }
          ],
          "start": 1727,
          "end": 1734
        },
        "start": 1710,
        "end": 1734
      },
      "declare": false,
      "start": 1697,
      "end": 1734
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1734
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Obj1",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "Res1",
    "start": 117,
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
    "value": "Pick",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Obj1",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 135,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Obj1",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 148,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "concreteProp",
    "start": 169,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 220,
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
    "type": "Identifier",
    "value": "type",
    "start": 230,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Res2",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 253,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 266,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "Obj3",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 287,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 323,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 338,
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
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 347,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 356,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "Res3",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Obj3",
    "start": 373,
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
    "value": "keyof",
    "start": 379,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "Obj3",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 392,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Obj4",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
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
    "value": "string",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 440,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 464,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 473,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "Res4",
    "start": 478,
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
    "value": "Pick",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "Obj4",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 496,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Obj4",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 509,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "Obj5",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 530,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 540,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 545,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 590,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Res5",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Obj5",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 613,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "Obj5",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 626,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 631,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 650,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 653,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
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
    "type": "Identifier",
    "value": "T",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 672,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "Obj6",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 693,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Template",
    "value": "`wow${",
    "start": 708,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 714,
    "end": 720
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 725,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 734,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "Res6",
    "start": 739,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 746,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "Obj6",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 762,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "Obj7",
    "start": 772,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 784,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 810,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 820,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Template",
    "value": "`wow${",
    "start": 825,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 831,
    "end": 837
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 842,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 851,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "Res7",
    "start": 856,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 863,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "Obj7",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 879,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "Obj8",
    "start": 889,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 900,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 910,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 937,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Template",
    "value": "`wow${",
    "start": 942,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 948,
    "end": 954
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 968,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "Res8",
    "start": 973,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 980,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "Obj8",
    "start": 989,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 996,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "StrippingPick",
    "start": 1001,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1020,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1028,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1042,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1070,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "Obj9",
    "start": 1080,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1091,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1106,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1125,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "Res9",
    "start": 1130,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "StrippingPick",
    "start": 1137,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "Obj9",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "Obj9",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1170,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "Obj10",
    "start": 1180,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1192,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1207,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1216,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1228,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1238,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1243,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1252,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "Res10",
    "start": 1266,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "StrippingPick",
    "start": 1274,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "Obj10",
    "start": 1288,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1295,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "Obj10",
    "start": 1301,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1309,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "Obj11",
    "start": 1319,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1337,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1346,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1358,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1382,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1391,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "Res11",
    "start": 1396,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "StrippingPick",
    "start": 1404,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "Obj11",
    "start": 1418,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1425,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "Obj11",
    "start": 1431,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1439,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "Obj12",
    "start": 1449,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1461,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1471,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1476,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "string",
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
    "type": "Punctuator",
    "value": "[",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1498,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1503,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1512,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1521,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "Res12",
    "start": 1526,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "StrippingPick",
    "start": 1534,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "Obj12",
    "start": 1548,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1555,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "Obj12",
    "start": 1561,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1569,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "StrippingIdentity",
    "start": 1574,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1600,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1612,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1615,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1634,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "Obj13",
    "start": 1644,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1656,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1666,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Template",
    "value": "`wow${",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1677,
    "end": 1683
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1683,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1688,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1697,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "Res13",
    "start": 1702,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "StrippingIdentity",
    "start": 1710,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "Obj13",
    "start": 1728,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1733,
    "end": 1734
  }
]
```

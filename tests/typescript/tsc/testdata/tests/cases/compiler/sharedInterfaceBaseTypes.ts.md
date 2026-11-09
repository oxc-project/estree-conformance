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
        "name": "I0",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 235
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
              "name": "i0",
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
            "start": 238,
            "end": 248
          }
        ],
        "start": 236,
        "end": 250
      },
      "declare": false,
      "start": 223,
      "end": 250
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 263
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I0",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 274
          },
          "typeArguments": null,
          "start": 272,
          "end": 274
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
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 279
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 281,
                "end": 287
              },
              "start": 279,
              "end": 287
            },
            "accessibility": null,
            "static": false,
            "start": 277,
            "end": 287
          }
        ],
        "start": 275,
        "end": 289
      },
      "declare": false,
      "start": 251,
      "end": 289
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 300,
        "end": 302
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I0",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 313
          },
          "typeArguments": null,
          "start": 311,
          "end": 313
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
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 318
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 320,
                "end": 326
              },
              "start": 318,
              "end": 326
            },
            "accessibility": null,
            "static": false,
            "start": 316,
            "end": 326
          }
        ],
        "start": 314,
        "end": 328
      },
      "declare": false,
      "start": 290,
      "end": 328
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 341
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A1",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 352
          },
          "typeArguments": null,
          "start": 350,
          "end": 352
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B1",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 356
          },
          "typeArguments": null,
          "start": 354,
          "end": 356
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 357,
        "end": 359
      },
      "declare": false,
      "start": 329,
      "end": 359
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 372
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 383
          },
          "typeArguments": null,
          "start": 381,
          "end": 383
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
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
            },
            "accessibility": null,
            "static": false,
            "start": 386,
            "end": 396
          }
        ],
        "start": 384,
        "end": 398
      },
      "declare": false,
      "start": 360,
      "end": 398
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 411
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 422
          },
          "typeArguments": null,
          "start": 420,
          "end": 422
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
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 427
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 429,
                "end": 435
              },
              "start": 427,
              "end": 435
            },
            "accessibility": null,
            "static": false,
            "start": 425,
            "end": 435
          }
        ],
        "start": 423,
        "end": 437
      },
      "declare": false,
      "start": 399,
      "end": 437
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 450
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 461
          },
          "typeArguments": null,
          "start": 459,
          "end": 461
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B2",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 465
          },
          "typeArguments": null,
          "start": 463,
          "end": 465
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 466,
        "end": 468
      },
      "declare": false,
      "start": 438,
      "end": 468
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 481
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 492
          },
          "typeArguments": null,
          "start": 490,
          "end": 492
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
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 497
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 499,
                "end": 505
              },
              "start": 497,
              "end": 505
            },
            "accessibility": null,
            "static": false,
            "start": 495,
            "end": 505
          }
        ],
        "start": 493,
        "end": 507
      },
      "declare": false,
      "start": 469,
      "end": 507
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 520
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 531
          },
          "typeArguments": null,
          "start": 529,
          "end": 531
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
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 536
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 538,
                "end": 544
              },
              "start": 536,
              "end": 544
            },
            "accessibility": null,
            "static": false,
            "start": 534,
            "end": 544
          }
        ],
        "start": 532,
        "end": 546
      },
      "declare": false,
      "start": 508,
      "end": 546
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 559
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A3",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 570
          },
          "typeArguments": null,
          "start": 568,
          "end": 570
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B3",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 574
          },
          "typeArguments": null,
          "start": 572,
          "end": 574
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 575,
        "end": 577
      },
      "declare": false,
      "start": 547,
      "end": 577
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 588,
        "end": 590
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I3",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 601
          },
          "typeArguments": null,
          "start": 599,
          "end": 601
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
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 606
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 608,
                "end": 614
              },
              "start": 606,
              "end": 614
            },
            "accessibility": null,
            "static": false,
            "start": 604,
            "end": 614
          }
        ],
        "start": 602,
        "end": 616
      },
      "declare": false,
      "start": 578,
      "end": 616
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B4",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 629
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I3",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 640
          },
          "typeArguments": null,
          "start": 638,
          "end": 640
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
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 645
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 647,
                "end": 653
              },
              "start": 645,
              "end": 653
            },
            "accessibility": null,
            "static": false,
            "start": 643,
            "end": 653
          }
        ],
        "start": 641,
        "end": 655
      },
      "declare": false,
      "start": 617,
      "end": 655
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 668
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A4",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 679
          },
          "typeArguments": null,
          "start": 677,
          "end": 679
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B4",
            "optional": false,
            "typeAnnotation": null,
            "start": 681,
            "end": 683
          },
          "typeArguments": null,
          "start": 681,
          "end": 683
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 684,
        "end": 686
      },
      "declare": false,
      "start": 656,
      "end": 686
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A5",
        "optional": false,
        "typeAnnotation": null,
        "start": 697,
        "end": 699
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I4",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 710
          },
          "typeArguments": null,
          "start": 708,
          "end": 710
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
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 715
            },
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
            "accessibility": null,
            "static": false,
            "start": 713,
            "end": 723
          }
        ],
        "start": 711,
        "end": 725
      },
      "declare": false,
      "start": 687,
      "end": 725
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B5",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 738
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I4",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 749
          },
          "typeArguments": null,
          "start": 747,
          "end": 749
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
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 754
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 756,
                "end": 762
              },
              "start": 754,
              "end": 762
            },
            "accessibility": null,
            "static": false,
            "start": 752,
            "end": 762
          }
        ],
        "start": 750,
        "end": 764
      },
      "declare": false,
      "start": 726,
      "end": 764
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null,
        "start": 775,
        "end": 777
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A5",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 788
          },
          "typeArguments": null,
          "start": 786,
          "end": 788
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B5",
            "optional": false,
            "typeAnnotation": null,
            "start": 790,
            "end": 792
          },
          "typeArguments": null,
          "start": 790,
          "end": 792
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 793,
        "end": 795
      },
      "declare": false,
      "start": 765,
      "end": 795
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A6",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 808
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I5",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 819
          },
          "typeArguments": null,
          "start": 817,
          "end": 819
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
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 824
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 826,
                "end": 832
              },
              "start": 824,
              "end": 832
            },
            "accessibility": null,
            "static": false,
            "start": 822,
            "end": 832
          }
        ],
        "start": 820,
        "end": 834
      },
      "declare": false,
      "start": 796,
      "end": 834
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B6",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 847
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I5",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 858
          },
          "typeArguments": null,
          "start": 856,
          "end": 858
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
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 863
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 865,
                "end": 871
              },
              "start": 863,
              "end": 871
            },
            "accessibility": null,
            "static": false,
            "start": 861,
            "end": 871
          }
        ],
        "start": 859,
        "end": 873
      },
      "declare": false,
      "start": 835,
      "end": 873
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I6",
        "optional": false,
        "typeAnnotation": null,
        "start": 884,
        "end": 886
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A6",
            "optional": false,
            "typeAnnotation": null,
            "start": 895,
            "end": 897
          },
          "typeArguments": null,
          "start": 895,
          "end": 897
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B6",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 901
          },
          "typeArguments": null,
          "start": 899,
          "end": 901
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 902,
        "end": 904
      },
      "declare": false,
      "start": 874,
      "end": 904
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A7",
        "optional": false,
        "typeAnnotation": null,
        "start": 915,
        "end": 917
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I6",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 928
          },
          "typeArguments": null,
          "start": 926,
          "end": 928
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
              "name": "a7",
              "optional": false,
              "typeAnnotation": null,
              "start": 931,
              "end": 933
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 935,
                "end": 941
              },
              "start": 933,
              "end": 941
            },
            "accessibility": null,
            "static": false,
            "start": 931,
            "end": 941
          }
        ],
        "start": 929,
        "end": 943
      },
      "declare": false,
      "start": 905,
      "end": 943
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B7",
        "optional": false,
        "typeAnnotation": null,
        "start": 954,
        "end": 956
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I6",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 967
          },
          "typeArguments": null,
          "start": 965,
          "end": 967
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
              "name": "b7",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 972
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 974,
                "end": 980
              },
              "start": 972,
              "end": 980
            },
            "accessibility": null,
            "static": false,
            "start": 970,
            "end": 980
          }
        ],
        "start": 968,
        "end": 982
      },
      "declare": false,
      "start": 944,
      "end": 982
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null,
        "start": 993,
        "end": 995
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1006
          },
          "typeArguments": null,
          "start": 1004,
          "end": 1006
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1008,
            "end": 1010
          },
          "typeArguments": null,
          "start": 1008,
          "end": 1010
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1011,
        "end": 1013
      },
      "declare": false,
      "start": 983,
      "end": 1013
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1024,
        "end": 1026
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1035,
            "end": 1037
          },
          "typeArguments": null,
          "start": 1035,
          "end": 1037
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
              "name": "a8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1040,
              "end": 1042
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1044,
                "end": 1050
              },
              "start": 1042,
              "end": 1050
            },
            "accessibility": null,
            "static": false,
            "start": 1040,
            "end": 1050
          }
        ],
        "start": 1038,
        "end": 1052
      },
      "declare": false,
      "start": 1014,
      "end": 1052
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1063,
        "end": 1065
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1074,
            "end": 1076
          },
          "typeArguments": null,
          "start": 1074,
          "end": 1076
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
              "name": "b8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1081
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1083,
                "end": 1089
              },
              "start": 1081,
              "end": 1089
            },
            "accessibility": null,
            "static": false,
            "start": 1079,
            "end": 1089
          }
        ],
        "start": 1077,
        "end": 1091
      },
      "declare": false,
      "start": 1053,
      "end": 1091
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1102,
        "end": 1104
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1115
          },
          "typeArguments": null,
          "start": 1113,
          "end": 1115
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1117,
            "end": 1119
          },
          "typeArguments": null,
          "start": 1117,
          "end": 1119
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1120,
        "end": 1122
      },
      "declare": false,
      "start": 1092,
      "end": 1122
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1133,
        "end": 1135
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1144,
            "end": 1146
          },
          "typeArguments": null,
          "start": 1144,
          "end": 1146
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
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1153,
                "end": 1159
              },
              "start": 1151,
              "end": 1159
            },
            "accessibility": null,
            "static": false,
            "start": 1149,
            "end": 1159
          }
        ],
        "start": 1147,
        "end": 1161
      },
      "declare": false,
      "start": 1123,
      "end": 1161
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1174
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1183,
            "end": 1185
          },
          "typeArguments": null,
          "start": 1183,
          "end": 1185
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
              "name": "b9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1188,
              "end": 1190
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1192,
                "end": 1198
              },
              "start": 1190,
              "end": 1198
            },
            "accessibility": null,
            "static": false,
            "start": 1188,
            "end": 1198
          }
        ],
        "start": 1186,
        "end": 1200
      },
      "declare": false,
      "start": 1162,
      "end": 1200
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1211,
        "end": 1213
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1222,
            "end": 1224
          },
          "typeArguments": null,
          "start": 1222,
          "end": 1224
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1226,
            "end": 1228
          },
          "typeArguments": null,
          "start": 1226,
          "end": 1228
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1229,
        "end": 1231
      },
      "declare": false,
      "start": 1201,
      "end": 1231
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1242,
        "end": 1245
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1254,
            "end": 1256
          },
          "typeArguments": null,
          "start": 1254,
          "end": 1256
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
              "name": "a10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1259,
              "end": 1262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1264,
                "end": 1270
              },
              "start": 1262,
              "end": 1270
            },
            "accessibility": null,
            "static": false,
            "start": 1259,
            "end": 1270
          }
        ],
        "start": 1257,
        "end": 1272
      },
      "declare": false,
      "start": 1232,
      "end": 1272
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1283,
        "end": 1286
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1295,
            "end": 1297
          },
          "typeArguments": null,
          "start": 1295,
          "end": 1297
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
              "name": "b10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1300,
              "end": 1303
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1305,
                "end": 1311
              },
              "start": 1303,
              "end": 1311
            },
            "accessibility": null,
            "static": false,
            "start": 1300,
            "end": 1311
          }
        ],
        "start": 1298,
        "end": 1313
      },
      "declare": false,
      "start": 1273,
      "end": 1313
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1324,
        "end": 1327
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1336,
            "end": 1339
          },
          "typeArguments": null,
          "start": 1336,
          "end": 1339
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1341,
            "end": 1344
          },
          "typeArguments": null,
          "start": 1341,
          "end": 1344
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1345,
        "end": 1347
      },
      "declare": false,
      "start": 1314,
      "end": 1347
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1358,
        "end": 1361
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1370,
            "end": 1373
          },
          "typeArguments": null,
          "start": 1370,
          "end": 1373
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
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1376,
              "end": 1379
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1381,
                "end": 1387
              },
              "start": 1379,
              "end": 1387
            },
            "accessibility": null,
            "static": false,
            "start": 1376,
            "end": 1387
          }
        ],
        "start": 1374,
        "end": 1389
      },
      "declare": false,
      "start": 1348,
      "end": 1389
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1400,
        "end": 1403
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1415
          },
          "typeArguments": null,
          "start": 1412,
          "end": 1415
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
              "name": "b11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1423,
                "end": 1429
              },
              "start": 1421,
              "end": 1429
            },
            "accessibility": null,
            "static": false,
            "start": 1418,
            "end": 1429
          }
        ],
        "start": 1416,
        "end": 1431
      },
      "declare": false,
      "start": 1390,
      "end": 1431
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1442,
        "end": 1445
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1454,
            "end": 1457
          },
          "typeArguments": null,
          "start": 1454,
          "end": 1457
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1459,
            "end": 1462
          },
          "typeArguments": null,
          "start": 1459,
          "end": 1462
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1463,
        "end": 1465
      },
      "declare": false,
      "start": 1432,
      "end": 1465
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1476,
        "end": 1479
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1488,
            "end": 1491
          },
          "typeArguments": null,
          "start": 1488,
          "end": 1491
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
              "name": "a12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1494,
              "end": 1497
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1499,
                "end": 1505
              },
              "start": 1497,
              "end": 1505
            },
            "accessibility": null,
            "static": false,
            "start": 1494,
            "end": 1505
          }
        ],
        "start": 1492,
        "end": 1507
      },
      "declare": false,
      "start": 1466,
      "end": 1507
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1518,
        "end": 1521
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1530,
            "end": 1533
          },
          "typeArguments": null,
          "start": 1530,
          "end": 1533
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
              "name": "b12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1536,
              "end": 1539
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1541,
                "end": 1547
              },
              "start": 1539,
              "end": 1547
            },
            "accessibility": null,
            "static": false,
            "start": 1536,
            "end": 1547
          }
        ],
        "start": 1534,
        "end": 1549
      },
      "declare": false,
      "start": 1508,
      "end": 1549
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1560,
        "end": 1563
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1572,
            "end": 1575
          },
          "typeArguments": null,
          "start": 1572,
          "end": 1575
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1577,
            "end": 1580
          },
          "typeArguments": null,
          "start": 1577,
          "end": 1580
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1581,
        "end": 1583
      },
      "declare": false,
      "start": 1550,
      "end": 1583
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1594,
        "end": 1597
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1606,
            "end": 1609
          },
          "typeArguments": null,
          "start": 1606,
          "end": 1609
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
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1612,
              "end": 1615
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1617,
                "end": 1623
              },
              "start": 1615,
              "end": 1623
            },
            "accessibility": null,
            "static": false,
            "start": 1612,
            "end": 1623
          }
        ],
        "start": 1610,
        "end": 1625
      },
      "declare": false,
      "start": 1584,
      "end": 1625
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1636,
        "end": 1639
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1648,
            "end": 1651
          },
          "typeArguments": null,
          "start": 1648,
          "end": 1651
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
              "name": "b13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1654,
              "end": 1657
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1659,
                "end": 1665
              },
              "start": 1657,
              "end": 1665
            },
            "accessibility": null,
            "static": false,
            "start": 1654,
            "end": 1665
          }
        ],
        "start": 1652,
        "end": 1667
      },
      "declare": false,
      "start": 1626,
      "end": 1667
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1678,
        "end": 1681
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1690,
            "end": 1693
          },
          "typeArguments": null,
          "start": 1690,
          "end": 1693
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1698
          },
          "typeArguments": null,
          "start": 1695,
          "end": 1698
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1699,
        "end": 1701
      },
      "declare": false,
      "start": 1668,
      "end": 1701
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1712,
        "end": 1715
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1724,
            "end": 1727
          },
          "typeArguments": null,
          "start": 1724,
          "end": 1727
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
              "name": "a14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1730,
              "end": 1733
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1735,
                "end": 1741
              },
              "start": 1733,
              "end": 1741
            },
            "accessibility": null,
            "static": false,
            "start": 1730,
            "end": 1741
          }
        ],
        "start": 1728,
        "end": 1743
      },
      "declare": false,
      "start": 1702,
      "end": 1743
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1754,
        "end": 1757
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1766,
            "end": 1769
          },
          "typeArguments": null,
          "start": 1766,
          "end": 1769
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
              "name": "b14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1772,
              "end": 1775
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1777,
                "end": 1783
              },
              "start": 1775,
              "end": 1783
            },
            "accessibility": null,
            "static": false,
            "start": 1772,
            "end": 1783
          }
        ],
        "start": 1770,
        "end": 1785
      },
      "declare": false,
      "start": 1744,
      "end": 1785
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1796,
        "end": 1799
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1808,
            "end": 1811
          },
          "typeArguments": null,
          "start": 1808,
          "end": 1811
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1813,
            "end": 1816
          },
          "typeArguments": null,
          "start": 1813,
          "end": 1816
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1817,
        "end": 1819
      },
      "declare": false,
      "start": 1786,
      "end": 1819
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1830,
        "end": 1833
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1845
          },
          "typeArguments": null,
          "start": 1842,
          "end": 1845
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
              "name": "a15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1848,
              "end": 1851
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1853,
                "end": 1859
              },
              "start": 1851,
              "end": 1859
            },
            "accessibility": null,
            "static": false,
            "start": 1848,
            "end": 1859
          }
        ],
        "start": 1846,
        "end": 1861
      },
      "declare": false,
      "start": 1820,
      "end": 1861
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1872,
        "end": 1875
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1884,
            "end": 1887
          },
          "typeArguments": null,
          "start": 1884,
          "end": 1887
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
              "name": "b15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1890,
              "end": 1893
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1895,
                "end": 1901
              },
              "start": 1893,
              "end": 1901
            },
            "accessibility": null,
            "static": false,
            "start": 1890,
            "end": 1901
          }
        ],
        "start": 1888,
        "end": 1903
      },
      "declare": false,
      "start": 1862,
      "end": 1903
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1914,
        "end": 1917
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1926,
            "end": 1929
          },
          "typeArguments": null,
          "start": 1926,
          "end": 1929
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1931,
            "end": 1934
          },
          "typeArguments": null,
          "start": 1931,
          "end": 1934
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1935,
        "end": 1937
      },
      "declare": false,
      "start": 1904,
      "end": 1937
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1948,
        "end": 1951
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1960,
            "end": 1963
          },
          "typeArguments": null,
          "start": 1960,
          "end": 1963
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
              "name": "a16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1966,
              "end": 1969
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1971,
                "end": 1977
              },
              "start": 1969,
              "end": 1977
            },
            "accessibility": null,
            "static": false,
            "start": 1966,
            "end": 1977
          }
        ],
        "start": 1964,
        "end": 1979
      },
      "declare": false,
      "start": 1938,
      "end": 1979
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1990,
        "end": 1993
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I15",
            "optional": false,
            "typeAnnotation": null,
            "start": 2002,
            "end": 2005
          },
          "typeArguments": null,
          "start": 2002,
          "end": 2005
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
              "name": "b16",
              "optional": false,
              "typeAnnotation": null,
              "start": 2008,
              "end": 2011
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2013,
                "end": 2019
              },
              "start": 2011,
              "end": 2019
            },
            "accessibility": null,
            "static": false,
            "start": 2008,
            "end": 2019
          }
        ],
        "start": 2006,
        "end": 2021
      },
      "declare": false,
      "start": 1980,
      "end": 2021
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2032,
        "end": 2035
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A16",
            "optional": false,
            "typeAnnotation": null,
            "start": 2044,
            "end": 2047
          },
          "typeArguments": null,
          "start": 2044,
          "end": 2047
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B16",
            "optional": false,
            "typeAnnotation": null,
            "start": 2049,
            "end": 2052
          },
          "typeArguments": null,
          "start": 2049,
          "end": 2052
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2053,
        "end": 2055
      },
      "declare": false,
      "start": 2022,
      "end": 2055
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2066,
        "end": 2069
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I16",
            "optional": false,
            "typeAnnotation": null,
            "start": 2078,
            "end": 2081
          },
          "typeArguments": null,
          "start": 2078,
          "end": 2081
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
              "name": "a17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2084,
              "end": 2087
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2089,
                "end": 2095
              },
              "start": 2087,
              "end": 2095
            },
            "accessibility": null,
            "static": false,
            "start": 2084,
            "end": 2095
          }
        ],
        "start": 2082,
        "end": 2097
      },
      "declare": false,
      "start": 2056,
      "end": 2097
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2108,
        "end": 2111
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I16",
            "optional": false,
            "typeAnnotation": null,
            "start": 2120,
            "end": 2123
          },
          "typeArguments": null,
          "start": 2120,
          "end": 2123
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
              "name": "b17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2131,
                "end": 2137
              },
              "start": 2129,
              "end": 2137
            },
            "accessibility": null,
            "static": false,
            "start": 2126,
            "end": 2137
          }
        ],
        "start": 2124,
        "end": 2139
      },
      "declare": false,
      "start": 2098,
      "end": 2139
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2150,
        "end": 2153
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A17",
            "optional": false,
            "typeAnnotation": null,
            "start": 2162,
            "end": 2165
          },
          "typeArguments": null,
          "start": 2162,
          "end": 2165
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B17",
            "optional": false,
            "typeAnnotation": null,
            "start": 2167,
            "end": 2170
          },
          "typeArguments": null,
          "start": 2167,
          "end": 2170
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2171,
        "end": 2173
      },
      "declare": false,
      "start": 2140,
      "end": 2173
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2184,
        "end": 2187
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I17",
            "optional": false,
            "typeAnnotation": null,
            "start": 2196,
            "end": 2199
          },
          "typeArguments": null,
          "start": 2196,
          "end": 2199
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
              "name": "a18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2202,
              "end": 2205
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2207,
                "end": 2213
              },
              "start": 2205,
              "end": 2213
            },
            "accessibility": null,
            "static": false,
            "start": 2202,
            "end": 2213
          }
        ],
        "start": 2200,
        "end": 2215
      },
      "declare": false,
      "start": 2174,
      "end": 2215
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2226,
        "end": 2229
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I17",
            "optional": false,
            "typeAnnotation": null,
            "start": 2238,
            "end": 2241
          },
          "typeArguments": null,
          "start": 2238,
          "end": 2241
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
              "name": "b18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2244,
              "end": 2247
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2249,
                "end": 2255
              },
              "start": 2247,
              "end": 2255
            },
            "accessibility": null,
            "static": false,
            "start": 2244,
            "end": 2255
          }
        ],
        "start": 2242,
        "end": 2257
      },
      "declare": false,
      "start": 2216,
      "end": 2257
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2268,
        "end": 2271
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A18",
            "optional": false,
            "typeAnnotation": null,
            "start": 2280,
            "end": 2283
          },
          "typeArguments": null,
          "start": 2280,
          "end": 2283
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B18",
            "optional": false,
            "typeAnnotation": null,
            "start": 2285,
            "end": 2288
          },
          "typeArguments": null,
          "start": 2285,
          "end": 2288
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2289,
        "end": 2291
      },
      "declare": false,
      "start": 2258,
      "end": 2291
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A19",
        "optional": false,
        "typeAnnotation": null,
        "start": 2302,
        "end": 2305
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I18",
            "optional": false,
            "typeAnnotation": null,
            "start": 2314,
            "end": 2317
          },
          "typeArguments": null,
          "start": 2314,
          "end": 2317
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
              "name": "a19",
              "optional": false,
              "typeAnnotation": null,
              "start": 2320,
              "end": 2323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2325,
                "end": 2331
              },
              "start": 2323,
              "end": 2331
            },
            "accessibility": null,
            "static": false,
            "start": 2320,
            "end": 2331
          }
        ],
        "start": 2318,
        "end": 2333
      },
      "declare": false,
      "start": 2292,
      "end": 2333
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B19",
        "optional": false,
        "typeAnnotation": null,
        "start": 2344,
        "end": 2347
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I18",
            "optional": false,
            "typeAnnotation": null,
            "start": 2356,
            "end": 2359
          },
          "typeArguments": null,
          "start": 2356,
          "end": 2359
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
              "name": "b19",
              "optional": false,
              "typeAnnotation": null,
              "start": 2362,
              "end": 2365
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2367,
                "end": 2373
              },
              "start": 2365,
              "end": 2373
            },
            "accessibility": null,
            "static": false,
            "start": 2362,
            "end": 2373
          }
        ],
        "start": 2360,
        "end": 2375
      },
      "declare": false,
      "start": 2334,
      "end": 2375
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I19",
        "optional": false,
        "typeAnnotation": null,
        "start": 2386,
        "end": 2389
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A19",
            "optional": false,
            "typeAnnotation": null,
            "start": 2398,
            "end": 2401
          },
          "typeArguments": null,
          "start": 2398,
          "end": 2401
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B19",
            "optional": false,
            "typeAnnotation": null,
            "start": 2403,
            "end": 2406
          },
          "typeArguments": null,
          "start": 2403,
          "end": 2406
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2407,
        "end": 2409
      },
      "declare": false,
      "start": 2376,
      "end": 2409
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2420,
        "end": 2423
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I19",
            "optional": false,
            "typeAnnotation": null,
            "start": 2432,
            "end": 2435
          },
          "typeArguments": null,
          "start": 2432,
          "end": 2435
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
              "name": "a20",
              "optional": false,
              "typeAnnotation": null,
              "start": 2438,
              "end": 2441
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2443,
                "end": 2449
              },
              "start": 2441,
              "end": 2449
            },
            "accessibility": null,
            "static": false,
            "start": 2438,
            "end": 2449
          }
        ],
        "start": 2436,
        "end": 2451
      },
      "declare": false,
      "start": 2410,
      "end": 2451
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2462,
        "end": 2465
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I19",
            "optional": false,
            "typeAnnotation": null,
            "start": 2474,
            "end": 2477
          },
          "typeArguments": null,
          "start": 2474,
          "end": 2477
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
              "name": "b20",
              "optional": false,
              "typeAnnotation": null,
              "start": 2480,
              "end": 2483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2485,
                "end": 2491
              },
              "start": 2483,
              "end": 2491
            },
            "accessibility": null,
            "static": false,
            "start": 2480,
            "end": 2491
          }
        ],
        "start": 2478,
        "end": 2493
      },
      "declare": false,
      "start": 2452,
      "end": 2493
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2504,
        "end": 2507
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A20",
            "optional": false,
            "typeAnnotation": null,
            "start": 2516,
            "end": 2519
          },
          "typeArguments": null,
          "start": 2516,
          "end": 2519
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B20",
            "optional": false,
            "typeAnnotation": null,
            "start": 2521,
            "end": 2524
          },
          "typeArguments": null,
          "start": 2521,
          "end": 2524
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2525,
        "end": 2527
      },
      "declare": false,
      "start": 2494,
      "end": 2527
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2538,
        "end": 2541
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I20",
            "optional": false,
            "typeAnnotation": null,
            "start": 2550,
            "end": 2553
          },
          "typeArguments": null,
          "start": 2550,
          "end": 2553
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
              "name": "a21",
              "optional": false,
              "typeAnnotation": null,
              "start": 2556,
              "end": 2559
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2561,
                "end": 2567
              },
              "start": 2559,
              "end": 2567
            },
            "accessibility": null,
            "static": false,
            "start": 2556,
            "end": 2567
          }
        ],
        "start": 2554,
        "end": 2569
      },
      "declare": false,
      "start": 2528,
      "end": 2569
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2580,
        "end": 2583
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I20",
            "optional": false,
            "typeAnnotation": null,
            "start": 2592,
            "end": 2595
          },
          "typeArguments": null,
          "start": 2592,
          "end": 2595
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
              "name": "b21",
              "optional": false,
              "typeAnnotation": null,
              "start": 2598,
              "end": 2601
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2603,
                "end": 2609
              },
              "start": 2601,
              "end": 2609
            },
            "accessibility": null,
            "static": false,
            "start": 2598,
            "end": 2609
          }
        ],
        "start": 2596,
        "end": 2611
      },
      "declare": false,
      "start": 2570,
      "end": 2611
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2622,
        "end": 2625
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2634,
            "end": 2637
          },
          "typeArguments": null,
          "start": 2634,
          "end": 2637
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2639,
            "end": 2642
          },
          "typeArguments": null,
          "start": 2639,
          "end": 2642
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2643,
        "end": 2645
      },
      "declare": false,
      "start": 2612,
      "end": 2645
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A22",
        "optional": false,
        "typeAnnotation": null,
        "start": 2656,
        "end": 2659
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2668,
            "end": 2671
          },
          "typeArguments": null,
          "start": 2668,
          "end": 2671
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
              "name": "a22",
              "optional": false,
              "typeAnnotation": null,
              "start": 2674,
              "end": 2677
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2679,
                "end": 2685
              },
              "start": 2677,
              "end": 2685
            },
            "accessibility": null,
            "static": false,
            "start": 2674,
            "end": 2685
          }
        ],
        "start": 2672,
        "end": 2687
      },
      "declare": false,
      "start": 2646,
      "end": 2687
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B22",
        "optional": false,
        "typeAnnotation": null,
        "start": 2698,
        "end": 2701
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2710,
            "end": 2713
          },
          "typeArguments": null,
          "start": 2710,
          "end": 2713
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
              "name": "b22",
              "optional": false,
              "typeAnnotation": null,
              "start": 2716,
              "end": 2719
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2721,
                "end": 2727
              },
              "start": 2719,
              "end": 2727
            },
            "accessibility": null,
            "static": false,
            "start": 2716,
            "end": 2727
          }
        ],
        "start": 2714,
        "end": 2729
      },
      "declare": false,
      "start": 2688,
      "end": 2729
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I22",
        "optional": false,
        "typeAnnotation": null,
        "start": 2740,
        "end": 2743
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A22",
            "optional": false,
            "typeAnnotation": null,
            "start": 2752,
            "end": 2755
          },
          "typeArguments": null,
          "start": 2752,
          "end": 2755
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B22",
            "optional": false,
            "typeAnnotation": null,
            "start": 2757,
            "end": 2760
          },
          "typeArguments": null,
          "start": 2757,
          "end": 2760
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2761,
        "end": 2763
      },
      "declare": false,
      "start": 2730,
      "end": 2763
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A23",
        "optional": false,
        "typeAnnotation": null,
        "start": 2774,
        "end": 2777
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I22",
            "optional": false,
            "typeAnnotation": null,
            "start": 2786,
            "end": 2789
          },
          "typeArguments": null,
          "start": 2786,
          "end": 2789
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
              "name": "a23",
              "optional": false,
              "typeAnnotation": null,
              "start": 2792,
              "end": 2795
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2797,
                "end": 2803
              },
              "start": 2795,
              "end": 2803
            },
            "accessibility": null,
            "static": false,
            "start": 2792,
            "end": 2803
          }
        ],
        "start": 2790,
        "end": 2805
      },
      "declare": false,
      "start": 2764,
      "end": 2805
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B23",
        "optional": false,
        "typeAnnotation": null,
        "start": 2816,
        "end": 2819
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I22",
            "optional": false,
            "typeAnnotation": null,
            "start": 2828,
            "end": 2831
          },
          "typeArguments": null,
          "start": 2828,
          "end": 2831
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
              "name": "b23",
              "optional": false,
              "typeAnnotation": null,
              "start": 2834,
              "end": 2837
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2839,
                "end": 2845
              },
              "start": 2837,
              "end": 2845
            },
            "accessibility": null,
            "static": false,
            "start": 2834,
            "end": 2845
          }
        ],
        "start": 2832,
        "end": 2847
      },
      "declare": false,
      "start": 2806,
      "end": 2847
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I23",
        "optional": false,
        "typeAnnotation": null,
        "start": 2858,
        "end": 2861
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2870,
            "end": 2873
          },
          "typeArguments": null,
          "start": 2870,
          "end": 2873
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2875,
            "end": 2878
          },
          "typeArguments": null,
          "start": 2875,
          "end": 2878
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2879,
        "end": 2881
      },
      "declare": false,
      "start": 2848,
      "end": 2881
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A24",
        "optional": false,
        "typeAnnotation": null,
        "start": 2892,
        "end": 2895
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2904,
            "end": 2907
          },
          "typeArguments": null,
          "start": 2904,
          "end": 2907
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
              "name": "a24",
              "optional": false,
              "typeAnnotation": null,
              "start": 2910,
              "end": 2913
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2915,
                "end": 2921
              },
              "start": 2913,
              "end": 2921
            },
            "accessibility": null,
            "static": false,
            "start": 2910,
            "end": 2921
          }
        ],
        "start": 2908,
        "end": 2923
      },
      "declare": false,
      "start": 2882,
      "end": 2923
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B24",
        "optional": false,
        "typeAnnotation": null,
        "start": 2934,
        "end": 2937
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2946,
            "end": 2949
          },
          "typeArguments": null,
          "start": 2946,
          "end": 2949
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
              "name": "b24",
              "optional": false,
              "typeAnnotation": null,
              "start": 2952,
              "end": 2955
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2957,
                "end": 2963
              },
              "start": 2955,
              "end": 2963
            },
            "accessibility": null,
            "static": false,
            "start": 2952,
            "end": 2963
          }
        ],
        "start": 2950,
        "end": 2965
      },
      "declare": false,
      "start": 2924,
      "end": 2965
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I24",
        "optional": false,
        "typeAnnotation": null,
        "start": 2976,
        "end": 2979
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A24",
            "optional": false,
            "typeAnnotation": null,
            "start": 2988,
            "end": 2991
          },
          "typeArguments": null,
          "start": 2988,
          "end": 2991
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B24",
            "optional": false,
            "typeAnnotation": null,
            "start": 2993,
            "end": 2996
          },
          "typeArguments": null,
          "start": 2993,
          "end": 2996
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2997,
        "end": 2999
      },
      "declare": false,
      "start": 2966,
      "end": 2999
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A25",
        "optional": false,
        "typeAnnotation": null,
        "start": 3010,
        "end": 3013
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I24",
            "optional": false,
            "typeAnnotation": null,
            "start": 3022,
            "end": 3025
          },
          "typeArguments": null,
          "start": 3022,
          "end": 3025
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
              "name": "a25",
              "optional": false,
              "typeAnnotation": null,
              "start": 3028,
              "end": 3031
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3033,
                "end": 3039
              },
              "start": 3031,
              "end": 3039
            },
            "accessibility": null,
            "static": false,
            "start": 3028,
            "end": 3039
          }
        ],
        "start": 3026,
        "end": 3041
      },
      "declare": false,
      "start": 3000,
      "end": 3041
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B25",
        "optional": false,
        "typeAnnotation": null,
        "start": 3052,
        "end": 3055
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I24",
            "optional": false,
            "typeAnnotation": null,
            "start": 3064,
            "end": 3067
          },
          "typeArguments": null,
          "start": 3064,
          "end": 3067
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
              "name": "b25",
              "optional": false,
              "typeAnnotation": null,
              "start": 3070,
              "end": 3073
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3075,
                "end": 3081
              },
              "start": 3073,
              "end": 3081
            },
            "accessibility": null,
            "static": false,
            "start": 3070,
            "end": 3081
          }
        ],
        "start": 3068,
        "end": 3083
      },
      "declare": false,
      "start": 3042,
      "end": 3083
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I25",
        "optional": false,
        "typeAnnotation": null,
        "start": 3094,
        "end": 3097
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A25",
            "optional": false,
            "typeAnnotation": null,
            "start": 3106,
            "end": 3109
          },
          "typeArguments": null,
          "start": 3106,
          "end": 3109
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B25",
            "optional": false,
            "typeAnnotation": null,
            "start": 3111,
            "end": 3114
          },
          "typeArguments": null,
          "start": 3111,
          "end": 3114
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 3115,
        "end": 3117
      },
      "declare": false,
      "start": 3084,
      "end": 3117
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A26",
        "optional": false,
        "typeAnnotation": null,
        "start": 3128,
        "end": 3131
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I25",
            "optional": false,
            "typeAnnotation": null,
            "start": 3140,
            "end": 3143
          },
          "typeArguments": null,
          "start": 3140,
          "end": 3143
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
              "name": "a26",
              "optional": false,
              "typeAnnotation": null,
              "start": 3146,
              "end": 3149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3151,
                "end": 3157
              },
              "start": 3149,
              "end": 3157
            },
            "accessibility": null,
            "static": false,
            "start": 3146,
            "end": 3157
          }
        ],
        "start": 3144,
        "end": 3159
      },
      "declare": false,
      "start": 3118,
      "end": 3159
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B26",
        "optional": false,
        "typeAnnotation": null,
        "start": 3170,
        "end": 3173
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I25",
            "optional": false,
            "typeAnnotation": null,
            "start": 3182,
            "end": 3185
          },
          "typeArguments": null,
          "start": 3182,
          "end": 3185
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
              "name": "b26",
              "optional": false,
              "typeAnnotation": null,
              "start": 3188,
              "end": 3191
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3193,
                "end": 3199
              },
              "start": 3191,
              "end": 3199
            },
            "accessibility": null,
            "static": false,
            "start": 3188,
            "end": 3199
          }
        ],
        "start": 3186,
        "end": 3201
      },
      "declare": false,
      "start": 3160,
      "end": 3201
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I26",
        "optional": false,
        "typeAnnotation": null,
        "start": 3212,
        "end": 3215
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A26",
            "optional": false,
            "typeAnnotation": null,
            "start": 3224,
            "end": 3227
          },
          "typeArguments": null,
          "start": 3224,
          "end": 3227
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B26",
            "optional": false,
            "typeAnnotation": null,
            "start": 3229,
            "end": 3232
          },
          "typeArguments": null,
          "start": 3229,
          "end": 3232
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 3233,
        "end": 3235
      },
      "declare": false,
      "start": 3202,
      "end": 3235
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A27",
        "optional": false,
        "typeAnnotation": null,
        "start": 3246,
        "end": 3249
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I26",
            "optional": false,
            "typeAnnotation": null,
            "start": 3258,
            "end": 3261
          },
          "typeArguments": null,
          "start": 3258,
          "end": 3261
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
              "name": "a27",
              "optional": false,
              "typeAnnotation": null,
              "start": 3264,
              "end": 3267
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3269,
                "end": 3275
              },
              "start": 3267,
              "end": 3275
            },
            "accessibility": null,
            "static": false,
            "start": 3264,
            "end": 3275
          }
        ],
        "start": 3262,
        "end": 3277
      },
      "declare": false,
      "start": 3236,
      "end": 3277
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B27",
        "optional": false,
        "typeAnnotation": null,
        "start": 3288,
        "end": 3291
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I26",
            "optional": false,
            "typeAnnotation": null,
            "start": 3300,
            "end": 3303
          },
          "typeArguments": null,
          "start": 3300,
          "end": 3303
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
              "name": "b27",
              "optional": false,
              "typeAnnotation": null,
              "start": 3306,
              "end": 3309
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3311,
                "end": 3317
              },
              "start": 3309,
              "end": 3317
            },
            "accessibility": null,
            "static": false,
            "start": 3306,
            "end": 3317
          }
        ],
        "start": 3304,
        "end": 3319
      },
      "declare": false,
      "start": 3278,
      "end": 3319
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I27",
        "optional": false,
        "typeAnnotation": null,
        "start": 3330,
        "end": 3333
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A27",
            "optional": false,
            "typeAnnotation": null,
            "start": 3342,
            "end": 3345
          },
          "typeArguments": null,
          "start": 3342,
          "end": 3345
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B27",
            "optional": false,
            "typeAnnotation": null,
            "start": 3347,
            "end": 3350
          },
          "typeArguments": null,
          "start": 3347,
          "end": 3350
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 3351,
        "end": 3353
      },
      "declare": false,
      "start": 3320,
      "end": 3353
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A28",
        "optional": false,
        "typeAnnotation": null,
        "start": 3364,
        "end": 3367
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I27",
            "optional": false,
            "typeAnnotation": null,
            "start": 3376,
            "end": 3379
          },
          "typeArguments": null,
          "start": 3376,
          "end": 3379
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
              "name": "a28",
              "optional": false,
              "typeAnnotation": null,
              "start": 3382,
              "end": 3385
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3387,
                "end": 3393
              },
              "start": 3385,
              "end": 3393
            },
            "accessibility": null,
            "static": false,
            "start": 3382,
            "end": 3393
          }
        ],
        "start": 3380,
        "end": 3395
      },
      "declare": false,
      "start": 3354,
      "end": 3395
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B28",
        "optional": false,
        "typeAnnotation": null,
        "start": 3406,
        "end": 3409
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I27",
            "optional": false,
            "typeAnnotation": null,
            "start": 3418,
            "end": 3421
          },
          "typeArguments": null,
          "start": 3418,
          "end": 3421
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
              "name": "b28",
              "optional": false,
              "typeAnnotation": null,
              "start": 3424,
              "end": 3427
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3429,
                "end": 3435
              },
              "start": 3427,
              "end": 3435
            },
            "accessibility": null,
            "static": false,
            "start": 3424,
            "end": 3435
          }
        ],
        "start": 3422,
        "end": 3437
      },
      "declare": false,
      "start": 3396,
      "end": 3437
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I28",
        "optional": false,
        "typeAnnotation": null,
        "start": 3448,
        "end": 3451
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A28",
            "optional": false,
            "typeAnnotation": null,
            "start": 3460,
            "end": 3463
          },
          "typeArguments": null,
          "start": 3460,
          "end": 3463
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B28",
            "optional": false,
            "typeAnnotation": null,
            "start": 3465,
            "end": 3468
          },
          "typeArguments": null,
          "start": 3465,
          "end": 3468
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 3469,
        "end": 3471
      },
      "declare": false,
      "start": 3438,
      "end": 3471
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A29",
        "optional": false,
        "typeAnnotation": null,
        "start": 3482,
        "end": 3485
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I28",
            "optional": false,
            "typeAnnotation": null,
            "start": 3494,
            "end": 3497
          },
          "typeArguments": null,
          "start": 3494,
          "end": 3497
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
              "name": "a29",
              "optional": false,
              "typeAnnotation": null,
              "start": 3500,
              "end": 3503
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3505,
                "end": 3511
              },
              "start": 3503,
              "end": 3511
            },
            "accessibility": null,
            "static": false,
            "start": 3500,
            "end": 3511
          }
        ],
        "start": 3498,
        "end": 3513
      },
      "declare": false,
      "start": 3472,
      "end": 3513
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B29",
        "optional": false,
        "typeAnnotation": null,
        "start": 3524,
        "end": 3527
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I28",
            "optional": false,
            "typeAnnotation": null,
            "start": 3536,
            "end": 3539
          },
          "typeArguments": null,
          "start": 3536,
          "end": 3539
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
              "name": "b29",
              "optional": false,
              "typeAnnotation": null,
              "start": 3542,
              "end": 3545
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3547,
                "end": 3553
              },
              "start": 3545,
              "end": 3553
            },
            "accessibility": null,
            "static": false,
            "start": 3542,
            "end": 3553
          }
        ],
        "start": 3540,
        "end": 3555
      },
      "declare": false,
      "start": 3514,
      "end": 3555
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I29",
        "optional": false,
        "typeAnnotation": null,
        "start": 3566,
        "end": 3569
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A29",
            "optional": false,
            "typeAnnotation": null,
            "start": 3578,
            "end": 3581
          },
          "typeArguments": null,
          "start": 3578,
          "end": 3581
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B29",
            "optional": false,
            "typeAnnotation": null,
            "start": 3583,
            "end": 3586
          },
          "typeArguments": null,
          "start": 3583,
          "end": 3586
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 3587,
        "end": 3589
      },
      "declare": false,
      "start": 3556,
      "end": 3589
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A30",
        "optional": false,
        "typeAnnotation": null,
        "start": 3600,
        "end": 3603
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I29",
            "optional": false,
            "typeAnnotation": null,
            "start": 3612,
            "end": 3615
          },
          "typeArguments": null,
          "start": 3612,
          "end": 3615
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
              "name": "a30",
              "optional": false,
              "typeAnnotation": null,
              "start": 3618,
              "end": 3621
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3623,
                "end": 3629
              },
              "start": 3621,
              "end": 3629
            },
            "accessibility": null,
            "static": false,
            "start": 3618,
            "end": 3629
          }
        ],
        "start": 3616,
        "end": 3631
      },
      "declare": false,
      "start": 3590,
      "end": 3631
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B30",
        "optional": false,
        "typeAnnotation": null,
        "start": 3642,
        "end": 3645
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I29",
            "optional": false,
            "typeAnnotation": null,
            "start": 3654,
            "end": 3657
          },
          "typeArguments": null,
          "start": 3654,
          "end": 3657
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
              "name": "b30",
              "optional": false,
              "typeAnnotation": null,
              "start": 3660,
              "end": 3663
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3665,
                "end": 3671
              },
              "start": 3663,
              "end": 3671
            },
            "accessibility": null,
            "static": false,
            "start": 3660,
            "end": 3671
          }
        ],
        "start": 3658,
        "end": 3673
      },
      "declare": false,
      "start": 3632,
      "end": 3673
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I30",
        "optional": false,
        "typeAnnotation": null,
        "start": 3684,
        "end": 3687
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A30",
            "optional": false,
            "typeAnnotation": null,
            "start": 3696,
            "end": 3699
          },
          "typeArguments": null,
          "start": 3696,
          "end": 3699
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B30",
            "optional": false,
            "typeAnnotation": null,
            "start": 3701,
            "end": 3704
          },
          "typeArguments": null,
          "start": 3701,
          "end": 3704
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 3705,
        "end": 3707
      },
      "declare": false,
      "start": 3674,
      "end": 3707
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A31",
        "optional": false,
        "typeAnnotation": null,
        "start": 3718,
        "end": 3721
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I30",
            "optional": false,
            "typeAnnotation": null,
            "start": 3730,
            "end": 3733
          },
          "typeArguments": null,
          "start": 3730,
          "end": 3733
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
              "name": "a31",
              "optional": false,
              "typeAnnotation": null,
              "start": 3736,
              "end": 3739
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3741,
                "end": 3747
              },
              "start": 3739,
              "end": 3747
            },
            "accessibility": null,
            "static": false,
            "start": 3736,
            "end": 3747
          }
        ],
        "start": 3734,
        "end": 3749
      },
      "declare": false,
      "start": 3708,
      "end": 3749
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B31",
        "optional": false,
        "typeAnnotation": null,
        "start": 3760,
        "end": 3763
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I30",
            "optional": false,
            "typeAnnotation": null,
            "start": 3772,
            "end": 3775
          },
          "typeArguments": null,
          "start": 3772,
          "end": 3775
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
              "name": "b31",
              "optional": false,
              "typeAnnotation": null,
              "start": 3778,
              "end": 3781
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3783,
                "end": 3789
              },
              "start": 3781,
              "end": 3789
            },
            "accessibility": null,
            "static": false,
            "start": 3778,
            "end": 3789
          }
        ],
        "start": 3776,
        "end": 3791
      },
      "declare": false,
      "start": 3750,
      "end": 3791
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I31",
        "optional": false,
        "typeAnnotation": null,
        "start": 3802,
        "end": 3805
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A31",
            "optional": false,
            "typeAnnotation": null,
            "start": 3814,
            "end": 3817
          },
          "typeArguments": null,
          "start": 3814,
          "end": 3817
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B31",
            "optional": false,
            "typeAnnotation": null,
            "start": 3819,
            "end": 3822
          },
          "typeArguments": null,
          "start": 3819,
          "end": 3822
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 3823,
        "end": 3825
      },
      "declare": false,
      "start": 3792,
      "end": 3825
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A32",
        "optional": false,
        "typeAnnotation": null,
        "start": 3836,
        "end": 3839
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I31",
            "optional": false,
            "typeAnnotation": null,
            "start": 3848,
            "end": 3851
          },
          "typeArguments": null,
          "start": 3848,
          "end": 3851
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
              "name": "a32",
              "optional": false,
              "typeAnnotation": null,
              "start": 3854,
              "end": 3857
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3859,
                "end": 3865
              },
              "start": 3857,
              "end": 3865
            },
            "accessibility": null,
            "static": false,
            "start": 3854,
            "end": 3865
          }
        ],
        "start": 3852,
        "end": 3867
      },
      "declare": false,
      "start": 3826,
      "end": 3867
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B32",
        "optional": false,
        "typeAnnotation": null,
        "start": 3878,
        "end": 3881
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I31",
            "optional": false,
            "typeAnnotation": null,
            "start": 3890,
            "end": 3893
          },
          "typeArguments": null,
          "start": 3890,
          "end": 3893
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
              "name": "b32",
              "optional": false,
              "typeAnnotation": null,
              "start": 3896,
              "end": 3899
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3901,
                "end": 3907
              },
              "start": 3899,
              "end": 3907
            },
            "accessibility": null,
            "static": false,
            "start": 3896,
            "end": 3907
          }
        ],
        "start": 3894,
        "end": 3909
      },
      "declare": false,
      "start": 3868,
      "end": 3909
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I32",
        "optional": false,
        "typeAnnotation": null,
        "start": 3920,
        "end": 3923
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A32",
            "optional": false,
            "typeAnnotation": null,
            "start": 3932,
            "end": 3935
          },
          "typeArguments": null,
          "start": 3932,
          "end": 3935
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B32",
            "optional": false,
            "typeAnnotation": null,
            "start": 3937,
            "end": 3940
          },
          "typeArguments": null,
          "start": 3937,
          "end": 3940
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 3941,
        "end": 3943
      },
      "declare": false,
      "start": 3910,
      "end": 3943
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A33",
        "optional": false,
        "typeAnnotation": null,
        "start": 3954,
        "end": 3957
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I32",
            "optional": false,
            "typeAnnotation": null,
            "start": 3966,
            "end": 3969
          },
          "typeArguments": null,
          "start": 3966,
          "end": 3969
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
              "name": "a33",
              "optional": false,
              "typeAnnotation": null,
              "start": 3972,
              "end": 3975
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3977,
                "end": 3983
              },
              "start": 3975,
              "end": 3983
            },
            "accessibility": null,
            "static": false,
            "start": 3972,
            "end": 3983
          }
        ],
        "start": 3970,
        "end": 3985
      },
      "declare": false,
      "start": 3944,
      "end": 3985
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B33",
        "optional": false,
        "typeAnnotation": null,
        "start": 3996,
        "end": 3999
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I32",
            "optional": false,
            "typeAnnotation": null,
            "start": 4008,
            "end": 4011
          },
          "typeArguments": null,
          "start": 4008,
          "end": 4011
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
              "name": "b33",
              "optional": false,
              "typeAnnotation": null,
              "start": 4014,
              "end": 4017
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4019,
                "end": 4025
              },
              "start": 4017,
              "end": 4025
            },
            "accessibility": null,
            "static": false,
            "start": 4014,
            "end": 4025
          }
        ],
        "start": 4012,
        "end": 4027
      },
      "declare": false,
      "start": 3986,
      "end": 4027
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I33",
        "optional": false,
        "typeAnnotation": null,
        "start": 4038,
        "end": 4041
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A33",
            "optional": false,
            "typeAnnotation": null,
            "start": 4050,
            "end": 4053
          },
          "typeArguments": null,
          "start": 4050,
          "end": 4053
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B33",
            "optional": false,
            "typeAnnotation": null,
            "start": 4055,
            "end": 4058
          },
          "typeArguments": null,
          "start": 4055,
          "end": 4058
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4059,
        "end": 4061
      },
      "declare": false,
      "start": 4028,
      "end": 4061
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A34",
        "optional": false,
        "typeAnnotation": null,
        "start": 4072,
        "end": 4075
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I33",
            "optional": false,
            "typeAnnotation": null,
            "start": 4084,
            "end": 4087
          },
          "typeArguments": null,
          "start": 4084,
          "end": 4087
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
              "name": "a34",
              "optional": false,
              "typeAnnotation": null,
              "start": 4090,
              "end": 4093
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4095,
                "end": 4101
              },
              "start": 4093,
              "end": 4101
            },
            "accessibility": null,
            "static": false,
            "start": 4090,
            "end": 4101
          }
        ],
        "start": 4088,
        "end": 4103
      },
      "declare": false,
      "start": 4062,
      "end": 4103
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B34",
        "optional": false,
        "typeAnnotation": null,
        "start": 4114,
        "end": 4117
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I33",
            "optional": false,
            "typeAnnotation": null,
            "start": 4126,
            "end": 4129
          },
          "typeArguments": null,
          "start": 4126,
          "end": 4129
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
              "name": "b34",
              "optional": false,
              "typeAnnotation": null,
              "start": 4132,
              "end": 4135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4137,
                "end": 4143
              },
              "start": 4135,
              "end": 4143
            },
            "accessibility": null,
            "static": false,
            "start": 4132,
            "end": 4143
          }
        ],
        "start": 4130,
        "end": 4145
      },
      "declare": false,
      "start": 4104,
      "end": 4145
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I34",
        "optional": false,
        "typeAnnotation": null,
        "start": 4156,
        "end": 4159
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A34",
            "optional": false,
            "typeAnnotation": null,
            "start": 4168,
            "end": 4171
          },
          "typeArguments": null,
          "start": 4168,
          "end": 4171
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B34",
            "optional": false,
            "typeAnnotation": null,
            "start": 4173,
            "end": 4176
          },
          "typeArguments": null,
          "start": 4173,
          "end": 4176
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4177,
        "end": 4179
      },
      "declare": false,
      "start": 4146,
      "end": 4179
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A35",
        "optional": false,
        "typeAnnotation": null,
        "start": 4190,
        "end": 4193
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I34",
            "optional": false,
            "typeAnnotation": null,
            "start": 4202,
            "end": 4205
          },
          "typeArguments": null,
          "start": 4202,
          "end": 4205
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
              "name": "a35",
              "optional": false,
              "typeAnnotation": null,
              "start": 4208,
              "end": 4211
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4213,
                "end": 4219
              },
              "start": 4211,
              "end": 4219
            },
            "accessibility": null,
            "static": false,
            "start": 4208,
            "end": 4219
          }
        ],
        "start": 4206,
        "end": 4221
      },
      "declare": false,
      "start": 4180,
      "end": 4221
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B35",
        "optional": false,
        "typeAnnotation": null,
        "start": 4232,
        "end": 4235
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I34",
            "optional": false,
            "typeAnnotation": null,
            "start": 4244,
            "end": 4247
          },
          "typeArguments": null,
          "start": 4244,
          "end": 4247
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
              "name": "b35",
              "optional": false,
              "typeAnnotation": null,
              "start": 4250,
              "end": 4253
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4255,
                "end": 4261
              },
              "start": 4253,
              "end": 4261
            },
            "accessibility": null,
            "static": false,
            "start": 4250,
            "end": 4261
          }
        ],
        "start": 4248,
        "end": 4263
      },
      "declare": false,
      "start": 4222,
      "end": 4263
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I35",
        "optional": false,
        "typeAnnotation": null,
        "start": 4274,
        "end": 4277
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A35",
            "optional": false,
            "typeAnnotation": null,
            "start": 4286,
            "end": 4289
          },
          "typeArguments": null,
          "start": 4286,
          "end": 4289
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B35",
            "optional": false,
            "typeAnnotation": null,
            "start": 4291,
            "end": 4294
          },
          "typeArguments": null,
          "start": 4291,
          "end": 4294
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4295,
        "end": 4297
      },
      "declare": false,
      "start": 4264,
      "end": 4297
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A36",
        "optional": false,
        "typeAnnotation": null,
        "start": 4308,
        "end": 4311
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I35",
            "optional": false,
            "typeAnnotation": null,
            "start": 4320,
            "end": 4323
          },
          "typeArguments": null,
          "start": 4320,
          "end": 4323
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
              "name": "a36",
              "optional": false,
              "typeAnnotation": null,
              "start": 4326,
              "end": 4329
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4331,
                "end": 4337
              },
              "start": 4329,
              "end": 4337
            },
            "accessibility": null,
            "static": false,
            "start": 4326,
            "end": 4337
          }
        ],
        "start": 4324,
        "end": 4339
      },
      "declare": false,
      "start": 4298,
      "end": 4339
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B36",
        "optional": false,
        "typeAnnotation": null,
        "start": 4350,
        "end": 4353
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I35",
            "optional": false,
            "typeAnnotation": null,
            "start": 4362,
            "end": 4365
          },
          "typeArguments": null,
          "start": 4362,
          "end": 4365
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
              "name": "b36",
              "optional": false,
              "typeAnnotation": null,
              "start": 4368,
              "end": 4371
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4373,
                "end": 4379
              },
              "start": 4371,
              "end": 4379
            },
            "accessibility": null,
            "static": false,
            "start": 4368,
            "end": 4379
          }
        ],
        "start": 4366,
        "end": 4381
      },
      "declare": false,
      "start": 4340,
      "end": 4381
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I36",
        "optional": false,
        "typeAnnotation": null,
        "start": 4392,
        "end": 4395
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A36",
            "optional": false,
            "typeAnnotation": null,
            "start": 4404,
            "end": 4407
          },
          "typeArguments": null,
          "start": 4404,
          "end": 4407
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B36",
            "optional": false,
            "typeAnnotation": null,
            "start": 4409,
            "end": 4412
          },
          "typeArguments": null,
          "start": 4409,
          "end": 4412
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4413,
        "end": 4415
      },
      "declare": false,
      "start": 4382,
      "end": 4415
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A37",
        "optional": false,
        "typeAnnotation": null,
        "start": 4426,
        "end": 4429
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I36",
            "optional": false,
            "typeAnnotation": null,
            "start": 4438,
            "end": 4441
          },
          "typeArguments": null,
          "start": 4438,
          "end": 4441
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
              "name": "a37",
              "optional": false,
              "typeAnnotation": null,
              "start": 4444,
              "end": 4447
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4449,
                "end": 4455
              },
              "start": 4447,
              "end": 4455
            },
            "accessibility": null,
            "static": false,
            "start": 4444,
            "end": 4455
          }
        ],
        "start": 4442,
        "end": 4457
      },
      "declare": false,
      "start": 4416,
      "end": 4457
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B37",
        "optional": false,
        "typeAnnotation": null,
        "start": 4468,
        "end": 4471
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I36",
            "optional": false,
            "typeAnnotation": null,
            "start": 4480,
            "end": 4483
          },
          "typeArguments": null,
          "start": 4480,
          "end": 4483
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
              "name": "b37",
              "optional": false,
              "typeAnnotation": null,
              "start": 4486,
              "end": 4489
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4491,
                "end": 4497
              },
              "start": 4489,
              "end": 4497
            },
            "accessibility": null,
            "static": false,
            "start": 4486,
            "end": 4497
          }
        ],
        "start": 4484,
        "end": 4499
      },
      "declare": false,
      "start": 4458,
      "end": 4499
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I37",
        "optional": false,
        "typeAnnotation": null,
        "start": 4510,
        "end": 4513
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A37",
            "optional": false,
            "typeAnnotation": null,
            "start": 4522,
            "end": 4525
          },
          "typeArguments": null,
          "start": 4522,
          "end": 4525
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B37",
            "optional": false,
            "typeAnnotation": null,
            "start": 4527,
            "end": 4530
          },
          "typeArguments": null,
          "start": 4527,
          "end": 4530
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4531,
        "end": 4533
      },
      "declare": false,
      "start": 4500,
      "end": 4533
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A38",
        "optional": false,
        "typeAnnotation": null,
        "start": 4544,
        "end": 4547
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I37",
            "optional": false,
            "typeAnnotation": null,
            "start": 4556,
            "end": 4559
          },
          "typeArguments": null,
          "start": 4556,
          "end": 4559
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
              "name": "a38",
              "optional": false,
              "typeAnnotation": null,
              "start": 4562,
              "end": 4565
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4567,
                "end": 4573
              },
              "start": 4565,
              "end": 4573
            },
            "accessibility": null,
            "static": false,
            "start": 4562,
            "end": 4573
          }
        ],
        "start": 4560,
        "end": 4575
      },
      "declare": false,
      "start": 4534,
      "end": 4575
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B38",
        "optional": false,
        "typeAnnotation": null,
        "start": 4586,
        "end": 4589
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I37",
            "optional": false,
            "typeAnnotation": null,
            "start": 4598,
            "end": 4601
          },
          "typeArguments": null,
          "start": 4598,
          "end": 4601
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
              "name": "b38",
              "optional": false,
              "typeAnnotation": null,
              "start": 4604,
              "end": 4607
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4609,
                "end": 4615
              },
              "start": 4607,
              "end": 4615
            },
            "accessibility": null,
            "static": false,
            "start": 4604,
            "end": 4615
          }
        ],
        "start": 4602,
        "end": 4617
      },
      "declare": false,
      "start": 4576,
      "end": 4617
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I38",
        "optional": false,
        "typeAnnotation": null,
        "start": 4628,
        "end": 4631
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A38",
            "optional": false,
            "typeAnnotation": null,
            "start": 4640,
            "end": 4643
          },
          "typeArguments": null,
          "start": 4640,
          "end": 4643
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B38",
            "optional": false,
            "typeAnnotation": null,
            "start": 4645,
            "end": 4648
          },
          "typeArguments": null,
          "start": 4645,
          "end": 4648
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4649,
        "end": 4651
      },
      "declare": false,
      "start": 4618,
      "end": 4651
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A39",
        "optional": false,
        "typeAnnotation": null,
        "start": 4662,
        "end": 4665
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I38",
            "optional": false,
            "typeAnnotation": null,
            "start": 4674,
            "end": 4677
          },
          "typeArguments": null,
          "start": 4674,
          "end": 4677
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
              "name": "a39",
              "optional": false,
              "typeAnnotation": null,
              "start": 4680,
              "end": 4683
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4685,
                "end": 4691
              },
              "start": 4683,
              "end": 4691
            },
            "accessibility": null,
            "static": false,
            "start": 4680,
            "end": 4691
          }
        ],
        "start": 4678,
        "end": 4693
      },
      "declare": false,
      "start": 4652,
      "end": 4693
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B39",
        "optional": false,
        "typeAnnotation": null,
        "start": 4704,
        "end": 4707
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I38",
            "optional": false,
            "typeAnnotation": null,
            "start": 4716,
            "end": 4719
          },
          "typeArguments": null,
          "start": 4716,
          "end": 4719
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
              "name": "b39",
              "optional": false,
              "typeAnnotation": null,
              "start": 4722,
              "end": 4725
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4727,
                "end": 4733
              },
              "start": 4725,
              "end": 4733
            },
            "accessibility": null,
            "static": false,
            "start": 4722,
            "end": 4733
          }
        ],
        "start": 4720,
        "end": 4735
      },
      "declare": false,
      "start": 4694,
      "end": 4735
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I39",
        "optional": false,
        "typeAnnotation": null,
        "start": 4746,
        "end": 4749
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A39",
            "optional": false,
            "typeAnnotation": null,
            "start": 4758,
            "end": 4761
          },
          "typeArguments": null,
          "start": 4758,
          "end": 4761
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B39",
            "optional": false,
            "typeAnnotation": null,
            "start": 4763,
            "end": 4766
          },
          "typeArguments": null,
          "start": 4763,
          "end": 4766
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4767,
        "end": 4769
      },
      "declare": false,
      "start": 4736,
      "end": 4769
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A40",
        "optional": false,
        "typeAnnotation": null,
        "start": 4780,
        "end": 4783
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I39",
            "optional": false,
            "typeAnnotation": null,
            "start": 4792,
            "end": 4795
          },
          "typeArguments": null,
          "start": 4792,
          "end": 4795
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
              "name": "a40",
              "optional": false,
              "typeAnnotation": null,
              "start": 4798,
              "end": 4801
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4803,
                "end": 4809
              },
              "start": 4801,
              "end": 4809
            },
            "accessibility": null,
            "static": false,
            "start": 4798,
            "end": 4809
          }
        ],
        "start": 4796,
        "end": 4811
      },
      "declare": false,
      "start": 4770,
      "end": 4811
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B40",
        "optional": false,
        "typeAnnotation": null,
        "start": 4822,
        "end": 4825
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I39",
            "optional": false,
            "typeAnnotation": null,
            "start": 4834,
            "end": 4837
          },
          "typeArguments": null,
          "start": 4834,
          "end": 4837
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
              "name": "b40",
              "optional": false,
              "typeAnnotation": null,
              "start": 4840,
              "end": 4843
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4845,
                "end": 4851
              },
              "start": 4843,
              "end": 4851
            },
            "accessibility": null,
            "static": false,
            "start": 4840,
            "end": 4851
          }
        ],
        "start": 4838,
        "end": 4853
      },
      "declare": false,
      "start": 4812,
      "end": 4853
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I40",
        "optional": false,
        "typeAnnotation": null,
        "start": 4864,
        "end": 4867
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A40",
            "optional": false,
            "typeAnnotation": null,
            "start": 4876,
            "end": 4879
          },
          "typeArguments": null,
          "start": 4876,
          "end": 4879
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B40",
            "optional": false,
            "typeAnnotation": null,
            "start": 4881,
            "end": 4884
          },
          "typeArguments": null,
          "start": 4881,
          "end": 4884
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4885,
        "end": 4887
      },
      "declare": false,
      "start": 4854,
      "end": 4887
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
            "name": "viaInterfaces",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I40",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4918,
                  "end": 4921
                },
                "typeArguments": null,
                "start": 4918,
                "end": 4921
              },
              "start": 4916,
              "end": 4921
            },
            "start": 4903,
            "end": 4921
          },
          "init": null,
          "definite": false,
          "start": 4903,
          "end": 4921
        }
      ],
      "declare": true,
      "start": 4889,
      "end": 4922
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "viaInterfaces",
          "optional": false,
          "typeAnnotation": null,
          "start": 4923,
          "end": 4936
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "i0",
          "optional": false,
          "typeAnnotation": null,
          "start": 4937,
          "end": 4939
        },
        "optional": false,
        "computed": false,
        "start": 4923,
        "end": 4939
      },
      "directive": null,
      "start": 4923,
      "end": 4940
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J0",
        "optional": false,
        "typeAnnotation": null,
        "start": 4994,
        "end": 4996
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
              "name": "j0",
              "optional": false,
              "typeAnnotation": null,
              "start": 4999,
              "end": 5001
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5003,
                "end": 5009
              },
              "start": 5001,
              "end": 5009
            },
            "accessibility": null,
            "static": false,
            "start": 4999,
            "end": 5009
          }
        ],
        "start": 4997,
        "end": 5011
      },
      "declare": false,
      "start": 4984,
      "end": 5011
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5022,
        "end": 5024
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J0",
            "optional": false,
            "typeAnnotation": null,
            "start": 5033,
            "end": 5035
          },
          "typeArguments": null,
          "start": 5033,
          "end": 5035
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
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5038,
              "end": 5040
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5042,
                "end": 5048
              },
              "start": 5040,
              "end": 5048
            },
            "accessibility": null,
            "static": false,
            "start": 5038,
            "end": 5048
          }
        ],
        "start": 5036,
        "end": 5050
      },
      "declare": false,
      "start": 5012,
      "end": 5050
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5061,
        "end": 5063
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J0",
            "optional": false,
            "typeAnnotation": null,
            "start": 5072,
            "end": 5074
          },
          "typeArguments": null,
          "start": 5072,
          "end": 5074
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
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5077,
              "end": 5079
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5081,
                "end": 5087
              },
              "start": 5079,
              "end": 5087
            },
            "accessibility": null,
            "static": false,
            "start": 5077,
            "end": 5087
          }
        ],
        "start": 5075,
        "end": 5089
      },
      "declare": false,
      "start": 5051,
      "end": 5089
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5100,
        "end": 5102
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5111,
            "end": 5116
          },
          "typeArguments": null,
          "start": 5111,
          "end": 5116
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5117,
        "end": 5119
      },
      "declare": false,
      "start": 5090,
      "end": 5119
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5125,
        "end": 5130
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5133,
              "end": 5135
            },
            "typeArguments": null,
            "start": 5133,
            "end": 5135
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5138,
              "end": 5140
            },
            "typeArguments": null,
            "start": 5138,
            "end": 5140
          }
        ],
        "start": 5133,
        "end": 5140
      },
      "declare": false,
      "start": 5120,
      "end": 5141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5152,
        "end": 5154
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5163,
            "end": 5165
          },
          "typeArguments": null,
          "start": 5163,
          "end": 5165
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
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5168,
              "end": 5170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5172,
                "end": 5178
              },
              "start": 5170,
              "end": 5178
            },
            "accessibility": null,
            "static": false,
            "start": 5168,
            "end": 5178
          }
        ],
        "start": 5166,
        "end": 5180
      },
      "declare": false,
      "start": 5142,
      "end": 5180
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5191,
        "end": 5193
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5202,
            "end": 5204
          },
          "typeArguments": null,
          "start": 5202,
          "end": 5204
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
              "name": "d2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5207,
              "end": 5209
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5211,
                "end": 5217
              },
              "start": 5209,
              "end": 5217
            },
            "accessibility": null,
            "static": false,
            "start": 5207,
            "end": 5217
          }
        ],
        "start": 5205,
        "end": 5219
      },
      "declare": false,
      "start": 5181,
      "end": 5219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5230,
        "end": 5232
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5241,
            "end": 5246
          },
          "typeArguments": null,
          "start": 5241,
          "end": 5246
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5247,
        "end": 5249
      },
      "declare": false,
      "start": 5220,
      "end": 5249
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5255,
        "end": 5260
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5263,
              "end": 5265
            },
            "typeArguments": null,
            "start": 5263,
            "end": 5265
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5268,
              "end": 5270
            },
            "typeArguments": null,
            "start": 5268,
            "end": 5270
          }
        ],
        "start": 5263,
        "end": 5270
      },
      "declare": false,
      "start": 5250,
      "end": 5271
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5282,
        "end": 5284
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5293,
            "end": 5295
          },
          "typeArguments": null,
          "start": 5293,
          "end": 5295
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
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5298,
              "end": 5300
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5302,
                "end": 5308
              },
              "start": 5300,
              "end": 5308
            },
            "accessibility": null,
            "static": false,
            "start": 5298,
            "end": 5308
          }
        ],
        "start": 5296,
        "end": 5310
      },
      "declare": false,
      "start": 5272,
      "end": 5310
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5321,
        "end": 5323
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5332,
            "end": 5334
          },
          "typeArguments": null,
          "start": 5332,
          "end": 5334
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
              "name": "d3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5337,
              "end": 5339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5341,
                "end": 5347
              },
              "start": 5339,
              "end": 5347
            },
            "accessibility": null,
            "static": false,
            "start": 5337,
            "end": 5347
          }
        ],
        "start": 5335,
        "end": 5349
      },
      "declare": false,
      "start": 5311,
      "end": 5349
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5360,
        "end": 5362
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5371,
            "end": 5376
          },
          "typeArguments": null,
          "start": 5371,
          "end": 5376
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5377,
        "end": 5379
      },
      "declare": false,
      "start": 5350,
      "end": 5379
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5385,
        "end": 5390
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5393,
              "end": 5395
            },
            "typeArguments": null,
            "start": 5393,
            "end": 5395
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5398,
              "end": 5400
            },
            "typeArguments": null,
            "start": 5398,
            "end": 5400
          }
        ],
        "start": 5393,
        "end": 5400
      },
      "declare": false,
      "start": 5380,
      "end": 5401
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 5412,
        "end": 5414
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5423,
            "end": 5425
          },
          "typeArguments": null,
          "start": 5423,
          "end": 5425
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
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5428,
              "end": 5430
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5432,
                "end": 5438
              },
              "start": 5430,
              "end": 5438
            },
            "accessibility": null,
            "static": false,
            "start": 5428,
            "end": 5438
          }
        ],
        "start": 5426,
        "end": 5440
      },
      "declare": false,
      "start": 5402,
      "end": 5440
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D4",
        "optional": false,
        "typeAnnotation": null,
        "start": 5451,
        "end": 5453
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5462,
            "end": 5464
          },
          "typeArguments": null,
          "start": 5462,
          "end": 5464
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
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5467,
              "end": 5469
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5471,
                "end": 5477
              },
              "start": 5469,
              "end": 5477
            },
            "accessibility": null,
            "static": false,
            "start": 5467,
            "end": 5477
          }
        ],
        "start": 5465,
        "end": 5479
      },
      "declare": false,
      "start": 5441,
      "end": 5479
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J4",
        "optional": false,
        "typeAnnotation": null,
        "start": 5490,
        "end": 5492
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both4",
            "optional": false,
            "typeAnnotation": null,
            "start": 5501,
            "end": 5506
          },
          "typeArguments": null,
          "start": 5501,
          "end": 5506
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5507,
        "end": 5509
      },
      "declare": false,
      "start": 5480,
      "end": 5509
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both4",
        "optional": false,
        "typeAnnotation": null,
        "start": 5515,
        "end": 5520
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5523,
              "end": 5525
            },
            "typeArguments": null,
            "start": 5523,
            "end": 5525
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5528,
              "end": 5530
            },
            "typeArguments": null,
            "start": 5528,
            "end": 5530
          }
        ],
        "start": 5523,
        "end": 5530
      },
      "declare": false,
      "start": 5510,
      "end": 5531
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 5542,
        "end": 5544
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J4",
            "optional": false,
            "typeAnnotation": null,
            "start": 5553,
            "end": 5555
          },
          "typeArguments": null,
          "start": 5553,
          "end": 5555
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
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 5558,
              "end": 5560
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5562,
                "end": 5568
              },
              "start": 5560,
              "end": 5568
            },
            "accessibility": null,
            "static": false,
            "start": 5558,
            "end": 5568
          }
        ],
        "start": 5556,
        "end": 5570
      },
      "declare": false,
      "start": 5532,
      "end": 5570
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D5",
        "optional": false,
        "typeAnnotation": null,
        "start": 5581,
        "end": 5583
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J4",
            "optional": false,
            "typeAnnotation": null,
            "start": 5592,
            "end": 5594
          },
          "typeArguments": null,
          "start": 5592,
          "end": 5594
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
              "name": "d5",
              "optional": false,
              "typeAnnotation": null,
              "start": 5597,
              "end": 5599
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5601,
                "end": 5607
              },
              "start": 5599,
              "end": 5607
            },
            "accessibility": null,
            "static": false,
            "start": 5597,
            "end": 5607
          }
        ],
        "start": 5595,
        "end": 5609
      },
      "declare": false,
      "start": 5571,
      "end": 5609
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J5",
        "optional": false,
        "typeAnnotation": null,
        "start": 5620,
        "end": 5622
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both5",
            "optional": false,
            "typeAnnotation": null,
            "start": 5631,
            "end": 5636
          },
          "typeArguments": null,
          "start": 5631,
          "end": 5636
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5637,
        "end": 5639
      },
      "declare": false,
      "start": 5610,
      "end": 5639
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both5",
        "optional": false,
        "typeAnnotation": null,
        "start": 5645,
        "end": 5650
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C5",
              "optional": false,
              "typeAnnotation": null,
              "start": 5653,
              "end": 5655
            },
            "typeArguments": null,
            "start": 5653,
            "end": 5655
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D5",
              "optional": false,
              "typeAnnotation": null,
              "start": 5658,
              "end": 5660
            },
            "typeArguments": null,
            "start": 5658,
            "end": 5660
          }
        ],
        "start": 5653,
        "end": 5660
      },
      "declare": false,
      "start": 5640,
      "end": 5661
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 5672,
        "end": 5674
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J5",
            "optional": false,
            "typeAnnotation": null,
            "start": 5683,
            "end": 5685
          },
          "typeArguments": null,
          "start": 5683,
          "end": 5685
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
              "name": "c6",
              "optional": false,
              "typeAnnotation": null,
              "start": 5688,
              "end": 5690
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5692,
                "end": 5698
              },
              "start": 5690,
              "end": 5698
            },
            "accessibility": null,
            "static": false,
            "start": 5688,
            "end": 5698
          }
        ],
        "start": 5686,
        "end": 5700
      },
      "declare": false,
      "start": 5662,
      "end": 5700
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D6",
        "optional": false,
        "typeAnnotation": null,
        "start": 5711,
        "end": 5713
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J5",
            "optional": false,
            "typeAnnotation": null,
            "start": 5722,
            "end": 5724
          },
          "typeArguments": null,
          "start": 5722,
          "end": 5724
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
              "name": "d6",
              "optional": false,
              "typeAnnotation": null,
              "start": 5727,
              "end": 5729
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5731,
                "end": 5737
              },
              "start": 5729,
              "end": 5737
            },
            "accessibility": null,
            "static": false,
            "start": 5727,
            "end": 5737
          }
        ],
        "start": 5725,
        "end": 5739
      },
      "declare": false,
      "start": 5701,
      "end": 5739
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J6",
        "optional": false,
        "typeAnnotation": null,
        "start": 5750,
        "end": 5752
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both6",
            "optional": false,
            "typeAnnotation": null,
            "start": 5761,
            "end": 5766
          },
          "typeArguments": null,
          "start": 5761,
          "end": 5766
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5767,
        "end": 5769
      },
      "declare": false,
      "start": 5740,
      "end": 5769
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both6",
        "optional": false,
        "typeAnnotation": null,
        "start": 5775,
        "end": 5780
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C6",
              "optional": false,
              "typeAnnotation": null,
              "start": 5783,
              "end": 5785
            },
            "typeArguments": null,
            "start": 5783,
            "end": 5785
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D6",
              "optional": false,
              "typeAnnotation": null,
              "start": 5788,
              "end": 5790
            },
            "typeArguments": null,
            "start": 5788,
            "end": 5790
          }
        ],
        "start": 5783,
        "end": 5790
      },
      "declare": false,
      "start": 5770,
      "end": 5791
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null,
        "start": 5802,
        "end": 5804
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J6",
            "optional": false,
            "typeAnnotation": null,
            "start": 5813,
            "end": 5815
          },
          "typeArguments": null,
          "start": 5813,
          "end": 5815
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
              "name": "c7",
              "optional": false,
              "typeAnnotation": null,
              "start": 5818,
              "end": 5820
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5822,
                "end": 5828
              },
              "start": 5820,
              "end": 5828
            },
            "accessibility": null,
            "static": false,
            "start": 5818,
            "end": 5828
          }
        ],
        "start": 5816,
        "end": 5830
      },
      "declare": false,
      "start": 5792,
      "end": 5830
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D7",
        "optional": false,
        "typeAnnotation": null,
        "start": 5841,
        "end": 5843
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J6",
            "optional": false,
            "typeAnnotation": null,
            "start": 5852,
            "end": 5854
          },
          "typeArguments": null,
          "start": 5852,
          "end": 5854
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
              "name": "d7",
              "optional": false,
              "typeAnnotation": null,
              "start": 5857,
              "end": 5859
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5861,
                "end": 5867
              },
              "start": 5859,
              "end": 5867
            },
            "accessibility": null,
            "static": false,
            "start": 5857,
            "end": 5867
          }
        ],
        "start": 5855,
        "end": 5869
      },
      "declare": false,
      "start": 5831,
      "end": 5869
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J7",
        "optional": false,
        "typeAnnotation": null,
        "start": 5880,
        "end": 5882
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both7",
            "optional": false,
            "typeAnnotation": null,
            "start": 5891,
            "end": 5896
          },
          "typeArguments": null,
          "start": 5891,
          "end": 5896
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5897,
        "end": 5899
      },
      "declare": false,
      "start": 5870,
      "end": 5899
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both7",
        "optional": false,
        "typeAnnotation": null,
        "start": 5905,
        "end": 5910
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C7",
              "optional": false,
              "typeAnnotation": null,
              "start": 5913,
              "end": 5915
            },
            "typeArguments": null,
            "start": 5913,
            "end": 5915
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D7",
              "optional": false,
              "typeAnnotation": null,
              "start": 5918,
              "end": 5920
            },
            "typeArguments": null,
            "start": 5918,
            "end": 5920
          }
        ],
        "start": 5913,
        "end": 5920
      },
      "declare": false,
      "start": 5900,
      "end": 5921
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C8",
        "optional": false,
        "typeAnnotation": null,
        "start": 5932,
        "end": 5934
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J7",
            "optional": false,
            "typeAnnotation": null,
            "start": 5943,
            "end": 5945
          },
          "typeArguments": null,
          "start": 5943,
          "end": 5945
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
              "name": "c8",
              "optional": false,
              "typeAnnotation": null,
              "start": 5948,
              "end": 5950
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5952,
                "end": 5958
              },
              "start": 5950,
              "end": 5958
            },
            "accessibility": null,
            "static": false,
            "start": 5948,
            "end": 5958
          }
        ],
        "start": 5946,
        "end": 5960
      },
      "declare": false,
      "start": 5922,
      "end": 5960
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D8",
        "optional": false,
        "typeAnnotation": null,
        "start": 5971,
        "end": 5973
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J7",
            "optional": false,
            "typeAnnotation": null,
            "start": 5982,
            "end": 5984
          },
          "typeArguments": null,
          "start": 5982,
          "end": 5984
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
              "name": "d8",
              "optional": false,
              "typeAnnotation": null,
              "start": 5987,
              "end": 5989
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5991,
                "end": 5997
              },
              "start": 5989,
              "end": 5997
            },
            "accessibility": null,
            "static": false,
            "start": 5987,
            "end": 5997
          }
        ],
        "start": 5985,
        "end": 5999
      },
      "declare": false,
      "start": 5961,
      "end": 5999
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J8",
        "optional": false,
        "typeAnnotation": null,
        "start": 6010,
        "end": 6012
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both8",
            "optional": false,
            "typeAnnotation": null,
            "start": 6021,
            "end": 6026
          },
          "typeArguments": null,
          "start": 6021,
          "end": 6026
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 6027,
        "end": 6029
      },
      "declare": false,
      "start": 6000,
      "end": 6029
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both8",
        "optional": false,
        "typeAnnotation": null,
        "start": 6035,
        "end": 6040
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C8",
              "optional": false,
              "typeAnnotation": null,
              "start": 6043,
              "end": 6045
            },
            "typeArguments": null,
            "start": 6043,
            "end": 6045
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D8",
              "optional": false,
              "typeAnnotation": null,
              "start": 6048,
              "end": 6050
            },
            "typeArguments": null,
            "start": 6048,
            "end": 6050
          }
        ],
        "start": 6043,
        "end": 6050
      },
      "declare": false,
      "start": 6030,
      "end": 6051
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C9",
        "optional": false,
        "typeAnnotation": null,
        "start": 6062,
        "end": 6064
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J8",
            "optional": false,
            "typeAnnotation": null,
            "start": 6073,
            "end": 6075
          },
          "typeArguments": null,
          "start": 6073,
          "end": 6075
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
              "name": "c9",
              "optional": false,
              "typeAnnotation": null,
              "start": 6078,
              "end": 6080
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6082,
                "end": 6088
              },
              "start": 6080,
              "end": 6088
            },
            "accessibility": null,
            "static": false,
            "start": 6078,
            "end": 6088
          }
        ],
        "start": 6076,
        "end": 6090
      },
      "declare": false,
      "start": 6052,
      "end": 6090
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D9",
        "optional": false,
        "typeAnnotation": null,
        "start": 6101,
        "end": 6103
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J8",
            "optional": false,
            "typeAnnotation": null,
            "start": 6112,
            "end": 6114
          },
          "typeArguments": null,
          "start": 6112,
          "end": 6114
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
              "name": "d9",
              "optional": false,
              "typeAnnotation": null,
              "start": 6117,
              "end": 6119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6121,
                "end": 6127
              },
              "start": 6119,
              "end": 6127
            },
            "accessibility": null,
            "static": false,
            "start": 6117,
            "end": 6127
          }
        ],
        "start": 6115,
        "end": 6129
      },
      "declare": false,
      "start": 6091,
      "end": 6129
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J9",
        "optional": false,
        "typeAnnotation": null,
        "start": 6140,
        "end": 6142
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both9",
            "optional": false,
            "typeAnnotation": null,
            "start": 6151,
            "end": 6156
          },
          "typeArguments": null,
          "start": 6151,
          "end": 6156
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 6157,
        "end": 6159
      },
      "declare": false,
      "start": 6130,
      "end": 6159
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both9",
        "optional": false,
        "typeAnnotation": null,
        "start": 6165,
        "end": 6170
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C9",
              "optional": false,
              "typeAnnotation": null,
              "start": 6173,
              "end": 6175
            },
            "typeArguments": null,
            "start": 6173,
            "end": 6175
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D9",
              "optional": false,
              "typeAnnotation": null,
              "start": 6178,
              "end": 6180
            },
            "typeArguments": null,
            "start": 6178,
            "end": 6180
          }
        ],
        "start": 6173,
        "end": 6180
      },
      "declare": false,
      "start": 6160,
      "end": 6181
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C10",
        "optional": false,
        "typeAnnotation": null,
        "start": 6192,
        "end": 6195
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J9",
            "optional": false,
            "typeAnnotation": null,
            "start": 6204,
            "end": 6206
          },
          "typeArguments": null,
          "start": 6204,
          "end": 6206
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
              "name": "c10",
              "optional": false,
              "typeAnnotation": null,
              "start": 6209,
              "end": 6212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6214,
                "end": 6220
              },
              "start": 6212,
              "end": 6220
            },
            "accessibility": null,
            "static": false,
            "start": 6209,
            "end": 6220
          }
        ],
        "start": 6207,
        "end": 6222
      },
      "declare": false,
      "start": 6182,
      "end": 6222
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D10",
        "optional": false,
        "typeAnnotation": null,
        "start": 6233,
        "end": 6236
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J9",
            "optional": false,
            "typeAnnotation": null,
            "start": 6245,
            "end": 6247
          },
          "typeArguments": null,
          "start": 6245,
          "end": 6247
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
              "name": "d10",
              "optional": false,
              "typeAnnotation": null,
              "start": 6250,
              "end": 6253
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6255,
                "end": 6261
              },
              "start": 6253,
              "end": 6261
            },
            "accessibility": null,
            "static": false,
            "start": 6250,
            "end": 6261
          }
        ],
        "start": 6248,
        "end": 6263
      },
      "declare": false,
      "start": 6223,
      "end": 6263
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J10",
        "optional": false,
        "typeAnnotation": null,
        "start": 6274,
        "end": 6277
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both10",
            "optional": false,
            "typeAnnotation": null,
            "start": 6286,
            "end": 6292
          },
          "typeArguments": null,
          "start": 6286,
          "end": 6292
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 6293,
        "end": 6295
      },
      "declare": false,
      "start": 6264,
      "end": 6295
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both10",
        "optional": false,
        "typeAnnotation": null,
        "start": 6301,
        "end": 6307
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C10",
              "optional": false,
              "typeAnnotation": null,
              "start": 6310,
              "end": 6313
            },
            "typeArguments": null,
            "start": 6310,
            "end": 6313
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D10",
              "optional": false,
              "typeAnnotation": null,
              "start": 6316,
              "end": 6319
            },
            "typeArguments": null,
            "start": 6316,
            "end": 6319
          }
        ],
        "start": 6310,
        "end": 6319
      },
      "declare": false,
      "start": 6296,
      "end": 6320
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C11",
        "optional": false,
        "typeAnnotation": null,
        "start": 6331,
        "end": 6334
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J10",
            "optional": false,
            "typeAnnotation": null,
            "start": 6343,
            "end": 6346
          },
          "typeArguments": null,
          "start": 6343,
          "end": 6346
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
              "name": "c11",
              "optional": false,
              "typeAnnotation": null,
              "start": 6349,
              "end": 6352
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6354,
                "end": 6360
              },
              "start": 6352,
              "end": 6360
            },
            "accessibility": null,
            "static": false,
            "start": 6349,
            "end": 6360
          }
        ],
        "start": 6347,
        "end": 6362
      },
      "declare": false,
      "start": 6321,
      "end": 6362
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D11",
        "optional": false,
        "typeAnnotation": null,
        "start": 6373,
        "end": 6376
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J10",
            "optional": false,
            "typeAnnotation": null,
            "start": 6385,
            "end": 6388
          },
          "typeArguments": null,
          "start": 6385,
          "end": 6388
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
              "name": "d11",
              "optional": false,
              "typeAnnotation": null,
              "start": 6391,
              "end": 6394
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6396,
                "end": 6402
              },
              "start": 6394,
              "end": 6402
            },
            "accessibility": null,
            "static": false,
            "start": 6391,
            "end": 6402
          }
        ],
        "start": 6389,
        "end": 6404
      },
      "declare": false,
      "start": 6363,
      "end": 6404
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J11",
        "optional": false,
        "typeAnnotation": null,
        "start": 6415,
        "end": 6418
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both11",
            "optional": false,
            "typeAnnotation": null,
            "start": 6427,
            "end": 6433
          },
          "typeArguments": null,
          "start": 6427,
          "end": 6433
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 6434,
        "end": 6436
      },
      "declare": false,
      "start": 6405,
      "end": 6436
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both11",
        "optional": false,
        "typeAnnotation": null,
        "start": 6442,
        "end": 6448
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C11",
              "optional": false,
              "typeAnnotation": null,
              "start": 6451,
              "end": 6454
            },
            "typeArguments": null,
            "start": 6451,
            "end": 6454
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D11",
              "optional": false,
              "typeAnnotation": null,
              "start": 6457,
              "end": 6460
            },
            "typeArguments": null,
            "start": 6457,
            "end": 6460
          }
        ],
        "start": 6451,
        "end": 6460
      },
      "declare": false,
      "start": 6437,
      "end": 6461
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C12",
        "optional": false,
        "typeAnnotation": null,
        "start": 6472,
        "end": 6475
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J11",
            "optional": false,
            "typeAnnotation": null,
            "start": 6484,
            "end": 6487
          },
          "typeArguments": null,
          "start": 6484,
          "end": 6487
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
              "name": "c12",
              "optional": false,
              "typeAnnotation": null,
              "start": 6490,
              "end": 6493
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6495,
                "end": 6501
              },
              "start": 6493,
              "end": 6501
            },
            "accessibility": null,
            "static": false,
            "start": 6490,
            "end": 6501
          }
        ],
        "start": 6488,
        "end": 6503
      },
      "declare": false,
      "start": 6462,
      "end": 6503
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D12",
        "optional": false,
        "typeAnnotation": null,
        "start": 6514,
        "end": 6517
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J11",
            "optional": false,
            "typeAnnotation": null,
            "start": 6526,
            "end": 6529
          },
          "typeArguments": null,
          "start": 6526,
          "end": 6529
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
              "name": "d12",
              "optional": false,
              "typeAnnotation": null,
              "start": 6532,
              "end": 6535
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6537,
                "end": 6543
              },
              "start": 6535,
              "end": 6543
            },
            "accessibility": null,
            "static": false,
            "start": 6532,
            "end": 6543
          }
        ],
        "start": 6530,
        "end": 6545
      },
      "declare": false,
      "start": 6504,
      "end": 6545
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J12",
        "optional": false,
        "typeAnnotation": null,
        "start": 6556,
        "end": 6559
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both12",
            "optional": false,
            "typeAnnotation": null,
            "start": 6568,
            "end": 6574
          },
          "typeArguments": null,
          "start": 6568,
          "end": 6574
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 6575,
        "end": 6577
      },
      "declare": false,
      "start": 6546,
      "end": 6577
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both12",
        "optional": false,
        "typeAnnotation": null,
        "start": 6583,
        "end": 6589
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C12",
              "optional": false,
              "typeAnnotation": null,
              "start": 6592,
              "end": 6595
            },
            "typeArguments": null,
            "start": 6592,
            "end": 6595
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D12",
              "optional": false,
              "typeAnnotation": null,
              "start": 6598,
              "end": 6601
            },
            "typeArguments": null,
            "start": 6598,
            "end": 6601
          }
        ],
        "start": 6592,
        "end": 6601
      },
      "declare": false,
      "start": 6578,
      "end": 6602
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C13",
        "optional": false,
        "typeAnnotation": null,
        "start": 6613,
        "end": 6616
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J12",
            "optional": false,
            "typeAnnotation": null,
            "start": 6625,
            "end": 6628
          },
          "typeArguments": null,
          "start": 6625,
          "end": 6628
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
              "name": "c13",
              "optional": false,
              "typeAnnotation": null,
              "start": 6631,
              "end": 6634
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6636,
                "end": 6642
              },
              "start": 6634,
              "end": 6642
            },
            "accessibility": null,
            "static": false,
            "start": 6631,
            "end": 6642
          }
        ],
        "start": 6629,
        "end": 6644
      },
      "declare": false,
      "start": 6603,
      "end": 6644
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D13",
        "optional": false,
        "typeAnnotation": null,
        "start": 6655,
        "end": 6658
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J12",
            "optional": false,
            "typeAnnotation": null,
            "start": 6667,
            "end": 6670
          },
          "typeArguments": null,
          "start": 6667,
          "end": 6670
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
              "name": "d13",
              "optional": false,
              "typeAnnotation": null,
              "start": 6673,
              "end": 6676
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6678,
                "end": 6684
              },
              "start": 6676,
              "end": 6684
            },
            "accessibility": null,
            "static": false,
            "start": 6673,
            "end": 6684
          }
        ],
        "start": 6671,
        "end": 6686
      },
      "declare": false,
      "start": 6645,
      "end": 6686
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J13",
        "optional": false,
        "typeAnnotation": null,
        "start": 6697,
        "end": 6700
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both13",
            "optional": false,
            "typeAnnotation": null,
            "start": 6709,
            "end": 6715
          },
          "typeArguments": null,
          "start": 6709,
          "end": 6715
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 6716,
        "end": 6718
      },
      "declare": false,
      "start": 6687,
      "end": 6718
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both13",
        "optional": false,
        "typeAnnotation": null,
        "start": 6724,
        "end": 6730
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C13",
              "optional": false,
              "typeAnnotation": null,
              "start": 6733,
              "end": 6736
            },
            "typeArguments": null,
            "start": 6733,
            "end": 6736
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D13",
              "optional": false,
              "typeAnnotation": null,
              "start": 6739,
              "end": 6742
            },
            "typeArguments": null,
            "start": 6739,
            "end": 6742
          }
        ],
        "start": 6733,
        "end": 6742
      },
      "declare": false,
      "start": 6719,
      "end": 6743
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C14",
        "optional": false,
        "typeAnnotation": null,
        "start": 6754,
        "end": 6757
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J13",
            "optional": false,
            "typeAnnotation": null,
            "start": 6766,
            "end": 6769
          },
          "typeArguments": null,
          "start": 6766,
          "end": 6769
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
              "name": "c14",
              "optional": false,
              "typeAnnotation": null,
              "start": 6772,
              "end": 6775
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6777,
                "end": 6783
              },
              "start": 6775,
              "end": 6783
            },
            "accessibility": null,
            "static": false,
            "start": 6772,
            "end": 6783
          }
        ],
        "start": 6770,
        "end": 6785
      },
      "declare": false,
      "start": 6744,
      "end": 6785
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D14",
        "optional": false,
        "typeAnnotation": null,
        "start": 6796,
        "end": 6799
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J13",
            "optional": false,
            "typeAnnotation": null,
            "start": 6808,
            "end": 6811
          },
          "typeArguments": null,
          "start": 6808,
          "end": 6811
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
              "name": "d14",
              "optional": false,
              "typeAnnotation": null,
              "start": 6814,
              "end": 6817
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6819,
                "end": 6825
              },
              "start": 6817,
              "end": 6825
            },
            "accessibility": null,
            "static": false,
            "start": 6814,
            "end": 6825
          }
        ],
        "start": 6812,
        "end": 6827
      },
      "declare": false,
      "start": 6786,
      "end": 6827
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J14",
        "optional": false,
        "typeAnnotation": null,
        "start": 6838,
        "end": 6841
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both14",
            "optional": false,
            "typeAnnotation": null,
            "start": 6850,
            "end": 6856
          },
          "typeArguments": null,
          "start": 6850,
          "end": 6856
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 6857,
        "end": 6859
      },
      "declare": false,
      "start": 6828,
      "end": 6859
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both14",
        "optional": false,
        "typeAnnotation": null,
        "start": 6865,
        "end": 6871
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C14",
              "optional": false,
              "typeAnnotation": null,
              "start": 6874,
              "end": 6877
            },
            "typeArguments": null,
            "start": 6874,
            "end": 6877
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D14",
              "optional": false,
              "typeAnnotation": null,
              "start": 6880,
              "end": 6883
            },
            "typeArguments": null,
            "start": 6880,
            "end": 6883
          }
        ],
        "start": 6874,
        "end": 6883
      },
      "declare": false,
      "start": 6860,
      "end": 6884
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C15",
        "optional": false,
        "typeAnnotation": null,
        "start": 6895,
        "end": 6898
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J14",
            "optional": false,
            "typeAnnotation": null,
            "start": 6907,
            "end": 6910
          },
          "typeArguments": null,
          "start": 6907,
          "end": 6910
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
              "name": "c15",
              "optional": false,
              "typeAnnotation": null,
              "start": 6913,
              "end": 6916
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6918,
                "end": 6924
              },
              "start": 6916,
              "end": 6924
            },
            "accessibility": null,
            "static": false,
            "start": 6913,
            "end": 6924
          }
        ],
        "start": 6911,
        "end": 6926
      },
      "declare": false,
      "start": 6885,
      "end": 6926
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D15",
        "optional": false,
        "typeAnnotation": null,
        "start": 6937,
        "end": 6940
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J14",
            "optional": false,
            "typeAnnotation": null,
            "start": 6949,
            "end": 6952
          },
          "typeArguments": null,
          "start": 6949,
          "end": 6952
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
              "name": "d15",
              "optional": false,
              "typeAnnotation": null,
              "start": 6955,
              "end": 6958
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6960,
                "end": 6966
              },
              "start": 6958,
              "end": 6966
            },
            "accessibility": null,
            "static": false,
            "start": 6955,
            "end": 6966
          }
        ],
        "start": 6953,
        "end": 6968
      },
      "declare": false,
      "start": 6927,
      "end": 6968
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J15",
        "optional": false,
        "typeAnnotation": null,
        "start": 6979,
        "end": 6982
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both15",
            "optional": false,
            "typeAnnotation": null,
            "start": 6991,
            "end": 6997
          },
          "typeArguments": null,
          "start": 6991,
          "end": 6997
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 6998,
        "end": 7000
      },
      "declare": false,
      "start": 6969,
      "end": 7000
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both15",
        "optional": false,
        "typeAnnotation": null,
        "start": 7006,
        "end": 7012
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C15",
              "optional": false,
              "typeAnnotation": null,
              "start": 7015,
              "end": 7018
            },
            "typeArguments": null,
            "start": 7015,
            "end": 7018
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D15",
              "optional": false,
              "typeAnnotation": null,
              "start": 7021,
              "end": 7024
            },
            "typeArguments": null,
            "start": 7021,
            "end": 7024
          }
        ],
        "start": 7015,
        "end": 7024
      },
      "declare": false,
      "start": 7001,
      "end": 7025
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C16",
        "optional": false,
        "typeAnnotation": null,
        "start": 7036,
        "end": 7039
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J15",
            "optional": false,
            "typeAnnotation": null,
            "start": 7048,
            "end": 7051
          },
          "typeArguments": null,
          "start": 7048,
          "end": 7051
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
              "name": "c16",
              "optional": false,
              "typeAnnotation": null,
              "start": 7054,
              "end": 7057
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7059,
                "end": 7065
              },
              "start": 7057,
              "end": 7065
            },
            "accessibility": null,
            "static": false,
            "start": 7054,
            "end": 7065
          }
        ],
        "start": 7052,
        "end": 7067
      },
      "declare": false,
      "start": 7026,
      "end": 7067
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D16",
        "optional": false,
        "typeAnnotation": null,
        "start": 7078,
        "end": 7081
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J15",
            "optional": false,
            "typeAnnotation": null,
            "start": 7090,
            "end": 7093
          },
          "typeArguments": null,
          "start": 7090,
          "end": 7093
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
              "name": "d16",
              "optional": false,
              "typeAnnotation": null,
              "start": 7096,
              "end": 7099
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7101,
                "end": 7107
              },
              "start": 7099,
              "end": 7107
            },
            "accessibility": null,
            "static": false,
            "start": 7096,
            "end": 7107
          }
        ],
        "start": 7094,
        "end": 7109
      },
      "declare": false,
      "start": 7068,
      "end": 7109
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J16",
        "optional": false,
        "typeAnnotation": null,
        "start": 7120,
        "end": 7123
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both16",
            "optional": false,
            "typeAnnotation": null,
            "start": 7132,
            "end": 7138
          },
          "typeArguments": null,
          "start": 7132,
          "end": 7138
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 7139,
        "end": 7141
      },
      "declare": false,
      "start": 7110,
      "end": 7141
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both16",
        "optional": false,
        "typeAnnotation": null,
        "start": 7147,
        "end": 7153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C16",
              "optional": false,
              "typeAnnotation": null,
              "start": 7156,
              "end": 7159
            },
            "typeArguments": null,
            "start": 7156,
            "end": 7159
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D16",
              "optional": false,
              "typeAnnotation": null,
              "start": 7162,
              "end": 7165
            },
            "typeArguments": null,
            "start": 7162,
            "end": 7165
          }
        ],
        "start": 7156,
        "end": 7165
      },
      "declare": false,
      "start": 7142,
      "end": 7166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C17",
        "optional": false,
        "typeAnnotation": null,
        "start": 7177,
        "end": 7180
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J16",
            "optional": false,
            "typeAnnotation": null,
            "start": 7189,
            "end": 7192
          },
          "typeArguments": null,
          "start": 7189,
          "end": 7192
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
              "name": "c17",
              "optional": false,
              "typeAnnotation": null,
              "start": 7195,
              "end": 7198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7200,
                "end": 7206
              },
              "start": 7198,
              "end": 7206
            },
            "accessibility": null,
            "static": false,
            "start": 7195,
            "end": 7206
          }
        ],
        "start": 7193,
        "end": 7208
      },
      "declare": false,
      "start": 7167,
      "end": 7208
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D17",
        "optional": false,
        "typeAnnotation": null,
        "start": 7219,
        "end": 7222
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J16",
            "optional": false,
            "typeAnnotation": null,
            "start": 7231,
            "end": 7234
          },
          "typeArguments": null,
          "start": 7231,
          "end": 7234
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
              "name": "d17",
              "optional": false,
              "typeAnnotation": null,
              "start": 7237,
              "end": 7240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7242,
                "end": 7248
              },
              "start": 7240,
              "end": 7248
            },
            "accessibility": null,
            "static": false,
            "start": 7237,
            "end": 7248
          }
        ],
        "start": 7235,
        "end": 7250
      },
      "declare": false,
      "start": 7209,
      "end": 7250
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J17",
        "optional": false,
        "typeAnnotation": null,
        "start": 7261,
        "end": 7264
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both17",
            "optional": false,
            "typeAnnotation": null,
            "start": 7273,
            "end": 7279
          },
          "typeArguments": null,
          "start": 7273,
          "end": 7279
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 7280,
        "end": 7282
      },
      "declare": false,
      "start": 7251,
      "end": 7282
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both17",
        "optional": false,
        "typeAnnotation": null,
        "start": 7288,
        "end": 7294
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C17",
              "optional": false,
              "typeAnnotation": null,
              "start": 7297,
              "end": 7300
            },
            "typeArguments": null,
            "start": 7297,
            "end": 7300
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D17",
              "optional": false,
              "typeAnnotation": null,
              "start": 7303,
              "end": 7306
            },
            "typeArguments": null,
            "start": 7303,
            "end": 7306
          }
        ],
        "start": 7297,
        "end": 7306
      },
      "declare": false,
      "start": 7283,
      "end": 7307
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C18",
        "optional": false,
        "typeAnnotation": null,
        "start": 7318,
        "end": 7321
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J17",
            "optional": false,
            "typeAnnotation": null,
            "start": 7330,
            "end": 7333
          },
          "typeArguments": null,
          "start": 7330,
          "end": 7333
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
              "name": "c18",
              "optional": false,
              "typeAnnotation": null,
              "start": 7336,
              "end": 7339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7341,
                "end": 7347
              },
              "start": 7339,
              "end": 7347
            },
            "accessibility": null,
            "static": false,
            "start": 7336,
            "end": 7347
          }
        ],
        "start": 7334,
        "end": 7349
      },
      "declare": false,
      "start": 7308,
      "end": 7349
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D18",
        "optional": false,
        "typeAnnotation": null,
        "start": 7360,
        "end": 7363
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J17",
            "optional": false,
            "typeAnnotation": null,
            "start": 7372,
            "end": 7375
          },
          "typeArguments": null,
          "start": 7372,
          "end": 7375
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
              "name": "d18",
              "optional": false,
              "typeAnnotation": null,
              "start": 7378,
              "end": 7381
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7383,
                "end": 7389
              },
              "start": 7381,
              "end": 7389
            },
            "accessibility": null,
            "static": false,
            "start": 7378,
            "end": 7389
          }
        ],
        "start": 7376,
        "end": 7391
      },
      "declare": false,
      "start": 7350,
      "end": 7391
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J18",
        "optional": false,
        "typeAnnotation": null,
        "start": 7402,
        "end": 7405
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both18",
            "optional": false,
            "typeAnnotation": null,
            "start": 7414,
            "end": 7420
          },
          "typeArguments": null,
          "start": 7414,
          "end": 7420
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 7421,
        "end": 7423
      },
      "declare": false,
      "start": 7392,
      "end": 7423
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both18",
        "optional": false,
        "typeAnnotation": null,
        "start": 7429,
        "end": 7435
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C18",
              "optional": false,
              "typeAnnotation": null,
              "start": 7438,
              "end": 7441
            },
            "typeArguments": null,
            "start": 7438,
            "end": 7441
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D18",
              "optional": false,
              "typeAnnotation": null,
              "start": 7444,
              "end": 7447
            },
            "typeArguments": null,
            "start": 7444,
            "end": 7447
          }
        ],
        "start": 7438,
        "end": 7447
      },
      "declare": false,
      "start": 7424,
      "end": 7448
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C19",
        "optional": false,
        "typeAnnotation": null,
        "start": 7459,
        "end": 7462
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J18",
            "optional": false,
            "typeAnnotation": null,
            "start": 7471,
            "end": 7474
          },
          "typeArguments": null,
          "start": 7471,
          "end": 7474
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
              "name": "c19",
              "optional": false,
              "typeAnnotation": null,
              "start": 7477,
              "end": 7480
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7482,
                "end": 7488
              },
              "start": 7480,
              "end": 7488
            },
            "accessibility": null,
            "static": false,
            "start": 7477,
            "end": 7488
          }
        ],
        "start": 7475,
        "end": 7490
      },
      "declare": false,
      "start": 7449,
      "end": 7490
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D19",
        "optional": false,
        "typeAnnotation": null,
        "start": 7501,
        "end": 7504
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J18",
            "optional": false,
            "typeAnnotation": null,
            "start": 7513,
            "end": 7516
          },
          "typeArguments": null,
          "start": 7513,
          "end": 7516
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
              "name": "d19",
              "optional": false,
              "typeAnnotation": null,
              "start": 7519,
              "end": 7522
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7524,
                "end": 7530
              },
              "start": 7522,
              "end": 7530
            },
            "accessibility": null,
            "static": false,
            "start": 7519,
            "end": 7530
          }
        ],
        "start": 7517,
        "end": 7532
      },
      "declare": false,
      "start": 7491,
      "end": 7532
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J19",
        "optional": false,
        "typeAnnotation": null,
        "start": 7543,
        "end": 7546
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both19",
            "optional": false,
            "typeAnnotation": null,
            "start": 7555,
            "end": 7561
          },
          "typeArguments": null,
          "start": 7555,
          "end": 7561
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 7562,
        "end": 7564
      },
      "declare": false,
      "start": 7533,
      "end": 7564
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both19",
        "optional": false,
        "typeAnnotation": null,
        "start": 7570,
        "end": 7576
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C19",
              "optional": false,
              "typeAnnotation": null,
              "start": 7579,
              "end": 7582
            },
            "typeArguments": null,
            "start": 7579,
            "end": 7582
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D19",
              "optional": false,
              "typeAnnotation": null,
              "start": 7585,
              "end": 7588
            },
            "typeArguments": null,
            "start": 7585,
            "end": 7588
          }
        ],
        "start": 7579,
        "end": 7588
      },
      "declare": false,
      "start": 7565,
      "end": 7589
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C20",
        "optional": false,
        "typeAnnotation": null,
        "start": 7600,
        "end": 7603
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J19",
            "optional": false,
            "typeAnnotation": null,
            "start": 7612,
            "end": 7615
          },
          "typeArguments": null,
          "start": 7612,
          "end": 7615
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
              "name": "c20",
              "optional": false,
              "typeAnnotation": null,
              "start": 7618,
              "end": 7621
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7623,
                "end": 7629
              },
              "start": 7621,
              "end": 7629
            },
            "accessibility": null,
            "static": false,
            "start": 7618,
            "end": 7629
          }
        ],
        "start": 7616,
        "end": 7631
      },
      "declare": false,
      "start": 7590,
      "end": 7631
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D20",
        "optional": false,
        "typeAnnotation": null,
        "start": 7642,
        "end": 7645
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J19",
            "optional": false,
            "typeAnnotation": null,
            "start": 7654,
            "end": 7657
          },
          "typeArguments": null,
          "start": 7654,
          "end": 7657
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
              "name": "d20",
              "optional": false,
              "typeAnnotation": null,
              "start": 7660,
              "end": 7663
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7665,
                "end": 7671
              },
              "start": 7663,
              "end": 7671
            },
            "accessibility": null,
            "static": false,
            "start": 7660,
            "end": 7671
          }
        ],
        "start": 7658,
        "end": 7673
      },
      "declare": false,
      "start": 7632,
      "end": 7673
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J20",
        "optional": false,
        "typeAnnotation": null,
        "start": 7684,
        "end": 7687
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both20",
            "optional": false,
            "typeAnnotation": null,
            "start": 7696,
            "end": 7702
          },
          "typeArguments": null,
          "start": 7696,
          "end": 7702
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 7703,
        "end": 7705
      },
      "declare": false,
      "start": 7674,
      "end": 7705
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both20",
        "optional": false,
        "typeAnnotation": null,
        "start": 7711,
        "end": 7717
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C20",
              "optional": false,
              "typeAnnotation": null,
              "start": 7720,
              "end": 7723
            },
            "typeArguments": null,
            "start": 7720,
            "end": 7723
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D20",
              "optional": false,
              "typeAnnotation": null,
              "start": 7726,
              "end": 7729
            },
            "typeArguments": null,
            "start": 7726,
            "end": 7729
          }
        ],
        "start": 7720,
        "end": 7729
      },
      "declare": false,
      "start": 7706,
      "end": 7730
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C21",
        "optional": false,
        "typeAnnotation": null,
        "start": 7741,
        "end": 7744
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J20",
            "optional": false,
            "typeAnnotation": null,
            "start": 7753,
            "end": 7756
          },
          "typeArguments": null,
          "start": 7753,
          "end": 7756
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
              "name": "c21",
              "optional": false,
              "typeAnnotation": null,
              "start": 7759,
              "end": 7762
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7764,
                "end": 7770
              },
              "start": 7762,
              "end": 7770
            },
            "accessibility": null,
            "static": false,
            "start": 7759,
            "end": 7770
          }
        ],
        "start": 7757,
        "end": 7772
      },
      "declare": false,
      "start": 7731,
      "end": 7772
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D21",
        "optional": false,
        "typeAnnotation": null,
        "start": 7783,
        "end": 7786
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J20",
            "optional": false,
            "typeAnnotation": null,
            "start": 7795,
            "end": 7798
          },
          "typeArguments": null,
          "start": 7795,
          "end": 7798
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
              "name": "d21",
              "optional": false,
              "typeAnnotation": null,
              "start": 7801,
              "end": 7804
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7806,
                "end": 7812
              },
              "start": 7804,
              "end": 7812
            },
            "accessibility": null,
            "static": false,
            "start": 7801,
            "end": 7812
          }
        ],
        "start": 7799,
        "end": 7814
      },
      "declare": false,
      "start": 7773,
      "end": 7814
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J21",
        "optional": false,
        "typeAnnotation": null,
        "start": 7825,
        "end": 7828
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both21",
            "optional": false,
            "typeAnnotation": null,
            "start": 7837,
            "end": 7843
          },
          "typeArguments": null,
          "start": 7837,
          "end": 7843
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 7844,
        "end": 7846
      },
      "declare": false,
      "start": 7815,
      "end": 7846
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both21",
        "optional": false,
        "typeAnnotation": null,
        "start": 7852,
        "end": 7858
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C21",
              "optional": false,
              "typeAnnotation": null,
              "start": 7861,
              "end": 7864
            },
            "typeArguments": null,
            "start": 7861,
            "end": 7864
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D21",
              "optional": false,
              "typeAnnotation": null,
              "start": 7867,
              "end": 7870
            },
            "typeArguments": null,
            "start": 7867,
            "end": 7870
          }
        ],
        "start": 7861,
        "end": 7870
      },
      "declare": false,
      "start": 7847,
      "end": 7871
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C22",
        "optional": false,
        "typeAnnotation": null,
        "start": 7882,
        "end": 7885
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J21",
            "optional": false,
            "typeAnnotation": null,
            "start": 7894,
            "end": 7897
          },
          "typeArguments": null,
          "start": 7894,
          "end": 7897
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
              "name": "c22",
              "optional": false,
              "typeAnnotation": null,
              "start": 7900,
              "end": 7903
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7905,
                "end": 7911
              },
              "start": 7903,
              "end": 7911
            },
            "accessibility": null,
            "static": false,
            "start": 7900,
            "end": 7911
          }
        ],
        "start": 7898,
        "end": 7913
      },
      "declare": false,
      "start": 7872,
      "end": 7913
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D22",
        "optional": false,
        "typeAnnotation": null,
        "start": 7924,
        "end": 7927
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J21",
            "optional": false,
            "typeAnnotation": null,
            "start": 7936,
            "end": 7939
          },
          "typeArguments": null,
          "start": 7936,
          "end": 7939
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
              "name": "d22",
              "optional": false,
              "typeAnnotation": null,
              "start": 7942,
              "end": 7945
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7947,
                "end": 7953
              },
              "start": 7945,
              "end": 7953
            },
            "accessibility": null,
            "static": false,
            "start": 7942,
            "end": 7953
          }
        ],
        "start": 7940,
        "end": 7955
      },
      "declare": false,
      "start": 7914,
      "end": 7955
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J22",
        "optional": false,
        "typeAnnotation": null,
        "start": 7966,
        "end": 7969
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both22",
            "optional": false,
            "typeAnnotation": null,
            "start": 7978,
            "end": 7984
          },
          "typeArguments": null,
          "start": 7978,
          "end": 7984
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 7985,
        "end": 7987
      },
      "declare": false,
      "start": 7956,
      "end": 7987
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both22",
        "optional": false,
        "typeAnnotation": null,
        "start": 7993,
        "end": 7999
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C22",
              "optional": false,
              "typeAnnotation": null,
              "start": 8002,
              "end": 8005
            },
            "typeArguments": null,
            "start": 8002,
            "end": 8005
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D22",
              "optional": false,
              "typeAnnotation": null,
              "start": 8008,
              "end": 8011
            },
            "typeArguments": null,
            "start": 8008,
            "end": 8011
          }
        ],
        "start": 8002,
        "end": 8011
      },
      "declare": false,
      "start": 7988,
      "end": 8012
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C23",
        "optional": false,
        "typeAnnotation": null,
        "start": 8023,
        "end": 8026
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J22",
            "optional": false,
            "typeAnnotation": null,
            "start": 8035,
            "end": 8038
          },
          "typeArguments": null,
          "start": 8035,
          "end": 8038
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
              "name": "c23",
              "optional": false,
              "typeAnnotation": null,
              "start": 8041,
              "end": 8044
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8046,
                "end": 8052
              },
              "start": 8044,
              "end": 8052
            },
            "accessibility": null,
            "static": false,
            "start": 8041,
            "end": 8052
          }
        ],
        "start": 8039,
        "end": 8054
      },
      "declare": false,
      "start": 8013,
      "end": 8054
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D23",
        "optional": false,
        "typeAnnotation": null,
        "start": 8065,
        "end": 8068
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J22",
            "optional": false,
            "typeAnnotation": null,
            "start": 8077,
            "end": 8080
          },
          "typeArguments": null,
          "start": 8077,
          "end": 8080
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
              "name": "d23",
              "optional": false,
              "typeAnnotation": null,
              "start": 8083,
              "end": 8086
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8088,
                "end": 8094
              },
              "start": 8086,
              "end": 8094
            },
            "accessibility": null,
            "static": false,
            "start": 8083,
            "end": 8094
          }
        ],
        "start": 8081,
        "end": 8096
      },
      "declare": false,
      "start": 8055,
      "end": 8096
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J23",
        "optional": false,
        "typeAnnotation": null,
        "start": 8107,
        "end": 8110
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both23",
            "optional": false,
            "typeAnnotation": null,
            "start": 8119,
            "end": 8125
          },
          "typeArguments": null,
          "start": 8119,
          "end": 8125
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 8126,
        "end": 8128
      },
      "declare": false,
      "start": 8097,
      "end": 8128
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both23",
        "optional": false,
        "typeAnnotation": null,
        "start": 8134,
        "end": 8140
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C23",
              "optional": false,
              "typeAnnotation": null,
              "start": 8143,
              "end": 8146
            },
            "typeArguments": null,
            "start": 8143,
            "end": 8146
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D23",
              "optional": false,
              "typeAnnotation": null,
              "start": 8149,
              "end": 8152
            },
            "typeArguments": null,
            "start": 8149,
            "end": 8152
          }
        ],
        "start": 8143,
        "end": 8152
      },
      "declare": false,
      "start": 8129,
      "end": 8153
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C24",
        "optional": false,
        "typeAnnotation": null,
        "start": 8164,
        "end": 8167
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J23",
            "optional": false,
            "typeAnnotation": null,
            "start": 8176,
            "end": 8179
          },
          "typeArguments": null,
          "start": 8176,
          "end": 8179
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
              "name": "c24",
              "optional": false,
              "typeAnnotation": null,
              "start": 8182,
              "end": 8185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8187,
                "end": 8193
              },
              "start": 8185,
              "end": 8193
            },
            "accessibility": null,
            "static": false,
            "start": 8182,
            "end": 8193
          }
        ],
        "start": 8180,
        "end": 8195
      },
      "declare": false,
      "start": 8154,
      "end": 8195
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D24",
        "optional": false,
        "typeAnnotation": null,
        "start": 8206,
        "end": 8209
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J23",
            "optional": false,
            "typeAnnotation": null,
            "start": 8218,
            "end": 8221
          },
          "typeArguments": null,
          "start": 8218,
          "end": 8221
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
              "name": "d24",
              "optional": false,
              "typeAnnotation": null,
              "start": 8224,
              "end": 8227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8229,
                "end": 8235
              },
              "start": 8227,
              "end": 8235
            },
            "accessibility": null,
            "static": false,
            "start": 8224,
            "end": 8235
          }
        ],
        "start": 8222,
        "end": 8237
      },
      "declare": false,
      "start": 8196,
      "end": 8237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J24",
        "optional": false,
        "typeAnnotation": null,
        "start": 8248,
        "end": 8251
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both24",
            "optional": false,
            "typeAnnotation": null,
            "start": 8260,
            "end": 8266
          },
          "typeArguments": null,
          "start": 8260,
          "end": 8266
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 8267,
        "end": 8269
      },
      "declare": false,
      "start": 8238,
      "end": 8269
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both24",
        "optional": false,
        "typeAnnotation": null,
        "start": 8275,
        "end": 8281
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C24",
              "optional": false,
              "typeAnnotation": null,
              "start": 8284,
              "end": 8287
            },
            "typeArguments": null,
            "start": 8284,
            "end": 8287
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D24",
              "optional": false,
              "typeAnnotation": null,
              "start": 8290,
              "end": 8293
            },
            "typeArguments": null,
            "start": 8290,
            "end": 8293
          }
        ],
        "start": 8284,
        "end": 8293
      },
      "declare": false,
      "start": 8270,
      "end": 8294
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C25",
        "optional": false,
        "typeAnnotation": null,
        "start": 8305,
        "end": 8308
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J24",
            "optional": false,
            "typeAnnotation": null,
            "start": 8317,
            "end": 8320
          },
          "typeArguments": null,
          "start": 8317,
          "end": 8320
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
              "name": "c25",
              "optional": false,
              "typeAnnotation": null,
              "start": 8323,
              "end": 8326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8328,
                "end": 8334
              },
              "start": 8326,
              "end": 8334
            },
            "accessibility": null,
            "static": false,
            "start": 8323,
            "end": 8334
          }
        ],
        "start": 8321,
        "end": 8336
      },
      "declare": false,
      "start": 8295,
      "end": 8336
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D25",
        "optional": false,
        "typeAnnotation": null,
        "start": 8347,
        "end": 8350
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J24",
            "optional": false,
            "typeAnnotation": null,
            "start": 8359,
            "end": 8362
          },
          "typeArguments": null,
          "start": 8359,
          "end": 8362
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
              "name": "d25",
              "optional": false,
              "typeAnnotation": null,
              "start": 8365,
              "end": 8368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8370,
                "end": 8376
              },
              "start": 8368,
              "end": 8376
            },
            "accessibility": null,
            "static": false,
            "start": 8365,
            "end": 8376
          }
        ],
        "start": 8363,
        "end": 8378
      },
      "declare": false,
      "start": 8337,
      "end": 8378
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J25",
        "optional": false,
        "typeAnnotation": null,
        "start": 8389,
        "end": 8392
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both25",
            "optional": false,
            "typeAnnotation": null,
            "start": 8401,
            "end": 8407
          },
          "typeArguments": null,
          "start": 8401,
          "end": 8407
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 8408,
        "end": 8410
      },
      "declare": false,
      "start": 8379,
      "end": 8410
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both25",
        "optional": false,
        "typeAnnotation": null,
        "start": 8416,
        "end": 8422
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C25",
              "optional": false,
              "typeAnnotation": null,
              "start": 8425,
              "end": 8428
            },
            "typeArguments": null,
            "start": 8425,
            "end": 8428
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D25",
              "optional": false,
              "typeAnnotation": null,
              "start": 8431,
              "end": 8434
            },
            "typeArguments": null,
            "start": 8431,
            "end": 8434
          }
        ],
        "start": 8425,
        "end": 8434
      },
      "declare": false,
      "start": 8411,
      "end": 8435
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C26",
        "optional": false,
        "typeAnnotation": null,
        "start": 8446,
        "end": 8449
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J25",
            "optional": false,
            "typeAnnotation": null,
            "start": 8458,
            "end": 8461
          },
          "typeArguments": null,
          "start": 8458,
          "end": 8461
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
              "name": "c26",
              "optional": false,
              "typeAnnotation": null,
              "start": 8464,
              "end": 8467
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8469,
                "end": 8475
              },
              "start": 8467,
              "end": 8475
            },
            "accessibility": null,
            "static": false,
            "start": 8464,
            "end": 8475
          }
        ],
        "start": 8462,
        "end": 8477
      },
      "declare": false,
      "start": 8436,
      "end": 8477
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D26",
        "optional": false,
        "typeAnnotation": null,
        "start": 8488,
        "end": 8491
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J25",
            "optional": false,
            "typeAnnotation": null,
            "start": 8500,
            "end": 8503
          },
          "typeArguments": null,
          "start": 8500,
          "end": 8503
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
              "name": "d26",
              "optional": false,
              "typeAnnotation": null,
              "start": 8506,
              "end": 8509
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8511,
                "end": 8517
              },
              "start": 8509,
              "end": 8517
            },
            "accessibility": null,
            "static": false,
            "start": 8506,
            "end": 8517
          }
        ],
        "start": 8504,
        "end": 8519
      },
      "declare": false,
      "start": 8478,
      "end": 8519
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J26",
        "optional": false,
        "typeAnnotation": null,
        "start": 8530,
        "end": 8533
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both26",
            "optional": false,
            "typeAnnotation": null,
            "start": 8542,
            "end": 8548
          },
          "typeArguments": null,
          "start": 8542,
          "end": 8548
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 8549,
        "end": 8551
      },
      "declare": false,
      "start": 8520,
      "end": 8551
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both26",
        "optional": false,
        "typeAnnotation": null,
        "start": 8557,
        "end": 8563
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C26",
              "optional": false,
              "typeAnnotation": null,
              "start": 8566,
              "end": 8569
            },
            "typeArguments": null,
            "start": 8566,
            "end": 8569
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D26",
              "optional": false,
              "typeAnnotation": null,
              "start": 8572,
              "end": 8575
            },
            "typeArguments": null,
            "start": 8572,
            "end": 8575
          }
        ],
        "start": 8566,
        "end": 8575
      },
      "declare": false,
      "start": 8552,
      "end": 8576
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C27",
        "optional": false,
        "typeAnnotation": null,
        "start": 8587,
        "end": 8590
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J26",
            "optional": false,
            "typeAnnotation": null,
            "start": 8599,
            "end": 8602
          },
          "typeArguments": null,
          "start": 8599,
          "end": 8602
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
              "name": "c27",
              "optional": false,
              "typeAnnotation": null,
              "start": 8605,
              "end": 8608
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8610,
                "end": 8616
              },
              "start": 8608,
              "end": 8616
            },
            "accessibility": null,
            "static": false,
            "start": 8605,
            "end": 8616
          }
        ],
        "start": 8603,
        "end": 8618
      },
      "declare": false,
      "start": 8577,
      "end": 8618
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D27",
        "optional": false,
        "typeAnnotation": null,
        "start": 8629,
        "end": 8632
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J26",
            "optional": false,
            "typeAnnotation": null,
            "start": 8641,
            "end": 8644
          },
          "typeArguments": null,
          "start": 8641,
          "end": 8644
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
              "name": "d27",
              "optional": false,
              "typeAnnotation": null,
              "start": 8647,
              "end": 8650
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8652,
                "end": 8658
              },
              "start": 8650,
              "end": 8658
            },
            "accessibility": null,
            "static": false,
            "start": 8647,
            "end": 8658
          }
        ],
        "start": 8645,
        "end": 8660
      },
      "declare": false,
      "start": 8619,
      "end": 8660
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J27",
        "optional": false,
        "typeAnnotation": null,
        "start": 8671,
        "end": 8674
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both27",
            "optional": false,
            "typeAnnotation": null,
            "start": 8683,
            "end": 8689
          },
          "typeArguments": null,
          "start": 8683,
          "end": 8689
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 8690,
        "end": 8692
      },
      "declare": false,
      "start": 8661,
      "end": 8692
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both27",
        "optional": false,
        "typeAnnotation": null,
        "start": 8698,
        "end": 8704
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C27",
              "optional": false,
              "typeAnnotation": null,
              "start": 8707,
              "end": 8710
            },
            "typeArguments": null,
            "start": 8707,
            "end": 8710
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D27",
              "optional": false,
              "typeAnnotation": null,
              "start": 8713,
              "end": 8716
            },
            "typeArguments": null,
            "start": 8713,
            "end": 8716
          }
        ],
        "start": 8707,
        "end": 8716
      },
      "declare": false,
      "start": 8693,
      "end": 8717
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C28",
        "optional": false,
        "typeAnnotation": null,
        "start": 8728,
        "end": 8731
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J27",
            "optional": false,
            "typeAnnotation": null,
            "start": 8740,
            "end": 8743
          },
          "typeArguments": null,
          "start": 8740,
          "end": 8743
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
              "name": "c28",
              "optional": false,
              "typeAnnotation": null,
              "start": 8746,
              "end": 8749
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8751,
                "end": 8757
              },
              "start": 8749,
              "end": 8757
            },
            "accessibility": null,
            "static": false,
            "start": 8746,
            "end": 8757
          }
        ],
        "start": 8744,
        "end": 8759
      },
      "declare": false,
      "start": 8718,
      "end": 8759
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D28",
        "optional": false,
        "typeAnnotation": null,
        "start": 8770,
        "end": 8773
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J27",
            "optional": false,
            "typeAnnotation": null,
            "start": 8782,
            "end": 8785
          },
          "typeArguments": null,
          "start": 8782,
          "end": 8785
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
              "name": "d28",
              "optional": false,
              "typeAnnotation": null,
              "start": 8788,
              "end": 8791
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8793,
                "end": 8799
              },
              "start": 8791,
              "end": 8799
            },
            "accessibility": null,
            "static": false,
            "start": 8788,
            "end": 8799
          }
        ],
        "start": 8786,
        "end": 8801
      },
      "declare": false,
      "start": 8760,
      "end": 8801
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J28",
        "optional": false,
        "typeAnnotation": null,
        "start": 8812,
        "end": 8815
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both28",
            "optional": false,
            "typeAnnotation": null,
            "start": 8824,
            "end": 8830
          },
          "typeArguments": null,
          "start": 8824,
          "end": 8830
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 8831,
        "end": 8833
      },
      "declare": false,
      "start": 8802,
      "end": 8833
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both28",
        "optional": false,
        "typeAnnotation": null,
        "start": 8839,
        "end": 8845
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C28",
              "optional": false,
              "typeAnnotation": null,
              "start": 8848,
              "end": 8851
            },
            "typeArguments": null,
            "start": 8848,
            "end": 8851
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D28",
              "optional": false,
              "typeAnnotation": null,
              "start": 8854,
              "end": 8857
            },
            "typeArguments": null,
            "start": 8854,
            "end": 8857
          }
        ],
        "start": 8848,
        "end": 8857
      },
      "declare": false,
      "start": 8834,
      "end": 8858
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C29",
        "optional": false,
        "typeAnnotation": null,
        "start": 8869,
        "end": 8872
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J28",
            "optional": false,
            "typeAnnotation": null,
            "start": 8881,
            "end": 8884
          },
          "typeArguments": null,
          "start": 8881,
          "end": 8884
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
              "name": "c29",
              "optional": false,
              "typeAnnotation": null,
              "start": 8887,
              "end": 8890
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8892,
                "end": 8898
              },
              "start": 8890,
              "end": 8898
            },
            "accessibility": null,
            "static": false,
            "start": 8887,
            "end": 8898
          }
        ],
        "start": 8885,
        "end": 8900
      },
      "declare": false,
      "start": 8859,
      "end": 8900
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D29",
        "optional": false,
        "typeAnnotation": null,
        "start": 8911,
        "end": 8914
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J28",
            "optional": false,
            "typeAnnotation": null,
            "start": 8923,
            "end": 8926
          },
          "typeArguments": null,
          "start": 8923,
          "end": 8926
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
              "name": "d29",
              "optional": false,
              "typeAnnotation": null,
              "start": 8929,
              "end": 8932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8934,
                "end": 8940
              },
              "start": 8932,
              "end": 8940
            },
            "accessibility": null,
            "static": false,
            "start": 8929,
            "end": 8940
          }
        ],
        "start": 8927,
        "end": 8942
      },
      "declare": false,
      "start": 8901,
      "end": 8942
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J29",
        "optional": false,
        "typeAnnotation": null,
        "start": 8953,
        "end": 8956
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both29",
            "optional": false,
            "typeAnnotation": null,
            "start": 8965,
            "end": 8971
          },
          "typeArguments": null,
          "start": 8965,
          "end": 8971
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 8972,
        "end": 8974
      },
      "declare": false,
      "start": 8943,
      "end": 8974
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both29",
        "optional": false,
        "typeAnnotation": null,
        "start": 8980,
        "end": 8986
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C29",
              "optional": false,
              "typeAnnotation": null,
              "start": 8989,
              "end": 8992
            },
            "typeArguments": null,
            "start": 8989,
            "end": 8992
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D29",
              "optional": false,
              "typeAnnotation": null,
              "start": 8995,
              "end": 8998
            },
            "typeArguments": null,
            "start": 8995,
            "end": 8998
          }
        ],
        "start": 8989,
        "end": 8998
      },
      "declare": false,
      "start": 8975,
      "end": 8999
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C30",
        "optional": false,
        "typeAnnotation": null,
        "start": 9010,
        "end": 9013
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J29",
            "optional": false,
            "typeAnnotation": null,
            "start": 9022,
            "end": 9025
          },
          "typeArguments": null,
          "start": 9022,
          "end": 9025
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
              "name": "c30",
              "optional": false,
              "typeAnnotation": null,
              "start": 9028,
              "end": 9031
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9033,
                "end": 9039
              },
              "start": 9031,
              "end": 9039
            },
            "accessibility": null,
            "static": false,
            "start": 9028,
            "end": 9039
          }
        ],
        "start": 9026,
        "end": 9041
      },
      "declare": false,
      "start": 9000,
      "end": 9041
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D30",
        "optional": false,
        "typeAnnotation": null,
        "start": 9052,
        "end": 9055
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J29",
            "optional": false,
            "typeAnnotation": null,
            "start": 9064,
            "end": 9067
          },
          "typeArguments": null,
          "start": 9064,
          "end": 9067
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
              "name": "d30",
              "optional": false,
              "typeAnnotation": null,
              "start": 9070,
              "end": 9073
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9075,
                "end": 9081
              },
              "start": 9073,
              "end": 9081
            },
            "accessibility": null,
            "static": false,
            "start": 9070,
            "end": 9081
          }
        ],
        "start": 9068,
        "end": 9083
      },
      "declare": false,
      "start": 9042,
      "end": 9083
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J30",
        "optional": false,
        "typeAnnotation": null,
        "start": 9094,
        "end": 9097
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both30",
            "optional": false,
            "typeAnnotation": null,
            "start": 9106,
            "end": 9112
          },
          "typeArguments": null,
          "start": 9106,
          "end": 9112
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 9113,
        "end": 9115
      },
      "declare": false,
      "start": 9084,
      "end": 9115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both30",
        "optional": false,
        "typeAnnotation": null,
        "start": 9121,
        "end": 9127
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C30",
              "optional": false,
              "typeAnnotation": null,
              "start": 9130,
              "end": 9133
            },
            "typeArguments": null,
            "start": 9130,
            "end": 9133
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D30",
              "optional": false,
              "typeAnnotation": null,
              "start": 9136,
              "end": 9139
            },
            "typeArguments": null,
            "start": 9136,
            "end": 9139
          }
        ],
        "start": 9130,
        "end": 9139
      },
      "declare": false,
      "start": 9116,
      "end": 9140
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C31",
        "optional": false,
        "typeAnnotation": null,
        "start": 9151,
        "end": 9154
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J30",
            "optional": false,
            "typeAnnotation": null,
            "start": 9163,
            "end": 9166
          },
          "typeArguments": null,
          "start": 9163,
          "end": 9166
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
              "name": "c31",
              "optional": false,
              "typeAnnotation": null,
              "start": 9169,
              "end": 9172
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9174,
                "end": 9180
              },
              "start": 9172,
              "end": 9180
            },
            "accessibility": null,
            "static": false,
            "start": 9169,
            "end": 9180
          }
        ],
        "start": 9167,
        "end": 9182
      },
      "declare": false,
      "start": 9141,
      "end": 9182
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D31",
        "optional": false,
        "typeAnnotation": null,
        "start": 9193,
        "end": 9196
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J30",
            "optional": false,
            "typeAnnotation": null,
            "start": 9205,
            "end": 9208
          },
          "typeArguments": null,
          "start": 9205,
          "end": 9208
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
              "name": "d31",
              "optional": false,
              "typeAnnotation": null,
              "start": 9211,
              "end": 9214
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9216,
                "end": 9222
              },
              "start": 9214,
              "end": 9222
            },
            "accessibility": null,
            "static": false,
            "start": 9211,
            "end": 9222
          }
        ],
        "start": 9209,
        "end": 9224
      },
      "declare": false,
      "start": 9183,
      "end": 9224
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J31",
        "optional": false,
        "typeAnnotation": null,
        "start": 9235,
        "end": 9238
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both31",
            "optional": false,
            "typeAnnotation": null,
            "start": 9247,
            "end": 9253
          },
          "typeArguments": null,
          "start": 9247,
          "end": 9253
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 9254,
        "end": 9256
      },
      "declare": false,
      "start": 9225,
      "end": 9256
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both31",
        "optional": false,
        "typeAnnotation": null,
        "start": 9262,
        "end": 9268
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C31",
              "optional": false,
              "typeAnnotation": null,
              "start": 9271,
              "end": 9274
            },
            "typeArguments": null,
            "start": 9271,
            "end": 9274
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D31",
              "optional": false,
              "typeAnnotation": null,
              "start": 9277,
              "end": 9280
            },
            "typeArguments": null,
            "start": 9277,
            "end": 9280
          }
        ],
        "start": 9271,
        "end": 9280
      },
      "declare": false,
      "start": 9257,
      "end": 9281
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C32",
        "optional": false,
        "typeAnnotation": null,
        "start": 9292,
        "end": 9295
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J31",
            "optional": false,
            "typeAnnotation": null,
            "start": 9304,
            "end": 9307
          },
          "typeArguments": null,
          "start": 9304,
          "end": 9307
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
              "name": "c32",
              "optional": false,
              "typeAnnotation": null,
              "start": 9310,
              "end": 9313
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9315,
                "end": 9321
              },
              "start": 9313,
              "end": 9321
            },
            "accessibility": null,
            "static": false,
            "start": 9310,
            "end": 9321
          }
        ],
        "start": 9308,
        "end": 9323
      },
      "declare": false,
      "start": 9282,
      "end": 9323
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D32",
        "optional": false,
        "typeAnnotation": null,
        "start": 9334,
        "end": 9337
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J31",
            "optional": false,
            "typeAnnotation": null,
            "start": 9346,
            "end": 9349
          },
          "typeArguments": null,
          "start": 9346,
          "end": 9349
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
              "name": "d32",
              "optional": false,
              "typeAnnotation": null,
              "start": 9352,
              "end": 9355
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9357,
                "end": 9363
              },
              "start": 9355,
              "end": 9363
            },
            "accessibility": null,
            "static": false,
            "start": 9352,
            "end": 9363
          }
        ],
        "start": 9350,
        "end": 9365
      },
      "declare": false,
      "start": 9324,
      "end": 9365
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J32",
        "optional": false,
        "typeAnnotation": null,
        "start": 9376,
        "end": 9379
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both32",
            "optional": false,
            "typeAnnotation": null,
            "start": 9388,
            "end": 9394
          },
          "typeArguments": null,
          "start": 9388,
          "end": 9394
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 9395,
        "end": 9397
      },
      "declare": false,
      "start": 9366,
      "end": 9397
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both32",
        "optional": false,
        "typeAnnotation": null,
        "start": 9403,
        "end": 9409
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C32",
              "optional": false,
              "typeAnnotation": null,
              "start": 9412,
              "end": 9415
            },
            "typeArguments": null,
            "start": 9412,
            "end": 9415
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D32",
              "optional": false,
              "typeAnnotation": null,
              "start": 9418,
              "end": 9421
            },
            "typeArguments": null,
            "start": 9418,
            "end": 9421
          }
        ],
        "start": 9412,
        "end": 9421
      },
      "declare": false,
      "start": 9398,
      "end": 9422
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C33",
        "optional": false,
        "typeAnnotation": null,
        "start": 9433,
        "end": 9436
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J32",
            "optional": false,
            "typeAnnotation": null,
            "start": 9445,
            "end": 9448
          },
          "typeArguments": null,
          "start": 9445,
          "end": 9448
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
              "name": "c33",
              "optional": false,
              "typeAnnotation": null,
              "start": 9451,
              "end": 9454
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9456,
                "end": 9462
              },
              "start": 9454,
              "end": 9462
            },
            "accessibility": null,
            "static": false,
            "start": 9451,
            "end": 9462
          }
        ],
        "start": 9449,
        "end": 9464
      },
      "declare": false,
      "start": 9423,
      "end": 9464
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D33",
        "optional": false,
        "typeAnnotation": null,
        "start": 9475,
        "end": 9478
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J32",
            "optional": false,
            "typeAnnotation": null,
            "start": 9487,
            "end": 9490
          },
          "typeArguments": null,
          "start": 9487,
          "end": 9490
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
              "name": "d33",
              "optional": false,
              "typeAnnotation": null,
              "start": 9493,
              "end": 9496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9498,
                "end": 9504
              },
              "start": 9496,
              "end": 9504
            },
            "accessibility": null,
            "static": false,
            "start": 9493,
            "end": 9504
          }
        ],
        "start": 9491,
        "end": 9506
      },
      "declare": false,
      "start": 9465,
      "end": 9506
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J33",
        "optional": false,
        "typeAnnotation": null,
        "start": 9517,
        "end": 9520
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both33",
            "optional": false,
            "typeAnnotation": null,
            "start": 9529,
            "end": 9535
          },
          "typeArguments": null,
          "start": 9529,
          "end": 9535
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 9536,
        "end": 9538
      },
      "declare": false,
      "start": 9507,
      "end": 9538
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both33",
        "optional": false,
        "typeAnnotation": null,
        "start": 9544,
        "end": 9550
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C33",
              "optional": false,
              "typeAnnotation": null,
              "start": 9553,
              "end": 9556
            },
            "typeArguments": null,
            "start": 9553,
            "end": 9556
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D33",
              "optional": false,
              "typeAnnotation": null,
              "start": 9559,
              "end": 9562
            },
            "typeArguments": null,
            "start": 9559,
            "end": 9562
          }
        ],
        "start": 9553,
        "end": 9562
      },
      "declare": false,
      "start": 9539,
      "end": 9563
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C34",
        "optional": false,
        "typeAnnotation": null,
        "start": 9574,
        "end": 9577
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J33",
            "optional": false,
            "typeAnnotation": null,
            "start": 9586,
            "end": 9589
          },
          "typeArguments": null,
          "start": 9586,
          "end": 9589
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
              "name": "c34",
              "optional": false,
              "typeAnnotation": null,
              "start": 9592,
              "end": 9595
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9597,
                "end": 9603
              },
              "start": 9595,
              "end": 9603
            },
            "accessibility": null,
            "static": false,
            "start": 9592,
            "end": 9603
          }
        ],
        "start": 9590,
        "end": 9605
      },
      "declare": false,
      "start": 9564,
      "end": 9605
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D34",
        "optional": false,
        "typeAnnotation": null,
        "start": 9616,
        "end": 9619
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J33",
            "optional": false,
            "typeAnnotation": null,
            "start": 9628,
            "end": 9631
          },
          "typeArguments": null,
          "start": 9628,
          "end": 9631
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
              "name": "d34",
              "optional": false,
              "typeAnnotation": null,
              "start": 9634,
              "end": 9637
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9639,
                "end": 9645
              },
              "start": 9637,
              "end": 9645
            },
            "accessibility": null,
            "static": false,
            "start": 9634,
            "end": 9645
          }
        ],
        "start": 9632,
        "end": 9647
      },
      "declare": false,
      "start": 9606,
      "end": 9647
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J34",
        "optional": false,
        "typeAnnotation": null,
        "start": 9658,
        "end": 9661
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both34",
            "optional": false,
            "typeAnnotation": null,
            "start": 9670,
            "end": 9676
          },
          "typeArguments": null,
          "start": 9670,
          "end": 9676
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 9677,
        "end": 9679
      },
      "declare": false,
      "start": 9648,
      "end": 9679
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both34",
        "optional": false,
        "typeAnnotation": null,
        "start": 9685,
        "end": 9691
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C34",
              "optional": false,
              "typeAnnotation": null,
              "start": 9694,
              "end": 9697
            },
            "typeArguments": null,
            "start": 9694,
            "end": 9697
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D34",
              "optional": false,
              "typeAnnotation": null,
              "start": 9700,
              "end": 9703
            },
            "typeArguments": null,
            "start": 9700,
            "end": 9703
          }
        ],
        "start": 9694,
        "end": 9703
      },
      "declare": false,
      "start": 9680,
      "end": 9704
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C35",
        "optional": false,
        "typeAnnotation": null,
        "start": 9715,
        "end": 9718
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J34",
            "optional": false,
            "typeAnnotation": null,
            "start": 9727,
            "end": 9730
          },
          "typeArguments": null,
          "start": 9727,
          "end": 9730
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
              "name": "c35",
              "optional": false,
              "typeAnnotation": null,
              "start": 9733,
              "end": 9736
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9738,
                "end": 9744
              },
              "start": 9736,
              "end": 9744
            },
            "accessibility": null,
            "static": false,
            "start": 9733,
            "end": 9744
          }
        ],
        "start": 9731,
        "end": 9746
      },
      "declare": false,
      "start": 9705,
      "end": 9746
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D35",
        "optional": false,
        "typeAnnotation": null,
        "start": 9757,
        "end": 9760
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J34",
            "optional": false,
            "typeAnnotation": null,
            "start": 9769,
            "end": 9772
          },
          "typeArguments": null,
          "start": 9769,
          "end": 9772
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
              "name": "d35",
              "optional": false,
              "typeAnnotation": null,
              "start": 9775,
              "end": 9778
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9780,
                "end": 9786
              },
              "start": 9778,
              "end": 9786
            },
            "accessibility": null,
            "static": false,
            "start": 9775,
            "end": 9786
          }
        ],
        "start": 9773,
        "end": 9788
      },
      "declare": false,
      "start": 9747,
      "end": 9788
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J35",
        "optional": false,
        "typeAnnotation": null,
        "start": 9799,
        "end": 9802
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both35",
            "optional": false,
            "typeAnnotation": null,
            "start": 9811,
            "end": 9817
          },
          "typeArguments": null,
          "start": 9811,
          "end": 9817
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 9818,
        "end": 9820
      },
      "declare": false,
      "start": 9789,
      "end": 9820
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both35",
        "optional": false,
        "typeAnnotation": null,
        "start": 9826,
        "end": 9832
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C35",
              "optional": false,
              "typeAnnotation": null,
              "start": 9835,
              "end": 9838
            },
            "typeArguments": null,
            "start": 9835,
            "end": 9838
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D35",
              "optional": false,
              "typeAnnotation": null,
              "start": 9841,
              "end": 9844
            },
            "typeArguments": null,
            "start": 9841,
            "end": 9844
          }
        ],
        "start": 9835,
        "end": 9844
      },
      "declare": false,
      "start": 9821,
      "end": 9845
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C36",
        "optional": false,
        "typeAnnotation": null,
        "start": 9856,
        "end": 9859
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J35",
            "optional": false,
            "typeAnnotation": null,
            "start": 9868,
            "end": 9871
          },
          "typeArguments": null,
          "start": 9868,
          "end": 9871
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
              "name": "c36",
              "optional": false,
              "typeAnnotation": null,
              "start": 9874,
              "end": 9877
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9879,
                "end": 9885
              },
              "start": 9877,
              "end": 9885
            },
            "accessibility": null,
            "static": false,
            "start": 9874,
            "end": 9885
          }
        ],
        "start": 9872,
        "end": 9887
      },
      "declare": false,
      "start": 9846,
      "end": 9887
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D36",
        "optional": false,
        "typeAnnotation": null,
        "start": 9898,
        "end": 9901
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J35",
            "optional": false,
            "typeAnnotation": null,
            "start": 9910,
            "end": 9913
          },
          "typeArguments": null,
          "start": 9910,
          "end": 9913
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
              "name": "d36",
              "optional": false,
              "typeAnnotation": null,
              "start": 9916,
              "end": 9919
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9921,
                "end": 9927
              },
              "start": 9919,
              "end": 9927
            },
            "accessibility": null,
            "static": false,
            "start": 9916,
            "end": 9927
          }
        ],
        "start": 9914,
        "end": 9929
      },
      "declare": false,
      "start": 9888,
      "end": 9929
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J36",
        "optional": false,
        "typeAnnotation": null,
        "start": 9940,
        "end": 9943
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both36",
            "optional": false,
            "typeAnnotation": null,
            "start": 9952,
            "end": 9958
          },
          "typeArguments": null,
          "start": 9952,
          "end": 9958
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 9959,
        "end": 9961
      },
      "declare": false,
      "start": 9930,
      "end": 9961
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both36",
        "optional": false,
        "typeAnnotation": null,
        "start": 9967,
        "end": 9973
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C36",
              "optional": false,
              "typeAnnotation": null,
              "start": 9976,
              "end": 9979
            },
            "typeArguments": null,
            "start": 9976,
            "end": 9979
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D36",
              "optional": false,
              "typeAnnotation": null,
              "start": 9982,
              "end": 9985
            },
            "typeArguments": null,
            "start": 9982,
            "end": 9985
          }
        ],
        "start": 9976,
        "end": 9985
      },
      "declare": false,
      "start": 9962,
      "end": 9986
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C37",
        "optional": false,
        "typeAnnotation": null,
        "start": 9997,
        "end": 10000
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J36",
            "optional": false,
            "typeAnnotation": null,
            "start": 10009,
            "end": 10012
          },
          "typeArguments": null,
          "start": 10009,
          "end": 10012
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
              "name": "c37",
              "optional": false,
              "typeAnnotation": null,
              "start": 10015,
              "end": 10018
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10020,
                "end": 10026
              },
              "start": 10018,
              "end": 10026
            },
            "accessibility": null,
            "static": false,
            "start": 10015,
            "end": 10026
          }
        ],
        "start": 10013,
        "end": 10028
      },
      "declare": false,
      "start": 9987,
      "end": 10028
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D37",
        "optional": false,
        "typeAnnotation": null,
        "start": 10039,
        "end": 10042
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J36",
            "optional": false,
            "typeAnnotation": null,
            "start": 10051,
            "end": 10054
          },
          "typeArguments": null,
          "start": 10051,
          "end": 10054
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
              "name": "d37",
              "optional": false,
              "typeAnnotation": null,
              "start": 10057,
              "end": 10060
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10062,
                "end": 10068
              },
              "start": 10060,
              "end": 10068
            },
            "accessibility": null,
            "static": false,
            "start": 10057,
            "end": 10068
          }
        ],
        "start": 10055,
        "end": 10070
      },
      "declare": false,
      "start": 10029,
      "end": 10070
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J37",
        "optional": false,
        "typeAnnotation": null,
        "start": 10081,
        "end": 10084
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both37",
            "optional": false,
            "typeAnnotation": null,
            "start": 10093,
            "end": 10099
          },
          "typeArguments": null,
          "start": 10093,
          "end": 10099
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10100,
        "end": 10102
      },
      "declare": false,
      "start": 10071,
      "end": 10102
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both37",
        "optional": false,
        "typeAnnotation": null,
        "start": 10108,
        "end": 10114
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C37",
              "optional": false,
              "typeAnnotation": null,
              "start": 10117,
              "end": 10120
            },
            "typeArguments": null,
            "start": 10117,
            "end": 10120
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D37",
              "optional": false,
              "typeAnnotation": null,
              "start": 10123,
              "end": 10126
            },
            "typeArguments": null,
            "start": 10123,
            "end": 10126
          }
        ],
        "start": 10117,
        "end": 10126
      },
      "declare": false,
      "start": 10103,
      "end": 10127
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C38",
        "optional": false,
        "typeAnnotation": null,
        "start": 10138,
        "end": 10141
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J37",
            "optional": false,
            "typeAnnotation": null,
            "start": 10150,
            "end": 10153
          },
          "typeArguments": null,
          "start": 10150,
          "end": 10153
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
              "name": "c38",
              "optional": false,
              "typeAnnotation": null,
              "start": 10156,
              "end": 10159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10161,
                "end": 10167
              },
              "start": 10159,
              "end": 10167
            },
            "accessibility": null,
            "static": false,
            "start": 10156,
            "end": 10167
          }
        ],
        "start": 10154,
        "end": 10169
      },
      "declare": false,
      "start": 10128,
      "end": 10169
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D38",
        "optional": false,
        "typeAnnotation": null,
        "start": 10180,
        "end": 10183
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J37",
            "optional": false,
            "typeAnnotation": null,
            "start": 10192,
            "end": 10195
          },
          "typeArguments": null,
          "start": 10192,
          "end": 10195
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
              "name": "d38",
              "optional": false,
              "typeAnnotation": null,
              "start": 10198,
              "end": 10201
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10203,
                "end": 10209
              },
              "start": 10201,
              "end": 10209
            },
            "accessibility": null,
            "static": false,
            "start": 10198,
            "end": 10209
          }
        ],
        "start": 10196,
        "end": 10211
      },
      "declare": false,
      "start": 10170,
      "end": 10211
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J38",
        "optional": false,
        "typeAnnotation": null,
        "start": 10222,
        "end": 10225
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both38",
            "optional": false,
            "typeAnnotation": null,
            "start": 10234,
            "end": 10240
          },
          "typeArguments": null,
          "start": 10234,
          "end": 10240
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10241,
        "end": 10243
      },
      "declare": false,
      "start": 10212,
      "end": 10243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both38",
        "optional": false,
        "typeAnnotation": null,
        "start": 10249,
        "end": 10255
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C38",
              "optional": false,
              "typeAnnotation": null,
              "start": 10258,
              "end": 10261
            },
            "typeArguments": null,
            "start": 10258,
            "end": 10261
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D38",
              "optional": false,
              "typeAnnotation": null,
              "start": 10264,
              "end": 10267
            },
            "typeArguments": null,
            "start": 10264,
            "end": 10267
          }
        ],
        "start": 10258,
        "end": 10267
      },
      "declare": false,
      "start": 10244,
      "end": 10268
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C39",
        "optional": false,
        "typeAnnotation": null,
        "start": 10279,
        "end": 10282
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J38",
            "optional": false,
            "typeAnnotation": null,
            "start": 10291,
            "end": 10294
          },
          "typeArguments": null,
          "start": 10291,
          "end": 10294
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
              "name": "c39",
              "optional": false,
              "typeAnnotation": null,
              "start": 10297,
              "end": 10300
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10302,
                "end": 10308
              },
              "start": 10300,
              "end": 10308
            },
            "accessibility": null,
            "static": false,
            "start": 10297,
            "end": 10308
          }
        ],
        "start": 10295,
        "end": 10310
      },
      "declare": false,
      "start": 10269,
      "end": 10310
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D39",
        "optional": false,
        "typeAnnotation": null,
        "start": 10321,
        "end": 10324
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J38",
            "optional": false,
            "typeAnnotation": null,
            "start": 10333,
            "end": 10336
          },
          "typeArguments": null,
          "start": 10333,
          "end": 10336
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
              "name": "d39",
              "optional": false,
              "typeAnnotation": null,
              "start": 10339,
              "end": 10342
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10344,
                "end": 10350
              },
              "start": 10342,
              "end": 10350
            },
            "accessibility": null,
            "static": false,
            "start": 10339,
            "end": 10350
          }
        ],
        "start": 10337,
        "end": 10352
      },
      "declare": false,
      "start": 10311,
      "end": 10352
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J39",
        "optional": false,
        "typeAnnotation": null,
        "start": 10363,
        "end": 10366
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both39",
            "optional": false,
            "typeAnnotation": null,
            "start": 10375,
            "end": 10381
          },
          "typeArguments": null,
          "start": 10375,
          "end": 10381
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10382,
        "end": 10384
      },
      "declare": false,
      "start": 10353,
      "end": 10384
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both39",
        "optional": false,
        "typeAnnotation": null,
        "start": 10390,
        "end": 10396
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C39",
              "optional": false,
              "typeAnnotation": null,
              "start": 10399,
              "end": 10402
            },
            "typeArguments": null,
            "start": 10399,
            "end": 10402
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D39",
              "optional": false,
              "typeAnnotation": null,
              "start": 10405,
              "end": 10408
            },
            "typeArguments": null,
            "start": 10405,
            "end": 10408
          }
        ],
        "start": 10399,
        "end": 10408
      },
      "declare": false,
      "start": 10385,
      "end": 10409
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C40",
        "optional": false,
        "typeAnnotation": null,
        "start": 10420,
        "end": 10423
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J39",
            "optional": false,
            "typeAnnotation": null,
            "start": 10432,
            "end": 10435
          },
          "typeArguments": null,
          "start": 10432,
          "end": 10435
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
              "name": "c40",
              "optional": false,
              "typeAnnotation": null,
              "start": 10438,
              "end": 10441
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10443,
                "end": 10449
              },
              "start": 10441,
              "end": 10449
            },
            "accessibility": null,
            "static": false,
            "start": 10438,
            "end": 10449
          }
        ],
        "start": 10436,
        "end": 10451
      },
      "declare": false,
      "start": 10410,
      "end": 10451
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D40",
        "optional": false,
        "typeAnnotation": null,
        "start": 10462,
        "end": 10465
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "J39",
            "optional": false,
            "typeAnnotation": null,
            "start": 10474,
            "end": 10477
          },
          "typeArguments": null,
          "start": 10474,
          "end": 10477
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
              "name": "d40",
              "optional": false,
              "typeAnnotation": null,
              "start": 10480,
              "end": 10483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10485,
                "end": 10491
              },
              "start": 10483,
              "end": 10491
            },
            "accessibility": null,
            "static": false,
            "start": 10480,
            "end": 10491
          }
        ],
        "start": 10478,
        "end": 10493
      },
      "declare": false,
      "start": 10452,
      "end": 10493
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J40",
        "optional": false,
        "typeAnnotation": null,
        "start": 10504,
        "end": 10507
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Both40",
            "optional": false,
            "typeAnnotation": null,
            "start": 10516,
            "end": 10522
          },
          "typeArguments": null,
          "start": 10516,
          "end": 10522
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10523,
        "end": 10525
      },
      "declare": false,
      "start": 10494,
      "end": 10525
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both40",
        "optional": false,
        "typeAnnotation": null,
        "start": 10531,
        "end": 10537
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C40",
              "optional": false,
              "typeAnnotation": null,
              "start": 10540,
              "end": 10543
            },
            "typeArguments": null,
            "start": 10540,
            "end": 10543
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D40",
              "optional": false,
              "typeAnnotation": null,
              "start": 10546,
              "end": 10549
            },
            "typeArguments": null,
            "start": 10546,
            "end": 10549
          }
        ],
        "start": 10540,
        "end": 10549
      },
      "declare": false,
      "start": 10526,
      "end": 10550
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
            "name": "viaIntersections",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "J40",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10584,
                  "end": 10587
                },
                "typeArguments": null,
                "start": 10584,
                "end": 10587
              },
              "start": 10582,
              "end": 10587
            },
            "start": 10566,
            "end": 10587
          },
          "init": null,
          "definite": false,
          "start": 10566,
          "end": 10587
        }
      ],
      "declare": true,
      "start": 10552,
      "end": 10588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "viaIntersections",
          "optional": false,
          "typeAnnotation": null,
          "start": 10589,
          "end": 10605
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "j0",
          "optional": false,
          "typeAnnotation": null,
          "start": 10606,
          "end": 10608
        },
        "optional": false,
        "computed": false,
        "start": 10589,
        "end": 10608
      },
      "directive": null,
      "start": 10589,
      "end": 10609
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Leaf",
        "optional": false,
        "typeAnnotation": null,
        "start": 10678,
        "end": 10682
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
              "name": "leaf",
              "optional": false,
              "typeAnnotation": null,
              "start": 10685,
              "end": 10689
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10691,
                "end": 10697
              },
              "start": 10689,
              "end": 10697
            },
            "accessibility": null,
            "static": false,
            "start": 10685,
            "end": 10697
          }
        ],
        "start": 10683,
        "end": 10699
      },
      "declare": false,
      "start": 10668,
      "end": 10699
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Left",
        "optional": false,
        "typeAnnotation": null,
        "start": 10710,
        "end": 10714
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Leaf",
            "optional": false,
            "typeAnnotation": null,
            "start": 10723,
            "end": 10727
          },
          "typeArguments": null,
          "start": 10723,
          "end": 10727
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10728,
        "end": 10730
      },
      "declare": false,
      "start": 10700,
      "end": 10730
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Right",
        "optional": false,
        "typeAnnotation": null,
        "start": 10741,
        "end": 10746
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Leaf",
            "optional": false,
            "typeAnnotation": null,
            "start": 10755,
            "end": 10759
          },
          "typeArguments": null,
          "start": 10755,
          "end": 10759
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10760,
        "end": 10762
      },
      "declare": false,
      "start": 10731,
      "end": 10762
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shared",
        "optional": false,
        "typeAnnotation": null,
        "start": 10773,
        "end": 10779
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Left",
            "optional": false,
            "typeAnnotation": null,
            "start": 10788,
            "end": 10792
          },
          "typeArguments": null,
          "start": 10788,
          "end": 10792
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Right",
            "optional": false,
            "typeAnnotation": null,
            "start": 10794,
            "end": 10799
          },
          "typeArguments": null,
          "start": 10794,
          "end": 10799
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10800,
        "end": 10802
      },
      "declare": false,
      "start": 10763,
      "end": 10802
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cycle1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10813,
        "end": 10819
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shared",
            "optional": false,
            "typeAnnotation": null,
            "start": 10828,
            "end": 10834
          },
          "typeArguments": null,
          "start": 10828,
          "end": 10834
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cycle2",
            "optional": false,
            "typeAnnotation": null,
            "start": 10836,
            "end": 10842
          },
          "typeArguments": null,
          "start": 10836,
          "end": 10842
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10843,
        "end": 10845
      },
      "declare": false,
      "start": 10803,
      "end": 10845
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cycle2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10856,
        "end": 10862
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Left",
            "optional": false,
            "typeAnnotation": null,
            "start": 10871,
            "end": 10875
          },
          "typeArguments": null,
          "start": 10871,
          "end": 10875
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cycle1",
            "optional": false,
            "typeAnnotation": null,
            "start": 10877,
            "end": 10883
          },
          "typeArguments": null,
          "start": 10877,
          "end": 10883
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10884,
        "end": 10886
      },
      "declare": false,
      "start": 10846,
      "end": 10886
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Self",
        "optional": false,
        "typeAnnotation": null,
        "start": 10897,
        "end": 10901
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shared",
            "optional": false,
            "typeAnnotation": null,
            "start": 10910,
            "end": 10916
          },
          "typeArguments": null,
          "start": 10910,
          "end": 10916
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Self",
            "optional": false,
            "typeAnnotation": null,
            "start": 10918,
            "end": 10922
          },
          "typeArguments": null,
          "start": 10918,
          "end": 10922
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 10923,
        "end": 10925
      },
      "declare": false,
      "start": 10887,
      "end": 10925
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefaultBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 11018,
        "end": 11029
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
              "start": 11030,
              "end": 11031
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultDerived",
                "optional": false,
                "typeAnnotation": null,
                "start": 11034,
                "end": 11048
              },
              "typeArguments": null,
              "start": 11034,
              "end": 11048
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 11030,
            "end": 11048
          }
        ],
        "start": 11029,
        "end": 11049
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shared",
            "optional": false,
            "typeAnnotation": null,
            "start": 11058,
            "end": 11064
          },
          "typeArguments": null,
          "start": 11058,
          "end": 11064
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 11067,
              "end": 11071
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
                  "start": 11074,
                  "end": 11075
                },
                "typeArguments": null,
                "start": 11074,
                "end": 11075
              },
              "start": 11072,
              "end": 11075
            },
            "accessibility": null,
            "static": false,
            "start": 11067,
            "end": 11075
          }
        ],
        "start": 11065,
        "end": 11077
      },
      "declare": false,
      "start": 11008,
      "end": 11077
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefaultDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 11088,
        "end": 11102
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "DefaultBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 11111,
            "end": 11122
          },
          "typeArguments": null,
          "start": 11111,
          "end": 11122
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 11123,
        "end": 11125
      },
      "declare": false,
      "start": 11078,
      "end": 11125
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 11125
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 223,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "I0",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "i0",
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
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 251,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 261,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 264,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "I0",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 290,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 300,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 303,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "I0",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 329,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 339,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 342,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 354,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 360,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 370,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 373,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 399,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 409,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 412,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 438,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 448,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 451,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 463,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 469,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 479,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 482,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 508,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 518,
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
    "value": "I2",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 538,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 547,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 557,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 560,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 578,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 588,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 591,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 608,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 617,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 627,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 630,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 647,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 656,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 666,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 669,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 687,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "A5",
    "start": 697,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 700,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 713,
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
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 726,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "B5",
    "start": 736,
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
    "value": "I4",
    "start": 747,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 756,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 765,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 775,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 778,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "A5",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "B5",
    "start": 790,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 796,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "A6",
    "start": 806,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 809,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 822,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 826,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 835,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "B6",
    "start": 845,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 848,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 856,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 865,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 874,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 884,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 887,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "A6",
    "start": 895,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "B6",
    "start": 899,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 905,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "A7",
    "start": 915,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 918,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 926,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 944,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "B7",
    "start": 954,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 957,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 965,
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
    "value": "b7",
    "start": 970,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 983,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 993,
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
    "value": "A7",
    "start": 1004,
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
    "value": "B7",
    "start": 1008,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1014,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "A8",
    "start": 1024,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1027,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1053,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "B8",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1066,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 1074,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1092,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1102,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1105,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "A8",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "B8",
    "start": 1117,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1123,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "A9",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1136,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1144,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 1149,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1153,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1162,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "B9",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1175,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1183,
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
    "value": "b9",
    "start": 1188,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1201,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 1211,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1214,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "A9",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "B9",
    "start": 1226,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1232,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "A10",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1246,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 1254,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 1259,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1273,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "B10",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1287,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 1295,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 1300,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1305,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1314,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1328,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "A10",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "B10",
    "start": 1341,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1348,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "A11",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1362,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1381,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1390,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "B11",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1404,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1423,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1432,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1446,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "A11",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "B11",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1466,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "A12",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1480,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1488,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1508,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "B12",
    "start": 1518,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1522,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1541,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1550,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 1560,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1564,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "A12",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "B12",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1584,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "A13",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1598,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1617,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1626,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "B13",
    "start": 1636,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1640,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 1648,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1659,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1668,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "I13",
    "start": 1678,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1682,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "A13",
    "start": 1690,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "B13",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1702,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "A14",
    "start": 1712,
    "end": 1715
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1716,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "I13",
    "start": 1724,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1730,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1735,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1744,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "B14",
    "start": 1754,
    "end": 1757
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1758,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "I13",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1777,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1786,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "I14",
    "start": 1796,
    "end": 1799
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1800,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "A14",
    "start": 1808,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "B14",
    "start": 1813,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1820,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "A15",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1834,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "I14",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1848,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1853,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1862,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "B15",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1876,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "I14",
    "start": 1884,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 1890,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1895,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1904,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "I15",
    "start": 1914,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1918,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "A15",
    "start": 1926,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "B15",
    "start": 1931,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1938,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 1948,
    "end": 1951
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1952,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "I15",
    "start": 1960,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1966,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1971,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1980,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "B16",
    "start": 1990,
    "end": 1993
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1994,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "I15",
    "start": 2002,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2008,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2013,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2022,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "I16",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2036,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 2044,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "B16",
    "start": 2049,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2056,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "A17",
    "start": 2066,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2070,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "I16",
    "start": 2078,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2084,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2089,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2098,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "B17",
    "start": 2108,
    "end": 2111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2112,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "I16",
    "start": 2120,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2126,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2131,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2140,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "I17",
    "start": 2150,
    "end": 2153
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2154,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "A17",
    "start": 2162,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "B17",
    "start": 2167,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2174,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "A18",
    "start": 2184,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2188,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "I17",
    "start": 2196,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 2202,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2207,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2216,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "B18",
    "start": 2226,
    "end": 2229
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2230,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "I17",
    "start": 2238,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 2244,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2249,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2258,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "I18",
    "start": 2268,
    "end": 2271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2272,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "A18",
    "start": 2280,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "B18",
    "start": 2285,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2292,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "A19",
    "start": 2302,
    "end": 2305
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2306,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "I18",
    "start": 2314,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "a19",
    "start": 2320,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2325,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2334,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "B19",
    "start": 2344,
    "end": 2347
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2348,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "I18",
    "start": 2356,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "b19",
    "start": 2362,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2367,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2376,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "I19",
    "start": 2386,
    "end": 2389
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2390,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "A19",
    "start": 2398,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "B19",
    "start": 2403,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2410,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "A20",
    "start": 2420,
    "end": 2423
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2424,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "I19",
    "start": 2432,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "a20",
    "start": 2438,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2443,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2452,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "B20",
    "start": 2462,
    "end": 2465
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2466,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "I19",
    "start": 2474,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "b20",
    "start": 2480,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2485,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2494,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "I20",
    "start": 2504,
    "end": 2507
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2508,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "A20",
    "start": 2516,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "B20",
    "start": 2521,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2528,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "A21",
    "start": 2538,
    "end": 2541
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2542,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "I20",
    "start": 2550,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "a21",
    "start": 2556,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2561,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2570,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "B21",
    "start": 2580,
    "end": 2583
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2584,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "I20",
    "start": 2592,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "b21",
    "start": 2598,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2603,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2612,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2622,
    "end": 2625
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2626,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "A21",
    "start": 2634,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "B21",
    "start": 2639,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2646,
    "end": 2655
  },
  {
    "type": "Identifier",
    "value": "A22",
    "start": 2656,
    "end": 2659
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2660,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2668,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "a22",
    "start": 2674,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2679,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2688,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "B22",
    "start": 2698,
    "end": 2701
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2702,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2710,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "b22",
    "start": 2716,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2721,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2730,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "I22",
    "start": 2740,
    "end": 2743
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2744,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "A22",
    "start": 2752,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "B22",
    "start": 2757,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2764,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "A23",
    "start": 2774,
    "end": 2777
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2778,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "I22",
    "start": 2786,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "a23",
    "start": 2792,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2797,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2806,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "B23",
    "start": 2816,
    "end": 2819
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2820,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "I22",
    "start": 2828,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "b23",
    "start": 2834,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2839,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2848,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "I23",
    "start": 2858,
    "end": 2861
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2862,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "A23",
    "start": 2870,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "B23",
    "start": 2875,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2882,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "A24",
    "start": 2892,
    "end": 2895
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2896,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "I23",
    "start": 2904,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "a24",
    "start": 2910,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2915,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2924,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "B24",
    "start": 2934,
    "end": 2937
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2938,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "I23",
    "start": 2946,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "b24",
    "start": 2952,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2957,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2966,
    "end": 2975
  },
  {
    "type": "Identifier",
    "value": "I24",
    "start": 2976,
    "end": 2979
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2980,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "A24",
    "start": 2988,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "B24",
    "start": 2993,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3000,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "A25",
    "start": 3010,
    "end": 3013
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3014,
    "end": 3021
  },
  {
    "type": "Identifier",
    "value": "I24",
    "start": 3022,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "a25",
    "start": 3028,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3033,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3042,
    "end": 3051
  },
  {
    "type": "Identifier",
    "value": "B25",
    "start": 3052,
    "end": 3055
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3056,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "I24",
    "start": 3064,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "b25",
    "start": 3070,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3075,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3084,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "I25",
    "start": 3094,
    "end": 3097
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3098,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "A25",
    "start": 3106,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "B25",
    "start": 3111,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3118,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "A26",
    "start": 3128,
    "end": 3131
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3132,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "I25",
    "start": 3140,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "a26",
    "start": 3146,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3151,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3160,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "B26",
    "start": 3170,
    "end": 3173
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3174,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "I25",
    "start": 3182,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "b26",
    "start": 3188,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3193,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3202,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "I26",
    "start": 3212,
    "end": 3215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3216,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "A26",
    "start": 3224,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "B26",
    "start": 3229,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3236,
    "end": 3245
  },
  {
    "type": "Identifier",
    "value": "A27",
    "start": 3246,
    "end": 3249
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3250,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "I26",
    "start": 3258,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "a27",
    "start": 3264,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3269,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3278,
    "end": 3287
  },
  {
    "type": "Identifier",
    "value": "B27",
    "start": 3288,
    "end": 3291
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3292,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "I26",
    "start": 3300,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "b27",
    "start": 3306,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3311,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3320,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "I27",
    "start": 3330,
    "end": 3333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3334,
    "end": 3341
  },
  {
    "type": "Identifier",
    "value": "A27",
    "start": 3342,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "B27",
    "start": 3347,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3354,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "A28",
    "start": 3364,
    "end": 3367
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3368,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "I27",
    "start": 3376,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "a28",
    "start": 3382,
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
    "value": "string",
    "start": 3387,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3396,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "B28",
    "start": 3406,
    "end": 3409
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3410,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "I27",
    "start": 3418,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "b28",
    "start": 3424,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3429,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3438,
    "end": 3447
  },
  {
    "type": "Identifier",
    "value": "I28",
    "start": 3448,
    "end": 3451
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3452,
    "end": 3459
  },
  {
    "type": "Identifier",
    "value": "A28",
    "start": 3460,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "B28",
    "start": 3465,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3472,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "A29",
    "start": 3482,
    "end": 3485
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3486,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "I28",
    "start": 3494,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Identifier",
    "value": "a29",
    "start": 3500,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3505,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3514,
    "end": 3523
  },
  {
    "type": "Identifier",
    "value": "B29",
    "start": 3524,
    "end": 3527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3528,
    "end": 3535
  },
  {
    "type": "Identifier",
    "value": "I28",
    "start": 3536,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "b29",
    "start": 3542,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3547,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3556,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "I29",
    "start": 3566,
    "end": 3569
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3570,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "A29",
    "start": 3578,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Identifier",
    "value": "B29",
    "start": 3583,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3590,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "A30",
    "start": 3600,
    "end": 3603
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3604,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "I29",
    "start": 3612,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Identifier",
    "value": "a30",
    "start": 3618,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3623,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3632,
    "end": 3641
  },
  {
    "type": "Identifier",
    "value": "B30",
    "start": 3642,
    "end": 3645
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3646,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "I29",
    "start": 3654,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "b30",
    "start": 3660,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3665,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3674,
    "end": 3683
  },
  {
    "type": "Identifier",
    "value": "I30",
    "start": 3684,
    "end": 3687
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3688,
    "end": 3695
  },
  {
    "type": "Identifier",
    "value": "A30",
    "start": 3696,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "B30",
    "start": 3701,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3708,
    "end": 3717
  },
  {
    "type": "Identifier",
    "value": "A31",
    "start": 3718,
    "end": 3721
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3722,
    "end": 3729
  },
  {
    "type": "Identifier",
    "value": "I30",
    "start": 3730,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "a31",
    "start": 3736,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3741,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3750,
    "end": 3759
  },
  {
    "type": "Identifier",
    "value": "B31",
    "start": 3760,
    "end": 3763
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3764,
    "end": 3771
  },
  {
    "type": "Identifier",
    "value": "I30",
    "start": 3772,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Identifier",
    "value": "b31",
    "start": 3778,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3783,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3792,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "I31",
    "start": 3802,
    "end": 3805
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3806,
    "end": 3813
  },
  {
    "type": "Identifier",
    "value": "A31",
    "start": 3814,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "B31",
    "start": 3819,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3826,
    "end": 3835
  },
  {
    "type": "Identifier",
    "value": "A32",
    "start": 3836,
    "end": 3839
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3840,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "I31",
    "start": 3848,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Identifier",
    "value": "a32",
    "start": 3854,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3859,
    "end": 3865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3868,
    "end": 3877
  },
  {
    "type": "Identifier",
    "value": "B32",
    "start": 3878,
    "end": 3881
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3882,
    "end": 3889
  },
  {
    "type": "Identifier",
    "value": "I31",
    "start": 3890,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "b32",
    "start": 3896,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3901,
    "end": 3907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3910,
    "end": 3919
  },
  {
    "type": "Identifier",
    "value": "I32",
    "start": 3920,
    "end": 3923
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3924,
    "end": 3931
  },
  {
    "type": "Identifier",
    "value": "A32",
    "start": 3932,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "B32",
    "start": 3937,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3944,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "A33",
    "start": 3954,
    "end": 3957
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3958,
    "end": 3965
  },
  {
    "type": "Identifier",
    "value": "I32",
    "start": 3966,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Identifier",
    "value": "a33",
    "start": 3972,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3977,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3986,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "B33",
    "start": 3996,
    "end": 3999
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4000,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "I32",
    "start": 4008,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Identifier",
    "value": "b33",
    "start": 4014,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4019,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4028,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "I33",
    "start": 4038,
    "end": 4041
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4042,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "A33",
    "start": 4050,
    "end": 4053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Identifier",
    "value": "B33",
    "start": 4055,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4062,
    "end": 4071
  },
  {
    "type": "Identifier",
    "value": "A34",
    "start": 4072,
    "end": 4075
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4076,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "I33",
    "start": 4084,
    "end": 4087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Identifier",
    "value": "a34",
    "start": 4090,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4095,
    "end": 4101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4104,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "B34",
    "start": 4114,
    "end": 4117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4118,
    "end": 4125
  },
  {
    "type": "Identifier",
    "value": "I33",
    "start": 4126,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Identifier",
    "value": "b34",
    "start": 4132,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4137,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4146,
    "end": 4155
  },
  {
    "type": "Identifier",
    "value": "I34",
    "start": 4156,
    "end": 4159
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4160,
    "end": 4167
  },
  {
    "type": "Identifier",
    "value": "A34",
    "start": 4168,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "B34",
    "start": 4173,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4177,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4180,
    "end": 4189
  },
  {
    "type": "Identifier",
    "value": "A35",
    "start": 4190,
    "end": 4193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4194,
    "end": 4201
  },
  {
    "type": "Identifier",
    "value": "I34",
    "start": 4202,
    "end": 4205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4206,
    "end": 4207
  },
  {
    "type": "Identifier",
    "value": "a35",
    "start": 4208,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4213,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4222,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "B35",
    "start": 4232,
    "end": 4235
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4236,
    "end": 4243
  },
  {
    "type": "Identifier",
    "value": "I34",
    "start": 4244,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Identifier",
    "value": "b35",
    "start": 4250,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4255,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4264,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "I35",
    "start": 4274,
    "end": 4277
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4278,
    "end": 4285
  },
  {
    "type": "Identifier",
    "value": "A35",
    "start": 4286,
    "end": 4289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Identifier",
    "value": "B35",
    "start": 4291,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4298,
    "end": 4307
  },
  {
    "type": "Identifier",
    "value": "A36",
    "start": 4308,
    "end": 4311
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4312,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "I35",
    "start": 4320,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "a36",
    "start": 4326,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4331,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4340,
    "end": 4349
  },
  {
    "type": "Identifier",
    "value": "B36",
    "start": 4350,
    "end": 4353
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4354,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "I35",
    "start": 4362,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "b36",
    "start": 4368,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4373,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4382,
    "end": 4391
  },
  {
    "type": "Identifier",
    "value": "I36",
    "start": 4392,
    "end": 4395
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4396,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "A36",
    "start": 4404,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Identifier",
    "value": "B36",
    "start": 4409,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4416,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "A37",
    "start": 4426,
    "end": 4429
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4430,
    "end": 4437
  },
  {
    "type": "Identifier",
    "value": "I36",
    "start": 4438,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4442,
    "end": 4443
  },
  {
    "type": "Identifier",
    "value": "a37",
    "start": 4444,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4449,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4458,
    "end": 4467
  },
  {
    "type": "Identifier",
    "value": "B37",
    "start": 4468,
    "end": 4471
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4472,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "I36",
    "start": 4480,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Identifier",
    "value": "b37",
    "start": 4486,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4491,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4500,
    "end": 4509
  },
  {
    "type": "Identifier",
    "value": "I37",
    "start": 4510,
    "end": 4513
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4514,
    "end": 4521
  },
  {
    "type": "Identifier",
    "value": "A37",
    "start": 4522,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4525,
    "end": 4526
  },
  {
    "type": "Identifier",
    "value": "B37",
    "start": 4527,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4531,
    "end": 4532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4534,
    "end": 4543
  },
  {
    "type": "Identifier",
    "value": "A38",
    "start": 4544,
    "end": 4547
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4548,
    "end": 4555
  },
  {
    "type": "Identifier",
    "value": "I37",
    "start": 4556,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Identifier",
    "value": "a38",
    "start": 4562,
    "end": 4565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4567,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4576,
    "end": 4585
  },
  {
    "type": "Identifier",
    "value": "B38",
    "start": 4586,
    "end": 4589
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4590,
    "end": 4597
  },
  {
    "type": "Identifier",
    "value": "I37",
    "start": 4598,
    "end": 4601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4602,
    "end": 4603
  },
  {
    "type": "Identifier",
    "value": "b38",
    "start": 4604,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4609,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4618,
    "end": 4627
  },
  {
    "type": "Identifier",
    "value": "I38",
    "start": 4628,
    "end": 4631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4632,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "A38",
    "start": 4640,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4643,
    "end": 4644
  },
  {
    "type": "Identifier",
    "value": "B38",
    "start": 4645,
    "end": 4648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4652,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "A39",
    "start": 4662,
    "end": 4665
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4666,
    "end": 4673
  },
  {
    "type": "Identifier",
    "value": "I38",
    "start": 4674,
    "end": 4677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4678,
    "end": 4679
  },
  {
    "type": "Identifier",
    "value": "a39",
    "start": 4680,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4685,
    "end": 4691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4694,
    "end": 4703
  },
  {
    "type": "Identifier",
    "value": "B39",
    "start": 4704,
    "end": 4707
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4708,
    "end": 4715
  },
  {
    "type": "Identifier",
    "value": "I38",
    "start": 4716,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "b39",
    "start": 4722,
    "end": 4725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4725,
    "end": 4726
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4727,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4736,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "I39",
    "start": 4746,
    "end": 4749
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4750,
    "end": 4757
  },
  {
    "type": "Identifier",
    "value": "A39",
    "start": 4758,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Identifier",
    "value": "B39",
    "start": 4763,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4770,
    "end": 4779
  },
  {
    "type": "Identifier",
    "value": "A40",
    "start": 4780,
    "end": 4783
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4784,
    "end": 4791
  },
  {
    "type": "Identifier",
    "value": "I39",
    "start": 4792,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Identifier",
    "value": "a40",
    "start": 4798,
    "end": 4801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4803,
    "end": 4809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4810,
    "end": 4811
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4812,
    "end": 4821
  },
  {
    "type": "Identifier",
    "value": "B40",
    "start": 4822,
    "end": 4825
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4826,
    "end": 4833
  },
  {
    "type": "Identifier",
    "value": "I39",
    "start": 4834,
    "end": 4837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4838,
    "end": 4839
  },
  {
    "type": "Identifier",
    "value": "b40",
    "start": 4840,
    "end": 4843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4843,
    "end": 4844
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4845,
    "end": 4851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4852,
    "end": 4853
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4854,
    "end": 4863
  },
  {
    "type": "Identifier",
    "value": "I40",
    "start": 4864,
    "end": 4867
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4868,
    "end": 4875
  },
  {
    "type": "Identifier",
    "value": "A40",
    "start": 4876,
    "end": 4879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4879,
    "end": 4880
  },
  {
    "type": "Identifier",
    "value": "B40",
    "start": 4881,
    "end": 4884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4885,
    "end": 4886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4886,
    "end": 4887
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4889,
    "end": 4896
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4897,
    "end": 4902
  },
  {
    "type": "Identifier",
    "value": "viaInterfaces",
    "start": 4903,
    "end": 4916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4916,
    "end": 4917
  },
  {
    "type": "Identifier",
    "value": "I40",
    "start": 4918,
    "end": 4921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Identifier",
    "value": "viaInterfaces",
    "start": 4923,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Identifier",
    "value": "i0",
    "start": 4937,
    "end": 4939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4984,
    "end": 4993
  },
  {
    "type": "Identifier",
    "value": "J0",
    "start": 4994,
    "end": 4996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4997,
    "end": 4998
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 4999,
    "end": 5001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5003,
    "end": 5009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5010,
    "end": 5011
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5012,
    "end": 5021
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 5022,
    "end": 5024
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5025,
    "end": 5032
  },
  {
    "type": "Identifier",
    "value": "J0",
    "start": 5033,
    "end": 5035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5036,
    "end": 5037
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5038,
    "end": 5040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5040,
    "end": 5041
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5042,
    "end": 5048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5051,
    "end": 5060
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 5061,
    "end": 5063
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5064,
    "end": 5071
  },
  {
    "type": "Identifier",
    "value": "J0",
    "start": 5072,
    "end": 5074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5075,
    "end": 5076
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5077,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5081,
    "end": 5087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5090,
    "end": 5099
  },
  {
    "type": "Identifier",
    "value": "J1",
    "start": 5100,
    "end": 5102
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5103,
    "end": 5110
  },
  {
    "type": "Identifier",
    "value": "Both1",
    "start": 5111,
    "end": 5116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5117,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5118,
    "end": 5119
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5120,
    "end": 5124
  },
  {
    "type": "Identifier",
    "value": "Both1",
    "start": 5125,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5131,
    "end": 5132
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 5133,
    "end": 5135
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 5138,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5142,
    "end": 5151
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 5152,
    "end": 5154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5155,
    "end": 5162
  },
  {
    "type": "Identifier",
    "value": "J1",
    "start": 5163,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5166,
    "end": 5167
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 5168,
    "end": 5170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5170,
    "end": 5171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5172,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5181,
    "end": 5190
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 5191,
    "end": 5193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5194,
    "end": 5201
  },
  {
    "type": "Identifier",
    "value": "J1",
    "start": 5202,
    "end": 5204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5205,
    "end": 5206
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5207,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5209,
    "end": 5210
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5211,
    "end": 5217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5220,
    "end": 5229
  },
  {
    "type": "Identifier",
    "value": "J2",
    "start": 5230,
    "end": 5232
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5233,
    "end": 5240
  },
  {
    "type": "Identifier",
    "value": "Both2",
    "start": 5241,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5247,
    "end": 5248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5248,
    "end": 5249
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5250,
    "end": 5254
  },
  {
    "type": "Identifier",
    "value": "Both2",
    "start": 5255,
    "end": 5260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5261,
    "end": 5262
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 5263,
    "end": 5265
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 5268,
    "end": 5270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5270,
    "end": 5271
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5272,
    "end": 5281
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 5282,
    "end": 5284
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5285,
    "end": 5292
  },
  {
    "type": "Identifier",
    "value": "J2",
    "start": 5293,
    "end": 5295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 5298,
    "end": 5300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5300,
    "end": 5301
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5302,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5311,
    "end": 5320
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 5321,
    "end": 5323
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5324,
    "end": 5331
  },
  {
    "type": "Identifier",
    "value": "J2",
    "start": 5332,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5335,
    "end": 5336
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 5337,
    "end": 5339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5339,
    "end": 5340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5341,
    "end": 5347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5350,
    "end": 5359
  },
  {
    "type": "Identifier",
    "value": "J3",
    "start": 5360,
    "end": 5362
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5363,
    "end": 5370
  },
  {
    "type": "Identifier",
    "value": "Both3",
    "start": 5371,
    "end": 5376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5378,
    "end": 5379
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5380,
    "end": 5384
  },
  {
    "type": "Identifier",
    "value": "Both3",
    "start": 5385,
    "end": 5390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5391,
    "end": 5392
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 5393,
    "end": 5395
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5396,
    "end": 5397
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 5398,
    "end": 5400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5400,
    "end": 5401
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5402,
    "end": 5411
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 5412,
    "end": 5414
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5415,
    "end": 5422
  },
  {
    "type": "Identifier",
    "value": "J3",
    "start": 5423,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5426,
    "end": 5427
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 5428,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5432,
    "end": 5438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5439,
    "end": 5440
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5441,
    "end": 5450
  },
  {
    "type": "Identifier",
    "value": "D4",
    "start": 5451,
    "end": 5453
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5454,
    "end": 5461
  },
  {
    "type": "Identifier",
    "value": "J3",
    "start": 5462,
    "end": 5464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5465,
    "end": 5466
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 5467,
    "end": 5469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5469,
    "end": 5470
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5471,
    "end": 5477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5478,
    "end": 5479
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5480,
    "end": 5489
  },
  {
    "type": "Identifier",
    "value": "J4",
    "start": 5490,
    "end": 5492
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5493,
    "end": 5500
  },
  {
    "type": "Identifier",
    "value": "Both4",
    "start": 5501,
    "end": 5506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5507,
    "end": 5508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5508,
    "end": 5509
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5510,
    "end": 5514
  },
  {
    "type": "Identifier",
    "value": "Both4",
    "start": 5515,
    "end": 5520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5521,
    "end": 5522
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 5523,
    "end": 5525
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5526,
    "end": 5527
  },
  {
    "type": "Identifier",
    "value": "D4",
    "start": 5528,
    "end": 5530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5530,
    "end": 5531
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5532,
    "end": 5541
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 5542,
    "end": 5544
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5545,
    "end": 5552
  },
  {
    "type": "Identifier",
    "value": "J4",
    "start": 5553,
    "end": 5555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5556,
    "end": 5557
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 5558,
    "end": 5560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5562,
    "end": 5568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5569,
    "end": 5570
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5571,
    "end": 5580
  },
  {
    "type": "Identifier",
    "value": "D5",
    "start": 5581,
    "end": 5583
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5584,
    "end": 5591
  },
  {
    "type": "Identifier",
    "value": "J4",
    "start": 5592,
    "end": 5594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5595,
    "end": 5596
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 5597,
    "end": 5599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5599,
    "end": 5600
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5601,
    "end": 5607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5608,
    "end": 5609
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5610,
    "end": 5619
  },
  {
    "type": "Identifier",
    "value": "J5",
    "start": 5620,
    "end": 5622
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5623,
    "end": 5630
  },
  {
    "type": "Identifier",
    "value": "Both5",
    "start": 5631,
    "end": 5636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5637,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5638,
    "end": 5639
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5640,
    "end": 5644
  },
  {
    "type": "Identifier",
    "value": "Both5",
    "start": 5645,
    "end": 5650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5651,
    "end": 5652
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 5653,
    "end": 5655
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5656,
    "end": 5657
  },
  {
    "type": "Identifier",
    "value": "D5",
    "start": 5658,
    "end": 5660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5660,
    "end": 5661
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5662,
    "end": 5671
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 5672,
    "end": 5674
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5675,
    "end": 5682
  },
  {
    "type": "Identifier",
    "value": "J5",
    "start": 5683,
    "end": 5685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5686,
    "end": 5687
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 5688,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5692,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5699,
    "end": 5700
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5701,
    "end": 5710
  },
  {
    "type": "Identifier",
    "value": "D6",
    "start": 5711,
    "end": 5713
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5714,
    "end": 5721
  },
  {
    "type": "Identifier",
    "value": "J5",
    "start": 5722,
    "end": 5724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5725,
    "end": 5726
  },
  {
    "type": "Identifier",
    "value": "d6",
    "start": 5727,
    "end": 5729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5729,
    "end": 5730
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5731,
    "end": 5737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5738,
    "end": 5739
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5740,
    "end": 5749
  },
  {
    "type": "Identifier",
    "value": "J6",
    "start": 5750,
    "end": 5752
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5753,
    "end": 5760
  },
  {
    "type": "Identifier",
    "value": "Both6",
    "start": 5761,
    "end": 5766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5767,
    "end": 5768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5768,
    "end": 5769
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5770,
    "end": 5774
  },
  {
    "type": "Identifier",
    "value": "Both6",
    "start": 5775,
    "end": 5780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5781,
    "end": 5782
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 5783,
    "end": 5785
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5786,
    "end": 5787
  },
  {
    "type": "Identifier",
    "value": "D6",
    "start": 5788,
    "end": 5790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5792,
    "end": 5801
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 5802,
    "end": 5804
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5805,
    "end": 5812
  },
  {
    "type": "Identifier",
    "value": "J6",
    "start": 5813,
    "end": 5815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5816,
    "end": 5817
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 5818,
    "end": 5820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5820,
    "end": 5821
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5822,
    "end": 5828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5829,
    "end": 5830
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5831,
    "end": 5840
  },
  {
    "type": "Identifier",
    "value": "D7",
    "start": 5841,
    "end": 5843
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5844,
    "end": 5851
  },
  {
    "type": "Identifier",
    "value": "J6",
    "start": 5852,
    "end": 5854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5855,
    "end": 5856
  },
  {
    "type": "Identifier",
    "value": "d7",
    "start": 5857,
    "end": 5859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5859,
    "end": 5860
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5861,
    "end": 5867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5868,
    "end": 5869
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5870,
    "end": 5879
  },
  {
    "type": "Identifier",
    "value": "J7",
    "start": 5880,
    "end": 5882
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5883,
    "end": 5890
  },
  {
    "type": "Identifier",
    "value": "Both7",
    "start": 5891,
    "end": 5896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5897,
    "end": 5898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5898,
    "end": 5899
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5900,
    "end": 5904
  },
  {
    "type": "Identifier",
    "value": "Both7",
    "start": 5905,
    "end": 5910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5911,
    "end": 5912
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 5913,
    "end": 5915
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5916,
    "end": 5917
  },
  {
    "type": "Identifier",
    "value": "D7",
    "start": 5918,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5920,
    "end": 5921
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5922,
    "end": 5931
  },
  {
    "type": "Identifier",
    "value": "C8",
    "start": 5932,
    "end": 5934
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5935,
    "end": 5942
  },
  {
    "type": "Identifier",
    "value": "J7",
    "start": 5943,
    "end": 5945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5946,
    "end": 5947
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 5948,
    "end": 5950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5950,
    "end": 5951
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5952,
    "end": 5958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5959,
    "end": 5960
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5961,
    "end": 5970
  },
  {
    "type": "Identifier",
    "value": "D8",
    "start": 5971,
    "end": 5973
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5974,
    "end": 5981
  },
  {
    "type": "Identifier",
    "value": "J7",
    "start": 5982,
    "end": 5984
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5985,
    "end": 5986
  },
  {
    "type": "Identifier",
    "value": "d8",
    "start": 5987,
    "end": 5989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5989,
    "end": 5990
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5991,
    "end": 5997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6000,
    "end": 6009
  },
  {
    "type": "Identifier",
    "value": "J8",
    "start": 6010,
    "end": 6012
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6013,
    "end": 6020
  },
  {
    "type": "Identifier",
    "value": "Both8",
    "start": 6021,
    "end": 6026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6027,
    "end": 6028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6028,
    "end": 6029
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6030,
    "end": 6034
  },
  {
    "type": "Identifier",
    "value": "Both8",
    "start": 6035,
    "end": 6040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6041,
    "end": 6042
  },
  {
    "type": "Identifier",
    "value": "C8",
    "start": 6043,
    "end": 6045
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 6046,
    "end": 6047
  },
  {
    "type": "Identifier",
    "value": "D8",
    "start": 6048,
    "end": 6050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6050,
    "end": 6051
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6052,
    "end": 6061
  },
  {
    "type": "Identifier",
    "value": "C9",
    "start": 6062,
    "end": 6064
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6065,
    "end": 6072
  },
  {
    "type": "Identifier",
    "value": "J8",
    "start": 6073,
    "end": 6075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6076,
    "end": 6077
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 6078,
    "end": 6080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6080,
    "end": 6081
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6082,
    "end": 6088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6089,
    "end": 6090
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6091,
    "end": 6100
  },
  {
    "type": "Identifier",
    "value": "D9",
    "start": 6101,
    "end": 6103
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6104,
    "end": 6111
  },
  {
    "type": "Identifier",
    "value": "J8",
    "start": 6112,
    "end": 6114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6115,
    "end": 6116
  },
  {
    "type": "Identifier",
    "value": "d9",
    "start": 6117,
    "end": 6119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6119,
    "end": 6120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6121,
    "end": 6127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6128,
    "end": 6129
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6130,
    "end": 6139
  },
  {
    "type": "Identifier",
    "value": "J9",
    "start": 6140,
    "end": 6142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6143,
    "end": 6150
  },
  {
    "type": "Identifier",
    "value": "Both9",
    "start": 6151,
    "end": 6156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6157,
    "end": 6158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6158,
    "end": 6159
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6160,
    "end": 6164
  },
  {
    "type": "Identifier",
    "value": "Both9",
    "start": 6165,
    "end": 6170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6171,
    "end": 6172
  },
  {
    "type": "Identifier",
    "value": "C9",
    "start": 6173,
    "end": 6175
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 6176,
    "end": 6177
  },
  {
    "type": "Identifier",
    "value": "D9",
    "start": 6178,
    "end": 6180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6180,
    "end": 6181
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6182,
    "end": 6191
  },
  {
    "type": "Identifier",
    "value": "C10",
    "start": 6192,
    "end": 6195
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6196,
    "end": 6203
  },
  {
    "type": "Identifier",
    "value": "J9",
    "start": 6204,
    "end": 6206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6207,
    "end": 6208
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 6209,
    "end": 6212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6212,
    "end": 6213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6214,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6221,
    "end": 6222
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6223,
    "end": 6232
  },
  {
    "type": "Identifier",
    "value": "D10",
    "start": 6233,
    "end": 6236
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6237,
    "end": 6244
  },
  {
    "type": "Identifier",
    "value": "J9",
    "start": 6245,
    "end": 6247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6248,
    "end": 6249
  },
  {
    "type": "Identifier",
    "value": "d10",
    "start": 6250,
    "end": 6253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6253,
    "end": 6254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6255,
    "end": 6261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6262,
    "end": 6263
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6264,
    "end": 6273
  },
  {
    "type": "Identifier",
    "value": "J10",
    "start": 6274,
    "end": 6277
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6278,
    "end": 6285
  },
  {
    "type": "Identifier",
    "value": "Both10",
    "start": 6286,
    "end": 6292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6293,
    "end": 6294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6294,
    "end": 6295
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6296,
    "end": 6300
  },
  {
    "type": "Identifier",
    "value": "Both10",
    "start": 6301,
    "end": 6307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6308,
    "end": 6309
  },
  {
    "type": "Identifier",
    "value": "C10",
    "start": 6310,
    "end": 6313
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 6314,
    "end": 6315
  },
  {
    "type": "Identifier",
    "value": "D10",
    "start": 6316,
    "end": 6319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6319,
    "end": 6320
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6321,
    "end": 6330
  },
  {
    "type": "Identifier",
    "value": "C11",
    "start": 6331,
    "end": 6334
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6335,
    "end": 6342
  },
  {
    "type": "Identifier",
    "value": "J10",
    "start": 6343,
    "end": 6346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6347,
    "end": 6348
  },
  {
    "type": "Identifier",
    "value": "c11",
    "start": 6349,
    "end": 6352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6352,
    "end": 6353
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6354,
    "end": 6360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6361,
    "end": 6362
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6363,
    "end": 6372
  },
  {
    "type": "Identifier",
    "value": "D11",
    "start": 6373,
    "end": 6376
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6377,
    "end": 6384
  },
  {
    "type": "Identifier",
    "value": "J10",
    "start": 6385,
    "end": 6388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6389,
    "end": 6390
  },
  {
    "type": "Identifier",
    "value": "d11",
    "start": 6391,
    "end": 6394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6394,
    "end": 6395
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6396,
    "end": 6402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6405,
    "end": 6414
  },
  {
    "type": "Identifier",
    "value": "J11",
    "start": 6415,
    "end": 6418
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6419,
    "end": 6426
  },
  {
    "type": "Identifier",
    "value": "Both11",
    "start": 6427,
    "end": 6433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6434,
    "end": 6435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6435,
    "end": 6436
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6437,
    "end": 6441
  },
  {
    "type": "Identifier",
    "value": "Both11",
    "start": 6442,
    "end": 6448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6449,
    "end": 6450
  },
  {
    "type": "Identifier",
    "value": "C11",
    "start": 6451,
    "end": 6454
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 6455,
    "end": 6456
  },
  {
    "type": "Identifier",
    "value": "D11",
    "start": 6457,
    "end": 6460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6460,
    "end": 6461
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6462,
    "end": 6471
  },
  {
    "type": "Identifier",
    "value": "C12",
    "start": 6472,
    "end": 6475
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6476,
    "end": 6483
  },
  {
    "type": "Identifier",
    "value": "J11",
    "start": 6484,
    "end": 6487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6488,
    "end": 6489
  },
  {
    "type": "Identifier",
    "value": "c12",
    "start": 6490,
    "end": 6493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6493,
    "end": 6494
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6495,
    "end": 6501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6502,
    "end": 6503
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6504,
    "end": 6513
  },
  {
    "type": "Identifier",
    "value": "D12",
    "start": 6514,
    "end": 6517
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6518,
    "end": 6525
  },
  {
    "type": "Identifier",
    "value": "J11",
    "start": 6526,
    "end": 6529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6530,
    "end": 6531
  },
  {
    "type": "Identifier",
    "value": "d12",
    "start": 6532,
    "end": 6535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6535,
    "end": 6536
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6537,
    "end": 6543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6544,
    "end": 6545
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6546,
    "end": 6555
  },
  {
    "type": "Identifier",
    "value": "J12",
    "start": 6556,
    "end": 6559
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6560,
    "end": 6567
  },
  {
    "type": "Identifier",
    "value": "Both12",
    "start": 6568,
    "end": 6574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6575,
    "end": 6576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6576,
    "end": 6577
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6578,
    "end": 6582
  },
  {
    "type": "Identifier",
    "value": "Both12",
    "start": 6583,
    "end": 6589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6590,
    "end": 6591
  },
  {
    "type": "Identifier",
    "value": "C12",
    "start": 6592,
    "end": 6595
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 6596,
    "end": 6597
  },
  {
    "type": "Identifier",
    "value": "D12",
    "start": 6598,
    "end": 6601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6601,
    "end": 6602
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6603,
    "end": 6612
  },
  {
    "type": "Identifier",
    "value": "C13",
    "start": 6613,
    "end": 6616
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6617,
    "end": 6624
  },
  {
    "type": "Identifier",
    "value": "J12",
    "start": 6625,
    "end": 6628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6629,
    "end": 6630
  },
  {
    "type": "Identifier",
    "value": "c13",
    "start": 6631,
    "end": 6634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6634,
    "end": 6635
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6636,
    "end": 6642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6643,
    "end": 6644
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6645,
    "end": 6654
  },
  {
    "type": "Identifier",
    "value": "D13",
    "start": 6655,
    "end": 6658
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6659,
    "end": 6666
  },
  {
    "type": "Identifier",
    "value": "J12",
    "start": 6667,
    "end": 6670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6671,
    "end": 6672
  },
  {
    "type": "Identifier",
    "value": "d13",
    "start": 6673,
    "end": 6676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6676,
    "end": 6677
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6678,
    "end": 6684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6685,
    "end": 6686
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6687,
    "end": 6696
  },
  {
    "type": "Identifier",
    "value": "J13",
    "start": 6697,
    "end": 6700
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6701,
    "end": 6708
  },
  {
    "type": "Identifier",
    "value": "Both13",
    "start": 6709,
    "end": 6715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6716,
    "end": 6717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6717,
    "end": 6718
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6719,
    "end": 6723
  },
  {
    "type": "Identifier",
    "value": "Both13",
    "start": 6724,
    "end": 6730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6731,
    "end": 6732
  },
  {
    "type": "Identifier",
    "value": "C13",
    "start": 6733,
    "end": 6736
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 6737,
    "end": 6738
  },
  {
    "type": "Identifier",
    "value": "D13",
    "start": 6739,
    "end": 6742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6742,
    "end": 6743
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6744,
    "end": 6753
  },
  {
    "type": "Identifier",
    "value": "C14",
    "start": 6754,
    "end": 6757
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6758,
    "end": 6765
  },
  {
    "type": "Identifier",
    "value": "J13",
    "start": 6766,
    "end": 6769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6770,
    "end": 6771
  },
  {
    "type": "Identifier",
    "value": "c14",
    "start": 6772,
    "end": 6775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6775,
    "end": 6776
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6777,
    "end": 6783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6784,
    "end": 6785
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6786,
    "end": 6795
  },
  {
    "type": "Identifier",
    "value": "D14",
    "start": 6796,
    "end": 6799
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6800,
    "end": 6807
  },
  {
    "type": "Identifier",
    "value": "J13",
    "start": 6808,
    "end": 6811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6812,
    "end": 6813
  },
  {
    "type": "Identifier",
    "value": "d14",
    "start": 6814,
    "end": 6817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6817,
    "end": 6818
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6819,
    "end": 6825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6826,
    "end": 6827
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6828,
    "end": 6837
  },
  {
    "type": "Identifier",
    "value": "J14",
    "start": 6838,
    "end": 6841
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6842,
    "end": 6849
  },
  {
    "type": "Identifier",
    "value": "Both14",
    "start": 6850,
    "end": 6856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6857,
    "end": 6858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6858,
    "end": 6859
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6860,
    "end": 6864
  },
  {
    "type": "Identifier",
    "value": "Both14",
    "start": 6865,
    "end": 6871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6872,
    "end": 6873
  },
  {
    "type": "Identifier",
    "value": "C14",
    "start": 6874,
    "end": 6877
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 6878,
    "end": 6879
  },
  {
    "type": "Identifier",
    "value": "D14",
    "start": 6880,
    "end": 6883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6883,
    "end": 6884
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6885,
    "end": 6894
  },
  {
    "type": "Identifier",
    "value": "C15",
    "start": 6895,
    "end": 6898
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6899,
    "end": 6906
  },
  {
    "type": "Identifier",
    "value": "J14",
    "start": 6907,
    "end": 6910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6911,
    "end": 6912
  },
  {
    "type": "Identifier",
    "value": "c15",
    "start": 6913,
    "end": 6916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6916,
    "end": 6917
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6918,
    "end": 6924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6925,
    "end": 6926
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6927,
    "end": 6936
  },
  {
    "type": "Identifier",
    "value": "D15",
    "start": 6937,
    "end": 6940
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6941,
    "end": 6948
  },
  {
    "type": "Identifier",
    "value": "J14",
    "start": 6949,
    "end": 6952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6953,
    "end": 6954
  },
  {
    "type": "Identifier",
    "value": "d15",
    "start": 6955,
    "end": 6958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6958,
    "end": 6959
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6960,
    "end": 6966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6967,
    "end": 6968
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6969,
    "end": 6978
  },
  {
    "type": "Identifier",
    "value": "J15",
    "start": 6979,
    "end": 6982
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6983,
    "end": 6990
  },
  {
    "type": "Identifier",
    "value": "Both15",
    "start": 6991,
    "end": 6997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6998,
    "end": 6999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6999,
    "end": 7000
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7001,
    "end": 7005
  },
  {
    "type": "Identifier",
    "value": "Both15",
    "start": 7006,
    "end": 7012
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7013,
    "end": 7014
  },
  {
    "type": "Identifier",
    "value": "C15",
    "start": 7015,
    "end": 7018
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7019,
    "end": 7020
  },
  {
    "type": "Identifier",
    "value": "D15",
    "start": 7021,
    "end": 7024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7024,
    "end": 7025
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7026,
    "end": 7035
  },
  {
    "type": "Identifier",
    "value": "C16",
    "start": 7036,
    "end": 7039
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7040,
    "end": 7047
  },
  {
    "type": "Identifier",
    "value": "J15",
    "start": 7048,
    "end": 7051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7052,
    "end": 7053
  },
  {
    "type": "Identifier",
    "value": "c16",
    "start": 7054,
    "end": 7057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7057,
    "end": 7058
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7059,
    "end": 7065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7066,
    "end": 7067
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7068,
    "end": 7077
  },
  {
    "type": "Identifier",
    "value": "D16",
    "start": 7078,
    "end": 7081
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7082,
    "end": 7089
  },
  {
    "type": "Identifier",
    "value": "J15",
    "start": 7090,
    "end": 7093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7094,
    "end": 7095
  },
  {
    "type": "Identifier",
    "value": "d16",
    "start": 7096,
    "end": 7099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7099,
    "end": 7100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7101,
    "end": 7107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7108,
    "end": 7109
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7110,
    "end": 7119
  },
  {
    "type": "Identifier",
    "value": "J16",
    "start": 7120,
    "end": 7123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7124,
    "end": 7131
  },
  {
    "type": "Identifier",
    "value": "Both16",
    "start": 7132,
    "end": 7138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7139,
    "end": 7140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7140,
    "end": 7141
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7142,
    "end": 7146
  },
  {
    "type": "Identifier",
    "value": "Both16",
    "start": 7147,
    "end": 7153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7154,
    "end": 7155
  },
  {
    "type": "Identifier",
    "value": "C16",
    "start": 7156,
    "end": 7159
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7160,
    "end": 7161
  },
  {
    "type": "Identifier",
    "value": "D16",
    "start": 7162,
    "end": 7165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7165,
    "end": 7166
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7167,
    "end": 7176
  },
  {
    "type": "Identifier",
    "value": "C17",
    "start": 7177,
    "end": 7180
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7181,
    "end": 7188
  },
  {
    "type": "Identifier",
    "value": "J16",
    "start": 7189,
    "end": 7192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7193,
    "end": 7194
  },
  {
    "type": "Identifier",
    "value": "c17",
    "start": 7195,
    "end": 7198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7198,
    "end": 7199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7200,
    "end": 7206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7207,
    "end": 7208
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7209,
    "end": 7218
  },
  {
    "type": "Identifier",
    "value": "D17",
    "start": 7219,
    "end": 7222
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7223,
    "end": 7230
  },
  {
    "type": "Identifier",
    "value": "J16",
    "start": 7231,
    "end": 7234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7235,
    "end": 7236
  },
  {
    "type": "Identifier",
    "value": "d17",
    "start": 7237,
    "end": 7240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7240,
    "end": 7241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7242,
    "end": 7248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7249,
    "end": 7250
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7251,
    "end": 7260
  },
  {
    "type": "Identifier",
    "value": "J17",
    "start": 7261,
    "end": 7264
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7265,
    "end": 7272
  },
  {
    "type": "Identifier",
    "value": "Both17",
    "start": 7273,
    "end": 7279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7280,
    "end": 7281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7281,
    "end": 7282
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7283,
    "end": 7287
  },
  {
    "type": "Identifier",
    "value": "Both17",
    "start": 7288,
    "end": 7294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7295,
    "end": 7296
  },
  {
    "type": "Identifier",
    "value": "C17",
    "start": 7297,
    "end": 7300
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7301,
    "end": 7302
  },
  {
    "type": "Identifier",
    "value": "D17",
    "start": 7303,
    "end": 7306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7306,
    "end": 7307
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7308,
    "end": 7317
  },
  {
    "type": "Identifier",
    "value": "C18",
    "start": 7318,
    "end": 7321
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7322,
    "end": 7329
  },
  {
    "type": "Identifier",
    "value": "J17",
    "start": 7330,
    "end": 7333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7334,
    "end": 7335
  },
  {
    "type": "Identifier",
    "value": "c18",
    "start": 7336,
    "end": 7339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7339,
    "end": 7340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7341,
    "end": 7347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7348,
    "end": 7349
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7350,
    "end": 7359
  },
  {
    "type": "Identifier",
    "value": "D18",
    "start": 7360,
    "end": 7363
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7364,
    "end": 7371
  },
  {
    "type": "Identifier",
    "value": "J17",
    "start": 7372,
    "end": 7375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7376,
    "end": 7377
  },
  {
    "type": "Identifier",
    "value": "d18",
    "start": 7378,
    "end": 7381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7381,
    "end": 7382
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7383,
    "end": 7389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7390,
    "end": 7391
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7392,
    "end": 7401
  },
  {
    "type": "Identifier",
    "value": "J18",
    "start": 7402,
    "end": 7405
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7406,
    "end": 7413
  },
  {
    "type": "Identifier",
    "value": "Both18",
    "start": 7414,
    "end": 7420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7421,
    "end": 7422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7422,
    "end": 7423
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7424,
    "end": 7428
  },
  {
    "type": "Identifier",
    "value": "Both18",
    "start": 7429,
    "end": 7435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7436,
    "end": 7437
  },
  {
    "type": "Identifier",
    "value": "C18",
    "start": 7438,
    "end": 7441
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7442,
    "end": 7443
  },
  {
    "type": "Identifier",
    "value": "D18",
    "start": 7444,
    "end": 7447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7447,
    "end": 7448
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7449,
    "end": 7458
  },
  {
    "type": "Identifier",
    "value": "C19",
    "start": 7459,
    "end": 7462
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7463,
    "end": 7470
  },
  {
    "type": "Identifier",
    "value": "J18",
    "start": 7471,
    "end": 7474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7475,
    "end": 7476
  },
  {
    "type": "Identifier",
    "value": "c19",
    "start": 7477,
    "end": 7480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7480,
    "end": 7481
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7482,
    "end": 7488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7489,
    "end": 7490
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7491,
    "end": 7500
  },
  {
    "type": "Identifier",
    "value": "D19",
    "start": 7501,
    "end": 7504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7505,
    "end": 7512
  },
  {
    "type": "Identifier",
    "value": "J18",
    "start": 7513,
    "end": 7516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7517,
    "end": 7518
  },
  {
    "type": "Identifier",
    "value": "d19",
    "start": 7519,
    "end": 7522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7522,
    "end": 7523
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7524,
    "end": 7530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7531,
    "end": 7532
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7533,
    "end": 7542
  },
  {
    "type": "Identifier",
    "value": "J19",
    "start": 7543,
    "end": 7546
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7547,
    "end": 7554
  },
  {
    "type": "Identifier",
    "value": "Both19",
    "start": 7555,
    "end": 7561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7562,
    "end": 7563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7563,
    "end": 7564
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7565,
    "end": 7569
  },
  {
    "type": "Identifier",
    "value": "Both19",
    "start": 7570,
    "end": 7576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7577,
    "end": 7578
  },
  {
    "type": "Identifier",
    "value": "C19",
    "start": 7579,
    "end": 7582
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7583,
    "end": 7584
  },
  {
    "type": "Identifier",
    "value": "D19",
    "start": 7585,
    "end": 7588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7588,
    "end": 7589
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7590,
    "end": 7599
  },
  {
    "type": "Identifier",
    "value": "C20",
    "start": 7600,
    "end": 7603
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7604,
    "end": 7611
  },
  {
    "type": "Identifier",
    "value": "J19",
    "start": 7612,
    "end": 7615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7616,
    "end": 7617
  },
  {
    "type": "Identifier",
    "value": "c20",
    "start": 7618,
    "end": 7621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7621,
    "end": 7622
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7623,
    "end": 7629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7630,
    "end": 7631
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7632,
    "end": 7641
  },
  {
    "type": "Identifier",
    "value": "D20",
    "start": 7642,
    "end": 7645
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7646,
    "end": 7653
  },
  {
    "type": "Identifier",
    "value": "J19",
    "start": 7654,
    "end": 7657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7658,
    "end": 7659
  },
  {
    "type": "Identifier",
    "value": "d20",
    "start": 7660,
    "end": 7663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7663,
    "end": 7664
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7665,
    "end": 7671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7672,
    "end": 7673
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7674,
    "end": 7683
  },
  {
    "type": "Identifier",
    "value": "J20",
    "start": 7684,
    "end": 7687
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7688,
    "end": 7695
  },
  {
    "type": "Identifier",
    "value": "Both20",
    "start": 7696,
    "end": 7702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7703,
    "end": 7704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7704,
    "end": 7705
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7706,
    "end": 7710
  },
  {
    "type": "Identifier",
    "value": "Both20",
    "start": 7711,
    "end": 7717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7718,
    "end": 7719
  },
  {
    "type": "Identifier",
    "value": "C20",
    "start": 7720,
    "end": 7723
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7724,
    "end": 7725
  },
  {
    "type": "Identifier",
    "value": "D20",
    "start": 7726,
    "end": 7729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7729,
    "end": 7730
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7731,
    "end": 7740
  },
  {
    "type": "Identifier",
    "value": "C21",
    "start": 7741,
    "end": 7744
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7745,
    "end": 7752
  },
  {
    "type": "Identifier",
    "value": "J20",
    "start": 7753,
    "end": 7756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7757,
    "end": 7758
  },
  {
    "type": "Identifier",
    "value": "c21",
    "start": 7759,
    "end": 7762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7762,
    "end": 7763
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7764,
    "end": 7770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7771,
    "end": 7772
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7773,
    "end": 7782
  },
  {
    "type": "Identifier",
    "value": "D21",
    "start": 7783,
    "end": 7786
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7787,
    "end": 7794
  },
  {
    "type": "Identifier",
    "value": "J20",
    "start": 7795,
    "end": 7798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7799,
    "end": 7800
  },
  {
    "type": "Identifier",
    "value": "d21",
    "start": 7801,
    "end": 7804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7804,
    "end": 7805
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7806,
    "end": 7812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7813,
    "end": 7814
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7815,
    "end": 7824
  },
  {
    "type": "Identifier",
    "value": "J21",
    "start": 7825,
    "end": 7828
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7829,
    "end": 7836
  },
  {
    "type": "Identifier",
    "value": "Both21",
    "start": 7837,
    "end": 7843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7844,
    "end": 7845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7845,
    "end": 7846
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7847,
    "end": 7851
  },
  {
    "type": "Identifier",
    "value": "Both21",
    "start": 7852,
    "end": 7858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7859,
    "end": 7860
  },
  {
    "type": "Identifier",
    "value": "C21",
    "start": 7861,
    "end": 7864
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7865,
    "end": 7866
  },
  {
    "type": "Identifier",
    "value": "D21",
    "start": 7867,
    "end": 7870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7870,
    "end": 7871
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7872,
    "end": 7881
  },
  {
    "type": "Identifier",
    "value": "C22",
    "start": 7882,
    "end": 7885
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7886,
    "end": 7893
  },
  {
    "type": "Identifier",
    "value": "J21",
    "start": 7894,
    "end": 7897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7898,
    "end": 7899
  },
  {
    "type": "Identifier",
    "value": "c22",
    "start": 7900,
    "end": 7903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7903,
    "end": 7904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7905,
    "end": 7911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7912,
    "end": 7913
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7914,
    "end": 7923
  },
  {
    "type": "Identifier",
    "value": "D22",
    "start": 7924,
    "end": 7927
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7928,
    "end": 7935
  },
  {
    "type": "Identifier",
    "value": "J21",
    "start": 7936,
    "end": 7939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7940,
    "end": 7941
  },
  {
    "type": "Identifier",
    "value": "d22",
    "start": 7942,
    "end": 7945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7945,
    "end": 7946
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7947,
    "end": 7953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7954,
    "end": 7955
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7956,
    "end": 7965
  },
  {
    "type": "Identifier",
    "value": "J22",
    "start": 7966,
    "end": 7969
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7970,
    "end": 7977
  },
  {
    "type": "Identifier",
    "value": "Both22",
    "start": 7978,
    "end": 7984
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7985,
    "end": 7986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7986,
    "end": 7987
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7988,
    "end": 7992
  },
  {
    "type": "Identifier",
    "value": "Both22",
    "start": 7993,
    "end": 7999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8000,
    "end": 8001
  },
  {
    "type": "Identifier",
    "value": "C22",
    "start": 8002,
    "end": 8005
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8006,
    "end": 8007
  },
  {
    "type": "Identifier",
    "value": "D22",
    "start": 8008,
    "end": 8011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8011,
    "end": 8012
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8013,
    "end": 8022
  },
  {
    "type": "Identifier",
    "value": "C23",
    "start": 8023,
    "end": 8026
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8027,
    "end": 8034
  },
  {
    "type": "Identifier",
    "value": "J22",
    "start": 8035,
    "end": 8038
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8039,
    "end": 8040
  },
  {
    "type": "Identifier",
    "value": "c23",
    "start": 8041,
    "end": 8044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8044,
    "end": 8045
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8046,
    "end": 8052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8053,
    "end": 8054
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8055,
    "end": 8064
  },
  {
    "type": "Identifier",
    "value": "D23",
    "start": 8065,
    "end": 8068
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8069,
    "end": 8076
  },
  {
    "type": "Identifier",
    "value": "J22",
    "start": 8077,
    "end": 8080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8081,
    "end": 8082
  },
  {
    "type": "Identifier",
    "value": "d23",
    "start": 8083,
    "end": 8086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8086,
    "end": 8087
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8088,
    "end": 8094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8095,
    "end": 8096
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8097,
    "end": 8106
  },
  {
    "type": "Identifier",
    "value": "J23",
    "start": 8107,
    "end": 8110
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8111,
    "end": 8118
  },
  {
    "type": "Identifier",
    "value": "Both23",
    "start": 8119,
    "end": 8125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8126,
    "end": 8127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8127,
    "end": 8128
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8129,
    "end": 8133
  },
  {
    "type": "Identifier",
    "value": "Both23",
    "start": 8134,
    "end": 8140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8141,
    "end": 8142
  },
  {
    "type": "Identifier",
    "value": "C23",
    "start": 8143,
    "end": 8146
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8147,
    "end": 8148
  },
  {
    "type": "Identifier",
    "value": "D23",
    "start": 8149,
    "end": 8152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8152,
    "end": 8153
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8154,
    "end": 8163
  },
  {
    "type": "Identifier",
    "value": "C24",
    "start": 8164,
    "end": 8167
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8168,
    "end": 8175
  },
  {
    "type": "Identifier",
    "value": "J23",
    "start": 8176,
    "end": 8179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8180,
    "end": 8181
  },
  {
    "type": "Identifier",
    "value": "c24",
    "start": 8182,
    "end": 8185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8185,
    "end": 8186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8187,
    "end": 8193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8194,
    "end": 8195
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8196,
    "end": 8205
  },
  {
    "type": "Identifier",
    "value": "D24",
    "start": 8206,
    "end": 8209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8210,
    "end": 8217
  },
  {
    "type": "Identifier",
    "value": "J23",
    "start": 8218,
    "end": 8221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8222,
    "end": 8223
  },
  {
    "type": "Identifier",
    "value": "d24",
    "start": 8224,
    "end": 8227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8227,
    "end": 8228
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8229,
    "end": 8235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8236,
    "end": 8237
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8238,
    "end": 8247
  },
  {
    "type": "Identifier",
    "value": "J24",
    "start": 8248,
    "end": 8251
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8252,
    "end": 8259
  },
  {
    "type": "Identifier",
    "value": "Both24",
    "start": 8260,
    "end": 8266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8267,
    "end": 8268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8268,
    "end": 8269
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8270,
    "end": 8274
  },
  {
    "type": "Identifier",
    "value": "Both24",
    "start": 8275,
    "end": 8281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8282,
    "end": 8283
  },
  {
    "type": "Identifier",
    "value": "C24",
    "start": 8284,
    "end": 8287
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8288,
    "end": 8289
  },
  {
    "type": "Identifier",
    "value": "D24",
    "start": 8290,
    "end": 8293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8293,
    "end": 8294
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8295,
    "end": 8304
  },
  {
    "type": "Identifier",
    "value": "C25",
    "start": 8305,
    "end": 8308
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8309,
    "end": 8316
  },
  {
    "type": "Identifier",
    "value": "J24",
    "start": 8317,
    "end": 8320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8321,
    "end": 8322
  },
  {
    "type": "Identifier",
    "value": "c25",
    "start": 8323,
    "end": 8326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8326,
    "end": 8327
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8328,
    "end": 8334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8335,
    "end": 8336
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8337,
    "end": 8346
  },
  {
    "type": "Identifier",
    "value": "D25",
    "start": 8347,
    "end": 8350
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8351,
    "end": 8358
  },
  {
    "type": "Identifier",
    "value": "J24",
    "start": 8359,
    "end": 8362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8363,
    "end": 8364
  },
  {
    "type": "Identifier",
    "value": "d25",
    "start": 8365,
    "end": 8368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8368,
    "end": 8369
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8370,
    "end": 8376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8377,
    "end": 8378
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8379,
    "end": 8388
  },
  {
    "type": "Identifier",
    "value": "J25",
    "start": 8389,
    "end": 8392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8393,
    "end": 8400
  },
  {
    "type": "Identifier",
    "value": "Both25",
    "start": 8401,
    "end": 8407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8408,
    "end": 8409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8409,
    "end": 8410
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8411,
    "end": 8415
  },
  {
    "type": "Identifier",
    "value": "Both25",
    "start": 8416,
    "end": 8422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8423,
    "end": 8424
  },
  {
    "type": "Identifier",
    "value": "C25",
    "start": 8425,
    "end": 8428
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8429,
    "end": 8430
  },
  {
    "type": "Identifier",
    "value": "D25",
    "start": 8431,
    "end": 8434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8434,
    "end": 8435
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8436,
    "end": 8445
  },
  {
    "type": "Identifier",
    "value": "C26",
    "start": 8446,
    "end": 8449
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8450,
    "end": 8457
  },
  {
    "type": "Identifier",
    "value": "J25",
    "start": 8458,
    "end": 8461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8462,
    "end": 8463
  },
  {
    "type": "Identifier",
    "value": "c26",
    "start": 8464,
    "end": 8467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8467,
    "end": 8468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8469,
    "end": 8475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8476,
    "end": 8477
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8478,
    "end": 8487
  },
  {
    "type": "Identifier",
    "value": "D26",
    "start": 8488,
    "end": 8491
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8492,
    "end": 8499
  },
  {
    "type": "Identifier",
    "value": "J25",
    "start": 8500,
    "end": 8503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8504,
    "end": 8505
  },
  {
    "type": "Identifier",
    "value": "d26",
    "start": 8506,
    "end": 8509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8509,
    "end": 8510
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8511,
    "end": 8517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8518,
    "end": 8519
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8520,
    "end": 8529
  },
  {
    "type": "Identifier",
    "value": "J26",
    "start": 8530,
    "end": 8533
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8534,
    "end": 8541
  },
  {
    "type": "Identifier",
    "value": "Both26",
    "start": 8542,
    "end": 8548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8549,
    "end": 8550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8550,
    "end": 8551
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8552,
    "end": 8556
  },
  {
    "type": "Identifier",
    "value": "Both26",
    "start": 8557,
    "end": 8563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8564,
    "end": 8565
  },
  {
    "type": "Identifier",
    "value": "C26",
    "start": 8566,
    "end": 8569
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8570,
    "end": 8571
  },
  {
    "type": "Identifier",
    "value": "D26",
    "start": 8572,
    "end": 8575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8575,
    "end": 8576
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8577,
    "end": 8586
  },
  {
    "type": "Identifier",
    "value": "C27",
    "start": 8587,
    "end": 8590
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8591,
    "end": 8598
  },
  {
    "type": "Identifier",
    "value": "J26",
    "start": 8599,
    "end": 8602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8603,
    "end": 8604
  },
  {
    "type": "Identifier",
    "value": "c27",
    "start": 8605,
    "end": 8608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8608,
    "end": 8609
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8610,
    "end": 8616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8617,
    "end": 8618
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8619,
    "end": 8628
  },
  {
    "type": "Identifier",
    "value": "D27",
    "start": 8629,
    "end": 8632
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8633,
    "end": 8640
  },
  {
    "type": "Identifier",
    "value": "J26",
    "start": 8641,
    "end": 8644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8645,
    "end": 8646
  },
  {
    "type": "Identifier",
    "value": "d27",
    "start": 8647,
    "end": 8650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8650,
    "end": 8651
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8652,
    "end": 8658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8659,
    "end": 8660
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8661,
    "end": 8670
  },
  {
    "type": "Identifier",
    "value": "J27",
    "start": 8671,
    "end": 8674
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8675,
    "end": 8682
  },
  {
    "type": "Identifier",
    "value": "Both27",
    "start": 8683,
    "end": 8689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8690,
    "end": 8691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8691,
    "end": 8692
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8693,
    "end": 8697
  },
  {
    "type": "Identifier",
    "value": "Both27",
    "start": 8698,
    "end": 8704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8705,
    "end": 8706
  },
  {
    "type": "Identifier",
    "value": "C27",
    "start": 8707,
    "end": 8710
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8711,
    "end": 8712
  },
  {
    "type": "Identifier",
    "value": "D27",
    "start": 8713,
    "end": 8716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8716,
    "end": 8717
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8718,
    "end": 8727
  },
  {
    "type": "Identifier",
    "value": "C28",
    "start": 8728,
    "end": 8731
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8732,
    "end": 8739
  },
  {
    "type": "Identifier",
    "value": "J27",
    "start": 8740,
    "end": 8743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8744,
    "end": 8745
  },
  {
    "type": "Identifier",
    "value": "c28",
    "start": 8746,
    "end": 8749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8749,
    "end": 8750
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8751,
    "end": 8757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8758,
    "end": 8759
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8760,
    "end": 8769
  },
  {
    "type": "Identifier",
    "value": "D28",
    "start": 8770,
    "end": 8773
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8774,
    "end": 8781
  },
  {
    "type": "Identifier",
    "value": "J27",
    "start": 8782,
    "end": 8785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8786,
    "end": 8787
  },
  {
    "type": "Identifier",
    "value": "d28",
    "start": 8788,
    "end": 8791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8791,
    "end": 8792
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8793,
    "end": 8799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8800,
    "end": 8801
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8802,
    "end": 8811
  },
  {
    "type": "Identifier",
    "value": "J28",
    "start": 8812,
    "end": 8815
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8816,
    "end": 8823
  },
  {
    "type": "Identifier",
    "value": "Both28",
    "start": 8824,
    "end": 8830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8831,
    "end": 8832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8832,
    "end": 8833
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8834,
    "end": 8838
  },
  {
    "type": "Identifier",
    "value": "Both28",
    "start": 8839,
    "end": 8845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8846,
    "end": 8847
  },
  {
    "type": "Identifier",
    "value": "C28",
    "start": 8848,
    "end": 8851
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8852,
    "end": 8853
  },
  {
    "type": "Identifier",
    "value": "D28",
    "start": 8854,
    "end": 8857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8857,
    "end": 8858
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8859,
    "end": 8868
  },
  {
    "type": "Identifier",
    "value": "C29",
    "start": 8869,
    "end": 8872
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8873,
    "end": 8880
  },
  {
    "type": "Identifier",
    "value": "J28",
    "start": 8881,
    "end": 8884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8885,
    "end": 8886
  },
  {
    "type": "Identifier",
    "value": "c29",
    "start": 8887,
    "end": 8890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8890,
    "end": 8891
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8892,
    "end": 8898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8899,
    "end": 8900
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8901,
    "end": 8910
  },
  {
    "type": "Identifier",
    "value": "D29",
    "start": 8911,
    "end": 8914
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8915,
    "end": 8922
  },
  {
    "type": "Identifier",
    "value": "J28",
    "start": 8923,
    "end": 8926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8927,
    "end": 8928
  },
  {
    "type": "Identifier",
    "value": "d29",
    "start": 8929,
    "end": 8932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8932,
    "end": 8933
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8934,
    "end": 8940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8941,
    "end": 8942
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8943,
    "end": 8952
  },
  {
    "type": "Identifier",
    "value": "J29",
    "start": 8953,
    "end": 8956
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8957,
    "end": 8964
  },
  {
    "type": "Identifier",
    "value": "Both29",
    "start": 8965,
    "end": 8971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8972,
    "end": 8973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8973,
    "end": 8974
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8975,
    "end": 8979
  },
  {
    "type": "Identifier",
    "value": "Both29",
    "start": 8980,
    "end": 8986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8987,
    "end": 8988
  },
  {
    "type": "Identifier",
    "value": "C29",
    "start": 8989,
    "end": 8992
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8993,
    "end": 8994
  },
  {
    "type": "Identifier",
    "value": "D29",
    "start": 8995,
    "end": 8998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8998,
    "end": 8999
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9000,
    "end": 9009
  },
  {
    "type": "Identifier",
    "value": "C30",
    "start": 9010,
    "end": 9013
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9014,
    "end": 9021
  },
  {
    "type": "Identifier",
    "value": "J29",
    "start": 9022,
    "end": 9025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9026,
    "end": 9027
  },
  {
    "type": "Identifier",
    "value": "c30",
    "start": 9028,
    "end": 9031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9031,
    "end": 9032
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9033,
    "end": 9039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9040,
    "end": 9041
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9042,
    "end": 9051
  },
  {
    "type": "Identifier",
    "value": "D30",
    "start": 9052,
    "end": 9055
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9056,
    "end": 9063
  },
  {
    "type": "Identifier",
    "value": "J29",
    "start": 9064,
    "end": 9067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9068,
    "end": 9069
  },
  {
    "type": "Identifier",
    "value": "d30",
    "start": 9070,
    "end": 9073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9073,
    "end": 9074
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9075,
    "end": 9081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9082,
    "end": 9083
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9084,
    "end": 9093
  },
  {
    "type": "Identifier",
    "value": "J30",
    "start": 9094,
    "end": 9097
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9098,
    "end": 9105
  },
  {
    "type": "Identifier",
    "value": "Both30",
    "start": 9106,
    "end": 9112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9113,
    "end": 9114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9114,
    "end": 9115
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9116,
    "end": 9120
  },
  {
    "type": "Identifier",
    "value": "Both30",
    "start": 9121,
    "end": 9127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9128,
    "end": 9129
  },
  {
    "type": "Identifier",
    "value": "C30",
    "start": 9130,
    "end": 9133
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 9134,
    "end": 9135
  },
  {
    "type": "Identifier",
    "value": "D30",
    "start": 9136,
    "end": 9139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9139,
    "end": 9140
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9141,
    "end": 9150
  },
  {
    "type": "Identifier",
    "value": "C31",
    "start": 9151,
    "end": 9154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9155,
    "end": 9162
  },
  {
    "type": "Identifier",
    "value": "J30",
    "start": 9163,
    "end": 9166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9167,
    "end": 9168
  },
  {
    "type": "Identifier",
    "value": "c31",
    "start": 9169,
    "end": 9172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9172,
    "end": 9173
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9174,
    "end": 9180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9181,
    "end": 9182
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9183,
    "end": 9192
  },
  {
    "type": "Identifier",
    "value": "D31",
    "start": 9193,
    "end": 9196
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9197,
    "end": 9204
  },
  {
    "type": "Identifier",
    "value": "J30",
    "start": 9205,
    "end": 9208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9209,
    "end": 9210
  },
  {
    "type": "Identifier",
    "value": "d31",
    "start": 9211,
    "end": 9214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9214,
    "end": 9215
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9216,
    "end": 9222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9223,
    "end": 9224
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9225,
    "end": 9234
  },
  {
    "type": "Identifier",
    "value": "J31",
    "start": 9235,
    "end": 9238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9239,
    "end": 9246
  },
  {
    "type": "Identifier",
    "value": "Both31",
    "start": 9247,
    "end": 9253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9254,
    "end": 9255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9255,
    "end": 9256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9257,
    "end": 9261
  },
  {
    "type": "Identifier",
    "value": "Both31",
    "start": 9262,
    "end": 9268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9269,
    "end": 9270
  },
  {
    "type": "Identifier",
    "value": "C31",
    "start": 9271,
    "end": 9274
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 9275,
    "end": 9276
  },
  {
    "type": "Identifier",
    "value": "D31",
    "start": 9277,
    "end": 9280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9280,
    "end": 9281
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9282,
    "end": 9291
  },
  {
    "type": "Identifier",
    "value": "C32",
    "start": 9292,
    "end": 9295
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9296,
    "end": 9303
  },
  {
    "type": "Identifier",
    "value": "J31",
    "start": 9304,
    "end": 9307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9308,
    "end": 9309
  },
  {
    "type": "Identifier",
    "value": "c32",
    "start": 9310,
    "end": 9313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9313,
    "end": 9314
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9315,
    "end": 9321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9322,
    "end": 9323
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9324,
    "end": 9333
  },
  {
    "type": "Identifier",
    "value": "D32",
    "start": 9334,
    "end": 9337
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9338,
    "end": 9345
  },
  {
    "type": "Identifier",
    "value": "J31",
    "start": 9346,
    "end": 9349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9350,
    "end": 9351
  },
  {
    "type": "Identifier",
    "value": "d32",
    "start": 9352,
    "end": 9355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9355,
    "end": 9356
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9357,
    "end": 9363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9364,
    "end": 9365
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9366,
    "end": 9375
  },
  {
    "type": "Identifier",
    "value": "J32",
    "start": 9376,
    "end": 9379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9380,
    "end": 9387
  },
  {
    "type": "Identifier",
    "value": "Both32",
    "start": 9388,
    "end": 9394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9395,
    "end": 9396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9396,
    "end": 9397
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9398,
    "end": 9402
  },
  {
    "type": "Identifier",
    "value": "Both32",
    "start": 9403,
    "end": 9409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9410,
    "end": 9411
  },
  {
    "type": "Identifier",
    "value": "C32",
    "start": 9412,
    "end": 9415
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 9416,
    "end": 9417
  },
  {
    "type": "Identifier",
    "value": "D32",
    "start": 9418,
    "end": 9421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9421,
    "end": 9422
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9423,
    "end": 9432
  },
  {
    "type": "Identifier",
    "value": "C33",
    "start": 9433,
    "end": 9436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9437,
    "end": 9444
  },
  {
    "type": "Identifier",
    "value": "J32",
    "start": 9445,
    "end": 9448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9449,
    "end": 9450
  },
  {
    "type": "Identifier",
    "value": "c33",
    "start": 9451,
    "end": 9454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9454,
    "end": 9455
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9456,
    "end": 9462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9463,
    "end": 9464
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9465,
    "end": 9474
  },
  {
    "type": "Identifier",
    "value": "D33",
    "start": 9475,
    "end": 9478
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9479,
    "end": 9486
  },
  {
    "type": "Identifier",
    "value": "J32",
    "start": 9487,
    "end": 9490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9491,
    "end": 9492
  },
  {
    "type": "Identifier",
    "value": "d33",
    "start": 9493,
    "end": 9496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9496,
    "end": 9497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9498,
    "end": 9504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9505,
    "end": 9506
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9507,
    "end": 9516
  },
  {
    "type": "Identifier",
    "value": "J33",
    "start": 9517,
    "end": 9520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9521,
    "end": 9528
  },
  {
    "type": "Identifier",
    "value": "Both33",
    "start": 9529,
    "end": 9535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9536,
    "end": 9537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9537,
    "end": 9538
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9539,
    "end": 9543
  },
  {
    "type": "Identifier",
    "value": "Both33",
    "start": 9544,
    "end": 9550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9551,
    "end": 9552
  },
  {
    "type": "Identifier",
    "value": "C33",
    "start": 9553,
    "end": 9556
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 9557,
    "end": 9558
  },
  {
    "type": "Identifier",
    "value": "D33",
    "start": 9559,
    "end": 9562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9562,
    "end": 9563
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9564,
    "end": 9573
  },
  {
    "type": "Identifier",
    "value": "C34",
    "start": 9574,
    "end": 9577
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9578,
    "end": 9585
  },
  {
    "type": "Identifier",
    "value": "J33",
    "start": 9586,
    "end": 9589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9590,
    "end": 9591
  },
  {
    "type": "Identifier",
    "value": "c34",
    "start": 9592,
    "end": 9595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9595,
    "end": 9596
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9597,
    "end": 9603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9604,
    "end": 9605
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9606,
    "end": 9615
  },
  {
    "type": "Identifier",
    "value": "D34",
    "start": 9616,
    "end": 9619
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9620,
    "end": 9627
  },
  {
    "type": "Identifier",
    "value": "J33",
    "start": 9628,
    "end": 9631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9632,
    "end": 9633
  },
  {
    "type": "Identifier",
    "value": "d34",
    "start": 9634,
    "end": 9637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9637,
    "end": 9638
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9639,
    "end": 9645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9646,
    "end": 9647
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9648,
    "end": 9657
  },
  {
    "type": "Identifier",
    "value": "J34",
    "start": 9658,
    "end": 9661
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9662,
    "end": 9669
  },
  {
    "type": "Identifier",
    "value": "Both34",
    "start": 9670,
    "end": 9676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9677,
    "end": 9678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9678,
    "end": 9679
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9680,
    "end": 9684
  },
  {
    "type": "Identifier",
    "value": "Both34",
    "start": 9685,
    "end": 9691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9692,
    "end": 9693
  },
  {
    "type": "Identifier",
    "value": "C34",
    "start": 9694,
    "end": 9697
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 9698,
    "end": 9699
  },
  {
    "type": "Identifier",
    "value": "D34",
    "start": 9700,
    "end": 9703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9703,
    "end": 9704
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9705,
    "end": 9714
  },
  {
    "type": "Identifier",
    "value": "C35",
    "start": 9715,
    "end": 9718
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9719,
    "end": 9726
  },
  {
    "type": "Identifier",
    "value": "J34",
    "start": 9727,
    "end": 9730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9731,
    "end": 9732
  },
  {
    "type": "Identifier",
    "value": "c35",
    "start": 9733,
    "end": 9736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9736,
    "end": 9737
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9738,
    "end": 9744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9745,
    "end": 9746
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9747,
    "end": 9756
  },
  {
    "type": "Identifier",
    "value": "D35",
    "start": 9757,
    "end": 9760
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9761,
    "end": 9768
  },
  {
    "type": "Identifier",
    "value": "J34",
    "start": 9769,
    "end": 9772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9773,
    "end": 9774
  },
  {
    "type": "Identifier",
    "value": "d35",
    "start": 9775,
    "end": 9778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9778,
    "end": 9779
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9780,
    "end": 9786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9787,
    "end": 9788
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9789,
    "end": 9798
  },
  {
    "type": "Identifier",
    "value": "J35",
    "start": 9799,
    "end": 9802
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9803,
    "end": 9810
  },
  {
    "type": "Identifier",
    "value": "Both35",
    "start": 9811,
    "end": 9817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9818,
    "end": 9819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9819,
    "end": 9820
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9821,
    "end": 9825
  },
  {
    "type": "Identifier",
    "value": "Both35",
    "start": 9826,
    "end": 9832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9833,
    "end": 9834
  },
  {
    "type": "Identifier",
    "value": "C35",
    "start": 9835,
    "end": 9838
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 9839,
    "end": 9840
  },
  {
    "type": "Identifier",
    "value": "D35",
    "start": 9841,
    "end": 9844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9844,
    "end": 9845
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9846,
    "end": 9855
  },
  {
    "type": "Identifier",
    "value": "C36",
    "start": 9856,
    "end": 9859
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9860,
    "end": 9867
  },
  {
    "type": "Identifier",
    "value": "J35",
    "start": 9868,
    "end": 9871
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9872,
    "end": 9873
  },
  {
    "type": "Identifier",
    "value": "c36",
    "start": 9874,
    "end": 9877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9877,
    "end": 9878
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9879,
    "end": 9885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9886,
    "end": 9887
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9888,
    "end": 9897
  },
  {
    "type": "Identifier",
    "value": "D36",
    "start": 9898,
    "end": 9901
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9902,
    "end": 9909
  },
  {
    "type": "Identifier",
    "value": "J35",
    "start": 9910,
    "end": 9913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9914,
    "end": 9915
  },
  {
    "type": "Identifier",
    "value": "d36",
    "start": 9916,
    "end": 9919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9919,
    "end": 9920
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9921,
    "end": 9927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9928,
    "end": 9929
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9930,
    "end": 9939
  },
  {
    "type": "Identifier",
    "value": "J36",
    "start": 9940,
    "end": 9943
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9944,
    "end": 9951
  },
  {
    "type": "Identifier",
    "value": "Both36",
    "start": 9952,
    "end": 9958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9959,
    "end": 9960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9960,
    "end": 9961
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9962,
    "end": 9966
  },
  {
    "type": "Identifier",
    "value": "Both36",
    "start": 9967,
    "end": 9973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9974,
    "end": 9975
  },
  {
    "type": "Identifier",
    "value": "C36",
    "start": 9976,
    "end": 9979
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 9980,
    "end": 9981
  },
  {
    "type": "Identifier",
    "value": "D36",
    "start": 9982,
    "end": 9985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9985,
    "end": 9986
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9987,
    "end": 9996
  },
  {
    "type": "Identifier",
    "value": "C37",
    "start": 9997,
    "end": 10000
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10001,
    "end": 10008
  },
  {
    "type": "Identifier",
    "value": "J36",
    "start": 10009,
    "end": 10012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10013,
    "end": 10014
  },
  {
    "type": "Identifier",
    "value": "c37",
    "start": 10015,
    "end": 10018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10018,
    "end": 10019
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10020,
    "end": 10026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10027,
    "end": 10028
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10029,
    "end": 10038
  },
  {
    "type": "Identifier",
    "value": "D37",
    "start": 10039,
    "end": 10042
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10043,
    "end": 10050
  },
  {
    "type": "Identifier",
    "value": "J36",
    "start": 10051,
    "end": 10054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10055,
    "end": 10056
  },
  {
    "type": "Identifier",
    "value": "d37",
    "start": 10057,
    "end": 10060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10060,
    "end": 10061
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10062,
    "end": 10068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10069,
    "end": 10070
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10071,
    "end": 10080
  },
  {
    "type": "Identifier",
    "value": "J37",
    "start": 10081,
    "end": 10084
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10085,
    "end": 10092
  },
  {
    "type": "Identifier",
    "value": "Both37",
    "start": 10093,
    "end": 10099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10100,
    "end": 10101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10101,
    "end": 10102
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10103,
    "end": 10107
  },
  {
    "type": "Identifier",
    "value": "Both37",
    "start": 10108,
    "end": 10114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10115,
    "end": 10116
  },
  {
    "type": "Identifier",
    "value": "C37",
    "start": 10117,
    "end": 10120
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 10121,
    "end": 10122
  },
  {
    "type": "Identifier",
    "value": "D37",
    "start": 10123,
    "end": 10126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10126,
    "end": 10127
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10128,
    "end": 10137
  },
  {
    "type": "Identifier",
    "value": "C38",
    "start": 10138,
    "end": 10141
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10142,
    "end": 10149
  },
  {
    "type": "Identifier",
    "value": "J37",
    "start": 10150,
    "end": 10153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10154,
    "end": 10155
  },
  {
    "type": "Identifier",
    "value": "c38",
    "start": 10156,
    "end": 10159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10159,
    "end": 10160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10161,
    "end": 10167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10168,
    "end": 10169
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10170,
    "end": 10179
  },
  {
    "type": "Identifier",
    "value": "D38",
    "start": 10180,
    "end": 10183
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10184,
    "end": 10191
  },
  {
    "type": "Identifier",
    "value": "J37",
    "start": 10192,
    "end": 10195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10196,
    "end": 10197
  },
  {
    "type": "Identifier",
    "value": "d38",
    "start": 10198,
    "end": 10201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10201,
    "end": 10202
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10203,
    "end": 10209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10210,
    "end": 10211
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10212,
    "end": 10221
  },
  {
    "type": "Identifier",
    "value": "J38",
    "start": 10222,
    "end": 10225
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10226,
    "end": 10233
  },
  {
    "type": "Identifier",
    "value": "Both38",
    "start": 10234,
    "end": 10240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10241,
    "end": 10242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10242,
    "end": 10243
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10244,
    "end": 10248
  },
  {
    "type": "Identifier",
    "value": "Both38",
    "start": 10249,
    "end": 10255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10256,
    "end": 10257
  },
  {
    "type": "Identifier",
    "value": "C38",
    "start": 10258,
    "end": 10261
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 10262,
    "end": 10263
  },
  {
    "type": "Identifier",
    "value": "D38",
    "start": 10264,
    "end": 10267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10267,
    "end": 10268
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10269,
    "end": 10278
  },
  {
    "type": "Identifier",
    "value": "C39",
    "start": 10279,
    "end": 10282
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10283,
    "end": 10290
  },
  {
    "type": "Identifier",
    "value": "J38",
    "start": 10291,
    "end": 10294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10295,
    "end": 10296
  },
  {
    "type": "Identifier",
    "value": "c39",
    "start": 10297,
    "end": 10300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10300,
    "end": 10301
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10302,
    "end": 10308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10309,
    "end": 10310
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10311,
    "end": 10320
  },
  {
    "type": "Identifier",
    "value": "D39",
    "start": 10321,
    "end": 10324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10325,
    "end": 10332
  },
  {
    "type": "Identifier",
    "value": "J38",
    "start": 10333,
    "end": 10336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10337,
    "end": 10338
  },
  {
    "type": "Identifier",
    "value": "d39",
    "start": 10339,
    "end": 10342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10342,
    "end": 10343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10344,
    "end": 10350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10351,
    "end": 10352
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10353,
    "end": 10362
  },
  {
    "type": "Identifier",
    "value": "J39",
    "start": 10363,
    "end": 10366
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10367,
    "end": 10374
  },
  {
    "type": "Identifier",
    "value": "Both39",
    "start": 10375,
    "end": 10381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10382,
    "end": 10383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10383,
    "end": 10384
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10385,
    "end": 10389
  },
  {
    "type": "Identifier",
    "value": "Both39",
    "start": 10390,
    "end": 10396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10397,
    "end": 10398
  },
  {
    "type": "Identifier",
    "value": "C39",
    "start": 10399,
    "end": 10402
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 10403,
    "end": 10404
  },
  {
    "type": "Identifier",
    "value": "D39",
    "start": 10405,
    "end": 10408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10408,
    "end": 10409
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10410,
    "end": 10419
  },
  {
    "type": "Identifier",
    "value": "C40",
    "start": 10420,
    "end": 10423
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10424,
    "end": 10431
  },
  {
    "type": "Identifier",
    "value": "J39",
    "start": 10432,
    "end": 10435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10436,
    "end": 10437
  },
  {
    "type": "Identifier",
    "value": "c40",
    "start": 10438,
    "end": 10441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10441,
    "end": 10442
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10443,
    "end": 10449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10450,
    "end": 10451
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10452,
    "end": 10461
  },
  {
    "type": "Identifier",
    "value": "D40",
    "start": 10462,
    "end": 10465
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10466,
    "end": 10473
  },
  {
    "type": "Identifier",
    "value": "J39",
    "start": 10474,
    "end": 10477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10478,
    "end": 10479
  },
  {
    "type": "Identifier",
    "value": "d40",
    "start": 10480,
    "end": 10483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10483,
    "end": 10484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10485,
    "end": 10491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10492,
    "end": 10493
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10494,
    "end": 10503
  },
  {
    "type": "Identifier",
    "value": "J40",
    "start": 10504,
    "end": 10507
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10508,
    "end": 10515
  },
  {
    "type": "Identifier",
    "value": "Both40",
    "start": 10516,
    "end": 10522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10523,
    "end": 10524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10524,
    "end": 10525
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 10526,
    "end": 10530
  },
  {
    "type": "Identifier",
    "value": "Both40",
    "start": 10531,
    "end": 10537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10538,
    "end": 10539
  },
  {
    "type": "Identifier",
    "value": "C40",
    "start": 10540,
    "end": 10543
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 10544,
    "end": 10545
  },
  {
    "type": "Identifier",
    "value": "D40",
    "start": 10546,
    "end": 10549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10549,
    "end": 10550
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 10552,
    "end": 10559
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 10560,
    "end": 10565
  },
  {
    "type": "Identifier",
    "value": "viaIntersections",
    "start": 10566,
    "end": 10582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10582,
    "end": 10583
  },
  {
    "type": "Identifier",
    "value": "J40",
    "start": 10584,
    "end": 10587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10587,
    "end": 10588
  },
  {
    "type": "Identifier",
    "value": "viaIntersections",
    "start": 10589,
    "end": 10605
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10605,
    "end": 10606
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 10606,
    "end": 10608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10608,
    "end": 10609
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10668,
    "end": 10677
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 10678,
    "end": 10682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10683,
    "end": 10684
  },
  {
    "type": "Identifier",
    "value": "leaf",
    "start": 10685,
    "end": 10689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10689,
    "end": 10690
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10691,
    "end": 10697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10698,
    "end": 10699
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10700,
    "end": 10709
  },
  {
    "type": "Identifier",
    "value": "Left",
    "start": 10710,
    "end": 10714
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10715,
    "end": 10722
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 10723,
    "end": 10727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10728,
    "end": 10729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10729,
    "end": 10730
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10731,
    "end": 10740
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 10741,
    "end": 10746
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10747,
    "end": 10754
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 10755,
    "end": 10759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10760,
    "end": 10761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10761,
    "end": 10762
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10763,
    "end": 10772
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 10773,
    "end": 10779
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10780,
    "end": 10787
  },
  {
    "type": "Identifier",
    "value": "Left",
    "start": 10788,
    "end": 10792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10792,
    "end": 10793
  },
  {
    "type": "Identifier",
    "value": "Right",
    "start": 10794,
    "end": 10799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10800,
    "end": 10801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10801,
    "end": 10802
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10803,
    "end": 10812
  },
  {
    "type": "Identifier",
    "value": "Cycle1",
    "start": 10813,
    "end": 10819
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10820,
    "end": 10827
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 10828,
    "end": 10834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10834,
    "end": 10835
  },
  {
    "type": "Identifier",
    "value": "Cycle2",
    "start": 10836,
    "end": 10842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10843,
    "end": 10844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10844,
    "end": 10845
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10846,
    "end": 10855
  },
  {
    "type": "Identifier",
    "value": "Cycle2",
    "start": 10856,
    "end": 10862
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10863,
    "end": 10870
  },
  {
    "type": "Identifier",
    "value": "Left",
    "start": 10871,
    "end": 10875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10875,
    "end": 10876
  },
  {
    "type": "Identifier",
    "value": "Cycle1",
    "start": 10877,
    "end": 10883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10884,
    "end": 10885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10885,
    "end": 10886
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10887,
    "end": 10896
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 10897,
    "end": 10901
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10902,
    "end": 10909
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 10910,
    "end": 10916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10916,
    "end": 10917
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 10918,
    "end": 10922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10923,
    "end": 10924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10924,
    "end": 10925
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 11008,
    "end": 11017
  },
  {
    "type": "Identifier",
    "value": "DefaultBase",
    "start": 11018,
    "end": 11029
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11029,
    "end": 11030
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11030,
    "end": 11031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11032,
    "end": 11033
  },
  {
    "type": "Identifier",
    "value": "DefaultDerived",
    "start": 11034,
    "end": 11048
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11048,
    "end": 11049
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11050,
    "end": 11057
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 11058,
    "end": 11064
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11065,
    "end": 11066
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 11067,
    "end": 11071
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11071,
    "end": 11072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11072,
    "end": 11073
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11074,
    "end": 11075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11076,
    "end": 11077
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 11078,
    "end": 11087
  },
  {
    "type": "Identifier",
    "value": "DefaultDerived",
    "start": 11088,
    "end": 11102
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11103,
    "end": 11110
  },
  {
    "type": "Identifier",
    "value": "DefaultBase",
    "start": 11111,
    "end": 11122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11123,
    "end": 11124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11124,
    "end": 11125
  }
]
```

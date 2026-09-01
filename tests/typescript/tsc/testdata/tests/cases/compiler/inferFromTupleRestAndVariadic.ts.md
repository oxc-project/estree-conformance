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
        "name": "SubTup",
        "optional": false,
        "typeAnnotation": null,
        "start": 365,
        "end": 371
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
              "start": 372,
              "end": 373
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 372,
            "end": 373
          }
        ],
        "start": 371,
        "end": 374
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
            "start": 377,
            "end": 378
          },
          "typeArguments": null,
          "start": 377,
          "end": 378
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 404
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 403,
                    "end": 404
                  },
                  "start": 397,
                  "end": 404
                },
                "start": 396,
                "end": 407
              },
              "start": 393,
              "end": 407
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 423
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 433,
                        "end": 436
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 438,
                        "end": 441
                      }
                    ],
                    "start": 432,
                    "end": 442
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 422,
                  "end": 442
                },
                "start": 416,
                "end": 442
              },
              "start": 413,
              "end": 442
            }
          ],
          "start": 387,
          "end": 444
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 448
          },
          "typeArguments": null,
          "start": 447,
          "end": 448
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 451,
          "end": 456
        },
        "start": 377,
        "end": 456
      },
      "declare": false,
      "start": 360,
      "end": 457
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Trigger",
        "optional": false,
        "typeAnnotation": null,
        "start": 463,
        "end": 470
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup",
          "optional": false,
          "typeAnnotation": null,
          "start": 473,
          "end": 479
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 481,
                    "end": 482
                  },
                  "start": 481,
                  "end": 482
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 484,
                    "end": 485
                  },
                  "start": 484,
                  "end": 485
                }
              ],
              "start": 480,
              "end": 486
            }
          ],
          "start": 479,
          "end": 487
        },
        "start": 473,
        "end": 487
      },
      "declare": false,
      "start": 458,
      "end": 488
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2",
        "optional": false,
        "typeAnnotation": null,
        "start": 536,
        "end": 543
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
              "start": 544,
              "end": 545
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 544,
            "end": 545
          }
        ],
        "start": 543,
        "end": 546
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
            "start": 549,
            "end": 550
          },
          "typeArguments": null,
          "start": 549,
          "end": 550
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 585,
                        "end": 588
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 590,
                        "end": 593
                      }
                    ],
                    "start": 584,
                    "end": 594
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 574,
                  "end": 594
                },
                "start": 568,
                "end": 594
              },
              "start": 565,
              "end": 594
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 611
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 610,
                    "end": 611
                  },
                  "start": 604,
                  "end": 611
                },
                "start": 603,
                "end": 614
              },
              "start": 600,
              "end": 614
            }
          ],
          "start": 559,
          "end": 617
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 620,
            "end": 621
          },
          "typeArguments": null,
          "start": 620,
          "end": 621
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 624,
          "end": 629
        },
        "start": 549,
        "end": 629
      },
      "declare": false,
      "start": 531,
      "end": 630
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Trigger2",
        "optional": false,
        "typeAnnotation": null,
        "start": 636,
        "end": 644
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2",
          "optional": false,
          "typeAnnotation": null,
          "start": 647,
          "end": 654
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 656,
                    "end": 657
                  },
                  "start": 656,
                  "end": 657
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 659,
                    "end": 660
                  },
                  "start": 659,
                  "end": 660
                }
              ],
              "start": 655,
              "end": 661
            }
          ],
          "start": 654,
          "end": 662
        },
        "start": 647,
        "end": 662
      },
      "declare": false,
      "start": 631,
      "end": 663
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Trigger3",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 743
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 752
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 754,
                    "end": 755
                  },
                  "start": 754,
                  "end": 755
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 757,
                    "end": 758
                  },
                  "start": 757,
                  "end": 758
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 760,
                    "end": 761
                  },
                  "start": 760,
                  "end": 761
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 763,
                    "end": 764
                  },
                  "start": 763,
                  "end": 764
                }
              ],
              "start": 753,
              "end": 765
            }
          ],
          "start": 752,
          "end": 766
        },
        "start": 746,
        "end": 766
      },
      "declare": false,
      "start": 730,
      "end": 767
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Trigger4",
        "optional": false,
        "typeAnnotation": null,
        "start": 773,
        "end": 781
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2",
          "optional": false,
          "typeAnnotation": null,
          "start": 784,
          "end": 791
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 793,
                    "end": 794
                  },
                  "start": 793,
                  "end": 794
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 796,
                    "end": 797
                  },
                  "start": 796,
                  "end": 797
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 799,
                    "end": 800
                  },
                  "start": 799,
                  "end": 800
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 802,
                    "end": 803
                  },
                  "start": 802,
                  "end": 803
                }
              ],
              "start": 792,
              "end": 804
            }
          ],
          "start": 791,
          "end": 805
        },
        "start": 784,
        "end": 805
      },
      "declare": false,
      "start": 768,
      "end": 806
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 360,
  "end": 806
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 360,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "SubTup",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 397,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 416,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 424,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 458,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "Trigger",
    "start": 463,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "SubTup",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Numeric",
    "value": "2",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 531,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "SubTup2",
    "start": 536,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 551,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 565,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 568,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 576,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 604,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 624,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 631,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "Trigger2",
    "start": 636,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "SubTup2",
    "start": 647,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 655,
    "end": 656
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 730,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "Trigger3",
    "start": 735,
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
    "value": "SubTup",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 753,
    "end": 754
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 761,
    "end": 762
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 763,
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
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 768,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "Trigger4",
    "start": 773,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "SubTup2",
    "start": 784,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 792,
    "end": 793
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  }
]
```

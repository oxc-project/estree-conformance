__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 315
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 319,
                "end": 320
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 322,
                "end": 323
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 325,
                "end": 326
              }
            ],
            "start": 318,
            "end": 327
          },
          "definite": false,
          "start": 310,
          "end": 327
        }
      ],
      "declare": false,
      "start": 306,
      "end": 328
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
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 339
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 343,
                "end": 347
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 349,
                "end": 350
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 352,
                "end": 353
              }
            ],
            "start": 342,
            "end": 354
          },
          "definite": false,
          "start": 333,
          "end": 354
        }
      ],
      "declare": false,
      "start": 329,
      "end": 355
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
            "name": "tup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 435,
                    "end": 441
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 443,
                    "end": 449
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 451,
                    "end": 457
                  }
                ],
                "start": 434,
                "end": 458
              },
              "start": 432,
              "end": 458
            },
            "start": 429,
            "end": 458
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 462,
                "end": 463
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 465,
                "end": 466
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 468,
                "end": 469
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 471,
                "end": 472
              }
            ],
            "start": 461,
            "end": 473
          },
          "definite": false,
          "start": 429,
          "end": 473
        }
      ],
      "declare": false,
      "start": 425,
      "end": 474
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
            "name": "tup1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 486,
                        "end": 492
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 493,
                        "end": 499
                      }
                    ],
                    "start": 486,
                    "end": 499
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 501,
                        "end": 507
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 508,
                        "end": 514
                      }
                    ],
                    "start": 501,
                    "end": 514
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 516,
                        "end": 522
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 523,
                        "end": 529
                      }
                    ],
                    "start": 516,
                    "end": 529
                  }
                ],
                "start": 485,
                "end": 530
              },
              "start": 483,
              "end": 530
            },
            "start": 479,
            "end": 530
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 534,
                "end": 535
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 537,
                "end": 538
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 540,
                "end": 541
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 543,
                "end": 551
              }
            ],
            "start": 533,
            "end": 552
          },
          "definite": false,
          "start": 479,
          "end": 552
        }
      ],
      "declare": false,
      "start": 475,
      "end": 553
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
            "name": "tup2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 565,
                    "end": 571
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 573,
                    "end": 579
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 581,
                    "end": 587
                  }
                ],
                "start": 564,
                "end": 588
              },
              "start": 562,
              "end": 588
            },
            "start": 558,
            "end": 588
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 592,
                "end": 593
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 595,
                "end": 596
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 598,
                "end": 599
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 601,
                "end": 609
              }
            ],
            "start": 591,
            "end": 610
          },
          "definite": false,
          "start": 558,
          "end": 610
        }
      ],
      "declare": false,
      "start": 554,
      "end": 611
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
            "name": "spr",
            "optional": false,
            "typeAnnotation": null,
            "start": 835,
            "end": 838
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 842,
                "end": 843
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 845,
                "end": 846
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 848,
                "end": 849
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 854,
                  "end": 859
                },
                "start": 851,
                "end": 859
              }
            ],
            "start": 841,
            "end": 860
          },
          "definite": false,
          "start": 835,
          "end": 860
        }
      ],
      "declare": false,
      "start": 831,
      "end": 861
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
            "name": "spr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 870
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 874,
                "end": 875
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 877,
                "end": 878
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 880,
                "end": 881
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 889
                },
                "start": 883,
                "end": 889
              }
            ],
            "start": 873,
            "end": 890
          },
          "definite": false,
          "start": 866,
          "end": 890
        }
      ],
      "declare": false,
      "start": 862,
      "end": 891
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
            "name": "spr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 902,
                    "end": 908
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 910,
                    "end": 916
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 918,
                    "end": 924
                  }
                ],
                "start": 901,
                "end": 925
              },
              "start": 900,
              "end": 925
            },
            "start": 896,
            "end": 925
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 929,
                "end": 930
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 932,
                "end": 933
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 935,
                "end": 936
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 944
                },
                "start": 938,
                "end": 944
              }
            ],
            "start": 928,
            "end": 945
          },
          "definite": false,
          "start": 896,
          "end": 945
        }
      ],
      "declare": false,
      "start": 892,
      "end": 946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 306,
  "end": 956
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "array1",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 425,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "tup",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 475,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "tup1",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 501,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 516,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Numeric",
    "value": "1",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 538,
    "end": 539
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 543,
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
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "tup2",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 591,
    "end": 592
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 593,
    "end": 594
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 601,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 831,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "spr",
    "start": 835,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 841,
    "end": 842
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 843,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 846,
    "end": 847
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 851,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 854,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 862,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "spr1",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 873,
    "end": 874
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 875,
    "end": 876
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 878,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 883,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "tup",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 892,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "spr2",
    "start": 896,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 902,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 910,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 918,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 928,
    "end": 929
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 938,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "tup",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  }
]
```
